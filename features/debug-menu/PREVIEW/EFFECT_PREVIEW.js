//============================================================================//
// DEBUG MENU BUTTON: EFFECT_PREVIEW
// In-game label: "EFFECT_PREVIEW"
// Menu: Debug Menu → PREVIEW category
// Visibility: always visible
// Action: client-side handler in DebugCallbacks (menu/debug-tools.js#1390)
// Effect preview popup — module 6030 (also used by the Particles feature).
// Spec source: menu/debug-menu.js (module 6242 DebugButtonSpecs)
//============================================================================//

// Button spec (verbatim from DebugButtonSpecs):
//   { label: "EFFECT_PREVIEW", category: ((DebugMenuCategory).EDebugCategory).PREVIEW }
// --------------------- MODULE 6030 — EffectPreview ---------------------


// ============================================================ //
// webpack module 6030  —  EffectPreview
// exports: EffectPreview
// deps: 3380 (Logcat), 4934 (GUI), 5523 (LogicBattleModeClient), 6128 (BattleMode), 6139 (LogicDataTables), 7835 (BattleScreen)
// ============================================================ //

__webpack_modules__[6030] = function EffectPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BattleMode, BattleScreen, LogicBattleModeClient, LogicDataTables, GUI, Logcat, tileSizeInGameUnits, effectSpawnTileOffset, EffectPreview, <class_fields_init>, EffectPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EffectPreview = undefined;
        BattleMode = __webpack_require__(6128);
        BattleScreen = __webpack_require__(7835);
        LogicBattleModeClient = __webpack_require__(5523);
        LogicDataTables = __webpack_require__(6139);
        GUI = __webpack_require__(4934);
        Logcat = __webpack_require__(3380);
        tileSizeInGameUnits = 300;
        effectSpawnTileOffset = -3;
        <class_fields_init> = undefined;
        EffectPreview;
        class EffectPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9e7c4 (open) */
}
            show () {
    var reason;
        reason = (EffectPreview).tryShow();
        /* is_null  */
        if (!reason) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(("EFFECT_PREVIEW: ").concat(reason));
            ((Logcat).Logcat).logDebug(("EffectPreview aborted: ").concat(reason));
            return;
        } /* if 0x9e4fa (open) */
}
            tryShow () {
    var battleScreen, gameObjectManager, effectsTable, count, ownCharacter, index, effect, spawnX, spawnY, effectName;
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return "enter a battle first";
        } /* if 0x9e5ae */
        battleScreen = ((BattleScreen).BattleScreen).getInstance();
        if (!(battleScreen === undefined)) {
            (battleScreen === undefined);
            if ((battleScreen).isNull()) {
                return "BattleScreen not captured";
            } /* if 0x9e5df */
        } /* if 0x9e5d7 */
        gameObjectManager = ((BattleScreen).BattleScreen).getGameObjectManager();
        if ((gameObjectManager).isNull()) {
            return "GameObjectManager null";
        } /* if 0x9e603 */
        effectsTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Effects);
        count = (effectsTable).getItemCount();
        if ((count < 1)) {
            return "effects table empty";
        } /* if 0x9e63f */
        ownCharacter = ((LogicBattleModeClient).LogicBattleModeClient).getOwnCharacter();
        if (((ownCharacter).instance).isNull()) {
            return "own character not spawned";
        } /* if 0x9e669 */
        index = ((EffectPreview).cursor % count);
        EffectPreview.cursor = (((EffectPreview).cursor + 1) % count);
        effect = (effectsTable).getItemAt(index);
        if (!(!effect)) {
            if (((effect).instance).isNull()) {
                return ("effect #").concat(index, " null");
            } /* if 0x9e6cc */
        } /* if 0x9e6b5 */
        spawnX = (ownCharacter).x;
        spawnY = ((ownCharacter).y - (effectSpawnTileOffset * tileSizeInGameUnits));
        (gameObjectManager).playEffect(effect, spawnX, spawnY);
        effectName = (effect).getName();
        ((GUI).GUI).showFloaterTextAtDefaultPosition(("[").concat((index + 1), "/", count, "] ", effectName));
        ((Logcat).Logcat).logDebug(("EffectPreview spawned effect #").concat(index, " \"", effectName, "\" at (", spawnX, ", ", spawnY, ")"));
        return null;
}
        }
        EffectPreview = EffectPreview = EffectPreview;
        exports.EffectPreview = EffectPreview;
        EffectPreview.cursor = 0;
        return;
};

