Config.configStatic.ShowMuteButton = false;

LocalisationOverrides.overrides.en.ShowMuteButton_name = "Show mute button";
LocalisationOverrides.overrides.en.ShowMuteButton_descEnabled = "When enabled, sound mute button will be available in battle.";
LocalisationOverrides.overrides.ru.ShowMuteButton_name = "Кнопка отключения звука";
LocalisationOverrides.overrides.ru.ShowMuteButton_descEnabled = "Когда включено: в бою будет отображаться кнопка отключения звука.";

var BattleScreen_exit = new NativeFunction(Libg.Libg.offset(11703448, 0), "void", ["pointer"]);

function patchShowMuteButton() {
    Interceptor.replace(BattleScreen_exit, new NativeCallback(function (self) {
        BattleScreen.BattleScreen.dispatchListeners(BattleScreen.BattleScreen.exitListeners);
        BattleScreen_exit(self);
        Breadcrumbs.Breadcrumbs.push("BattleScreen::exit");
        CombatHUD.CombatHUD.muteButton = null;
    }, "void", ["pointer"]));
}
