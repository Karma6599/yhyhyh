var FAKE_MAINTENANCE_MODE_BUTTON = {
    label: "FAKE_MAINTENANCE_MODE",
    category: DebugMenuCategory.EDebugCategory.TESTS,
    mode: "home"
};

function FAKE_MAINTENANCE_MODE_callback() {
    MaintenancePopupPreview.MaintenancePopupPreview.showDefault();
}
