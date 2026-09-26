//============================================================================//
// MOD FEATURE: Stats Trackers
// In-game name: "Stats Trackers"  (TID: StatsTrackersButton)
// Menu: Mod Menu — Other tab(s) (menu/mod-menu.js#8203)
// Tracker buttons (Brawl Stats / Brawlify / Noff / BrawlFind) opening player stats pages.
//============================================================================//

// --------------------- MODULE 9634 — StatsTrackers ---------------------


// ============================================================ //
// webpack module 9634  —  StatsTrackers
// exports: StatsTrackersPopup
// deps: 612 (MovieClip), 1056 (SimpleWebView), 1994 (LogicTime), 3902 (NativeDialog), 4934 (GUI), 5039 (GameButton), 5485 (LoginOkMessage), 7265 (Localisation), 8261 (ListContainerPopup), 8632 (Stage), 9250 (StringTable), 9391 (StatsTrackerItem), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[9634] = function StatsTrackers_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, StatsTrackerItem, StringTable, GameButton, MovieClip, Stage, LogicTime, LoginOkMessage, NativeDialog, SimpleWebView, GUI, PlayerInfo, StatsTrackersPopup, <class_fields_init>, StatsTrackersPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StatsTrackersPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        StatsTrackerItem = __webpack_require__(9391);
        StringTable = __webpack_require__(9250);
        GameButton = __webpack_require__(5039);
        MovieClip = __webpack_require__(612);
        Stage = __webpack_require__(8632);
        LogicTime = __webpack_require__(1994);
        LoginOkMessage = __webpack_require__(5485);
        NativeDialog = __webpack_require__(3902);
        SimpleWebView = __webpack_require__(1056);
        GUI = __webpack_require__(4934);
        PlayerInfo = __webpack_require__(9518);
        static refreshItems () {
    var listContainer, tracker, trackerItem, naviHeight, accountStatsButtonMovieClip, accountStatsButton, buttonTextField, movieClip;
        listContainer = (this).container;
        (listContainer).clearEntries();
        /* jump -> 0xced5c */
        tracker = /*iter*/ (StatsTrackersPopup).TRACKERS;
        if (!(tracker).disabled) {
            trackerItem = new (StatsTrackerItem).StatsTrackerItem(tracker);
            (trackerItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("tracker_").concat((tracker).id, "_button"));
            trackerItem.id = (tracker).id;
            ((this).container).addEntry(trackerItem);
        } /* if 0xced5c */
        } while (!trackerItem);
        trackerItem = (StatsTrackersPopup).TRACKERS;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(2, naviHeight, 32, 0, 0, 0, -1);
        ((this).container).refreshBounds(naviHeight);
        accountStatsButtonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        accountStatsButton = new (GameButton).GameButton();
        (accountStatsButton).setCustomButtonListener(((this).onAccountStatsButtonPressed).bind(this), "account_stats_button");
        (accountStatsButton).setMovieClip((accountStatsButtonMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((accountStatsButtonMovieClip).instance, "Text");
        buttonTextField.fontOutline = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString("AccountStats"));
        (accountStatsButtonMovieClip).gotoAndStopFrameIndex(1);
        accountStatsButton.x = 0;
        accountStatsButton.y = (((Stage).Stage).getMatrixY() - (((Stage).Stage).getMatrixY() / 6));
        this.accountStatsButton = accountStatsButton;
        movieClip = (this).getMovieClip();
        return;
};
        static buttonClicked (self, button) {
    var statButton, trackerId, tracker, playerTagString, webView;
        statButton = new (GameButton).GameButton(button);
        trackerId = (statButton).id;
        tracker = ((StatsTrackersPopup).TRACKERS).find(function (e) {
        return ((e).id === trackerId);
});
        if ((!tracker)) {
            return;
        } /* if 0xcef5d */
        playerTagString = ((PlayerInfo).PlayerInfo).tag;
        webView = ((SimpleWebView).SimpleWebView).create();
        (webView).loadURL(((tracker).uri + playerTagString));
        (webView).setTitleTid((tracker).name);
        (webView).setDisallowModalTap(true);
        return;
};
        static formatTimePart (value, label) {
        if ((value > 0)) {
            return ("").concat(value, " ", label, " ");
        } /* if 0xcf037 */
        return "";
};
        static getFormattedPlayedTime (seconds) {
    var h, m, s;
        h = (Math).floor((seconds / 3600));
        m = (Math).floor(((seconds % 3600) / 60));
        s = (Math).floor((seconds % 60));
        return ((((this).formatTimePart(h, ((Localisation).Localisation).getString("HoursShort")) + (this).formatTimePart(m, ((Localisation).Localisation).getString("MinsShort"))) + (this).formatTimePart(m, ((Localisation).Localisation).getString("SecsShort")))).trim();
};
        static onAccountStatsButtonPressed (self, button) {
    var desc;
        desc = ([("").concat(((Localisation).Localisation).getString("AccountCreationDate"), ":"), ((LogicTime).LogicTime).timestampToDate(parseInt(((LoginOkMessage).LoginOkMessage).accountCreatedDate)), "", ("").concat(((Localisation).Localisation).getString("SpentTimeOnline"), ":"), ("").concat((this).getFormattedPlayedTime((((LoginOkMessage).LoginOkMessage).playTimeInSeconds + (((Date).now() - ((LoginOkMessage).LoginOkMessage).sessionStartedTimestamp) / 1000))), " /// ", (this).getFormattedPlayedTime((((Date).now() - ((LoginOkMessage).LoginOkMessage).sessionStartedTimestamp) / 1000))), "", ("").concat(((Localisation).Localisation).getString("SessionCount"), ":"), ((LoginOkMessage).LoginOkMessage).sessionCount]).join("\n");
        return;
};
        <class_fields_init> = undefined;
        StatsTrackersPopup;
        class StatsTrackersPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("StatsTrackersPopup") });
        if (<class_fields_init>) {
        } /* if 0xcec21 */
        (this).adjustPopupHeaderButtons("stats_popup");
        (this).refreshItems();
        return this;
}
        }
        StatsTrackersPopup = LoginOkMessage = StatsTrackersPopup;
        exports.StatsTrackersPopup = StatsTrackersPopup;
        StatsTrackersPopup.TRACKERS = [{ name: "Brawl Stats", id: 0, disabled: false, uri: "https://brawlstats.com/profile/" }, { name: "Brawlify", id: 1, disabled: false, uri: "https://brawlify.com/stats/profile/" }, { name: "Noff", id: 2, disabled: false, uri: "https://www.noff.gg/brawl-stars/profile/" }, { name: "BrawlFind", id: 3, disabled: false, uri: "https://www.brawlfind.com/player/" }];
        return;
};

