var MAP_EDITOR_UNLOCK_FULL_PALETTE_BUTTON = {
    label: "MAP_EDITOR_UNLOCK_FULL_PALETTE",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "mapeditor",
    checkbox: {}
};

function MAP_EDITOR_UNLOCK_FULL_PALETTE_callback() {
    MapEditorScreen.MapEditorScreen.toggleFullPalette();
}

function MAP_EDITOR_UNLOCK_FULL_PALETTE_getState() {
    return MapEditorScreen.MapEditorScreen.isFullPaletteUnlocked();
}
