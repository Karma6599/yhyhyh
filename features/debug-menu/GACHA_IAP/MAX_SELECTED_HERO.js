var MAX_SELECTED_HERO_BUTTON = {
    label: "MAX_SELECTED_HERO",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 72,
    intParameter: 1
};

function MAX_SELECTED_HERO_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(MAX_SELECTED_HERO_BUTTON.actionIdx, MAX_SELECTED_HERO_BUTTON.intParameter);
}
