class GatchaItem extends GameButton {
    name = "";
    disabled = false;
    constructor(buttonConf) {
        super();
        this.instance.writePointer(ListContainerPopup.countryPopupListItemVtableAddr);
        var buttonMovieClip = StringTable.getMovieClip("sc/ui.sc", "country_item");
        this.setMovieClip(buttonMovieClip.instance, 1);
        var textField = buttonMovieClip.getTextFieldByName("Text");
        textField.colorTag = true;
        textField.setTextScaleIfNecessary(Localisation.getString(buttonConf.name));
        buttonMovieClip.gotoAndStopFrameIndex(1);
        this.name = buttonConf.name == null ? "" : buttonConf.name;
        this.disabled = buttonConf.disabled == null ? false : buttonConf.disabled;
        if (buttonConf.callback) {
            this.callback = buttonConf.callback;
        }
    }
}

var EEmoteRarities = {};
var ESkinRarities = {};

class LogicOwnGatchaRandomReward {
    count = 0;
    type = 0;
    tableId = -1;
    rarity = 1;
    weight = 0;
    constructor(weight, count, type, tableId, rarity) {
        if (tableId === undefined) {
            tableId = -1;
        }
        if (rarity === undefined) {
            rarity = 1;
        }
        this.count = count;
        this.type = type;
        this.tableId = tableId;
        this.rarity = rarity;
        this.weight = weight;
    }
    getGatchaDrop() {
        var dataId = -1;
        if (this.type === EGatchaDropTypes.CHARACTER) {
            var brawlers = LogicOwnGatchaRandomReward.getCharacters();
            var character = brawlers[LogicRandom.getRandomInRangeExcept(0, brawlers.length - 1)];
            dataId = character.getInstanceID();
        }
        if (this.type === EGatchaDropTypes.VANITY_ITEM) {
            if (this.tableId === LogicDataTables.table.Emotes) {
                if (this.rarity === EEmoteRarities.COMMON) {
                    var emotes = LogicOwnGatchaRandomReward.getEmotesByRarity(this.rarity);
                    var emote = emotes[LogicRandom.getRandomInRangeExcept(0, emotes.length - 1)];
                    dataId = emote.getInstanceID();
                }
            }
            if (this.tableId === LogicDataTables.table.Sprays) {
                var sprays = LogicDataTables.getTable(LogicDataTables.table.Sprays);
                var spray = sprays.getItemAt(LogicRandom.getRandomInRangeExcept(0, sprays.getItemCount() - 1));
                dataId = spray.getInstanceID();
            }
        }
        if (dataId !== -1) {
            return new LogicGatchaDrop(this.type, this.count, dataId, this.tableId);
        }
        return new LogicGatchaDrop(this.type, this.count);
    }
    static getCharacters() {
        var table = LogicDataTables.getTable(LogicDataTables.table.Characters);
        var brawlers = [];
        var i = 0;
        while (i < table.getItemCount()) {
            var character = table.getItemAt(i);
            if (character.isHero() && !character.isDisabled()) {
                brawlers.push(character);
            }
            i++;
        }
        return brawlers;
    }
    static getEmotesByRarity(rarity) {
        var table = LogicDataTables.getTable(LogicDataTables.table.Emotes);
        var rarityEmotes = [];
        var i = 0;
        while (i < table.getItemCount()) {
            var emote = table.getItemAt(i);
            if (!(emote.getRarity() !== EEmoteRarities[rarity])) {
                rarityEmotes.push(emote);
            }
            i++;
        }
        return rarityEmotes;
    }
    static getSkinsByRarity(rarity) {
        var table = LogicDataTables.getTable(LogicDataTables.table.Skins);
        var raritySkins = [];
        var i = 0;
        while (i < table.getItemCount()) {
            var skin = table.getItemAt(i);
            if (!(skin.getRarity() !== EEmoteRarities[rarity])) {
                raritySkins.push(skin);
            }
            i++;
        }
        return raritySkins;
    }
}

var randomRewardsArrayOffset = LogicMemory.offset(8);
var arrayOffset = LogicMemory.offset(24);
var rewardFromOffset = LogicMemory.offset(40);
var openingStageIdOffset = LogicMemory.offset(44);
var LogicClaimableRandomReward_ctor = new NativeFunction(Libg.offset(13952976, 0), "void", ["pointer"]);

class LogicClaimableRandomReward {
    constructor(source, openAt) {
        if (source instanceof NativePointer) {
            this.instance = source;
            return;
        }
        this.instance = Libc.malloc(LogicClaimableRandomReward.allocationSize);
        LogicClaimableRandomReward_ctor(this.instance);
        this.array = new LogicArrayList();
        this.instance.add(arrayOffset).writePointer(this.array.getArray());
        this.instance.add(arrayOffset + 8).writeInt(this.array.getCapacity());
        this.instance.add(arrayOffset + 12).writeInt(this.array.getItemsCount());
        this.randomRewardsArray = new LogicArrayList();
        this.instance.add(randomRewardsArrayOffset).writePointer(this.randomRewardsArray.getArray());
        this.instance.add(randomRewardsArrayOffset + 8).writeInt(this.randomRewardsArray.getCapacity());
        this.instance.add(randomRewardsArrayOffset + 12).writeInt(this.randomRewardsArray.getItemsCount());
        if (source !== undefined) {
            this.instance.add(rewardFromOffset).writeInt(source);
        }
        if (openAt !== undefined) {
            this.instance.add(openingStageIdOffset).writeInt(openAt);
        }
    }
    setRandomRewardContainerData(data) {
        return;
    }
    getRandomRewardContainerData() {
        return new LogicRandomRewardContainerData(this.instance.readPointer());
    }
    addRandomReward(data) {
        this.randomRewardsArray.addElement(ptr(data.getGlobalID()));
        this.instance.add(randomRewardsArrayOffset).writePointer(this.randomRewardsArray.getArray());
        this.instance.add(randomRewardsArrayOffset + 8).writeInt(this.randomRewardsArray.getCapacity());
    }
    addGemOffer(gemOffer) {
        this.array.addElement(gemOffer.instance);
        this.instance.add(arrayOffset).writePointer(this.array.getArray());
        this.instance.add(arrayOffset + 8).writeInt(this.array.getCapacity());
    }
}
LogicClaimableRandomReward.allocationSize = 48;

var EStarrDropRarities = {};

class LogicStarrDropRewards {
    static getRandomDropByWeights(rarity) {
        var drops = LogicStarrDropRewards.table[rarity];
        var total = drops.reduce(function (sum, r) {
            return sum + r.weight;
        }, 0);
        var rand = Math.random() * total;
        var acc = 0;
        for (var r of drops) {
            acc = acc + r.weight;
            if (rand < acc) {
                return r.getGatchaDrop();
            }
        }
        return drops[0].getGatchaDrop();
    }
}
LogicStarrDropRewards.table = { RARE: [new LogicOwnGatchaRandomReward(41.9, 50, EGatchaDropTypes.GOLD), new LogicOwnGatchaRandomReward(32.6, 25, EGatchaDropTypes.POWER_POINTS), new LogicOwnGatchaRandomReward(20.9, 100, EGatchaDropTypes.TOKEN_DOUBLER), new LogicOwnGatchaRandomReward(2.3, 20, EGatchaDropTypes.BLING), new LogicOwnGatchaRandomReward(2.3, 10, EGatchaDropTypes.RECRUIT_TOKENS)], SUPER_RARE: [new LogicOwnGatchaRandomReward(42.38, 100, EGatchaDropTypes.GOLD)], EPIC: [new LogicOwnGatchaRandomReward(21.05, 200, EGatchaDropTypes.GOLD), new LogicOwnGatchaRandomReward(21.05, 100, EGatchaDropTypes.POWER_POINTS), new LogicOwnGatchaRandomReward(15.79, 1, EGatchaDropTypes.VANITY_ITEM, LogicDataTables.table.Emotes, EEmoteRarities.COMMON), new LogicOwnGatchaRandomReward(15.79, 1, EGatchaDropTypes.VANITY_ITEM, LogicDataTables.table.Sprays), new LogicOwnGatchaRandomReward(10.53, 500, EGatchaDropTypes.TOKEN_DOUBLER), new LogicOwnGatchaRandomReward(5.26, 150, EGatchaDropTypes.RECRUIT_TOKENS), new LogicOwnGatchaRandomReward(5.26, 1, EGatchaDropTypes.VANITY_ITEM, LogicDataTables.table.Emotes, EEmoteRarities.RARE), new LogicOwnGatchaRandomReward(5.26, 1, EGatchaDropTypes.VANITY_ITEM, LogicDataTables.table.Skins, ESkinRarities.RARE)], MYTHIC: [], LEGENDARY: [] };

var countOffset = LogicMemory.offset(4);
var dataOffset = LogicMemory.offset(8);
var extraDataOffset = LogicMemory.offset(16);

class LogicGemOffer {
    constructor(instance) {
        if (instance) {
            this.instance = instance;
            return;
        }
        this.instance = Libc.malloc(LogicGemOffer.allocationSize);
        this.setType(0);
        this.setCount(0);
    }
    setType(type) {
        this.instance.writeInt(type);
    }
    setCount(count) {
        this.instance.add(countOffset).writeInt(count);
    }
    setData(data) {
        if (data.instance == null) {
            return;
        }
        this.instance.add(dataOffset).writePointer(data.instance);
    }
    setExtraData(extraData) {
        this.instance.add(extraDataOffset).writeInt(extraData);
    }
    getType() {
        return this.instance.readInt();
    }
    getCount() {
        return this.instance.add(countOffset).readInt();
    }
    getData() {
        return this.instance.add(dataOffset).readPointer();
    }
    getExtraData() {
        return this.instance.add(extraDataOffset).readInt();
    }
    getSkin() {
        var extraData = this.getExtraData();
        if (extraData === 0) {
            return null;
        }
        return LogicDataTables.getDataById(29, extraData);
    }
    toString() {
        var data = 0;
        if (!this.getData().isNull()) {
            data = new LogicData(this.getData()).getGlobalID();
        }
        return "LogicGemOffer{type=".concat(this.getType(), ",count=", this.getCount(), ",data=", data, ",extraData=", this.getExtraData(), "}");
    }
}
LogicGemOffer.allocationSize = 24;

var CARD_META_UNLOCK = 0;
var UNLOCK_REASON_DEBUG = 3;
var DELIVERY_UNIT_TYPE = 100;

class GiveByGlobalId {
    static rememberContainerId(containerId) {
        GiveByGlobalId.pendingContainerId = containerId;
    }
    static giveInstant(globalId) {
        var data = LogicDataTables.getDataById(globalId);
        if (!data || data.instance.isNull()) {
            return;
        }
        var tableId = GlobalID.getClassID(globalId);
        if (tableId === LogicDataTables.table.Characters) {
            HomeScreen.doOfflineGatcha(HomeMode.gatchaType.Character, data);
            return;
        }
        if (tableId === LogicDataTables.table.Skins) {
            var skin = data;
            var character = skin.getCharacter();
            if (!character) {
                return;
            }
            HomeScreen.doOfflineGatcha(HomeMode.gatchaType.Skin, character, skin);
            return;
        }
        if (tableId === LogicDataTables.table.Cards) {
            var avatar = GameStateManager.getPlayerAvatar();
            if (!avatar.instance.isNull()) {
                avatar.setItem(data);
            }
            return;
        }
        GUI.showFloaterTextAtDefaultPosition("Unsupported data type ".concat(tableId, " for ", globalId));
        Logcat.logDebug("GIVE_BY_GLOBAL_ID unsupported tableId=".concat(tableId, " for instant give"));
    }
    static giveFromPendingContainer(globalId) {
        var containerId = GiveByGlobalId.pendingContainerId;
        var container = LogicDataTables.getDataById(LogicDataTables.table.RandomRewardContainers, containerId);
        if (!container || container.instance.isNull()) {
            return;
        }
        var data = LogicDataTables.getDataById(globalId);
        if (!data || data.instance.isNull()) {
            return;
        }
        var tableId = GlobalID.getClassID(globalId);
        var instanceId = GlobalID.getInstanceID(globalId);
        var drop = GiveByGlobalId.unlockAndBuildDrop(tableId, instanceId, data);
        if (!drop) {
            return;
        }
        if (!GiveByGlobalId.canRenderContainerVisual(container)) {
            GiveByGlobalId.giveWithoutContainer(tableId, instanceId, data);
            return;
        }
        GiveByGlobalId.showGachaAnimation(drop, containerId);
    }
    static canRenderContainerVisual(container) {
        if (!(container.visualType === 0)) {
            if (!(container.visualType === 1)) {
                if (!(container.visualType === 2)) {
                    if (container.visualType === 4) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    static giveWithoutContainer(tableId, instanceId, data) {
        if (tableId === LogicDataTables.table.Characters) {
            HomeScreen.doOfflineGatcha(HomeMode.gatchaType.Character, data);
            return;
        }
        if (tableId === LogicDataTables.table.Skins) {
            var skin = data;
            var character = skin.getCharacter();
            if (character) {
                HomeScreen.doOfflineGatcha(HomeMode.gatchaType.Skin, character, skin);
                return;
            }
        }
        Logcat.logDebug("GIVE_FROM_CONTAINER tableId=".concat(tableId, " id=", instanceId, " reward credited, no animation"));
    }
    static applyUnlock(tableId, data) {
        var avatar = GameStateManager.getPlayerAvatar();
        var playerData = LogicClientHome.getPlayerData();
        if (tableId === LogicDataTables.table.Characters) {
            if (avatar.instance.isNull()) {
                return true;
            }
            var unlockCard = LogicDataTables.getCardForMetaType(data, CARD_META_UNLOCK);
            if (unlockCard) {
                avatar.unlockHero(unlockCard.instance, UNLOCK_REASON_DEBUG);
            }
            return true;
        }
        if (tableId === LogicDataTables.table.Cards) {
            if (!avatar.instance.isNull()) {
                avatar.setItem(data);
            }
            return true;
        }
        if (tableId === LogicDataTables.table.Skins) {
            if (playerData) {
                LogicDailyData.addUnlockedSkin(playerData, data);
            }
            return true;
        }
        if (tableId !== LogicDataTables.table.Emotes) {
            if (tableId === LogicDataTables.table.Sprays) {
                Logcat.logDebug("GIVE_BY_GLOBAL_ID vanity tableId=".concat(tableId, " given as animation-only (no persistence)"));
                return true;
            }
        }
        Logcat.logDebug("GIVE_BY_GLOBAL_ID unsupported tableId=".concat(tableId));
        return false;
    }
    static unlockAndBuildDrop(tableId, instanceId, data) {
        if (!GiveByGlobalId.applyUnlock(tableId, data)) {
            return null;
        }
        if (tableId === LogicDataTables.table.Characters) {
            return new LogicGatchaDrop(EGatchaDropTypes.CHARACTER, 1, instanceId);
        }
        if (tableId === LogicDataTables.table.Cards) {
            return new LogicGatchaDrop(EGatchaDropTypes.SKILL, 1, instanceId);
        }
        if (tableId === LogicDataTables.table.Skins) {
            return new LogicGatchaDrop(EGatchaDropTypes.SKIN, 1, instanceId);
        }
        if (!(tableId === LogicDataTables.table.Emotes)) {
            if (tableId === LogicDataTables.table.Sprays) {
                return new LogicGatchaDrop(EGatchaDropTypes.VANITY_ITEM, 1, instanceId, tableId);
            }
        }
        return null;
    }
    static showGachaAnimation(drop, containerId) {
        var deliveryUnit = new DeliveryUnit(DELIVERY_UNIT_TYPE);
        deliveryUnit.addDrop(drop);
        var deliveryArray = new LogicArrayList(1).addElement(deliveryUnit.instance);
        var rewardPopup = new RewardOpeningPopup(containerId, deliveryArray, 0, 0);
    }
}
GiveByGlobalId.pendingContainerId = 0;
