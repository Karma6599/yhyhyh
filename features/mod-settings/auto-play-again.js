Config.configStatic.AutoPlayAgain = false;
Config.configStatic.ShowAutoPlayAgainRadioButton = false;

LocalisationOverrides.overrides.en.ShowAutoPlayAgainRadioButton_name = "Auto play again";
LocalisationOverrides.overrides.en.ShowAutoPlayAgainRadioButton_descEnabled = "When enabled, auto play again switch will be available in battle.";

function ShowAutoPlayAgainRadioButtonCallback() {
    var showFastPlayAgainButtonClip = ShowFastPlayAgainButtonCallback();
    var parentClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "edit_controls_ui_screen_hud_top");
    var clip = parentClip.getChildByName("locked_movement_controls_button");
    if (clip) {
        clip.x = showFastPlayAgainButtonClip.width / 3;
        clip.y = showFastPlayAgainButtonClip.height / 3.5;
        var stateClip = clip.getChildByName("state");
        if (stateClip) {
            stateClip.gotoAndStopFrameIndex(0);
        }
        showFastPlayAgainButtonClip.addChild(clip);
    }
    return showFastPlayAgainButtonClip;
}

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

var BattleScreen_enter_tail = Libg.Libg.offset(11458712, 0);

function patchAutoPlayAgain() {
    Interceptor.attach(BattleScreen_enter_tail, {
        onEnter() {
            var combatHUD = BattleScreen.BattleScreen.getCombatHUD();
            if (combatHUD.isNull()) {
                return;
            }
            if (Config.Config.config.ShowAutoPlayAgainRadioButton) {
                var autoPlayAgainRadioButton = new BattleAutoPlayAgainRadioButton();
                combatHUD.addChild(autoPlayAgainRadioButton);
                combatHUD.addChild(autoPlayAgainRadioButton.textField);
            }
        }
    });
}
