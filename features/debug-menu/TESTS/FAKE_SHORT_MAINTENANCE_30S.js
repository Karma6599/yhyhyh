var FAKE_SHORT_MAINTENANCE_30S_BUTTON = {
    label: "FAKE_SHORT_MAINTENANCE_30S",
    category: DebugMenuCategory.EDebugCategory.TESTS,
    mode: "home"
};

function FAKE_SHORT_MAINTENANCE_30S_callback() {
    MaintenancePopupPreview.MaintenancePopupPreview.showShort30s();
}
