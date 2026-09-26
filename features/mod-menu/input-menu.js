//============================================================================//
// MOD FEATURE: Input Menu
// In-game name: "Input Menu"  (TID: InputItemsPopupButton)
// Menu: Mod Menu — legacy menu tab(s) (menu/mod-menu.js#8203)
// INPUT MENU popup: visual name change, open profile, spectate by tag, link BSD+, BSD+ state.
//============================================================================//

// --------------------- MODULE 6270 — InputItemsPopup ---------------------


// ============================================================ //
// webpack module 6270  —  InputItemsPopup
// exports: InputItemsPopup
// deps: 1994 (LogicTime), 2556 (BSDPlusManager), 3902 (NativeDialog), 4934 (GUI), 5039 (GameButton), 6012 (InputPopup), 7265 (Localisation), 8261 (ListContainerPopup), 9298 (InputItem)
// ============================================================ //

__webpack_modules__[6270] = function InputItemsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, InputPopup, GameButton, InputItem, GUI, BSDPlusManager, NativeDialog, LogicTime, InputItemsPopup, <class_fields_init>, InputItemsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InputItemsPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        InputPopup = __webpack_require__(6012);
        GameButton = __webpack_require__(5039);
        InputItem = __webpack_require__(9298);
        GUI = __webpack_require__(4934);
        BSDPlusManager = __webpack_require__(2556);
        NativeDialog = __webpack_require__(3902);
        LogicTime = __webpack_require__(1994);
        static refreshItems () {
    var itemData, item, naviHeight;
        ((this).container).clearEntries();
        /* jump -> 0xc57bb */
        itemData = /*iter*/ (this).ITEMS;
        if (!(itemData).disabled) {
            item = new (InputItem).InputItem(itemData);
            (item).setCustomButtonListener(((this).buttonPressed).bind(this), ("").concat((itemData).id, "_input_button"));
            ((this).container).addEntry(item);
        } /* if 0xc57bb */
        } while (!item = (this).ITEMS);
        itemData = naviHeight = <underflow>;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(1, (naviHeight * 1.75), 8, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var inputItem, inputItemId, itemConf;
        inputItem = new (GameButton).GameButton(button);
        inputItemId = (inputItem).id;
        itemConf = ((this).ITEMS).find(function (e) {
        return ((e).id === inputItemId);
});
        if ((itemConf).callback) {
            return;
        } /* if 0xc5896 */
        return;
};
        static getBSDPlusState () {
        if (((BSDPlusManager).BSDPlusManager).EXPIRES_TS) {
        } /* if 0xc5958 */
        /* jump -> 0xc595d */
        return;
};
        <class_fields_init> = undefined;
        InputItemsPopup;
        class InputItemsPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("InputItemsPopup") });
        if (<class_fields_init>) {
        } /* if 0xc5627 */
        this.ITEMS = [{ name: "VisualNameChange", id: ((InputPopup).EInputPopupType).CHANGE_NAME }, { name: "OpenPlayerProfile", id: ((InputPopup).EInputPopupType).OPEN_PROFILE }, { name: "FollowPlayerByTag", id: ((InputPopup).EInputPopupType).FOLLOW_PLAYER, disabled: true }, { name: "LinkBSDPlus", id: ((InputPopup).EInputPopupType).PLUS_LINK }, { name: "BSDPlusState", disabled: true, callback: (this).getBSDPlusState, id: ((InputPopup).EInputPopupType).GET_BSD_PLUS_STATE }];
        (this).adjustPopupHeaderButtons("input");
        (this).refreshItems();
        return this;
}
        }
        InputItemsPopup = LogicTime = InputItemsPopup;
        exports.InputItemsPopup = InputItemsPopup;
        return;
};

