var ADD_SPECTATORS_BRAWLTV_BUTTON = {
    label: "ADD_SPECTATORS_BRAWLTV",
    category: DebugMenuCategory.EDebugCategory.REPLAY_SPECTATE,
    mode: "battle"
};

function ADD_SPECTATORS_BRAWLTV_callback() {
    GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.ADD_SPECTATORS_BRAWLTV), true, true, false);
}
