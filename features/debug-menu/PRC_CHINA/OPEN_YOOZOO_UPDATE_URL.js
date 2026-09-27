var OPEN_YOOZOO_UPDATE_URL_BUTTON = {
    label: "OPEN_YOOZOO_UPDATE_URL",
    category: DebugMenuCategory.EDebugCategory.PRC_CHINA,
    mode: "home"
};

var YOOZOO_UPDATE_URL = "https://brawl.yoozoo.com/";

function OPEN_YOOZOO_UPDATE_URL_callback() {
    Application.Application.openUrl(YOOZOO_UPDATE_URL);
}
