var NEXT_THEME_BUTTON = {
    label: "NEXT_THEME",
    category: DebugMenuCategory.EDebugCategory.UTILS
};

function NEXT_THEME_callback() {
    ThemeSelectorManager.ThemeSelectorManager.cycleTheme(1);
}
