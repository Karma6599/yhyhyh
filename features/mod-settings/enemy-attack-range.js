var AttackRadiusSprite_set = new NativeFunction(Libg.Libg.offset(13752580, 0), "void", ["pointer", "float", "float", "float", "float", "float"]);
var attackRadiusSpriteOffsets = [2792, 2800, 2808, 2816, 2824];
var gamePositionXOffset = LogicMemory.LogicMemory.offset(136);
var gamePositionYOffset = LogicMemory.LogicMemory.offset(140);
var gamePositionZOffset = LogicMemory.LogicMemory.offset(144);
var CASTING_RANGE_TILES_TO_SPRITE_RADIUS = 16;
var GAME_UNITS_TO_RENDER_X = 48 / 300;
var GAME_UNITS_TO_RENDER_Y = 36 / 300;
var GAME_UNITS_PER_TILE = 100;
var MAX_GAME_OBJECTS = 50;
var HERO_CLASS_ID = 16;
var MIN_VALID_POINTER = ptr(1048576);

class AttackRangeIndicator {
    static patch() {
    }

    static reset() {
    }

    static isValidPointer(pointer) {
        return !pointer.isNull() && pointer.compare(MIN_VALID_POINTER) > 0;
    }

    static update(battleScreen) {
        if (!this.isValidPointer(battleScreen)) {
            return;
        }
        var logicBattleModeClientPtr = BattleMode.BattleMode.getLogicBattleModeClient();
        if (!this.isValidPointer(logicBattleModeClientPtr)) {
            return;
        }
        var logicBattleModeClient = new LogicBattleModeClient.LogicBattleModeClient(logicBattleModeClientPtr);
        var gameObjects = logicBattleModeClient.getGameObjects();
        var objectArray = gameObjects.getArray();
        if (!this.isValidPointer(objectArray)) {
            return;
        }
        var objectCount = gameObjects.getItemsCount();
        if (objectCount <= 0 || objectCount > MAX_GAME_OBJECTS) {
            return;
        }
        var ownTeam = logicBattleModeClient.ownPlayerTeam;
        var ownCharacter = LogicBattleModeClient.LogicBattleModeClient.getOwnCharacter();
        var ownPositionX = 0;
        var ownPositionY = 0;
        if (!ownCharacter.instance.isNull()) {
            ownPositionX = ownCharacter.x;
            ownPositionY = ownCharacter.y;
        }
        var freeSprites = this.collectFreeRangeSprites(battleScreen);
        if (freeSprites.length === 0) {
            return;
        }
        var nextSpriteIndex = 0;
        for (var i = 0; i < objectCount; i++) {
            if (nextSpriteIndex >= freeSprites.length) {
                break;
            }
            var gameObject = objectArray.add(i * 8).readPointer();
            if (this.isValidPointer(gameObject)) {
                try {
                    var enemy = new LogicCharacterClient.LogicCharacterClient(gameObject);
                    var characterDataPointer = enemy.dataPtr;
                    if (!this.isValidPointer(characterDataPointer)) {
                        continue;
                    }
                    if (new LogicData.LogicData(characterDataPointer).getClassID() !== HERO_CLASS_ID) {
                        continue;
                    }
                    if (enemy.teamIndex === ownTeam) {
                        continue;
                    }
                    var characterData = new LogicCharacterData.LogicCharacterData(characterDataPointer);
                    if (!characterData.isHero()) {
                        continue;
                    }
                    var weaponSkillData = characterData.weaponSkill;
                    if (!weaponSkillData) {
                        continue;
                    }
                    var castingRangeTiles = weaponSkillData.getCastingRangeTiles();
                    if (castingRangeTiles <= 0) {
                        continue;
                    }
                    var enemyPositionX = enemy.x;
                    var enemyPositionY = enemy.y;
                    if (enemyPositionX === 0 && enemyPositionY === 0) {
                        continue;
                    }
                    var rangeSprite = freeSprites[nextSpriteIndex];
                    this.positionSprite(rangeSprite, enemyPositionX, enemyPositionY);
                    AttackRadiusSprite_set(rangeSprite, 0, castingRangeTiles * CASTING_RANGE_TILES_TO_SPRITE_RADIUS, 1, 0, 0);
                    new DisplayObject.DisplayObject(rangeSprite).visibility = 1;
                    var rangeInGameUnits = castingRangeTiles * GAME_UNITS_PER_TILE;
                    var deltaX = ownPositionX - enemyPositionX;
                    var deltaY = ownPositionY - enemyPositionY;
                    var distanceSquared = deltaX * deltaX + deltaY * deltaY;
                    var rangeSquared = rangeInGameUnits * rangeInGameUnits;
                    if (distanceSquared > rangeSquared) {
                        ColorTransform.ColorTransform.setColorDual(rangeSprite, 96, 255, 96, 24, 0, 255, 0);
                    } else {
                        ColorTransform.ColorTransform.setColorDual(rangeSprite, 255, 64, 64, 32, 255, 0, 0);
                    }
                    nextSpriteIndex++;
                } catch (e) {
                }
            }
        }
    }

    static collectFreeRangeSprites(battleScreen) {
        var freeSprites = [];
        for (var spriteFieldOffset of attackRadiusSpriteOffsets) {
            var sprite = battleScreen.add(spriteFieldOffset).readPointer();
            if (this.isValidPointer(sprite)) {
                if (new DisplayObject.DisplayObject(sprite).visibility === 0) {
                    freeSprites.push(sprite);
                }
            }
        }
        return freeSprites;
    }

    static positionSprite(sprite, gameX, gameY) {
        sprite.add(gamePositionXOffset).writeFloat(gameX);
        sprite.add(gamePositionYOffset).writeFloat(gameY);
        sprite.add(gamePositionZOffset).writeS32(0);
        var displayObject = new DisplayObject.DisplayObject(sprite);
        displayObject.setXY(gameX * GAME_UNITS_TO_RENDER_X, gameY * GAME_UNITS_TO_RENDER_Y);
        displayObject.scale = 1;
    }
}
