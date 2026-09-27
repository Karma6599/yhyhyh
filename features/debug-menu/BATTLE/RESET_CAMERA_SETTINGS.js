var RESET_CAMERA_SETTINGS_BUTTON = {
    label: "RESET_CAMERA_SETTINGS",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle"
};

function RESET_CAMERA_SETTINGS_callback() {
    BattleCamera.BattleCamera.reset();
}
