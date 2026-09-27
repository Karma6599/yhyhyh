var NOTIFICATION_SETTINGS_BUTTON = {
    label: "NOTIFICATION_SETTINGS",
    category: DebugMenuCategory.EDebugCategory.PREVIEW,
    mode: "home"
};

function NOTIFICATION_SETTINGS_callback() {
    NotificationSettingsPopup.NotificationSettingsPopup.show();
}
