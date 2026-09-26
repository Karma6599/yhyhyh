//============================================================================//
// MOD FEATURE: Map Maker
// In-game map maker subsystem: editor screen, modes, modifier popups, tile HUD, full palette + the debug-menu MAP_EDITOR buttons.
//============================================================================//

// --------------------- MODULE 5765 — MapEditorScreen ---------------------


// ============================================================ //
// webpack module 5765  —  MapEditorScreen
// exports: MapEditorPlacementMode, MapEditorScreen
// deps: 1588 (LogicMemory), 3401 (GameStateManager), 4633 (MapEditorHUD), 6288 (LogicPlayerMapUtil), 6337 (LogicMapEditorMode), 8835 (GoHomeMessage), 9168 (MessageManager), 9244 (ThemeSelector), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5765] = function MapEditorScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, GameStateManager, MessageManager, GoHomeMessage, LogicMapEditorMode, LogicPlayerMapUtil, MapEditorHUD, ThemeSelector, MapEditorScreen_enter, MapEditorScreen_save, MapEditorScreen_clearAll, MapEditorScreen_refreshTileCounts, MapEditorScreen_placeTileWithMirroring, MapEditorScreen_setCurrentTile, MapEditorScreen_undo, MapEditorScreen_redo, placementModeOffset, gridVisibleOffset, logicGameModeOffset, logicMapEditorOffset, tileMapWidthOffset, tileMapHeightOffset, MapEditorPlacementMode, PLACEMENT_MODE_COUNT, MapEditorScreen, <class_fields_init>, MapEditorScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MapEditorPlacementMode = undefined;
        undefined.MapEditorScreen = exports;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        GameStateManager = __webpack_require__(3401);
        MessageManager = __webpack_require__(9168);
        GoHomeMessage = __webpack_require__(8835);
        LogicMapEditorMode = __webpack_require__(6337);
        LogicPlayerMapUtil = __webpack_require__(6288);
        MapEditorHUD = __webpack_require__(4633);
        ThemeSelector = __webpack_require__(9244);
        MapEditorScreen_enter = ((Libg).Libg).offset(12136776, 0);
        MapEditorScreen_save = new NativeFunction(((Libg).Libg).offset(12155044, 0), "void", ["pointer"]);
        MapEditorScreen_clearAll = new NativeFunction(((Libg).Libg).offset(12158976, 0), "void", ["pointer"]);
        MapEditorScreen_refreshTileCounts = new NativeFunction(((Libg).Libg).offset(12164148, 0), "void", ["pointer"]);
        MapEditorScreen_placeTileWithMirroring = new NativeFunction(((Libg).Libg).offset(12146540, 0), "void", ["pointer", "uint", "uint"]);
        MapEditorScreen_setCurrentTile = new NativeFunction(((Libg).Libg).offset(12158920, 0), "void", ["pointer", "pointer"]);
        MapEditorScreen_undo = new NativeFunction(((Libg).Libg).offset(12160220, 0), "void", ["pointer"]);
        MapEditorScreen_redo = new NativeFunction(((Libg).Libg).offset(12162076), "void", ["pointer"]);
        placementModeOffset = ((LogicMemory).LogicMemory).offset(2552);
        gridVisibleOffset = ((LogicMemory).LogicMemory).offset(2736);
        logicGameModeOffset = ((LogicMemory).LogicMemory).offset(2336);
        logicMapEditorOffset = ((LogicMemory).LogicMemory).offset(48);
        tileMapWidthOffset = ((LogicMemory).LogicMemory).offset(196);
        tileMapHeightOffset = ((LogicMemory).LogicMemory).offset(200);
        if (!MapEditorPlacementMode) {
            exports.MapEditorPlacementMode = ThemeSelector = {};
        } /* if 0x5039a */
        ThemeSelector = {}(exports);
        PLACEMENT_MODE_COUNT = 5;
        <class_fields_init> = undefined;
        MapEditorScreen;
        class MapEditorScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5101b (open) */
}
            get enterAddr () {
        return MapEditorScreen_enter;
}
            patch () {
        return;
}
            getInstance () {
        if ((!((GameStateManager).GameStateManager).isInState(((GameStateManager).GameStateId).MapEditor))) {
            return NULL;
        } /* if 0x50691 */
        return (MapEditorScreen).instance;
}
            getLogicMapEditor (instance) {
    var logicGameMode;
        logicGameMode = ((instance).add(logicGameModeOffset)).readPointer();
        if ((logicGameMode).isNull()) {
            return NULL;
        } /* if 0x506eb */
        return ((logicGameMode).add(logicMapEditorOffset)).readPointer();
}
            getTileMap (instance) {
    var logicMapEditor;
        logicMapEditor = (MapEditorScreen).getLogicMapEditor(instance);
        if ((logicMapEditor).isNull()) {
            return NULL;
        } /* if 0x5074b */
        return (new (LogicMapEditorMode).LogicMapEditorMode(logicMapEditor)).getTileMap();
}
            toggleGrid () {
    var instance, gridVisiblePtr;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x507a9 */
        gridVisiblePtr = (instance).add(gridVisibleOffset);
        if (((gridVisiblePtr).readS32() === 0)) {
        } /* if 0x507d2 */
        /* jump -> 0x507d3 */
        return;
}
            cyclePlacementMode () {
    var instance, current, next;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x5082c */
        current = ((instance).add(placementModeOffset)).readS32();
        next = ((current + 1) % PLACEMENT_MODE_COUNT);
        return;
}
            cyclePlacementModeBackward () {
    var instance, current, previous;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x508bd */
        current = ((instance).add(placementModeOffset)).readS32();
        previous = (((current + PLACEMENT_MODE_COUNT) - 1) % PLACEMENT_MODE_COUNT);
        return;
}
            setPlacementMode (mode) {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50943 */
        return;
}
            save () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x5099b */
        return;
}
            clearAll () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x509e3 */
        return;
}
            refreshTileCounts () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50a2b */
        return;
}
            undo () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50a73 */
        return;
}
            redo () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50abb */
        return;
}
            selectEraserBrush () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50b03 */
        return;
}
            fillAll () {
    var instance, tileMap, width, height, tileY, tileX;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50b7f */
        tileMap = (MapEditorScreen).getTileMap(instance);
        if ((tileMap).isNull()) {
            return;
        } /* if 0x50b9c */
        width = ((tileMap).add(tileMapWidthOffset)).readS32();
        height = ((tileMap).add(tileMapHeightOffset)).readS32();
        tileY = 0;
        while ((tileY < height)) {
            tileX = 0;
            while ((tileX < width)) {
                MapEditorScreen_placeTileWithMirroring(instance, tileX, tileY);
                tileX = ((tileX) + 1);
                (tileX++);
            } /* while 0x50c00 */
            tileY = ((tileY) + 1);
            (tileY++);
        } /* while 0x50c0a */
        return;
}
            fillRegion (startTileX, startTileY, endTileX, endTileY) {
    var instance, tileMap, width, height, minTileX, minTileY, maxTileX, maxTileY, tileY, tileX;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50cbf */
        tileMap = (MapEditorScreen).getTileMap(instance);
        if ((tileMap).isNull()) {
            return;
        } /* if 0x50cdc */
        width = ((tileMap).add(tileMapWidthOffset)).readS32();
        height = ((tileMap).add(tileMapHeightOffset)).readS32();
        minTileX = (Math).max(0, (Math).min(startTileX, endTileX));
        minTileY = (Math).max(0, (Math).min(startTileY, endTileY));
        maxTileX = (Math).min((width - 1), (Math).max(startTileX, endTileX));
        maxTileY = (Math).min((height - 1), (Math).max(startTileY, endTileY));
        tileY = minTileY;
        while ((tileY <= maxTileY)) {
            tileX = minTileX;
            while ((tileX <= maxTileX)) {
                MapEditorScreen_placeTileWithMirroring(instance, tileX, tileY);
                tileX = ((tileX) + 1);
                (tileX++);
            } /* while 0x50dc8 */
            tileY = ((tileY) + 1);
            (tileY++);
        } /* while 0x50dd2 */
        return;
}
            eraseAll () {
    var instance;
        instance = (MapEditorScreen).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x50e28 */
        MapEditorScreen_setCurrentTile(instance, NULL);
        return;
}
            toggleSaveValidationBypass () {
        return;
}
            isSaveValidationBypassed () {
        return ((LogicPlayerMapUtil).LogicPlayerMapUtil).isValidationBypassed();
}
            togglePlacementRestrictionBypass () {
        return;
}
            isPlacementRestrictionBypassed () {
        return ((LogicPlayerMapUtil).LogicPlayerMapUtil).isRestrictedAreaBypassed();
}
            toggleFullPalette () {
        return;
}
            isFullPaletteUnlocked () {
        return ((MapEditorHUD).MapEditorHUD).isFullPaletteUnlocked();
}
            goHome () {
        if ((!((GameStateManager).GameStateManager).isInState(((GameStateManager).GameStateId).MapEditor))) {
            return;
        } /* if 0x50fa2 */
        ((GameStateManager).GameStateManager).clearGameData();
        ((GameStateManager).GameStateManager).changeState(((GameStateManager).GameStateId).Home);
        return;
}
        }
        MapEditorScreen = ThemeSelector = MapEditorScreen;
        exports.MapEditorScreen = MapEditorScreen;
        MapEditorScreen.instance = NULL;
        return;
};

// --------------------- MODULE 6932 — MapEditorMode ---------------------


// ============================================================ //
// webpack module 6932  —  MapEditorMode
// exports: MapEditorMode
// deps: 1588 (LogicMemory), 6337 (LogicMapEditorMode), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6932] = function MapEditorMode_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, LogicMapEditorMode, MapEditorMode_getInstance, logicEditorOffset, MapEditorMode, <class_fields_init>, MapEditorMode;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MapEditorMode = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LogicMapEditorMode = __webpack_require__(6337);
        MapEditorMode_getInstance = new NativeFunction(((Libg).Libg).offset(13686080, 0), "pointer", []);
        logicEditorOffset = ((LogicMemory).LogicMemory).offset(48);
        <class_fields_init> = undefined;
        MapEditorMode;
        class MapEditorMode {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5a776 (open) */
}
            getInstance () {
        return MapEditorMode_getInstance();
}
            getLogicEditor () {
    var editor;
        editor = (MapEditorMode).getInstance();
        if ((editor).isNull()) {
            return new (LogicMapEditorMode).LogicMapEditorMode(NULL);
        } /* if 0x5a728 */
        return new (LogicMapEditorMode).LogicMapEditorMode(((editor).add(logicEditorOffset)).readPointer());
}
        }
        MapEditorMode = v8 = MapEditorMode;
        exports.MapEditorMode = MapEditorMode;
        return;
};

// --------------------- MODULE 6337 — LogicMapEditorMode ---------------------


// ============================================================ //
// webpack module 6337  —  LogicMapEditorMode
// exports: LogicMapEditorMode
// deps: 1588 (LogicMemory), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6337] = function LogicMapEditorMode_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, LogicMapEditorMode_initMapPreview, playerMapsListOffset, tileMapOffset, gameModeVariationOffset, previewFlagOffset, LogicMapEditorMode, <class_fields_init>, LogicMapEditorMode;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicMapEditorMode = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LogicMapEditorMode_initMapPreview = new NativeFunction(((Libg).Libg).offset(16399812, 0), "void", ["pointer"]);
        playerMapsListOffset = ((LogicMemory).LogicMemory).offset(64);
        tileMapOffset = ((LogicMemory).LogicMemory).offset(88);
        gameModeVariationOffset = ((LogicMemory).LogicMemory).offset(96);
        previewFlagOffset = ((LogicMemory).LogicMemory).offset(120);
        static isNull () {
        return ((this).instance).isNull();
};
        static initMapPreview () {
        return;
};
        static setGameModeVariation (variationId) {
        return;
};
        static getTileMap () {
        return (((this).instance).add(tileMapOffset)).readPointer();
};
        static setPlayerMapsList (list) {
        return;
};
        static clearPreviewFlag () {
        return;
};
        <class_fields_init> = undefined;
        LogicMapEditorMode;
        class LogicMapEditorMode {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x7209c */
        this.instance = instance;
        return;
}
        }
        LogicMapEditorMode = <class_fields_init> = LogicMapEditorMode;
        exports.LogicMapEditorMode = LogicMapEditorMode;
        return;
};

// --------------------- MODULE 7394 — MapEditorModifierPopup ---------------------


// ============================================================ //
// webpack module 7394  —  MapEditorModifierPopup
// exports: MapEditorModifierPopup, mapEditorModifierPopupVtableAddr
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[7394] = function MapEditorModifierPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, MapEditorModifierPopup, <class_fields_init>, MapEditorModifierPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.mapEditorModifierPopupVtableAddr = undefined;
        undefined.MapEditorModifierPopup = exports;
        Libg = __webpack_require__(9878);
        exports.mapEditorModifierPopupVtableAddr = ((Libg).Libg).offset(18756056, 0);
        <class_fields_init> = undefined;
        MapEditorModifierPopup;
        class MapEditorModifierPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x43aff (open) */
}
        }
        MapEditorModifierPopup = MapEditorModifierPopup = MapEditorModifierPopup;
        exports.MapEditorModifierPopup = MapEditorModifierPopup;
        return;
};

// --------------------- MODULE 4633 — MapEditorHUD ---------------------


// ============================================================ //
// webpack module 4633  —  MapEditorHUD
// exports: MapEditorHUD
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[4633] = function MapEditorHUD_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, MapEditorHUD_tileVisibleForMode, alwaysVisibleCallback, MapEditorHUD, <class_fields_init>, MapEditorHUD;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MapEditorHUD = undefined;
        Libg = __webpack_require__(9878);
        MapEditorHUD_tileVisibleForMode = ((Libg).Libg).offset(10917920, 0);
        alwaysVisibleCallback = new NativeCallback(function () {
        return 1;
}, "int", ["pointer"]);
        <class_fields_init> = undefined;
        MapEditorHUD;
        class MapEditorHUD {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3fa33 (open) */
}
            setFullPaletteUnlocked (enabled) {
        if ((enabled === (MapEditorHUD).fullPaletteUnlocked)) {
            return;
        } /* if 0x3f9b2 */
        MapEditorHUD.fullPaletteUnlocked = enabled;
        if (enabled) {
            (Interceptor).replace(MapEditorHUD_tileVisibleForMode, alwaysVisibleCallback);
            return;
        } /* if 0x3f9d3 */
        (Interceptor).revert(MapEditorHUD_tileVisibleForMode);
        return;
}
            isFullPaletteUnlocked () {
        return (MapEditorHUD).fullPaletteUnlocked;
}
        }
        MapEditorHUD = MapEditorHUD = MapEditorHUD;
        exports.MapEditorHUD = MapEditorHUD;
        MapEditorHUD.fullPaletteUnlocked = false;
        return;
};

// --------------------- MODULE 6994 — EnvironmentEditorItem ---------------------


// ============================================================ //
// webpack module 6994  —  EnvironmentEditorItem
// exports: EnvironmentEditorItem
// deps: 612 (MovieClip), 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[6994] = function EnvironmentEditorItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, StringTable, MovieClip, GameButton, Localisation, EnvironmentEditorItem, <class_fields_init>, EnvironmentEditorItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EnvironmentEditorItem = undefined;
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        EnvironmentEditorItem;
        class EnvironmentEditorItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (element) {
    var elementMovieClip, buttonTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb2b35 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        elementMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((elementMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((elementMovieClip).instance, "Text");
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((Localisation).Localisation).getString((element).name));
        (elementMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        EnvironmentEditorItem = v8 = EnvironmentEditorItem;
        exports.EnvironmentEditorItem = EnvironmentEditorItem;
        return;
};

// --------------------- MODULE 7895 — MapPreview ---------------------


// ============================================================ //
// webpack module 7895  —  MapPreview
// exports: MapPreview
// deps: 1018 (HomeMode), 4934 (GUI), 5292 (LogicPlayerMap), 5417 (LogicArrayList), 5522 (PlayerMapManager), 5765 (MapEditorScreen), 6139 (LogicDataTables), 6932 (MapEditorMode), 7402 (MapPreviewMessage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7895] = function MapPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicDataTables, LogicPlayerMap, LogicArrayList, MapPreviewMessage, PlayerMapManager, MapEditorMode, MapEditorScreen, GUI, HomeMode, StringTable, pendingPreview, MapPreview, <class_fields_init>, MapPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MapPreview = undefined;
        LogicDataTables = __webpack_require__(6139);
        LogicPlayerMap = __webpack_require__(5292);
        LogicArrayList = __webpack_require__(5417);
        MapPreviewMessage = __webpack_require__(7402);
        PlayerMapManager = __webpack_require__(5522);
        MapEditorMode = __webpack_require__(6932);
        MapEditorScreen = __webpack_require__(5765);
        GUI = __webpack_require__(4934);
        HomeMode = __webpack_require__(1018);
        StringTable = __webpack_require__(9250);
        pendingPreview = null;
        <class_fields_init> = undefined;
        MapPreview;
        class MapPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa2ba2 (open) */
}
            patch () {
        return;
}
            show () {
    var reason;
        reason = (MapPreview).tryShow();
        /* is_null  */
        if (!reason) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(("MAP_PREVIEW: ").concat(reason));
            return;
        } /* if 0xa27e3 (open) */
}
            tryShow () {
    var location, localizedName, message;
        location = (MapPreview).resolveSelectedLocation();
        /* is_null  */
        if (location) {
            return "no selected event has a location to preview";
        } /* if 0xa2846 */
        if (!((StringTable).StringTable).getString((location).getTID())) {
            ((StringTable).StringTable).getString((location).getTID());
            localizedName = (location).getName();
        } /* if 0xa2870 */
        pendingPreview = { location: (location).instance, gameModeVariation: ((location).gameModeVariation).getVariation(), locationName: localizedName };
        ({ location: (location).instance, gameModeVariation: ((location).gameModeVariation).getVariation(), locationName: localizedName });
        message = new (MapPreviewMessage).MapPreviewMessage();
        (message).setLocation(location);
        ((PlayerMapManager).PlayerMapManager).handleMapPreview(message);
        ((GUI).GUI).showFloaterTextAtDefaultPosition(localizedName);
        return null;
}
            resolveSelectedLocation () {
    var selectedSlot;
        selectedSlot = ((HomeMode).HomeMode).getSelectedEventSlot();
        if (((selectedSlot) == null)) {
        } /* if 0xa2930 */
        /* jump -> 0xa2938 */
        if ((((undefined).getLocation()) == null)) {
            (undefined).getLocation();
            return null;
        } /* if 0xa293e (open) */
}
            onMapEditorScreenEnter () {
    var pending, logicEditor;
        pending = pendingPreview;
        pendingPreview = null;
        if ((!pending)) {
            return;
        } /* if 0xa2982 */
        logicEditor = ((MapEditorMode).MapEditorMode).getLogicEditor();
        if ((logicEditor).isNull()) {
            return;
        } /* if 0xa29a1 */
        (logicEditor).setGameModeVariation((pending).gameModeVariation);
        return;
}
            swapInFakePlayerMap (logicEditor, pending) {
    var tilemap, env, fakeMap, playerMapsList;
        (logicEditor).initMapPreview();
        tilemap = (logicEditor).getTileMap();
        env = (MapPreview).pickFirstPlayerMapEnvironment();
        fakeMap = (MapPreview).buildFakePlayerMap((pending).gameModeVariation, env, (pending).locationName);
        (fakeMap).save(tilemap, (logicEditor).instance);
        playerMapsList = (new (LogicArrayList).LogicArrayList(1)).addElement((fakeMap).instance);
        (logicEditor).setPlayerMapsList(playerMapsList);
        return;
}
            buildFakePlayerMap (gameModeVariation, environment, locationName) {
    var fakeMap;
        fakeMap = new (LogicPlayerMap).LogicPlayerMap();
        (fakeMap).setName(locationName);
        (fakeMap).setGameModeVariation(gameModeVariation);
        (fakeMap).setEnvironment(environment);
        return fakeMap;
}
            pickFirstPlayerMapEnvironment () {
    var envTable;
        envTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).PlayerMapEnvironments);
        if ((((envTable).getItemAt(0)) == null)) {
            (envTable).getItemAt(0);
        } /* if 0xa2b68 */
        /* jump -> 0xa2b6d */
        if ((((undefined).instance) == null)) {
            return NULL;
        } /* if 0xa2b77 (open) */
}
        }
        MapPreview = HomeMode = MapPreview;
        exports.MapPreview = MapPreview;
        return;
};

