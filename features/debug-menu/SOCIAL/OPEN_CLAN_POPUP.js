var OPEN_CLAN_POPUP_BUTTON = {
    label: "OPEN_CLAN_POPUP",
    category: DebugMenuCategory.EDebugCategory.SOCIAL,
    mode: "home"
};

function OPEN_CLAN_POPUP_callback() {
    HomePage.HomePage.tryOpenClanPopup();
}
