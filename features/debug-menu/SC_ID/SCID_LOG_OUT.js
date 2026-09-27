var SCID_LOG_OUT_BUTTON = {
    label: "SCID_LOG_OUT",
    category: DebugMenuCategory.EDebugCategory.SC_ID
};

function SCID_LOG_OUT_callback() {
    GameSCIDManager.GameSCIDManager.logOut();
}
