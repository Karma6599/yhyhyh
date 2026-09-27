var MAP_EDITOR_TOGGLE_GRID_BUTTON = {
    label: "MAP_EDITOR_TOGGLE_GRID",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "mapeditor"
};

function MAP_EDITOR_TOGGLE_GRID_callback() {
    MapEditorScreen.MapEditorScreen.toggleGrid();
}
