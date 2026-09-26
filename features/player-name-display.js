// =============================================================
// FEATURE: Player Name Display
// config keys: PlayerNameOverride, ChromaticName
// Player name overrides + chromatic name effect. Other name decorations (ShowCharactersInNames, ShamePlayersWithThumbsdownPin) live in game/players.js#6013; blacklist/alliance tags in core/localisation.js#6528.
// merged webpack modules: 9778 PlayerDisplayData
// =============================================================

// --------------------- MODULE 9778 — PlayerDisplayData ---------------------

// ============================================================ //
// webpack module 9778  —  PlayerDisplayData
// exports: PlayerDisplayData
// deps: 1588 (LogicMemory), 4009 (Config), 4330 (Player), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9778] = function PlayerDisplayData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, Player, LogicMemory, Config, PlayerDisplayData_ctor, LogicPlayerBattleIntroDetails_ctor, LogicClientHome_createOwnDisplayData, thumbnailIdOffset, nameColorIdOffset, unknownOffset, ownDisplayDataInProgress, PlayerDisplayData, <class_fields_init>, PlayerDisplayData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerDisplayData = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        Player = __webpack_require__(4330);
        LogicMemory = __webpack_require__(1588);
        Config = __webpack_require__(4009);
        PlayerDisplayData_ctor = ((Libg).Libg).offset(15975344, 0);
        LogicPlayerBattleIntroDetails_ctor = ((Libg).Libg).offset(16420544, 0);
        LogicClientHome_createOwnDisplayData = ((Libg).Libg).offset(15821244, 0);
        thumbnailIdOffset = ((LogicMemory).LogicMemory).offset(20);
        nameColorIdOffset = ((LogicMemory).LogicMemory).offset(24);
        unknownOffset = ((LogicMemory).LogicMemory).offset(28);
        ownDisplayDataInProgress = false;
        static get name () {
        return ((StringObject).StringObject).read((this)._instance);
};
        static set name (value) {
        return;
};
        <class_fields_init> = undefined;
        PlayerDisplayData;
        class PlayerDisplayData {
            constructor (_instance) {
        if (<class_fields_init>) {
        } /* if 0x3acfc */
        this._instance = _instance;
        return;
}
            patch () {
        (Interceptor).attach(LogicClientHome_createOwnDisplayData, { onEnter () {
        ownDisplayDataInProgress = true;
        return;
}, onLeave () {
        ownDisplayDataInProgress = false;
        return;
} });
        (Interceptor).attach(PlayerDisplayData_ctor, { onEnter (args) {
    var name;
        if ((!ownDisplayDataInProgress)) {
            return;
        } /* if 0x3ae9b */
        name = ((StringObject).StringObject).read(args[1]);
        if ((!name)) {
            return;
        } /* if 0x3aeb6 */
        this.ownDisplayData = args[0];
        (Player).Player.ownName = name;
        if ((((Config).Config).config).ChromaticName) {
            args[5] = ptr(-2);
        } /* if 0x3aeef */
        if ((((Config).Config).config).PlayerNameOverride) {
            args[1] = ((StringObject).StringObject).create((((Config).Config).config).PlayerNameOverride);
            return;
        } /* if 0x3af29 (open) */
}, onLeave () {
        if ((!(this).ownDisplayData)) {
            return;
        } /* if 0x3af63 */
        (Player).Player.ownThumbnailID = (((this).ownDisplayData).add(thumbnailIdOffset)).readU32();
        (Player).Player.ownNameColorID = (((this).ownDisplayData).add(nameColorIdOffset)).readU32();
        return;
} });
        return;
}
        }
        PlayerDisplayData = thumbnailIdOffset = PlayerDisplayData;
        exports.PlayerDisplayData = PlayerDisplayData;
        return;
};

