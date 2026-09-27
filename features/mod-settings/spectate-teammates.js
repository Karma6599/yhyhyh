// ============================================================= //
// FEATURE: Spectate teammates
// Config key: ShowSpectateButton (default false)
// TID prefix: SpectateButton
// Icon: none (questionmark fallback in the settings popup)
// Wiring: config key only in this build — the actual camera spectate
// runs through the game's own follow-spectate mode, exposed by the
// debug button TOGGLE_FOLLOW_SPECTATE (menu/debug-tools.js) and
// BattleScreen (ui/screens.js, module 7835)
// ============================================================= //

Config.configStatic.ShowSpectateButton = false;

LocalisationOverrides.overrides.en.SpectateButton_name = "Spectate teammates";
LocalisationOverrides.overrides.en.SpectateButton_descEnabled = "Shows the game's own spectate button in any team mode, so you can move the camera to your teammates.";
LocalisationOverrides.overrides.ru.SpectateButton_name = "Камера на союзников";
LocalisationOverrides.overrides.ru.SpectateButton_descEnabled = "Показывает родную кнопку спектатора в любом командном режиме - камера переключается на союзников.";

// BattleScreen natives (module 7835, ui/screens.js):
var BattleScreen_swapFollowSpectate = new NativeFunction(Libg.Libg.offset(11706068, 0), "void", ["pointer"]);
var followSpectateOffset = LogicMemory.LogicMemory.offset(4060, 4164);

// Follow-spectate state reader — BattleScreen (module 7835):
function isFollowSpectate() {
    var instance = BattleScreen.BattleScreen.getInstance();
    if (instance.isNull()) {
        return false;
    }
    return instance.add(followSpectateOffset).readU8() === 1;
}

// DebugCallbacks (menu/debug-tools.js) — the debug-menu path that actually
// drives the camera to teammates (TOGGLE_FOLLOW_SPECTATE button,
// DebugMenuCategory REPLAY_SPECTATE):
//
//     toggleFollowSpectate() {
//         if (BattleMode.BattleMode.getInstance().isNull()) {
//             return;
//         }
//         ...swapFollowSpectate...
//     }
//     isFollowSpectate() {
//         if (BattleMode.BattleMode.getInstance().isNull()) {
//             return false;
//         }
//         return BattleScreen.BattleScreen.isFollowSpectate();
//     }
//
// No JS consumer reads ShowSpectateButton in this build — the toggle only
// carries the user's intent; the spectate camera is exercised through the
// debug button and the BattleCamera feature (show-camera-button-in-battle.js).
