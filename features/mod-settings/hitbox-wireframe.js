//============================================================================//
// MOD FEATURE: Hitbox wireframe
// In-game name: "Hitbox wireframe"  (TID: HitboxRenderer_name)
// Description: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>"
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: HitboxRenderer  (default false)
// Implementation below:
//============================================================================//

// --------------------- MODULE 4076 — HitboxRenderer ---------------------


// ============================================================ //
// webpack module 4076  —  HitboxRenderer
// exports: HitboxRenderer
// deps: 2556 (BSDPlusManager), 5508 (GLOverlay), 7171 (LogicCharacterData), 9754 (LogicCharacterClient)
// ============================================================ //

__webpack_modules__[4076] = function HitboxRenderer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDPlusManager, GLOverlay, LogicCharacterData, LogicCharacterClient, DEFAULT_COLLISION_RADIUS, DEFAULT_MODEL_HEIGHT, BASE_MODEL_HEIGHT, MIN_COLLISION_RADIUS, MAX_COLLISION_RADIUS, MIN_MODEL_SCALE, MAX_MODEL_SCALE, HitboxRenderer, <class_fields_init>, HitboxRenderer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HitboxRenderer = undefined;
        BSDPlusManager = __webpack_require__(2556);
        GLOverlay = __webpack_require__(5508);
        LogicCharacterData = __webpack_require__(7171);
        LogicCharacterClient = __webpack_require__(9754);
        DEFAULT_COLLISION_RADIUS = 150;
        DEFAULT_MODEL_HEIGHT = 400;
        BASE_MODEL_HEIGHT = 300;
        MIN_COLLISION_RADIUS = 0;
        MAX_COLLISION_RADIUS = 2000;
        MIN_MODEL_SCALE = 0.1;
        MAX_MODEL_SCALE = 10;
        <class_fields_init> = undefined;
        HitboxRenderer;
        class HitboxRenderer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa16cf (open) */
}
            patch () {
        return;
}
            render (objectArray, objectCount, ownTeam) {
    var i, gameObject, character, positionX, positionY, positionZ, stats, teamIndex;
        if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            return;
        } /* if 0xa13c1 */
        i = 0;
        while ((i < objectCount)) {
            gameObject = ((objectArray).add((i * 8))).readPointer();
            if (!(gameObject).isNull()) {
                character = new (LogicCharacterClient).LogicCharacterClient(gameObject);
                positionX = (character).x;
                positionY = (character).y;
                positionZ = (character).z;
                if ((positionX === 0)) {
                    if (!(positionY === 0)) {
                        stats = (this).readObjectStats(gameObject);
                        teamIndex = (character).teamIndex;
                        if ((!(stats).isHeroCharacter)) {
                            ((GLOverlay).GLOverlay).setDrawColor(0.2, 0.5, 1, 0.8);
                        } /* if 0xa1489 */
                        /* jump -> 0xa14bc */
                        if ((teamIndex === ownTeam)) {
                            ((GLOverlay).GLOverlay).setDrawColor(0, 1, 0, 1);
                        } /* if 0xa14a7 */
                        /* jump -> 0xa14bc */
                        ((GLOverlay).GLOverlay).setDrawColor(1, 0, 0, 1);
                        ((GLOverlay).GLOverlay).drawWireframeCube((positionX - (stats).collisionRadius), ((-positionY) - (stats).collisionRadius), positionZ, (positionX + (stats).collisionRadius), ((-positionY) + (stats).collisionRadius), (positionZ + (stats).modelHeight));
                    } /* if 0xa1511 */
                } /* if 0xa144b */
            } /* if 0xa1511 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xa151c (open) */
}
            readObjectStats (gameObject) {
    var collisionRadius, modelHeight, isHeroCharacter, logicData, characterData, radius, scale;
        collisionRadius = DEFAULT_COLLISION_RADIUS;
        modelHeight = DEFAULT_MODEL_HEIGHT;
        isHeroCharacter = false;
        /* CATCH -> 0xa1675 (try region) */
        logicData = (new (LogicCharacterClient).LogicCharacterClient(gameObject)).dataPtr;
        if ((!(logicData).isNull())) {
            characterData = new (LogicCharacterData).LogicCharacterData(logicData);
            radius = (characterData).getCollisionRadius();
            if ((radius > MIN_COLLISION_RADIUS)) {
                if ((radius < MAX_COLLISION_RADIUS)) {
                    collisionRadius = radius;
                } /* if 0xa1634 */
            } /* if 0xa1634 */
            scale = (characterData).getScale();
            if ((scale > MIN_MODEL_SCALE)) {
                if ((scale < MAX_MODEL_SCALE)) {
                    modelHeight = (scale * BASE_MODEL_HEIGHT);
                } /* if 0xa165f */
            } /* if 0xa165f */
            isHeroCharacter = (characterData).isHero();
            characterData = radius = scale = logicData = collisionRadius = modelHeight = isHeroCharacter = <underflow>;
        } /* if 0xa166f */
        /* jump -> 0xa167c */
        /* CATCH -> 0xa167e (try region) */
        /* jump -> 0xa167c */
        throw <underflow>;
        return { collisionRadius: collisionRadius, modelHeight: modelHeight, isHeroCharacter: isHeroCharacter };
}
        }
        HitboxRenderer = MAX_COLLISION_RADIUS = HitboxRenderer;
        exports.HitboxRenderer = HitboxRenderer;
        return;
};

