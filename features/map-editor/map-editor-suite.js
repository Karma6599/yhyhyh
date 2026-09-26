var MapEditorScreen_enter = Libg.Libg.offset(12136776, 0);
var MapEditorScreen_save = new NativeFunction(Libg.Libg.offset(12155044, 0), "void", ["pointer"]);
var MapEditorScreen_clearAll = new NativeFunction(Libg.Libg.offset(12158976, 0), "void", ["pointer"]);
var MapEditorScreen_refreshTileCounts = new NativeFunction(Libg.Libg.offset(12164148, 0), "void", ["pointer"]);
var MapEditorScreen_placeTileWithMirroring = new NativeFunction(Libg.Libg.offset(12146540, 0), "void", ["pointer", "uint", "uint"]);
var MapEditorScreen_setCurrentTile = new NativeFunction(Libg.Libg.offset(12158920, 0), "void", ["pointer", "pointer"]);
var MapEditorScreen_undo = new NativeFunction(Libg.Libg.offset(12160220, 0), "void", ["pointer"]);
var MapEditorScreen_redo = new NativeFunction(Libg.Libg.offset(12162076), "void", ["pointer"]);
var placementModeOffset = LogicMemory.LogicMemory.offset(2552);
var gridVisibleOffset = LogicMemory.LogicMemory.offset(2736);
var logicGameModeOffset = LogicMemory.LogicMemory.offset(2336);
var logicMapEditorOffset = LogicMemory.LogicMemory.offset(48);
var tileMapWidthOffset = LogicMemory.LogicMemory.offset(196);
var tileMapHeightOffset = LogicMemory.LogicMemory.offset(200);
var MapEditorPlacementMode = { None: 0, MirrorX: 1, MirrorY: 2, MirrorQuad: 3, Rotate180: 4 };
var PLACEMENT_MODE_COUNT = 5;

class MapEditorScreen {
    get enterAddr() {
        return MapEditorScreen_enter;
    }

    patch() {
    }

    getInstance() {
        if (!GameStateManager.GameStateManager.isInState(GameStateManager.GameStateId.MapEditor)) {
            return NULL;
        }
        return MapEditorScreen.instance;
    }

    getLogicMapEditor(instance) {
        var logicGameMode = instance.add(logicGameModeOffset).readPointer();
        if (logicGameMode.isNull()) {
            return NULL;
        }
        return logicGameMode.add(logicMapEditorOffset).readPointer();
    }

    getTileMap(instance) {
        var logicMapEditor = MapEditorScreen.getLogicMapEditor(instance);
        if (logicMapEditor.isNull()) {
            return NULL;
        }
        return new LogicMapEditorMode(logicMapEditor).getTileMap();
    }

    toggleGrid() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        var gridVisiblePtr = instance.add(gridVisibleOffset);
        if (gridVisiblePtr.readS32() === 0) {
            gridVisiblePtr.writeS32(1);
        } else {
            gridVisiblePtr.writeS32(0);
        }
    }

    cyclePlacementMode() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        var current = instance.add(placementModeOffset).readS32();
        var next = (current + 1) % PLACEMENT_MODE_COUNT;
        instance.add(placementModeOffset).writeS32(next);
    }

    cyclePlacementModeBackward() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        var current = instance.add(placementModeOffset).readS32();
        var previous = (current + PLACEMENT_MODE_COUNT - 1) % PLACEMENT_MODE_COUNT;
        instance.add(placementModeOffset).writeS32(previous);
    }

    setPlacementMode(mode) {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        instance.add(placementModeOffset).writeS32(mode);
    }

    save() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_save(instance);
    }

    clearAll() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_clearAll(instance);
    }

    refreshTileCounts() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_refreshTileCounts(instance);
    }

    undo() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_undo(instance);
    }

    redo() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_redo(instance);
    }

    selectEraserBrush() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_setCurrentTile(instance, NULL);
    }

    fillAll() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        var tileMap = MapEditorScreen.getTileMap(instance);
        if (tileMap.isNull()) {
            return;
        }
        var width = tileMap.add(tileMapWidthOffset).readS32();
        var height = tileMap.add(tileMapHeightOffset).readS32();
        var tileY = 0;
        while (tileY < height) {
            var tileX = 0;
            while (tileX < width) {
                MapEditorScreen_placeTileWithMirroring(instance, tileX, tileY);
                tileX++;
            }
            tileY++;
        }
    }

    fillRegion(startTileX, startTileY, endTileX, endTileY) {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        var tileMap = MapEditorScreen.getTileMap(instance);
        if (tileMap.isNull()) {
            return;
        }
        var width = tileMap.add(tileMapWidthOffset).readS32();
        var height = tileMap.add(tileMapHeightOffset).readS32();
        var minTileX = Math.max(0, Math.min(startTileX, endTileX));
        var minTileY = Math.max(0, Math.min(startTileY, endTileY));
        var maxTileX = Math.min(width - 1, Math.max(startTileX, endTileX));
        var maxTileY = Math.min(height - 1, Math.max(startTileY, endTileY));
        var tileY = minTileY;
        while (tileY <= maxTileY) {
            var tileX = minTileX;
            while (tileX <= maxTileX) {
                MapEditorScreen_placeTileWithMirroring(instance, tileX, tileY);
                tileX++;
            }
            tileY++;
        }
    }

    eraseAll() {
        var instance = MapEditorScreen.getInstance();
        if (instance.isNull()) {
            return;
        }
        MapEditorScreen_setCurrentTile(instance, NULL);
    }

    toggleSaveValidationBypass() {
        LogicPlayerMapUtil.LogicPlayerMapUtil.setValidationBypassed(!LogicPlayerMapUtil.LogicPlayerMapUtil.isValidationBypassed());
    }

    isSaveValidationBypassed() {
        return LogicPlayerMapUtil.LogicPlayerMapUtil.isValidationBypassed();
    }

    togglePlacementRestrictionBypass() {
        LogicPlayerMapUtil.LogicPlayerMapUtil.setRestrictedAreaBypassed(!LogicPlayerMapUtil.LogicPlayerMapUtil.isRestrictedAreaBypassed());
    }

    isPlacementRestrictionBypassed() {
        return LogicPlayerMapUtil.LogicPlayerMapUtil.isRestrictedAreaBypassed();
    }

    toggleFullPalette() {
        MapEditorHUD.setFullPaletteUnlocked(!MapEditorHUD.isFullPaletteUnlocked());
    }

    isFullPaletteUnlocked() {
        return MapEditorHUD.isFullPaletteUnlocked();
    }

    goHome() {
        if (!GameStateManager.GameStateManager.isInState(GameStateManager.GameStateId.MapEditor)) {
            return;
        }
        MessageManager.MessageManager.sendMessage(new GoHomeMessage.GoHomeMessage());
        GameStateManager.GameStateManager.clearGameData();
        GameStateManager.GameStateManager.changeState(GameStateManager.GameStateId.Home);
    }
}

MapEditorScreen.instance = NULL;

var MapEditorMode_getInstance = new NativeFunction(Libg.Libg.offset(13686080, 0), "pointer", []);
var logicEditorOffset = LogicMemory.LogicMemory.offset(48);

class MapEditorMode {
    getInstance() {
        return MapEditorMode_getInstance();
    }

    getLogicEditor() {
        var editor = MapEditorMode.getInstance();
        if (editor.isNull()) {
            return new LogicMapEditorMode(NULL);
        }
        return new LogicMapEditorMode(editor.add(logicEditorOffset).readPointer());
    }
}

var LogicMapEditorMode_initMapPreview = new NativeFunction(Libg.Libg.offset(16399812, 0), "void", ["pointer"]);
var playerMapsListOffset = LogicMemory.LogicMemory.offset(64);
var tileMapOffset = LogicMemory.LogicMemory.offset(88);
var gameModeVariationOffset = LogicMemory.LogicMemory.offset(96);
var previewFlagOffset = LogicMemory.LogicMemory.offset(120);

class LogicMapEditorMode {
    constructor(instance) {
        this.instance = instance;
    }

    isNull() {
        return this.instance.isNull();
    }

    initMapPreview() {
        LogicMapEditorMode_initMapPreview(this.instance);
    }

    setGameModeVariation(variationId) {
        this.instance.add(gameModeVariationOffset).writeS32(variationId);
    }

    getTileMap() {
        return this.instance.add(tileMapOffset).readPointer();
    }

    setPlayerMapsList(list) {
        this.instance.add(playerMapsListOffset).writePointer(list.instance);
    }

    clearPreviewFlag() {
        this.instance.add(previewFlagOffset).writeS32(0);
    }
}

class MapEditorModifierPopup {
}

MapEditorModifierPopup.mapEditorModifierPopupVtableAddr = Libg.Libg.offset(18756056, 0);

var MapEditorHUD_tileVisibleForMode = Libg.Libg.offset(10917920, 0);
var alwaysVisibleCallback = new NativeCallback(function () {
    return 1;
}, "int", ["pointer"]);

class MapEditorHUD {
    setFullPaletteUnlocked(enabled) {
        if (enabled === MapEditorHUD.fullPaletteUnlocked) {
            return;
        }
        MapEditorHUD.fullPaletteUnlocked = enabled;
        if (enabled) {
            Interceptor.replace(MapEditorHUD_tileVisibleForMode, alwaysVisibleCallback);
            return;
        }
        Interceptor.revert(MapEditorHUD_tileVisibleForMode);
    }

    isFullPaletteUnlocked() {
        return MapEditorHUD.fullPaletteUnlocked;
    }
}

MapEditorHUD.fullPaletteUnlocked = false;

class EnvironmentEditorItem extends GameButton.GameButton {
    constructor(element) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var elementMovieClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(elementMovieClip.instance, 1);
        var buttonTextField = MovieClip.MovieClip.getTextFieldByName(elementMovieClip.instance, "Text");
        buttonTextField.colorTag = true;
        buttonTextField.setTextScaleIfNecessary(Localisation.Localisation.getString(element.name));
        elementMovieClip.gotoAndStopFrameIndex(1);
    }
}

var pendingPreview = null;

class MapPreview {
    patch() {
        Interceptor.attach(MapEditorScreen.enterAddr, {
            onEnter(args) {
                MapEditorScreen.instance = args[0];
            },
            onLeave() {
                MapPreview.onMapEditorScreenEnter();
            }
        });
    }

    show() {
        var reason = MapPreview.tryShow();
        if (reason != null) {
            GUI.GUI.showFloaterTextAtDefaultPosition("MAP_PREVIEW: ".concat(reason));
        }
    }

    tryShow() {
        var location = MapPreview.resolveSelectedLocation();
        if (location == null) {
            return "no selected event has a location to preview";
        }
        var localizedName = StringTable.StringTable.getString(location.getTID()) || location.getName();
        pendingPreview = { location: location.instance, gameModeVariation: location.gameModeVariation.getVariation(), locationName: localizedName };
        var message = new MapPreviewMessage.MapPreviewMessage();
        message.setLocation(location);
        PlayerMapManager.PlayerMapManager.handleMapPreview(message);
        GUI.GUI.showFloaterTextAtDefaultPosition(localizedName);
        return null;
    }

    resolveSelectedLocation() {
        var selectedSlot = HomeMode.HomeMode.getSelectedEventSlot();
        if (selectedSlot == null) {
            return null;
        }
        var location = selectedSlot.getLocation();
        if (location == null) {
            return null;
        }
        return location;
    }

    onMapEditorScreenEnter() {
        var pending = pendingPreview;
        pendingPreview = null;
        if (!pending) {
            return;
        }
        var logicEditor = MapEditorMode.getLogicEditor();
        if (logicEditor.isNull()) {
            return;
        }
        logicEditor.setGameModeVariation(pending.gameModeVariation);
        MapPreview.swapInFakePlayerMap(logicEditor, pending);
    }

    swapInFakePlayerMap(logicEditor, pending) {
        logicEditor.initMapPreview();
        var tilemap = logicEditor.getTileMap();
        var env = MapPreview.pickFirstPlayerMapEnvironment();
        var fakeMap = MapPreview.buildFakePlayerMap(pending.gameModeVariation, env, pending.locationName);
        fakeMap.save(tilemap, logicEditor.instance);
        var playerMapsList = new LogicArrayList.LogicArrayList(1).addElement(fakeMap.instance);
        logicEditor.setPlayerMapsList(playerMapsList);
    }

    buildFakePlayerMap(gameModeVariation, environment, locationName) {
        var fakeMap = new LogicPlayerMap.LogicPlayerMap();
        fakeMap.setName(locationName);
        fakeMap.setGameModeVariation(gameModeVariation);
        fakeMap.setEnvironment(environment);
        return fakeMap;
    }

    pickFirstPlayerMapEnvironment() {
        var envTable = LogicDataTables.LogicDataTables.getTable(LogicDataTables.LogicDataTables.table.PlayerMapEnvironments);
        var env = envTable.getItemAt(0);
        if (env == null) {
            return NULL;
        }
        return env;
    }
}
