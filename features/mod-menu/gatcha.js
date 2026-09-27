class GatchaPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("GatchaPopupTitle") });
        this.adjustPopupHeaderButtons("gatcha");
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        for (var entry of GatchaPopup.gatchaPopupItemsArray.entries()) {
            var index = entry[0];
            var item = entry[1];
            if (!item.disabled) {
                var button = new GatchaItem.GatchaItem(item);
                button.setCustomButtonListener(GatchaPopup.buttonPressed.bind(this), "gatcha_" + Localisation.Localisation.getString(item.name));
                button.id = index;
                this.container.addEntry(button);
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(3, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var gatchaButton = new GameButton.GameButton(button);
        var item = GatchaPopup.gatchaPopupItemsArray[gatchaButton.id];
        if (item) {
            var callback = item.callback;
            var gatchaType = item.gatchaType;
            if (callback) {
                callback(gatchaType);
                return;
            }
            HomeScreen.HomeScreen.doOfflineGatcha(gatchaType);
        }
    }

    openBrawlerMenuPopup(gatchaType) {
        GUI.GUI.showPopup(new BrawlerMenuPopup(gatchaType), true, true, false);
    }

    openSkinMenuPopup(gatchaType) {
        SkinPreview.show(gatchaType);
    }
}

GatchaPopup.gatchaPopupItemsArray = [
    { name: "BrawlerMenuPopup", callback: GatchaPopup.openBrawlerMenuPopup, gatchaType: HomeMode.HomeMode.gatchaType.Character },
    { name: "SkinMenuPopup", callback: GatchaPopup.openSkinMenuPopup, gatchaType: HomeMode.HomeMode.gatchaType.Skin },
    { name: "GadgetMenuPopup", callback: GatchaPopup.openBrawlerMenuPopup, gatchaType: HomeMode.HomeMode.gatchaType.Gadget },
    { name: "StarPowerMenuPopup", callback: GatchaPopup.openBrawlerMenuPopup, gatchaType: HomeMode.HomeMode.gatchaType.StarPower },
    { name: "HyperchargeMenuPopup", callback: GatchaPopup.openBrawlerMenuPopup, gatchaType: HomeMode.HomeMode.gatchaType.Hypercharge },
    { name: "PrestigeMenuPopup", callback: GatchaPopup.openBrawlerMenuPopup, gatchaType: -1 },
    { name: "CoinsGatcha", gatchaType: HomeMode.HomeMode.gatchaType.Coins },
    { name: "TokenDoublersGatcha", gatchaType: HomeMode.HomeMode.gatchaType.TokenDoublers },
    { name: "PlayerIconGatcha", gatchaType: HomeMode.HomeMode.gatchaType.PlayerIcon },
    { name: "BoxGatcha", gatchaType: HomeMode.HomeMode.gatchaType.Box }
];
