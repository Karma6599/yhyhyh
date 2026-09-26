//============================================================================//
// MOD FEATURE: Extended ball trajectory
// In-game name: "Extended ball trajectory"  (TID: ExtendedTrajectory_name)
// Description: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ExtendedTrajectory  (default false)
// Implementation below:
// Note: Rendering hook in BattleScreen (7835).
//============================================================================//

// --------------------- MODULE 5003 — TrajectoryExtender ---------------------


// ============================================================ //
// webpack module 5003  —  TrajectoryExtender
// exports: TrajectoryExtender
// deps: 1588 (LogicMemory), 1978 (Libc), 5523 (LogicBattleModeClient)
// ============================================================ //

__webpack_modules__[5003] = function TrajectoryExtender_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, LogicMemory, LogicBattleModeClient, extPathSpriteFirstOffset, extPathSpriteSecondOffset, tileMapWidthOffset, tileMapHeightOffset, tileMapArrayOffset, tileCollisionLowOffset, tileCollisionHighOffset, pathSpriteVisibleOffset, pathBufferEndOffset, pathBufferCapacityOffset, pointDataYOffset, pointDataZOffset, pointDataX2Offset, pointDataY2Offset, pointDataZ2Offset, TILE_SIZE, SUBTILE_SIZE, SEGMENT_OVERLAP, MAX_BOUNCES, MIN_REMAINING_RANGE, MIN_DIRECTION_LENGTH, RAYCAST_STEP, RAYCAST_BINARY_SEARCH_ITERATIONS, PATH_POINT_BYTES, PATH_BUFFER_BYTES, MULTI_SEGMENT_PATH_DATA_BYTES, SINGLE_SEGMENT_PATH_DATA_BYTES, SUBTILES_PER_TILE, COLLISION_BIT_OVERFLOW_THRESHOLD, PATH_SPRITE_LINE_WIDTH, DEFAULT_BOUNCE_DISTANCE_ADD, FALLBACK_MAX_EXTEND_RANGE, MAX_EXTEND_RANGE_RATIO, MIN_VALID_SEGMENT_DISTANCE, TrajectoryExtender, <class_fields_init>, TrajectoryExtender;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TrajectoryExtender = undefined;
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicBattleModeClient = __webpack_require__(5523);
        extPathSpriteFirstOffset = 2840;
        extPathSpriteSecondOffset = 2848;
        tileMapWidthOffset = ((LogicMemory).LogicMemory).offset(196);
        tileMapHeightOffset = ((LogicMemory).LogicMemory).offset(200);
        tileMapArrayOffset = ((LogicMemory).LogicMemory).offset(32);
        tileCollisionLowOffset = ((LogicMemory).LogicMemory).offset(16);
        tileCollisionHighOffset = ((LogicMemory).LogicMemory).offset(20);
        pathSpriteVisibleOffset = ((LogicMemory).LogicMemory).offset(8);
        pathBufferEndOffset = 8;
        pathBufferCapacityOffset = 16;
        pointDataYOffset = 4;
        pointDataZOffset = 8;
        pointDataX2Offset = 12;
        pointDataY2Offset = 16;
        pointDataZ2Offset = 20;
        TILE_SIZE = 300;
        SUBTILE_SIZE = 100;
        SEGMENT_OVERLAP = 60;
        MAX_BOUNCES = 3;
        MIN_REMAINING_RANGE = 10;
        MIN_DIRECTION_LENGTH = 1;
        RAYCAST_STEP = 20;
        RAYCAST_BINARY_SEARCH_ITERATIONS = 8;
        PATH_POINT_BYTES = 12;
        PATH_BUFFER_BYTES = 24;
        MULTI_SEGMENT_PATH_DATA_BYTES = 48;
        SINGLE_SEGMENT_PATH_DATA_BYTES = 24;
        SUBTILES_PER_TILE = 3;
        COLLISION_BIT_OVERFLOW_THRESHOLD = 32;
        PATH_SPRITE_LINE_WIDTH = 100;
        DEFAULT_BOUNCE_DISTANCE_ADD = 1500;
        FALLBACK_MAX_EXTEND_RANGE = 3000;
        MAX_EXTEND_RANGE_RATIO = 0.5;
        MIN_VALID_SEGMENT_DISTANCE = 1;
        <class_fields_init> = undefined;
        TrajectoryExtender;
        class TrajectoryExtender {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xaa45d (open) */
}
            extend (battleScreen, bouncePoints, updateShape) {
    var bounceDistanceAdd, totalRange, battleScreen, bouncePoints, updateShape, bounceDistanceAdd, totalRange, tileMap, pointCount, lastPoint, previousPoint, totalPathLength, effectiveRange, maxExtendRange, remainingRange, segments, lastZ, pathSprite1, pathSprite2, pathSprite1Valid, pathSprite2Valid, finalSegment;
        pathSprite2Valid = this;
        bounceDistanceAdd = battleScreen;
        totalRange = bouncePoints;
        battleScreen = updateShape;
        if (((bounceDistanceAdd) === undefined)) {
            bouncePoints = bounceDistanceAdd = DEFAULT_BOUNCE_DISTANCE_ADD;
        } /* if 0xa95ee */
        if (((totalRange) === undefined)) {
            updateShape = totalRange = 0;
        } /* if 0xa95fb */
        bounceDistanceAdd = ((LogicBattleModeClient).LogicBattleModeClient).getTileMap();
        if ((bounceDistanceAdd).isNull()) {
            return null;
        } /* if 0xa964b */
        totalRange = bouncePoints.length;
        tileMap = bouncePoints[(totalRange - 1)];
        pointCount = bouncePoints[(totalRange - 2)];
        lastPoint = (pathSprite2Valid).computeTotalPathLength(bouncePoints);
        previousPoint = (Math).max(totalRange, lastPoint);
        if ((totalRange > 0)) {
        } /* if 0xa9693 */
        /* jump -> 0xa9696 */
        totalPathLength = FALLBACK_MAX_EXTEND_RANGE;
        effectiveRange = (Math).min(((previousPoint - lastPoint) + bounceDistanceAdd), totalPathLength);
        if ((effectiveRange < MIN_REMAINING_RANGE)) {
            return null;
        } /* if 0xa96be */
        maxExtendRange = (pathSprite2Valid).computeBounceSegments(bounceDistanceAdd, tileMap, pointCount, effectiveRange);
        if ((maxExtendRange.length === 0)) {
            return null;
        } /* if 0xa96e0 */
        remainingRange = (tileMap).z;
        segments = ((battleScreen).add(extPathSpriteFirstOffset)).readPointer();
        lastZ = ((battleScreen).add(extPathSpriteSecondOffset)).readPointer();
        pathSprite1 = (!(segments).isNull());
        pathSprite2 = (!(lastZ).isNull());
        if ((!pathSprite1)) {
            if ((!pathSprite2)) {
                return null;
            } /* if 0xa9740 */
        } /* if 0xa9740 */
        if ((maxExtendRange.length === 1)) {
            if (pathSprite1) {
                (pathSprite2Valid).drawSingleSegment(segments, maxExtendRange[0], remainingRange, updateShape);
            } /* if 0xa97ab */
        } /* if 0xa9766 */
        /* jump -> 0xa97ab */
        if (pathSprite1) {
            (pathSprite2Valid).drawMultiSegmentPath(segments, (maxExtendRange).slice(0, -1), remainingRange, updateShape);
        } /* if 0xa978a */
        if (pathSprite2) {
            (pathSprite2Valid).drawSingleSegment(lastZ, maxExtendRange[(maxExtendRange.length - 1)], remainingRange, updateShape);
        } /* if 0xa97ab */
        pathSprite1Valid = maxExtendRange[(maxExtendRange.length - 1)];
        return { endX: (pathSprite1Valid).endX, endY: (pathSprite1Valid).endY };
}
            computeTotalPathLength (bouncePoints) {
    var totalLength, i, segmentDistance;
        totalLength = 0;
        i = 1;
        while ((i < bouncePoints.length)) {
            segmentDistance = (this).distance((bouncePoints[(i - 1)]).x, (bouncePoints[(i - 1)]).y, (bouncePoints[i]).x, (bouncePoints[i]).y);
            if ((segmentDistance > MIN_VALID_SEGMENT_DISTANCE)) {
                totalLength = (totalLength + segmentDistance);
            } /* if 0xa9889 */
            i = ((i) + 1);
            (i++);
        } /* while 0xa9893 */
        return totalLength;
}
            computeBounceSegments (tileMap, startPoint, previousPoint, initialRange) {
    var currentX, currentY, directionX, directionY, initialLength, previousNormalizedX, previousNormalizedY, remainingRange, segments, bounce, directionLength, normalizedX, normalizedY, endX, endY, hitWall, wallHit, segmentLength, overlapStartX, overlapStartY;
        currentX = (startPoint).x;
        currentY = (startPoint).y;
        directionX = ((startPoint).x - (previousPoint).x);
        directionY = ((startPoint).y - (previousPoint).y);
        initialLength = (Math).sqrt(((directionX * directionX) + (directionY * directionY)));
        previousNormalizedX = (directionX / initialLength);
        previousNormalizedY = (directionY / initialLength);
        remainingRange = initialRange;
        segments = [];
        bounce = 0;
        while ((bounce < MAX_BOUNCES)) {
            directionLength = (Math).sqrt(((directionX * directionX) + (directionY * directionY)));
            if (!(directionLength < MIN_DIRECTION_LENGTH)) {
                if (!(remainingRange < MIN_REMAINING_RANGE)) {
                    normalizedX = (directionX / directionLength);
                    normalizedY = (directionY / directionLength);
                    endX = (currentX + (normalizedX * remainingRange));
                    endY = (currentY + (normalizedY * remainingRange));
                    hitWall = false;
                    wallHit = (this).raycast(tileMap, currentX, currentY, normalizedX, normalizedY, remainingRange);
                    if (wallHit) {
                        hitWall = true;
                        endX = (wallHit).x;
                        endY = (wallHit).y;
                        previousNormalizedX = normalizedX;
                        previousNormalizedY = normalizedY;
                        if ((wallHit).flipX) {
                            directionX = (-directionX);
                        } /* if 0xa9ad2 */
                    } /* if 0xa9adb */
                    /* jump -> 0xa9adb */
                    directionY = (-directionY);
                    segmentLength = (this).distance(currentX, currentY, endX, endY);
                    overlapStartX = (currentX - (previousNormalizedX * SEGMENT_OVERLAP));
                    overlapStartY = (currentY - (previousNormalizedY * SEGMENT_OVERLAP));
                    (segments).push({ startX: overlapStartX, startY: overlapStartY, endX: endX, endY: endY, hitWall: hitWall });
                    if (!(!hitWall)) {
                        remainingRange = (remainingRange - segmentLength);
                        currentX = endX;
                        currentY = endY;
                        bounce = ((bounce) + 1);
                        (bounce++);
                    } /* if 0xa9b6f */
                    return segments;
                } /* if 0xa9b72 (open) */
            } /* if 0xa9a38 (open) */
        } /* while 0xa9b72 (open) */
}
            drawSingleSegment (pathSprite, segment, z, updateShape) {
        (this).writeSingleSegmentBuffer((this).singleSegmentPathData, (this).singleSegmentPathBuffer, segment, z);
        updateShape(pathSprite, (this).singleSegmentPathBuffer, PATH_SPRITE_LINE_WIDTH, 0);
        return;
}
            drawMultiSegmentPath (pathSprite, segments, z, updateShape) {
    var pointIndex, i, segment, pathDataEnd;
        pointIndex = 0;
        i = 0;
        while ((i < segments.length)) {
            segment = segments[i];
            if ((i === 0)) {
                pointIndex = ((pointIndex) + 1);
                (this).writePathPoint((this).multiSegmentPathData, (pointIndex++), (segment).startX, (segment).startY, z);
            } /* if 0xa9cc3 */
            pointIndex = ((pointIndex) + 1);
            (this).writePathPoint((this).multiSegmentPathData, (pointIndex++), (segment).endX, (segment).endY, z);
            i = ((i) + 1);
            (i++);
        } /* while 0xa9cf7 */
        pathDataEnd = ((this).multiSegmentPathData).add((pointIndex * PATH_POINT_BYTES));
        ((this).multiSegmentPathBuffer).writePointer((this).multiSegmentPathData);
        (((this).multiSegmentPathBuffer).add(pathBufferEndOffset)).writePointer(pathDataEnd);
        (((this).multiSegmentPathBuffer).add(pathBufferCapacityOffset)).writePointer(pathDataEnd);
        updateShape(pathSprite, (this).multiSegmentPathBuffer, PATH_SPRITE_LINE_WIDTH, 0);
        return;
}
            writePathPoint (buffer, pointIndex, x, y, z) {
    var offset;
        offset = (pointIndex * PATH_POINT_BYTES);
        ((buffer).add(offset)).writeFloat(x);
        ((buffer).add((offset + 4))).writeFloat(y);
        return;
}
            writeSingleSegmentBuffer (pathData, pathBuffer, segment, z) {
    var dataEnd;
        (pathData).writeFloat((segment).startX);
        ((pathData).add(pointDataYOffset)).writeFloat((segment).startY);
        ((pathData).add(pointDataZOffset)).writeFloat(z);
        ((pathData).add(pointDataX2Offset)).writeFloat((segment).endX);
        ((pathData).add(pointDataY2Offset)).writeFloat((segment).endY);
        ((pathData).add(pointDataZ2Offset)).writeFloat(z);
        dataEnd = (pathData).add((PATH_POINT_BYTES * 2));
        (pathBuffer).writePointer(pathData);
        ((pathBuffer).add(pathBufferEndOffset)).writePointer(dataEnd);
        return;
}
            distance (x1, y1, x2, y2) {
        return (Math).sqrt((((x2 - x1) ** 2) + ((y2 - y1) ** 2)));
}
            isTileBlocked (tileMap, gameX, gameY) {
    var tileX, tileY, mapWidthTiles, mapHeightTiles, tile, subtileX, subtileY, collisionBitIndex, collisionLow, collisionHigh;
        /* CATCH -> 0xaa19d (try region) */
        tileX = (Math).floor((gameX / TILE_SIZE));
        tileY = (Math).floor((gameY / TILE_SIZE));
        mapWidthTiles = ((tileMap).add(tileMapWidthOffset)).readS32();
        mapHeightTiles = ((tileMap).add(tileMapHeightOffset)).readS32();
        if (!(tileX < 0)) {
            if (!(tileY < 0)) {
                if (!(tileX >= mapWidthTiles)) {
                    (tileX >= mapWidthTiles);
                    if ((tileY >= mapHeightTiles)) {
                        return true;
                    } /* if 0xaa0c2 */
                } /* if 0xaa0bd */
            } /* if 0xaa0bd */
        } /* if 0xaa0bd */
        tile = ((((tileMap).add(tileMapArrayOffset)).readPointer()).add(((tileX + (mapWidthTiles * tileY)) * 8))).readPointer();
        if ((tile).isNull()) {
            return true;
        } /* if 0xaa106 */
        subtileX = (Math).floor(((gameX % TILE_SIZE) / SUBTILE_SIZE));
        subtileY = (Math).floor(((gameY % TILE_SIZE) / SUBTILE_SIZE));
        collisionBitIndex = (subtileX + (SUBTILES_PER_TILE * subtileY));
        collisionLow = ((tile).add(tileCollisionLowOffset)).readU32();
        collisionHigh = ((tile).add(tileCollisionHighOffset)).readU32();
        if ((collisionBitIndex < COLLISION_BIT_OVERFLOW_THRESHOLD)) {
        } /* if 0xaa189 */
        /* jump -> 0xaa198 */
        return (((collisionHigh >>> (collisionBitIndex - COLLISION_BIT_OVERFLOW_THRESHOLD)) & 1) !== 0);
        (((collisionLow >>> collisionBitIndex) & 1) !== 0);
        /* CATCH -> 0xaa1a6 (try region) */
        return false;
        throw tileX = tileY = mapWidthTiles = mapHeightTiles = tile = subtileX = subtileY = collisionBitIndex = collisionLow = collisionHigh = <underflow>;
}
            raycast (tileMap, startX, startY, normalizedX, normalizedY, maxDistance) {
    var stepCount, stepIndex, distanceFromStart, probeX, probeY, lowDistance, highDistance, i, midDistance, midX, midY, wallDistance, preWallX, preWallY, blockedHorizontal, blockedVertical, flipX;
        stepCount = (Math).ceil((maxDistance / RAYCAST_STEP));
        stepIndex = 1;
        while ((stepIndex <= stepCount)) {
            distanceFromStart = (Math).min((stepIndex * RAYCAST_STEP), maxDistance);
            probeX = (startX + (normalizedX * distanceFromStart));
            probeY = (startY + (normalizedY * distanceFromStart));
            if (!(!(this).isTileBlocked(tileMap, probeX, probeY))) {
                lowDistance = (distanceFromStart - RAYCAST_STEP);
                highDistance = distanceFromStart;
                i = 0;
                while ((i < RAYCAST_BINARY_SEARCH_ITERATIONS)) {
                    midDistance = ((lowDistance + highDistance) / 2);
                    midX = (startX + (normalizedX * midDistance));
                    midY = (startY + (normalizedY * midDistance));
                    if ((this).isTileBlocked(tileMap, midX, midY)) {
                        highDistance = midDistance;
                    } /* if 0xaa354 */
                    /* jump -> 0xaa35c */
                    lowDistance = midDistance;
                    i = ((i) + 1);
                    (i++);
                } /* while 0xaa366 */
                wallDistance = ((lowDistance + highDistance) / 2);
                preWallX = (startX + (normalizedX * lowDistance));
                preWallY = (startY + (normalizedY * lowDistance));
                blockedHorizontal = (this).isTileBlocked(tileMap, probeX, preWallY);
                blockedVertical = (this).isTileBlocked(tileMap, preWallX, probeY);
                if (blockedHorizontal) {
                    flipX = (!blockedVertical);
                } /* if 0xaa3b6 */
                if ((blockedHorizontal === blockedVertical)) {
                    flipX = ((Math).abs(normalizedX) > (Math).abs(normalizedY));
                } /* if 0xaa3e5 */
                return { x: (startX + (normalizedX * wallDistance)), y: (startY + (normalizedY * wallDistance)), flipX: flipX };
            } /* if 0xaa40c */
            stepIndex = ((stepIndex) + 1);
            (stepIndex++);
            return null;
        } /* while 0xaa417 (open) */
}
        }
        TrajectoryExtender = tileCollisionLowOffset = TrajectoryExtender;
        exports.TrajectoryExtender = TrajectoryExtender;
        TrajectoryExtender.multiSegmentPathData = ((Libc).Libc).malloc(MULTI_SEGMENT_PATH_DATA_BYTES);
        TrajectoryExtender.multiSegmentPathBuffer = ((Libc).Libc).malloc(PATH_BUFFER_BYTES);
        TrajectoryExtender.singleSegmentPathData = ((Libc).Libc).malloc(SINGLE_SEGMENT_PATH_DATA_BYTES);
        TrajectoryExtender.singleSegmentPathBuffer = ((Libc).Libc).malloc(PATH_BUFFER_BYTES);
        return;
};

