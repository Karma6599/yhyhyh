Config.configStatic.BackgroundMatchmaking = false;

LocalisationOverrides.overrides.en.BackgroundMatchmaking_name = "Background matchmaking";
LocalisationOverrides.overrides.en.BackgroundMatchmaking_descEnabled = "Don't open the matchmaking screen when tapping the \"PLAY\" button.";
LocalisationOverrides.overrides.ru.BackgroundMatchmaking_name = "Фоновый подбор";
LocalisationOverrides.overrides.ru.BackgroundMatchmaking_descEnabled = "Не открывать экран подбора матча при нажатии кнопки \"ИГРАТЬ\".";

function BackgroundMatchmakingCallback() {
    var matchmakingPopup = StringTable.StringTable.getMovieClip("sc/ui.sc", "matchmaking_popup");
    return matchmakingPopup.getChildByName("loop");
}

var HomePage_openMatchMakingPopup = new NativeFunction(Libg.Libg.offset(11911320, 0), "void", ["pointer", "bool", "uint"]);

function patchBackgroundMatchmaking() {
    Interceptor.replace(HomePage_openMatchMakingPopup, new NativeCallback(function (homeScreen, a2, gameModeVariation) {
        if (!Config.Config.config.BackgroundMatchmaking) {
            HomePage_openMatchMakingPopup(homeScreen, a2, gameModeVariation);
        }
    }, "void", ["pointer", "bool", "uint"]));
}

function onMatchMakingStatusMessageReceived(message) {
    if (Config.Config.config.BackgroundMatchmaking) {
        if (!MessageManager.MessageManager.inMatchMaking) {
            return;
        }
    }
    MessageManager.MessageManager.matchmakingText = "".concat(message.playerCount, "/", message.maxPlayers);
    MessageManager.MessageManager.matchmakingTextPending = true;
}
