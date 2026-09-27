class StatusSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("StatusesPopupTitle") });
        this.statusesArray = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.statusItemsCount = 0;
        this.adjustPopupHeaderButtons("status_selector");
        this.refreshItems();
        StatusSelectorPopup.instance = this;
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        this.statusItemsCount = this.statusesArray.length;
        var statusItemIndex = 0;
        while (statusItemIndex < this.statusItemsCount) {
            var statusItem = new StatusItem.StatusItem(this.statusesArray[statusItemIndex]);
            statusItem.setCustomButtonListener(this.buttonPressed.bind(this));
            this.container.addEntry(statusItem);
            statusItemIndex++;
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var statusButton = new GameButton.GameButton(button);
        var teamMemberStatus = statusButton.id;
        var teamMemberStatusMessage = new TeamMemberStatusMessage.TeamMemberStatusMessage(teamMemberStatus);
        MessageManager.MessageManager.sendMessage(teamMemberStatusMessage);
    }
}
