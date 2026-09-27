Config.configStatic.RandomThemeMask = [false, false, false];

LocalisationOverrides.overrides.en.RandomThemes_name = "Random theme";
LocalisationOverrides.overrides.en.RandomThemes_descEnabled = "When enabled, menu theme will be different every game rejoin.";

function RandomThemesCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var iconBg = SharedBackgroundCallback();
    var iconRandomParent = StringTable.StringTable.getMovieClip("sc/ui.sc", "event_icon_random");
    var iconRandom = iconRandomParent.getChildById(1);
    iconRandom.x = iconBg.width / 3;
    iconRandom.y = iconBg.height / 3.5;
    iconRandom.scale = 0.7;
    iconSprite.addChild(iconBg);
    iconSprite.addChild(iconRandom);
    return iconSprite;
}

function initThemeExceptions() {
    var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
    var themeItemCount = themesTable.getItemCount();
    ThemeSelector.ThemeSelectorManager.EXCEPTIONS.length = 0;
    for (var i = 0; i < themeItemCount; i++) {
        var theme = themesTable.getItemAt(i);
        if (theme && theme.isDisabled()) {
            ThemeSelector.ThemeSelectorManager.EXCEPTIONS.push(i);
        }
    }
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

function patchRandomThemes(offset) {
    Config.Config.config.RandomThemeMask[offset] = !Config.Config.config.RandomThemeMask[offset];
    FileManager.FileManager.updateConfigFile();
}

function onLanguageSet() {
    Localisation.Localisation.isLanguageIndexSet = true;
    StringTable.overlaysPending = true;
    if (Config.Config.config.RandomThemeMask[0]) {
        setRandomTheme();
    }
}
