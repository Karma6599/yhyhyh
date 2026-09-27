var MAP_EDITOR_ERASE_ALL_BUTTON = {
    label: "MAP_EDITOR_ERASE_ALL",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "mapeditor"
};

function MAP_EDITOR_ERASE_ALL_callback() {
    MapEditorScreen.MapEditorScreen.eraseAll();
}
