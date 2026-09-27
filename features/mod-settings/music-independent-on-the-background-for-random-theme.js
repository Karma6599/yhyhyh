// ============================================================= //
// FEATURE: Music independent on the background for random theme
// Config key: RandomThemeMask[1] (default false)
// TID prefix: RandomThemesMusicIndependency
// Icon: RandomThemesMusicIndependencyCallback (menu/icons.js, module 2120)
// Wiring: ThemeSelectorManager.setRandomTheme
// (features/mod-menu/change-theme.js, module 9244) — bit 1 makes the
// random music roll separately from the random background roll
// ============================================================= //

Config.configStatic.RandomThemeMask = [false, false, false];

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   RandomThemesMusicIndependency_name        = "Music independent on the background for random theme"
//   RandomThemesMusicIndependency_descEnabled = "When enabled, music will be different from its associated background."

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

// The branch owned by this feature — ThemeSelectorManager.setRandomTheme
// (module 9244, features/mod-menu/change-theme.js):
//
//     if (!Config.Config.config.RandomThemeMask[1]) {
//         // shared roll: background and music stay a matched pair
//         var sharedRandomThemeResult = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
//         Config.Config.config.ThemeBackgroundID = sharedRandomThemeResult;
//         Config.Config.config.ThemeMusicID = sharedRandomThemeResult;
//     } else {
//         // bit 1 set: independent rolls — music no longer follows the background
//         Config.Config.config.ThemeBackgroundID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
//         Config.Config.config.ThemeMusicID = LogicRandom.LogicRandom.getRandomInRangeExcept(0, themeItemCount - 1, ThemeSelectorManager.EXCEPTIONS);
//     }
//
// The full decoded setRandomTheme engine is reproduced in
// features/mod-settings/random-theme.js (same consumer method).
