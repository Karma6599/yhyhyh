var NEXT_CAMERA_MODE_BUTTON = {
    label: "NEXT_CAMERA_MODE",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle"
};

function NEXT_CAMERA_MODE_callback() {
    BattleCamera.BattleCamera.setNextMode();
}
