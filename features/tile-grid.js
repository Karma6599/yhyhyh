// =============================================================
// FEATURE: Tile Grid
// config keys: TileGrid
// Debug tile grid overlay on the battle map.
// merged webpack modules: 8601 TileGridOverlay
// =============================================================

// --------------------- MODULE 8601 — TileGridOverlay ---------------------

// ============================================================ //
// webpack module 8601  —  TileGridOverlay
// exports: TileGridOverlay
// deps: 1588 (LogicMemory), 2556 (BSDPlusManager), 4009 (Config), 5508 (GLOverlay), 5523 (LogicBattleModeClient)
// ============================================================ //

__webpack_modules__[8601] = function TileGridOverlay_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicBattleModeClient, BSDPlusManager, GLOverlay, Config, widthTilesOffset, heightTilesOffset, GAME_UNITS_PER_TILE, MAX_TILES, TileGridOverlay, <class_fields_init>, TileGridOverlay;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TileGridOverlay = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicBattleModeClient = __webpack_require__(5523);
        BSDPlusManager = __webpack_require__(2556);
        GLOverlay = __webpack_require__(5508);
        Config = __webpack_require__(4009);
        widthTilesOffset = ((LogicMemory).LogicMemory).offset(196);
        heightTilesOffset = ((LogicMemory).LogicMemory).offset(200);
        GAME_UNITS_PER_TILE = 300;
        MAX_TILES = 100;
        <class_fields_init> = undefined;
        TileGridOverlay;
        class TileGridOverlay {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa9110 (open) */
}
            patch () {
        return;
}
            toggle () {
        ((Config).Config).config.TileGrid = (!(((Config).Config).config).TileGrid);
        return;
}
            isEnabled () {
        return (((Config).Config).config).TileGrid;
}
            render () {
    var tileMap, widthTiles, heightTiles, widthUnits, heightUnits, tileX, x, tileY, y;
        if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            return;
        } /* if 0xa8f94 */
        tileMap = ((LogicBattleModeClient).LogicBattleModeClient).getTileMap();
        if ((tileMap).isNull()) {
            return;
        } /* if 0xa8fb3 */
        widthTiles = ((tileMap).add(widthTilesOffset)).readS32();
        heightTiles = ((tileMap).add(heightTilesOffset)).readS32();
        if (!(widthTiles <= 0)) {
            (widthTiles <= 0);
            if (!(heightTiles <= 0)) {
                (heightTiles <= 0);
                if (!(widthTiles > MAX_TILES)) {
                    if ((heightTiles > MAX_TILES)) {
                        return;
                    } /* if 0xa9008 */
                } /* if 0xa9005 */
            } /* if 0xa9005 */
        } /* if 0xa9005 */
        widthUnits = (widthTiles * GAME_UNITS_PER_TILE);
        heightUnits = (heightTiles * GAME_UNITS_PER_TILE);
        ((GLOverlay).GLOverlay).setDrawColor(0.3, 0.6, 1, 0.35);
        tileX = 0;
        while ((tileX <= widthTiles)) {
            x = (tileX * GAME_UNITS_PER_TILE);
            ((GLOverlay).GLOverlay).drawLineSegment(x, 0, 0, x, (-heightUnits), 0);
            tileX = ((tileX) + 1);
            (tileX++);
        } /* while 0xa9074 */
        tileY = 0;
        while ((tileY <= heightTiles)) {
            y = ((-tileY) * GAME_UNITS_PER_TILE);
            ((GLOverlay).GLOverlay).drawLineSegment(0, y, 0, widthUnits, y, 0);
            tileY = ((tileY) + 1);
            (tileY++);
            return;
        } /* while 0xa90b7 (open) */
}
        }
        TileGridOverlay = MAX_TILES = TileGridOverlay;
        exports.TileGridOverlay = TileGridOverlay;
        return;
};

