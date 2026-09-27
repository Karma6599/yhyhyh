// ============================================================= //
// FEATURE: Random theme
// Config key: RandomThemeMask[0] (default false)
// TID prefix: RandomThemes
// Icon: RandomThemesCallback (menu/icons.js, module 2120)
// Wiring: StringTable.onLanguageSet (core/localisation.js, module 9250)
// re-rolls the theme on every game rejoin; the random-theme engine is
// ThemeSelectorManager (features/mod-menu/change-theme.js, module 9244)
// ============================================================= //

Config.configStatic.RandomThemeMask = [false, false, false];

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   RandomThemes_name        = "Random theme"
//   RandomThemes_descEnabled = "When enabled, menu theme will be different every game rejoin."

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

// Bit 0 of the mask — rolled when the language/table init runs
// (core/localisation.js#9250, StringTable.onLanguageSet):
//
//     if (Config.Config.config.RandomThemeMask[0]) {
//         ThemeSelectorManager.setRandomTheme();
//     }
//
// The engine (module 9244, features/mod-menu/change-theme.js):
// with bit 1 clear, background and music are rolled together; with bit 1
// set (music independency), each is rolled separately:
function setRandomTheme() {
    var themesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.Themes);
    var themeItemCount = themesTable.getItemCount();
    if (!Config.Config.config.RandomThemeMask[1]) {
        var sharedRandomThemeResult = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
        Config.Config.config.ThemeBackgroundID = sharedRandomThemeResult;
        Config.Config.config.ThemeMusicID = sharedRandomThemeResult;
    } else {
        Config.Config.config.ThemeBackgroundID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
        Config.Config.config.ThemeMusicID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
    }
    ThemeSelectorManager.themeID = Config.Config.config.ThemeBackgroundID;
}

// Toggle helper (module 9244) — used by the settings popup item
// (RANDOM_THEMES_S1, no configKey: the mask bit is the state):
function patchRandomThemes(offset) {
    Config.Config.config.RandomThemeMask[offset] = !Config.Config.config.RandomThemeMask[offset];
    FileManager.FileManager.updateConfigFile();
}
