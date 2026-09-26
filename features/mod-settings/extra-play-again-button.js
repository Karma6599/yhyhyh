//============================================================================//
// MOD FEATURE: Extra play again button
// In-game name: "Extra play again button"  (TID: ShowFastPlayAgainButton_name)
// Description: "When enabled, play again button will be shown at the end of the battle."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ShowFastPlayAgainButton  (default true)
// Implementation below:
// Note: The button itself is rendered by BattleScreen (ui/screens.js#7835).
//============================================================================//

// --------------------- MODULE 3988 — BattleFastPlayAgainButton ---------------------


// ============================================================ //
// webpack module 3988  —  BattleFastPlayAgainButton
// exports: BattleFastPlayAgainButton
// deps: 2476 (CombatHUD), 3226 (PlayAgainMessage), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 8632 (Stage), 9168 (MessageManager), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[3988] = function BattleFastPlayAgainButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, Localisation, Stage, MessageManager, PlayAgainMessage, CombatHUD, GUI, BattleFastPlayAgainButton, <class_fields_init>, BattleFastPlayAgainButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleFastPlayAgainButton = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        Stage = __webpack_require__(8632);
        MessageManager = __webpack_require__(9168);
        PlayAgainMessage = __webpack_require__(3226);
        CombatHUD = __webpack_require__(2476);
        GUI = __webpack_require__(4934);
        static buttonPressed (self, button) {
        ((MessageManager).MessageManager).sendMessage(new (PlayAgainMessage).PlayAgainMessage(true));
        return;
};
        <class_fields_init> = undefined;
        BattleFastPlayAgainButton;
        class BattleFastPlayAgainButton extends <class_fields_init> = (GameButton).GameButton {
            constructor () {
    var fastPlayAgainButtonMovieClip, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xaf976 */
        fastPlayAgainButtonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        (this).setMovieClip(fastPlayAgainButtonMovieClip, 1);
        textField = (fastPlayAgainButtonMovieClip).getTextFieldByName("txt");
        textField.fontOutline = true;
        (textField).setTextScaleIfNecessary(((Localisation).Localisation).getString("FastPlayAgain"));
        (this).setCustomButtonListener(((this).buttonPressed).bind(this), "fast_play_again_button");
        this.x = (((Stage).Stage).getMatrixX() - 60);
        this.y = 40;
        this.visibility = false;
        (CombatHUD).CombatHUD.fastPlayAgainButton = this;
        return this;
}
        }
        BattleFastPlayAgainButton = BattleFastPlayAgainButton = BattleFastPlayAgainButton;
        exports.BattleFastPlayAgainButton = BattleFastPlayAgainButton;
        return;
};

