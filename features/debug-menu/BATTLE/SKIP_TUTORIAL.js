var SKIP_TUTORIAL_BUTTON = {
    label: "SKIP_TUTORIAL",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle"
};

function skipTutorial() {
    if (BattleMode.BattleMode.getInstance().isNull()) {
        return;
    }
}

function SKIP_TUTORIAL_callback() {
    skipTutorial();
}
