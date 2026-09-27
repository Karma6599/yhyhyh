var SCROLLABLE_DEBUG_LOG_BUTTON = {
    label: "SCROLLABLE_DEBUG_LOG",
    category: DebugMenuCategory.EDebugCategory.UTILS,
    isDev: true
};

function toggleScrollableDebugLog() {
    if (!EDebugger.EDebugger.isCreated()) {
        return;
    }
}

function SCROLLABLE_DEBUG_LOG_callback() {
    toggleScrollableDebugLog();
}
