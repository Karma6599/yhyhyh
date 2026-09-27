// ============================================================= //
// FEATURE: Background matchmaking
// Config key: BackgroundMatchmaking (default false)
// TID prefix: BackgroundMatchmaking
// Icon: BackgroundMatchmakingCallback (menu/icons.js, module 2120)
// Wiring: HomePage (ui/screens.js, module 2757) suppresses the
// matchmaking popup; MessageManager (network/connection.js)
// keeps the status text alive only while on the matchmaking screen.
// ============================================================= //

Config.configStatic.BackgroundMatchmaking = false;

LocalisationOverrides.overrides.en.BackgroundMatchmaking_name = "Background matchmaking";
LocalisationOverrides.overrides.en.BackgroundMatchmaking_descEnabled = "Don't open the matchmaking screen when tapping the \"PLAY\" button.";
LocalisationOverrides.overrides.ru.BackgroundMatchmaking_name = "Фоновый подбор";
LocalisationOverrides.overrides.ru.BackgroundMatchmaking_descEnabled = "Не открывать экран подбора матча при нажатии кнопки \"ИГРАТЬ\".";

function BackgroundMatchmakingCallback() {
    var matchmakingPopup = StringTable.StringTable.getMovieClip("sc/ui.sc", "matchmaking_popup");
    return matchmakingPopup.getChildByName("loop");
}

// HomePage native (module 2757, ui/screens.js):
var HomePage_openMatchMakingPopup = new NativeFunction(Libg.Libg.offset(11911320, 0), "void", ["pointer", "bool", "uint"]);

function patchBackgroundMatchmaking() {
    // Installed by HomePage (ui/screens.js#2757): when enabled, tapping PLAY
    // does NOT open the matchmaking popup — matchmaking keeps running in background.
    Interceptor.replace(HomePage_openMatchMakingPopup, new NativeCallback(function (homeScreen, a2, gameModeVariation) {
        if (!Config.Config.config.BackgroundMatchmaking) {
            HomePage_openMatchMakingPopup(homeScreen, a2, gameModeVariation);
        }
    }, "void", ["pointer", "bool", "uint"]));
}

// MessageManager (network/connection.js): while matchmaking runs in the
// background, status updates are only applied when the player is actually
// looking at the matchmaking screen.
function onMatchMakingStatusMessageReceived(message) {
    if (Config.Config.config.BackgroundMatchmaking) {
        if (!MessageManager.inMatchMaking) {
            return;
        }
    }
    MessageManager.matchmakingText = "".concat(message.playerCount, "/", message.maxPlayers);
    MessageManager.matchmakingTextPending = true;
}
