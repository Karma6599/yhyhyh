var SHOW_TID_KEYS_BUTTON = {
    label: "SHOW_TID_KEYS",
    category: DebugMenuCategory.EDebugCategory.UTILS,
    checkbox: {}
};

function toggleShowTidKeys() {
    var enabled = StringTable.StringTable.toggleShowTidKeys();
    rebuildHomeScreenText();
    if (enabled) {
    }
}

function rebuildHomeScreenText() {
    if (!GameStateManager.GameStateManager.isInState(GameStateManager.GameStateManager.GameStateId.Home)) {
        return;
    }
}

function isShowTidKeys() {
    return StringTable.StringTable.isShowTidKeys();
}

function SHOW_TID_KEYS_callback() {
    toggleShowTidKeys();
}

function SHOW_TID_KEYS_getState() {
    return isShowTidKeys();
}
