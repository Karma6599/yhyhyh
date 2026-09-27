var TOGGLE_TILE_GRID_BUTTON = {
    label: "TOGGLE_TILE_GRID",
    category: DebugMenuCategory.EDebugCategory.BATTLE,
    mode: "battle",
    checkbox: {}
};

var widthTilesOffset = LogicMemory.LogicMemory.offset(196);
var heightTilesOffset = LogicMemory.LogicMemory.offset(200);
var GAME_UNITS_PER_TILE = 300;
var MAX_TILES = 100;

class TileGridOverlay {
    patch() {
        return;
    }

    toggle() {
        Config.Config.config.TileGrid = !Config.Config.config.TileGrid;
    }

    isEnabled() {
        return Config.Config.config.TileGrid;
    }

    render() {
        if (!BSDPlusManager.BSDPlusManager.isBSDPlusEnabled) {
            return;
        }
        var tileMap = LogicBattleModeClient.LogicBattleModeClient.getTileMap();
        if (tileMap.isNull()) {
            return;
        }
        var widthTiles = tileMap.add(widthTilesOffset).readS32();
        var heightTiles = tileMap.add(heightTilesOffset).readS32();
        if (widthTiles <= 0 || heightTiles <= 0 || widthTiles > MAX_TILES || heightTiles > MAX_TILES) {
            return;
        }
        var widthUnits = widthTiles * GAME_UNITS_PER_TILE;
        var heightUnits = heightTiles * GAME_UNITS_PER_TILE;
        GLOverlay.GLOverlay.setDrawColor(0.3, 0.6, 1, 0.35);
        var tileX = 0;
        while (tileX <= widthTiles) {
            var x = tileX * GAME_UNITS_PER_TILE;
            GLOverlay.GLOverlay.drawLineSegment(x, 0, 0, x, -heightUnits, 0);
            tileX++;
        }
        var tileY = 0;
        while (tileY <= heightTiles) {
            var y = -tileY * GAME_UNITS_PER_TILE;
            GLOverlay.GLOverlay.drawLineSegment(0, y, 0, widthUnits, y, 0);
            tileY++;
        }
    }
}

function TOGGLE_TILE_GRID_callback() {
    TileGridOverlay.toggle();
}

function TOGGLE_TILE_GRID_getState() {
    return TileGridOverlay.isEnabled();
}
