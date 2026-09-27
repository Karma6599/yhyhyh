var RESET_HERO_GEARS_BUTTON = {
    label: "RESET_HERO_GEARS",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 118,
    intParameter: 1
};

function RESET_HERO_GEARS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(RESET_HERO_GEARS_BUTTON.actionIdx, RESET_HERO_GEARS_BUTTON.intParameter);
}
