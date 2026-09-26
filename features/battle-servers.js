// =============================================================
// FEATURE: Battle Servers
// config keys: RegionId
// Server/region selection menu (also SlowMode lives in core bootstrap).
// merged webpack modules: 9698 BattleServers, 5493 BattleSeverItem
// =============================================================

// --------------------- MODULE 9698 — BattleServers ---------------------

// ============================================================ //
// webpack module 9698  —  BattleServers
// exports: BattleServersManager, BattleServersPopup
// deps: 699 (FileManager), 4009 (Config), 4934 (GUI), 5039 (GameButton), 5493 (BattleSeverItem), 7265 (Localisation), 8261 (ListContainerPopup), 9168 (MessageManager), 9250 (StringTable), 9322 (Latency)
// ============================================================ //

__webpack_modules__[9698] = function BattleServers_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, Latency, BattleSeverItem, GameButton, Localisation, GUI, Config, FileManager, MessageManager, BattleServersPopup, <class_fields_init>, BattleServersPopup, BattleServersManager, <class_fields_init>, BattleServersManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleServersPopup = undefined;
        undefined.BattleServersManager = exports;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        Latency = __webpack_require__(9322);
        BattleSeverItem = __webpack_require__(5493);
        GameButton = __webpack_require__(5039);
        Localisation = __webpack_require__(7265);
        GUI = __webpack_require__(4934);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        MessageManager = __webpack_require__(9168);
        static refreshItems () {
    var latencyTests, i, latencyData, isSelected, isNaturalBest, i, itemConfig, battleServerItem;
        ((this).container).clearEntries();
        (this).battleServers.length = 0;
        if ((BattleServersManager).shouldSpoof()) {
            ((this).battleServers).push({ name: ((StringTable).StringTable).getString("TID_EDIT_REVERT"), regionId: -1, ping: -1, isBest: false });
        } /* if 0xc1520 */
        latencyTests = ((MessageManager).MessageManager).getLatencyTests();
        i = 0;
        while ((i < latencyTests.length)) {
            latencyData = latencyTests[i];
            if (((BattleServersManager).preferredBattleRegionId === (latencyData).getRegionId())) {
                if ((BattleServersManager).isInitializing) {
                    BattleServersManager.lastChangedBattleServerName = (latencyData).getServerName();
                    BattleServersManager.lastChangedBattleServerPing = (latencyData).getPing();
                    BattleServersManager.isInitializing = false;
                } /* if 0xc15a3 */
            } /* if 0xc15a3 */
            isSelected = ((BattleServersManager).preferredBattleRegionId === (latencyData).getRegionId());
            if (((BattleServersManager).preferredBattleRegionId === -1)) {
                ((BattleServersManager).preferredBattleRegionId === -1);
                isNaturalBest = (i === 1);
            } /* if 0xc15cb */
            if (!isSelected) {
            } /* if 0xc1604 */
            ((this).battleServers).push({ name: (latencyData).getServerName(), regionId: (latencyData).getRegionId(), isBest: isNaturalBest, ping: (latencyData).getPing() });
            i = ((i) + 1);
            (i++);
        } /* while 0xc162b */
        i = 0;
        while ((i < (this).battleServers.length)) {
            itemConfig = (this).battleServers[i];
            battleServerItem = new (BattleSeverItem).BattleSeverItem(itemConfig);
            battleServerItem.id = i;
            (battleServerItem).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(battleServerItem);
            i = ((i) + 1);
            (i++);
        } /* while 0xc16a5 */
        return;
};
        static buttonPressed (self, button) {
    var battleServerButton, index, selectedServer;
        battleServerButton = new (GameButton).GameButton(button);
        index = (battleServerButton).id;
        selectedServer = (this).battleServers[index];
        if ((!selectedServer)) {
            return;
        } /* if 0xc174d */
        if (((selectedServer).regionId === -1)) {
            (BattleServersManager).reset();
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("BattleServerWasReverted"));
        } /* if 0xc178d */
        /* jump -> 0xc17d9 */
        (BattleServersManager).setRegion((selectedServer).regionId, (selectedServer).name, (selectedServer).ping);
        ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("BattleServerChangeWaitWarn"), 4287332352.0);
        ((Latency).Latency).test();
        return;
};
        <class_fields_init> = undefined;
        BattleServersPopup;
        class BattleServersPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("BattleServersPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xc142a */
        this.battleServers = [];
        (this).adjustPopupHeaderButtons("battle_servers");
        (this).refreshItems();
        return this;
}
        }
        BattleServersPopup = FileManager = BattleServersPopup;
        exports.BattleServersPopup = BattleServersPopup;
        <class_fields_init> = undefined;
        BattleServersManager;
        class BattleServersManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xc19be (open) */
}
            loadFromConfig () {
        if ((typeof (((Config).Config).config).RegionId === "number")) {
            if (((((Config).Config).config).RegionId !== -1)) {
                this.preferredBattleRegionId = (((Config).Config).config).RegionId;
                this.lastChangedBattleServerPing = 0;
                this.lastChangedBattleServerName = "Loading...";
                this.isInitializing = true;
                return;
            } /* if 0xc1890 (open) */
        } /* if 0xc1890 (open) */
}
            setRegion (id, name, ping) {
        this.preferredBattleRegionId = id;
        this.lastChangedBattleServerName = name;
        this.lastChangedBattleServerPing = ping;
        this.isInitializing = false;
        ((Config).Config).config.RegionId = id;
        return;
}
            reset () {
        this.preferredBattleRegionId = -1;
        this.lastChangedBattleServerName = "";
        this.lastChangedBattleServerPing = -1;
        this.isInitializing = false;
        ((Config).Config).config.RegionId = -1;
        return;
}
            shouldSpoof () {
        return ((this).preferredBattleRegionId !== -1);
}
        }
        BattleServersManager = FileManager = BattleServersManager;
        exports.BattleServersManager = BattleServersManager;
        BattleServersManager.preferredBattleRegionId = -1;
        BattleServersManager.lastChangedBattleServerName = "";
        BattleServersManager.lastChangedBattleServerPing = -1;
        BattleServersManager.isInitializing = false;
        return;
};

// --------------------- MODULE 5493 — BattleSeverItem ---------------------

// ============================================================ //
// webpack module 5493  —  BattleSeverItem
// exports: BattleSeverItem
// deps: 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[5493] = function BattleSeverItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, BattleSeverItem, <class_fields_init>, BattleSeverItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleSeverItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        <class_fields_init> = undefined;
        BattleSeverItem;
        class BattleSeverItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (buttonConf) {
    var buttonMovieClip, battleServerItemText, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb238f */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        buttonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((buttonMovieClip).instance, 1);
        battleServerItemText = undefined;
        if (!((buttonConf).regionId === -1)) {
            ((buttonConf).regionId === -1);
            if (((buttonConf).ping === 1)) {
                battleServerItemText = (buttonConf).name;
            } /* if 0xb23ff */
        } /* if 0xb23f0 */
        /* jump -> 0xb242b */
        battleServerItemText = ("").concat((buttonConf).name, " (", ((buttonConf).ping).toString(), " ms)");
        textField = (buttonMovieClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(battleServerItemText);
        (buttonMovieClip).gotoAndStopFrameIndex((+(!(buttonConf).isBest)));
        return this;
}
        }
        BattleSeverItem = BattleSeverItem = BattleSeverItem;
        exports.BattleSeverItem = BattleSeverItem;
        return;
};

