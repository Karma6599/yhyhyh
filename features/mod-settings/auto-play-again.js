//============================================================================//
// MOD FEATURE: Auto play again
// In-game name: "Auto play again"  (TID: ShowAutoPlayAgainRadioButton_name)
// Description: "When enabled, auto play again switch will be available in battle."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ShowAutoPlayAgainRadioButton  (default false)
// Implementation below:
// Note: Also drives Config.AutoPlayAgain (MessageManager auto-requeue, module 9168).
//============================================================================//

// --------------------- MODULE 5420 — BattleAutoPlayAgainRadioButton ---------------------


// ============================================================ //
// webpack module 5420  —  BattleAutoPlayAgainRadioButton
// exports: BattleAutoPlayAgainRadioButton
// deps: 211 (TextFieldHelper), 699 (FileManager), 4009 (Config), 7265 (Localisation), 9250 (StringTable), 9445 (RadioButton), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[5420] = function BattleAutoPlayAgainRadioButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var RadioButton, StringTable, Config, FileManager, Localisation, PlayerInfo, TextFieldHelper, BattleAutoPlayAgainRadioButton, <class_fields_init>, BattleAutoPlayAgainRadioButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleAutoPlayAgainRadioButton = undefined;
        RadioButton = __webpack_require__(9445);
        StringTable = __webpack_require__(9250);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        Localisation = __webpack_require__(7265);
        PlayerInfo = __webpack_require__(9518);
        TextFieldHelper = __webpack_require__(211);
        static buttonPressed (self, button) {
        ((Config).Config).config.AutoPlayAgain = (!(((Config).Config).config).AutoPlayAgain);
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        <class_fields_init> = undefined;
        BattleAutoPlayAgainRadioButton;
        class BattleAutoPlayAgainRadioButton extends <class_fields_init> = (RadioButton).RadioButton {
            constructor () {
    var parentMovieClip, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        parentMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
        this = super(parentMovieClip, "locked_movement_controls_button");
        if (<class_fields_init>) {
        } /* if 0xaec53 */
        this.buttonX = 32.5;
        this.buttonY = 105;
        this.buttonScale = 0.75;
        if ((((Config).Config).config).BattleTextChat) {
            if (((PlayerInfo).PlayerInfo).isInGameroom) {
            } /* if 0xaec9d */
        } /* if 0xaec9d */
        /* jump -> 0xaec9e */
        55.textChatYOffset = 0;
        this.textFieldX = 54.5;
        this.textFieldY = 98.5;
        (this).setCustomButtonListener(((this).buttonPressed).bind(this), "auto_play_again_radiobutton");
        this.x = (this).buttonX;
        this.y = ((this).buttonY + (this).textChatYOffset);
        this.scale = (this).buttonScale;
        if ((((Config).Config).config).AutoPlayAgain) {
        } /* if 0xaed33 */
        /* jump -> 0xaed34 */
        this.textField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
        (this).textField.text = ((Localisation).Localisation).getString("AutoPlayAgain");
        (this).textField.fontSize = 14;
        (this).textField.color = 4294967295.0;
        (this).textField.fontOutline = true;
        (this).textField.x = (this).textFieldX;
        (this).textField.y = ((this).textFieldY + (this).textChatYOffset);
        return this;
}
        }
        BattleAutoPlayAgainRadioButton = <class_fields_init> = BattleAutoPlayAgainRadioButton;
        exports.BattleAutoPlayAgainRadioButton = BattleAutoPlayAgainRadioButton;
        return;
};

