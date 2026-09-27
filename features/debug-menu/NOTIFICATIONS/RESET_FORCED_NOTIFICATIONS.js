var RESET_FORCED_NOTIFICATIONS_BUTTON = {
    label: "RESET_FORCED_NOTIFICATIONS",
    category: DebugMenuCategory.EDebugCategory.NOTIFICATIONS,
    mode: "home"
};

function RESET_FORCED_NOTIFICATIONS_callback() {
    LocalNotificationManager.LocalNotificationManager.resetForcedNotifications();
}
