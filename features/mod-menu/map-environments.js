//============================================================================//
// MOD FEATURE: MAP ENVIRONMENTS
// In-game name: "MAP ENVIRONMENTS"  (TID: LocationThemesPopupTitle)
// Menu: Mod Menu — event details tab(s) (menu/mod-menu.js#8203)
// MAP ENVIRONMENTS: per-map environment/theme override selector (Config.LocationThemeOverrides), opened from the event details popup.
//============================================================================//

// --------------------- MODULE 9739 — LocationThemeSelector ---------------------


// ============================================================ //
// webpack module 9739  —  LocationThemeSelector
// exports: LocationThemeSelectorPopup
// deps: 699 (FileManager), 944 (LogicLocationThemeData), 4009 (Config), 4934 (GUI), 5039 (GameButton), 6139 (LogicDataTables), 7265 (Localisation), 8261 (ListContainerPopup), 9390 (LocationThemeItem)
// ============================================================ //

__webpack_modules__[9739] = function LocationThemeSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, LogicDataTables, Config, FileManager, GUI, LocationThemeItem, LogicLocationThemeData, GameButton, LocationThemeSelectorPopup, <class_fields_init>, LocationThemeSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LocationThemeSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        LogicDataTables = __webpack_require__(6139);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GUI = __webpack_require__(4934);
        LocationThemeItem = __webpack_require__(9390);
        LogicLocationThemeData = __webpack_require__(944);
        GameButton = __webpack_require__(5039);
        static refreshItems () {
    var location, locationThemeData, availableThemes, theme, item, naviHeight;
        ((this).container).clearEntries();
        ((LogicLocationThemeData).LogicLocationThemeData).clearAvailabilityCache();
        this.locationThemesTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).LocationThemes);
        location = ((this).locationInfo).locationData;
        locationThemeData = (location).locationTheme;
        availableThemes = ((LogicDataTables).LogicDataTables).getThemesAvailableForGameModeVariation((location).gameModeVariation);
        /* jump -> 0xa19d5 */
        theme = /*iter*/ availableThemes;
        if (!(!(theme).isAvailableForOverride())) {
            item = new (LocationThemeItem).LocationThemeItem(theme, locationThemeData);
            item.id = (theme).getInstanceID();
            (item).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(item);
        } /* if 0xa19d5 */
        } while (!item);
        item = availableThemes;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var locationThemeButton, locationName, item;
        locationThemeButton = new (GameButton).GameButton(button);
        locationName = (((this).locationInfo).locationData).getName();
        item = ((this).locationThemesTable).getItemAt((locationThemeButton).id);
        if (!(!item)) {
            if ((!(item).isAvailableForOverride(true))) {
                return;
            } /* if 0xa1ac3 */
        } /* if 0xa1ac0 */
        (((Config).Config).config).LocationThemeOverrides[locationName] = (item).getName();
        ((FileManager).FileManager).updateConfigFile();
        ((this).locationInfo).locationData.locationTheme = item;
        return;
};
        <class_fields_init> = undefined;
        LocationThemeSelectorPopup;
        class LocationThemeSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor (locationInfo) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("LocationThemesPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xa1864 */
        (this).adjustPopupHeaderButtons("location_themes_selector");
        this.locationInfo = locationInfo;
        (this).refreshItems();
        return this;
}
        }
        LocationThemeSelectorPopup = GameButton = LocationThemeSelectorPopup;
        exports.LocationThemeSelectorPopup = LocationThemeSelectorPopup;
        return;
};

// --------------------- MODULE 9390 — LocationThemeItem ---------------------


// ============================================================ //
// webpack module 9390  —  LocationThemeItem
// exports: LocationThemeItem
// deps: 4272 (EDebugger), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9390] = function LocationThemeItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, EDebugger, Localisation, LocationThemeItem, <class_fields_init>, LocationThemeItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LocationThemeItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        EDebugger = __webpack_require__(4272);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        LocationThemeItem;
        class LocationThemeItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (processingThemeItem, currentLocationThemeItem) {
    var locationThemeItemMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb3ca4 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        locationThemeItemMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((locationThemeItemMovieClip).instance, 1);
        buttonTextField = (locationThemeItemMovieClip).getTextFieldByName("Text");
        if ((!buttonTextField)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Missing button TextField!");
            return this;
        } /* if 0xb3d2d */
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((processingThemeItem).getName()));
        (locationThemeItemMovieClip).gotoAndStopFrameIndex((+(!((currentLocationThemeItem).getGlobalID() === (processingThemeItem).getGlobalID()))));
        return this;
}
        }
        LocationThemeItem = v8 = LocationThemeItem;
        exports.LocationThemeItem = LocationThemeItem;
        return;
};

