var MAP_EDITOR_BYPASS_PLACEMENT_ZONES_BUTTON = {
    label: "MAP_EDITOR_BYPASS_PLACEMENT_ZONES",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "mapeditor",
    checkbox: {}
};

function MAP_EDITOR_BYPASS_PLACEMENT_ZONES_callback() {
    MapEditorScreen.MapEditorScreen.togglePlacementRestrictionBypass();
}

function MAP_EDITOR_BYPASS_PLACEMENT_ZONES_getState() {
    return MapEditorScreen.MapEditorScreen.isPlacementRestrictionBypassed();
}
