//============================================================================//
// MOD FEATURE: Skip tutorial button
// Skip tutorial button in battle (l10n: BattleSkipTutorialButton).
//============================================================================//

// --------------------- MODULE 6579 — BattleSkipTutorialButton ---------------------


// ============================================================ //
// webpack module 6579  —  BattleSkipTutorialButton
// exports: BattleSkipTutorialButton
// deps: 612 (MovieClip), 5039 (GameButton), 7265 (Localisation), 7835 (BattleScreen), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[6579] = function BattleSkipTutorialButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, MovieClip, Localisation, BattleScreen, BattleSkipTutorialButton, <class_fields_init>, BattleSkipTutorialButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleSkipTutorialButton = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        Localisation = __webpack_require__(7265);
        BattleScreen = __webpack_require__(7835);
        static buttonClicked (self, button) {
        return;
};
        <class_fields_init> = undefined;
        BattleSkipTutorialButton;
        class BattleSkipTutorialButton extends <class_fields_init> = (GameButton).GameButton {
            constructor () {
    var battleButtonMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xafc06 */
        battleButtonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        (this).setMovieClip((battleButtonMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((battleButtonMovieClip).instance, "txt");
        buttonTextField.fontOutline = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString("BattleSkipTutorialButton"));
        (this).setXY(60, 120);
        (this).setCustomButtonListener(((this).buttonClicked).bind(this), "battle_skip_tutorial_button");
        return this;
}
        }
        BattleSkipTutorialButton = v8 = BattleSkipTutorialButton;
        exports.BattleSkipTutorialButton = BattleSkipTutorialButton;
        return;
};

