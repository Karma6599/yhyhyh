var TOGGLE_ZOOM_BUTTON = {
    label: "TOGGLE_ZOOM",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle",
    checkbox: {}
};

function TOGGLE_ZOOM_callback() {
    BattleCamera.BattleCamera.toggleZoom();
}

function TOGGLE_ZOOM_getState() {
    return BattleCamera.BattleCamera.zoomMultiplier !== 1;
}
