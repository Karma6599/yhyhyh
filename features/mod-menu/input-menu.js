class InputItemsPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("InputItemsPopup") });
        this.ITEMS = [
            { name: "VisualNameChange", id: InputPopup.EInputPopupType.CHANGE_NAME },
            { name: "OpenPlayerProfile", id: InputPopup.EInputPopupType.OPEN_PROFILE },
            { name: "FollowPlayerByTag", id: InputPopup.EInputPopupType.FOLLOW_PLAYER, disabled: true },
            { name: "LinkBSDPlus", id: InputPopup.EInputPopupType.PLUS_LINK },
            { name: "BSDPlusState", disabled: true, callback: this.getBSDPlusState, id: InputPopup.EInputPopupType.GET_BSD_PLUS_STATE }
        ];
        this.adjustPopupHeaderButtons("input");
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        for (var itemData of this.ITEMS) {
            if (!itemData.disabled) {
                var item = new InputItem.InputItem(itemData);
                item.setCustomButtonListener(this.buttonPressed.bind(this), "" + itemData.id + "_input_button");
                this.container.addEntry(item);
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(1, naviHeight * 1.75, 8, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var inputItem = new GameButton.GameButton(button);
        var inputItemId = inputItem.id;
        var itemConf = this.ITEMS.find(function (e) {
            return e.id === inputItemId;
        });
        if (itemConf.callback) {
            itemConf.callback();
            return;
        }
        GUI.GUI.showPopup(new InputPopup(itemConf.id), true, true, false);
    }

    getBSDPlusState() {
        if (BSDPlusManager.BSDPlusManager.EXPIRES_TS) {
            return Localisation.Localisation.getString("ManageBSDPlus_Status_" + !BSDPlusManager.BSDPlusManager.expired);
        }
        return Localisation.Localisation.getString("ManageBSDPlus_Status_false");
    }
}
