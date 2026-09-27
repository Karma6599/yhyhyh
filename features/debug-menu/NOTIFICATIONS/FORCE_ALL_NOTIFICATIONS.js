var FORCE_ALL_NOTIFICATIONS_BUTTON = {
    label: "FORCE_ALL_NOTIFICATIONS",
    category: DebugMenuCategory.EDebugCategory.NOTIFICATIONS,
    mode: "home"
};

function FORCE_ALL_NOTIFICATIONS_callback() {
    LocalNotificationManager.LocalNotificationManager.forceAllNotifications();
}
