var MAP_PREVIEW_BUTTON = {
    label: "MAP_PREVIEW",
    category: DebugMenuCategory.EDebugCategory.PREVIEW
};

function MAP_PREVIEW_callback() {
    new MapPreview.MapPreview().show();
}
