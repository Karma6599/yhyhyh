var SMOOTH_HUD_BUTTON = {
    label: "SMOOTH_HUD",
    category: DebugMenuCategory.EDebugCategory.GFX,
    checkbox: {}
};

function SMOOTH_HUD_callback() {
    SmoothHud.SmoothHud.toggle();
}

function SMOOTH_HUD_getState() {
    return SmoothHud.SmoothHud.isEnabled();
}
