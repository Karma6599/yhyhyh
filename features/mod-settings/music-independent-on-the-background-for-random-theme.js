Config.configStatic.RandomThemeMask = [false, false, false];

LocalisationOverrides.overrides.en.RandomThemesMusicIndependency_name = "Music independent on the background for random theme";
LocalisationOverrides.overrides.en.RandomThemesMusicIndependency_descEnabled = "When enabled, music will be different from its associated background.";

function RandomThemesMusicIndependencyCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    var battleClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_music");
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

function setRandomTheme() {
    var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
    var themeItemCount = themesTable.getItemCount();
    if (!Config.Config.config.RandomThemeMask[1]) {
        var sharedRandomThemeResult = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelector.ThemeSelectorManager.EXCEPTIONS);
        Config.Config.config.ThemeBackgroundID = sharedRandomThemeResult;
        Config.Config.config.ThemeMusicID = sharedRandomThemeResult;
    } else {
        Config.Config.config.ThemeBackgroundID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelector.ThemeSelectorManager.EXCEPTIONS);
        Config.Config.config.ThemeMusicID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelector.ThemeSelectorManager.EXCEPTIONS);
    }
    ThemeSelector.ThemeSelectorManager.themeID = Config.Config.config.ThemeBackgroundID;
}
