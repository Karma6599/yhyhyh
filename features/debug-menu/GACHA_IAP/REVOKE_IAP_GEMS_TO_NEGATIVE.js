var REVOKE_IAP_GEMS_TO_NEGATIVE_BUTTON = {
    label: "REVOKE_IAP_GEMS_TO_NEGATIVE",
    category: DebugMenuCategory.EDebugCategory.GACHA_IAP
};

var REVOKE_GEMS_TARGET = -100;

function revokeIapGemsToNegative() {
    var avatar = GameStateManager.GameStateManager.getPlayerAvatar();
    if (avatar.instance.isNull()) {
        return;
    }
}

function REVOKE_IAP_GEMS_TO_NEGATIVE_callback() {
    revokeIapGemsToNegative();
}
