var SCID_LOG_OUT_ALL_DEVICES_BUTTON = {
    label: "SCID_LOG_OUT_ALL_DEVICES",
    category: DebugMenuCategory.EDebugCategory.SC_ID
};

function SCID_LOG_OUT_ALL_DEVICES_callback() {
    GameSCIDManager.GameSCIDManager.logOutFromAllDevices();
}
