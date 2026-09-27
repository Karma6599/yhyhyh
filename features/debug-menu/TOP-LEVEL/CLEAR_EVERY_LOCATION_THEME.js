function CLEAR_EVERY_LOCATION_THEME_callback() {
    Config.Config.config.LocationThemeOverrides = {};
    GameMain.GameMain.reloadGame();
}
