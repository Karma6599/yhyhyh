var MAP_EDITOR_FILL_ALL_BUTTON = {
    label: "MAP_EDITOR_FILL_ALL",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "mapeditor"
};

function MAP_EDITOR_FILL_ALL_callback() {
    MapEditorScreen.MapEditorScreen.fillAll();
}
