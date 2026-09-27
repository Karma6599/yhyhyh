var SCID_DEBUG_CLEAR_ALL_BUTTON = {
    label: "SCID_DEBUG_CLEAR_ALL",
    category: DebugMenuCategory.EDebugCategory.SC_ID
};

function scidDebugClearAllData() {
    StringObject.StringObject.with("", function (dir) {
        return GameSCIDManager.GameSCIDManager.debugClearAllData(dir);
    });
}

function SCID_DEBUG_CLEAR_ALL_callback() {
    scidDebugClearAllData();
}
