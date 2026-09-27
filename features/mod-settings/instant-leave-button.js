Config.configStatic.BattleEndInstantExit = true;

LocalisationOverrides.overrides.en.BattleEndInstantExit_name = "Instant leave button";
LocalisationOverrides.overrides.en.BattleEndInstantExit_descEnabled = "When enabled, instant exit to lobby button will be available at the battle end screen";

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

var BattleEndPopup_ctor = Libg.Libg.offset(9459592, 0);
var BattleEndPopup_proceedToNextState = new NativeFunction(Libg.Libg.offset(9545328, 0), "void", ["pointer", "int"]);

function patchInstantLeaveButton() {
    Interceptor.attach(BattleEndPopup_ctor, {
        onEnter(args) {
            BattleEndPopup.BattleEndPopup.instance = new GUIContainer.GUIContainer(args[0]);
        },
        onLeave() {
            if (Config.Config.config.BattleEndInstantExit) {
                var instantLeaveButton = new BattleEndInstantExitButton();
                BattleEndPopup.BattleEndPopup.instance.getMovieClip().addChild(instantLeaveButton);
            }
        }
    });
}
