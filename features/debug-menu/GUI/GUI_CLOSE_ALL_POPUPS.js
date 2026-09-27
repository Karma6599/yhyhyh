var GUI_CLOSE_ALL_POPUPS_BUTTON = {
    label: "GUI_CLOSE_ALL_POPUPS",
    category: DebugMenuCategory.EDebugCategory.GUI
};

function GUI_CLOSE_ALL_POPUPS_callback() {
    GUI.GUI.closeAllPopups();
}
