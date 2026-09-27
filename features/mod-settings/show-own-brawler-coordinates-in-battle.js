// ============================================================= //
// FEATURE: Show own brawler coordinates in battle
// Config key: ShowOwnPlayerCoordinates (default false)
// TID prefix: ShowOwnPlayerCoordinates
// Icon: ShowOwnPlayerCoordinatesCallback (menu/icons.js, module 2120)
// Wiring: BattleScreen enter/exit hooks (ui/screens.js, module 7835)
// mount the BattleCoordinates overlay (module 2542, game/objects.js)
// ============================================================= //

Config.configStatic.ShowOwnPlayerCoordinates = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   ShowOwnPlayerCoordinates_name        = "Show own brawler coordinates in battle"
//   ShowOwnPlayerCoordinates_descEnabled = "When enabled, own character coordinates will be displayed in battle."

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

// BattleCoordinates (module 2542, game/objects.js) — the overlay widget:
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

// BattleScreen natives (module 7835, ui/screens.js):
var BattleScreen_enter_tail = Libg.Libg.offset(11458712, 0);
var BattleScreen_exit = new NativeFunction(Libg.Libg.offset(11703448, 0), "void", ["pointer"]);

// Mounted at battle start — inside the enter_tail hook, after the HUD is
// ready (the sibling wiring there belongs to the other battle-UI features):
//
//     if (Config.Config.config.ShowOwnPlayerCoordinates) {
//         CombatHUD.CombatHUD.coordinates = new BattleCoordinates();
//         combatHUD.addChild(CombatHUD.CombatHUD.coordinates.textField);
//     }
//
// Unmounted at battle exit:
//
//     if (CombatHUD.CombatHUD.coordinates) {
//         combatHUD.removeChild(CombatHUD.CombatHUD.coordinates.textField);
//         CombatHUD.CombatHUD.coordinates = null;
//     }
//
// NOTE: the per-frame X/Y text update is not present in this build's JS —
// the BattleScreen_update onLeave hook body is empty in the decompile, so
// the live coordinate feed (native side) is documented, not invented.
