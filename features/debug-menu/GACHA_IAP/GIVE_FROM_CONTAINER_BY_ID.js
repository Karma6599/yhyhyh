var GIVE_FROM_CONTAINER_BY_ID_BUTTON = {
    label: "GIVE_FROM_CONTAINER_BY_ID",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

function GIVE_FROM_CONTAINER_BY_ID_callback() {
    GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.GIVE_FROM_CONTAINER_PICK_CONTAINER), true, true, false);
}
