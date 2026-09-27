class BattleEndInstantExitButton extends GameButton.GameButton {
    constructor() {
        super();
        var battleEndBottomRightMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "battle_end_bottom_right");
        var okButtonMovieClip = battleEndBottomRightMovieClip.getMovieClipByName("ok_button");
        this.setMovieClip(okButtonMovieClip, 1);
        this.setText("txt", Localisation.Localisation.getString("BattleEndInstantExitButton"));
        this.scale = 1;
        var instantLeaveButtonX = Stage.Stage.getMatrixX();
        var instantLeaveButtonY = this.height + this.height / 2.5;
        this.setXY(instantLeaveButtonX, instantLeaveButtonY);
        this.setCustomButtonListener(this.buttonPressed.bind(this));
    }

    buttonPressed() {
        BattleEndPopup.BattleEndPopup.proceedToNextState(true);
    }
}
