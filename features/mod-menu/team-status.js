//============================================================================//
// MOD FEATURE: Team Status
// In-game name: "Team Status"  (TID: StatusesPopupButton)
// Menu: Mod Menu — Lobby tab(s) (menu/mod-menu.js#8203)
// Team status selector — requires being in a team.
//============================================================================//

// --------------------- MODULE 6265 — StatusSelector ---------------------


// ============================================================ //
// webpack module 6265  —  StatusSelector
// exports: StatusSelectorPopup
// deps: 1760 (StatusItem), 4934 (GUI), 5039 (GameButton), 5599 (TeamMemberStatusMessage), 7265 (Localisation), 8261 (ListContainerPopup), 9168 (MessageManager)
// ============================================================ //

__webpack_modules__[6265] = function StatusSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, StatusItem, TeamMemberStatusMessage, MessageManager, GUI, GameButton, StatusSelectorPopup, <class_fields_init>, StatusSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StatusSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        StatusItem = __webpack_require__(1760);
        TeamMemberStatusMessage = __webpack_require__(5599);
        MessageManager = __webpack_require__(9168);
        GUI = __webpack_require__(4934);
        GameButton = __webpack_require__(5039);
        static refreshItems () {
    var listContainer, statusItemIndex, statusItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        this.statusItemsCount = (this).statusesArray.length;
        statusItemIndex = 0;
        while ((statusItemIndex < (this).statusItemsCount)) {
            statusItem = new (StatusItem).StatusItem((this).statusesArray[statusItemIndex]);
            (statusItem).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(statusItem);
            statusItemIndex = ((statusItemIndex) + 1);
            (statusItemIndex++);
        } /* while 0xcf55e */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var statusButton, teamMemberStatus, teamMemberStatusMessage;
        statusButton = new (GameButton).GameButton(button);
        teamMemberStatus = (statusButton).id;
        teamMemberStatusMessage = new (TeamMemberStatusMessage).TeamMemberStatusMessage(teamMemberStatus);
        ((MessageManager).MessageManager).sendMessage(teamMemberStatusMessage);
        return;
};
        <class_fields_init> = undefined;
        StatusSelectorPopup;
        class StatusSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("StatusesPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xcf42f */
        this.statusesArray = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.statusItemsCount = 0;
        (this).adjustPopupHeaderButtons("status_selector");
        (this).refreshItems();
        StatusSelectorPopup.instance = this;
        if (this) {
            return this;
        } /* if 0xcf48e (open) */
}
        }
        StatusSelectorPopup = <class_fields_init> = StatusSelectorPopup;
        exports.StatusSelectorPopup = StatusSelectorPopup;
        return;
};

