class EnvironmentEditorPopup extends ListContainerPopup.ListContainerPopup {
    constructor() {
        super({ Title: Localisation.Localisation.getString("EnvironmentEditorPopup") });
        this.adjustPopupHeaderButtons("environment_popup");
        this.refreshItems();
    }

    refreshItems() {
        var listContainer = this.container;
        listContainer.clearEntries();
        for (var element of EnvironmentEditorPopup.ELEMENTS) {
            if (!element.disabled) {
                var elementItem = new EnvironmentEditorItem(element);
                elementItem.setCustomButtonListener(EnvironmentEditorPopup.buttonPressed, "element_" + element.id + "_button");
                elementItem.id = element.id;
                this.container.addEntry(elementItem);
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(1, naviHeight * 2.5, 0, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var environmentButton = new GameButton.GameButton(button);
        var element = EnvironmentEditorPopup.ELEMENTS.find(function (e) {
            return e.id === environmentButton.id;
        });
        if (element && element.callback) {
            element.callback();
        }
    }

    openFogSelectorPopup() {
        GUI.GUI.showPopup(new FogSelectorPopup(), true, true, false);
    }

    openKillEffectSelectorPopup() {
        GUI.GUI.showPopup(new KillEffectTypePopup(), true, true, false);
    }
}

EnvironmentEditorPopup.ELEMENTS = [
    { name: "FogSelector", id: 0, disabled: false, callback: EnvironmentEditorPopup.openFogSelectorPopup },
    { name: "KillEffectSelector", id: 1, disabled: false, callback: EnvironmentEditorPopup.openKillEffectSelectorPopup }
];
