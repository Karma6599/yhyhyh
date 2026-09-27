var BattleEndPopup_ctor = Libg.offset(9459592, 0);
var BattleEndPopup_proceedToNextState = new NativeFunction(Libg.offset(9545328, 0), "void", ["pointer", "int"]);
var BattleEndPopup_isShareReplayButtonEnabled = Libg.offset(9538784, 0);

class BattleEndPopup {
    constructor() {
    }
    static proceedToNextState(isAllowed) {
        BattleEndPopup_proceedToNextState(BattleEndPopup.instance.instance, isAllowed);
        return;
    }
    static patch() {
        Interceptor.attach(BattleEndPopup_ctor, { onEnter(args) {
            BattleEndPopup.instance = new GUIContainer(args[0]);
            return;
        }, onLeave() {
            var instantLeaveButton;
            if (Config.config.BattleEndInstantExit) {
                instantLeaveButton = new BattleEndInstantExitButton();
                BattleEndPopup.instance.getMovieClip().addChild(instantLeaveButton);
                return;
            }
        } });
        return;
    }
}

var HeroList_sortHeroes = Libg.offset(10236236);
var HeroCollectionPopup_onSortButtonClicked = Libg.offset(10269288);
var GenericButtonPopover_getExistingPopover = new NativeFunction(Libg.offset(9649844), "pointer", []);
var getHeroSortingName = new NativeFunction(Libg.offset(12466072), "pointer", ["uint"]);
var GenericButtonPopover_addButton = new NativeFunction(Libg.offset(9649096), "pointer", ["pointer", "pointer", "pointer", "pointer"]);
var delegateVtablePtr = Libg.offset(18688608);
var listenerFunc = Libg.offset(10270032);
var currentCategory = 0;
var CATEGORIES = [{ name: "Test1", index: 1, characters: [16000006, 16000067, 16000027] }, { name: "Test2", index: 2, characters: [16000001, 16000028, 16000030] }, { name: "test3", index: 3, characters: [16000099, 16000091, 16000008] }];

class HeroCollectionPopup {
    constructor() {
    }
    static patch() {
        var listenerFn, e;
        if (!ModProperties.isFeatureAvailableInThisBuild(EExperimentalFeature.CATEGORIES)) {
            return;
        }
        try {
            listenerFn = new NativeFunction(listenerFunc, "void", ["pointer"]);
            Interceptor.replace(listenerFn, new NativeCallback(function (listener) {
                var selectedCategory, previousCategory, category;
                selectedCategory = listener.add(8).readInt();
                if (selectedCategory !== 15) {
                    return listenerFn(listener);
                }
                if (CATEGORIES.length === 0) {
                    GUI.showFloaterTextAtDefaultPosition(Localisation.getString("NoCategories"));
                }
                previousCategory = Settings.getHeroSorting();
                if (previousCategory >= 1000) {
                    currentCategory = (currentCategory + 1) % CATEGORIES.length;
                }
                category = CATEGORIES[currentCategory];
                return;
            }, "void", ["pointer"]));
            Interceptor.attach(HeroCollectionPopup_onSortButtonClicked, { onEnter(args) {
                this.popover = args[0].add(8).readPointer();
                return;
            }, onLeave() {
                var popover, listener;
                popover = GenericButtonPopover_getExistingPopover();
                if (popover.isNull()) {
                    return;
                }
                listener = Libc.malloc(48);
                listener.writePointer(delegateVtablePtr);
                listener.add(8).writeU64(15);
                listener.add(16).writePointer(this.popover);
                listener.add(24).writeU64(0);
                listener.add(32).writePointer(listener);
                return;
            } });
            Interceptor.replace(getHeroSortingName, new NativeCallback(function (sorting) {
                var categoryIndex, currentCategory;
                if (sorting < 1000) {
                    return getHeroSortingName(sorting);
                }
                categoryIndex = Settings.getHeroSorting() - 1000;
                currentCategory = CATEGORIES.find(function (e) {
                    return e.index === categoryIndex;
                });
                if (!currentCategory) {
                    return getHeroSortingName(categoryIndex);
                }
                return StringObject.create(currentCategory.name);
            }, "pointer", ["int"]));
            Interceptor.attach(HeroList_sortHeroes, { onEnter(args) {
                this.list = args[1];
                return;
            }, onLeave(retval) {
                var heroSorting, currentCategory, bucketNode, categoryVector;
                heroSorting = Settings.getHeroSorting() - 1000;
                currentCategory = CATEGORIES.find(function (e) {
                    return e.index === heroSorting;
                });
                if (!currentCategory) {
                    return;
                }
                bucketNode = this.list.add(248).readPointer();
                while (!bucketNode.isNull()) {
                    categoryVector = bucketNode.add(24);
                    bucketNode = bucketNode.readPointer();
                }
                return;
            } });
        } catch (e) {
            _.LogInfo(e);
            return;
        }
    }
}
HeroCollectionPopup.cachedButton = null;

var HeroScreenPopup_ctor = Libg.offset(12391476, 0);
var HeroScreenPopup_skinChanged = new NativeFunction(Libg.offset(12402884, 0), "void", ["pointer", "pointer"]);
var logicSkinDataOffset = LogicMemory.offset(824);
var characterDataOffset = LogicMemory.offset(448);
var skinCollectionIconOffset = LogicMemory.offset(608);
var heroModelOffset = LogicMemory.offset(624);
var hudTopLeftOffset = LogicMemory.offset(792);
var recordButtonOffset = LogicMemory.offset(56);
var HeroScreenPopup_construct = new NativeFunction(HeroScreenPopup_ctor, "void", ["pointer", "pointer", "pointer", "int"]);
var heroScreenPopupAllocationSize = 968;

class HeroScreenPopup {
    constructor(instance) {
        this.instance = instance;
        this.popupInstance = new GenericPopup(instance);
        HeroScreenPopup.SCREEN_POPUP_INSTANCE = this;
    }
    static skinChanged(skin) {
        return;
    }
    static getLogicCharacterData() {
        return new LogicCharacterData(this.instance.add(characterDataOffset).readPointer());
    }
    static getLogicSkinData() {
        return new LogicSkinData(this.instance.add(logicSkinDataOffset).readPointer());
    }
    static setLogicSkinData(logicSkinData) {
        return;
    }
    static getSkinCollectionIcon() {
        return this.instance.add(skinCollectionIconOffset).readPointer();
    }
    static getHeroModel() {
        return this.instance.add(heroModelOffset).readPointer();
    }
    static getHudTopLeft() {
        return new Sprite(this.instance.add(hudTopLeftOffset).readPointer());
    }
    getInstance() {
        if (HeroScreenPopup.SCREEN_POPUP_INSTANCE) {
            if (HeroScreenPopup.SCREEN_POPUP_INSTANCE.instance.isNull()) {
                return null;
            }
        }
        return HeroScreenPopup.SCREEN_POPUP_INSTANCE;
    }
    skinChanged(skin, instance) {
        var popup;
        popup = GUI.getPopupByType(HeroScreenPopup.popupType);
        if (popup.isNull()) {
            return;
        }
        if (instance == null) {
        }
        return;
    }
    static show(character, skin) {
        var popupInstance;
        if (skin === undefined) {
            skin = null;
        }
        popupInstance = Libc.calloc(heroScreenPopupAllocationSize, 1);
        HeroScreenPopup_construct(popupInstance, character.instance, NULL, 0);
        return;
    }
    static patch() {
        return;
    }
}
HeroScreenPopup.popupType = 26;

var NotEnoughGemsPopup_ctor = new NativeFunction(Libg.offset(10403324, 0), "void", ["pointer", "int"]);

class NotEnoughGemsPopup extends GenericPopup {
    constructor(missingGems) {
        var popupInstance;
        popupInstance = Libc.calloc(NotEnoughGemsPopup.allocationSize, 1);
        NotEnoughGemsPopup_ctor(popupInstance, missingGems);
        super(popupInstance);
    }
    static show(missingGems) {
        var popup;
        if (missingGems === undefined) {
            missingGems = 0;
        }
        popup = new NotEnoughGemsPopup(missingGems);
        return;
    }
}
NotEnoughGemsPopup.allocationSize = 448;

var NotificationSettingsPopup_ctor = new NativeFunction(Libg.offset(10952328, 0), "void", ["pointer"]);

class NotificationSettingsPopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(NotificationSettingsPopup.allocationSize, 1);
        NotificationSettingsPopup_ctor(popupInstance);
        super(popupInstance);
    }
    static show() {
        var popup;
        popup = new NotificationSettingsPopup();
        return;
    }
}
NotificationSettingsPopup.allocationSize = 560;

class EventDetailsPopup {
    constructor() {
    }
    static patch() {
        return;
    }
}
EventDetailsPopup.EventDetailsPopup_init = new NativeFunction(Libg.offset(9973696, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);

var FameLevelUpPopup_ctor = new NativeFunction(Libg.offset(10073804, 0), "void", ["pointer", "uint", "int"]);

class FameLevelUpPopup extends GenericPopup {
    constructor(previousLevel, levelsGained) {
        var popupInstance;
        popupInstance = Libc.calloc(FameLevelUpPopup.allocationSize, 1);
        FameLevelUpPopup_ctor(popupInstance, previousLevel, levelsGained);
        super(popupInstance);
    }
}
FameLevelUpPopup.allocationSize = 536;

var FamePopup_ctor = new NativeFunction(Libg.offset(10075888, 0), "void", ["pointer"]);
var FamePopup_showFame = new NativeFunction(Libg.offset(10076948, 0), "void", ["pointer", "int"]);
var displayedFameOffset = LogicMemory.offset(500, 500);

class FamePopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(FamePopup.allocationSize, 1);
        FamePopup_ctor(popupInstance);
        super(popupInstance);
    }
    static patch() {
        return;
    }
    static show(fameLevel) {
        var popup;
        popup = new FamePopup();
        FamePopup.overrideInstance = popup.instance;
        FamePopup.overrideFame = fameLevel;
        GUI.showPopup(popup.instance, false, false, true);
        return;
    }
}
FamePopup.allocationSize = 520;
FamePopup.overrideInstance = NULL;
FamePopup.overrideFame = 0;

var FirstGearTutorialPopup_ctor = new NativeFunction(Libg.offset(12131740, 0), "void", ["pointer", "pointer"]);

class FirstGearTutorialPopup extends GenericPopup {
    constructor(character) {
        var popupInstance;
        popupInstance = Libc.calloc(FirstGearTutorialPopup.allocationSize, 1);
        FirstGearTutorialPopup_ctor(popupInstance, character.instance);
        super(popupInstance);
    }
    static show(character) {
        var popup;
        popup = new FirstGearTutorialPopup(character);
        return;
    }
}
FirstGearTutorialPopup.allocationSize = 440;

var RANKED_POPUP_TYPE = 91;
var RankedSeasonEndPopup_ctor = new NativeFunction(Libg.offset(11334540, 0), "void", ["pointer", "pointer"]);
var RankedSeasonEndNotification_ctor = new NativeFunction(Libg.offset(16214536, 0), "void", ["pointer", "int", "int", "int"]);
var notificationAllocationSize = 80;
var popupAllocationSize = 584;
var previewRank = 30;
var previewPlayerFrame = 12;
var previewLastRank = 11;

class RankedSeasonEndPopup extends GenericPopup {
    constructor(notificationInstance) {
        var popupInstance;
        popupInstance = Libc.calloc(RankedSeasonEndPopup.allocationSize, 1);
        RankedSeasonEndPopup_ctor(popupInstance, notificationInstance);
        super(popupInstance);
    }
    static show(rank, playerFrame, lastRank) {
        var notificationInstance, popup;
        if (rank === undefined) {
            rank = previewRank;
        }
        if (playerFrame === undefined) {
            playerFrame = previewPlayerFrame;
        }
        if (lastRank === undefined) {
            lastRank = previewLastRank;
        }
        notificationInstance = Libc.calloc(notificationAllocationSize, 1);
        RankedSeasonEndNotification_ctor(notificationInstance, rank, playerFrame, lastRank);
        popup = new RankedSeasonEndPopup(notificationInstance);
        return;
    }
}
RankedSeasonEndPopup.allocationSize = popupAllocationSize;

var BrawlPassAutoCollectRewardsPopup_ctor = new NativeFunction(Libg.offset(12127156, 0), "void", ["pointer", "int", "int", "int"]);
var BrawlPassAutoCollectRewardsPopup_setData = new NativeFunction(Libg.offset(12128752, 0), "void", ["pointer", "pointer"]);

class BrawlPassAutoCollectRewardsPopup extends GenericPopup {
    constructor(seasonIndex, context, rewardType) {
        var popupInstance;
        popupInstance = Libc.calloc(BrawlPassAutoCollectRewardsPopup.allocationSize, 1);
        BrawlPassAutoCollectRewardsPopup_ctor(popupInstance, seasonIndex, context, rewardType);
        super(popupInstance);
    }
    setData(deliveries) {
        BrawlPassAutoCollectRewardsPopup_setData(this.instance, deliveries.instance);
        return;
    }
}
BrawlPassAutoCollectRewardsPopup.allocationSize = 1152;

var BrawlPassUnlockBrawlerPopup_show = new NativeFunction(Libg.offset(10534264, 0), "void", ["int", "int"]);

class BrawlPassUnlockBrawlerPopup {
    constructor() {
    }
    static show(brawlerIndex) {
        if (brawlerIndex === undefined) {
            brawlerIndex = 0;
        }
        return;
    }
}

var BrawlTvIntroPopup_ctor = new NativeFunction(Libg.offset(10070492, 0), "void", ["pointer"]);

class BrawlTvIntroPopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(BrawlTvIntroPopup.allocationSize, 1);
        BrawlTvIntroPopup_ctor(popupInstance);
        super(popupInstance);
    }
}
BrawlTvIntroPopup.allocationSize = 440;

class BrawlTvIntroPopupPreview {
    constructor() {
    }
    static show() {
        var popup, okButton;
        popup = new BrawlTvIntroPopup();
        okButton = popup.addGameButton("ok_button", 0);
        okButton.setCustomButtonListener(function () {
            return popup.fadeOut();
        });
        return;
    }
}

var RewardCompensationPopup_ctor = new NativeFunction(Libg.offset(12073452, 0), "void", ["pointer", "pointer"]);

class RewardCompensationPopup extends GenericPopup {
    constructor(notification) {
        var popupInstance;
        popupInstance = Libc.calloc(RewardCompensationPopup.allocationSize, 1);
        RewardCompensationPopup_ctor(popupInstance, notification);
        super(popupInstance);
    }
}
RewardCompensationPopup.allocationSize = 448;

var RewardOpeningPopup_ctorAddr = Libg.offset(11952856, 0);
var RewardOpeningPopup_setTapsCountAddr = Libg.offset(11954080, 0);
var RewardOpeningPopup_touchReleasedAddr = Libg.offset(0, 0);
var RewardOpeningPopup_ctor = new NativeFunction(RewardOpeningPopup_ctorAddr, "void", ["pointer", "pointer", "pointer", "int"]);
var RewardOpeningPopup_show = new NativeFunction(Libg.offset(11950984, 0), "void", ["pointer"]);
var RewardOpeningPopup_setData = new NativeFunction(Libg.offset(11977916, 0), "void", ["pointer", "pointer", "int", "int"]);
var callbackOffset = LogicMemory.offset(32, 0);
var containerDataOffset = LogicMemory.offset(0, 496);
var DEFAULT_VISUAL_TYPE = 0;

class RewardOpeningPopup {
    constructor(containerOrId, source, openAt) {
        var claimable;
        if (source === undefined) {
            source = 0;
        }
        if (openAt === undefined) {
            openAt = 3;
        }
        this.instance = Libc.calloc(RewardOpeningPopup.allocationSize, 1);
        claimable = RewardOpeningPopup.buildClaimable(containerOrId, source, openAt);
        RewardOpeningPopup_ctor(this.instance, claimable.instance, RewardOpeningPopup.buildEmptyCallback(), -1);
    }
    setData(data, source, openAt) {
        if (source === undefined) {
            source = 0;
        }
        if (openAt === undefined) {
            openAt = 0;
        }
        RewardOpeningPopup_setData(this.instance, data.instance, source, openAt);
        return;
    }
    static show(claimable) {
        return;
    }
    static buildClaimable(containerOrId, source, openAt) {
        var claimable, containerData;
        claimable = new LogicClaimableRandomReward(source, openAt);
        if (typeof containerOrId === "number") {
            containerData = new LogicRandomRewardContainerData(containerOrId);
        } else {
            containerData = containerOrId;
        }
        claimable.setRandomRewardContainerData(containerData);
        return claimable;
    }
    static buildEmptyCallback() {
        var callback;
        callback = Libc.calloc(callbackOffset + Process.pointerSize, 1);
        callback.add(callbackOffset).writePointer(ptr(0));
        return callback;
    }
    static getContainerData(popupInstance) {
        var containerDataPointer;
        containerDataPointer = popupInstance.add(containerDataOffset).readPointer();
        if (containerDataPointer.isNull()) {
            return null;
        }
        return new LogicRandomRewardContainerData(containerDataPointer);
    }
    static patch() {
        var currentClaimable;
        currentClaimable = { value: null };
        RewardOpeningPopup.captureClaimableFromCtor(currentClaimable);
        RewardOpeningPopup.skipTapCountInCtor(currentClaimable);
        if (Process.platform === "darwin") {
            RewardOpeningPopup.forceDefaultOpenBranchOnTouch(currentClaimable);
            return;
        }
    }
    static captureClaimableFromCtor(currentClaimable) {
        return;
    }
    static skipTapCountInCtor(currentClaimable) {
        return;
    }
    static forceDefaultOpenBranchOnTouch(currentClaimable) {
        return;
    }
}
RewardOpeningPopup.allocationSize = 1152;

var RecruitRoadClaimBrawlerPopup_ctor = new NativeFunction(Libg.offset(10767840, 0), "void", ["pointer", "bool"]);

class RecruitRoadClaimBrawlerPopup extends GenericPopup {
    constructor(isUltraRare) {
        var popupInstance;
        popupInstance = Libc.calloc(RecruitRoadClaimBrawlerPopup.allocationSize, 1);
        RecruitRoadClaimBrawlerPopup_ctor(popupInstance, isUltraRare ? 1 : 0);
        super(popupInstance);
    }
}
RecruitRoadClaimBrawlerPopup.allocationSize = 560;

var InviteFriendWithCodePopup_ctor = new NativeFunction(Libg.offset(10881084, 0), "void", ["pointer"]);

class InviteFriendWithCodePopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(InviteFriendWithCodePopup.allocationSize, 1);
        InviteFriendWithCodePopup_ctor(popupInstance);
        super(popupInstance);
    }
    static show() {
        var popup;
        popup = new InviteFriendWithCodePopup();
        return;
    }
}
InviteFriendWithCodePopup.allocationSize = 464;

var PlayerCountryPopup_ctor = new NativeFunction(Libg.offset(13522876, 0), "pointer", ["pointer"]);

class PlayerCountryPopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(PlayerCountryPopup.allocationSize, 1);
        PlayerCountryPopup_ctor(popupInstance);
        super(popupInstance);
    }
}
PlayerCountryPopup.allocationSize = 472;

class PrestigeSelectorPopup extends ListContainerPopup {
    constructor(character) {
        super({ Title: Localisation.getString("PrestigeMenuPopupTitle") });
        this.character = character;
        this.adjustPopupHeaderButtons("prestige_selector");
        this.refreshItems();
    }
    refreshItems() {
        var listContainer, index, prestige, prestigeItem, naviHeight;
        listContainer = this.container;
        listContainer.clearEntries();
        index = 0;
        for (const prestige of PrestigeSelectorPopup.PRESTIGE_TYPE) {
            prestigeItem = new UniItem(prestige.name);
            prestigeItem.setCustomButtonListener(this.buttonClicked.bind(this), "particleStyle_".concat(index));
            prestigeItem.id = index;
            prestigeItem.setText(Localisation.getString("Prestige").replace("{int}", prestige.level.toString()));
            this.container.addEntry(prestigeItem);
            index = index + 1;
        }
        naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(1, naviHeight * 2.5, 0, 0, 0, 0, -1);
        return;
    }
    buttonClicked(self, buttonPtr) {
        var button, prestigeId;
        button = new GameButton(buttonPtr);
        prestigeId = button.id + 1;
        return;
    }
}
PrestigeSelectorPopup.PRESTIGE_TYPE = [{ name: "Prestige", level: 1 }, { name: "Prestige", level: 2 }, { name: "Prestige", level: 3 }];

var PrestigeLevelUpPopup_prestigeUp = new NativeFunction(Libg.offset(10428516, 0), "void", ["pointer", "int"]);

class PrestigeLevelUpPopup extends PopupBase {
    constructor(instance) {
        super(instance);
    }
    prestigeUp(character, prestiegeLevel) {
        return;
    }
}

var NOTIFICATION_SCRATCH_SIZE = 64;
var PRESTIGE_COMPENSATION_TYPE_OFFSET = 52;
var PRESTIGE_COMPENSATION_TYPE = 1;
var POPUP_BUTTON_NAMES = ["button_ok", "button_close"];

class PrestigeIntroPopupPreview {
    constructor() {
    }
    static show() {
        var notification, popup;
        notification = PrestigeIntroPopupPreview.buildPrestigeNotification();
        popup = new RewardCompensationPopup(notification);
        PrestigeIntroPopupPreview.routeAllButtonsToClose(popup);
        return;
    }
    static buildPrestigeNotification() {
        var notification;
        notification = Libc.calloc(NOTIFICATION_SCRATCH_SIZE, 1);
        notification.add(PRESTIGE_COMPENSATION_TYPE_OFFSET).writeU32(PRESTIGE_COMPENSATION_TYPE);
        return notification;
    }
    static routeAllButtonsToClose(popup) {
        var buttonName, button;
        for (const buttonName of POPUP_BUTTON_NAMES) {
            button = popup.addGameButton(buttonName, 1);
            button.setCustomButtonListener(function () {
                return popup.fadeOut();
            });
        }
        return;
    }
}

class CelebrationPopupPreview {
    constructor() {
    }
    static showNewBrawler() {
        var popup;
        popup = new RecruitRoadClaimBrawlerPopup(false);
        return;
    }
    static showFameLevelUp() {
        var popup;
        popup = new FameLevelUpPopup(0, 1);
        return;
    }
}

var PreviewBrawlerOrSkinRewardPopup_ctor = new NativeFunction(Libg.offset(10446748, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer"]);

class PreviewBrawlerOrSkinRewardPopup extends GenericPopup {
    constructor(skin) {
        var instance;
        instance = Libc.malloc(PreviewBrawlerOrSkinRewardPopup.allocationSize);
        StringObject.with("", function (emptyStrObj) {
            return PreviewBrawlerOrSkinRewardPopup_ctor(instance, NULL, skin.instance, 0, emptyStrObj);
        });
        super(instance);
    }
}
PreviewBrawlerOrSkinRewardPopup.allocationSize = 520;

var PREVIEW_DAYS_UNTIL_DELETE = 30;
var TIME_PLACEHOLDER = "<time>";
var HIDDEN_STOCK_BUTTON_NAMES = ["button_negative", "button_no", "button_yes"];

class AccountDeletionDialogPreviewPopup extends GenericPopup {
    constructor() {
        var movieClip, title, bodyTemplate;
        super("popup_generic", false, true);
        movieClip = this.getMovieClip();
        AccountDeletionDialogPreviewPopup.hideUnusedStockButtons(movieClip);
        title = StringTable.getString("TID_ACCOUNT_DELETION_WARNING_TITLE") || "Account Deletion Warning";
        this.setTitleTid(title);
        bodyTemplate = StringTable.getString("TID_ACCOUNT_DELETION_WARNING_TEXT") || "Your account will be deleted in ".concat(TIME_PLACEHOLDER, ".");
        movieClip.getTextFieldByName("txt").text = bodyTemplate.replace(TIME_PLACEHOLDER, "".concat(PREVIEW_DAYS_UNTIL_DELETE, " days"));
        this.bindContactSupportButton();
        this.bindCloseButton();
    }
    bindContactSupportButton() {
        var contactSupportButton;
        contactSupportButton = this.addGameButton("button_ok", 1);
        if (!StringTable.getString("TID_ACCOUNT_DELETION_WARNING_BUTTON_CONTACT_PS")) {
            contactSupportButton.getMovieClip().getTextFieldByName("txt").text = "Contact Support";
        }
        return;
    }
    bindCloseButton() {
        var closeButton;
        closeButton = this.addGameButton("button_close", 1);
        return;
    }
    static hideUnusedStockButtons(movieClip) {
        var buttonName, stockButton;
        for (const buttonName of HIDDEN_STOCK_BUTTON_NAMES) {
            stockButton = movieClip.getMovieClipByName(buttonName);
            if (stockButton) {
                stockButton.visibility = false;
            }
        }
        return;
    }
}

class AccountDeletionDialogPreview {
    constructor() {
    }
    static show() {
        return;
    }
}

var ChatOptionsPopup_show = new NativeFunction(Libg.offset(12903276, 0), "void", []);

class ChatOptionsPopup {
    constructor() {
    }
    static show() {
        return ChatOptionsPopup_show();
    }
}

var MAINTENANCE_MODE_SINGLE_TAB = 4;
var MAINTENANCE_MODE_2_TAB = 3;
var MAINTENANCE_MODE_3_TAB = 7;
var MAINTENANCE_MODE_ESPORTS = 6;
var MAINTENANCE_DIALOG_TYPE = 4;
var MAINTENANCE_DEFAULT_SECONDS = 600;
var MAINTENANCE_SHORT_SECONDS = 30;
var MAINTENANCE_EMPTY_MESSAGE = "";
var initStateSubStateOffset = LogicMemory.offset(72);
var INIT_STATE_READY_SUB_STATE = 4;

class MaintenancePopupPreview {
    constructor() {
    }
    static showDefault() {
        MaintenancePopupPreview.queueRealAndReload(MAINTENANCE_MODE_SINGLE_TAB, MAINTENANCE_DEFAULT_SECONDS);
        return;
    }
    static showShort30s() {
        MaintenancePopupPreview.queueRealAndReload(MAINTENANCE_MODE_SINGLE_TAB, MAINTENANCE_SHORT_SECONDS);
        return;
    }
    static showTwoTab() {
        MaintenancePopupPreview.queueRealAndReload(MAINTENANCE_MODE_2_TAB, MAINTENANCE_DEFAULT_SECONDS);
        return;
    }
    static showThreeTab() {
        MaintenancePopupPreview.queueRealAndReload(MAINTENANCE_MODE_3_TAB, MAINTENANCE_DEFAULT_SECONDS);
        return;
    }
    static showNewsEsports() {
        MaintenancePopupPreview.queueRealAndReload(MAINTENANCE_MODE_ESPORTS, MAINTENANCE_DEFAULT_SECONDS);
        return;
    }
    static isLoginBlockActive() {
        return MaintenancePopupPreview.pendingReal !== null;
    }
    static onInitStateUpdate(initStateInstance) {
        var subState, mode, secondsUntilEnd, e;
        if (!MaintenancePopupPreview.pendingReal) {
            return;
        }
        if (initStateInstance.isNull()) {
            return;
        }
        subState = initStateInstance.add(initStateSubStateOffset).readS32();
        if (subState !== MaintenancePopupPreview.lastLoggedSubState) {
            Logcat.logDebug("[Maintenance] sub-state=".concat(subState));
            MaintenancePopupPreview.lastLoggedSubState = subState;
        }
        if (subState < INIT_STATE_READY_SUB_STATE) {
            return;
        }
        if (!MaintenancePopupPreview.pendingReal.overlayShown) {
            try {
                mode = MaintenancePopupPreview.pendingReal.mode;
                secondsUntilEnd = MaintenancePopupPreview.pendingReal.secondsUntilEnd;
                MaintenancePopupPreview.pendingReal.overlayShown = true;
                MaintenancePopupPreview.showOverlay(mode, secondsUntilEnd);
                return;
            } catch (e) {
                Logcat.logDebug("[Maintenance] overlay error: ".concat(e));
                return;
            }
        }
        return;
    }
    static tickCountdown() {
        var pending, remainingMs, remainingSeconds, text;
        pending = MaintenancePopupPreview.pendingReal;
        if (!pending) {
            return;
        }
        remainingMs = pending.expiresAt - Date.now();
        if (remainingMs <= 0) {
            Logcat.logDebug("[Maintenance] countdown expired, releasing login block");
            MaintenancePopupPreview.dismissOverlay(pending);
            MaintenancePopupPreview.pendingReal = null;
            MaintenancePopupPreview.lastLoggedSubState = -1;
            return;
        }
        remainingSeconds = Math.ceil(remainingMs / 1000);
        text = MaintenancePopupPreview.formatRemainingTime(remainingSeconds);
        if (text === pending.lastTimerText) {
            return;
        }
        pending.lastTimerText = text;
        if (pending.timerTextField) {
            if (!pending.timerTextField.isNull()) {
                new TextField(pending.timerTextField).text = text;
                return;
            }
        }
    }
    static queueRealAndReload(mode, secondsUntilEnd) {
        MaintenancePopupPreview.pendingReal = { mode: mode, secondsUntilEnd: secondsUntilEnd, overlayShown: false, expiresAt: Date.now() + secondsUntilEnd * 1000, timerTextField: null, lastTimerText: "", pageInstance: null };
        return;
    }
    static showOverlay(mode, secondsUntilEnd) {
        var info, page, overlayContainer, retryButton, timerTxt, text;
        GameMain.loadAsset("sc/ui.sc");
        LaserBoxManager.updateManifest();
        info = MaintenanceModeInfo.alloc(mode, secondsUntilEnd, false, MAINTENANCE_EMPTY_MESSAGE);
        LaserBoxManager.forceTabsAvailable = true;
        page = NewsPage.create(info, MAINTENANCE_EMPTY_MESSAGE, MAINTENANCE_DIALOG_TYPE);
        LaserBoxManager.forceTabsAvailable = false;
        overlayContainer = GameMain.getOverlayContainer();
        Sprite.addChild(overlayContainer, page.instance);
        page.forceOpenLandingPage();
        retryButton = page.getRetryButton();
        if (!retryButton.isNull()) {
            new DisplayObject(retryButton).visibility = 0;
        }
        timerTxt = page.getTimerTextField();
        if (!timerTxt.isNull()) {
            text = MaintenancePopupPreview.formatRemainingTime(secondsUntilEnd);
            new TextField(timerTxt).text = text;
            if (MaintenancePopupPreview.pendingReal) {
                MaintenancePopupPreview.pendingReal.timerTextField = timerTxt;
                MaintenancePopupPreview.pendingReal.lastTimerText = text;
            }
        }
        if (MaintenancePopupPreview.pendingReal) {
            MaintenancePopupPreview.pendingReal.pageInstance = page.instance;
        }
        return;
    }
    static dismissOverlay(pending) {
        var overlayContainer;
        if (pending.pageInstance) {
            if (!pending.pageInstance.isNull()) {
                overlayContainer = GameMain.getOverlayContainer();
                if (!overlayContainer.isNull()) {
                    new Sprite(overlayContainer).removeChild(pending.pageInstance);
                }
            }
        }
        return;
    }
    static formatRemainingTime(secondsUntilEnd) {
        var totalMinutes, seconds, hours, minutes, pad;
        totalMinutes = Math.floor(secondsUntilEnd / 60);
        seconds = secondsUntilEnd % 60;
        hours = Math.floor(totalMinutes / 60);
        minutes = totalMinutes % 60;
        pad = function (n) {
            return n.toString().padStart(2, "0");
        };
        if (hours > 0) {
            return "".concat(hours, ":", pad(minutes), ":", pad(seconds));
        }
        return "".concat(minutes, ":", pad(seconds));
    }
}
MaintenancePopupPreview.pendingReal = null;
MaintenancePopupPreview.lastLoggedSubState = -1;

class DebugCountryPopupPreview {
    constructor() {
    }
    static show() {
        return;
    }
}

class CollabDropPopup extends GenericPopup {
    constructor(text) {
        var movieClip, closeButton;
        if (text === undefined) {
            text = Localisation.getString("CollabDropPopupTitle");
        }
        super("popup_generic");
        movieClip = this.getMovieClip();
        this.movieClip = movieClip;
        movieClip.getMovieClipByName("button_negative").visibility = false;
        movieClip.getMovieClipByName("button_ok").visibility = false;
        movieClip.getMovieClipByName("button_no").visibility = false;
        movieClip.getMovieClipByName("button_yes").visibility = false;
        this.setTitleTid(text);
        this.textTextField = movieClip.getTextFieldByName("txt");
        this.textTextField.text = text;
        this.textTextField.shiftY(-30);
        this.textTextField.fontSize = 11;
        closeButton = this.addGameButton("button_close", 1);
        this.closeButton = closeButton;
        closeButton.setCustomButtonListener(this.closeButtonPressed.bind(this));
    }
}

var EsportTournamentsPopup_ctor = new NativeFunction(Libg.offset(10031476, 0), "void", ["pointer"]);

class EsportTournamentsPopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(EsportTournamentsPopup.allocationSize, 1);
        EsportTournamentsPopup_ctor(popupInstance);
        super(popupInstance);
    }
    static show() {
        var popup;
        popup = new EsportTournamentsPopup();
        return;
    }
}
EsportTournamentsPopup.allocationSize = 432;

var SettingsPopup_show = new NativeFunction(Libg.offset(11227664, 0), "void", []);

class SettingsPopup {
    constructor() {
    }
    static show() {
        return SettingsPopup_show();
    }
}

var SettingsPrivacyScreen_toggleHidePlayerProfile = new NativeFunction(Libg.offset(13519832, 0), "void", []);
var SettingsPrivacyScreen_openDeleteAccount = new NativeFunction(Libg.offset(13519108, 0), "void", ["pointer"]);
var privacyPreferencesOffset = LogicMemory.offset(704, 824);
var HIDE_PLAYER_PROFILE_BIT = 2;

class SettingsPrivacyScreen {
    constructor() {
    }
    static openDeleteAccount() {
        return;
    }
    static toggleHidePlayerProfile() {
        if (!HomeMode.getInstance()) {
            return;
        }
        return SettingsPrivacyScreen_toggleHidePlayerProfile();
    }
    static isHidePlayerProfileEnabled() {
        var preferences;
        preferences = SettingsPrivacyScreen.getPreferences();
        if (preferences.isNull()) {
            return false;
        }
        return (preferences.readU8() >> HIDE_PLAYER_PROFILE_BIT & 1) !== 0;
    }
    static getPreferences() {
        var avatar;
        avatar = GameStateManager.getPlayerAvatar();
        if (avatar.instance.isNull()) {
            return NULL;
        }
        return avatar.instance.add(privacyPreferencesOffset).readPointer();
    }
}

var SettingsScreen_ctor = Libg.offset(13503832, 0);
var consentChoicesButtonOffset = LogicMemory.offset(480);
var personalizedOffersInfoButtonOffset = LogicMemory.offset(504);
var personalizedOffersToggleOffset = LogicMemory.offset(512);

class SettingsScreen extends DropGUIContainer {
    constructor(instance) {
        super(instance);
    }
    removeOverlappingControls() {
        var offset, pointer, movieClip, name, field;
        for (const offset of [consentChoicesButtonOffset, personalizedOffersInfoButtonOffset, personalizedOffersToggleOffset]) {
            pointer = this.instance.add(offset).readPointer();
            if (!pointer.isNull()) {
                new DisplayObject(pointer).removeFromParent();
            }
        }
        movieClip = this.getMovieClip();
        for (const name of ["TID_SETTINGS_CONSENT_CHOICES", "TID_PERSONALIZED_OFFERS"]) {
            field = movieClip.getTextFieldByName(name);
            if (field != null) {
                field.removeFromParent();
            }
        }
        return;
    }
    static patch() {
        return;
    }
}

var SLIDER_IS_PRESSED_OFFSET = 320;
var ZOOM_SLIDER_SCALE = 100;
var SLIDER_ROW_HEIGHT = 45;
var SLIDER_X = 130;
var LABEL_X = -255;
var GROUP_Y_OFFSET = -25;
var LABEL_Y_OFFSET = -15;
var LABEL_FONT_SIZE = 22;
var DOUBLE_TAP_WINDOW_MS = 200;

class CameraSettingsPopup extends GenericPopup {
    constructor() {
        var movieClip, txtField, anchorCenterY;
        super("popup_generic");
        this.sliders = [];
        this.labels = [];
        this.tapStates = [];
        CameraSettingsPopup.openInstance = this;
        this.setTitleTid(Localisation.getString("CameraSettingsPopupTitle"));
        movieClip = this.getMovieClip();
        movieClip.getMovieClipByName("button_negative").visibility = false;
        movieClip.getMovieClipByName("button_no").visibility = false;
        movieClip.getMovieClipByName("button_yes").visibility = false;
        movieClip.getMovieClipByName("button_ok").visibility = false;
        txtField = movieClip.getTextFieldByName("txt");
        anchorCenterY = txtField.y;
        txtField.visibility = false;
        this.createCloseButton();
        this.createSliders(anchorCenterY);
        this.refreshLabels();
    }
    createCloseButton() {
        var closeButton;
        closeButton = this.addGameButton("button_close", 1);
        return;
    }
    createSliders(anchorCenterY) {
        var popupClip, sliderCount, firstSliderY;
        popupClip = this.getMovieClip();
        sliderCount = CameraSettingsPopup.SLIDER_SPECS.length;
        firstSliderY = anchorCenterY - (sliderCount - 1) * SLIDER_ROW_HEIGHT / 2 + GROUP_Y_OFFSET;
        return;
    }
    refreshLabels() {
        return;
    }
    resetSlider(index) {
        var spec, slider;
        spec = CameraSettingsPopup.SLIDER_SPECS[index];
        slider = this.sliders[index];
        slider.setValue(spec.defaultValue);
        slider.instance.add(SLIDER_IS_PRESSED_OFFSET).writeU8(0);
        return;
    }
    updateElements(deltaTime) {
        var anyChanged, now;
        anyChanged = false;
        now = Date.now();
        CameraSettingsPopup.SLIDER_SPECS.forEach((spec, index) => {
            var slider, state, isPressed, tapStarted, before, after;
            slider = this.sliders[index];
            if (slider.isNull()) {
                return;
            }
            state = this.tapStates[index];
            isPressed = (slider.instance.add(SLIDER_IS_PRESSED_OFFSET).readU8() & 1) !== 0;
            if (isPressed) {
                tapStarted = !state.wasPressed;
            }
            state.wasPressed = isPressed;
            if (tapStarted) {
                if (state.lastTapStartTime > 0) {
                    if (now - state.lastTapStartTime < DOUBLE_TAP_WINDOW_MS) {
                        this.resetSlider(index);
                        state.lastTapStartTime = 0;
                        anyChanged = true;
                        return;
                    }
                }
                state.lastTapStartTime = now;
            }
            before = slider.getValue();
            slider.update(deltaTime);
            after = slider.getValue();
            if (before !== after) {
                CameraSettingsPopup.applySliderValue(spec, after);
                anyChanged = true;
                return;
            }
        });
        if (anyChanged) {
            this.refreshLabels();
            return;
        }
    }
    closeButtonPressed(self, button) {
        if (CameraSettingsPopup.openInstance === this) {
            CameraSettingsPopup.openInstance = null;
        }
        return;
    }
    onDestructed() {
        if (CameraSettingsPopup.openInstance === this) {
            CameraSettingsPopup.openInstance = null;
            return;
        }
    }
    syncSlidersFromBattleCamera() {
        CameraSettingsPopup.SLIDER_SPECS.forEach((spec, index) => {
            var slider;
            slider = this.sliders[index];
            if (slider.isNull()) {
                return;
            }
            slider.setValue(CameraSettingsPopup.readSliderValue(spec));
            return;
        });
        return;
    }
    formatValue(spec, value) {
        if (spec.key === "zoom") {
            return (value / ZOOM_SLIDER_SCALE).toFixed(2) + "x";
        }
        return value.toString();
    }
    static readSliderValue(spec) {
        if (spec.key === "zoom") {
            return Math.round(BattleCamera.zoomMultiplier * ZOOM_SLIDER_SCALE);
        }
        if (spec.key === "cameraX") {
            return BattleCamera.cameraXOffset;
        }
        if (spec.key === "cameraY") {
            return BattleCamera.cameraYOffset;
        }
        if (spec.key === "cameraZ") {
            return BattleCamera.cameraZOffset;
        }
        if (spec.key === "tilt") {
            return BattleCamera.tiltOffset;
        }
    }
    static applySliderValue(spec, value) {
        if (spec.key === "zoom") {
            BattleCamera.zoomMultiplier = value / ZOOM_SLIDER_SCALE;
        } else if (spec.key === "cameraX") {
            BattleCamera.cameraXOffset = value;
        } else if (spec.key === "cameraY") {
            BattleCamera.cameraYOffset = value;
        } else if (spec.key === "cameraZ") {
            BattleCamera.cameraZOffset = value;
        } else if (spec.key === "tilt") {
            BattleCamera.tiltOffset = value;
        }
    }
    static show() {
        return;
    }
    resetAll() {
        var instance;
        BattleCamera.reset();
        instance = CameraSettingsPopup.openInstance;
        if (instance) {
            if (!instance.instance.isNull()) {
                instance.syncSlidersFromBattleCamera();
                return;
            }
        }
    }
}
CameraSettingsPopup.SLIDER_SPECS = [{ key: "zoom", labelKey: "CameraSettingsZoom", minValue: 0, maxValue: 200, defaultValue: 100 }, { key: "cameraZ", labelKey: "CameraSettingsHeight", minValue: -10000, maxValue: 10000, defaultValue: 0 }, { key: "cameraX", labelKey: "CameraSettingsPanX", minValue: -10000, maxValue: 10000, defaultValue: 0 }, { key: "cameraY", labelKey: "CameraSettingsPanY", minValue: -10000, maxValue: 10000, defaultValue: 0 }, { key: "tilt", labelKey: "CameraSettingsTilt", minValue: -10000, maxValue: 10000, defaultValue: 0 }];
CameraSettingsPopup.openInstance = null;

var BADGE_GROUP_COUNT = 6;
var BADGES_PER_GROUP = 10;

class BadgePreviewPopup extends ListContainerPopup {
    constructor() {
        super({ Title: "BADGES" });
        this.adjustPopupHeaderButtons("badge_preview");
        this.refreshItems();
    }
    refreshItems() {
        var group, index, badgeClip, badgeButton, naviHeight;
        this.container.clearEntries();
        group = 1;
        while (group <= BADGE_GROUP_COUNT) {
            index = 1;
            while (index <= BADGES_PER_GROUP) {
                badgeClip = StringTable.getMovieClip_safe("sc/ui.sc", BadgePreviewPopup.badgeExportName(group, index));
                if (badgeClip) {
                    badgeButton = new GameButton();
                    badgeButton.setMovieClip(badgeClip, true);
                    this.container.addEntry(badgeButton);
                }
                index = index + 1;
            }
            group = group + 1;
        }
        naviHeight = this.getNaviHeight();
        this.container.refreshEntryPositions(4, naviHeight, 2, 0, 0, 0, -1);
        return;
    }
    static badgeExportName(group, index) {
        return "clan_badge_".concat(BadgePreviewPopup.padTwo(group), "_", BadgePreviewPopup.padTwo(index));
    }
    static padTwo(n) {
        return n.toString().padStart(2, "0");
    }
}

class BadgePreview {
    constructor() {
    }
    static show() {
        return;
    }
}

var TeamPopup_ctor = Libg.offset(10885736, 0);
var dropGUIContainerMovieClipOffset = 144;
var TeamPopup_ownTeamEntryOffset = 296;
var disabledSlotsListOffset = 80;
var logicArrayListCountOffset = 12;

class TeamPopup {
    constructor() {
    }
    static isFriendly() {
        return TeamManager.isFriendly();
    }
    static getDisabledSlotIndices() {
        var result, ownTeamEntry, arrayListPointer, dataPointer, elementCount, i, e;
        result = new Set();
        if (TeamPopup.instance.isNull()) {
            return result;
        }
        try {
            ownTeamEntry = TeamPopup.instance.add(TeamPopup_ownTeamEntryOffset).readPointer();
            if (ownTeamEntry.isNull()) {
                return result;
            }
            arrayListPointer = ownTeamEntry.add(disabledSlotsListOffset).readPointer();
            if (arrayListPointer.isNull()) {
                return result;
            }
            dataPointer = arrayListPointer.readPointer();
            elementCount = arrayListPointer.add(logicArrayListCountOffset).readS32();
            i = 0;
            while (i < elementCount) {
                result.add(dataPointer.add(i * 4).readS32());
                i = i + 1;
            }
            return result;
        } catch (e) {
            return result;
        }
    }
    static patch() {
        return;
    }
}
TeamPopup.instance = NULL;

var DELIVERY_UNIT_TYPE = 100;

class PassRewardPreview {
    constructor() {
    }
    static showBrawlPass() {
        var popup;
        popup = new BrawlPassAutoCollectRewardsPopup(0, 0, 0);
        popup.setData(PassRewardPreview.buildDeliveryList());
        return;
    }
    static buildDeliveryList() {
        var unit, list;
        unit = new DeliveryUnit(DELIVERY_UNIT_TYPE);
        unit.addDrop(new LogicGatchaDrop(LogicGatchaDrop.EGatchaDropTypes.GOLD, 1000));
        list = new LogicArrayList(1);
        list.addElement(unit.instance);
        return list;
    }
}

var MoviePlayerPopup_ctor = new NativeFunction(Libg.offset(13196904, 0), "void", ["pointer", "int"]);
var MoviePlayerPopup_show = new NativeFunction(Libg.offset(13196788, 0), "void", ["pointer"]);

class MoviePlayerPopup extends GenericPopup {
    constructor() {
        var popupInstance;
        popupInstance = Libc.calloc(MoviePlayerPopup.allocationSize, 1);
        MoviePlayerPopup_ctor(popupInstance, 0);
        super(popupInstance);
    }
    static patch() {
        return;
    }
    static show() {
        var popup;
        popup = new MoviePlayerPopup();
        return;
    }
}
MoviePlayerPopup.allocationSize = 424;
