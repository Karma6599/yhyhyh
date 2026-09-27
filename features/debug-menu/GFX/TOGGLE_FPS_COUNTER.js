var TOGGLE_FPS_COUNTER_BUTTON = {
    label: "TOGGLE_FPS_COUNTER",
    category: DebugMenuCategory.EDebugCategory.GFX,
    checkbox: {}
};

function toggleFpsCounter() {
    FPSCounter.FPSCounter.toggleEnabled();
}

function isFpsCounterShown() {
    return FPSCounter.FPSCounter.isEnabled();
}

function TOGGLE_FPS_COUNTER_callback() {
    toggleFpsCounter();
}

function TOGGLE_FPS_COUNTER_getState() {
    return isFpsCounterShown();
}
