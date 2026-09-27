var FORCE_ACTIVE_NOTIFICATIONS_BUTTON = {
    label: "FORCE_ACTIVE_NOTIFICATIONS",
    category: DebugMenuCategory.EDebugCategory.NOTIFICATIONS,
    mode: "home"
};

function FORCE_ACTIVE_NOTIFICATIONS_callback() {
    LocalNotificationManager.LocalNotificationManager.forceActiveNotifications();
}
