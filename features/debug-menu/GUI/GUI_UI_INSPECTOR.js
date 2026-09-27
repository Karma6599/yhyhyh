var GUI_UI_INSPECTOR_BUTTON = {
    label: "GUI_UI_INSPECTOR",
    category: DebugMenuCategory.EDebugCategory.GUI,
    checkbox: {}
};

function GUI_UI_INSPECTOR_callback() {
    UiInspector.UiInspector.toggle();
}

function GUI_UI_INSPECTOR_getState() {
    return UiInspector.UiInspector.isEnabled();
}
