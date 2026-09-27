var ADD_SPECTATORS_BUTTON = {
    label: "ADD_SPECTATORS",
    category: DebugMenuCategory.EDebugCategory.REPLAY_SPECTATE,
    mode: "battle"
};

function ADD_SPECTATORS_callback() {
    GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.ADD_SPECTATORS), true, true, false);
}
