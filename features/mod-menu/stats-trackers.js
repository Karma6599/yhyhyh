class StatsTrackersPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("StatsTrackersPopup") });
        this.adjustPopupHeaderButtons("stats_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        for (var tracker of StatsTrackersPopup.TRACKERS) {
            if (!tracker.disabled) {
                var trackerItem = new StatsTrackerItem.StatsTrackerItem(tracker);
                trackerItem.setCustomButtonListener(this.buttonClicked.bind(this), "tracker_" + tracker.id + "_button");
                trackerItem.id = tracker.id;
                this.container.addEntry(trackerItem);
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(2, naviHeight, 32, 0, 0, 0, -1);
        this.container.refreshBounds(naviHeight);
        var accountStatsButtonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        var accountStatsButton = new GameButton.GameButton();
        accountStatsButton.setCustomButtonListener(this.onAccountStatsButtonPressed.bind(this), "account_stats_button");
        accountStatsButton.setMovieClip(accountStatsButtonMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(accountStatsButtonMovieClip.instance, "Text");
        buttonTextField.fontOutline = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString("AccountStats"));
        accountStatsButtonMovieClip.gotoAndStopFrameIndex(1);
        accountStatsButton.x = 0;
        accountStatsButton.y = Stage.Stage.getMatrixY() - (Stage.Stage.getMatrixY() / 6);
        this.accountStatsButton = accountStatsButton;
        var movieClip = this.getMovieClip();
        movieClip.addChild(accountStatsButton);
    }

    buttonClicked(self, button) {
        var statButton = new GameButton.GameButton(button);
        var trackerId = statButton.id;
        var tracker = StatsTrackersPopup.TRACKERS.find(function (e) {
            return e.id === trackerId;
        });
        if (!tracker) {
            return;
        }
        var playerTagString = PlayerInfo.PlayerInfo.tag;
        var webView = SimpleWebView.SimpleWebView.create();
        webView.loadURL(tracker.uri + playerTagString);
        webView.setTitleTid(tracker.name);
        webView.setDisallowModalTap(true);
    }

    formatTimePart(value, label) {
        if (value > 0) {
            return "" + value + " " + label + " ";
        }
        return "";
    }

    getFormattedPlayedTime(seconds) {
        var h = Math.floor(seconds / 3600);
        var m = Math.floor((seconds % 3600) / 60);
        var s = Math.floor(seconds % 60);
        return (this.formatTimePart(h, Localisation.Localisation.getString("HoursShort")) +
            this.formatTimePart(m, Localisation.Localisation.getString("MinsShort")) +
            this.formatTimePart(m, Localisation.Localisation.getString("SecsShort"))).trim();
    }

    onAccountStatsButtonPressed(self, button) {
        var desc = [
            "" + Localisation.Localisation.getString("AccountCreationDate") + ":",
            LogicTime.LogicTime.timestampToDate(parseInt(LoginOkMessage.LoginOkMessage.accountCreatedDate)),
            "",
            "" + Localisation.Localisation.getString("SpentTimeOnline") + ":",
            "" + this.getFormattedPlayedTime(LoginOkMessage.LoginOkMessage.playTimeInSeconds + (Date.now() - LoginOkMessage.LoginOkMessage.sessionStartedTimestamp) / 1000) +
                " /// " + this.getFormattedPlayedTime((Date.now() - LoginOkMessage.LoginOkMessage.sessionStartedTimestamp) / 1000),
            "",
            "" + Localisation.Localisation.getString("SessionCount") + ":",
            LoginOkMessage.LoginOkMessage.sessionCount
        ].join("\n");
        NativeDialog.NativeDialog.show(Localisation.Localisation.getString("AccountStats"), desc, "OK", "", "", NULL);
    }
}

StatsTrackersPopup.TRACKERS = [
    { name: "Brawl Stats", id: 0, disabled: false, uri: "https://brawlstats.com/profile/" },
    { name: "Brawlify", id: 1, disabled: false, uri: "https://brawlify.com/stats/profile/" },
    { name: "Noff", id: 2, disabled: false, uri: "https://www.noff.gg/brawl-stars/profile/" },
    { name: "BrawlFind", id: 3, disabled: false, uri: "https://www.brawlfind.com/player/" }
];
