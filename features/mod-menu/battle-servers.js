class BattleServersPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("BattleServersPopupTitle") });
        this.battleServers = [];
        this.adjustPopupHeaderButtons("battle_servers");
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        this.battleServers.length = 0;
        if (BattleServersManager.shouldSpoof()) {
            this.battleServers.push({ name: StringTable.StringTable.getString("TID_EDIT_REVERT"), regionId: -1, ping: -1, isBest: false });
        }
        var latencyTests = MessageManager.MessageManager.getLatencyTests();
        var i = 0;
        while (i < latencyTests.length) {
            var latencyData = latencyTests[i];
            if (BattleServersManager.preferredBattleRegionId === latencyData.getRegionId()) {
                if (BattleServersManager.isInitializing) {
                    BattleServersManager.lastChangedBattleServerName = latencyData.getServerName();
                    BattleServersManager.lastChangedBattleServerPing = latencyData.getPing();
                    BattleServersManager.isInitializing = false;
                }
            }
            var isSelected = BattleServersManager.preferredBattleRegionId === latencyData.getRegionId();
            var isNaturalBest = false;
            if (BattleServersManager.preferredBattleRegionId === -1) {
                isNaturalBest = (i === 1);
            }
            this.battleServers.push({ name: latencyData.getServerName(), regionId: latencyData.getRegionId(), isBest: isNaturalBest, ping: latencyData.getPing() });
            i++;
        }
        i = 0;
        while (i < this.battleServers.length) {
            var itemConfig = this.battleServers[i];
            var battleServerItem = new BattleSeverItem(itemConfig);
            battleServerItem.id = i;
            battleServerItem.setCustomButtonListener(this.buttonPressed.bind(this));
            this.container.addEntry(battleServerItem);
            i++;
        }
    }

    buttonPressed(self, button) {
        var battleServerButton = new GameButton.GameButton(button);
        var index = battleServerButton.id;
        var selectedServer = this.battleServers[index];
        if (!selectedServer) {
            return;
        }
        if (selectedServer.regionId === -1) {
            BattleServersManager.reset();
            GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("BattleServerWasReverted"));
            return;
        }
        BattleServersManager.setRegion(selectedServer.regionId, selectedServer.name, selectedServer.ping);
        GUI.GUI.showFloaterTextAtDefaultPosition(Localisation.Localisation.getString("BattleServerChangeWaitWarn"), 0xff8b8000);
        Latency.Latency.test();
    }
}

class BattleServersManager {
    loadFromConfig() {
        if (typeof Config.Config.config.RegionId === "number") {
            if (Config.Config.config.RegionId !== -1) {
                this.preferredBattleRegionId = Config.Config.config.RegionId;
                this.lastChangedBattleServerPing = 0;
                this.lastChangedBattleServerName = "Loading...";
                this.isInitializing = true;
            }
        }
    }

    setRegion(id, name, ping) {
        this.preferredBattleRegionId = id;
        this.lastChangedBattleServerName = name;
        this.lastChangedBattleServerPing = ping;
        this.isInitializing = false;
        Config.Config.config.RegionId = id;
    }

    reset() {
        this.preferredBattleRegionId = -1;
        this.lastChangedBattleServerName = "";
        this.lastChangedBattleServerPing = -1;
        this.isInitializing = false;
        Config.Config.config.RegionId = -1;
    }

    shouldSpoof() {
        return this.preferredBattleRegionId !== -1;
    }
}

BattleServersManager.preferredBattleRegionId = -1;
BattleServersManager.lastChangedBattleServerName = "";
BattleServersManager.lastChangedBattleServerPing = -1;
BattleServersManager.isInitializing = false;

class BattleSeverItem extends GameButton.GameButton {
    constructor(buttonConf) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var buttonMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(buttonMovieClip.instance, 1);
        var battleServerItemText;
        if (buttonConf.regionId === -1) {
            battleServerItemText = buttonConf.name;
        } else {
            battleServerItemText = "" + buttonConf.name + " (" + buttonConf.ping.toString() + " ms)";
        }
        var textField = buttonMovieClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(battleServerItemText);
        buttonMovieClip.gotoAndStopFrameIndex(+(!buttonConf.isBest));
    }
}
