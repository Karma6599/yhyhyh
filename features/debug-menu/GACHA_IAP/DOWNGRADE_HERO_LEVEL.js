var DOWNGRADE_HERO_LEVEL_BUTTON = {
    label: "DOWNGRADE_HERO_LEVEL",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 128,
    intParameter: -1
};

function DOWNGRADE_HERO_LEVEL_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(DOWNGRADE_HERO_LEVEL_BUTTON.actionIdx, DOWNGRADE_HERO_LEVEL_BUTTON.intParameter);
}
