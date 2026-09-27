class LocationThemeSelectorPopup extends ListContainerPopup.ListContainerPopup {
    constructor(locationInfo) {
        super({ Title: Localisation.Localisation.getString("LocationThemesPopupTitle") });
        this.adjustPopupHeaderButtons("location_themes_selector");
        this.locationInfo = locationInfo;
        this.refreshItems();
    }

    refreshItems() {
        this.container.clearEntries();
        LogicLocationThemeData.LogicLocationThemeData.clearAvailabilityCache();
        this.locationThemesTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.LocationThemes);
        var location = this.locationInfo.locationData;
        var locationThemeData = location.locationTheme;
        var availableThemes = LogicDataTables.LogicDataTables.getThemesAvailableForGameModeVariation(location.gameModeVariation);
        for (var theme of availableThemes) {
            if (theme.isAvailableForOverride()) {
                var item = new LocationThemeItem(theme, locationThemeData);
                item.id = theme.getInstanceID();
                item.setCustomButtonListener(this.buttonPressed.bind(this));
                this.container.addEntry(item);
            }
        }
        var naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
    }

    buttonPressed(self, button) {
        var locationThemeButton = new GameButton.GameButton(button);
        var locationName = this.locationInfo.locationData.getName();
        var item = this.locationThemesTable.getItemAt(locationThemeButton.id);
        if (item) {
            if (!item.isAvailableForOverride(true)) {
                return;
            }
        }
        Config.Config.config.LocationThemeOverrides[locationName] = item.getName();
        FileManager.FileManager.updateConfigFile();
        this.locationInfo.locationData.locationTheme = item;
    }
}

class LocationThemeItem extends GameButton.GameButton {
    constructor(processingThemeItem, currentLocationThemeItem) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var locationThemeItemMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(locationThemeItemMovieClip.instance, 1);
        var buttonTextField = locationThemeItemMovieClip.getTextFieldByName("Text");
        if (!buttonTextField) {
            EDebugger.EDebugger.addMessage(EDebugger.EDebugger.ERROR, "Missing button TextField!");
            return this;
        }
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(processingThemeItem.getName()));
        locationThemeItemMovieClip.gotoAndStopFrameIndex(+(!(currentLocationThemeItem.getGlobalID() === processingThemeItem.getGlobalID())));
    }
}
