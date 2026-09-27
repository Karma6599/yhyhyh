var EInputPopupType;
(function (EInputPopupType) {
    EInputPopupType["CHANGE_NAME"] = 0;
    EInputPopupType[0] = "CHANGE_NAME";
    EInputPopupType["OPEN_PROFILE"] = 1;
    EInputPopupType[1] = "OPEN_PROFILE";
    EInputPopupType["FOLLOW_PLAYER"] = 2;
    EInputPopupType[2] = "FOLLOW_PLAYER";
    EInputPopupType["PLUS_LINK"] = 3;
    EInputPopupType[3] = "PLUS_LINK";
    EInputPopupType["GET_BSD_PLUS_STATE"] = 4;
    EInputPopupType[4] = "GET_BSD_PLUS_STATE";
    EInputPopupType["SET_TITLE"] = 5;
    EInputPopupType[5] = "SET_TITLE";
    EInputPopupType["GIVE_BY_GLOBAL_ID"] = 6;
    EInputPopupType[6] = "GIVE_BY_GLOBAL_ID";
    EInputPopupType["GIVE_FROM_CONTAINER_PICK_CONTAINER"] = 7;
    EInputPopupType[7] = "GIVE_FROM_CONTAINER_PICK_CONTAINER";
    EInputPopupType["GIVE_FROM_CONTAINER_PICK_ITEM"] = 8;
    EInputPopupType[8] = "GIVE_FROM_CONTAINER_PICK_ITEM";
    EInputPopupType["SPECTATE_FRIEND_BY_TAG"] = 9;
    EInputPopupType[9] = "SPECTATE_FRIEND_BY_TAG";
    EInputPopupType["JOIN_CLAN_BY_TAG"] = 10;
    EInputPopupType[10] = "JOIN_CLAN_BY_TAG";
    EInputPopupType["SHOW_FAME"] = 11;
    EInputPopupType[11] = "SHOW_FAME";
    EInputPopupType["WATCH_SHARED_REPLAY"] = 12;
    EInputPopupType[12] = "WATCH_SHARED_REPLAY";
    EInputPopupType["ADD_SPECTATORS"] = 13;
    EInputPopupType[13] = "ADD_SPECTATORS";
    EInputPopupType["ADD_SPECTATORS_BRAWLTV"] = 14;
    EInputPopupType[14] = "ADD_SPECTATORS_BRAWLTV";
})(EInputPopupType || (EInputPopupType = {}));

var popupMovieClipOffset_ = LogicMemory.LogicMemory.offset(144);
var popupMovieClipOffset = LogicMemory.LogicMemory.offset(416);

class InputPopup extends GenericPopup.GenericPopup {
    constructor(type) {
        super("gameroom_joincode_popup", false, false, "", "", "");
        this.popupType = type;
        this.setTitleTid(Localisation.Localisation.getString(InputPopup.POPUP_NAMES[type]));
        var button = this.addPopupButton("join_button", 1, Localisation.Localisation.getString(InputPopup.CONFIRM_BUTTON_TEXTS[type]));
        button.setCustomButtonListener(this.buttonPressed.bind(this), "input_confirm_button");
        var popupMovieClip = new MovieClip.MovieClip(this.instance.add(popupMovieClipOffset).readPointer().add(popupMovieClipOffset_).readPointer());
        var closeButton = new GameButton.GameButton(popupMovieClip.getChildByName("close_button").instance);
        closeButton.setCustomButtonListener(this.closeWithKeyboard.bind(this));
        this.createInputField();
        if (InputPopup.POPUP_NAMES[type] === "VisualNameChange") {
            var inputArea = this.getMovieClip().getChildByName("team_code_input");
            var hintTextField = TextFieldHelper.TextFieldHelper.createTextTextField();
            hintTextField.x = (inputArea.x / 2) - 150;
            hintTextField.y = inputArea.y - 55;
            hintTextField.fontOutline = true;
            hintTextField.fontSize = 16;
            hintTextField.color = 4294967295.0;
            hintTextField.text = Localisation.Localisation.getString("VisualChangeNameResetHint");
            this.getMovieClip().addChild(hintTextField);
        }
        if (InputPopup.POPUP_NAMES[type] === "SetTitle") {
            var inputArea = this.getMovieClip().getChildByName("team_code_input");
            var hintTextField = TextFieldHelper.TextFieldHelper.createTextTextField();
            hintTextField.x = (inputArea.x / 2) - 150;
            hintTextField.y = inputArea.y - 55;
            hintTextField.fontOutline = true;
            hintTextField.fontSize = 16;
            hintTextField.color = 4294967295.0;
            hintTextField.text = Localisation.Localisation.getString("VisualChangeTitleResetHint");
            this.getMovieClip().addChild(hintTextField);
        }
    }

    createInputField() {
        var textInputButton = this.addPopupButton("team_code_input", 2, "");
        var movieClip = textInputButton.getMovieClip();
        var textField = movieClip.getTextFieldByName("text");
        this.inputField = new GameInputField.GameInputField(textField, this.instance);
        this.inputField.setScaleTextIfNeeded(true);
        textInputButton.setCustomButtonListener(this.onInputFieldClicked.bind(this), "input_field_button");
    }

    onInputFieldClicked(self, button) {
        this.inputField.activate(true);
    }

    buttonPressed(self, button) {
        if (this.popupType === EInputPopupType.CHANGE_NAME) {
            this.handleChangeNameType();
        }
        if (this.popupType === EInputPopupType.OPEN_PROFILE) {
            this.handleOpenProfileType();
        }
        if (this.popupType === EInputPopupType.PLUS_LINK) {
            this.handleLinkBSDPlusType();
        }
        if (this.popupType === EInputPopupType.SET_TITLE) {
            this.handleSetTitleType();
        }
        if (this.popupType === EInputPopupType.GIVE_BY_GLOBAL_ID) {
            this.handleGiveByGlobalIdType();
        }
        if (this.popupType === EInputPopupType.GIVE_FROM_CONTAINER_PICK_CONTAINER) {
            this.handleGiveFromContainerPickContainer();
        }
        if (this.popupType === EInputPopupType.GIVE_FROM_CONTAINER_PICK_ITEM) {
            this.handleGiveFromContainerPickItem();
        }
        if (this.popupType === EInputPopupType.SPECTATE_FRIEND_BY_TAG) {
            this.handleSpectateFriendByTagType();
        }
        if (this.popupType === EInputPopupType.JOIN_CLAN_BY_TAG) {
            this.handleJoinClanByTagType();
        }
        if (this.popupType === EInputPopupType.SHOW_FAME) {
            this.handleShowFameType();
        }
        if (this.popupType === EInputPopupType.WATCH_SHARED_REPLAY) {
            this.handleWatchSharedReplayType();
        }
        if (this.popupType === EInputPopupType.ADD_SPECTATORS) {
            this.handleAddSpectatorsType(false);
        }
        if (this.popupType === EInputPopupType.ADD_SPECTATORS_BRAWLTV) {
            this.handleAddSpectatorsType(true);
        }
    }

    handleSpectateFriendByTagType() {
        var tag = this.inputField.getInputText().trim().toUpperCase();
        if (!tag) {
            return;
        }
        if (!tag.split("").every(function (c) {
            return HashTagCodeGenerator.HashTagCodeGenerator.CONVERSION_CHARS.includes(c);
        })) {
            return;
        }
        var playerIdLogicLong = HashTagCodeGenerator.HashTagCodeGenerator.convertPlayerTagToLong(tag);
        this.inputField.activate(false);
        this.fadeOut();
    }

    handleJoinClanByTagType() {
        var tag = this.inputField.getInputText().trim().toUpperCase();
        if (!tag) {
            return;
        }
        if (!tag.split("").every(function (c) {
            return HashTagCodeGenerator.HashTagCodeGenerator.CONVERSION_CHARS.includes(c);
        })) {
            return;
        }
        var clanIdLogicLong = HashTagCodeGenerator.HashTagCodeGenerator.convertPlayerTagToLong(tag);
        var tagStringNative = StringObject.StringObject.createNative(tag);
        this.inputField.activate(false);
        this.fadeOut();
    }

    handleShowFameType() {
        var fame = parseInt(this.inputField.getInputText().trim(), 10);
        if (!Number.isFinite(fame) || fame < 0) {
            return;
        }
        this.inputField.activate(false);
        this.fadeOut();
        FamePopup.FamePopup.show(fame);
    }

    handleWatchSharedReplayType() {
        var code = this.inputField.getInputText().trim();
        if (!code) {
            return;
        }
        this.inputField.activate(false);
        this.fadeOut();
        SharedReplay.SharedReplay.pendingCode = code;
    }

    handleAddSpectatorsType(isBrawlTV) {
        var count = parseInt(this.inputField.getInputText().trim(), 10);
        if (!Number.isFinite(count) || count <= 0) {
            return;
        }
        if (count > 5000) {
            return;
        }
        this.inputField.activate(false);
        this.fadeOut();
        BSDMessageManager.BSDMessageManager.sendMessage(new StartSCUtilsSpectateMessage.StartSCUtilsSpectateMessage(count, isBrawlTV));
    }

    isAddSpectatorsPopup() {
        if (this.popupType !== EInputPopupType.ADD_SPECTATORS) {
            return this.popupType === EInputPopupType.ADD_SPECTATORS_BRAWLTV;
        }
        return true;
    }

    handleChangeNameType() {
        Config.Config.config.PlayerNameOverride = this.inputField.getInputText();
        this.inputField.activate(false);
        FileManager.FileManager.updateConfigFile();
    }

    handleOpenProfileType() {
        var inputText = this.inputField.getInputText().trim().toUpperCase();
        if (!inputText) {
            return;
        }
        if (!inputText.split("").every(function (c) {
            return HashTagCodeGenerator.HashTagCodeGenerator.CONVERSION_CHARS.includes(c);
        })) {
            return;
        }
        var playerIdLogicLong = HashTagCodeGenerator.HashTagCodeGenerator.convertPlayerTagToLong(inputText);
        var playerInfo = new PlayerInfo.PlayerInfo(playerIdLogicLong);
        this.inputField.activate(false);
        this.fadeOut();
    }

    handleLinkBSDPlusType() {
        var inputText = this.inputField.getInputText().toLowerCase().replace(" ", "");
        if (!inputText || inputText.length < 4 || new RegExp("[^a-z0-9_@]", "g").test(inputText)) {
            return;
        }
        BSDMessageManager.BSDMessageManager.sendMessage(new LinkBSDPlusMessage.LinkBSDPlusMessage(inputText)).then((response) => {
            var parsedResponseData, chaCha20, decryptedResponse, parsedResponse, isValid, popup, locale;
            if (response.statusCode !== 200) {
                return;
            }
            parsedResponseData = response.json;
            chaCha20 = new TSChaCha20.TSChaCha20(TSChaCha20.TSChaCha20.key, TSChaCha20.TSChaCha20.nonce);
            decryptedResponse = CustomTextEncoder.CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
            parsedResponse = JSON.parse(decryptedResponse);
            isValid = BSDMessageManager.BSDMessageManager.validateMessage(parsedResponse);
            if (!isValid) {
                return;
            }
            if (parsedResponse.status === "ok") {
                if (parsedResponse.reason === "successfully_linked") {
                    this.closeWithKeyboard();
                    GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString("BSDPlusSuccessfullyLinked"));
                    if (parsedResponse.telegram) {
                        BSDPlusManager.BSDPlusManager.telegramData = parsedResponse.telegram;
                        popup = GUI.GUI.getPopupByConstructpr(BSDPlusManagementPopup.BSDPlusManagementPopup);
                        if (popup) {
                            popup.onAccountLinked();
                        }
                    }
                } else if (parsedResponse.reason === "notify_has_been_sent") {
                    GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString("BSDPlusSentLinkRequest"));
                }
            } else if (parsedResponse.status === "error") {
                locale = BSDApi.BSDApi.RESPONSE_TO_LOCALE[parsedResponse.reason];
                if (locale == null) {
                    locale = "Unknown error";
                }
                if (!locale) {
                    return;
                }
                GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString(locale));
            }
        });
    }

    handleGiveByGlobalIdType() {
        var text = this.inputField.getInputText().trim();
        var globalId = parseInt(text, 10);
        if (!Number.isFinite(globalId) || globalId <= 0) {
            return;
        }
        this.inputField.activate(false);
        this.fadeOut();
        GiveByGlobalId.GiveByGlobalId.giveInstant(globalId);
    }

    handleGiveFromContainerPickContainer() {
        var text = this.inputField.getInputText().trim();
        var containerId = parseInt(text, 10);
        if (!Number.isFinite(containerId) || containerId < 0) {
            return;
        }
        this.inputField.activate(false);
        this.fadeOut();
        GiveByGlobalId.GiveByGlobalId.rememberContainerId(containerId);
    }

    handleGiveFromContainerPickItem() {
        var text = this.inputField.getInputText().trim();
        var globalId = parseInt(text, 10);
        if (!Number.isFinite(globalId) || globalId <= 0) {
            return;
        }
        this.inputField.activate(false);
        this.fadeOut();
        GiveByGlobalId.GiveByGlobalId.giveFromPendingContainer(globalId);
    }

    handleSetTitleType() {
        var title = this.inputField.getInputText();
        BSDMessageManager.BSDMessageManager.sendMessage(new BSDSetTitleMessage.BSDSetTitleMessage(title)).then(function (response) {
            var parsedResponseData, chaCha20, decryptedResponse, parsedResponse, locale;
            if (response.statusCode !== 200) {
                return;
            }
            parsedResponseData = response.json;
            chaCha20 = new TSChaCha20.TSChaCha20(TSChaCha20.TSChaCha20.key, TSChaCha20.TSChaCha20.nonce);
            decryptedResponse = CustomTextEncoder.CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
            parsedResponse = JSON.parse(decryptedResponse);
            LogInfo(JSON.stringify(parsedResponse));
            if (parsedResponse.status === "ok") {
                GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString("CustomTitleSuccessfullySet"));
            } else if (parsedResponse.status === "error") {
                locale = parsedResponse.reason;
                if (locale === "too_long_title") {
                    GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString("CustomTitleTooLongTitle"));
                } else if (locale === "illegal_symbols") {
                    GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString("CustomTitleIllegalSymbols"));
                } else if (locale === "bad_request") {
                    GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString("CustomTitleBadRequest"));
                } else {
                    locale = BSDApi.BSDApi.RESPONSE_TO_LOCALE[parsedResponse.reason];
                    if (locale == null) {
                        locale = "Unknown error";
                    }
                }
                if (!locale) {
                    return;
                }
                GUI.GUI.pushFloaterTextToQueue(Localisation.Localisation.getString(locale));
            }
        });
    }

    updateElements(deltaTime) {
        if (!this.inputField.instance.isNull()) {
            this.inputField.update(deltaTime);
        }
    }
}

InputPopup.allocationSize = 768;
InputPopup.lastTimePressedActiveButton = 0;
InputPopup.POPUP_NAMES = { 0: "VisualNameChange", 1: "OpenPlayerProfile", 2: "FollowPlayerByTag", 3: "LinkBSDPlusInputFieldTitle", 4: "GetBSDPlusState", 5: "SetTitle", 6: "GiveByGlobalIdInputTitle", 7: "GiveFromContainerPickContainerInputTitle", 8: "GiveFromContainerPickItemInputTitle", 9: "SpectateFriendByTagInputTitle", 10: "JoinClanByTagInputTitle", 11: "ShowFameInputTitle", 12: "WatchSharedReplayInputTitle", 13: "AddSpectatorsInputTitle", 14: "AddSpectatorsBrawlTvInputTitle" };
InputPopup.CONFIRM_BUTTON_TEXTS = { 0: "VisualNameChangeButton", 1: "OpenPlayerProfileButton", 2: "FollowPlayerByTagButton", 3: "LinkBSDPlusButton", 4: "", 5: "SetTitleButton", 6: "GiveByGlobalIdButton", 7: "GiveFromContainerNextButton", 8: "GiveByGlobalIdButton", 9: "SpectateButton", 10: "JoinClanByTagButton", 11: "ShowFameButton", 12: "WatchSharedReplayButton", 13: "AddSpectatorsButton", 14: "AddSpectatorsButton" };

var PlayerDisplayData_ctor = Libg.Libg.offset(15975344, 0);
var LogicPlayerBattleIntroDetails_ctor = Libg.Libg.offset(16420544, 0);
var LogicClientHome_createOwnDisplayData = Libg.Libg.offset(15821244, 0);
var thumbnailIdOffset = LogicMemory.LogicMemory.offset(20);
var nameColorIdOffset = LogicMemory.LogicMemory.offset(24);
var unknownOffset = LogicMemory.LogicMemory.offset(28);
var ownDisplayDataInProgress = false;

class PlayerDisplayData {
    constructor(_instance) {
        this._instance = _instance;
    }

    get name() {
        return StringObject.StringObject.read(this._instance);
    }

    set name(value) {
        return;
    }

    static patch() {
        Interceptor.attach(LogicClientHome_createOwnDisplayData, {
            onEnter() {
                ownDisplayDataInProgress = true;
            },
            onLeave() {
                ownDisplayDataInProgress = false;
            }
        });
        Interceptor.attach(PlayerDisplayData_ctor, {
            onEnter(args) {
                if (!ownDisplayDataInProgress) {
                    return;
                }
                var name = StringObject.StringObject.read(args[1]);
                if (!name) {
                    return;
                }
                this.ownDisplayData = args[0];
                Player.Player.ownName = name;
                if (Config.Config.config.ChromaticName) {
                    args[5] = ptr(-2);
                }
                if (Config.Config.config.PlayerNameOverride) {
                    args[1] = StringObject.StringObject.create(Config.Config.config.PlayerNameOverride);
                    return;
                }
            },
            onLeave() {
                if (!this.ownDisplayData) {
                    return;
                }
                Player.Player.ownThumbnailID = this.ownDisplayData.add(thumbnailIdOffset).readU32();
                Player.Player.ownNameColorID = this.ownDisplayData.add(nameColorIdOffset).readU32();
            }
        });
    }
}
