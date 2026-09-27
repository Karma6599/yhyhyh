var OPEN_DEVICE_LINK_FROM_SETTINGS_BUTTON = {
    label: "OPEN_DEVICE_LINK_FROM_SETTINGS",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    mode: "home"
};

function OPEN_DEVICE_LINK_FROM_SETTINGS_callback() {
    DeviceLinkWindow.DeviceLinkWindow.show();
}
