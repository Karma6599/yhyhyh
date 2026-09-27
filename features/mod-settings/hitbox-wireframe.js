var DEFAULT_COLLISION_RADIUS = 150;
var DEFAULT_MODEL_HEIGHT = 400;
var BASE_MODEL_HEIGHT = 300;
var MIN_COLLISION_RADIUS = 0;
var MAX_COLLISION_RADIUS = 2000;
var MIN_MODEL_SCALE = 0.1;
var MAX_MODEL_SCALE = 10;

class HitboxRenderer {
    static patch() {
    }

    static render(objectArray, objectCount, ownTeam) {
        if (!BSDPlusManager.BSDPlusManager.isBSDPlusEnabled) {
            return;
        }
        for (var i = 0; i < objectCount; i++) {
            var gameObject = objectArray.add(i * 8).readPointer();
            if (!gameObject.isNull()) {
                var character = new LogicCharacterClient.LogicCharacterClient(gameObject);
                var positionX = character.x;
                var positionY = character.y;
                var positionZ = character.z;
                if (positionX !== 0 || positionY !== 0) {
                    var stats = this.readObjectStats(gameObject);
                    var teamIndex = character.teamIndex;
                    if (!stats.isHeroCharacter) {
                        GLOverlay.GLOverlay.setDrawColor(0.2, 0.5, 1, 0.8);
                    } else if (teamIndex === ownTeam) {
                        GLOverlay.GLOverlay.setDrawColor(0, 1, 0, 1);
                    } else {
                        GLOverlay.GLOverlay.setDrawColor(1, 0, 0, 1);
                    }
                    GLOverlay.GLOverlay.drawWireframeCube(positionX - stats.collisionRadius, -positionY - stats.collisionRadius, positionZ, positionX + stats.collisionRadius, -positionY + stats.collisionRadius, positionZ + stats.modelHeight);
                }
            }
        }
    }

    static readObjectStats(gameObject) {
        var collisionRadius = DEFAULT_COLLISION_RADIUS;
        var modelHeight = DEFAULT_MODEL_HEIGHT;
        var isHeroCharacter = false;
        try {
            var logicData = new LogicCharacterClient.LogicCharacterClient(gameObject).dataPtr;
            if (!logicData.isNull()) {
                var characterData = new LogicCharacterData.LogicCharacterData(logicData);
                var radius = characterData.getCollisionRadius();
                if (radius > MIN_COLLISION_RADIUS && radius < MAX_COLLISION_RADIUS) {
                    collisionRadius = radius;
                }
                var scale = characterData.getScale();
                if (scale > MIN_MODEL_SCALE && scale < MAX_MODEL_SCALE) {
                    modelHeight = scale * BASE_MODEL_HEIGHT;
                }
                isHeroCharacter = characterData.isHero();
            }
        } catch (e) {
        }
        return { collisionRadius: collisionRadius, modelHeight: modelHeight, isHeroCharacter: isHeroCharacter };
    }
}
