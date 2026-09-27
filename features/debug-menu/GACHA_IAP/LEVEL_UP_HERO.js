var LEVEL_UP_HERO_BUTTON = {
    label: "LEVEL_UP_HERO",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 127,
    intParameter: 1
};

function LEVEL_UP_HERO_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(LEVEL_UP_HERO_BUTTON.actionIdx, LEVEL_UP_HERO_BUTTON.intParameter);
}
