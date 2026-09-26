//============================================================================//
// MOD FEATURE: Enemy tracer [β]
// In-game name: "Enemy tracer [β]"  (TID: EnemyTracer_name)
// Description: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>"
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: EnemyTracer  (default false)
// Implementation below:
//============================================================================//

// --------------------- MODULE 6584 — EnemyTracer ---------------------


// ============================================================ //
// webpack module 6584  —  EnemyTracer
// exports: EnemyTracer
// deps: 5508 (GLOverlay), 6794 (LogicData), 7171 (LogicCharacterData), 9754 (LogicCharacterClient)
// ============================================================ //

__webpack_modules__[6584] = function EnemyTracer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicCharacterData, LogicCharacterClient, GLOverlay, TRACER_LINE_HEIGHT, SUBTILES_TO_GAME_UNITS, HERO_CLASS_ID, MAX_ERRORS_BEFORE_GIVE_UP, EnemyTracer, <class_fields_init>, EnemyTracer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EnemyTracer = undefined;
        LogicData = __webpack_require__(6794);
        LogicCharacterData = __webpack_require__(7171);
        LogicCharacterClient = __webpack_require__(9754);
        GLOverlay = __webpack_require__(5508);
        TRACER_LINE_HEIGHT = 200;
        SUBTILES_TO_GAME_UNITS = 100;
        HERO_CLASS_ID = 16;
        MAX_ERRORS_BEFORE_GIVE_UP = 3;
        <class_fields_init> = undefined;
        EnemyTracer;
        class EnemyTracer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9ef45 (open) */
}
            resetErrors () {
        this.errorCount = 0;
        return;
}
            patch () {
        return;
}
            render (objectArray, objectCount, ownTeam, ownPlayerIndex) {
    var ownCharacterPosition, i, gameObject, enemy, enemyPositionX, enemyPositionY, enemyPositionZ, deltaX, deltaY, distanceSquared, enemyAttackRangeGameUnits, attackRangeSquared;
        ownCharacterPosition = (this).findOwnCharacterPosition(objectArray, objectCount, ownPlayerIndex);
        if ((!ownCharacterPosition)) {
            return;
        } /* if 0x9ea43 */
        i = 0;
        while ((i < objectCount)) {
            if (!((this).errorCount >= MAX_ERRORS_BEFORE_GIVE_UP)) {
                /* CATCH -> 0x9ebd4 (try region) */
                gameObject = ((objectArray).add((i * 8))).readPointer();
                if ((gameObject).isNull()) {
                    gameObject = enemy = enemyPositionX = enemyPositionY = enemyPositionZ = deltaX = deltaY = distanceSquared = enemyAttackRangeGameUnits = attackRangeSquared = i = ownCharacterPosition = <underflow>;
                } /* if 0x9eaae */
                /* jump -> 0x9ebe9 */
                if ((!(this).isHeroObject(gameObject))) {
                } /* if 0x9eac2 */
                /* jump -> 0x9ebe9 */
                enemy = new (LogicCharacterClient).LogicCharacterClient(gameObject);
                if (((enemy).teamIndex === ownTeam)) {
                } /* if 0x9eae2 */
                /* jump -> 0x9ebe9 */
                enemyPositionX = (enemy).x;
                enemyPositionY = (enemy).y;
                enemyPositionZ = (enemy).z;
                if ((enemyPositionX === 0)) {
                    if ((enemyPositionY === 0)) {
                    } /* if 0x9eb12 */
                } /* if 0x9eb12 */
                /* jump -> 0x9ebe9 */
                deltaX = ((ownCharacterPosition).x - enemyPositionX);
                deltaY = ((ownCharacterPosition).y - enemyPositionY);
                distanceSquared = ((deltaX * deltaX) + (deltaY * deltaY));
                enemyAttackRangeGameUnits = (this).getAttackRangeGameUnits(gameObject);
                attackRangeSquared = (enemyAttackRangeGameUnits * enemyAttackRangeGameUnits);
                if ((distanceSquared <= attackRangeSquared)) {
                    ((GLOverlay).GLOverlay).setDrawColor(1, 0.2, 0.2, 0.9);
                } /* if 0x9eb7a */
                /* jump -> 0x9eb92 */
                ((GLOverlay).GLOverlay).setDrawColor(1, 0.9, 0.2, 0.7);
                ((GLOverlay).GLOverlay).drawLineSegment((ownCharacterPosition).x, (-(ownCharacterPosition).y), ((ownCharacterPosition).z + TRACER_LINE_HEIGHT), enemyPositionX, (-enemyPositionY), (enemyPositionZ + TRACER_LINE_HEIGHT));
                /* jump -> 0x9ebe8 */
                /* CATCH -> 0x9ebea (try region) */
                this.errorCount = (++(this).errorCount);
                /* jump -> 0x9ebe8 */
                throw <underflow>;
                i = ((i) + 1);
                (i++);
                return;
            } /* if 0x9ebf6 (open) */
        } /* while 0x9ebf6 (open) */
}
            findOwnCharacterPosition (objectArray, objectCount, ownPlayerIndex) {
    var i, gameObject, character;
        i = 0;
        while ((i < objectCount)) {
            if (((this).errorCount >= MAX_ERRORS_BEFORE_GIVE_UP)) {
                return null;
                /* CATCH -> 0x9ed3e (try region) */
            } /* if 0x9ecad */
            gameObject = ((objectArray).add((i * 8))).readPointer();
            if ((gameObject).isNull()) {
                gameObject = character = i = <underflow>;
            } /* if 0x9ece0 */
            /* jump -> 0x9ed51 */
            if ((!(this).isHeroObject(gameObject))) {
            } /* if 0x9ecf2 */
            /* jump -> 0x9ed51 */
            character = new (LogicCharacterClient).LogicCharacterClient(gameObject);
            if (((character).playerIndex !== ownPlayerIndex)) {
            } /* if 0x9ed11 */
            /* jump -> 0x9ed51 */
            return { x: (character).x, y: (character).y, z: (character).z };
            /* CATCH -> 0x9ed53 (try region) */
            this.errorCount = (++(this).errorCount);
            /* jump -> 0x9ed51 */
            throw <underflow>;
            i = ((i) + 1);
            (i++);
            return null;
        } /* while 0x9ed5f (open) */
}
            isHeroObject (gameObject) {
    var characterDataPointer, isHero;
        if (((this).errorCount >= MAX_ERRORS_BEFORE_GIVE_UP)) {
            return false;
            /* CATCH -> 0x9ee30 (try region) */
        } /* if 0x9edbb */
        characterDataPointer = (new (LogicCharacterClient).LogicCharacterClient(gameObject)).dataPtr;
        if ((characterDataPointer).isNull()) {
            return false;
        } /* if 0x9ede9 */
        if (((new (LogicData).LogicData(characterDataPointer)).getClassID() !== HERO_CLASS_ID)) {
            return false;
        } /* if 0x9ee09 */
        isHero = (new (LogicCharacterData).LogicCharacterData(characterDataPointer)).isHero();
        this.errorCount = 0;
        return isHero;
        /* CATCH -> 0x9ee45 (try region) */
        this.errorCount = (++(this).errorCount);
        return false;
        throw this;
}
            getAttackRangeGameUnits (gameObject) {
    var characterDataPointer, weaponSkillData;
        /* CATCH -> 0x9ef09 (try region) */
        characterDataPointer = (new (LogicCharacterClient).LogicCharacterClient(gameObject)).dataPtr;
        if ((characterDataPointer).isNull()) {
            return 0;
        } /* if 0x9eeb7 */
        if (((new (LogicData).LogicData(characterDataPointer)).getClassID() !== HERO_CLASS_ID)) {
            return 0;
        } /* if 0x9eed7 */
        weaponSkillData = (new (LogicCharacterData).LogicCharacterData(characterDataPointer)).weaponSkill;
        if ((!weaponSkillData)) {
            return 0;
        } /* if 0x9eef5 */
        return ((weaponSkillData).getCastingRangeTiles() * SUBTILES_TO_GAME_UNITS);
        characterDataPointer = weaponSkillData = <underflow>;
        /* CATCH -> 0x9ef12 (try region) */
        return 0;
        throw <underflow>;
}
        }
        EnemyTracer = EnemyTracer = EnemyTracer;
        exports.EnemyTracer = EnemyTracer;
        EnemyTracer.errorCount = 0;
        return;
};

