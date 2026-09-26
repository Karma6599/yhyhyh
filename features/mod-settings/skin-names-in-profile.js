//============================================================================//
// MOD FEATURE: Skin names in profile
// In-game name: "Skin names in profile"  (TID: ShowSkinNamesInProfile_name)
// Description: "Replaces brawler names with their selected skin names."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: ShowSkinNamesInProfile  (default false)
// Implementation below:
//============================================================================//

// --------------------- MODULE 2053 — ProfileSkinNames ---------------------


// ============================================================ //
// webpack module 2053  —  ProfileSkinNames
// exports: ProfileSkinNames
// deps: 4009 (Config), 6794 (LogicData), 7535 (StringObject), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[2053] = function ProfileSkinNames_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Config, StringObject, LogicData, StringTable, ProfileSkinNames, <class_fields_init>, ProfileSkinNames;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ProfileSkinNames = undefined;
        Config = __webpack_require__(4009);
        StringObject = __webpack_require__(7535);
        LogicData = __webpack_require__(6794);
        StringTable = __webpack_require__(9250);
        <class_fields_init> = undefined;
        ProfileSkinNames;
        class ProfileSkinNames {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa3f00 (open) */
}
            patch () {
        if ((this).hookInstalled) {
            return;
        } /* if 0xa3c3a */
        this.hookInstalled = true;
        return;
}
            onProfileDecoded (brawlerEntries) {
    var entry, characterTIDPointer, skinTIDPointer, characterTIDString, skinTIDString;
        ((this).characterTIDStringToSkinTID).clear();
        if ((!(((Config).Config).config).ShowSkinNamesInProfile)) {
            return;
        } /* if 0xa3d97 */
        /* jump -> 0xa3eb6 */
        entry = /*iter*/ brawlerEntries;
        /* CATCH -> 0xa3eae (try region) */
        /* is_null  */
        if ((entry).skin) {
            characterTIDPointer = skinTIDPointer = characterTIDString = skinTIDString = brawlerEntries;
        } /* if 0xa3dc0 */
        /* jump -> 0xa3eb6 */
        if ((((entry).character).instance).equals(((entry).skin).instance)) {
            entry = <underflow>;
        } /* if 0xa3de8 */
        /* jump -> 0xa3eb6 */
        characterTIDPointer = ((LogicData).LogicData).getTIDPointer(((entry).character).instance);
        skinTIDPointer = ((LogicData).LogicData).getTIDPointer(((entry).skin).instance);
        if (!(characterTIDPointer).isNull()) {
            (characterTIDPointer).isNull();
            if ((skinTIDPointer).isNull()) {
            } /* if 0xa3e43 */
        } /* if 0xa3e3e */
        /* jump -> 0xa3eb5 */
        characterTIDString = ((StringObject).StringObject).read(characterTIDPointer);
        /* is_null  */
        if (!characterTIDString) {
            if ((characterTIDString.length === 0)) {
            } /* if 0xa3e6a */
        } /* if 0xa3e65 */
        /* jump -> 0xa3eb5 */
        skinTIDString = ((StringObject).StringObject).read(skinTIDPointer);
        /* is_null  */
        if (!skinTIDString) {
            if ((skinTIDString.length === 0)) {
            } /* if 0xa3e92 */
        } /* if 0xa3e8d */
        /* jump -> 0xa3eb5 */
        /* jump -> 0xa3eb5 */
        /* CATCH -> 0xa3eb7 (try region) */
        /* jump -> 0xa3eb5 */
        throw <underflow>;
        } while (!<underflow>);
        return;
}
        }
        ProfileSkinNames = v8 = ProfileSkinNames;
        exports.ProfileSkinNames = ProfileSkinNames;
        ProfileSkinNames.characterTIDStringToSkinTID = new Map();
        ProfileSkinNames.hookInstalled = false;
        return;
};

