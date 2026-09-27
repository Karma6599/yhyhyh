class BattleFastPlayAgainButton extends GameButton.GameButton {
    constructor() {
        super();
        var fastPlayAgainButtonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        this.setMovieClip(fastPlayAgainButtonMovieClip, 1);
        var textField = fastPlayAgainButtonMovieClip.getTextFieldByName("txt");
        textField.fontOutline = true;
        textField.setTextScaleIfNecessary(Localisation.Localisation.getString("FastPlayAgain"));
        this.setCustomButtonListener(this.buttonPressed.bind(this), "fast_play_again_button");
        this.x = Stage.Stage.getMatrixX() - 60;
        this.y = 40;
        this.visibility = false;
        CombatHUD.CombatHUD.fastPlayAgainButton = this;
    }

    buttonPressed(self, button) {
        MessageManager.MessageManager.sendMessage(new PlayAgainMessage.PlayAgainMessage(true));
    }
}
