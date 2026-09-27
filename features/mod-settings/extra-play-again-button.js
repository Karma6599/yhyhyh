Config.configStatic.ShowFastPlayAgainButton = true;

LocalisationOverrides.overrides.en.ShowFastPlayAgainButton_name = "Extra play again button";
LocalisationOverrides.overrides.en.ShowFastPlayAgainButton_descEnabled = "When enabled, play again button will be shown at the end of the battle.";

function ShowFastPlayAgainButtonCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_quest_play_again");
}

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

var BattleScreen_enter_tail = Libg.Libg.offset(11458712, 0);
var BattleScreen_exit = new NativeFunction(Libg.Libg.offset(11703448, 0), "void", ["pointer"]);

function patchExtraPlayAgainButton() {
    Interceptor.attach(BattleScreen_enter_tail, {
        onEnter() {
            var combatHUD = BattleScreen.BattleScreen.getCombatHUD();
            if (combatHUD.isNull()) {
                return;
            }
            if (Config.Config.config.ShowFastPlayAgainButton) {
                var battleFastPlayAgainButton = new BattleFastPlayAgainButton();
                combatHUD.addChild(battleFastPlayAgainButton);
            }
        }
    });
    Interceptor.replace(BattleScreen_exit, new NativeCallback(function (self) {
        BattleScreen.BattleScreen.dispatchListeners(BattleScreen.BattleScreen.exitListeners);
        BattleScreen_exit(self);
        Breadcrumbs.Breadcrumbs.push("BattleScreen::exit");
        CombatHUD.CombatHUD.fastPlayAgainButton = null;
    }, "void", ["pointer"]));
}
