var OPEN_NOTIFICATION_SETTINGS_BUTTON = {
    label: "OPEN_NOTIFICATION_SETTINGS",
    category: DebugMenuCategory.EDebugCategory.NOTIFICATIONS,
    mode: "home"
};

function OPEN_NOTIFICATION_SETTINGS_callback() {
    NotificationSettingsPopup.NotificationSettingsPopup.show();
}
