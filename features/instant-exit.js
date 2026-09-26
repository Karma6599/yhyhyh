// =============================================================
// FEATURE: Instant Exit
// config keys: BattleEndInstantExit
// Instant-exit button on the battle end screen.
// merged webpack modules: 1052 BattleEndInstantExitButton
// =============================================================

// --------------------- MODULE 1052 — BattleEndInstantExitButton ---------------------

// ============================================================ //
// webpack module 1052  —  BattleEndInstantExitButton
// exports: BattleEndInstantExitButton
// deps: 950 (BattleEndPopup), 5039 (GameButton), 7265 (Localisation), 8632 (Stage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[1052] = function BattleEndInstantExitButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, Localisation, Stage, BattleEndPopup, BattleEndInstantExitButton, <class_fields_init>, BattleEndInstantExitButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleEndInstantExitButton = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        Stage = __webpack_require__(8632);
        BattleEndPopup = __webpack_require__(950);
        static buttonPressed () {
        ((BattleEndPopup).BattleEndPopup).proceedToNextState(true);
        return;
};
        <class_fields_init> = undefined;
        BattleEndInstantExitButton;
        class BattleEndInstantExitButton extends <class_fields_init> = (GameButton).GameButton {
            constructor () {
    var battleEndBottomRightMovieClip, okButtonMovieClip, instantLeaveButtonX, instantLeaveButtonY, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xaf6e7 */
        battleEndBottomRightMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "battle_end_bottom_right");
        okButtonMovieClip = (battleEndBottomRightMovieClip).getMovieClipByName("ok_button");
        (this).setMovieClip(okButtonMovieClip, 1);
        (this).setText("txt", ((Localisation).Localisation).getString("BattleEndInstantExitButton"));
        this.scale = 1;
        instantLeaveButtonX = ((Stage).Stage).getMatrixX();
        instantLeaveButtonY = ((this).height + ((this).height / 2.5));
        (this).setXY(instantLeaveButtonX, instantLeaveButtonY);
        (this).setCustomButtonListener(((this).buttonPressed).bind(this));
        return this;
}
        }
        BattleEndInstantExitButton = v8 = BattleEndInstantExitButton;
        exports.BattleEndInstantExitButton = BattleEndInstantExitButton;
        return;
};

