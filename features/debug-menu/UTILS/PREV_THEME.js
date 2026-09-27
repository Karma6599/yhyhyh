var PREV_THEME_BUTTON = {
    label: "PREV_THEME",
    category: DebugMenuCategory.EDebugCategory.UTILS
};

function PREV_THEME_callback() {
    ThemeSelectorManager.ThemeSelectorManager.cycleTheme(-1);
}
