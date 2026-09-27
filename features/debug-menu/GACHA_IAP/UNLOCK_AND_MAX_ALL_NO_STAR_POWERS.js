var UNLOCK_AND_MAX_ALL_NO_STAR_POWERS_BUTTON = {
    label: "UNLOCK_AND_MAX_ALL_NO_STAR_POWERS",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP,
    actionIdx: 117,
    intParameter: 1
};

function UNLOCK_AND_MAX_ALL_NO_STAR_POWERS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.send(UNLOCK_AND_MAX_ALL_NO_STAR_POWERS_BUTTON.actionIdx, UNLOCK_AND_MAX_ALL_NO_STAR_POWERS_BUTTON.intParameter);
}
