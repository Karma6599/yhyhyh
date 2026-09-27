Config.configStatic.SharedBackground = false;

LocalisationOverrides.overrides.en.UseThemeAllScreens_name = "Static background";
LocalisationOverrides.overrides.en.UseThemeAllScreens_descEnabled = "When enabled, every game screen background will be replaced with menu background.";

function SharedBackgroundCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_city");
}
