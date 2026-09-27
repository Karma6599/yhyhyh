Config.configStatic.ShowOwnPlayerCoordinates = false;

LocalisationOverrides.overrides.en.ShowOwnPlayerCoordinates_name = "Show own brawler coordinates in battle";
LocalisationOverrides.overrides.en.ShowOwnPlayerCoordinates_descEnabled = "When enabled, own character coordinates will be displayed in battle.";

function ShowOwnPlayerCoordinatesCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var xField = getTextField();
    xField.fontSize = 12;
    xField.text = "X: 10";
    var yField = getTextField();
    yField.fontSize = 12;
    yField.text = "Y: 15";
    xField.x = -12;
    xField.y = -12;
    yField.x = -11;
    yField.y = 0;
    iconSprite.addChild(xField);
    iconSprite.addChild(yField);
    return iconSprite;
}

class BattleCoordinates {
    constructor() {
        var coordinatesMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "popover_text_left");
        var coordinatesTextField = coordinatesMovieClip.getTextFieldByName("text");
        coordinatesTextField.x = 115;
        coordinatesTextField.y = 45;
        coordinatesTextField.color = 4294967295.0;
        coordinatesTextField.fontOutline = true;
        this.textField = coordinatesTextField;
    }

    static setText(text) {
        this.textField.text = text;
        return this.textField;
    }
}

var BattleScreen_enter_tail = Libg.Libg.offset(11458712, 0);
var BattleScreen_exit = new NativeFunction(Libg.Libg.offset(11703448, 0), "void", ["pointer"]);

function patchShowOwnPlayerCoordinates() {
    Interceptor.attach(BattleScreen_enter_tail, {
        onEnter() {
            var combatHUD = BattleScreen.BattleScreen.getCombatHUD();
            if (combatHUD.isNull()) {
                return;
            }
            if (Config.Config.config.ShowOwnPlayerCoordinates) {
                CombatHUD.CombatHUD.coordinates = new BattleCoordinates();
                combatHUD.addChild(CombatHUD.CombatHUD.coordinates.textField);
            }
        }
    });
    Interceptor.replace(BattleScreen_exit, new NativeCallback(function (self) {
        BattleScreen.BattleScreen.dispatchListeners(BattleScreen.BattleScreen.exitListeners);
        var combatHUD = BattleScreen.BattleScreen.getCombatHUD();
        if (!combatHUD.isNull()) {
            if (CombatHUD.CombatHUD.coordinates) {
                combatHUD.removeChild(CombatHUD.CombatHUD.coordinates.textField);
                CombatHUD.CombatHUD.coordinates = null;
            }
        }
        BattleScreen_exit(self);
        Breadcrumbs.Breadcrumbs.push("BattleScreen::exit");
    }, "void", ["pointer"]));
}
