class BattleAutoPlayAgainRadioButton extends RadioButton.RadioButton {
    constructor() {
        var parentMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
        super(parentMovieClip, "locked_movement_controls_button");
        this.buttonX = 32.5;
        this.buttonY = 105;
        this.buttonScale = 0.75;
        if (Config.Config.config.BattleTextChat && PlayerInfo.PlayerInfo.isInGameroom) {
            this.textChatYOffset = 55;
        } else {
            this.textChatYOffset = 0;
        }
        this.textFieldX = 54.5;
        this.textFieldY = 98.5;
        this.setCustomButtonListener(this.buttonPressed.bind(this), "auto_play_again_radiobutton");
        this.x = this.buttonX;
        this.y = this.buttonY + this.textChatYOffset;
        this.scale = this.buttonScale;
        this.textField = TextFieldHelper.TextFieldHelper.createTextTextField();
        this.textField.text = Localisation.Localisation.getString("AutoPlayAgain");
        this.textField.fontSize = 14;
        this.textField.color = 4294967295.0;
        this.textField.fontOutline = true;
        this.textField.x = this.textFieldX;
        this.textField.y = this.textFieldY + this.textChatYOffset;
    }

    buttonPressed(self, button) {
        Config.Config.config.AutoPlayAgain = !Config.Config.config.AutoPlayAgain;
        FileManager.FileManager.updateConfigFile();
    }
}
