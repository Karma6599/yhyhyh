var OPEN_MAP_EDITOR_POPUP_BUTTON = {
    label: "OPEN_MAP_EDITOR_POPUP",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "home"
};

function OPEN_MAP_EDITOR_POPUP_callback() {
    HomePage.HomePage.tryOpenMapEditorPopup();
}
