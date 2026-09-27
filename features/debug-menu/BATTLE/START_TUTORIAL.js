var START_TUTORIAL_BUTTON = {
    label: "START_TUTORIAL",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "home"
};

function startTutorial() {
    var avatar = GameStateManager.GameStateManager.getPlayerAvatar();
    if (avatar.instance.isNull()) {
        return;
    }
}

function START_TUTORIAL_callback() {
    startTutorial();
}
