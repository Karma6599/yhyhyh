var MAP_EDITOR_BYPASS_SAVE_VALIDATION_BUTTON = {
    label: "MAP_EDITOR_BYPASS_SAVE_VALIDATION",
    category: DebugMenuCategory.EDebugCategory.MAP_EDITOR,
    mode: "mapeditor",
    checkbox: {}
};

function MAP_EDITOR_BYPASS_SAVE_VALIDATION_callback() {
    MapEditorScreen.MapEditorScreen.toggleSaveValidationBypass();
}

function MAP_EDITOR_BYPASS_SAVE_VALIDATION_getState() {
    return MapEditorScreen.MapEditorScreen.isSaveValidationBypassed();
}
