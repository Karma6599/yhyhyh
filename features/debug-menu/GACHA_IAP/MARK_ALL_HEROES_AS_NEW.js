var MARK_ALL_HEROES_AS_NEW_BUTTON = {
    label: "MARK_ALL_HEROES_AS_NEW",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 113,
    intParameter: 1
};

function MARK_ALL_HEROES_AS_NEW_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(MARK_ALL_HEROES_AS_NEW_BUTTON.actionIdx, MARK_ALL_HEROES_AS_NEW_BUTTON.intParameter);
}
