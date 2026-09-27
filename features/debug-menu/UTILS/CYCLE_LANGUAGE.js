var CYCLE_LANGUAGE_BUTTON = {
    label: "CYCLE_LANGUAGE",
    category: DebugMenuCategory.EDebugCategory.UTILS
};

var languageCycleIndex = -1;

function cycleLanguage() {
    var count = StringTable.StringTable.getLanguageCount();
    if (count < 2) {
        return "";
    }
    if (languageCycleIndex < 0) {
        languageCycleIndex = StringTable.StringTable.getCurrentLanguageIndex();
    }
    languageCycleIndex = (languageCycleIndex + 1) % count;
    StringTable.StringTable.setLanguageIndex(languageCycleIndex, true);
    var code = StringTable.StringTable.getCurrentLanguageCode();
    rebuildHomeScreenText();
    return code;
}

function rebuildHomeScreenText() {
    if (!GameStateManager.GameStateManager.isInState(GameStateManager.GameStateManager.GameStateId.Home)) {
        return;
    }
}

function CYCLE_LANGUAGE_callback() {
    cycleLanguage();
}
