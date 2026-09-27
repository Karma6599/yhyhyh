var COPY_ACCOUNT_ID_BUTTON = {
    label: "COPY_ACCOUNT_ID",
    category: DebugMenuCategory.EDebugCategory.UTILS
};

function copyAccountId() {
    var accountId = GameMain.GameMain.getAccountId();
    var tag = "".concat(accountId.getHigh(), "-", accountId.getLow());
    Application.Application.copyString(tag);
}

function COPY_ACCOUNT_ID_callback() {
    copyAccountId();
}
