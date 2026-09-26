//============================================================================//// RECREATED GAME POPUPS (ALSO USED BY DEBUG MENU PREVIEW BUTTONS)// merged webpack modules: 950 BattleEndPopup, 1054 HeroCollectionPopup, 3098 HeroScreenPopup, 2015 NotEnoughGemsPopup, 3747 NotificationSettingsPopup, 296 EventDetailsPopup, 3570 FameLevelUpPopup, 275 FamePopup, 3173 FirstGearTutorialPopup, 3197 RankedSeasonEndPopup, 3196 BrawlPassAutoCollectRewardsPopup, 9102 BrawlPassUnlockBrawlerPopup, 8058 BrawlTvIntroPopup, 3572 BrawlTvIntroPopupPreview, 2921 RewardCompensationPopup, 7135 RewardOpeningPopup, 8781 RecruitRoadClaimBrawlerPopup, 898 InviteFriendWithCodePopup, 6555 PlayerCountryPopup, 366 PrestigeSelectorPopup, 8196 PrestigeLevelUpPopup, 6642 PrestigeIntroPopupPreview, 2695 CelebrationPopupPreview, 1058 PreviewBrawlerOrSkinRewardPopup, 4210 AccountDeletionDialogPreview, 7284 ChatOptionsPopup, 7300 MaintenancePopupPreview, 8548 DebugCountryPopupPreview, 3117 CollabDrop, 3567 EsportTournamentsPopup, 33 SettingsPopup, 303 SettingsPrivacyScreen, 7591 SettingsScreen, 3004 CameraSettingsPopup, 2760 BadgePreview, 4401 TeamPopup, 7311 PassRewardPreview, 3615 MoviePlayerPopup//============================================================================//
// --------------------- MODULE 950 — BattleEndPopup ---------------------


// ============================================================ //
// webpack module 950  —  BattleEndPopup
// exports: BattleEndPopup
// deps: 1052 (BattleEndInstantExitButton), 3210 (GUIContainer), 4009 (Config), 4974 (Breadcrumbs), 9878 (Libg)
// ============================================================ //

__webpack_modules__[950] = function BattleEndPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GUIContainer, BattleEndInstantExitButton, Config, Breadcrumbs, BattleEndPopup_ctor, BattleEndPopup_proceedToNextState, BattleEndPopup_isShareReplayButtonEnabled, BattleEndPopup, <class_fields_init>, BattleEndPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleEndPopup = undefined;
        Libg = __webpack_require__(9878);
        GUIContainer = __webpack_require__(3210);
        BattleEndInstantExitButton = __webpack_require__(1052);
        Config = __webpack_require__(4009);
        Breadcrumbs = __webpack_require__(4974);
        BattleEndPopup_ctor = ((Libg).Libg).offset(9459592, 0);
        BattleEndPopup_proceedToNextState = new NativeFunction(((Libg).Libg).offset(9545328, 0), "void", ["pointer", "int"]);
        BattleEndPopup_isShareReplayButtonEnabled = ((Libg).Libg).offset(9538784, 0);
        <class_fields_init> = undefined;
        BattleEndPopup;
        class BattleEndPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4055a (open) */
}
            proceedToNextState (isAllowed) {
        return;
}
            patch () {
        (Interceptor).attach(BattleEndPopup_ctor, { onEnter (args) {
        BattleEndPopup.instance = new (GUIContainer).GUIContainer(args[0]);
        return;
}, onLeave () {
    var instantLeaveButton;
        if ((((Config).Config).config).BattleEndInstantExit) {
            instantLeaveButton = new (BattleEndInstantExitButton).BattleEndInstantExitButton();
            (((BattleEndPopup).instance).getMovieClip()).addChild(instantLeaveButton);
            return;
        } /* if 0x404eb (open) */
} });
        return;
}
        }
        BattleEndPopup = BattleEndPopup = BattleEndPopup;
        exports.BattleEndPopup = BattleEndPopup;
        return;
};

// --------------------- MODULE 1054 — HeroCollectionPopup ---------------------


// ============================================================ //
// webpack module 1054  —  HeroCollectionPopup
// exports: HeroCollectionPopup
// deps: 1978 (Libc), 2214 (ModProperties), 4934 (GUI), 6794 (LogicData), 7265 (Localisation), 7332 (Settings), 7535 (StringObject), 8156 (_), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1054] = function HeroCollectionPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var _, Libc, Libg, ModProperties, Localisation, StringObject, LogicData, Settings, GUI, HeroList_sortHeroes, HeroCollectionPopup_onSortButtonClicked, GenericButtonPopover_getExistingPopover, getHeroSortingName, GenericButtonPopover_addButton, delegateVtablePtr, listenerFunc, currentCategory, CATEGORIES, HeroCollectionPopup, <class_fields_init>, HeroCollectionPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HeroCollectionPopup = undefined;
        _ = __webpack_require__(8156);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        ModProperties = __webpack_require__(2214);
        Localisation = __webpack_require__(7265);
        StringObject = __webpack_require__(7535);
        LogicData = __webpack_require__(6794);
        Settings = __webpack_require__(7332);
        GUI = __webpack_require__(4934);
        HeroList_sortHeroes = ((Libg).Libg).offset(10236236);
        HeroCollectionPopup_onSortButtonClicked = ((Libg).Libg).offset(10269288);
        GenericButtonPopover_getExistingPopover = new NativeFunction(((Libg).Libg).offset(9649844), "pointer", []);
        getHeroSortingName = new NativeFunction(((Libg).Libg).offset(12466072), "pointer", ["uint"]);
        GenericButtonPopover_addButton = new NativeFunction(((Libg).Libg).offset(9649096), "pointer", ["pointer", "pointer", "pointer", "pointer"]);
        delegateVtablePtr = ((Libg).Libg).offset(18688608);
        listenerFunc = ((Libg).Libg).offset(10270032);
        currentCategory = 0;
        CATEGORIES = [{ name: "Test1", index: 1, characters: [16000006, 16000067, 16000027] }, { name: "Test2", index: 2, characters: [16000001, 16000028, 16000030] }, { name: "test3", index: 3, characters: [16000099, 16000091, 16000008] }];
        <class_fields_init> = undefined;
        HeroCollectionPopup;
        class HeroCollectionPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x428a9 (open) */
}
            patch () {
    var listenerFn, e;
        if ((!((ModProperties).ModProperties).isFeatureAvailableInThisBuild(((ModProperties).EExperimentalFeature).CATEGORIES))) {
            return;
            /* CATCH -> 0x421d3 (try region) */
        } /* if 0x42113 */
        listenerFn = new NativeFunction(listenerFunc, "void", ["pointer"]);
        (Interceptor).replace(listenerFn, new NativeCallback(function (listener) {
    var selectedCategory, previousCategory, category;
        selectedCategory = ((listener).add(8)).readInt();
        if ((selectedCategory !== 15)) {
            return listenerFn(listener);
        } /* if 0x4226b */
        if ((CATEGORIES.length === 0)) {
            ((GUI).GUI).showFloaterTextAtDefaultPosition(((Localisation).Localisation).getString("NoCategories"));
        } /* if 0x42299 */
        previousCategory = ((Settings).Settings).getHeroSorting();
        if ((previousCategory >= 1000)) {
            currentCategory = ((currentCategory + 1) % CATEGORIES.length);
        } /* if 0x422c2 */
        category = CATEGORIES[currentCategory];
        return;
}, "void", ["pointer"]));
        (Interceptor).attach(HeroCollectionPopup_onSortButtonClicked, { onEnter (args) {
        this.popover = ((args[0]).add(8)).readPointer();
        return;
}, onLeave () {
    var popover, listener;
        popover = GenericButtonPopover_getExistingPopover();
        if ((popover).isNull()) {
            return;
        } /* if 0x4237b */
        listener = ((Libc).Libc).malloc(48);
        (listener).writePointer(delegateVtablePtr);
        ((listener).add(8)).writeU64(15);
        ((listener).add(16)).writePointer((this).popover);
        ((listener).add(24)).writeU64(0);
        ((listener).add(32)).writePointer(listener);
        return;
} });
        (Interceptor).replace(getHeroSortingName, new NativeCallback(function (sorting) {
    var categoryIndex, currentCategory;
        if ((sorting < 1000)) {
            return getHeroSortingName(sorting);
        } /* if 0x42489 */
        categoryIndex = (((Settings).Settings).getHeroSorting() - 1000);
        if (!(CATEGORIES).find(function (e) {
        return ((e).index === categoryIndex);
})) {
            (CATEGORIES).find(function (e) {
        return ((e).index === categoryIndex);
});
            currentCategory = null;
        } /* if 0x424b0 */
        if ((!currentCategory)) {
            return getHeroSortingName(categoryIndex);
        } /* if 0x424c0 */
        return ((StringObject).StringObject).create((currentCategory).name);
}, "pointer", ["int"]));
        (Interceptor).attach(HeroList_sortHeroes, { onEnter (args) {
        this.list = args[1];
        return;
}, onLeave (retval) {
    var heroSorting, currentCategory, sortVector, bucketNode, categoryVector;
        heroSorting = (((Settings).Settings).getHeroSorting() - 1000);
        if (!(CATEGORIES).find(function (e) {
        return ((e).index === heroSorting);
})) {
            (CATEGORIES).find(function (e) {
        return ((e).index === heroSorting);
});
            currentCategory = null;
        } /* if 0x425a2 */
        /* is_null  */
        if (currentCategory) {
            return;
        } /* if 0x425aa */
        sortVector = heroSorting = currentCategory = sortVector = bucketNode = <underflow>;
        sortVector(((this).list).add(80));
        sortVector(((this).list).add(144));
        bucketNode = (((this).list).add(248)).readPointer();
        while ((!(bucketNode).isNull())) {
            categoryVector = (bucketNode).add(24);
            sortVector(categoryVector);
            bucketNode = (bucketNode).readPointer();
            return;
        } /* while 0x42634 (open) */
} });
        listenerFn = <underflow>;
        return;
        e = <underflow>;
        /* CATCH -> 0x421e6 (try region) */
        (_).LogInfo(e);
        return;
        throw <underflow>;
}
        }
        HeroCollectionPopup = GUI = HeroCollectionPopup;
        exports.HeroCollectionPopup = HeroCollectionPopup;
        HeroCollectionPopup.cachedButton = null;
        return;
};

// --------------------- MODULE 3098 — HeroScreenPopup ---------------------


// ============================================================ //
// webpack module 3098  —  HeroScreenPopup
// exports: HeroScreenPopup
// deps: 1588 (LogicMemory), 1978 (Libc), 2214 (ModProperties), 3217 (Sprite), 3555 (LogicSkinData), 4009 (Config), 4934 (GUI), 4974 (Breadcrumbs), 5039 (GameButton), 6139 (LogicDataTables), 6193 (GenericPopup), 7171 (LogicCharacterData), 7265 (Localisation), 7556 (TempValueHolder), 7669 (SkinSelector), 9250 (StringTable), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3098] = function HeroScreenPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, Libg, Libc, SkinSelector, LogicSkinData, Breadcrumbs, LogicCharacterData, Config, GUI, LogicDataTables, StringTable, Sprite, GenericPopup, Localisation, GameButton, TempValueHolder, ModProperties, HeroScreenPopup_ctor, HeroScreenPopup_skinChanged, logicSkinDataOffset, characterDataOffset, skinCollectionIconOffset, heroModelOffset, hudTopLeftOffset, recordButtonOffset, HeroScreenPopup_construct, heroScreenPopupAllocationSize, HeroScreenPopup, <class_fields_init>, HeroScreenPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HeroScreenPopup = undefined;
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        SkinSelector = __webpack_require__(7669);
        LogicSkinData = __webpack_require__(3555);
        Breadcrumbs = __webpack_require__(4974);
        LogicCharacterData = __webpack_require__(7171);
        Config = __webpack_require__(4009);
        GUI = __webpack_require__(4934);
        LogicDataTables = __webpack_require__(6139);
        StringTable = __webpack_require__(9250);
        Sprite = __webpack_require__(3217);
        GenericPopup = __webpack_require__(6193);
        Localisation = __webpack_require__(7265);
        GameButton = __webpack_require__(5039);
        TempValueHolder = __webpack_require__(7556);
        ModProperties = __webpack_require__(2214);
        HeroScreenPopup_ctor = ((Libg).Libg).offset(12391476, 0);
        HeroScreenPopup_skinChanged = new NativeFunction(((Libg).Libg).offset(12402884, 0), "void", ["pointer", "pointer"]);
        logicSkinDataOffset = ((LogicMemory).LogicMemory).offset(824);
        characterDataOffset = ((LogicMemory).LogicMemory).offset(448);
        skinCollectionIconOffset = ((LogicMemory).LogicMemory).offset(608);
        heroModelOffset = ((LogicMemory).LogicMemory).offset(624);
        hudTopLeftOffset = ((LogicMemory).LogicMemory).offset(792);
        recordButtonOffset = ((LogicMemory).LogicMemory).offset(56);
        HeroScreenPopup_construct = new NativeFunction(HeroScreenPopup_ctor, "void", ["pointer", "pointer", "pointer", "int"]);
        heroScreenPopupAllocationSize = 968;
        static skinChanged (skin) {
        return;
};
        static getLogicCharacterData () {
        return new (LogicCharacterData).LogicCharacterData((((this).instance).add(characterDataOffset)).readPointer());
};
        static getLogicSkinData () {
        return new (LogicSkinData).LogicSkinData((((this).instance).add(logicSkinDataOffset)).readPointer());
};
        static setLogicSkinData (logicSkinData) {
        return;
};
        static getSkinCollectionIcon () {
        return (((this).instance).add(skinCollectionIconOffset)).readPointer();
};
        static getHeroModel () {
        return (((this).instance).add(heroModelOffset)).readPointer();
};
        static getHudTopLeft () {
        return new (Sprite).Sprite((((this).instance).add(hudTopLeftOffset)).readPointer());
};
        <class_fields_init> = undefined;
        HeroScreenPopup;
        class HeroScreenPopup {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x42c46 */
        this.instance = instance;
        this.popupInstance = new (GenericPopup).GenericPopup(instance);
        HeroScreenPopup.SCREEN_POPUP_INSTANCE = this;
        return;
}
            getInstance () {
        if (!(!(HeroScreenPopup).SCREEN_POPUP_INSTANCE)) {
            if ((((HeroScreenPopup).SCREEN_POPUP_INSTANCE).instance).isNull()) {
                return null;
            } /* if 0x42caa */
        } /* if 0x42ca6 */
        return (HeroScreenPopup).SCREEN_POPUP_INSTANCE;
}
            skinChanged (skin, instance) {
    var popup;
        popup = ((GUI).GUI).getPopupByType((HeroScreenPopup).popupType);
        if ((popup).isNull()) {
            return;
        } /* if 0x42d0c */
        if (((instance) == null)) {
        } /* if 0x42d18 */
        return;
}
            show (character) {
    var skin, character, skin, popupInstance;
        skin = character;
        if (((skin) === undefined)) {
            character = skin = null;
        } /* if 0x42f26 */
        skin = ((Libc).Libc).calloc(heroScreenPopupAllocationSize, 1);
        if (((skin) == null)) {
        } /* if 0x42f54 */
        /* jump -> 0x42f59 */
        if ((((undefined).instance) == null)) {
        } /* if 0x42f63 */
        HeroScreenPopup_construct(skin, (character).instance, NULL, 0);
        return;
}
            patch () {
        return;
}
        }
        HeroScreenPopup = GUI = HeroScreenPopup;
        exports.HeroScreenPopup = HeroScreenPopup;
        HeroScreenPopup.popupType = 26;
        return;
};

// --------------------- MODULE 2015 — NotEnoughGemsPopup ---------------------


// ============================================================ //
// webpack module 2015  —  NotEnoughGemsPopup
// exports: NotEnoughGemsPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2015] = function NotEnoughGemsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, NotEnoughGemsPopup_ctor, NotEnoughGemsPopup, <class_fields_init>, NotEnoughGemsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NotEnoughGemsPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        NotEnoughGemsPopup_ctor = new NativeFunction(((Libg).Libg).offset(10403324, 0), "void", ["pointer", "int"]);
        <class_fields_init> = undefined;
        NotEnoughGemsPopup;
        class NotEnoughGemsPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (missingGems) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((NotEnoughGemsPopup).allocationSize, 1);
        NotEnoughGemsPopup_ctor(popupInstance, missingGems);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x43f24 */
        return this;
}
            show () {
    var missingGems, missingGems, popup;
        if (((missingGems) === undefined)) {
            missingGems = missingGems = 0;
        } /* if 0x43f65 */
        missingGems = new NotEnoughGemsPopup(missingGems);
        return;
}
        }
        NotEnoughGemsPopup = v8 = NotEnoughGemsPopup;
        exports.NotEnoughGemsPopup = NotEnoughGemsPopup;
        NotEnoughGemsPopup.allocationSize = 448;
        return;
};

// --------------------- MODULE 3747 — NotificationSettingsPopup ---------------------


// ============================================================ //
// webpack module 3747  —  NotificationSettingsPopup
// exports: NotificationSettingsPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3747] = function NotificationSettingsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, NotificationSettingsPopup_ctor, NotificationSettingsPopup, <class_fields_init>, NotificationSettingsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NotificationSettingsPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        NotificationSettingsPopup_ctor = new NativeFunction(((Libg).Libg).offset(10952328, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        NotificationSettingsPopup;
        class NotificationSettingsPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((NotificationSettingsPopup).allocationSize, 1);
        NotificationSettingsPopup_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x44125 */
        return this;
}
            show () {
    var popup;
        popup = new NotificationSettingsPopup();
        return;
}
        }
        NotificationSettingsPopup = v8 = NotificationSettingsPopup;
        exports.NotificationSettingsPopup = NotificationSettingsPopup;
        NotificationSettingsPopup.allocationSize = 560;
        return;
};

// --------------------- MODULE 296 — EventDetailsPopup ---------------------


// ============================================================ //
// webpack module 296  —  EventDetailsPopup
// exports: EventDetailsPopup
// deps: 733 (LocationInfo), 3197 (RankedSeasonEndPopup), 4934 (GUI), 9407 (DropGUIContainer), 9739 (LocationThemeSelector), 9878 (Libg)
// ============================================================ //

__webpack_modules__[296] = function EventDetailsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LocationThemeSelector, DropGUIContainer, LocationInfo, GUI, RankedSeasonEndPopup, EventDetailsPopup, <class_fields_init>, EventDetailsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EventDetailsPopup = undefined;
        Libg = __webpack_require__(9878);
        LocationThemeSelector = __webpack_require__(9739);
        DropGUIContainer = __webpack_require__(9407);
        LocationInfo = __webpack_require__(733);
        GUI = __webpack_require__(4934);
        RankedSeasonEndPopup = __webpack_require__(3197);
        <class_fields_init> = undefined;
        EventDetailsPopup;
        class EventDetailsPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x41209 (open) */
}
            patch () {
        return;
}
        }
        EventDetailsPopup = EventDetailsPopup = EventDetailsPopup;
        exports.EventDetailsPopup = EventDetailsPopup;
        EventDetailsPopup.EventDetailsPopup_init = new NativeFunction(((Libg).Libg).offset(9973696, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);
        return;
};

// --------------------- MODULE 3570 — FameLevelUpPopup ---------------------


// ============================================================ //
// webpack module 3570  —  FameLevelUpPopup
// exports: FameLevelUpPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3570] = function FameLevelUpPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, FameLevelUpPopup_ctor, FameLevelUpPopup, <class_fields_init>, FameLevelUpPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FameLevelUpPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        FameLevelUpPopup_ctor = new NativeFunction(((Libg).Libg).offset(10073804, 0), "void", ["pointer", "uint", "int"]);
        <class_fields_init> = undefined;
        FameLevelUpPopup;
        class FameLevelUpPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (previousLevel, levelsGained) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((FameLevelUpPopup).allocationSize, 1);
        FameLevelUpPopup_ctor(popupInstance, previousLevel, levelsGained);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x4139a */
        return this;
}
        }
        FameLevelUpPopup = v8 = FameLevelUpPopup;
        exports.FameLevelUpPopup = FameLevelUpPopup;
        FameLevelUpPopup.allocationSize = 536;
        return;
};

// --------------------- MODULE 275 — FamePopup ---------------------


// ============================================================ //
// webpack module 275  —  FamePopup
// exports: FamePopup
// deps: 1588 (LogicMemory), 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[275] = function FamePopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicMemory, GenericPopup, GUI, FamePopup_ctor, FamePopup_showFame, displayedFameOffset, FamePopup, <class_fields_init>, FamePopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FamePopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        FamePopup_ctor = new NativeFunction(((Libg).Libg).offset(10075888, 0), "void", ["pointer"]);
        FamePopup_showFame = new NativeFunction(((Libg).Libg).offset(10076948, 0), "void", ["pointer", "int"]);
        displayedFameOffset = ((LogicMemory).LogicMemory).offset(500, 500);
        <class_fields_init> = undefined;
        FamePopup;
        class FamePopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((FamePopup).allocationSize, 1);
        FamePopup_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x415cf */
        return this;
}
            patch () {
        return;
}
            show (fameLevel) {
    var popup;
        popup = new FamePopup();
        FamePopup.overrideInstance = (popup).instance;
        FamePopup.overrideFame = fameLevel;
        ((GUI).GUI).showPopup((popup).instance, false, false, true);
        return;
}
        }
        FamePopup = FamePopup = FamePopup;
        exports.FamePopup = FamePopup;
        FamePopup.allocationSize = 520;
        FamePopup.overrideInstance = NULL;
        FamePopup.overrideFame = 0;
        return;
};

// --------------------- MODULE 3173 — FirstGearTutorialPopup ---------------------


// ============================================================ //
// webpack module 3173  —  FirstGearTutorialPopup
// exports: FirstGearTutorialPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3173] = function FirstGearTutorialPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, FirstGearTutorialPopup_ctor, FirstGearTutorialPopup, <class_fields_init>, FirstGearTutorialPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FirstGearTutorialPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        FirstGearTutorialPopup_ctor = new NativeFunction(((Libg).Libg).offset(12131740, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        FirstGearTutorialPopup;
        class FirstGearTutorialPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (character) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((FirstGearTutorialPopup).allocationSize, 1);
        FirstGearTutorialPopup_ctor(popupInstance, (character).instance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x41913 */
        return this;
}
            show (character) {
    var popup;
        popup = new FirstGearTutorialPopup(character);
        return;
}
        }
        FirstGearTutorialPopup = v8 = FirstGearTutorialPopup;
        exports.FirstGearTutorialPopup = FirstGearTutorialPopup;
        FirstGearTutorialPopup.allocationSize = 440;
        return;
};

// --------------------- MODULE 3197 — RankedSeasonEndPopup ---------------------


// ============================================================ //
// webpack module 3197  —  RankedSeasonEndPopup
// exports: RANKED_POPUP_TYPE, RankedSeasonEndPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3197] = function RankedSeasonEndPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, RankedSeasonEndPopup_ctor, RankedSeasonEndNotification_ctor, notificationAllocationSize, popupAllocationSize, previewRank, previewPlayerFrame, previewLastRank, RankedSeasonEndPopup, <class_fields_init>, RankedSeasonEndPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RANKED_POPUP_TYPE = undefined;
        undefined.RankedSeasonEndPopup = exports;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        exports.RANKED_POPUP_TYPE = 91;
        RankedSeasonEndPopup_ctor = new NativeFunction(((Libg).Libg).offset(11334540, 0), "void", ["pointer", "pointer"]);
        RankedSeasonEndNotification_ctor = new NativeFunction(((Libg).Libg).offset(16214536, 0), "void", ["pointer", "int", "int", "int"]);
        notificationAllocationSize = 80;
        popupAllocationSize = 584;
        previewRank = 30;
        previewPlayerFrame = 12;
        previewLastRank = 11;
        <class_fields_init> = undefined;
        RankedSeasonEndPopup;
        class RankedSeasonEndPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (notificationInstance) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((RankedSeasonEndPopup).allocationSize, 1);
        RankedSeasonEndPopup_ctor(popupInstance, notificationInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x4489b */
        return this;
}
            show () {
    var rank, playerFrame, lastRank, rank, playerFrame, lastRank, notificationInstance, popup;
        if (((rank) === undefined)) {
            rank = rank = previewRank;
        } /* if 0x44915 */
        if (((playerFrame) === undefined)) {
            playerFrame = playerFrame = previewPlayerFrame;
        } /* if 0x44920 */
        if (((lastRank) === undefined)) {
            lastRank = lastRank = previewLastRank;
        } /* if 0x4492b */
        rank = ((Libc).Libc).calloc(notificationAllocationSize, 1);
        RankedSeasonEndNotification_ctor(rank, rank, playerFrame, lastRank);
        playerFrame = new RankedSeasonEndPopup(rank);
        return;
}
        }
        RankedSeasonEndPopup = previewRank = RankedSeasonEndPopup;
        exports.RankedSeasonEndPopup = RankedSeasonEndPopup;
        RankedSeasonEndPopup.allocationSize = popupAllocationSize;
        return;
};

// --------------------- MODULE 3196 — BrawlPassAutoCollectRewardsPopup ---------------------


// ============================================================ //
// webpack module 3196  —  BrawlPassAutoCollectRewardsPopup
// exports: BrawlPassAutoCollectRewardsPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3196] = function BrawlPassAutoCollectRewardsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, BrawlPassAutoCollectRewardsPopup_ctor, BrawlPassAutoCollectRewardsPopup_setData, BrawlPassAutoCollectRewardsPopup, <class_fields_init>, BrawlPassAutoCollectRewardsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlPassAutoCollectRewardsPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        BrawlPassAutoCollectRewardsPopup_ctor = new NativeFunction(((Libg).Libg).offset(12127156, 0), "void", ["pointer", "int", "int", "int"]);
        BrawlPassAutoCollectRewardsPopup_setData = new NativeFunction(((Libg).Libg).offset(12128752, 0), "void", ["pointer", "pointer"]);
        static setData (deliveries) {
        return;
};
        <class_fields_init> = undefined;
        BrawlPassAutoCollectRewardsPopup;
        class BrawlPassAutoCollectRewardsPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (seasonIndex, context, rewardType) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((BrawlPassAutoCollectRewardsPopup).allocationSize, 1);
        BrawlPassAutoCollectRewardsPopup_ctor(popupInstance, seasonIndex, context, rewardType);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x408dc */
        return this;
}
        }
        BrawlPassAutoCollectRewardsPopup = v8 = BrawlPassAutoCollectRewardsPopup;
        exports.BrawlPassAutoCollectRewardsPopup = BrawlPassAutoCollectRewardsPopup;
        BrawlPassAutoCollectRewardsPopup.allocationSize = 1152;
        return;
};

// --------------------- MODULE 9102 — BrawlPassUnlockBrawlerPopup ---------------------


// ============================================================ //
// webpack module 9102  —  BrawlPassUnlockBrawlerPopup
// exports: BrawlPassUnlockBrawlerPopup
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[9102] = function BrawlPassUnlockBrawlerPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, BrawlPassUnlockBrawlerPopup_show, BrawlPassUnlockBrawlerPopup, <class_fields_init>, BrawlPassUnlockBrawlerPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlPassUnlockBrawlerPopup = undefined;
        Libg = __webpack_require__(9878);
        BrawlPassUnlockBrawlerPopup_show = new NativeFunction(((Libg).Libg).offset(10534264, 0), "void", ["int", "int"]);
        <class_fields_init> = undefined;
        BrawlPassUnlockBrawlerPopup;
        class BrawlPassUnlockBrawlerPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x40a4c (open) */
}
            show () {
    var brawlerIndex, brawlerIndex;
        if (((brawlerIndex) === undefined)) {
            brawlerIndex = brawlerIndex = 0;
        } /* if 0x40a1b */
        return;
}
        }
        BrawlPassUnlockBrawlerPopup = BrawlPassUnlockBrawlerPopup = BrawlPassUnlockBrawlerPopup;
        exports.BrawlPassUnlockBrawlerPopup = BrawlPassUnlockBrawlerPopup;
        return;
};

// --------------------- MODULE 8058 — BrawlTvIntroPopup ---------------------


// ============================================================ //
// webpack module 8058  —  BrawlTvIntroPopup
// exports: BrawlTvIntroPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8058] = function BrawlTvIntroPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, BrawlTvIntroPopup_ctor, BrawlTvIntroPopup, <class_fields_init>, BrawlTvIntroPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlTvIntroPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        BrawlTvIntroPopup_ctor = new NativeFunction(((Libg).Libg).offset(10070492, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        BrawlTvIntroPopup;
        class BrawlTvIntroPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((BrawlTvIntroPopup).allocationSize, 1);
        BrawlTvIntroPopup_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x40bc5 */
        return this;
}
        }
        BrawlTvIntroPopup = v8 = BrawlTvIntroPopup;
        exports.BrawlTvIntroPopup = BrawlTvIntroPopup;
        BrawlTvIntroPopup.allocationSize = 440;
        return;
};

// --------------------- MODULE 3572 — BrawlTvIntroPopupPreview ---------------------


// ============================================================ //
// webpack module 3572  —  BrawlTvIntroPopupPreview
// exports: BrawlTvIntroPopupPreview
// deps: 4934 (GUI), 8058 (BrawlTvIntroPopup)
// ============================================================ //

__webpack_modules__[3572] = function BrawlTvIntroPopupPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, BrawlTvIntroPopup, BrawlTvIntroPopupPreview, <class_fields_init>, BrawlTvIntroPopupPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BrawlTvIntroPopupPreview = undefined;
        GUI = __webpack_require__(4934);
        BrawlTvIntroPopup = __webpack_require__(8058);
        <class_fields_init> = undefined;
        BrawlTvIntroPopupPreview;
        class BrawlTvIntroPopupPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9b2cf (open) */
}
            show () {
    var popup, okButton;
        popup = new (BrawlTvIntroPopup).BrawlTvIntroPopup();
        okButton = (popup).addGameButton("ok_button", 0);
        (okButton).setCustomButtonListener(function () {
        return (popup).fadeOut();
});
        return;
}
        }
        BrawlTvIntroPopupPreview = BrawlTvIntroPopupPreview = BrawlTvIntroPopupPreview;
        exports.BrawlTvIntroPopupPreview = BrawlTvIntroPopupPreview;
        return;
};

// --------------------- MODULE 2921 — RewardCompensationPopup ---------------------


// ============================================================ //
// webpack module 2921  —  RewardCompensationPopup
// exports: RewardCompensationPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2921] = function RewardCompensationPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, RewardCompensationPopup_ctor, RewardCompensationPopup, <class_fields_init>, RewardCompensationPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RewardCompensationPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        RewardCompensationPopup_ctor = new NativeFunction(((Libg).Libg).offset(12073452, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        RewardCompensationPopup;
        class RewardCompensationPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (notification) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((RewardCompensationPopup).allocationSize, 1);
        RewardCompensationPopup_ctor(popupInstance, notification);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x44c97 */
        return this;
}
        }
        RewardCompensationPopup = v8 = RewardCompensationPopup;
        exports.RewardCompensationPopup = RewardCompensationPopup;
        RewardCompensationPopup.allocationSize = 448;
        return;
};

// --------------------- MODULE 7135 — RewardOpeningPopup ---------------------


// ============================================================ //
// webpack module 7135  —  RewardOpeningPopup
// exports: RewardOpeningPopup
// deps: 993 (LogicClaimableRandomReward), 1588 (LogicMemory), 1978 (Libc), 3311 (LogicRandomRewardContainerData), 4009 (Config), 6139 (LogicDataTables), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7135] = function RewardOpeningPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicClaimableRandomReward, Libc, LogicMemory, LogicRandomRewardContainerData, LogicDataTables, Config, RewardOpeningPopup_ctorAddr, RewardOpeningPopup_setTapsCountAddr, RewardOpeningPopup_touchReleasedAddr, RewardOpeningPopup_ctor, RewardOpeningPopup_show, RewardOpeningPopup_setData, callbackOffset, containerDataOffset, DEFAULT_VISUAL_TYPE, RewardOpeningPopup, <class_fields_init>, RewardOpeningPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RewardOpeningPopup = undefined;
        Libg = __webpack_require__(9878);
        LogicClaimableRandomReward = __webpack_require__(993);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicRandomRewardContainerData = __webpack_require__(3311);
        LogicDataTables = __webpack_require__(6139);
        Config = __webpack_require__(4009);
        RewardOpeningPopup_ctorAddr = ((Libg).Libg).offset(11952856, 0);
        RewardOpeningPopup_setTapsCountAddr = ((Libg).Libg).offset(11954080, 0);
        RewardOpeningPopup_touchReleasedAddr = ((Libg).Libg).offset(0, 0);
        RewardOpeningPopup_ctor = new NativeFunction(RewardOpeningPopup_ctorAddr, "void", ["pointer", "pointer", "pointer", "int"]);
        RewardOpeningPopup_show = new NativeFunction(((Libg).Libg).offset(11950984, 0), "void", ["pointer"]);
        RewardOpeningPopup_setData = new NativeFunction(((Libg).Libg).offset(11977916, 0), "void", ["pointer", "pointer", "int", "int"]);
        callbackOffset = ((LogicMemory).LogicMemory).offset(32, 0);
        containerDataOffset = ((LogicMemory).LogicMemory).offset(0, 496);
        DEFAULT_VISUAL_TYPE = 0;
        static setData (data) {
    var source, openAt, data, source, openAt;
        source = this;
        source = data;
        if (((source) === undefined)) {
            openAt = source = 0;
        } /* if 0x450b5 */
        if (((openAt) === undefined)) {
            data = openAt = 0;
        } /* if 0x450be */
        return;
};
        <class_fields_init> = undefined;
        RewardOpeningPopup;
        class RewardOpeningPopup {
            constructor (containerOrId, data) {
    var source, openAt, containerOrId, data, source, openAt, claimable;
        openAt = this;
        if (<class_fields_init>) {
        } /* if 0x44fd8 */
        source = containerOrId;
        openAt = data;
        if (((source) === undefined)) {
            containerOrId = source = 0;
        } /* if 0x44ff1 */
        if (((openAt) === undefined)) {
            data = openAt = 3;
        } /* if 0x44ffa */
        openAt.instance = ((Libc).Libc).calloc((RewardOpeningPopup).allocationSize, 1);
        source = (RewardOpeningPopup).buildClaimable(containerOrId, source, openAt);
        RewardOpeningPopup_ctor((openAt).instance, (source).instance, (RewardOpeningPopup).buildEmptyCallback(), -1);
        return;
}
            show (claimable) {
        return;
}
            buildClaimable (containerOrId, source, openAt) {
    var claimable, containerData;
        claimable = new (LogicClaimableRandomReward).LogicClaimableRandomReward(source, openAt);
        if ((typeof containerOrId === "number")) {
        } /* if 0x45173 */
        /* jump -> 0x45174 */
        containerData = containerOrId;
        (claimable).setRandomRewardContainerData(containerData);
        return claimable;
}
            buildEmptyCallback () {
    var callback;
        callback = ((Libc).Libc).calloc((callbackOffset + (Process).pointerSize), 1);
        ((callback).add(callbackOffset)).writePointer(ptr(0));
        return callback;
}
            getContainerData (popupInstance) {
    var containerDataPointer;
        containerDataPointer = ((popupInstance).add(containerDataOffset)).readPointer();
        if ((containerDataPointer).isNull()) {
            return null;
        } /* if 0x4523e */
        return new (LogicRandomRewardContainerData).LogicRandomRewardContainerData(containerDataPointer);
}
            patch () {
    var currentClaimable;
        currentClaimable = { value: null };
        (RewardOpeningPopup).captureClaimableFromCtor(currentClaimable);
        (RewardOpeningPopup).skipTapCountInCtor(currentClaimable);
        if (((Process).platform === "darwin")) {
            (RewardOpeningPopup).forceDefaultOpenBranchOnTouch(currentClaimable);
            return;
        } /* if 0x452b6 (open) */
}
            captureClaimableFromCtor (currentClaimable) {
        return;
}
            skipTapCountInCtor (currentClaimable) {
        return;
}
            forceDefaultOpenBranchOnTouch (currentClaimable) {
        return;
}
        }
        RewardOpeningPopup = RewardOpeningPopup_setTapsCountAddr = RewardOpeningPopup;
        exports.RewardOpeningPopup = RewardOpeningPopup;
        RewardOpeningPopup.allocationSize = 1152;
        return;
};

// --------------------- MODULE 8781 — RecruitRoadClaimBrawlerPopup ---------------------


// ============================================================ //
// webpack module 8781  —  RecruitRoadClaimBrawlerPopup
// exports: RecruitRoadClaimBrawlerPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8781] = function RecruitRoadClaimBrawlerPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, RecruitRoadClaimBrawlerPopup_ctor, RecruitRoadClaimBrawlerPopup, <class_fields_init>, RecruitRoadClaimBrawlerPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RecruitRoadClaimBrawlerPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        RecruitRoadClaimBrawlerPopup_ctor = new NativeFunction(((Libg).Libg).offset(10767840, 0), "void", ["pointer", "bool"]);
        <class_fields_init> = undefined;
        RecruitRoadClaimBrawlerPopup;
        class RecruitRoadClaimBrawlerPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (isUltraRare) {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((RecruitRoadClaimBrawlerPopup).allocationSize, 1);
        if (isUltraRare) {
        } /* if 0x44aed */
        /* jump -> 0x44aee */
        popupInstance(1, 0);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x44b0a */
        return this;
}
        }
        RecruitRoadClaimBrawlerPopup = v8 = RecruitRoadClaimBrawlerPopup;
        exports.RecruitRoadClaimBrawlerPopup = RecruitRoadClaimBrawlerPopup;
        RecruitRoadClaimBrawlerPopup.allocationSize = 560;
        return;
};

// --------------------- MODULE 898 — InviteFriendWithCodePopup ---------------------


// ============================================================ //
// webpack module 898  —  InviteFriendWithCodePopup
// exports: InviteFriendWithCodePopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[898] = function InviteFriendWithCodePopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, InviteFriendWithCodePopup_ctor, InviteFriendWithCodePopup, <class_fields_init>, InviteFriendWithCodePopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.InviteFriendWithCodePopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        InviteFriendWithCodePopup_ctor = new NativeFunction(((Libg).Libg).offset(10881084, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        InviteFriendWithCodePopup;
        class InviteFriendWithCodePopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((InviteFriendWithCodePopup).allocationSize, 1);
        InviteFriendWithCodePopup_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x43617 */
        return this;
}
            show () {
    var popup;
        popup = new InviteFriendWithCodePopup();
        return;
}
        }
        InviteFriendWithCodePopup = v8 = InviteFriendWithCodePopup;
        exports.InviteFriendWithCodePopup = InviteFriendWithCodePopup;
        InviteFriendWithCodePopup.allocationSize = 464;
        return;
};

// --------------------- MODULE 6555 — PlayerCountryPopup ---------------------


// ============================================================ //
// webpack module 6555  —  PlayerCountryPopup
// exports: PlayerCountryPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6555] = function PlayerCountryPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, PlayerCountryPopup_ctor, PlayerCountryPopup, <class_fields_init>, PlayerCountryPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerCountryPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        PlayerCountryPopup_ctor = new NativeFunction(((Libg).Libg).offset(13522876, 0), "pointer", ["pointer"]);
        <class_fields_init> = undefined;
        PlayerCountryPopup;
        class PlayerCountryPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((PlayerCountryPopup).allocationSize, 1);
        PlayerCountryPopup_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x442ef */
        return this;
}
        }
        PlayerCountryPopup = v8 = PlayerCountryPopup;
        exports.PlayerCountryPopup = PlayerCountryPopup;
        PlayerCountryPopup.allocationSize = 472;
        return;
};

// --------------------- MODULE 366 — PrestigeSelectorPopup ---------------------


// ============================================================ //
// webpack module 366  —  PrestigeSelectorPopup
// exports: PrestigeSelectorPopup
// deps: 68 (UniItem), 5039 (GameButton), 7265 (Localisation), 8196 (PrestigeLevelUpPopup), 8261 (ListContainerPopup)
// ============================================================ //

__webpack_modules__[366] = function PrestigeSelectorPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, PrestigeLevelUpPopup, UniItem, ListContainerPopup, Localisation, PrestigeSelectorPopup, <class_fields_init>, PrestigeSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PrestigeSelectorPopup = undefined;
        GameButton = __webpack_require__(5039);
        PrestigeLevelUpPopup = __webpack_require__(8196);
        UniItem = __webpack_require__(68);
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        static refreshItems () {
    var listContainer, index, prestige, prestigeItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        index = 0;
        /* jump -> 0xde377 */
        prestige = /*iter*/ (PrestigeSelectorPopup).PRESTIGE_TYPE;
        prestigeItem = new (UniItem).UniItem((prestige).name);
        (prestigeItem).setCustomButtonListener(((this).buttonClicked).bind(this), ("particleStyle_").concat(index));
        prestigeItem.id = index;
        (prestigeItem).setText((((Localisation).Localisation).getString("Prestige")).replace("{int}", ((prestige).level).toString()));
        ((this).container).addEntry(prestigeItem);
        index = ((index) + 1);
        (index++);
        } while (!prestigeItem);
        prestigeItem = (PrestigeSelectorPopup).PRESTIGE_TYPE;
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(1, (naviHeight * 2.5), 0, 0, 0, 0, -1);
        return;
};
        static buttonClicked (self, buttonPtr) {
    var button, prestigeId;
        button = new (GameButton).GameButton(buttonPtr);
        prestigeId = ((button).id + 1);
        return;
};
        <class_fields_init> = undefined;
        PrestigeSelectorPopup;
        class PrestigeSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor (character) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("PrestigeMenuPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xde228 */
        this.character = character;
        (this).adjustPopupHeaderButtons("prestige_selector");
        (this).refreshItems();
        return this;
}
        }
        PrestigeSelectorPopup = v8 = PrestigeSelectorPopup;
        exports.PrestigeSelectorPopup = PrestigeSelectorPopup;
        PrestigeSelectorPopup.PRESTIGE_TYPE = [{ name: "Prestige", level: 1 }, { name: "Prestige", level: 2 }, { name: "Prestige", level: 3 }];
        return;
};

// --------------------- MODULE 8196 — PrestigeLevelUpPopup ---------------------


// ============================================================ //
// webpack module 8196  —  PrestigeLevelUpPopup
// exports: PrestigeLevelUpPopup
// deps: 8581 (PopupBase), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8196] = function PrestigeLevelUpPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, PopupBase, PrestigeLevelUpPopup_prestigeUp, PrestigeLevelUpPopup, <class_fields_init>, PrestigeLevelUpPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PrestigeLevelUpPopup = undefined;
        Libg = __webpack_require__(9878);
        PopupBase = __webpack_require__(8581);
        PrestigeLevelUpPopup_prestigeUp = new NativeFunction(((Libg).Libg).offset(10428516, 0), "void", ["pointer", "int"]);
        <class_fields_init> = undefined;
        PrestigeLevelUpPopup;
        class PrestigeLevelUpPopup extends <class_fields_init> = (PopupBase).PopupBase {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x44464 */
        return this;
}
            prestigeUp (character, prestiegeLevel) {
        return;
}
        }
        PrestigeLevelUpPopup = PrestigeLevelUpPopup = PrestigeLevelUpPopup;
        exports.PrestigeLevelUpPopup = PrestigeLevelUpPopup;
        return;
};

// --------------------- MODULE 6642 — PrestigeIntroPopupPreview ---------------------


// ============================================================ //
// webpack module 6642  —  PrestigeIntroPopupPreview
// exports: PrestigeIntroPopupPreview
// deps: 1978 (Libc), 2921 (RewardCompensationPopup), 4934 (GUI)
// ============================================================ //

__webpack_modules__[6642] = function PrestigeIntroPopupPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, GUI, RewardCompensationPopup, NOTIFICATION_SCRATCH_SIZE, PRESTIGE_COMPENSATION_TYPE_OFFSET, PRESTIGE_COMPENSATION_TYPE, POPUP_BUTTON_NAMES, PrestigeIntroPopupPreview, <class_fields_init>, PrestigeIntroPopupPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PrestigeIntroPopupPreview = undefined;
        Libc = __webpack_require__(1978);
        GUI = __webpack_require__(4934);
        RewardCompensationPopup = __webpack_require__(2921);
        NOTIFICATION_SCRATCH_SIZE = 64;
        PRESTIGE_COMPENSATION_TYPE_OFFSET = 52;
        PRESTIGE_COMPENSATION_TYPE = 1;
        POPUP_BUTTON_NAMES = ["button_ok", "button_close"];
        <class_fields_init> = undefined;
        PrestigeIntroPopupPreview;
        class PrestigeIntroPopupPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa3b10 (open) */
}
            show () {
    var notification, popup;
        notification = (PrestigeIntroPopupPreview).buildPrestigeNotification();
        popup = new (RewardCompensationPopup).RewardCompensationPopup(notification);
        (PrestigeIntroPopupPreview).routeAllButtonsToClose(popup);
        return;
}
            buildPrestigeNotification () {
    var notification;
        notification = ((Libc).Libc).calloc(NOTIFICATION_SCRATCH_SIZE, 1);
        ((notification).add(PRESTIGE_COMPENSATION_TYPE_OFFSET)).writeU32(PRESTIGE_COMPENSATION_TYPE);
        return notification;
}
            routeAllButtonsToClose (popup) {
    var buttonName, button;
        /* jump -> 0xa3abd */
        buttonName = /*iter*/ POPUP_BUTTON_NAMES;
        button = (popup).addGameButton(buttonName, 1);
        (button).setCustomButtonListener(function () {
        return (popup).fadeOut();
});
        } while (!button = POPUP_BUTTON_NAMES);
        buttonName = <underflow>;
        return;
}
        }
        PrestigeIntroPopupPreview = <class_fields_init> = PrestigeIntroPopupPreview;
        exports.PrestigeIntroPopupPreview = PrestigeIntroPopupPreview;
        return;
};

// --------------------- MODULE 2695 — CelebrationPopupPreview ---------------------


// ============================================================ //
// webpack module 2695  —  CelebrationPopupPreview
// exports: CelebrationPopupPreview
// deps: 3570 (FameLevelUpPopup), 4934 (GUI), 8781 (RecruitRoadClaimBrawlerPopup)
// ============================================================ //

__webpack_modules__[2695] = function CelebrationPopupPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, FameLevelUpPopup, RecruitRoadClaimBrawlerPopup, CelebrationPopupPreview, <class_fields_init>, CelebrationPopupPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CelebrationPopupPreview = undefined;
        GUI = __webpack_require__(4934);
        FameLevelUpPopup = __webpack_require__(3570);
        RecruitRoadClaimBrawlerPopup = __webpack_require__(8781);
        <class_fields_init> = undefined;
        CelebrationPopupPreview;
        class CelebrationPopupPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9b45b (open) */
}
            showNewBrawler () {
    var popup;
        popup = new (RecruitRoadClaimBrawlerPopup).RecruitRoadClaimBrawlerPopup(false);
        return;
}
            showFameLevelUp () {
    var popup;
        popup = new (FameLevelUpPopup).FameLevelUpPopup(0, 1);
        return;
}
        }
        CelebrationPopupPreview = CelebrationPopupPreview = CelebrationPopupPreview;
        exports.CelebrationPopupPreview = CelebrationPopupPreview;
        return;
};

// --------------------- MODULE 1058 — PreviewBrawlerOrSkinRewardPopup ---------------------


// ============================================================ //
// webpack module 1058  —  PreviewBrawlerOrSkinRewardPopup
// exports: PreviewBrawlerOrSkinRewardPopup
// deps: 1978 (Libc), 6193 (GenericPopup), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1058] = function PreviewBrawlerOrSkinRewardPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GenericPopup, Libc, StringObject, PreviewBrawlerOrSkinRewardPopup_ctor, PreviewBrawlerOrSkinRewardPopup, <class_fields_init>, PreviewBrawlerOrSkinRewardPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PreviewBrawlerOrSkinRewardPopup = undefined;
        Libg = __webpack_require__(9878);
        GenericPopup = __webpack_require__(6193);
        Libc = __webpack_require__(1978);
        StringObject = __webpack_require__(7535);
        PreviewBrawlerOrSkinRewardPopup_ctor = new NativeFunction(((Libg).Libg).offset(10446748, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer"]);
        <class_fields_init> = undefined;
        PreviewBrawlerOrSkinRewardPopup;
        class PreviewBrawlerOrSkinRewardPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (skin) {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        instance = ((Libc).Libc).malloc((PreviewBrawlerOrSkinRewardPopup).allocationSize);
        ((StringObject).StringObject).with("", function (emptyStrObj) {
        return PreviewBrawlerOrSkinRewardPopup_ctor(instance, NULL, (skin).instance, 0, emptyStrObj);
});
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x4461c */
        return this;
}
        }
        PreviewBrawlerOrSkinRewardPopup = v8 = PreviewBrawlerOrSkinRewardPopup;
        exports.PreviewBrawlerOrSkinRewardPopup = PreviewBrawlerOrSkinRewardPopup;
        PreviewBrawlerOrSkinRewardPopup.allocationSize = 520;
        return;
};

// --------------------- MODULE 4210 — AccountDeletionDialogPreview ---------------------


// ============================================================ //
// webpack module 4210  —  AccountDeletionDialogPreview
// exports: AccountDeletionDialogPreview
// deps: 4934 (GUI), 6193 (GenericPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[4210] = function AccountDeletionDialogPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, StringTable, GenericPopup, PREVIEW_DAYS_UNTIL_DELETE, TIME_PLACEHOLDER, HIDDEN_STOCK_BUTTON_NAMES, AccountDeletionDialogPreviewPopup, <class_fields_init>, AccountDeletionDialogPreviewPopup, AccountDeletionDialogPreview, <class_fields_init>, AccountDeletionDialogPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AccountDeletionDialogPreview = undefined;
        GUI = __webpack_require__(4934);
        StringTable = __webpack_require__(9250);
        GenericPopup = __webpack_require__(6193);
        PREVIEW_DAYS_UNTIL_DELETE = 30;
        TIME_PLACEHOLDER = "<time>";
        HIDDEN_STOCK_BUTTON_NAMES = ["button_negative", "button_no", "button_yes"];
        static bindContactSupportButton () {
    var contactSupportButton;
        contactSupportButton = (this).addGameButton("button_ok", 1);
        if (!((StringTable).StringTable).getString("TID_ACCOUNT_DELETION_WARNING_BUTTON_CONTACT_PS")) {
            ((StringTable).StringTable).getString("TID_ACCOUNT_DELETION_WARNING_BUTTON_CONTACT_PS");
            ((contactSupportButton).getMovieClip()).getTextFieldByName("txt").text = "Contact Support";
        } /* if 0x98555 */
        return;
};
        static bindCloseButton () {
    var closeButton;
        closeButton = (this).addGameButton("button_close", 1);
        return;
};
        <class_fields_init> = undefined;
        AccountDeletionDialogPreviewPopup;
        class AccountDeletionDialogPreviewPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var movieClip, title, bodyTemplate, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("popup_generic", false, true);
        if (<class_fields_init>) {
        } /* if 0x98415 */
        movieClip = (this).getMovieClip();
        (AccountDeletionDialogPreviewPopup).hideUnusedStockButtons(movieClip);
        if (!((StringTable).StringTable).getString("TID_ACCOUNT_DELETION_WARNING_TITLE")) {
            ((StringTable).StringTable).getString("TID_ACCOUNT_DELETION_WARNING_TITLE");
            title = "Account Deletion Warning";
        } /* if 0x98450 */
        (this).setTitleTid(title);
        if (!((StringTable).StringTable).getString("TID_ACCOUNT_DELETION_WARNING_TEXT")) {
            ((StringTable).StringTable).getString("TID_ACCOUNT_DELETION_WARNING_TEXT");
            bodyTemplate = ("Your account will be deleted in ").concat(TIME_PLACEHOLDER, ".");
        } /* if 0x9848e */
        (movieClip).getTextFieldByName("txt").text = (bodyTemplate).replace(TIME_PLACEHOLDER, ("").concat(PREVIEW_DAYS_UNTIL_DELETE, " days"));
        (this).bindContactSupportButton();
        (this).bindCloseButton();
        return this;
}
            hideUnusedStockButtons (movieClip) {
    var buttonName, stockButton;
        /* jump -> 0x98638 */
        buttonName = /*iter*/ HIDDEN_STOCK_BUTTON_NAMES;
        stockButton = (movieClip).getMovieClipByName(buttonName);
        if (stockButton) {
            stockButton.visibility = false;
        } /* if 0x98638 */
        } while (!stockButton);
        stockButton = HIDDEN_STOCK_BUTTON_NAMES;
        return;
}
        }
        AccountDeletionDialogPreviewPopup = AccountDeletionDialogPreviewPopup = AccountDeletionDialogPreviewPopup;
        <class_fields_init> = undefined;
        AccountDeletionDialogPreview;
        class AccountDeletionDialogPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x986a4 (open) */
}
            show () {
        return;
}
        }
        AccountDeletionDialogPreview = AccountDeletionDialogPreviewPopup = AccountDeletionDialogPreview;
        exports.AccountDeletionDialogPreview = AccountDeletionDialogPreview;
        return;
};

// --------------------- MODULE 7284 — ChatOptionsPopup ---------------------


// ============================================================ //
// webpack module 7284  —  ChatOptionsPopup
// exports: ChatOptionsPopup
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[7284] = function ChatOptionsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, ChatOptionsPopup_show, ChatOptionsPopup, <class_fields_init>, ChatOptionsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ChatOptionsPopup = undefined;
        Libg = __webpack_require__(9878);
        ChatOptionsPopup_show = new NativeFunction(((Libg).Libg).offset(12903276, 0), "void", []);
        <class_fields_init> = undefined;
        ChatOptionsPopup;
        class ChatOptionsPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x40cdc (open) */
}
            show () {
        return;
}
        }
        ChatOptionsPopup = ChatOptionsPopup = ChatOptionsPopup;
        exports.ChatOptionsPopup = ChatOptionsPopup;
        return;
};

// --------------------- MODULE 7300 — MaintenancePopupPreview ---------------------


// ============================================================ //
// webpack module 7300  —  MaintenancePopupPreview
// exports: MaintenancePopupPreview
// deps: 1191 (DisplayObject), 1588 (LogicMemory), 2035 (LaserBoxManager), 3015 (TextField), 3077 (NewsPage), 3217 (Sprite), 3380 (Logcat), 7542 (MaintenanceModeInfo), 8775 (GameMain)
// ============================================================ //

__webpack_modules__[7300] = function MaintenancePopupPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var MaintenanceModeInfo, NewsPage, LaserBoxManager, GameMain, Sprite, TextField, DisplayObject, LogicMemory, Logcat, MAINTENANCE_MODE_SINGLE_TAB, MAINTENANCE_MODE_2_TAB, MAINTENANCE_MODE_3_TAB, MAINTENANCE_MODE_ESPORTS, MAINTENANCE_DIALOG_TYPE, MAINTENANCE_DEFAULT_SECONDS, MAINTENANCE_SHORT_SECONDS, MAINTENANCE_EMPTY_MESSAGE, initStateSubStateOffset, INIT_STATE_READY_SUB_STATE, MaintenancePopupPreview, <class_fields_init>, MaintenancePopupPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MaintenancePopupPreview = undefined;
        MaintenanceModeInfo = __webpack_require__(7542);
        NewsPage = __webpack_require__(3077);
        LaserBoxManager = __webpack_require__(2035);
        GameMain = __webpack_require__(8775);
        Sprite = __webpack_require__(3217);
        TextField = __webpack_require__(3015);
        DisplayObject = __webpack_require__(1191);
        LogicMemory = __webpack_require__(1588);
        Logcat = __webpack_require__(3380);
        MAINTENANCE_MODE_SINGLE_TAB = 4;
        MAINTENANCE_MODE_2_TAB = 3;
        MAINTENANCE_MODE_3_TAB = 7;
        MAINTENANCE_MODE_ESPORTS = 6;
        MAINTENANCE_DIALOG_TYPE = 4;
        MAINTENANCE_DEFAULT_SECONDS = 600;
        MAINTENANCE_SHORT_SECONDS = 30;
        MAINTENANCE_EMPTY_MESSAGE = "";
        initStateSubStateOffset = ((LogicMemory).LogicMemory).offset(72);
        INIT_STATE_READY_SUB_STATE = 4;
        <class_fields_init> = undefined;
        MaintenancePopupPreview;
        class MaintenancePopupPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa258c (open) */
}
            showDefault () {
        return;
}
            showShort30s () {
        return;
}
            showTwoTab () {
        return;
}
            showThreeTab () {
        return;
}
            showNewsEsports () {
        return;
}
            isLoginBlockActive () {
        return ((MaintenancePopupPreview).pendingReal !== null);
}
            onInitStateUpdate (initStateInstance) {
    var subState, mode, secondsUntilEnd, e;
        if ((!(MaintenancePopupPreview).pendingReal)) {
            return;
        } /* if 0xa1ef3 */
        if ((initStateInstance).isNull()) {
            return;
        } /* if 0xa1eff */
        subState = ((initStateInstance).add(initStateSubStateOffset)).readS32();
        if ((subState !== (MaintenancePopupPreview).lastLoggedSubState)) {
            ((Logcat).Logcat).logDebug(("[Maintenance] sub-state=").concat(subState));
            MaintenancePopupPreview.lastLoggedSubState = subState;
        } /* if 0xa1f4e */
        if ((subState < INIT_STATE_READY_SUB_STATE)) {
            return;
        } /* if 0xa1f58 */
        if ((!((MaintenancePopupPreview).pendingReal).overlayShown)) {
            if (!((undefined) === undefined)) {
                mode = (Object(undefined)).mode;
                secondsUntilEnd = (Object(undefined)).secondsUntilEnd;
                Object(undefined);
            } /* if 0xa1f83 */
            /* jump -> 0xa1f8e */
            mode = secondsUntilEnd = MaintenancePopupPreview;
            /* loop: jump back to 0xa1f73 */
            (MaintenancePopupPreview).pendingReal.overlayShown = true;
            /* CATCH -> 0xa1fb8 (try region) */
            (MaintenancePopupPreview).showOverlay(mode, secondsUntilEnd);
            return;
            e = (MaintenancePopupPreview).pendingReal;
            /* CATCH -> 0xa1fdf (try region) */
            ((Logcat).Logcat).logDebug(("[Maintenance] overlay error: ").concat(e));
            subState = <underflow>;
            return;
            throw <underflow>;
        } /* if 0xa1fdd */
        return;
}
            tickCountdown () {
    var pending, remainingMs, remainingSeconds, text;
        pending = (MaintenancePopupPreview).pendingReal;
        if ((!pending)) {
            return;
        } /* if 0xa2053 */
        remainingMs = ((pending).expiresAt - (Date).now());
        if ((remainingMs <= 0)) {
            ((Logcat).Logcat).logDebug("[Maintenance] countdown expired, releasing login block");
            (MaintenancePopupPreview).dismissOverlay(pending);
            MaintenancePopupPreview.pendingReal = null;
            MaintenancePopupPreview.lastLoggedSubState = -1;
            return;
        } /* if 0xa20b9 */
        remainingSeconds = (Math).ceil((remainingMs / 1000));
        text = (MaintenancePopupPreview).formatRemainingTime(remainingSeconds);
        if ((text === (pending).lastTimerText)) {
            return;
        } /* if 0xa20ec */
        pending.lastTimerText = text;
        if ((pending).timerTextField) {
            if ((!((pending).timerTextField).isNull())) {
                new (TextField).TextField((pending).timerTextField).text = text;
                return;
            } /* if 0xa2130 (open) */
        } /* if 0xa2130 (open) */
}
            queueRealAndReload (mode, secondsUntilEnd) {
        MaintenancePopupPreview.pendingReal = { mode: mode, secondsUntilEnd: secondsUntilEnd, overlayShown: false, expiresAt: ((Date).now() + (secondsUntilEnd * 1000)), timerTextField: null, lastTimerText: "", pageInstance: null };
        return;
}
            showOverlay (mode, secondsUntilEnd) {
    var info, page, overlayContainer, retryButton, timerTxt, text;
        ((GameMain).GameMain).loadAsset("sc/ui.sc");
        ((LaserBoxManager).LaserBoxManager).updateManifest();
        info = ((MaintenanceModeInfo).MaintenanceModeInfo).alloc(mode, secondsUntilEnd, false, MAINTENANCE_EMPTY_MESSAGE);
        (LaserBoxManager).LaserBoxManager.forceTabsAvailable = true;
        page = ((NewsPage).NewsPage).create(info, MAINTENANCE_EMPTY_MESSAGE, MAINTENANCE_DIALOG_TYPE);
        (LaserBoxManager).LaserBoxManager.forceTabsAvailable = false;
        overlayContainer = ((GameMain).GameMain).getOverlayContainer();
        ((Sprite).Sprite).addChild(overlayContainer, (page).instance);
        (page).forceOpenLandingPage();
        retryButton = (page).getRetryButton();
        if ((!(retryButton).isNull())) {
            new (DisplayObject).DisplayObject(retryButton).visibility = 0;
        } /* if 0xa231e */
        timerTxt = (page).getTimerTextField();
        if ((!(timerTxt).isNull())) {
            text = (MaintenancePopupPreview).formatRemainingTime(secondsUntilEnd);
            new (TextField).TextField(timerTxt).text = text;
            if ((MaintenancePopupPreview).pendingReal) {
                (MaintenancePopupPreview).pendingReal.timerTextField = timerTxt;
                (MaintenancePopupPreview).pendingReal.lastTimerText = text;
            } /* if 0xa238b */
        } /* if 0xa238b */
        if ((MaintenancePopupPreview).pendingReal) {
            (MaintenancePopupPreview).pendingReal.pageInstance = (page).instance;
        } /* if 0xa23aa */
        return;
}
            dismissOverlay (pending) {
    var overlayContainer;
        if ((pending).pageInstance) {
            if ((!((pending).pageInstance).isNull())) {
                overlayContainer = ((GameMain).GameMain).getOverlayContainer();
                if ((!(overlayContainer).isNull())) {
                    (new (Sprite).Sprite(overlayContainer)).removeChild((pending).pageInstance);
                } /* if 0xa2454 */
            } /* if 0xa2454 */
        } /* if 0xa2454 */
        return;
}
            formatRemainingTime (secondsUntilEnd) {
    var totalMinutes, seconds, hours, minutes, pad;
        totalMinutes = (Math).floor((secondsUntilEnd / 60));
        seconds = (secondsUntilEnd % 60);
        hours = (Math).floor((totalMinutes / 60));
        minutes = (totalMinutes % 60);
        pad = totalMinutes = seconds = hours = minutes = pad = <underflow>;
        if ((hours > 0)) {
            return ("").concat(hours, ":", pad(minutes), ":", pad(seconds));
        } /* if 0xa2517 */
        return ("").concat(minutes, ":", pad(seconds));
}
        }
        MaintenancePopupPreview = Logcat = MaintenancePopupPreview;
        exports.MaintenancePopupPreview = MaintenancePopupPreview;
        MaintenancePopupPreview.pendingReal = null;
        MaintenancePopupPreview.lastLoggedSubState = -1;
        return;
};

// --------------------- MODULE 8548 — DebugCountryPopupPreview ---------------------


// ============================================================ //
// webpack module 8548  —  DebugCountryPopupPreview
// exports: DebugCountryPopupPreview
// deps: 4934 (GUI), 6555 (PlayerCountryPopup)
// ============================================================ //

__webpack_modules__[8548] = function DebugCountryPopupPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, PlayerCountryPopup, DebugCountryPopupPreview, <class_fields_init>, DebugCountryPopupPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugCountryPopupPreview = undefined;
        GUI = __webpack_require__(4934);
        PlayerCountryPopup = __webpack_require__(6555);
        <class_fields_init> = undefined;
        DebugCountryPopupPreview;
        class DebugCountryPopupPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9d897 (open) */
}
            show () {
        return;
}
        }
        DebugCountryPopupPreview = DebugCountryPopupPreview = DebugCountryPopupPreview;
        exports.DebugCountryPopupPreview = DebugCountryPopupPreview;
        return;
};

// --------------------- MODULE 3117 — CollabDrop ---------------------


// ============================================================ //
// webpack module 3117  —  CollabDrop
// exports: CollabDropPopup
// deps: 6193 (GenericPopup), 7265 (Localisation)
// ============================================================ //

__webpack_modules__[3117] = function CollabDrop_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GenericPopup, Localisation, CollabDropPopup, <class_fields_init>, CollabDropPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CollabDropPopup = undefined;
        GenericPopup = __webpack_require__(6193);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        CollabDropPopup;
        class CollabDropPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (text) {
    var title, text, title, movieClip, closeButton, this.active_func, new.target;
        closeButton = /*special:2*/;
        this.active_func = /*special:3*/;
        title = text;
        if (((title) === undefined)) {
            text = title = ((Localisation).Localisation).getString("CollabDropPopupTitle");
        } /* if 0x9c513 */
        new.target = super("popup_generic");
        if (<class_fields_init>) {
        } /* if 0x9c538 */
        title = (new.target).getMovieClip();
        new.target.movieClip = title;
        (title).getMovieClipByName("button_negative").visibility = false;
        (title).getMovieClipByName("button_ok").visibility = false;
        (title).getMovieClipByName("button_no").visibility = false;
        (title).getMovieClipByName("button_yes").visibility = false;
        (new.target).setTitleTid(title);
        new.target.textTextField = (title).getTextFieldByName("txt");
        (new.target).textTextField.text = text;
        ((new.target).textTextField).shiftY(-30);
        (new.target).textTextField.fontSize = 11;
        movieClip = (new.target).addGameButton("button_close", 1);
        new.target.closeButton = movieClip;
        (movieClip).setCustomButtonListener(((new.target).closeButtonPressed).bind(new.target));
        return new.target;
}
        }
        CollabDropPopup = CollabDropPopup = CollabDropPopup;
        exports.CollabDropPopup = CollabDropPopup;
        return;
};

// --------------------- MODULE 3567 — EsportTournamentsPopup ---------------------


// ============================================================ //
// webpack module 3567  —  EsportTournamentsPopup
// exports: EsportTournamentsPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3567] = function EsportTournamentsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, EsportTournamentsPopup_ctor, EsportTournamentsPopup, <class_fields_init>, EsportTournamentsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EsportTournamentsPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        EsportTournamentsPopup_ctor = new NativeFunction(((Libg).Libg).offset(10031476, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        EsportTournamentsPopup;
        class EsportTournamentsPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((EsportTournamentsPopup).allocationSize, 1);
        EsportTournamentsPopup_ctor(popupInstance);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x40e71 */
        return this;
}
            show () {
    var popup;
        popup = new EsportTournamentsPopup();
        return;
}
        }
        EsportTournamentsPopup = v8 = EsportTournamentsPopup;
        exports.EsportTournamentsPopup = EsportTournamentsPopup;
        EsportTournamentsPopup.allocationSize = 432;
        return;
};

// --------------------- MODULE 33 — SettingsPopup ---------------------


// ============================================================ //
// webpack module 33  —  SettingsPopup
// exports: SettingsPopup
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[33] = function SettingsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, SettingsPopup_show, SettingsPopup, <class_fields_init>, SettingsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SettingsPopup = undefined;
        Libg = __webpack_require__(9878);
        SettingsPopup_show = new NativeFunction(((Libg).Libg).offset(11227664, 0), "void", []);
        <class_fields_init> = undefined;
        SettingsPopup;
        class SettingsPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4562b (open) */
}
            show () {
        return;
}
        }
        SettingsPopup = SettingsPopup = SettingsPopup;
        exports.SettingsPopup = SettingsPopup;
        return;
};

// --------------------- MODULE 303 — SettingsPrivacyScreen ---------------------


// ============================================================ //
// webpack module 303  —  SettingsPrivacyScreen
// exports: SettingsPrivacyScreen
// deps: 1018 (HomeMode), 1588 (LogicMemory), 3401 (GameStateManager), 9878 (Libg)
// ============================================================ //

__webpack_modules__[303] = function SettingsPrivacyScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, HomeMode, GameStateManager, SettingsPrivacyScreen_toggleHidePlayerProfile, SettingsPrivacyScreen_openDeleteAccount, privacyPreferencesOffset, HIDE_PLAYER_PROFILE_BIT, SettingsPrivacyScreen, <class_fields_init>, SettingsPrivacyScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SettingsPrivacyScreen = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        HomeMode = __webpack_require__(1018);
        GameStateManager = __webpack_require__(3401);
        SettingsPrivacyScreen_toggleHidePlayerProfile = new NativeFunction(((Libg).Libg).offset(13519832, 0), "void", []);
        SettingsPrivacyScreen_openDeleteAccount = new NativeFunction(((Libg).Libg).offset(13519108, 0), "void", ["pointer"]);
        privacyPreferencesOffset = ((LogicMemory).LogicMemory).offset(704, 824);
        HIDE_PLAYER_PROFILE_BIT = 2;
        <class_fields_init> = undefined;
        SettingsPrivacyScreen;
        class SettingsPrivacyScreen {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5933e (open) */
}
            openDeleteAccount () {
        return;
}
            toggleHidePlayerProfile () {
        /* is_null  */
        if (((HomeMode).HomeMode).getInstance()) {
            return;
        } /* if 0x59251 */
        return;
}
            isHidePlayerProfileEnabled () {
    var preferences;
        preferences = (SettingsPrivacyScreen).getPreferences();
        if ((preferences).isNull()) {
            return false;
        } /* if 0x59296 */
        return ((((preferences).readU8() >> HIDE_PLAYER_PROFILE_BIT) & 1) !== 0);
}
            getPreferences () {
    var avatar;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return NULL;
        } /* if 0x592f8 */
        return (((avatar).instance).add(privacyPreferencesOffset)).readPointer();
}
        }
        SettingsPrivacyScreen = SettingsPrivacyScreen = SettingsPrivacyScreen;
        exports.SettingsPrivacyScreen = SettingsPrivacyScreen;
        return;
};

// --------------------- MODULE 7591 — SettingsScreen ---------------------


// ============================================================ //
// webpack module 7591  —  SettingsScreen
// exports: SettingsScreen
// deps: 1191 (DisplayObject), 1580 (FPSLimit), 1588 (LogicMemory), 4934 (GUI), 5039 (GameButton), 6893 (ModConfiguration), 7265 (Localisation), 8203 (ModMenu), 9250 (StringTable), 9407 (DropGUIContainer), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7591] = function SettingsScreen_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringTable, GameButton, Localisation, DropGUIContainer, GUI, FPSLimit, ModConfiguration, DisplayObject, LogicMemory, ModMenu, SettingsScreen_ctor, consentChoicesButtonOffset, personalizedOffersInfoButtonOffset, personalizedOffersToggleOffset, SettingsScreen, <class_fields_init>, SettingsScreen;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SettingsScreen = undefined;
        Libg = __webpack_require__(9878);
        StringTable = __webpack_require__(9250);
        GameButton = __webpack_require__(5039);
        Localisation = __webpack_require__(7265);
        DropGUIContainer = __webpack_require__(9407);
        GUI = __webpack_require__(4934);
        FPSLimit = __webpack_require__(1580);
        ModConfiguration = __webpack_require__(6893);
        DisplayObject = __webpack_require__(1191);
        LogicMemory = __webpack_require__(1588);
        ModMenu = __webpack_require__(8203);
        SettingsScreen_ctor = ((Libg).Libg).offset(13503832, 0);
        consentChoicesButtonOffset = ((LogicMemory).LogicMemory).offset(480);
        personalizedOffersInfoButtonOffset = ((LogicMemory).LogicMemory).offset(504);
        personalizedOffersToggleOffset = ((LogicMemory).LogicMemory).offset(512);
        static removeOverlappingControls () {
    var offset, pointer, movieClip, name;
        /* jump -> 0x599ef */
        offset = /*iter*/ [consentChoicesButtonOffset, personalizedOffersInfoButtonOffset, personalizedOffersToggleOffset];
        pointer = (((this).instance).add(offset)).readPointer();
        if ((!(pointer).isNull())) {
            (new (DisplayObject).DisplayObject(pointer)).removeFromParent();
        } /* if 0x599ef */
        } while (!pointer = [consentChoicesButtonOffset, personalizedOffersInfoButtonOffset, personalizedOffersToggleOffset]);
        offset = movieClip = <underflow>;
        movieClip = (this).getMovieClip();
        /* jump -> 0x59a33 */
        name = /*iter*/ ["TID_SETTINGS_CONSENT_CHOICES", "TID_PERSONALIZED_OFFERS"];
        if ((((movieClip).getTextFieldByName(name)) == null)) {
            (movieClip).getTextFieldByName(name);
        } /* if 0x59a2a */
        /* jump -> 0x59a32 */
        (undefined).removeFromParent();
        } while (!["TID_SETTINGS_CONSENT_CHOICES", "TID_PERSONALIZED_OFFERS"]);
        name = <underflow>;
        return;
};
        <class_fields_init> = undefined;
        SettingsScreen;
        class SettingsScreen extends <class_fields_init> = (DropGUIContainer).DropGUIContainer {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x59a97 */
        return this;
}
            patch () {
        return;
}
        }
        SettingsScreen = DisplayObject = SettingsScreen;
        exports.SettingsScreen = SettingsScreen;
        return;
};

// --------------------- MODULE 3004 — CameraSettingsPopup ---------------------


// ============================================================ //
// webpack module 3004  —  CameraSettingsPopup
// exports: CameraSettingsPopup
// deps: 120 (GameSliderComponent), 4188 (BattleCamera), 4934 (GUI), 6193 (GenericPopup), 7265 (Localisation), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[3004] = function CameraSettingsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GenericPopup, Localisation, GameSliderComponent, StringTable, GUI, BattleCamera, SLIDER_IS_PRESSED_OFFSET, ZOOM_SLIDER_SCALE, SLIDER_ROW_HEIGHT, SLIDER_X, LABEL_X, GROUP_Y_OFFSET, LABEL_Y_OFFSET, LABEL_FONT_SIZE, DOUBLE_TAP_WINDOW_MS, CameraSettingsPopup, <class_fields_init>, CameraSettingsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CameraSettingsPopup = undefined;
        GenericPopup = __webpack_require__(6193);
        Localisation = __webpack_require__(7265);
        GameSliderComponent = __webpack_require__(120);
        StringTable = __webpack_require__(9250);
        GUI = __webpack_require__(4934);
        BattleCamera = __webpack_require__(4188);
        SLIDER_IS_PRESSED_OFFSET = 320;
        ZOOM_SLIDER_SCALE = 100;
        SLIDER_ROW_HEIGHT = 45;
        SLIDER_X = 130;
        LABEL_X = -255;
        GROUP_Y_OFFSET = -25;
        LABEL_Y_OFFSET = -15;
        LABEL_FONT_SIZE = 22;
        DOUBLE_TAP_WINDOW_MS = 200;
        static createCloseButton () {
    var closeButton;
        closeButton = (this).addGameButton("button_close", 1);
        return;
};
        static createSliders (anchorCenterY) {
    var popupClip, sliderCount, firstSliderY;
        popupClip = (this).getMovieClip();
        sliderCount = (CameraSettingsPopup).SLIDER_SPECS.length;
        firstSliderY = ((anchorCenterY - (((sliderCount - 1) * SLIDER_ROW_HEIGHT) / 2)) + GROUP_Y_OFFSET);
        return;
};
        static refreshLabels () {
        return;
};
        static resetSlider (index) {
    var spec, slider;
        spec = (CameraSettingsPopup).SLIDER_SPECS[index];
        slider = (this).sliders[index];
        (slider).setValue((spec).defaultValue);
        (((slider).instance).add(SLIDER_IS_PRESSED_OFFSET)).writeU8(0);
        return;
};
        static updateElements (deltaTime) {
    var anyChanged, now;
        anyChanged = false;
        now = (Date).now();
        ((CameraSettingsPopup).SLIDER_SPECS).forEach(function (spec, index) {
    var slider, state, isPressed, tapStarted, before, after;
        slider = (this).sliders[index];
        if ((slider).isNull()) {
            return;
        } /* if 0xc282f */
        state = (this).tapStates[index];
        isPressed = (((((slider).instance).add(SLIDER_IS_PRESSED_OFFSET)).readU8() & 1) !== 0);
        if (isPressed) {
            tapStarted = (!(state).wasPressed);
        } /* if 0xc2868 */
        state.wasPressed = isPressed;
        if (tapStarted) {
            if (((state).lastTapStartTime > 0)) {
                if (((now - (state).lastTapStartTime) < DOUBLE_TAP_WINDOW_MS)) {
                    (this).resetSlider(index);
                    state.lastTapStartTime = 0;
                    anyChanged = true;
                    return;
                } /* if 0xc28b1 */
            } /* if 0xc28b1 */
            state.lastTapStartTime = now;
        } /* if 0xc28bc */
        before = (slider).getValue();
        (slider).update(deltaTime);
        after = (slider).getValue();
        if ((before !== after)) {
            (CameraSettingsPopup).applySliderValue(spec, after);
            anyChanged = true;
            return;
        } /* if 0xc2904 (open) */
});
        if (anyChanged) {
            (this).refreshLabels();
            return;
        } /* if 0xc279e (open) */
};
        static closeButtonPressed (self, button) {
    var <home_object>;
        <home_object> = /*special:4*/;
        if (((CameraSettingsPopup).openInstance === this)) {
            CameraSettingsPopup.openInstance = null;
        } /* if 0xc295e */
        return;
};
        static onDestructed () {
        if (((CameraSettingsPopup).openInstance === this)) {
            CameraSettingsPopup.openInstance = null;
            return;
        } /* if 0xc29a3 (open) */
};
        static syncSlidersFromBattleCamera () {
        ((CameraSettingsPopup).SLIDER_SPECS).forEach(function (spec, index) {
    var slider;
        slider = (this).sliders[index];
        if ((slider).isNull()) {
            return;
        } /* if 0xc2a35 */
        (slider).setValue((CameraSettingsPopup).readSliderValue(spec));
        return;
});
        return;
};
        <class_fields_init> = undefined;
        CameraSettingsPopup;
        class CameraSettingsPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var movieClip, txtField, anchorCenterY, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("popup_generic");
        if (<class_fields_init>) {
        } /* if 0xc203c */
        this.sliders = [];
        this.labels = [];
        this.tapStates = [];
        CameraSettingsPopup.openInstance = this;
        (this).setTitleTid(((Localisation).Localisation).getString("CameraSettingsPopupTitle"));
        movieClip = (this).getMovieClip();
        (movieClip).getMovieClipByName("button_negative").visibility = false;
        (movieClip).getMovieClipByName("button_no").visibility = false;
        (movieClip).getMovieClipByName("button_yes").visibility = false;
        (movieClip).getMovieClipByName("button_ok").visibility = false;
        txtField = (movieClip).getTextFieldByName("txt");
        anchorCenterY = (txtField).y;
        txtField.visibility = false;
        (this).createCloseButton();
        (this).createSliders(anchorCenterY);
        (this).refreshLabels();
        return this;
}
            formatValue (spec, value) {
        if (((spec).key === "zoom")) {
            return (((value / ZOOM_SLIDER_SCALE)).toFixed(2) + "x");
        } /* if 0xc25b2 */
        return (value).toString();
}
            readSliderValue (spec) {
        if (((spec).key === "zoom")) {
            return (Math).round((((BattleCamera).BattleCamera).zoomMultiplier * ZOOM_SLIDER_SCALE));
        } /* if 0xc260d */
        if (((spec).key === "cameraX")) {
            return ((BattleCamera).BattleCamera).cameraXOffset;
        } /* if 0xc2624 */
        if (((spec).key === "cameraY")) {
            return ((BattleCamera).BattleCamera).cameraYOffset;
        } /* if 0xc263b */
        if (((spec).key === "cameraZ")) {
            return ((BattleCamera).BattleCamera).cameraZOffset;
        } /* if 0xc2652 */
        if (((spec).key === "tilt")) {
            return ((BattleCamera).BattleCamera).tiltOffset;
            return;
        } /* if 0xc2669 (open) */
}
            applySliderValue (spec, value) {
        if (((spec).key === "zoom")) {
            (BattleCamera).BattleCamera.zoomMultiplier = (value / ZOOM_SLIDER_SCALE);
        } /* if 0xc26bc */
        /* jump -> 0xc271e */
        if (((BattleCamera).BattleCamera === "cameraX")) {
            (BattleCamera).BattleCamera.cameraXOffset = value;
        } /* if 0xc26d5 */
        /* jump -> 0xc271e */
        if (((BattleCamera).BattleCamera === "cameraY")) {
            (BattleCamera).BattleCamera.cameraYOffset = value;
        } /* if 0xc26ee */
        /* jump -> 0xc271e */
        if (((BattleCamera).BattleCamera === "cameraZ")) {
            (BattleCamera).BattleCamera.cameraZOffset = value;
        } /* if 0xc2707 */
        /* jump -> 0xc271e */
        if (((BattleCamera).BattleCamera === "tilt")) {
            (BattleCamera).BattleCamera.tiltOffset = value;
            return;
        } /* if 0xc271e (open) */
}
            show () {
        return;
}
            resetAll () {
    var instance;
        ((BattleCamera).BattleCamera).reset();
        instance = (CameraSettingsPopup).openInstance;
        if (instance) {
            if ((!((instance).instance).isNull())) {
                (instance).syncSlidersFromBattleCamera();
                return;
            } /* if 0xc2b09 (open) */
        } /* if 0xc2b09 (open) */
}
        }
        CameraSettingsPopup = SLIDER_ROW_HEIGHT = CameraSettingsPopup;
        exports.CameraSettingsPopup = CameraSettingsPopup;
        CameraSettingsPopup.SLIDER_SPECS = [{ key: "zoom", labelKey: "CameraSettingsZoom", minValue: 0, maxValue: 200, defaultValue: 100 }, { key: "cameraZ", labelKey: "CameraSettingsHeight", minValue: -10000, maxValue: 10000, defaultValue: 0 }, { key: "cameraX", labelKey: "CameraSettingsPanX", minValue: -10000, maxValue: 10000, defaultValue: 0 }, { key: "cameraY", labelKey: "CameraSettingsPanY", minValue: -10000, maxValue: 10000, defaultValue: 0 }, { key: "tilt", labelKey: "CameraSettingsTilt", minValue: -10000, maxValue: 10000, defaultValue: 0 }];
        CameraSettingsPopup.openInstance = null;
        return;
};

// --------------------- MODULE 2760 — BadgePreview ---------------------


// ============================================================ //
// webpack module 2760  —  BadgePreview
// exports: BadgePreview
// deps: 4934 (GUI), 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[2760] = function BadgePreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, StringTable, GameButton, ListContainerPopup, BADGE_GROUP_COUNT, BADGES_PER_GROUP, BadgePreviewPopup, <class_fields_init>, BadgePreviewPopup, BadgePreview, <class_fields_init>, BadgePreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BadgePreview = undefined;
        GUI = __webpack_require__(4934);
        StringTable = __webpack_require__(9250);
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        BADGE_GROUP_COUNT = 6;
        BADGES_PER_GROUP = 10;
        static refreshItems () {
    var group, index, badgeClip, badgeButton, naviHeight;
        ((this).container).clearEntries();
        group = 1;
        while ((group <= BADGE_GROUP_COUNT)) {
            index = 1;
            while ((index <= BADGES_PER_GROUP)) {
                badgeClip = ((StringTable).StringTable).getMovieClip_safe("sc/ui.sc", (BadgePreviewPopup).badgeExportName(group, index));
                if (!(!badgeClip)) {
                    badgeButton = new (GameButton).GameButton();
                    (badgeButton).setMovieClip(badgeClip, true);
                    ((this).container).addEntry(badgeButton);
                } /* if 0x99fda */
                index = ((index) + 1);
                (index++);
            } /* while 0x99fe4 */
            group = ((group) + 1);
            (group++);
        } /* while 0x99ff2 */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
};
        <class_fields_init> = undefined;
        BadgePreviewPopup;
        class BadgePreviewPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: "BADGES" });
        if (<class_fields_init>) {
        } /* if 0x99ed7 */
        (this).adjustPopupHeaderButtons("badge_preview");
        (this).refreshItems();
        return this;
}
            badgeExportName (group, index) {
        return ("clan_badge_").concat((BadgePreviewPopup).padTwo(group), "_", (BadgePreviewPopup).padTwo(index));
}
            padTwo (n) {
        return ((n).toString()).padStart(2, "0");
}
        }
        BadgePreviewPopup = BadgePreviewPopup = BadgePreviewPopup;
        <class_fields_init> = undefined;
        BadgePreview;
        class BadgePreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9a10f (open) */
}
            show () {
        return;
}
        }
        BadgePreview = BadgePreviewPopup = BadgePreview;
        exports.BadgePreview = BadgePreview;
        return;
};

// --------------------- MODULE 4401 — TeamPopup ---------------------


// ============================================================ //
// webpack module 4401  —  TeamPopup
// exports: TeamPopup
// deps: 3217 (Sprite), 3644 (TeamManager), 5392 (DisableBotsButton), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4401] = function TeamPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Sprite, DisableBotsButton, TeamManager, TeamPopup_ctor, dropGUIContainerMovieClipOffset, ownTeamEntryOffset, disabledSlotsListOffset, logicArrayListCountOffset, TeamPopup, <class_fields_init>, TeamPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamPopup = undefined;
        Libg = __webpack_require__(9878);
        Sprite = __webpack_require__(3217);
        DisableBotsButton = __webpack_require__(5392);
        TeamManager = __webpack_require__(3644);
        TeamPopup_ctor = ((Libg).Libg).offset(10885736, 0);
        dropGUIContainerMovieClipOffset = 144;
        ownTeamEntryOffset = 296;
        disabledSlotsListOffset = 80;
        logicArrayListCountOffset = 12;
        <class_fields_init> = undefined;
        TeamPopup;
        class TeamPopup {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x56ffa (open) */
}
            isFriendly () {
        return ((TeamManager).TeamManager).isFriendly();
}
            getDisabledSlotIndices () {
    var result, ownTeamEntry, arrayListPointer, dataPointer, elementCount, i, e;
        result = new Set();
        if (((this).instance).isNull()) {
            return result;
            /* CATCH -> 0x56e9b (try region) */
        } /* if 0x56dcd */
        ownTeamEntry = (((this).instance).add(ownTeamEntryOffset)).readPointer();
        if ((ownTeamEntry).isNull()) {
            return result;
        } /* if 0x56e0b */
        arrayListPointer = ((ownTeamEntry).add(disabledSlotsListOffset)).readPointer();
        if ((arrayListPointer).isNull()) {
            return result;
        } /* if 0x56e34 */
        dataPointer = (arrayListPointer).readPointer();
        elementCount = ((arrayListPointer).add(logicArrayListCountOffset)).readS32();
        i = 0;
        while ((i < elementCount)) {
            (result).add(((dataPointer).add((i * 4))).readS32());
            i = ((i) + 1);
            (i++);
            i = ownTeamEntry = arrayListPointer = dataPointer = elementCount = result = <underflow>;
        } /* while 0x56e95 */
        /* jump -> 0x56ea3 */
        e = <underflow>;
        /* CATCH -> 0x56ea5 (try region) */
        /* jump -> 0x56ea3 */
        throw <underflow>;
        return result;
}
            patch () {
        return;
}
        }
        TeamPopup = logicArrayListCountOffset = TeamPopup;
        exports.TeamPopup = TeamPopup;
        TeamPopup.instance = NULL;
        return;
};

// --------------------- MODULE 7311 — PassRewardPreview ---------------------


// ============================================================ //
// webpack module 7311  —  PassRewardPreview
// exports: PassRewardPreview
// deps: 3196 (BrawlPassAutoCollectRewardsPopup), 4934 (GUI), 5417 (LogicArrayList), 6465 (DeliveryUnit), 6574 (LogicGatchaDrop)
// ============================================================ //

__webpack_modules__[7311] = function PassRewardPreview_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GUI, DeliveryUnit, LogicArrayList, LogicGatchaDrop, BrawlPassAutoCollectRewardsPopup, DELIVERY_UNIT_TYPE, PassRewardPreview, <class_fields_init>, PassRewardPreview;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PassRewardPreview = undefined;
        GUI = __webpack_require__(4934);
        DeliveryUnit = __webpack_require__(6465);
        LogicArrayList = __webpack_require__(5417);
        LogicGatchaDrop = __webpack_require__(6574);
        BrawlPassAutoCollectRewardsPopup = __webpack_require__(3196);
        DELIVERY_UNIT_TYPE = 100;
        <class_fields_init> = undefined;
        PassRewardPreview;
        class PassRewardPreview {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa386f (open) */
}
            showBrawlPass () {
    var popup;
        popup = new (BrawlPassAutoCollectRewardsPopup).BrawlPassAutoCollectRewardsPopup(0, 0, 0);
        (popup).setData((PassRewardPreview).buildDeliveryList());
        return;
}
            buildDeliveryList () {
    var unit, list;
        unit = new (DeliveryUnit).DeliveryUnit(DELIVERY_UNIT_TYPE);
        (unit).addDrop(new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).GOLD, 1000));
        list = new (LogicArrayList).LogicArrayList(1);
        (list).addElement((unit).instance);
        return list;
}
        }
        PassRewardPreview = PassRewardPreview = PassRewardPreview;
        exports.PassRewardPreview = PassRewardPreview;
        return;
};

// --------------------- MODULE 3615 — MoviePlayerPopup ---------------------


// ============================================================ //
// webpack module 3615  —  MoviePlayerPopup
// exports: MoviePlayerPopup
// deps: 1978 (Libc), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3615] = function MoviePlayerPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUI, MoviePlayerPopup_ctor, MoviePlayerPopup_show, MoviePlayerPopup, <class_fields_init>, MoviePlayerPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MoviePlayerPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUI = __webpack_require__(4934);
        MoviePlayerPopup_ctor = new NativeFunction(((Libg).Libg).offset(13196904, 0), "void", ["pointer", "int"]);
        MoviePlayerPopup_show = new NativeFunction(((Libg).Libg).offset(13196788, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        MoviePlayerPopup;
        class MoviePlayerPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var popupInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        popupInstance = ((Libc).Libc).calloc((MoviePlayerPopup).allocationSize, 1);
        MoviePlayerPopup_ctor(popupInstance, 0);
        this = super(popupInstance);
        if (<class_fields_init>) {
        } /* if 0x43cdf */
        return this;
}
            patch () {
        return;
}
            show () {
    var popup;
        popup = new MoviePlayerPopup();
        return;
}
        }
        MoviePlayerPopup = MoviePlayerPopup = MoviePlayerPopup;
        exports.MoviePlayerPopup = MoviePlayerPopup;
        MoviePlayerPopup.allocationSize = 424;
        return;
};

