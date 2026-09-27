var SCID_RELOAD_CONFIG_BUTTON = {
    label: "SCID_RELOAD_CONFIG",
    category: DebugMenuCategory.EDebugCategory.SC_ID
};

function scidReloadConfig() {
    GameSCIDManager.GameSCIDManager.init();
}

function SCID_RELOAD_CONFIG_callback() {
    scidReloadConfig();
}
