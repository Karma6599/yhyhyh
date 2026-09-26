//============================================================================//
// MOD FEATURE: Show latency in battle
// In-game name: "Show latency in battle"  (TID: ShowConnectionIndicatorInBattle_name)
// Description: "When enabled, a latency number will be shown in battle at the top of the screen."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ShowBattleConnectionIndicator  (default false)
// Implementation below:
//============================================================================//

// --------------------- MODULE 4921 — BattleNetStatsOverlay ---------------------


// ============================================================ //
// webpack module 4921  —  BattleNetStatsOverlay
// exports: BattleNetStatsOverlay
// deps: 1588 (LogicMemory), 2447 (StageDebugText), 5523 (LogicBattleModeClient), 6128 (BattleMode)
// ============================================================ //

__webpack_modules__[4921] = function BattleNetStatsOverlay_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, BattleMode, LogicBattleModeClient, StageDebugText, currentLatencyOffset, maxLatencyOffset, badWifiTicksOffset, droppedVuOffset, BattleNetStatsOverlay, <class_fields_init>, BattleNetStatsOverlay;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleNetStatsOverlay = undefined;
        LogicMemory = __webpack_require__(1588);
        BattleMode = __webpack_require__(6128);
        LogicBattleModeClient = __webpack_require__(5523);
        StageDebugText = __webpack_require__(2447);
        currentLatencyOffset = ((LogicMemory).LogicMemory).offset(48);
        maxLatencyOffset = ((LogicMemory).LogicMemory).offset(52);
        badWifiTicksOffset = ((LogicMemory).LogicMemory).offset(68);
        droppedVuOffset = ((LogicMemory).LogicMemory).offset(340);
        <class_fields_init> = undefined;
        BattleNetStatsOverlay;
        class BattleNetStatsOverlay {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9af26 (open) */
}
            toggle () {
        if ((this).overlay) {
            ((this).overlay).destroy();
            this.overlay = null;
            return;
        } /* if 0x9accd */
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
        } /* if 0x9ace8 */
        this.overlay = ((StageDebugText).StageDebugText).create({ x: 20, y: 100, fontSize: 12 });
        return;
}
            update () {
    var inputManager, currentLat, maxLat, badWifi, logicBattle, droppedVu, e;
        if ((!(this).overlay)) {
            return;
            /* CATCH -> 0x9aedf (try region) */
        } /* if 0x9ad7d */
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            ((this).overlay).setText("not in battle");
            return undefined;
        } /* if 0x9adc6 */
        inputManager = ((BattleMode).BattleMode).clientInputManager;
        if ((inputManager).isNull()) {
            ((this).overlay).setText("no input manager");
            return undefined;
        } /* if 0x9adf9 */
        currentLat = ((inputManager).add(currentLatencyOffset)).readU32();
        maxLat = ((inputManager).add(maxLatencyOffset)).readU32();
        badWifi = ((inputManager).add(badWifiTicksOffset)).readU32();
        logicBattle = ((LogicBattleModeClient).LogicBattleModeClient).getInstance();
        if ((logicBattle).isNull()) {
        } /* if 0x9ae60 */
        /* jump -> 0x9ae76 */
        droppedVu = ((logicBattle).add(droppedVuOffset)).readU32();
        ((this).overlay).setText((((("lat curr: ").concat(currentLat, " ms\n") + ("lat max: ").concat(maxLat, " ms\n")) + ("dropped VU: ").concat(droppedVu, "\n")) + ("bad wifi ticks: ").concat(badWifi)));
        return;
        e = inputManager = currentLat = maxLat = badWifi = logicBattle = droppedVu = <underflow>;
        /* CATCH -> 0x9aee8 (try region) */
        return;
        throw <underflow>;
}
        }
        BattleNetStatsOverlay = BattleNetStatsOverlay = BattleNetStatsOverlay;
        exports.BattleNetStatsOverlay = BattleNetStatsOverlay;
        BattleNetStatsOverlay.overlay = null;
        return;
};

