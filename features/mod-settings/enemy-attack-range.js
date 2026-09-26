//============================================================================//
// MOD FEATURE: Enemy attack range
// In-game name: "Enemy attack range"  (TID: AttackRangeIndicator_name)
// Description: "Shows attack range circles around enemy heroes in battle."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: AttackRangeIndicator  (default false)
// Implementation below:
// Note: Rendering hook in BattleScreen (7835).
//============================================================================//

// --------------------- MODULE 2255 — AttackRangeIndicator ---------------------


// ============================================================ //
// webpack module 2255  —  AttackRangeIndicator
// exports: AttackRangeIndicator
// deps: 1191 (DisplayObject), 1588 (LogicMemory), 1721 (ColorTransform), 4009 (Config), 5523 (LogicBattleModeClient), 6128 (BattleMode), 6794 (LogicData), 7171 (LogicCharacterData), 7835 (BattleScreen), 9754 (LogicCharacterClient), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2255] = function AttackRangeIndicator_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Config, BattleMode, LogicBattleModeClient, ColorTransform, LogicData, LogicCharacterData, LogicCharacterClient, BattleScreen, DisplayObject, AttackRadiusSprite_set, attackRadiusSpriteOffsets, gamePositionXOffset, gamePositionYOffset, gamePositionZOffset, CASTING_RANGE_TILES_TO_SPRITE_RADIUS, GAME_UNITS_TO_RENDER_X, GAME_UNITS_TO_RENDER_Y, GAME_UNITS_PER_TILE, MAX_GAME_OBJECTS, HERO_CLASS_ID, MIN_VALID_POINTER, AttackRangeIndicator, <class_fields_init>, AttackRangeIndicator;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AttackRangeIndicator = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Config = __webpack_require__(4009);
        BattleMode = __webpack_require__(6128);
        LogicBattleModeClient = __webpack_require__(5523);
        ColorTransform = __webpack_require__(1721);
        LogicData = __webpack_require__(6794);
        LogicCharacterData = __webpack_require__(7171);
        LogicCharacterClient = __webpack_require__(9754);
        BattleScreen = __webpack_require__(7835);
        DisplayObject = __webpack_require__(1191);
        AttackRadiusSprite_set = new NativeFunction(((Libg).Libg).offset(13752580, 0), "void", ["pointer", "float", "float", "float", "float", "float"]);
        attackRadiusSpriteOffsets = [2792, 2800, 2808, 2816, 2824];
        gamePositionXOffset = ((LogicMemory).LogicMemory).offset(136);
        gamePositionYOffset = ((LogicMemory).LogicMemory).offset(140);
        gamePositionZOffset = ((LogicMemory).LogicMemory).offset(144);
        CASTING_RANGE_TILES_TO_SPRITE_RADIUS = 16;
        GAME_UNITS_TO_RENDER_X = (48 / 300);
        GAME_UNITS_TO_RENDER_Y = (36 / 300);
        GAME_UNITS_PER_TILE = 100;
        MAX_GAME_OBJECTS = 50;
        HERO_CLASS_ID = 16;
        MIN_VALID_POINTER = ptr(1048576);
        <class_fields_init> = undefined;
        AttackRangeIndicator;
        class AttackRangeIndicator {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x99d49 (open) */
}
            patch () {
        return;
}
            reset () {
        return;
}
            isValidPointer (pointer) {
        if ((!(pointer).isNull())) {
            (!(pointer).isNull());
            return ((pointer).compare(MIN_VALID_POINTER) > 0);
        } /* if 0x9975d (open) */
}
            update (battleScreen) {
    var logicBattleModeClientPtr, logicBattleModeClient, gameObjects, objectArray, objectCount, ownTeam, ownCharacter, ownPositionX, ownPositionY, freeSprites, nextSpriteIndex, i, gameObject, enemy, characterDataPointer, characterData, weaponSkillData, castingRangeTiles, enemyPositionX, enemyPositionY, rangeSprite, rangeInGameUnits, deltaX, deltaY, distanceSquared, rangeSquared;
        if ((!(this).isValidPointer(battleScreen))) {
            return;
        } /* if 0x99860 */
        logicBattleModeClientPtr = ((BattleMode).BattleMode).getLogicBattleModeClient();
        if ((!(this).isValidPointer(logicBattleModeClientPtr))) {
            return;
        } /* if 0x99882 */
        logicBattleModeClient = new (LogicBattleModeClient).LogicBattleModeClient(logicBattleModeClientPtr);
        gameObjects = (logicBattleModeClient).getGameObjects();
        objectArray = (gameObjects).getArray();
        if ((!(this).isValidPointer(objectArray))) {
            return;
        } /* if 0x998bb */
        objectCount = (gameObjects).getItemsCount();
        if (!(objectCount <= 0)) {
            (objectCount <= 0);
            if ((objectCount > MAX_GAME_OBJECTS)) {
                return;
            } /* if 0x998db */
        } /* if 0x998d8 */
        ownTeam = (logicBattleModeClient).ownPlayerTeam;
        ownCharacter = ((LogicBattleModeClient).LogicBattleModeClient).getOwnCharacter();
        ownPositionX = 0;
        ownPositionY = 0;
        if ((!((ownCharacter).instance).isNull())) {
            ownPositionX = (ownCharacter).x;
            ownPositionY = (ownCharacter).y;
        } /* if 0x9992a */
        freeSprites = (this).collectFreeRangeSprites(battleScreen);
        if ((freeSprites.length === 0)) {
            return;
        } /* if 0x99940 */
        nextSpriteIndex = 0;
        i = 0;
        while ((i < objectCount)) {
            if ((nextSpriteIndex < freeSprites.length)) {
                gameObject = ((objectArray).add((i * 8))).readPointer();
                if (!(!(this).isValidPointer(gameObject))) {
                    /* CATCH -> 0x99b6f (try region) */
                    enemy = new (LogicCharacterClient).LogicCharacterClient(gameObject);
                    characterDataPointer = (enemy).dataPtr;
                    if ((!(this).isValidPointer(characterDataPointer))) {
                        enemy = characterDataPointer = characterData = weaponSkillData = castingRangeTiles = enemyPositionX = enemyPositionY = rangeSprite = rangeInGameUnits = deltaX = deltaY = distanceSquared = rangeSquared = gameObject = i = logicBattleModeClientPtr = logicBattleModeClient = gameObjects = objectArray = objectCount = ownTeam = ownCharacter = ownPositionX = ownPositionY = freeSprites = nextSpriteIndex = <underflow>;
                    } /* if 0x999ee */
                    /* jump -> 0x99b77 */
                    if (((new (LogicData).LogicData(characterDataPointer)).getClassID() !== HERO_CLASS_ID)) {
                    } /* if 0x99a0f */
                    /* jump -> 0x99b77 */
                    if (((enemy).teamIndex === ownTeam)) {
                    } /* if 0x99a21 */
                    /* jump -> 0x99b77 */
                    characterData = new (LogicCharacterData).LogicCharacterData(characterDataPointer);
                    if ((!(characterData).isHero())) {
                    } /* if 0x99a44 */
                    /* jump -> 0x99b77 */
                    weaponSkillData = (characterData).weaponSkill;
                    if ((!weaponSkillData)) {
                    } /* if 0x99a58 */
                    /* jump -> 0x99b77 */
                    castingRangeTiles = (weaponSkillData).getCastingRangeTiles();
                    if ((castingRangeTiles <= 0)) {
                    } /* if 0x99a70 */
                    /* jump -> 0x99b77 */
                    enemyPositionX = (enemy).x;
                    enemyPositionY = (enemy).y;
                    if ((enemyPositionX === 0)) {
                        if ((enemyPositionY === 0)) {
                        } /* if 0x99a96 */
                    } /* if 0x99a96 */
                    /* jump -> 0x99b77 */
                    rangeSprite = freeSprites[nextSpriteIndex];
                    (this).positionSprite(rangeSprite, enemyPositionX, enemyPositionY);
                    AttackRadiusSprite_set(rangeSprite, 0, (castingRangeTiles * CASTING_RANGE_TILES_TO_SPRITE_RADIUS), 1, 0, 0);
                    new (DisplayObject).DisplayObject(rangeSprite).visibility = 1;
                    rangeInGameUnits = (castingRangeTiles * GAME_UNITS_PER_TILE);
                    deltaX = (ownPositionX - enemyPositionX);
                    deltaY = (ownPositionY - enemyPositionY);
                    distanceSquared = ((deltaX * deltaX) + (deltaY * deltaY));
                    rangeSquared = (rangeInGameUnits * rangeInGameUnits);
                    if ((distanceSquared > rangeSquared)) {
                        ((ColorTransform).ColorTransform).setColorDual(rangeSprite, 96, 255, 96, 24, 0, 255, 0);
                    } /* if 0x99b3f */
                    /* jump -> 0x99b61 */
                    ((ColorTransform).ColorTransform).setColorDual(rangeSprite, 255, 64, 64, 32, 255, 0, 0);
                    nextSpriteIndex = ((nextSpriteIndex) + 1);
                    (nextSpriteIndex++);
                    new (DisplayObject).DisplayObject(rangeSprite);
                    /* jump -> 0x99b76 */
                    /* CATCH -> 0x99b78 (try region) */
                    /* jump -> 0x99b76 */
                    throw <underflow>;
                } /* if 0x99b79 */
                i = ((i) + 1);
                (i++);
                return;
            } /* if 0x99b84 (open) */
        } /* while 0x99b84 (open) */
}
            collectFreeRangeSprites (battleScreen) {
    var freeSprites, spriteFieldOffset, sprite;
        freeSprites = [];
        /* jump -> 0x99c58 */
        spriteFieldOffset = /*iter*/ attackRadiusSpriteOffsets;
        sprite = ((battleScreen).add(spriteFieldOffset)).readPointer();
        if ((this).isValidPointer(sprite)) {
            if (((new (DisplayObject).DisplayObject(sprite)).visibility === 0)) {
                (freeSprites).push(sprite);
            } /* if 0x99c58 */
        } /* if 0x99c58 */
        } while (!sprite = attackRadiusSpriteOffsets);
        spriteFieldOffset = freeSprites = <underflow>;
        return freeSprites;
}
            positionSprite (sprite, gameX, gameY) {
    var displayObject;
        ((sprite).add(gamePositionXOffset)).writeFloat(gameX);
        ((sprite).add(gamePositionYOffset)).writeFloat(gameY);
        ((sprite).add(gamePositionZOffset)).writeS32(0);
        displayObject = new (DisplayObject).DisplayObject(sprite);
        (displayObject).setXY((gameX * GAME_UNITS_TO_RENDER_X), (gameY * GAME_UNITS_TO_RENDER_Y));
        displayObject.scale = 1;
        return;
}
        }
        AttackRangeIndicator = LogicCharacterClient = AttackRangeIndicator;
        exports.AttackRangeIndicator = AttackRangeIndicator;
        return;
};

