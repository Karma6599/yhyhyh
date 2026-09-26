//============================================================================//// GATCHA & REWARDS// merged webpack modules: 9300 GatchaItem, 1891 LogicOwnGatchaReward, 993 LogicClaimableRandomReward, 1981 LogicStarrDropRewards, 5434 LogicGemOffer, 567 GiveByGlobalId//============================================================================//
// --------------------- MODULE 9300 — GatchaItem ---------------------


// ============================================================ //
// webpack module 9300  —  GatchaItem
// exports: GatchaItem
// deps: 5039 (GameButton), 7265 (Localisation), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[9300] = function GatchaItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, Localisation, GatchaItem, <class_fields_init>, GatchaItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GatchaItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        Localisation = __webpack_require__(7265);
        <class_fields_init> = undefined;
        GatchaItem;
        class GatchaItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (buttonConf) {
    var buttonMovieClip, textField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb31d8 */
        this.name = "";
        this.disabled = false;
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        buttonMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((buttonMovieClip).instance, 1);
        textField = (buttonMovieClip).getTextFieldByName("Text");
        textField.colorTag = true;
        (textField).setTextScaleIfNecessary(((Localisation).Localisation).getString((buttonConf).name));
        (buttonMovieClip).gotoAndStopFrameIndex(1);
        if ((((buttonConf).name) == null)) {
            this.name = "";
        } /* if 0xb328d */
        if ((((buttonConf).disabled) == null)) {
            this.disabled = false;
        } /* if 0xb32a1 */
        if ((buttonConf).callback) {
            this.callback = (buttonConf).callback;
        } /* if 0xb32bc */
        return this;
}
        }
        GatchaItem = v8 = GatchaItem;
        exports.GatchaItem = GatchaItem;
        return;
};

// --------------------- MODULE 1891 — LogicOwnGatchaReward ---------------------


// ============================================================ //
// webpack module 1891  —  LogicOwnGatchaReward
// exports: EEmoteRarities, ESkinRarities, LogicOwnGatchaRandomReward
// deps: 884 (LogicRandom), 6139 (LogicDataTables), 6574 (LogicGatchaDrop)
// ============================================================ //

__webpack_modules__[1891] = function LogicOwnGatchaReward_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicGatchaDrop, LogicDataTables, LogicRandom, EEmoteRarities, ESkinRarities, LogicOwnGatchaRandomReward, <class_fields_init>, LogicOwnGatchaRandomReward;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EEmoteRarities = undefined;
        undefined.ESkinRarities = exports;
        exports.LogicOwnGatchaRandomReward = undefined;
        LogicGatchaDrop = __webpack_require__(6574);
        LogicDataTables = __webpack_require__(6139);
        LogicRandom = __webpack_require__(884);
        if (!EEmoteRarities) {
            exports.EEmoteRarities = EEmoteRarities = {};
        } /* if 0x6fe27 */
        EEmoteRarities = {}(exports);
        if (!ESkinRarities) {
            exports.ESkinRarities = v8 = {};
        } /* if 0x6fe3b */
        v8 = {}(exports);
        static getGatchaDrop () {
    var dataId, brawlers, character, emotes, emote, sprays, spray;
        dataId = -1;
        if ((brawlers = character = (this).type === ((LogicGatchaDrop).EGatchaDropTypes).CHARACTER)) {
            brawlers = (LogicOwnGatchaRandomReward).getCharacters();
            character = brawlers[((LogicRandom).LogicRandom).getRandomInRangeExcept(0, (brawlers.length - 1))];
            dataId = (character).getInstanceID();
        } /* if 0x70128 */
        /* jump -> 0x70232 */
        if ((brawlers = character = (this).type === ((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM)) {
            if ((sprays = spray = (this).tableId === (((LogicDataTables).LogicDataTables).table).Emotes)) {
                if ((emotes = emote = (this).rarity === (EEmoteRarities).COMMON)) {
                    emotes = (LogicOwnGatchaRandomReward).getEmotesByRarity((this).rarity);
                    emote = emotes[((LogicRandom).LogicRandom).getRandomInRangeExcept(0, (emotes.length - 1))];
                    dataId = (emote).getInstanceID();
                    emotes = emote = (this).rarity;
                } /* if 0x701b8 */
            } /* if 0x701bb */
            /* jump -> 0x70230 */
            if ((sprays = spray = (this).tableId === (((LogicDataTables).LogicDataTables).table).Sprays)) {
                sprays = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Sprays);
                spray = (sprays).getItemAt(((LogicRandom).LogicRandom).getRandomInRangeExcept(0, ((sprays).getItemCount() - 1)));
                dataId = (spray).getInstanceID();
                sprays = spray = (this).tableId;
            } /* if 0x70230 */
            brawlers = character = (this).type;
        } /* if 0x70234 */
        if ((dataId !== -1)) {
            return new (LogicGatchaDrop).LogicGatchaDrop((this).type, (this).count, dataId, (this).tableId);
        } /* if 0x7025e */
        return new (LogicGatchaDrop).LogicGatchaDrop((this).type, (this).count);
};
        <class_fields_init> = undefined;
        LogicOwnGatchaRandomReward;
        class LogicOwnGatchaRandomReward {
            constructor (weight, count, type) {
    var tableId, rarity, weight, count, type, tableId, rarity;
        tableId = this;
        if (<class_fields_init>) {
        } /* if 0x6ffed */
        tableId = weight;
        rarity = count;
        weight = type;
        if (((tableId) === undefined)) {
            count = tableId = -1;
        } /* if 0x7000b */
        if (((rarity) === undefined)) {
            type = rarity = 1;
        } /* if 0x70018 */
        tableId.count = 0;
        tableId.type = 0;
        tableId.tableId = -1;
        tableId.rarity = 1;
        tableId.weight = 0;
        tableId.count = count;
        tableId.type = type;
        tableId.tableId = tableId;
        tableId.rarity = rarity;
        tableId.weight = weight;
        return;
}
            getCharacters () {
    var table, brawlers, i, character;
        table = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        brawlers = [];
        i = 0;
        while ((i < (table).getItemCount())) {
            character = (table).getItemAt(i);
            if (!(!(character).isHero())) {
                (!(character).isHero());
                if (!(character).isDisabled()) {
                    (brawlers).push(character);
                } /* if 0x7033e */
            } /* if 0x7032d */
            i = ((i) + 1);
            (i++);
        } /* while 0x70348 */
        return brawlers;
}
            getEmotesByRarity (rarity) {
    var table, rarityEmotes, i, emote;
        table = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Emotes);
        rarityEmotes = [];
        i = 0;
        while ((i < (table).getItemCount())) {
            emote = (table).getItemAt(i);
            if (!((emote).getRarity() !== EEmoteRarities[rarity])) {
                (rarityEmotes).push(emote);
            } /* if 0x703fd */
            i = ((i) + 1);
            (i++);
        } /* while 0x70407 */
        return rarityEmotes;
}
            getSkinsByRarity (rarity) {
    var table, raritySkins, i, skin;
        table = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Skins);
        raritySkins = [];
        i = 0;
        while ((i < (table).getItemCount())) {
            skin = (table).getItemAt(i);
            if (!((skin).getRarity() !== EEmoteRarities[rarity])) {
                (raritySkins).push(skin);
            } /* if 0x704bc */
            i = ((i) + 1);
            (i++);
        } /* while 0x704c6 */
        return raritySkins;
}
        }
        LogicOwnGatchaRandomReward = v8 = LogicOwnGatchaRandomReward;
        exports.LogicOwnGatchaRandomReward = LogicOwnGatchaRandomReward;
        return;
};

// --------------------- MODULE 993 — LogicClaimableRandomReward ---------------------


// ============================================================ //
// webpack module 993  —  LogicClaimableRandomReward
// exports: LogicClaimableRandomReward
// deps: 1588 (LogicMemory), 1978 (Libc), 3311 (LogicRandomRewardContainerData), 5417 (LogicArrayList), 9878 (Libg)
// ============================================================ //

__webpack_modules__[993] = function LogicClaimableRandomReward_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Libg, LogicRandomRewardContainerData, LogicMemory, LogicArrayList, randomRewardsArrayOffset, arrayOffset, rewardFromOffset, openingStageIdOffset, LogicClaimableRandomReward_ctor, LogicClaimableRandomReward, <class_fields_init>, LogicClaimableRandomReward;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicClaimableRandomReward = undefined;
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        LogicRandomRewardContainerData = __webpack_require__(3311);
        LogicMemory = __webpack_require__(1588);
        LogicArrayList = __webpack_require__(5417);
        randomRewardsArrayOffset = ((LogicMemory).LogicMemory).offset(8);
        arrayOffset = ((LogicMemory).LogicMemory).offset(24);
        rewardFromOffset = ((LogicMemory).LogicMemory).offset(40);
        openingStageIdOffset = ((LogicMemory).LogicMemory).offset(44);
        LogicClaimableRandomReward_ctor = new NativeFunction(((Libg).Libg).offset(13952976, 0), "void", ["pointer"]);
        static setRandomRewardContainerData (data) {
        return;
};
        static getRandomRewardContainerData () {
        return new (LogicRandomRewardContainerData).LogicRandomRewardContainerData(((this).instance).readPointer());
};
        static addRandomReward (data) {
        ((this).randomRewardsArray).addElement(ptr((data).getGlobalID()));
        (((this).instance).add(randomRewardsArrayOffset)).writePointer(((this).randomRewardsArray).getArray());
        (((this).instance).add((randomRewardsArrayOffset + 8))).writeInt(((this).randomRewardsArray).getCapacity());
        return;
};
        static addGemOffer (gemOffer) {
        ((this).array).addElement((gemOffer).instance);
        (((this).instance).add(arrayOffset)).writePointer(((this).array).getArray());
        (((this).instance).add((arrayOffset + 8))).writeInt(((this).array).getCapacity());
        return;
};
        <class_fields_init> = undefined;
        LogicClaimableRandomReward;
        class LogicClaimableRandomReward {
            constructor (source, openAt) {
        if (<class_fields_init>) {
        } /* if 0x6ea6a */
        if ((source instanceof NativePointer)) {
            this.instance = source;
            return;
        } /* if 0x6ea7c */
        this.instance = ((Libc).Libc).malloc((LogicClaimableRandomReward).allocationSize);
        LogicClaimableRandomReward_ctor((this).instance);
        this.array = new (LogicArrayList).LogicArrayList();
        (((this).instance).add(arrayOffset)).writePointer(((this).array).getArray());
        (((this).instance).add((arrayOffset + 8))).writeInt(((this).array).getCapacity());
        (((this).instance).add((arrayOffset + 12))).writeInt(((this).array).getItemsCount());
        this.randomRewardsArray = new (LogicArrayList).LogicArrayList();
        (((this).instance).add(randomRewardsArrayOffset)).writePointer(((this).randomRewardsArray).getArray());
        (((this).instance).add((randomRewardsArrayOffset + 8))).writeInt(((this).randomRewardsArray).getCapacity());
        (((this).instance).add((randomRewardsArrayOffset + 12))).writeInt(((this).randomRewardsArray).getItemsCount());
        if ((source !== undefined)) {
            (((this).instance).add(rewardFromOffset)).writeInt(source);
        } /* if 0x6ebe9 */
        if ((openAt !== undefined)) {
            (((this).instance).add(openingStageIdOffset)).writeInt(openAt);
            return;
        } /* if 0x6ec0d (open) */
}
        }
        LogicClaimableRandomReward = openingStageIdOffset = LogicClaimableRandomReward;
        exports.LogicClaimableRandomReward = LogicClaimableRandomReward;
        LogicClaimableRandomReward.allocationSize = 48;
        return;
};

// --------------------- MODULE 1981 — LogicStarrDropRewards ---------------------


// ============================================================ //
// webpack module 1981  —  LogicStarrDropRewards
// exports: EStarrDropRarities, LogicStarrDropRewards
// deps: 1891 (LogicOwnGatchaReward), 6139 (LogicDataTables), 6574 (LogicGatchaDrop)
// ============================================================ //

__webpack_modules__[1981] = function LogicStarrDropRewards_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicGatchaDrop, LogicOwnGatchaReward, LogicDataTables, EStarrDropRarities, LogicStarrDropRewards, <class_fields_init>, LogicStarrDropRewards;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EStarrDropRarities = undefined;
        undefined.LogicStarrDropRewards = exports;
        LogicGatchaDrop = __webpack_require__(6574);
        LogicOwnGatchaReward = __webpack_require__(1891);
        LogicDataTables = __webpack_require__(6139);
        if (!EStarrDropRarities) {
            exports.EStarrDropRarities = EStarrDropRarities = {};
        } /* if 0x7056e */
        EStarrDropRarities = {}(exports);
        <class_fields_init> = undefined;
        LogicStarrDropRewards;
        class LogicStarrDropRewards {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x70981 (open) */
}
            getRandomDropByWeights (rarity) {
    var drops, total, rand, acc, r;
        drops = (LogicStarrDropRewards).table[rarity];
        total = (drops).reduce(function (sum, r) {
        return (sum + (r).weight);
}, 0);
        rand = ((Math).random() * total);
        acc = 0;
        /* jump -> 0x70919 */
        r = /*iter*/ drops;
        acc = (acc + (r).weight);
        if ((rand < acc)) {
            return undefined;
        } /* if 0x70919 */
        } while (!drops);
        r = drops = total = rand = acc = <underflow>;
        return (drops[0]).getGatchaDrop();
}
        }
        LogicStarrDropRewards = v8 = LogicStarrDropRewards;
        exports.LogicStarrDropRewards = LogicStarrDropRewards;
        LogicStarrDropRewards.table = { RARE: [new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(41.9, 50, ((LogicGatchaDrop).EGatchaDropTypes).GOLD), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(32.6, 25, ((LogicGatchaDrop).EGatchaDropTypes).POWER_POINTS), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(20.9, 100, ((LogicGatchaDrop).EGatchaDropTypes).TOKEN_DOUBLER), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(2.3, 20, ((LogicGatchaDrop).EGatchaDropTypes).BLING), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(2.3, 10, ((LogicGatchaDrop).EGatchaDropTypes).RECRUIT_TOKENS)], SUPER_RARE: [new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(42.38, 100, ((LogicGatchaDrop).EGatchaDropTypes).GOLD)], EPIC: [new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(21.05, 200, ((LogicGatchaDrop).EGatchaDropTypes).GOLD), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(21.05, 100, ((LogicGatchaDrop).EGatchaDropTypes).POWER_POINTS), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(15.79, 1, ((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, (((LogicDataTables).LogicDataTables).table).Emotes, ((LogicOwnGatchaReward).EEmoteRarities).COMMON), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(15.79, 1, ((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, (((LogicDataTables).LogicDataTables).table).Sprays), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(10.53, 500, ((LogicGatchaDrop).EGatchaDropTypes).TOKEN_DOUBLER), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(5.26, 150, ((LogicGatchaDrop).EGatchaDropTypes).RECRUIT_TOKENS), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(5.26, 1, ((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, (((LogicDataTables).LogicDataTables).table).Emotes, ((LogicOwnGatchaReward).EEmoteRarities).RARE), new (LogicOwnGatchaReward).LogicOwnGatchaRandomReward(5.26, 1, ((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, (((LogicDataTables).LogicDataTables).table).Skins, ((LogicOwnGatchaReward).ESkinRarities).RARE)], MYTHIC: [], LEGENDARY: [] };
        return;
};

// --------------------- MODULE 5434 — LogicGemOffer ---------------------


// ============================================================ //
// webpack module 5434  —  LogicGemOffer
// exports: LogicGemOffer
// deps: 1588 (LogicMemory), 1978 (Libc), 6139 (LogicDataTables), 6794 (LogicData)
// ============================================================ //

__webpack_modules__[5434] = function LogicGemOffer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, LogicMemory, LogicData, LogicDataTables, countOffset, dataOffset, extraDataOffset, LogicGemOffer, <class_fields_init>, LogicGemOffer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicGemOffer = undefined;
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        LogicDataTables = __webpack_require__(6139);
        countOffset = ((LogicMemory).LogicMemory).offset(4);
        dataOffset = ((LogicMemory).LogicMemory).offset(8);
        extraDataOffset = ((LogicMemory).LogicMemory).offset(16);
        static setType (type) {
        return;
};
        static setCount (count) {
        return;
};
        static setData (data) {
        if ((((data).instance) == null)) {
        } /* if 0x70cb4 */
        return;
};
        static setExtraData (extraData) {
        return;
};
        static getType () {
        return ((this).instance).readInt();
};
        static getCount () {
        return (((this).instance).add(countOffset)).readInt();
};
        static getData () {
        return (((this).instance).add(dataOffset)).readPointer();
};
        static getExtraData () {
        return (((this).instance).add(extraDataOffset)).readInt();
};
        static getSkin () {
    var extraData;
        extraData = (this).getExtraData();
        if ((extraData === 0)) {
            return null;
        } /* if 0x70df2 */
        return ((LogicDataTables).LogicDataTables).getDataById(29, extraData);
};
        static toString () {
    var data;
        if (((this).getData()).isNull()) {
        } /* if 0x70e48 */
        /* jump -> 0x70e65 */
        data = (new (LogicData).LogicData((this).getData())).getGlobalID();
        return ("LogicGemOffer{type=").concat((this).getType(), ",count=", (this).getCount(), ",data=", data, ",extraData=", (this).getExtraData(), "}");
};
        <class_fields_init> = undefined;
        LogicGemOffer;
        class LogicGemOffer {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x70bb4 */
        if (instance) {
            this.instance = instance;
            return;
        } /* if 0x70bc0 */
        this.instance = ((Libc).Libc).malloc((LogicGemOffer).allocationSize);
        (this).setType(0);
        (this).setCount(0);
        return;
}
        }
        LogicGemOffer = <class_fields_init> = LogicGemOffer;
        exports.LogicGemOffer = LogicGemOffer;
        LogicGemOffer.allocationSize = 24;
        return;
};

// --------------------- MODULE 567 — GiveByGlobalId ---------------------


// ============================================================ //
// webpack module 567  —  GiveByGlobalId
// exports: GiveByGlobalId
// deps: 1018 (HomeMode), 3380 (Logcat), 3401 (GameStateManager), 4934 (GUI), 5417 (LogicArrayList), 6139 (LogicDataTables), 6385 (LogicClientHome), 6465 (DeliveryUnit), 6574 (LogicGatchaDrop), 7089 (LogicDailyData), 7135 (RewardOpeningPopup), 8341 (GlobalID), 8569 (HomeScreen)
// ============================================================ //

__webpack_modules__[567] = function GiveByGlobalId_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Logcat, GUI, GameStateManager, LogicClientHome, LogicDataTables, LogicDailyData, GlobalID, LogicGatchaDrop, DeliveryUnit, LogicArrayList, RewardOpeningPopup, HomeScreen, HomeMode, CARD_META_UNLOCK, UNLOCK_REASON_DEBUG, DELIVERY_UNIT_TYPE, GiveByGlobalId, <class_fields_init>, GiveByGlobalId;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GiveByGlobalId = undefined;
        Logcat = __webpack_require__(3380);
        GUI = __webpack_require__(4934);
        GameStateManager = __webpack_require__(3401);
        LogicClientHome = __webpack_require__(6385);
        LogicDataTables = __webpack_require__(6139);
        LogicDailyData = __webpack_require__(7089);
        GlobalID = __webpack_require__(8341);
        LogicGatchaDrop = __webpack_require__(6574);
        DeliveryUnit = __webpack_require__(6465);
        LogicArrayList = __webpack_require__(5417);
        RewardOpeningPopup = __webpack_require__(7135);
        HomeScreen = __webpack_require__(8569);
        HomeMode = __webpack_require__(1018);
        CARD_META_UNLOCK = 0;
        UNLOCK_REASON_DEBUG = 3;
        DELIVERY_UNIT_TYPE = 100;
        <class_fields_init> = undefined;
        GiveByGlobalId;
        class GiveByGlobalId {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa118b (open) */
}
            rememberContainerId (containerId) {
        GiveByGlobalId.pendingContainerId = containerId;
        return;
}
            giveInstant (globalId) {
    var data, tableId, skin, character, avatar;
        data = ((LogicDataTables).LogicDataTables).getDataById(globalId);
        if (!(!data)) {
            if (((data).instance).isNull()) {
                return;
            } /* if 0xa08d5 */
        } /* if 0xa08b4 */
        tableId = ((GlobalID).GlobalID).getClassID(globalId);
        if ((tableId === (((LogicDataTables).LogicDataTables).table).Characters)) {
            return;
        } /* if 0xa0926 */
        if ((((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Character, data) === (((LogicDataTables).LogicDataTables).table).Skins)) {
            skin = data;
            character = (skin).getCharacter();
            if ((!character)) {
                return;
            } /* if 0xa097c */
            return;
        } /* if 0xa09a5 */
        if ((((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Skin, character, skin) === (((LogicDataTables).LogicDataTables).table).Cards)) {
            avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
            if ((!((avatar).instance).isNull())) {
                (avatar).setItem(data);
            } /* if 0xa09f2 */
            return;
        } /* if 0xa0a11 */
        ((GUI).GUI).showFloaterTextAtDefaultPosition(("Unsupported data type ").concat(tableId, " for ", globalId));
        ((Logcat).Logcat).logDebug(("GIVE_BY_GLOBAL_ID unsupported tableId=").concat(tableId, " for instant give"));
        return;
}
            giveFromPendingContainer (globalId) {
    var containerId, container, data, tableId, instanceId, drop;
        containerId = (GiveByGlobalId).pendingContainerId;
        container = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).RandomRewardContainers, containerId);
        if (!(!container)) {
            if (((container).instance).isNull()) {
                return;
            } /* if 0xa0b3d */
        } /* if 0xa0b1a */
        data = ((LogicDataTables).LogicDataTables).getDataById(globalId);
        if (!(!data)) {
            if (((data).instance).isNull()) {
                return;
            } /* if 0xa0b88 */
        } /* if 0xa0b67 */
        tableId = ((GlobalID).GlobalID).getClassID(globalId);
        instanceId = ((GlobalID).GlobalID).getInstanceID(globalId);
        drop = (GiveByGlobalId).unlockAndBuildDrop(tableId, instanceId, data);
        if ((!drop)) {
            return;
        } /* if 0xa0bf0 */
        if ((!(GiveByGlobalId).canRenderContainerVisual(container))) {
            (GiveByGlobalId).giveWithoutContainer(tableId, instanceId, data);
            return;
        } /* if 0xa0c49 */
        return;
}
            canRenderContainerVisual (container) {
        if (!((container).visualType === 0)) {
            if (!((container).visualType === 1)) {
                if (!((container).visualType === 2)) {
                    if (((container).visualType === 4)) {
                        return true;
                    } /* if 0xa0ca3 */
                } /* if 0xa0ca1 */
            } /* if 0xa0ca1 */
        } /* if 0xa0ca1 */
        return false;
}
            giveWithoutContainer (tableId, instanceId, data) {
    var skin, character;
        if ((tableId === (((LogicDataTables).LogicDataTables).table).Characters)) {
            return;
        } /* if 0xa0d22 */
        if ((((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Character, data) === (((LogicDataTables).LogicDataTables).table).Skins)) {
            skin = data;
            character = (skin).getCharacter();
            if (character) {
                ((HomeScreen).HomeScreen).doOfflineGatcha((((HomeMode).HomeMode).gatchaType).Skin, character, skin);
                return;
            } /* if 0xa0d7a */
        } /* if 0xa0d7b */
        ((Logcat).Logcat).logDebug(("GIVE_FROM_CONTAINER tableId=").concat(tableId, " id=", instanceId, " reward credited, no animation"));
        return;
}
            applyUnlock (tableId, data) {
    var avatar, playerData, unlockCard;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        playerData = ((LogicClientHome).LogicClientHome).getPlayerData();
        if ((unlockCard = tableId === (((LogicDataTables).LogicDataTables).table).Characters)) {
            if (((avatar).instance).isNull()) {
                return true;
            } /* if 0xa0e52 */
            unlockCard = ((LogicDataTables).LogicDataTables).getCardForMetaType(data, CARD_META_UNLOCK);
            if (unlockCard) {
                (avatar).unlockHero((unlockCard).instance, UNLOCK_REASON_DEBUG);
            } /* if 0xa0e83 */
            return true;
        } /* if 0xa0e85 */
        if ((unlockCard = tableId === (((LogicDataTables).LogicDataTables).table).Cards)) {
            if ((!((avatar).instance).isNull())) {
                (avatar).setItem(data);
            } /* if 0xa0ebb */
            return true;
        } /* if 0xa0ebd */
        if ((unlockCard = tableId === (((LogicDataTables).LogicDataTables).table).Skins)) {
            if (playerData) {
                ((LogicDailyData).LogicDailyData).addUnlockedSkin(playerData, data);
            } /* if 0xa0eed */
            return true;
        } /* if 0xa0eef */
        if (!(unlockCard = tableId === (((LogicDataTables).LogicDataTables).table).Emotes)) {
            if ((unlockCard = tableId === (((LogicDataTables).LogicDataTables).table).Sprays)) {
                ((Logcat).Logcat).logDebug(("GIVE_BY_GLOBAL_ID vanity tableId=").concat(tableId, " given as animation-only (no persistence)"));
                return true;
            } /* if 0xa0f41 */
        } /* if 0xa0f1b */
        ((Logcat).Logcat).logDebug(("GIVE_BY_GLOBAL_ID unsupported tableId=").concat(tableId));
        return false;
}
            unlockAndBuildDrop (tableId, instanceId, data) {
        if ((!(GiveByGlobalId).applyUnlock(tableId, data))) {
            return null;
        } /* if 0xa0fbc */
        if ((tableId === (((LogicDataTables).LogicDataTables).table).Characters)) {
            return new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).CHARACTER, 1, instanceId);
        } /* if 0xa0fef */
        if ((tableId === (((LogicDataTables).LogicDataTables).table).Cards)) {
            return new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).SKILL, 1, instanceId);
        } /* if 0xa1021 */
        if ((tableId === (((LogicDataTables).LogicDataTables).table).Skins)) {
            return new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).SKIN, 1, instanceId);
        } /* if 0xa1053 */
        if (!(tableId === (((LogicDataTables).LogicDataTables).table).Emotes)) {
            if ((tableId === (((LogicDataTables).LogicDataTables).table).Sprays)) {
                return new (LogicGatchaDrop).LogicGatchaDrop(((LogicGatchaDrop).EGatchaDropTypes).VANITY_ITEM, 1, instanceId, tableId);
            } /* if 0xa109c */
        } /* if 0xa107f */
        return null;
}
            showGachaAnimation (drop, containerId) {
    var deliveryUnit, deliveryArray, rewardPopup;
        deliveryUnit = new (DeliveryUnit).DeliveryUnit(DELIVERY_UNIT_TYPE);
        (deliveryUnit).addDrop(drop);
        deliveryArray = (new (LogicArrayList).LogicArrayList(1)).addElement((deliveryUnit).instance);
        rewardPopup = new (RewardOpeningPopup).RewardOpeningPopup(containerId, deliveryArray, 0, 0);
        return;
}
        }
        GiveByGlobalId = DeliveryUnit = GiveByGlobalId;
        exports.GiveByGlobalId = GiveByGlobalId;
        GiveByGlobalId.pendingContainerId = 0;
        return;
};

