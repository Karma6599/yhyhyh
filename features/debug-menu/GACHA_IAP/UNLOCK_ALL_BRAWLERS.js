var UNLOCK_ALL_BRAWLERS_BUTTON = {
    label: "UNLOCK_ALL_BRAWLERS",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

function UNLOCK_ALL_BRAWLERS_callback() {
    LogicDebugButtonMessage.LogicDebugButtonMessage.unlockAllBrawlers();
}
