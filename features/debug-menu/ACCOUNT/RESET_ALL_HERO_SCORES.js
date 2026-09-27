var RESET_ALL_HERO_SCORES_BUTTON = {
    label: "RESET_ALL_HERO_SCORES",
    category: DebugMenuCategory.EDebugCategory.ACCOUNT,
    actionIdx: 172,
    intParameter: 1000
};

function RESET_ALL_HERO_SCORES_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(RESET_ALL_HERO_SCORES_BUTTON.actionIdx, RESET_ALL_HERO_SCORES_BUTTON.intParameter);
}
