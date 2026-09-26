//============================================================================//
// MOD FEATURE: Gatcha
// In-game name: "Gatcha"  (TID: GatchaPopup)
// Menu: Mod Menu — Other tab(s) (menu/mod-menu.js#8203)
// Gatcha drop simulator — opens the Brawler Menu (animations menu).
//============================================================================//

// --------------------- MODULE 6988 — Gatcha ---------------------


// ============================================================ //
// webpack module 6988  —  Gatcha
// exports: GatchaPopup
// deps: 819 (BrawlerMenu), 1018 (HomeMode), 4934 (GUI), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 8569 (HomeScreen), 9300 (GatchaItem)
// ============================================================ //

__webpack_modules__[6988] = function Gatcha_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, GameButton, GUI, BrawlerMenu, HomeMode, GatchaItem, HomeScreen, GatchaPopup, <class_fields_init>, GatchaPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GatchaPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        GUI = __webpack_require__(4934);
        BrawlerMenu = __webpack_require__(819);
        HomeMode = __webpack_require__(1018);
        GatchaItem = __webpack_require__(9300);
        HomeScreen = __webpack_require__(8569);
        static refreshItems () {
    var index, item, button, naviHeight;
        ((this).container).clearEntries();
        /* jump -> 0xc4ac7 */
        /*iter*/ /*iter*/ ((GatchaPopup).gatchaPopupItemsArray).entries();
        index = /*iter*/ ((GatchaPopup).gatchaPopupItemsArray).entries();
        ((GatchaPopup).gatchaPopupItemsArray).entries();
        item = index = item = naviHeight = <underflow>;
        if (!(item).disabled) {
            button = new (GatchaItem).GatchaItem(item);
            (button).setCustomButtonListener(((GatchaPopup).buttonPressed).bind(this), ("gatcha_").concat(((Localisation).Localisation).getString((item).name)));
            button.id = index;
            ((this).container).addEntry(button);
        } /* if 0xc4ac6 */
        } while (!button);
        button = <underflow>;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        <class_fields_init> = undefined;
        GatchaPopup;
        class GatchaPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("GatchaPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xc49ac */
        (this).adjustPopupHeaderButtons("gatcha");
        (this).refreshItems();
        return this;
}
            buttonPressed (self, button) {
    var gatchaButton, callback, gatchaType;
        gatchaButton = new (GameButton).GameButton(button);
        if (!((undefined) === undefined)) {
            callback = (Object(undefined)).callback;
            gatchaType = (Object(undefined)).gatchaType;
            Object(undefined);
        } /* if 0xc4b7b */
        /* jump -> 0xc4b8f */
        gatchaButton = callback = gatchaType = <underflow>;
        /* loop: jump back to 0xc4b6b */
        if (callback) {
            callback(gatchaType);
            return;
        } /* if 0xc4b9d */
        ((HomeScreen).HomeScreen).doOfflineGatcha(gatchaType);
        return;
}
            openBrawlerMenuPopup (gatchaType) {
        return;
}
            openSkinMenuPopup () {
        return;
}
        }
        GatchaPopup = GatchaPopup = GatchaPopup;
        exports.GatchaPopup = GatchaPopup;
        GatchaPopup.gatchaPopupItemsArray = [{ name: "BrawlerMenuPopup", callback: (GatchaPopup).openBrawlerMenuPopup, gatchaType: (((HomeMode).HomeMode).gatchaType).Character }, { name: "SkinMenuPopup", callback: (GatchaPopup).openSkinMenuPopup, gatchaType: (((HomeMode).HomeMode).gatchaType).Skin }, { name: "GadgetMenuPopup", callback: (GatchaPopup).openBrawlerMenuPopup, gatchaType: (((HomeMode).HomeMode).gatchaType).Gadget }, { name: "StarPowerMenuPopup", callback: (GatchaPopup).openBrawlerMenuPopup, gatchaType: (((HomeMode).HomeMode).gatchaType).StarPower }, { name: "HyperchargeMenuPopup", callback: (GatchaPopup).openBrawlerMenuPopup, gatchaType: (((HomeMode).HomeMode).gatchaType).Hypercharge }, { name: "PrestigeMenuPopup", callback: (GatchaPopup).openBrawlerMenuPopup, gatchaType: -1 }, { name: "CoinsGatcha", gatchaType: (((HomeMode).HomeMode).gatchaType).Coins }, { name: "TokenDoublersGatcha", gatchaType: (((HomeMode).HomeMode).gatchaType).TokenDoublers }, { name: "PlayerIconGatcha", gatchaType: (((HomeMode).HomeMode).gatchaType).PlayerIcon }, { name: "BoxGatcha", gatchaType: (((HomeMode).HomeMode).gatchaType).Box }];
        return;
};

