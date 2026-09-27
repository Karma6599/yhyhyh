var SLOW_MOTION_4X_BUTTON = {
    label: "SLOW_MOTION_4X",
    category: DebugMenuCategory.EDebugCategory.UTILS,
    checkbox: {}
};

function toggleSlowMode() {
    var enabled = GameMain.GameMain.toggleSlowMode();
    if (enabled) {
    }
}

function isSlowModeEnabled() {
    return GameMain.GameMain.isSlowMode();
}

function SLOW_MOTION_4X_callback() {
    toggleSlowMode();
}

function SLOW_MOTION_4X_getState() {
    return isSlowModeEnabled();
}
