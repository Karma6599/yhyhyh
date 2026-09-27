var RESET_CUSTOM_BACKGROUND_BUTTON = {
    label: "RESET_CUSTOM_BACKGROUND",
    category: DebugMenuCategory.EDebugCategory.UTILS,
    mode: "home"
};

function RESET_CUSTOM_BACKGROUND_callback() {
    CustomBackground.CustomBackground.clear();
}
