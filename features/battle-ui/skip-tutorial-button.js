class BattleSkipTutorialButton extends GameButton.GameButton {
    constructor() {
        super();
        var battleButtonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "map_editor_big_exit_button");
        this.setMovieClip(battleButtonMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(battleButtonMovieClip.instance, "txt");
        buttonTextField.fontOutline = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString("BattleSkipTutorialButton"));
        this.setXY(60, 120);
        this.setCustomButtonListener(this.buttonClicked.bind(this), "battle_skip_tutorial_button");
    }

    buttonClicked(self, button) {
        BattleScreen.BattleScreen.sendGoHomeMessage();
    }
}
