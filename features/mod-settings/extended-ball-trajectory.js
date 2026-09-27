var extPathSpriteFirstOffset = 2840;
var extPathSpriteSecondOffset = 2848;
var tileMapWidthOffset = LogicMemory.LogicMemory.offset(196);
var tileMapHeightOffset = LogicMemory.LogicMemory.offset(200);
var tileMapArrayOffset = LogicMemory.LogicMemory.offset(32);
var tileCollisionLowOffset = LogicMemory.LogicMemory.offset(16);
var tileCollisionHighOffset = LogicMemory.LogicMemory.offset(20);
var pathSpriteVisibleOffset = LogicMemory.LogicMemory.offset(8);
var pathBufferEndOffset = 8;
var pathBufferCapacityOffset = 16;
var pointDataYOffset = 4;
var pointDataZOffset = 8;
var pointDataX2Offset = 12;
var pointDataY2Offset = 16;
var pointDataZ2Offset = 20;
var TILE_SIZE = 300;
var SUBTILE_SIZE = 100;
var SEGMENT_OVERLAP = 60;
var MAX_BOUNCES = 3;
var MIN_REMAINING_RANGE = 10;
var MIN_DIRECTION_LENGTH = 1;
var RAYCAST_STEP = 20;
var RAYCAST_BINARY_SEARCH_ITERATIONS = 8;
var PATH_POINT_BYTES = 12;
var PATH_BUFFER_BYTES = 24;
var MULTI_SEGMENT_PATH_DATA_BYTES = 48;
var SINGLE_SEGMENT_PATH_DATA_BYTES = 24;
var SUBTILES_PER_TILE = 3;
var COLLISION_BIT_OVERFLOW_THRESHOLD = 32;
var PATH_SPRITE_LINE_WIDTH = 100;
var DEFAULT_BOUNCE_DISTANCE_ADD = 1500;
var FALLBACK_MAX_EXTEND_RANGE = 3000;
var MAX_EXTEND_RANGE_RATIO = 0.5;
var MIN_VALID_SEGMENT_DISTANCE = 1;

class TrajectoryExtender {
    static extend(battleScreen, bouncePoints, updateShape, bounceDistanceAdd, totalRange) {
        if (bounceDistanceAdd === undefined) {
            bounceDistanceAdd = DEFAULT_BOUNCE_DISTANCE_ADD;
        }
        if (totalRange === undefined) {
            totalRange = 0;
        }
        var tileMap = LogicBattleModeClient.LogicBattleModeClient.getTileMap();
        if (tileMap.isNull()) {
            return null;
        }
        var pointCount = bouncePoints.length;
        var lastPoint = bouncePoints[pointCount - 1];
        var previousPoint = bouncePoints[pointCount - 2];
        var totalPathLength = this.computeTotalPathLength(bouncePoints);
        var maxPathLength = Math.max(totalRange, totalPathLength);
        var maxExtendRange;
        if (totalRange > 0) {
            maxExtendRange = totalRange * MAX_EXTEND_RANGE_RATIO;
        } else {
            maxExtendRange = FALLBACK_MAX_EXTEND_RANGE;
        }
        var effectiveRange = Math.min(maxPathLength - totalPathLength + bounceDistanceAdd, maxExtendRange);
        if (effectiveRange < MIN_REMAINING_RANGE) {
            return null;
        }
        var segments = this.computeBounceSegments(tileMap, lastPoint, previousPoint, effectiveRange);
        if (segments.length === 0) {
            return null;
        }
        var lastZ = lastPoint.z;
        var pathSprite1 = battleScreen.add(extPathSpriteFirstOffset).readPointer();
        var pathSprite2 = battleScreen.add(extPathSpriteSecondOffset).readPointer();
        var pathSprite1Valid = !pathSprite1.isNull();
        var pathSprite2Valid = !pathSprite2.isNull();
        if (!pathSprite1Valid) {
            if (!pathSprite2Valid) {
                return null;
            }
        }
        if (segments.length === 1) {
            if (pathSprite1Valid) {
                this.drawSingleSegment(pathSprite1, segments[0], lastZ, updateShape);
            }
        } else {
            if (pathSprite1Valid) {
                this.drawMultiSegmentPath(pathSprite1, segments.slice(0, -1), lastZ, updateShape);
            }
            if (pathSprite2Valid) {
                this.drawSingleSegment(pathSprite2, segments[segments.length - 1], lastZ, updateShape);
            }
        }
        var finalSegment = segments[segments.length - 1];
        return { endX: finalSegment.endX, endY: finalSegment.endY };
    }

    static computeTotalPathLength(bouncePoints) {
        var totalLength = 0;
        for (var i = 1; i < bouncePoints.length; i++) {
            var segmentDistance = this.distance(bouncePoints[i - 1].x, bouncePoints[i - 1].y, bouncePoints[i].x, bouncePoints[i].y);
            if (segmentDistance > MIN_VALID_SEGMENT_DISTANCE) {
                totalLength = totalLength + segmentDistance;
            }
        }
        return totalLength;
    }

    static computeBounceSegments(tileMap, startPoint, previousPoint, initialRange) {
        var currentX = startPoint.x;
        var currentY = startPoint.y;
        var directionX = startPoint.x - previousPoint.x;
        var directionY = startPoint.y - previousPoint.y;
        var initialLength = Math.sqrt(directionX * directionX + directionY * directionY);
        var previousNormalizedX = directionX / initialLength;
        var previousNormalizedY = directionY / initialLength;
        var remainingRange = initialRange;
        var segments = [];
        var bounce = 0;
        while (bounce < MAX_BOUNCES) {
            var directionLength = Math.sqrt(directionX * directionX + directionY * directionY);
            if (directionLength < MIN_DIRECTION_LENGTH || remainingRange < MIN_REMAINING_RANGE) {
                break;
            }
            var normalizedX = directionX / directionLength;
            var normalizedY = directionY / directionLength;
            var endX = currentX + normalizedX * remainingRange;
            var endY = currentY + normalizedY * remainingRange;
            var hitWall = false;
            var wallHit = this.raycast(tileMap, currentX, currentY, normalizedX, normalizedY, remainingRange);
            if (wallHit) {
                hitWall = true;
                endX = wallHit.x;
                endY = wallHit.y;
                previousNormalizedX = normalizedX;
                previousNormalizedY = normalizedY;
                if (wallHit.flipX) {
                    directionX = -directionX;
                } else {
                    directionY = -directionY;
                }
            }
            var segmentLength = this.distance(currentX, currentY, endX, endY);
            var overlapStartX = currentX - previousNormalizedX * SEGMENT_OVERLAP;
            var overlapStartY = currentY - previousNormalizedY * SEGMENT_OVERLAP;
            segments.push({ startX: overlapStartX, startY: overlapStartY, endX: endX, endY: endY, hitWall: hitWall });
            if (hitWall) {
                remainingRange = remainingRange - segmentLength;
                currentX = endX;
                currentY = endY;
                bounce++;
            } else {
                return segments;
            }
        }
        return segments;
    }

    static drawSingleSegment(pathSprite, segment, z, updateShape) {
        this.writeSingleSegmentBuffer(this.singleSegmentPathData, this.singleSegmentPathBuffer, segment, z);
        updateShape(pathSprite, this.singleSegmentPathBuffer, PATH_SPRITE_LINE_WIDTH, 0);
    }

    static drawMultiSegmentPath(pathSprite, segments, z, updateShape) {
        var pointIndex = 0;
        for (var i = 0; i < segments.length; i++) {
            var segment = segments[i];
            if (i === 0) {
                this.writePathPoint(this.multiSegmentPathData, pointIndex++, segment.startX, segment.startY, z);
            }
            this.writePathPoint(this.multiSegmentPathData, pointIndex++, segment.endX, segment.endY, z);
        }
        var pathDataEnd = this.multiSegmentPathData.add(pointIndex * PATH_POINT_BYTES);
        this.multiSegmentPathBuffer.writePointer(this.multiSegmentPathData);
        this.multiSegmentPathBuffer.add(pathBufferEndOffset).writePointer(pathDataEnd);
        this.multiSegmentPathBuffer.add(pathBufferCapacityOffset).writePointer(pathDataEnd);
        updateShape(pathSprite, this.multiSegmentPathBuffer, PATH_SPRITE_LINE_WIDTH, 0);
    }

    static writePathPoint(buffer, pointIndex, x, y, z) {
        var offset = pointIndex * PATH_POINT_BYTES;
        buffer.add(offset).writeFloat(x);
        buffer.add(offset + 4).writeFloat(y);
        buffer.add(offset + pointDataZOffset).writeFloat(z);
    }

    static writeSingleSegmentBuffer(pathData, pathBuffer, segment, z) {
        pathData.writeFloat(segment.startX);
        pathData.add(pointDataYOffset).writeFloat(segment.startY);
        pathData.add(pointDataZOffset).writeFloat(z);
        pathData.add(pointDataX2Offset).writeFloat(segment.endX);
        pathData.add(pointDataY2Offset).writeFloat(segment.endY);
        pathData.add(pointDataZ2Offset).writeFloat(z);
        var dataEnd = pathData.add(PATH_POINT_BYTES * 2);
        pathBuffer.writePointer(pathData);
        pathBuffer.add(pathBufferEndOffset).writePointer(dataEnd);
    }

    static distance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    static isTileBlocked(tileMap, gameX, gameY) {
        try {
            var tileX = Math.floor(gameX / TILE_SIZE);
            var tileY = Math.floor(gameY / TILE_SIZE);
            var mapWidthTiles = tileMap.add(tileMapWidthOffset).readS32();
            var mapHeightTiles = tileMap.add(tileMapHeightOffset).readS32();
            if (tileX < 0 || tileY < 0 || tileX >= mapWidthTiles || tileY >= mapHeightTiles) {
                return true;
            }
            var tile = tileMap.add(tileMapArrayOffset).readPointer().add((tileX + mapWidthTiles * tileY) * 8).readPointer();
            if (tile.isNull()) {
                return true;
            }
            var subtileX = Math.floor((gameX % TILE_SIZE) / SUBTILE_SIZE);
            var subtileY = Math.floor((gameY % TILE_SIZE) / SUBTILE_SIZE);
            var collisionBitIndex = subtileX + SUBTILES_PER_TILE * subtileY;
            var collisionLow = tile.add(tileCollisionLowOffset).readU32();
            var collisionHigh = tile.add(tileCollisionHighOffset).readU32();
            if (collisionBitIndex < COLLISION_BIT_OVERFLOW_THRESHOLD) {
                return ((collisionLow >>> collisionBitIndex) & 1) !== 0;
            }
            return ((collisionHigh >>> (collisionBitIndex - COLLISION_BIT_OVERFLOW_THRESHOLD)) & 1) !== 0;
        } catch (e) {
            return false;
        }
    }

    static raycast(tileMap, startX, startY, normalizedX, normalizedY, maxDistance) {
        var stepCount = Math.ceil(maxDistance / RAYCAST_STEP);
        for (var stepIndex = 1; stepIndex <= stepCount; stepIndex++) {
            var distanceFromStart = Math.min(stepIndex * RAYCAST_STEP, maxDistance);
            var probeX = startX + normalizedX * distanceFromStart;
            var probeY = startY + normalizedY * distanceFromStart;
            if (this.isTileBlocked(tileMap, probeX, probeY)) {
                var lowDistance = distanceFromStart - RAYCAST_STEP;
                var highDistance = distanceFromStart;
                for (var i = 0; i < RAYCAST_BINARY_SEARCH_ITERATIONS; i++) {
                    var midDistance = (lowDistance + highDistance) / 2;
                    var midX = startX + normalizedX * midDistance;
                    var midY = startY + normalizedY * midDistance;
                    if (this.isTileBlocked(tileMap, midX, midY)) {
                        highDistance = midDistance;
                    } else {
                        lowDistance = midDistance;
                    }
                }
                var wallDistance = (lowDistance + highDistance) / 2;
                var preWallX = startX + normalizedX * lowDistance;
                var preWallY = startY + normalizedY * lowDistance;
                var blockedHorizontal = this.isTileBlocked(tileMap, probeX, preWallY);
                var blockedVertical = this.isTileBlocked(tileMap, preWallX, probeY);
                var flipX;
                if (blockedHorizontal) {
                    flipX = !blockedVertical;
                }
                if (blockedHorizontal === blockedVertical) {
                    flipX = Math.abs(normalizedX) > Math.abs(normalizedY);
                }
                return { x: startX + normalizedX * wallDistance, y: startY + normalizedY * wallDistance, flipX: flipX };
            }
        }
        return null;
    }
}

TrajectoryExtender.multiSegmentPathData = Libc.Libc.malloc(MULTI_SEGMENT_PATH_DATA_BYTES);
TrajectoryExtender.multiSegmentPathBuffer = Libc.Libc.malloc(PATH_BUFFER_BYTES);
TrajectoryExtender.singleSegmentPathData = Libc.Libc.malloc(SINGLE_SEGMENT_PATH_DATA_BYTES);
TrajectoryExtender.singleSegmentPathBuffer = Libc.Libc.malloc(PATH_BUFFER_BYTES);
