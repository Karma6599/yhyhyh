var LOAD_REPLAY_BUTTON = {
    label: "LOAD_REPLAY",
    category: DebugMenuCategory.EDebugCategory.REPLAY_SPECTATE,
    mode: "home"
};

function LOAD_REPLAY_callback() {
    GUI.GUI.showPopup(new InputPopup(InputPopup.EInputPopupType.WATCH_SHARED_REPLAY), true, true, false);
}
