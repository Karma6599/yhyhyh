var CAMERA_SETTINGS_BUTTON = {
    label: "CAMERA_SETTINGS",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle"
};

function CAMERA_SETTINGS_callback() {
    new CameraSettingsPopup.CameraSettingsPopup();
}
