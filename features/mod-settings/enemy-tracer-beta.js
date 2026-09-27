var TRACER_LINE_HEIGHT = 200;
var SUBTILES_TO_GAME_UNITS = 100;
var HERO_CLASS_ID = 16;
var MAX_ERRORS_BEFORE_GIVE_UP = 3;

class EnemyTracer {
    static resetErrors() {
        this.errorCount = 0;
    }

    static patch() {
    }

    static render(objectArray, objectCount, ownTeam, ownPlayerIndex) {
        var ownCharacterPosition = this.findOwnCharacterPosition(objectArray, objectCount, ownPlayerIndex);
        if (!ownCharacterPosition) {
            return;
        }
        for (var i = 0; i < objectCount; i++) {
            if (this.errorCount >= MAX_ERRORS_BEFORE_GIVE_UP) {
                break;
            }
            try {
                var gameObject = objectArray.add(i * 8).readPointer();
                if (gameObject.isNull()) {
                    continue;
                }
                if (!this.isHeroObject(gameObject)) {
                    continue;
                }
                var enemy = new LogicCharacterClient.LogicCharacterClient(gameObject);
                if (enemy.teamIndex === ownTeam) {
                    continue;
                }
                var enemyPositionX = enemy.x;
                var enemyPositionY = enemy.y;
                var enemyPositionZ = enemy.z;
                if (enemyPositionX === 0 && enemyPositionY === 0) {
                    continue;
                }
                var deltaX = ownCharacterPosition.x - enemyPositionX;
                var deltaY = ownCharacterPosition.y - enemyPositionY;
                var distanceSquared = deltaX * deltaX + deltaY * deltaY;
                var enemyAttackRangeGameUnits = this.getAttackRangeGameUnits(gameObject);
                var attackRangeSquared = enemyAttackRangeGameUnits * enemyAttackRangeGameUnits;
                if (distanceSquared <= attackRangeSquared) {
                    GLOverlay.GLOverlay.setDrawColor(1, 0.2, 0.2, 0.9);
                } else {
                    GLOverlay.GLOverlay.setDrawColor(1, 0.9, 0.2, 0.7);
                }
                GLOverlay.GLOverlay.drawLineSegment(ownCharacterPosition.x, -ownCharacterPosition.y, ownCharacterPosition.z + TRACER_LINE_HEIGHT, enemyPositionX, -enemyPositionY, enemyPositionZ + TRACER_LINE_HEIGHT);
            } catch (e) {
                this.errorCount++;
            }
        }
    }

    static findOwnCharacterPosition(objectArray, objectCount, ownPlayerIndex) {
        for (var i = 0; i < objectCount; i++) {
            if (this.errorCount >= MAX_ERRORS_BEFORE_GIVE_UP) {
                return null;
            }
            try {
                var gameObject = objectArray.add(i * 8).readPointer();
                if (gameObject.isNull()) {
                    continue;
                }
                if (!this.isHeroObject(gameObject)) {
                    continue;
                }
                var character = new LogicCharacterClient.LogicCharacterClient(gameObject);
                if (character.playerIndex !== ownPlayerIndex) {
                    continue;
                }
                return { x: character.x, y: character.y, z: character.z };
            } catch (e) {
                this.errorCount++;
            }
        }
        return null;
    }

    static isHeroObject(gameObject) {
        if (this.errorCount >= MAX_ERRORS_BEFORE_GIVE_UP) {
            return false;
        }
        try {
            var characterDataPointer = new LogicCharacterClient.LogicCharacterClient(gameObject).dataPtr;
            if (characterDataPointer.isNull()) {
                return false;
            }
            if (new LogicData.LogicData(characterDataPointer).getClassID() !== HERO_CLASS_ID) {
                return false;
            }
            var isHero = new LogicCharacterData.LogicCharacterData(characterDataPointer).isHero();
            this.errorCount = 0;
            return isHero;
        } catch (e) {
            this.errorCount++;
            return false;
        }
    }

    static getAttackRangeGameUnits(gameObject) {
        try {
            var characterDataPointer = new LogicCharacterClient.LogicCharacterClient(gameObject).dataPtr;
            if (characterDataPointer.isNull()) {
                return 0;
            }
            if (new LogicData.LogicData(characterDataPointer).getClassID() !== HERO_CLASS_ID) {
                return 0;
            }
            var weaponSkillData = new LogicCharacterData.LogicCharacterData(characterDataPointer).weaponSkill;
            if (!weaponSkillData) {
                return 0;
            }
            return weaponSkillData.getCastingRangeTiles() * SUBTILES_TO_GAME_UNITS;
        } catch (e) {
            return 0;
        }
    }
}

EnemyTracer.errorCount = 0;
