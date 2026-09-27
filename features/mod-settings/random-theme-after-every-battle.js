Config.configStatic.RandomThemeMask = [false, false, false];

LocalisationOverrides.overrides.en.RandomThemesAfterBattle_name = "Random theme after every battle";
LocalisationOverrides.overrides.en.RandomThemesAfterBattle_descEnabled = "When enabled, theme will be changed to random every time you enter and exit battle.";

function RandomThemesAfterBattleCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var battleClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    iconRandom.x = iconBg.width / 3;
    iconRandom.y = iconBg.height / 3.5;
    iconRandom.scale = 0.7;
    battleClip.x = -iconRandom.x;
    battleClip.y = -iconRandom.y;
    battleClip.scale = 0.7;
    iconSprite.addChild(iconBg);
    iconSprite.addChild(iconRandom);
    iconSprite.addChild(battleClip);
    return iconSprite;
}

var BattleScreen_exit = new NativeFunction(Libg.Libg.offset(11703448, 0), "void", ["pointer"]);

function patchRandomThemeAfterBattle() {
    Interceptor.replace(BattleScreen_exit, new NativeCallback(function (self) {
        BattleScreen.BattleScreen.dispatchListeners(BattleScreen.BattleScreen.exitListeners);
        BattleScreen_exit(self);
        Breadcrumbs.Breadcrumbs.push("BattleScreen::exit");
        if (Config.Config.config.RandomThemeMask[2]) {
            ThemeSelector.ThemeSelectorManager.setRandomTheme();
        }
    }, "void", ["pointer"]));
}
