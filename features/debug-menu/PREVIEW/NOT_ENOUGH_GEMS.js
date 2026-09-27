var NOT_ENOUGH_GEMS_BUTTON = {
    label: "NOT_ENOUGH_GEMS",
    category: DebugMenuCategory.EDebugCategory.PREVIEW,
    mode: "home"
};

function NOT_ENOUGH_GEMS_callback() {
    NotEnoughGemsPopup.NotEnoughGemsPopup.show();
}
