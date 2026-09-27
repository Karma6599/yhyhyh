// ============================================================= //
// FEATURE: Static background
// Config key: SharedBackground (default false)
// TID prefix: UseThemeAllScreens
// Icon: SharedBackgroundCallback (menu/icons.js, module 2120)
// Wiring: popup item (menu/mod-configuration.js, module 6893,
// shouldReopenSettingsPopup: true). The every-screen background
// sharing itself is applied by the theme engine (module 9244 /
// HomeScreen 8569) and has no separate JS consumer in this build.
// ============================================================= //

Config.configStatic.SharedBackground = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   UseThemeAllScreens_name        = "Static background"
//   UseThemeAllScreens_descEnabled = "When enabled, every game screen background will be replaced with menu background."

function SharedBackgroundCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_city");
}

// The settings popup reopens itself after toggling (so the popup itself
// re-renders on the new shared background):
//   { id: EModItem.SHARED_BACKGROUND, infoPrefix: "UseThemeAllScreens",
//     key: Config.config.SharedBackground, configKey: "SharedBackground",
//     shouldReopenSettingsPopup: true, iconCallback: IconCallbacks.SharedBackgroundCallback }
//
// Theme selection for the shared background runs through the same
// ThemeSelectorManager / HomeScreen_refreshTheme path as the other theme
// features (see random-theme.js and legacy-backgrounds.js).
