// =============================================================
// FEATURE: Battle Debug Overlay
// config keys: -
// Debug overlay for battle state.
// merged webpack modules: 3614 BattleDebugOverlay
// =============================================================

// --------------------- MODULE 3614 — BattleDebugOverlay ---------------------

// ============================================================ //
// webpack module 3614  —  BattleDebugOverlay
// exports: BattleDebugOverlay
// deps: 2447 (StageDebugText), 5523 (LogicBattleModeClient), 6128 (BattleMode)
// ============================================================ //

__webpack_modules__[3614] = function BattleDebugOverlay_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicBattleModeClient, BattleMode, StageDebugText, TILE_SIZE, BattleDebugOverlay, <class_fields_init>, BattleDebugOverlay;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleDebugOverlay = undefined;
        LogicBattleModeClient = __webpack_require__(5523);
        BattleMode = __webpack_require__(6128);
        StageDebugText = __webpack_require__(2447);
        TILE_SIZE = 300;
        <class_fields_init> = undefined;
        BattleDebugOverlay;
        class BattleDebugOverlay {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9a5ae (open) */
}
            toggle () {
        if ((this).overlay) {
            ((this).overlay).destroy();
            this.overlay = null;
            return;
        } /* if 0x9a3fe */
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
        } /* if 0x9a419 */
        this.overlay = ((StageDebugText).StageDebugText).create({ x: 20, y: 60, fontSize: 14 });
        return;
}
            update () {
    var own, tileX, tileY, e;
        if ((!(this).overlay)) {
            return;
        } /* if 0x9a493 */
        if ((((BattleMode).BattleMode).getInstance()).isNull()) {
            return;
            /* CATCH -> 0x9a56d (try region) */
        } /* if 0x9a4c2 */
        own = ((LogicBattleModeClient).LogicBattleModeClient).getOwnCharacter();
        if (((own).instance).isNull()) {
            ((this).overlay).setText("");
            return undefined;
        } /* if 0x9a507 */
        tileX = (((own).x / TILE_SIZE)).toFixed(1);
        tileY = (((own).y / TILE_SIZE)).toFixed(1);
        ((this).overlay).setText(("pos: ").concat(tileX, ", ", tileY, "\nplayer: ", (own).index));
        own = tileX = tileY = ((this).overlay).setText("not in battle");
        return;
        e = <underflow>;
        /* CATCH -> 0x9a575 (try region) */
        return;
        throw <underflow>;
}
        }
        BattleDebugOverlay = v8 = BattleDebugOverlay;
        exports.BattleDebugOverlay = BattleDebugOverlay;
        BattleDebugOverlay.overlay = null;
        return;
};

