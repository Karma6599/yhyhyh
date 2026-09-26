//============================================================================//
// MOD FEATURE: Visual name change
// In-game name: "Visual name change"  (TID: VisualNameChange)
// Menu: Mod Menu — Lobby + Battle tab(s) (menu/mod-menu.js#8203)
// Input popup framework + PlayerDisplayData: name override (Config.PlayerNameOverride), chromatic name and visual name decorations.
//============================================================================//

// --------------------- MODULE 6012 — InputPopup ---------------------


// ============================================================ //
// webpack module 6012  —  InputPopup
// exports: EInputPopupType, InputPopup
// deps: 211 (TextFieldHelper), 275 (FamePopup), 567 (GiveByGlobalId), 612 (MovieClip), 699 (FileManager), 1588 (LogicMemory), 2141 (TSChaCha20), 2556 (BSDPlusManager), 2598 (BSDSetTitleMessage), 3380 (Logcat), 4009 (Config), 4111 (SharedReplay), 4272 (EDebugger), 4541 (HashTagCodeGenerator), 4934 (GUI), 5039 (GameButton), 5200 (AllianceManager), 5281 (BSDMessageManager), 6193 (GenericPopup), 6761 (StartSCUtilsSpectateMessage) ...
// ============================================================ //

__webpack_modules__[6012] = function InputPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GenericPopup, GameInputField, Localisation, Config, FileManager, GameMain, HashTagCodeGenerator, GUI, PlayerInfo, AllianceManager, MovieClip, GameButton, LogicMemory, CustomTextEncoder, EDebugger, BSDMessageManager, LinkBSDPlusMessage, BSDApi, TSChaCha20, TextFieldHelper, BSDSetTitleMessage, index, GiveByGlobalId, StringObject, HomeScreen, FamePopup, SharedReplay, StartSCUtilsSpectateMessage, Logcat, BSDPlusManager, BSDPlusManagementPopup, popupMovieClipOffset_, popupMovieClipOffset, EInputPopupType, InputPopup, <class_fields_init>, InputPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EInputPopupType = undefined;
        undefined.InputPopup = exports;
        GenericPopup = __webpack_require__(6193);
        GameInputField = __webpack_require__(8674);
        Localisation = __webpack_require__(7265);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GameMain = __webpack_require__(8775);
        HashTagCodeGenerator = __webpack_require__(4541);
        GUI = __webpack_require__(4934);
        PlayerInfo = __webpack_require__(9518);
        AllianceManager = __webpack_require__(5200);
        MovieClip = __webpack_require__(612);
        GameButton = __webpack_require__(5039);
        LogicMemory = __webpack_require__(1588);
        CustomTextEncoder = __webpack_require__(9724);
        EDebugger = __webpack_require__(4272);
        BSDMessageManager = __webpack_require__(5281);
        LinkBSDPlusMessage = __webpack_require__(7508);
        BSDApi = __webpack_require__(7474);
        TSChaCha20 = __webpack_require__(2141);
        TextFieldHelper = __webpack_require__(211);
        BSDSetTitleMessage = __webpack_require__(2598);
        index = __webpack_require__(8156);
        GiveByGlobalId = __webpack_require__(567);
        StringObject = __webpack_require__(7535);
        HomeScreen = __webpack_require__(8569);
        FamePopup = __webpack_require__(275);
        SharedReplay = __webpack_require__(4111);
        StartSCUtilsSpectateMessage = __webpack_require__(6761);
        Logcat = __webpack_require__(3380);
        BSDPlusManager = __webpack_require__(2556);
        BSDPlusManagementPopup = __webpack_require__(7906);
        popupMovieClipOffset_ = ((LogicMemory).LogicMemory).offset(144);
        popupMovieClipOffset = ((LogicMemory).LogicMemory).offset(416);
        if (!EInputPopupType) {
            exports.EInputPopupType = PlayerInfo = {};
        } /* if 0xc5bf6 */
        PlayerInfo = {}(exports);
        static createInputField () {
    var textInputButton, movieClip, textField;
        textInputButton = (this).addPopupButton("team_code_input", 2, "");
        movieClip = (textInputButton).getMovieClip();
        textField = (movieClip).getTextFieldByName("text");
        this.inputField = new (GameInputField).GameInputField(textField, (this).instance);
        ((this).inputField).setScaleTextIfNeeded(true);
        if ((this).isAddSpectatorsPopup()) {
        } /* if 0xc63bf */
        /* jump -> 0xc63c1 */
        (textInputButton).setCustomButtonListener(((this).onInputFieldClicked).bind(this), "input_field_button");
        return;
};
        static onInputFieldClicked (self, button) {
        return;
};
        static buttonPressed (self, button) {
        if (((this).popupType === (EInputPopupType).CHANGE_NAME)) {
            (this).handleChangeNameType();
        } /* if 0xc6477 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).OPEN_PROFILE)) {
            (this).handleOpenProfileType();
        } /* if 0xc648e */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).PLUS_LINK)) {
            (this).handleLinkBSDPlusType();
        } /* if 0xc64a5 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).SET_TITLE)) {
            (this).handleSetTitleType();
        } /* if 0xc64bc */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).GIVE_BY_GLOBAL_ID)) {
            (this).handleGiveByGlobalIdType();
        } /* if 0xc64d3 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).GIVE_FROM_CONTAINER_PICK_CONTAINER)) {
            (this).handleGiveFromContainerPickContainer();
        } /* if 0xc64ea */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).GIVE_FROM_CONTAINER_PICK_ITEM)) {
            (this).handleGiveFromContainerPickItem();
        } /* if 0xc6501 */
        /* jump -> 0xc6586 */
        if (((this).popupType === (EInputPopupType).SPECTATE_FRIEND_BY_TAG)) {
            (this).handleSpectateFriendByTagType();
        } /* if 0xc6517 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).JOIN_CLAN_BY_TAG)) {
            (this).handleJoinClanByTagType();
        } /* if 0xc652d */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).SHOW_FAME)) {
            (this).handleShowFameType();
        } /* if 0xc6543 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).WATCH_SHARED_REPLAY)) {
            (this).handleWatchSharedReplayType();
        } /* if 0xc6559 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).ADD_SPECTATORS)) {
            (this).handleAddSpectatorsType(false);
        } /* if 0xc6570 */
        /* jump -> 0xc6585 */
        if (((this).popupType === (EInputPopupType).ADD_SPECTATORS_BRAWLTV)) {
            (this).handleAddSpectatorsType(true);
            return;
        } /* if 0xc6585 (open) */
};
        static handleSpectateFriendByTagType () {
    var tag, playerIdLogicLong;
        tag = ((((this).inputField).getInputText()).trim()).toUpperCase();
        if ((!tag)) {
            return;
        } /* if 0xc660f */
        if ((!(0).every(function (c) {
        return (1).includes(c);
}))) {
            return;
        } /* if 0xc664b */
        playerIdLogicLong = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(tag);
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleJoinClanByTagType () {
    var tag, clanIdLogicLong, tagStringNative;
        tag = ((((this).inputField).getInputText()).trim()).toUpperCase();
        if ((!tag)) {
            return;
        } /* if 0xc6745 */
        if ((!(0).every(function (c) {
        return (1).includes(c);
}))) {
            return;
        } /* if 0xc6781 */
        clanIdLogicLong = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(tag);
        tagStringNative = ((StringObject).StringObject).createNative(tag);
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleShowFameType () {
    var fame;
        fame = parseInt((((this).inputField).getInputText()).trim(), 10);
        if (!(!(Number).isFinite(fame))) {
            (!(Number).isFinite(fame));
            if ((fame < 0)) {
                return;
            } /* if 0xc6887 */
        } /* if 0xc6884 */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleWatchSharedReplayType () {
    var code;
        code = (((this).inputField).getInputText()).trim();
        if ((!code)) {
            return;
        } /* if 0xc68fe */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleAddSpectatorsType (isBrawlTV) {
    var count;
        count = parseInt((((this).inputField).getInputText()).trim(), 10);
        if (!(!(Number).isFinite(count))) {
            (!(Number).isFinite(count));
            if ((count <= 0)) {
                return;
            } /* if 0xc69af */
        } /* if 0xc69ac */
        if ((count > 5000)) {
            return;
        } /* if 0xc69de */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static isAddSpectatorsPopup () {
        if (!((this).popupType === (EInputPopupType).ADD_SPECTATORS)) {
            ((this).popupType === (EInputPopupType).ADD_SPECTATORS);
            return ((this).popupType === (EInputPopupType).ADD_SPECTATORS_BRAWLTV);
        } /* if 0xc6c49 (open) */
};
        static handleChangeNameType () {
        ((Config).Config).config.PlayerNameOverride = ((this).inputField).getInputText();
        ((this).inputField).activate(false);
        ((FileManager).FileManager).updateConfigFile();
        return;
};
        static handleOpenProfileType () {
    var inputText, playerIdLogicLong, playerInfo;
        inputText = ((((this).inputField).getInputText()).trim()).toUpperCase();
        if ((!inputText)) {
            return;
        } /* if 0xc6d35 */
        if ((!(0).every(function (c) {
        return (1).includes(c);
}))) {
            return;
        } /* if 0xc6d71 */
        playerIdLogicLong = ((HashTagCodeGenerator).HashTagCodeGenerator).convertPlayerTagToLong(inputText);
        playerInfo = new (PlayerInfo).PlayerInfo(playerIdLogicLong);
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleLinkBSDPlusType () {
    var inputText;
        inputText = ((((this).inputField).getInputText()).toLowerCase()).replace(" ", "");
        if (!(!inputText)) {
            if (!(inputText.length < 4)) {
                if ((new RegExp("[^a-z0-9_@]", "\u0002\u0001\u0000#\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u0015\u0004\u0000\u0000\u0000/\u0000:\u0000?\u0000[\u0000^\u0000`\u0000ÿÿ\f\u0000\n")).test(inputText)) {
                    /* return_async  */
                } /* if 0xc6ea7 */
            } /* if 0xc6ea3 */
        } /* if 0xc6ea3 */
        (((BSDMessageManager).BSDMessageManager).sendMessage(new (LinkBSDPlusMessage).LinkBSDPlusMessage(inputText))).then(function (response) {
    var parsedResponseData, chaCha20, decryptedResponse, parsedResponse, isValid, popup, locale;
        if (((response).statusCode !== 200)) {
            return;
        } /* if 0xc6fc6 */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        parsedResponse = (JSON).parse(decryptedResponse);
        isValid = ((BSDMessageManager).BSDMessageManager).validateMessage(parsedResponse);
        if ((!isValid)) {
            return;
        } /* if 0xc705e */
        if (((parsedResponse).status === "ok")) {
            if (((parsedResponse).reason === "successfully_linked")) {
                (this).closeWithKeyboard();
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("BSDPlusSuccessfullyLinked"));
                if ((parsedResponse).telegram) {
                    (BSDPlusManager).BSDPlusManager.telegramData = (parsedResponse).telegram;
                    popup = ((GUI).GUI).getPopupByConstructpr((BSDPlusManagementPopup).BSDPlusManagementPopup);
                    if (popup) {
                        (popup).onAccountLinked();
                    } /* if 0xc7136 */
                } /* if 0xc7136 */
            } /* if 0xc710a */
            /* jump -> 0xc7136 */
            if (((BSDPlusManager).BSDPlusManager === "notify_has_been_sent")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("BSDPlusSentLinkRequest"));
            } /* if 0xc7136 */
        } /* if 0xc713c */
        /* jump -> 0xc719b */
        if ((popup = (parsedResponse).reason === "error")) {
            if (((((BSDApi).BSDApi).RESPONSE_TO_LOCALE[(parsedResponse).reason]) == null)) {
                locale = "Unknown error";
            } /* if 0xc716d */
            if ((!locale)) {
                return;
            } /* if 0xc7176 */
            ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString(locale));
            locale = (parsedResponse).reason;
            return;
        } /* if 0xc719b (open) */
});
        /* return_async  */
};
        static handleGiveByGlobalIdType () {
    var text, globalId;
        text = (((this).inputField).getInputText()).trim();
        globalId = parseInt(text, 10);
        if (!(!(Number).isFinite(globalId))) {
            (!(Number).isFinite(globalId));
            if ((globalId <= 0)) {
                return;
            } /* if 0xc722f */
        } /* if 0xc722c */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleGiveFromContainerPickContainer () {
    var text, containerId;
        text = (((this).inputField).getInputText()).trim();
        containerId = parseInt(text, 10);
        if (!(!(Number).isFinite(containerId))) {
            (!(Number).isFinite(containerId));
            if ((containerId < 0)) {
                return;
            } /* if 0xc72e2 */
        } /* if 0xc72df */
        ((this).inputField).activate(false);
        (this).fadeOut();
        ((GiveByGlobalId).GiveByGlobalId).rememberContainerId(containerId);
        return;
};
        static handleGiveFromContainerPickItem () {
    var text, globalId;
        text = (((this).inputField).getInputText()).trim();
        globalId = parseInt(text, 10);
        if (!(!(Number).isFinite(globalId))) {
            (!(Number).isFinite(globalId));
            if ((globalId <= 0)) {
                return;
            } /* if 0xc73a7 */
        } /* if 0xc73a4 */
        ((this).inputField).activate(false);
        (this).fadeOut();
        return;
};
        static handleSetTitleType () {
    var title;
        title = ((this).inputField).getInputText();
        (((BSDMessageManager).BSDMessageManager).sendMessage(new (BSDSetTitleMessage).BSDSetTitleMessage(title))).then(function (response) {
    var parsedResponseData, chaCha20, decryptedResponse, parsedResponse, locale;
        if (((response).statusCode !== 200)) {
            return;
        } /* if 0xc7509 */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        parsedResponse = (JSON).parse(decryptedResponse);
        (index).LogInfo((JSON).stringify(parsedResponse));
        if (((parsedResponse).status === "ok")) {
            ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleSuccessfullySet"));
        } /* if 0xc75d9 */
        /* jump -> 0xc76d4 */
        if (((parsedResponse).status === "error")) {
            if ((locale = (parsedResponse).reason === "too_long_title")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleTooLongTitle"));
            } /* if 0xc7622 */
            /* jump -> 0xc76d3 */
            if ((locale = (parsedResponse).reason === "illegal_symbols")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleIllegalSymbols"));
            } /* if 0xc7654 */
            /* jump -> 0xc76d3 */
            if ((locale = (parsedResponse).reason === "bad_request")) {
                ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString("CustomTitleBadRequest"));
            } /* if 0xc7685 */
            /* jump -> 0xc76d2 */
            if (((((BSDApi).BSDApi).RESPONSE_TO_LOCALE[(parsedResponse).reason]) == null)) {
                locale = "Unknown error";
            } /* if 0xc76a5 */
            if ((!locale)) {
                return;
            } /* if 0xc76ae */
            ((GUI).GUI).pushFloaterTextToQueue(((Localisation).Localisation).getString(locale));
            locale = (parsedResponse).reason;
            return;
        } /* if 0xc76d6 (open) */
});
        return;
};
        static updateElements (deltaTime) {
        if ((!(((this).inputField).instance).isNull())) {
            ((this).inputField).update(deltaTime);
            return;
        } /* if 0xc7736 (open) */
};
        <class_fields_init> = undefined;
        InputPopup;
        class InputPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor (type) {
    var button, popupMovieClip, closeButton, inputArea, hintTextField, inputArea, hintTextField, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super("gameroom_joincode_popup", false, false, "", "", "");
        if (<class_fields_init>) {
        } /* if 0xc6056 */
        this.popupType = type;
        (this).setTitleTid(((Localisation).Localisation).getString((InputPopup).POPUP_NAMES[type]));
        button = (this).addPopupButton("join_button", 1, ((Localisation).Localisation).getString((InputPopup).CONFIRM_BUTTON_TEXTS[type]));
        (button).setCustomButtonListener(((this).buttonPressed).bind(this), "input_confirm_button");
        popupMovieClip = new (MovieClip).MovieClip((((((this).instance).add(popupMovieClipOffset)).readPointer()).add(popupMovieClipOffset_)).readPointer());
        closeButton = new (GameButton).GameButton(((popupMovieClip).getChildByName("close_button")).instance);
        (closeButton).setCustomButtonListener(((this).closeWithKeyboard).bind(this));
        (this).createInputField();
        if (((InputPopup).POPUP_NAMES[type] === "VisualNameChange")) {
            inputArea = ((this).getMovieClip()).getChildByName("team_code_input");
            hintTextField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
            hintTextField.x = (((inputArea).x / 2) - 150);
            hintTextField.y = ((inputArea).y - 55);
            hintTextField.fontOutline = true;
            hintTextField.fontSize = 16;
            hintTextField.color = 4294967295.0;
            hintTextField.text = ((Localisation).Localisation).getString("VisualChangeNameResetHint");
            ((this).getMovieClip()).addChild(hintTextField);
        } /* if 0xc6222 */
        if (((InputPopup).POPUP_NAMES[type] === "SetTitle")) {
            inputArea = ((this).getMovieClip()).getChildByName("team_code_input");
            hintTextField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
            hintTextField.x = (((inputArea).x / 2) - 150);
            hintTextField.y = ((inputArea).y - 55);
            hintTextField.fontOutline = true;
            hintTextField.fontSize = 16;
            hintTextField.color = 4294967295.0;
            hintTextField.text = ((Localisation).Localisation).getString("VisualChangeTitleResetHint");
            ((this).getMovieClip()).addChild(hintTextField);
            return this;
        } /* if 0xc62e3 (open) */
}
        }
        InputPopup = PlayerInfo = InputPopup;
        exports.InputPopup = InputPopup;
        InputPopup.allocationSize = 768;
        InputPopup.lastTimePressedActiveButton = 0;
        InputPopup.POPUP_NAMES = { 0: "VisualNameChange", 1: "OpenPlayerProfile", 2: "FollowPlayerByTag", 3: "LinkBSDPlusInputFieldTitle", 4: "GetBSDPlusState", 5: "SetTitle", 6: "GiveByGlobalIdInputTitle", 7: "GiveFromContainerPickContainerInputTitle", 8: "GiveFromContainerPickItemInputTitle", 9: "SpectateFriendByTagInputTitle", 10: "JoinClanByTagInputTitle", 11: "ShowFameInputTitle", 12: "WatchSharedReplayInputTitle", 13: "AddSpectatorsInputTitle", 14: "AddSpectatorsBrawlTvInputTitle" };
        InputPopup.CONFIRM_BUTTON_TEXTS = { 0: "VisualNameChangeButton", 1: "OpenPlayerProfileButton", 2: "FollowPlayerByTagButton", 3: "LinkBSDPlusButton", 4: "", 5: "SetTitleButton", 6: "GiveByGlobalIdButton", 7: "GiveFromContainerNextButton", 8: "GiveByGlobalIdButton", 9: "SpectateButton", 10: "JoinClanByTagButton", 11: "ShowFameButton", 12: "WatchSharedReplayButton", 13: "AddSpectatorsButton", 14: "AddSpectatorsButton" };
        return;
};

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

