var GIVE_BY_GLOBAL_ID_BUTTON = {
    label: "GIVE_BY_GLOBAL_ID",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

function GIVE_BY_GLOBAL_ID_callback() {
    GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.GIVE_BY_GLOBAL_ID), true, true, false);
}
