// =============================================================
// GAME PROTOCOL MESSAGES
// merged webpack modules: 5532 PiranhaMessage, 4371 LoginMessage, 5485 LoginOkMessage, 8516 LoginFailedMessage, 7351 ServerHelloMessage, 3000 StartLoadingMessage, 8835 GoHomeMessage, 569 SinglePlayerMatchRequestMessage, 1030 CancelMatchmakingMessage, 8134 MatchMakingStatusMessage, 3226 PlayAgainMessage, 980 PlayAgainStatusMessage, 449 PlayerStatusMessage, 5599 TeamMemberStatusMessage, 6041 TeamChatMessage, 8231 FriendListMessage, 6335 AllianceDataMessage, 8321 MyAllianceMessage, 7402 MapPreviewMessage, 8087 LogicDebugButtonMessage, 4509 ViewReplayByStringIdMessage, 8777 UdpConnectionInfoMessage, 9493 AnalyticEvent, 6465 DeliveryUnit, 153 BattleEndMessage, 3498 TeamBotSlotDisableMessage, 4233 DebugBillingRequestMessage
// =============================================================

// --------------------- MODULE 5532 — PiranhaMessage ---------------------

// ============================================================ //
// webpack module 5532  —  PiranhaMessage
// exports: PiranhaMessage
// ============================================================ //

__webpack_modules__[5532] = function PiranhaMessage_factory(__unused_webpack_module, exports) {
    var PiranhaMessage, <class_fields_init>, PiranhaMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PiranhaMessage = undefined;
        static getMessageType () {
        return (PiranhaMessage).getMessageType((this).instance);
};
        <class_fields_init> = undefined;
        PiranhaMessage;
        class PiranhaMessage {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x7f4cd */
        this.instance = instance;
        return;
}
            getMessageType (instance) {
        return new NativeFunction((((instance).readPointer()).add((5 * (Process).pointerSize))).readPointer(), "int", [])();
}
        }
        PiranhaMessage = PiranhaMessage = PiranhaMessage;
        exports.PiranhaMessage = PiranhaMessage;
        return;
};

// --------------------- MODULE 4371 — LoginMessage ---------------------

// ============================================================ //
// webpack module 4371  —  LoginMessage
// exports: LoginMessage
// deps: 2743 (LogicLong), 4541 (HashTagCodeGenerator), 7300 (MaintenancePopupPreview), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4371] = function LoginMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, PlayerInfo, LogicLong, HashTagCodeGenerator, MaintenancePopupPreview, LoginMessage_setAccountId, LoginMessage_encode, LoginMessage, <class_fields_init>, LoginMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LoginMessage = undefined;
        Libg = __webpack_require__(9878);
        PlayerInfo = __webpack_require__(9518);
        LogicLong = __webpack_require__(2743);
        HashTagCodeGenerator = __webpack_require__(4541);
        MaintenancePopupPreview = __webpack_require__(7300);
        LoginMessage_setAccountId = new NativeFunction(((Libg).Libg).offset(15902472, 0), "void", ["pointer", "pointer"]);
        LoginMessage_encode = new NativeFunction(((Libg).Libg).offset(15899916, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        LoginMessage;
        class LoginMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4a495 (open) */
}
            patch () {
        (Interceptor).replace(LoginMessage_setAccountId, new NativeCallback(function (message, logicLong) {
        (PlayerInfo).PlayerInfo.accountId = new (LogicLong).LogicLong(logicLong);
        (PlayerInfo).PlayerInfo.tag = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag(((PlayerInfo).PlayerInfo).accountId);
        return;
}, "void", ["pointer", "pointer"]));
        return;
}
        }
        LoginMessage = <class_fields_init> = LoginMessage;
        exports.LoginMessage = LoginMessage;
        return;
};

// --------------------- MODULE 5485 — LoginOkMessage ---------------------

// ============================================================ //
// webpack module 5485  —  LoginOkMessage
// exports: LoginOkMessage
// deps: 1111 (GetBSDOnlineMessage), 1588 (LogicMemory), 1874 (GetBSDOwnHomeData), 2141 (TSChaCha20), 2214 (ModProperties), 2556 (BSDPlusManager), 2743 (LogicLong), 4272 (EDebugger), 4541 (HashTagCodeGenerator), 5281 (BSDMessageManager), 5532 (PiranhaMessage), 5667 (Validation), 6275 (BSDHttpClient), 7324 (Messaging), 7535 (StringObject), 8070 (Utils), 9518 (PlayerInfo), 9724 (CustomTextEncoder), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5485] = function LoginOkMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, Libg, StringObject, PiranhaMessage, Messaging, BSDHttpClient, BSDMessageManager, GetBSDOwnHomeData, EDebugger, TSChaCha20, Validation, ModProperties, CustomTextEncoder, BSDPlusManager, GetBSDOnlineMessage, PlayerInfo, LogicLong, HashTagCodeGenerator, Utils, LoginOkMessage_decode, accountIdOffset, sessionCountOffset, playTimeInSecondsOffset, serverTimeOffset, accountCreatedTimeOffset, LoginOkMessage, <class_fields_init>, LoginOkMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LoginOkMessage = undefined;
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        PiranhaMessage = __webpack_require__(5532);
        Messaging = __webpack_require__(7324);
        BSDHttpClient = __webpack_require__(6275);
        BSDMessageManager = __webpack_require__(5281);
        GetBSDOwnHomeData = __webpack_require__(1874);
        EDebugger = __webpack_require__(4272);
        TSChaCha20 = __webpack_require__(2141);
        Validation = __webpack_require__(5667);
        ModProperties = __webpack_require__(2214);
        CustomTextEncoder = __webpack_require__(9724);
        BSDPlusManager = __webpack_require__(2556);
        GetBSDOnlineMessage = __webpack_require__(1111);
        PlayerInfo = __webpack_require__(9518);
        LogicLong = __webpack_require__(2743);
        HashTagCodeGenerator = __webpack_require__(4541);
        Utils = __webpack_require__(8070);
        LoginOkMessage_decode = new NativeFunction(((Libg).Libg).offset(15904336, 0), "void", ["pointer", "pointer"]);
        accountIdOffset = ((LogicMemory).LogicMemory).offset(144);
        sessionCountOffset = ((LogicMemory).LogicMemory).offset(224);
        playTimeInSecondsOffset = ((LogicMemory).LogicMemory).offset(228);
        serverTimeOffset = ((LogicMemory).LogicMemory).offset(240);
        accountCreatedTimeOffset = ((LogicMemory).LogicMemory).offset(248);
        <class_fields_init> = undefined;
        LoginOkMessage;
        class LoginOkMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4ad77 */
        return this;
}
            getSecondsSinceLoginOk () {
        return ((Math).floor(((Date).now() / 1000)) - (this).logicOkTime);
}
            patch () {
        return;
}
        }
        LoginOkMessage = EDebugger = LoginOkMessage;
        exports.LoginOkMessage = LoginOkMessage;
        LoginOkMessage.sessionStartedTimestamp = 0;
        LoginOkMessage.sessionCount = 0;
        LoginOkMessage.playTimeInSeconds = 0;
        LoginOkMessage.accountCreatedDate = "";
        LoginOkMessage.serverTime = 0;
        LoginOkMessage.logicOkTime = 0;
        return;
};

// --------------------- MODULE 8516 — LoginFailedMessage ---------------------

// ============================================================ //
// webpack module 8516  —  LoginFailedMessage
// exports: LoginFailedMessage
// deps: 1588 (LogicMemory), 4974 (Breadcrumbs), 5532 (PiranhaMessage), 7324 (Messaging), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8516] = function LoginFailedMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Breadcrumbs, LogicMemory, PiranhaMessage, Messaging, LoginFailedMessage_decode, errorCodeOffset, LoginFailedMessage, <class_fields_init>, LoginFailedMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LoginFailedMessage = undefined;
        Libg = __webpack_require__(9878);
        Breadcrumbs = __webpack_require__(4974);
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        Messaging = __webpack_require__(7324);
        LoginFailedMessage_decode = ((Libg).Libg).offset(15897532, 0);
        errorCodeOffset = ((LogicMemory).LogicMemory).offset(144);
        static get errorCode () {
        return (((this).instance).add(errorCodeOffset)).readInt();
};
        <class_fields_init> = undefined;
        LoginFailedMessage;
        class LoginFailedMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4a1dd */
        return this;
}
            patch () {
        return;
}
        }
        LoginFailedMessage = <class_fields_init> = LoginFailedMessage;
        exports.LoginFailedMessage = LoginFailedMessage;
        return;
};

// --------------------- MODULE 7351 — ServerHelloMessage ---------------------

// ============================================================ //
// webpack module 7351  —  ServerHelloMessage
// exports: ServerHelloMessage
// deps: 6312 (BSDProxy), 7324 (Messaging), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7351] = function ServerHelloMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, BSDProxy, Messaging, ServerHelloMessage_decode, ServerHelloMessage, <class_fields_init>, ServerHelloMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ServerHelloMessage = undefined;
        Libg = __webpack_require__(9878);
        BSDProxy = __webpack_require__(6312);
        Messaging = __webpack_require__(7324);
        ServerHelloMessage_decode = ((Libg).Libg).offset(7992544, 0);
        <class_fields_init> = undefined;
        ServerHelloMessage;
        class ServerHelloMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4b955 (open) */
}
            patch () {
        return;
}
        }
        ServerHelloMessage = v8 = ServerHelloMessage;
        exports.ServerHelloMessage = ServerHelloMessage;
        return;
};

// --------------------- MODULE 3000 — StartLoadingMessage ---------------------

// ============================================================ //
// webpack module 3000  —  StartLoadingMessage
// exports: StartLoadingMessage
// deps: 1588 (LogicMemory), 2141 (TSChaCha20), 2556 (BSDPlusManager), 3380 (Logcat), 3548 (GetBSDUsersByMask), 4009 (Config), 4541 (HashTagCodeGenerator), 4974 (Breadcrumbs), 5281 (BSDMessageManager), 5417 (LogicArrayList), 5532 (PiranhaMessage), 6013 (LogicPlayer), 6128 (BattleMode), 6139 (LogicDataTables), 6275 (BSDHttpClient), 7146 (CustomMarks), 7669 (SkinSelector), 7835 (BattleScreen), 8070 (Utils), 9518 (PlayerInfo) ...
// ============================================================ //

__webpack_modules__[3000] = function StartLoadingMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libg, LogicPlayer, LogicArrayList, HashTagCodeGenerator, BSDHttpClient, BSDMessageManager, GetBSDUsersByMask, TSChaCha20, CustomTextEncoder, CustomMarks, LogicDataTables, Logcat, Utils, Breadcrumbs, BattleMode, BattleScreen, SkinSelector, PlayerInfo, Config, LogicMemory, BSDPlusManager, StartLoadingMessage_decode, gameModeVariationOffset, playersArrayOffset, StartLoadingMessage, <class_fields_init>, StartLoadingMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StartLoadingMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        Libg = __webpack_require__(9878);
        LogicPlayer = __webpack_require__(6013);
        LogicArrayList = __webpack_require__(5417);
        HashTagCodeGenerator = __webpack_require__(4541);
        BSDHttpClient = __webpack_require__(6275);
        BSDMessageManager = __webpack_require__(5281);
        GetBSDUsersByMask = __webpack_require__(3548);
        TSChaCha20 = __webpack_require__(2141);
        CustomTextEncoder = __webpack_require__(9724);
        CustomMarks = __webpack_require__(7146);
        LogicDataTables = __webpack_require__(6139);
        Logcat = __webpack_require__(3380);
        Utils = __webpack_require__(8070);
        Breadcrumbs = __webpack_require__(4974);
        BattleMode = __webpack_require__(6128);
        BattleScreen = __webpack_require__(7835);
        SkinSelector = __webpack_require__(7669);
        PlayerInfo = __webpack_require__(9518);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        BSDPlusManager = __webpack_require__(2556);
        StartLoadingMessage_decode = new NativeFunction(((Libg).Libg).offset(16026116, 0), "void", ["pointer", "pointer"]);
        gameModeVariationOffset = ((LogicMemory).LogicMemory).offset(248);
        playersArrayOffset = 256;
        static get gameModeVariation () {
        return (((this).instance).add(gameModeVariationOffset)).readInt();
};
        static get gameModeVariationData () {
    var variationId, variation;
        variationId = (this).gameModeVariation;
        variation = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).GameModeVariations, variationId);
        return variation;
};
        static get players () {
    var players, itemsCount;
        players = new (LogicArrayList).LogicArrayList((((this).instance).add(playersArrayOffset)).readPointer());
        itemsCount = (players).getItemsCount();
        []["get"] = {};
        Proxy.ownKeys = [];
        Proxy.getOwnPropertyDescriptor = Proxy;
        return new <underflow>(players = itemsCount = <underflow>, Proxy);
};
        <class_fields_init> = undefined;
        StartLoadingMessage;
        class StartLoadingMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4d1d0 */
        return this;
}
            patch () {
        ((BattleScreen).BattleScreen).addEnterListener(function () {
        if ((StartLoadingMessage).bsdResponseReady) {
            (StartLoadingMessage).applyPendingTitles();
            return;
        } /* if 0x4c293 (open) */
});
        return;
}
            applyPendingTitles () {
    var client, playerCount, response, parsedResponseData, chaCha20, decryptedResponse, parsedResponse, i, player, tag, user, hasCustomTitle, customTitle, titleStr, introDetails, nativeName, cachedName, playerName, relationshipEmojis, decoratedName, trophiesName, namePrefix, finalName, i, player, tag, titleStr, e;
        /* CATCH -> 0x4ced3 (try region) */
        client = ((BattleMode).BattleMode).client;
        if ((!client)) {
            return undefined;
        } /* if 0x4c8c4 */
        playerCount = (client).getPlayerCount();
        if ((playerCount === 0)) {
            return undefined;
        } /* if 0x4c8da */
        if ((StartLoadingMessage).bsdResponseReady) {
            if ((StartLoadingMessage).lastBSDResponse) {
                response = (StartLoadingMessage).lastBSDResponse;
                if (((response).statusCode === 200)) {
                    if ((response).json) {
                        parsedResponseData = (response).json;
                        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
                        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
                        parsedResponse = (JSON).parse(decryptedResponse);
                        if (((parsedResponse).status === "ok")) {
                            if ((parsedResponse).bsd_users) {
                                i = 0;
                                while ((i < playerCount)) {
                                    player = (client).getPlayer(i);
                                    if (!(!player)) {
                                        if ((!(player).playerId)) {
                                        } /* if 0x4ca33 */
                                    } /* if 0x4ca2b */
                                    /* jump -> 0x4ce06 */
                                    tag = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag((player).playerId);
                                    if (!(parsedResponse).bsd_users[("#" + tag)]) {
                                        user = (parsedResponse).bsd_users[tag];
                                    } /* if 0x4ca6f */
                                    if ((!user)) {
                                    } /* if 0x4ca7d */
                                    /* jump -> 0x4ce06 */
                                    hasCustomTitle = ((CustomMarks).CustomMarks).hasTitle(tag);
                                    if (hasCustomTitle) {
                                    } /* if 0x4caac */
                                    /* jump -> 0x4cab1 */
                                    customTitle = undefined;
                                    if (((customTitle) == null)) {
                                        if (((user) == null)) {
                                        } /* if 0x4cac6 */
                                    } /* if 0x4cacb */
                                    /* jump -> 0x4cacb */
                                    titleStr = (undefined).title;
                                    if (titleStr) {
                                        if ((titleStr.length > 0)) {
                                            (StartLoadingMessage).applyTitleToPlayer(client, playerCount, tag, titleStr, hasCustomTitle);
                                        } /* if 0x4caf5 */
                                    } /* if 0x4caf5 */
                                    introDetails = (player).getLogicPlayerBattleIntroDetails();
                                    nativeName = (introDetails).getPlayerName();
                                    if (((((StartLoadingMessage).lastCachedPlayers).find(function (cachedPlayer) {
        return ((cachedPlayer).tag === tag);
})) == null)) {
                                        ((StartLoadingMessage).lastCachedPlayers).find(function (cachedPlayer) {
        return ((cachedPlayer).tag === tag);
});
                                    } /* if 0x4cb29 */
                                    /* jump -> 0x4cb2e */
                                    if ((((undefined).name) == null)) {
                                        cachedName = nativeName;
                                    } /* if 0x4cb36 */
                                    if ((typeof (user).name === "string")) {
                                        if (((user).name.length > 0)) {
                                        } /* if 0x4cb60 */
                                    } /* if 0x4cb60 */
                                    /* jump -> 0x4cb61 */
                                    playerName = "";
                                    if ((((Config).Config).config).PlayerNameOverride) {
                                        if ((((player).playerId) == null)) {
                                        } /* if 0x4cb87 */
                                        /* jump -> 0x4cb9c */
                                        if ((undefined).equals(((PlayerInfo).PlayerInfo).accountId)) {
                                            playerName = (((Config).Config).config).PlayerNameOverride;
                                        } /* if 0x4cbb5 */
                                    } /* if 0x4cbb5 */
                                    relationshipEmojis = "";
                                    if (((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled) {
                                        if ((((Config).Config).config).ShowAllianceMembersInBattle) {
                                            if (((user).is_clan_member === true)) {
                                                relationshipEmojis = (relationshipEmojis + "🛡️");
                                            } /* if 0x4cbf5 */
                                        } /* if 0x4cbf5 */
                                    } /* if 0x4cbf5 */
                                    if (((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled) {
                                        if ((((Config).Config).config).ShowBlacklistedPlayersInBattle) {
                                            if (((user).is_blacklisted === true)) {
                                                relationshipEmojis = (relationshipEmojis + "❌");
                                            } /* if 0x4cc32 */
                                        } /* if 0x4cc32 */
                                    } /* if 0x4cc32 */
                                    if (playerName) {
                                    } /* if 0x4cc4a */
                                    /* jump -> 0x4cc87 */
                                    if (relationshipEmojis) {
                                    } /* if 0x4cc66 */
                                    /* jump -> 0x4cc67 */
                                    decoratedName = ((["", cachedName]).filter(Boolean)).join(" ");
                                    if (!playerName) {
                                        trophiesName = cachedName;
                                    } /* if 0x4cc93 */
                                    if (((user).trophies !== undefined)) {
                                        if (((user).trophies !== -1)) {
                                        } /* if 0x4cccd */
                                    } /* if 0x4cccd */
                                    if (((user).character !== undefined)) {
                                        if (((user).character !== -1)) {
                                        } /* if 0x4cd05 */
                                    } /* if 0x4cd05 */
                                    if (((CustomMarks).CustomMarks).hasMark(tag)) {
                                    } /* if 0x4cd2f */
                                    /* jump -> 0x4cd67 */
                                    if ((typeof (user).plus === "number")) {
                                        if (((user).plus !== -1)) {
                                            if (((user).plus === 1)) {
                                            } /* if 0x4cd5f */
                                        } /* if 0x4cd66 */
                                    } /* if 0x4cd66 */
                                    /* jump -> 0x4cd67 */
                                    /* jump -> 0x4cd67 */
                                    namePrefix = null;
                                    if (namePrefix) {
                                        if ((!(decoratedName).includes(namePrefix))) {
                                        } /* if 0x4cd95 */
                                    } /* if 0x4cd95 */
                                    /* jump -> 0x4cd98 */
                                    finalName = decoratedName;
                                    if ((finalName !== nativeName)) {
                                        (introDetails).setPlayerName(finalName);
                                    } /* if 0x4cdb2 */
                                    (StartLoadingMessage).logNameComparison({ stage: "after-api", tag: tag, beforeApi: cachedName, beforeApply: nativeName, apiName: (user).name, finalName: finalName, changed: (finalName !== nativeName) });
                                    i = ((i) + 1);
                                    (i++);
                                } /* while 0x4ce13 */
                            } /* if 0x4ce13 */
                        } /* if 0x4ce13 */
                    } /* if 0x4ce13 */
                } /* if 0x4ce13 */
                StartLoadingMessage.lastBSDResponse = null;
                StartLoadingMessage.bsdResponseReady = false;
            } /* if 0x4ce25 */
        } /* if 0x4ce25 */
        i = 0;
        while ((i < playerCount)) {
            player = (client).getPlayer(i);
            if (!(!player)) {
                if (!(!(player).playerId)) {
                    tag = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag((player).playerId);
                    if (!(!((CustomMarks).CustomMarks).hasTitle(tag))) {
                        titleStr = ((CustomMarks).CustomMarks).getTitleDefinitionFor(tag);
                        if (titleStr) {
                            (StartLoadingMessage).applyTitleToPlayer(client, playerCount, tag, titleStr, true);
                        } /* if 0x4cec3 */
                    } /* if 0x4cec3 */
                } /* if 0x4cec3 */
            } /* if 0x4ce5e */
            i = ((i) + 1);
            (i++);
            player = tag = titleStr = i = StartLoadingMessage;
            return;
            e = StartLoadingMessage;
        } /* while 0x4ced1 */
        /* CATCH -> 0x4cefa (try region) */
        ((Logcat).Logcat).logError(("Error applying titles: " + (e).stack));
        ("").concat(namePrefix, " ", decoratedName);
        return;
        throw "[BSD]";
}
            logNameComparison (details) {
        if (!(!((Config).Config).useDebugLogging)) {
            if (((((Config).Config).config).ShowBSDApiResponse !== true)) {
                return;
                /* CATCH -> 0x4d008 (try region) */
            } /* if 0x4cfbf */
        } /* if 0x4cfbc */
        Object.assign(details, null);
        ({ requestId: (StartLoadingMessage).bsdRequestId });
        (Logcat).Logcat("[BSD names] "(JSON((JSON).stringify)));
        return;
        /* CATCH -> 0x4d010 (try region) */
        return;
        throw <underflow>;
}
            applyTitleToPlayer (client, playerCount, tag, titleStr, hasCustomTitle) {
    var i, player, playerTag, introDetails, titleData, gradient, devGradient, newTitleData;
        i = 0;
        while ((i < playerCount)) {
            player = (client).getPlayer(i);
            if (!(!player)) {
                if (!(!(player).playerId)) {
                    playerTag = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag((player).playerId);
                    if (!(playerTag !== tag)) {
                        introDetails = (player).getLogicPlayerBattleIntroDetails();
                        titleData = ((LogicDataTables).LogicDataTables).getDataById(76, 0);
                        gradient = ((LogicDataTables).LogicDataTables).getDataById(46, 2);
                        devGradient = ((LogicDataTables).LogicDataTables).getDataById(46, 31);
                        newTitleData = (titleData).clone();
                        newTitleData.titleTid = titleStr;
                        if (hasCustomTitle) {
                        } /* if 0x4d14b */
                        /* jump -> 0x4d14e */
                        devGradient.gradient = gradient;
                        introDetails.title = newTitleData;
                        return;
                    } /* if 0x4d162 */
                } /* if 0x4d162 */
            } /* if 0x4d0b4 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0x4d16d (open) */
}
        }
        StartLoadingMessage = TSChaCha20 = StartLoadingMessage;
        exports.StartLoadingMessage = StartLoadingMessage;
        StartLoadingMessage.bsdUsersTags = [];
        StartLoadingMessage.playerTrophies = new Map();
        StartLoadingMessage.playerCharacterTrophies = new Map();
        StartLoadingMessage.pendingTitleData = [];
        StartLoadingMessage.bsdResponseReady = false;
        StartLoadingMessage.bsdRequestSent = false;
        StartLoadingMessage.lastBSDResponse = null;
        StartLoadingMessage.lastCachedPlayers = [];
        StartLoadingMessage.bsdRequestId = 0;
        return;
};

// --------------------- MODULE 8835 — GoHomeMessage ---------------------

// ============================================================ //
// webpack module 8835  —  GoHomeMessage
// exports: GoHomeMessage
// deps: 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8835] = function GoHomeMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, PiranhaMessage, Libc, PiranhaMessage_ctor, GoHomeMessage_vtable, GoHomeMessage, <class_fields_init>, GoHomeMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GoHomeMessage = undefined;
        Libg = __webpack_require__(9878);
        PiranhaMessage = __webpack_require__(5532);
        Libc = __webpack_require__(1978);
        PiranhaMessage_ctor = new NativeFunction(((Libg).Libg).offset(6708696, 0), "void", ["pointer", "int"]);
        GoHomeMessage_vtable = ((Libg).Libg).offset(18850008, 0);
        <class_fields_init> = undefined;
        GoHomeMessage;
        class GoHomeMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor (instance) {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if ((instance instanceof NativePointer)) {
            this = super(instance);
            if (<class_fields_init>) {
            } /* if 0x49b27 */
            return this;
        } /* if 0x49b2d */
        messageInstance = ((Libc).Libc).malloc((GoHomeMessage).allocationSize);
        PiranhaMessage_ctor(messageInstance, 0);
        (messageInstance).writePointer(GoHomeMessage_vtable);
        this = super(messageInstance);
        if (<class_fields_init>) {
        } /* if 0x49b78 */
        return this;
}
        }
        GoHomeMessage = v8 = GoHomeMessage;
        exports.GoHomeMessage = GoHomeMessage;
        GoHomeMessage.allocationSize = 144;
        return;
};

// --------------------- MODULE 569 — SinglePlayerMatchRequestMessage ---------------------

// ============================================================ //
// webpack module 569  —  SinglePlayerMatchRequestMessage
// exports: SinglePlayerMatchRequestMessage
// deps: 1018 (HomeMode), 3555 (LogicSkinData), 4009 (Config), 4801 (LogicHomeMode), 7089 (LogicDailyData), 7171 (LogicCharacterData), 7669 (SkinSelector), 9878 (Libg)
// ============================================================ //

__webpack_modules__[569] = function SinglePlayerMatchRequestMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, SkinSelector, LogicCharacterData, LogicDailyData, LogicSkinData, LogicHomeMode, HomeMode, SinglePlayerMatchRequestMessage_ctor, SinglePlayerMatchRequestMessage, <class_fields_init>, SinglePlayerMatchRequestMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SinglePlayerMatchRequestMessage = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        SkinSelector = __webpack_require__(7669);
        LogicCharacterData = __webpack_require__(7171);
        LogicDailyData = __webpack_require__(7089);
        LogicSkinData = __webpack_require__(3555);
        LogicHomeMode = __webpack_require__(4801);
        HomeMode = __webpack_require__(1018);
        SinglePlayerMatchRequestMessage_ctor = ((Libg).Libg).offset(16162264, 0);
        <class_fields_init> = undefined;
        SinglePlayerMatchRequestMessage;
        class SinglePlayerMatchRequestMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4bc3c (open) */
}
            patch () {
        return;
}
        }
        SinglePlayerMatchRequestMessage = SinglePlayerMatchRequestMessage_ctor = SinglePlayerMatchRequestMessage;
        exports.SinglePlayerMatchRequestMessage = SinglePlayerMatchRequestMessage;
        return;
};

// --------------------- MODULE 1030 — CancelMatchmakingMessage ---------------------

// ============================================================ //
// webpack module 1030  —  CancelMatchmakingMessage
// exports: CancelMatchmakingMessage, CancelMatchmakingMessage_ctor
// deps: 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1030] = function CancelMatchmakingMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libc, Libg, CancelMatchmakingMessage, <class_fields_init>, CancelMatchmakingMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CancelMatchmakingMessage_ctor = undefined;
        undefined.CancelMatchmakingMessage = exports;
        PiranhaMessage = __webpack_require__(5532);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        exports.CancelMatchmakingMessage_ctor = new NativeFunction(((Libg).Libg).offset(16020164, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        CancelMatchmakingMessage;
        class CancelMatchmakingMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        messageInstance = ((Libc).Libc).malloc((CancelMatchmakingMessage).allocationSize);
        (exports).CancelMatchmakingMessage_ctor(messageInstance);
        this = super(messageInstance);
        if (<class_fields_init>) {
        } /* if 0x49467 */
        return this;
}
        }
        CancelMatchmakingMessage = CancelMatchmakingMessage = CancelMatchmakingMessage;
        exports.CancelMatchmakingMessage = CancelMatchmakingMessage;
        CancelMatchmakingMessage.allocationSize = 144;
        return;
};

// --------------------- MODULE 8134 — MatchMakingStatusMessage ---------------------

// ============================================================ //
// webpack module 8134  —  MatchMakingStatusMessage
// exports: MatchMakingStatusMessage
// deps: 1588 (LogicMemory), 5532 (PiranhaMessage)
// ============================================================ //

__webpack_modules__[8134] = function MatchMakingStatusMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, PiranhaMessage, playersCountOffset, maxPlayersOffset, MatchMakingStatusMessage, <class_fields_init>, MatchMakingStatusMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MatchMakingStatusMessage = undefined;
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        playersCountOffset = ((LogicMemory).LogicMemory).offset(148);
        maxPlayersOffset = ((LogicMemory).LogicMemory).offset(152);
        static get playerCount () {
        return (((this).instance).add(playersCountOffset)).readInt();
};
        static get maxPlayers () {
        return (((this).instance).add(maxPlayersOffset)).readInt();
};
        <class_fields_init> = undefined;
        MatchMakingStatusMessage;
        class MatchMakingStatusMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4b156 */
        return this;
}
        }
        MatchMakingStatusMessage = v8 = MatchMakingStatusMessage;
        exports.MatchMakingStatusMessage = MatchMakingStatusMessage;
        return;
};

// --------------------- MODULE 3226 — PlayAgainMessage ---------------------

// ============================================================ //
// webpack module 3226  —  PlayAgainMessage
// exports: PlayAgainMessage
// deps: 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3226] = function PlayAgainMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libc, Libg, PlayAgainMessage_ctor, PlayAgainMessage, <class_fields_init>, PlayAgainMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayAgainMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        PlayAgainMessage_ctor = new NativeFunction(((Libg).Libg).offset(15993968, 0), "void", ["pointer", "bool", "bool"]);
        <class_fields_init> = undefined;
        PlayAgainMessage;
        class PlayAgainMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor (instance) {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if ((instance instanceof NativePointer)) {
            this = super(instance);
            if (<class_fields_init>) {
            } /* if 0x4b463 */
            return this;
        } /* if 0x4b469 */
        messageInstance = ((Libc).Libc).malloc((PlayAgainMessage).allocationSize);
        PlayAgainMessage_ctor(messageInstance, (+instance), 0);
        this = super(messageInstance);
        if (<class_fields_init>) {
        } /* if 0x4b4a7 */
        return this;
}
        }
        PlayAgainMessage = v8 = PlayAgainMessage;
        exports.PlayAgainMessage = PlayAgainMessage;
        PlayAgainMessage.allocationSize = 152;
        return;
};

// --------------------- MODULE 980 — PlayAgainStatusMessage ---------------------

// ============================================================ //
// webpack module 980  —  PlayAgainStatusMessage
// exports: PlayAgainStatusMessage
// deps: 1588 (LogicMemory), 5532 (PiranhaMessage)
// ============================================================ //

__webpack_modules__[980] = function PlayAgainStatusMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, LogicMemory, playAgainStatusOffset, PlayAgainStatusMessage, <class_fields_init>, PlayAgainStatusMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayAgainStatusMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        LogicMemory = __webpack_require__(1588);
        playAgainStatusOffset = ((LogicMemory).LogicMemory).offset(144);
        static getPlayAgainStatus () {
        return ((((this).instance).add(playAgainStatusOffset)).readPointer()).readInt();
};
        <class_fields_init> = undefined;
        PlayAgainStatusMessage;
        class PlayAgainStatusMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4b60f */
        return this;
}
        }
        PlayAgainStatusMessage = PlayAgainStatusMessage = PlayAgainStatusMessage;
        exports.PlayAgainStatusMessage = PlayAgainStatusMessage;
        return;
};

// --------------------- MODULE 449 — PlayerStatusMessage ---------------------

// ============================================================ //
// webpack module 449  —  PlayerStatusMessage
// exports: PlayerStatusMessage
// deps: 4009 (Config), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[449] = function PlayerStatusMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libg, Config, PlayerStatusMessage_ctor, PlayerStatusMessage, <class_fields_init>, PlayerStatusMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerStatusMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        PlayerStatusMessage_ctor = ((Libg).Libg).offset(15933976, 0);
        <class_fields_init> = undefined;
        PlayerStatusMessage;
        class PlayerStatusMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4b7cf */
        return this;
}
            patch () {
        return;
}
        }
        PlayerStatusMessage = v8 = PlayerStatusMessage;
        exports.PlayerStatusMessage = PlayerStatusMessage;
        return;
};

// --------------------- MODULE 5599 — TeamMemberStatusMessage ---------------------

// ============================================================ //
// webpack module 5599  —  TeamMemberStatusMessage
// exports: TeamMemberStatusMessage
// deps: 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5599] = function TeamMemberStatusMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, PiranhaMessage, TeamMemberStatusMessage_ctor, TeamMemberStatusMessage, <class_fields_init>, TeamMemberStatusMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamMemberStatusMessage = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        PiranhaMessage = __webpack_require__(5532);
        TeamMemberStatusMessage_ctor = new NativeFunction(((Libg).Libg).offset(15951740, 0), "void", ["pointer", "int"]);
        <class_fields_init> = undefined;
        TeamMemberStatusMessage;
        class TeamMemberStatusMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor (instance) {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if (!(!instance)) {
            if ((typeof instance === "number")) {
                messageInstance = ((Libc).Libc).malloc((TeamMemberStatusMessage).allocationSize);
                if (((instance) == null)) {
                } /* if 0x4d6b8 */
                TeamMemberStatusMessage_ctor(messageInstance, 3);
                this = super(messageInstance);
                if (<class_fields_init>) {
                } /* if 0x4d6d4 */
            } /* if 0x4d6d6 */
        } /* if 0x4d68d */
        if ((typeof instance !== "number")) {
            this = super(instance);
            if (<class_fields_init>) {
            } /* if 0x4d6f8 */
        } /* if 0x4d6fa */
        return this;
}
            patch () {
        return;
}
        }
        TeamMemberStatusMessage = v8 = TeamMemberStatusMessage;
        exports.TeamMemberStatusMessage = TeamMemberStatusMessage;
        TeamMemberStatusMessage.allocationSize = 152;
        TeamMemberStatusMessage.teamMemberStatus = -1;
        return;
};

// --------------------- MODULE 6041 — TeamChatMessage ---------------------

// ============================================================ //
// webpack module 6041  —  TeamChatMessage
// exports: TeamChatMessage
// deps: 1588 (LogicMemory), 4009 (Config), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6041] = function TeamChatMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, Config, LogicMemory, TeamChatMessage_encode, chatMessageOffset, TeamChatMessage, <class_fields_init>, TeamChatMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamChatMessage = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        TeamChatMessage_encode = ((Libg).Libg).offset(15941724, 0);
        chatMessageOffset = ((LogicMemory).LogicMemory).offset(144);
        <class_fields_init> = undefined;
        TeamChatMessage;
        class TeamChatMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4d522 (open) */
}
            patch () {
        return;
}
        }
        TeamChatMessage = TeamChatMessage = TeamChatMessage;
        exports.TeamChatMessage = TeamChatMessage;
        return;
};

// --------------------- MODULE 8231 — FriendListMessage ---------------------

// ============================================================ //
// webpack module 8231  —  FriendListMessage
// exports: FriendListMessage
// deps: 1588 (LogicMemory), 5417 (LogicArrayList), 5532 (PiranhaMessage)
// ============================================================ //

__webpack_modules__[8231] = function FriendListMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, PiranhaMessage, LogicArrayList, friendEntriesArrayOffset, FriendListMessage, <class_fields_init>, FriendListMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FriendListMessage = undefined;
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        LogicArrayList = __webpack_require__(5417);
        friendEntriesArrayOffset = ((LogicMemory).LogicMemory).offset(144);
        static get friendList () {
        return new (LogicArrayList).LogicArrayList((((this).instance).add(friendEntriesArrayOffset)).readPointer());
};
        <class_fields_init> = undefined;
        FriendListMessage;
        class FriendListMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x49994 */
        return this;
}
        }
        FriendListMessage = v8 = FriendListMessage;
        exports.FriendListMessage = FriendListMessage;
        return;
};

// --------------------- MODULE 6335 — AllianceDataMessage ---------------------

// ============================================================ //
// webpack module 6335  —  AllianceDataMessage
// exports: AllianceDataMessage
// deps: 1588 (LogicMemory), 4223 (AllianceFullEntry), 5532 (PiranhaMessage)
// ============================================================ //

__webpack_modules__[6335] = function AllianceDataMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, PiranhaMessage, AllianceFullEntry, fullEntryOffset, AllianceDataMessage, <class_fields_init>, AllianceDataMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AllianceDataMessage = undefined;
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        AllianceFullEntry = __webpack_require__(4223);
        fullEntryOffset = ((LogicMemory).LogicMemory).offset(152);
        static get fullEntry () {
        return new (AllianceFullEntry).AllianceFullEntry((((this).instance).add(fullEntryOffset)).readPointer());
};
        <class_fields_init> = undefined;
        AllianceDataMessage;
        class AllianceDataMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x48c80 */
        return this;
}
        }
        AllianceDataMessage = v8 = AllianceDataMessage;
        exports.AllianceDataMessage = AllianceDataMessage;
        return;
};

// --------------------- MODULE 8321 — MyAllianceMessage ---------------------

// ============================================================ //
// webpack module 8321  —  MyAllianceMessage
// exports: MyAllianceMessage
// deps: 1588 (LogicMemory), 5532 (PiranhaMessage), 6371 (AllianceHeaderEntry)
// ============================================================ //

__webpack_modules__[8321] = function MyAllianceMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, PiranhaMessage, AllianceHeaderEntry, headerOffset, MyAllianceMessage, <class_fields_init>, MyAllianceMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MyAllianceMessage = undefined;
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        AllianceHeaderEntry = __webpack_require__(6371);
        headerOffset = ((LogicMemory).LogicMemory).offset(160);
        static get header () {
    var headerPtr;
        headerPtr = (((this).instance).add(headerOffset)).readPointer();
        if ((headerPtr).isNull()) {
            return null;
        } /* if 0x4b288 */
        return new (AllianceHeaderEntry).AllianceHeaderEntry(headerPtr);
};
        <class_fields_init> = undefined;
        MyAllianceMessage;
        class MyAllianceMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x4b2ef */
        return this;
}
        }
        MyAllianceMessage = v8 = MyAllianceMessage;
        exports.MyAllianceMessage = MyAllianceMessage;
        return;
};

// --------------------- MODULE 7402 — MapPreviewMessage ---------------------

// ============================================================ //
// webpack module 7402  —  MapPreviewMessage
// exports: MapPreviewMessage
// deps: 1588 (LogicMemory), 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7402] = function MapPreviewMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicMemory, PiranhaMessage, MapPreviewMessage_ctor, locationOffset, MapPreviewMessage, <class_fields_init>, MapPreviewMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MapPreviewMessage = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        MapPreviewMessage_ctor = new NativeFunction(((Libg).Libg).offset(16178392, 0), "void", ["pointer"]);
        locationOffset = ((LogicMemory).LogicMemory).offset(144);
        static setLocation (location) {
        return;
};
        <class_fields_init> = undefined;
        MapPreviewMessage;
        class MapPreviewMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor (instance) {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if ((instance instanceof NativePointer)) {
            this = super(instance);
            if (<class_fields_init>) {
            } /* if 0x4af16 */
            return this;
        } /* if 0x4af1c */
        messageInstance = ((Libc).Libc).calloc((MapPreviewMessage).allocationSize, 1);
        MapPreviewMessage_ctor(messageInstance);
        this = super(messageInstance);
        if (<class_fields_init>) {
        } /* if 0x4af58 */
        return this;
}
        }
        MapPreviewMessage = MapPreviewMessage = MapPreviewMessage;
        exports.MapPreviewMessage = MapPreviewMessage;
        MapPreviewMessage.allocationSize = 152;
        return;
};

// --------------------- MODULE 8087 — LogicDebugButtonMessage ---------------------

// ============================================================ //
// webpack module 8087  —  LogicDebugButtonMessage
// exports: EDebugAction, LogicDebugButtonMessage, RESOURCE_NAMES
// deps: 1018 (HomeMode), 1588 (LogicMemory), 1978 (Libc), 3401 (GameStateManager), 4801 (LogicHomeMode), 4934 (GUI), 6139 (LogicDataTables), 6153 (LogicClientAvatar), 6385 (LogicClientHome), 7535 (StringObject), 7656 (LogicCommand), 8569 (HomeScreen), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8087] = function LogicDebugButtonMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, LogicCommand, LogicHomeMode, GameStateManager, LogicMemory, LogicClientHome, HomeScreen, StringObject, LogicDataTables, HomeMode, GUI, LogicClientAvatar, LogicDebugCommand_ctor, LogicClientAvatar_setCommodityCount_native, LogicDebugCommand_unlockAll_native, HomeMode_addCommand_native, RESOURCE_DATA_GAINED_TYPE, COMMODITY_TYPE_RESOURCE, COMMODITY_TYPE_HERO_LEVEL, COMMODITY_REASON_DEBUG, COMMODITY_TYPE_PEAK_TROPHIES, COMMODITY_TYPE_HIGHSCORE, MAX_HERO_LEVEL, ADD_RESOURCES_EXTRA_COINS_BONUS, RESOURCE_FLOATER_Y_OFFSET, RESOURCE_FLOATER_HIDE_FLAG, actionIdxOffset, intParameterOffset, cachedBrawlerOffset, dailyDataSelectedCharactersPtrOffset, dailyDataSelectedCharactersLengthOffset, _buttonCosmeticCoinsNameStringObject, buttonCosmeticCoinsNameStringObject, debugCommandActive, suppressOutgoingCommands, EDebugAction, LOCAL_ONLY_ACTIONS, LogicDebugCommand, <class_fields_init>, LogicDebugCommand, LogicDebugButtonMessage, <class_fields_init>, LogicDebugButtonMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.RESOURCE_NAMES = undefined;
        undefined.EDebugAction = exports;
        exports.LogicDebugButtonMessage = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicCommand = __webpack_require__(7656);
        LogicHomeMode = __webpack_require__(4801);
        GameStateManager = __webpack_require__(3401);
        LogicMemory = __webpack_require__(1588);
        LogicClientHome = __webpack_require__(6385);
        HomeScreen = __webpack_require__(8569);
        StringObject = __webpack_require__(7535);
        LogicDataTables = __webpack_require__(6139);
        HomeMode = __webpack_require__(1018);
        GUI = __webpack_require__(4934);
        LogicClientAvatar = __webpack_require__(6153);
        LogicDebugCommand_ctor = new NativeFunction(((Libg).Libg).offset(14307184, 0), "void", ["pointer"]);
        LogicClientAvatar_setCommodityCount_native = new NativeFunction((LogicClientAvatar).LogicClientAvatar_setCommodityCountOffset, "pointer", ["pointer", "uint", "pointer", "uint", "uint"]);
        LogicDebugCommand_unlockAll_native = new NativeFunction(((Libg).Libg).offset(14338136, 0), "void", ["pointer", "pointer", "int", "int", "int", "uchar", "int", "pointer"]);
        HomeMode_addCommand_native = new NativeFunction((HomeMode).HomeMode_addCommandOffset, "int", ["pointer", "pointer"]);
        exports.RESOURCE_NAMES = { Gold: "Gold", Dust: "Dust", Upgradium: "Upgradium", Bolts: "Bolts", HeroLvlUpMaterial: "HeroLvlUpMaterial", FirstWins: "FirstWins", LegendaryTrophies: "LegendaryTrophies", Diamonds: "Diamonds", GearScrap: "GearScrap", ClubCoins: "ClubCoins", RecruitTokens: "RecruitTokens", ChromaticTokens: "ChromaticTokens", PowerPoints: "PowerPoints", Bling: "Bling", Fame: "Fame", CollabEventCurrency: "CollabEventCurrency", StarrDrop: "StarrDrop", BrawlPassBasic: "BrawlPassBasic", CompetitivePass: "CompetitivePass" };
        RESOURCE_DATA_GAINED_TYPE = { HeroLvlUpMaterial: 1, Diamonds: 2, LegendaryTrophies: 14, RecruitTokens: 20, PowerPoints: 22, Bling: 23, CollabEventCurrency: 26 };
        COMMODITY_TYPE_RESOURCE = 0;
        COMMODITY_TYPE_HERO_LEVEL = 5;
        COMMODITY_REASON_DEBUG = 3;
        COMMODITY_TYPE_PEAK_TROPHIES = 2;
        COMMODITY_TYPE_HIGHSCORE = 17;
        MAX_HERO_LEVEL = 11;
        ADD_RESOURCES_EXTRA_COINS_BONUS = 1000;
        RESOURCE_FLOATER_Y_OFFSET = 288;
        RESOURCE_FLOATER_HIDE_FLAG = 0;
        actionIdxOffset = ((LogicMemory).LogicMemory).offset(28);
        intParameterOffset = ((LogicMemory).LogicMemory).offset(32);
        cachedBrawlerOffset = ((LogicMemory).LogicMemory).offset(56);
        dailyDataSelectedCharactersPtrOffset = ((LogicMemory).LogicMemory).offset(368);
        dailyDataSelectedCharactersLengthOffset = ((LogicMemory).LogicMemory).offset(380);
        _buttonCosmeticCoinsNameStringObject = null;
        buttonCosmeticCoinsNameStringObject = exports;
        debugCommandActive = false;
        suppressOutgoingCommands = false;
        if (!EDebugAction) {
            exports.EDebugAction = StringObject = {};
        } /* if 0xdc29a */
        StringObject = {}(exports);
        LOCAL_ONLY_ACTIONS = new Set([(EDebugAction).BP_DEBUG_RESET_PROGRESS, (EDebugAction).COMP_PASS_DEBUG_RESET]);
        <class_fields_init> = undefined;
        LogicDebugCommand;
        class LogicDebugCommand extends <class_fields_init> = (LogicCommand).LogicCommand {
            constructor (actionIdx, intParameter) {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        instance = ((Libc).Libc).malloc(148);
        LogicDebugCommand_ctor(instance);
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0xdc633 */
        ((instance).add(actionIdxOffset)).writeInt(actionIdx);
        ((instance).add(intParameterOffset)).writeInt(intParameter);
        return this;
}
        }
        LogicDebugCommand = StringObject = LogicDebugCommand;
        <class_fields_init> = undefined;
        LogicDebugButtonMessage;
        class LogicDebugButtonMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xdd0f0 (open) */
}
            patch () {
        (Interceptor).replace((LogicClientAvatar).LogicClientAvatar_setCommodityCountOffset, new NativeCallback(function (avatar, commodityType, key, newValue, flag) {
        if (debugCommandActive) {
            if (!(commodityType === COMMODITY_TYPE_PEAK_TROPHIES)) {
                (commodityType === COMMODITY_TYPE_PEAK_TROPHIES);
                if ((commodityType === COMMODITY_TYPE_HIGHSCORE)) {
                    return ptr(0);
                } /* if 0xdc786 */
            } /* if 0xdc77b */
        } /* if 0xdc786 */
        return LogicClientAvatar_setCommodityCount_native(avatar, commodityType, key, newValue, flag);
}, "pointer", ["pointer", "uint", "pointer", "uint", "uint"]));
        return;
}
            destroyCommand (command) {
    var vtable, destructorThunk, operatorDelete;
        vtable = (command).readPointer();
        destructorThunk = new NativeFunction((vtable).readPointer(), "void", ["pointer"]);
        operatorDelete = new NativeFunction(((vtable).add(16)).readPointer(), "void", ["pointer"]);
        destructorThunk(command);
        return;
}
            send (actionIdx) {
    var intParameter, actionIdx, intParameter, homeMode, command, selectedCharacter, diamondsResource;
        diamondsResource = this;
        intParameter = actionIdx;
        if (((intParameter) === undefined)) {
            actionIdx = intParameter = -1;
        } /* if 0xdc90d */
        intParameter = ((LogicHomeMode).LogicHomeMode).getInstance();
        if ((intParameter).isNull()) {
            return;
        } /* if 0xdc936 */
        homeMode = new LogicDebugCommand(actionIdx, intParameter);
        command = (LogicDebugButtonMessage).getSelectedCharacter();
        if ((!(command).isNull())) {
            (((homeMode).instance).add(cachedBrawlerOffset)).writePointer(command);
        } /* if 0xdc97a */
        debugCommandActive = true;
        suppressOutgoingCommands = (LOCAL_ONLY_ACTIONS).has(actionIdx);
        /* CATCH -> 0xdc9b2 (try region) */
        (homeMode).execute(intParameter);
        intParameter = homeMode = command = intParameter = actionIdx = <underflow>;
        /* gosub 0xdc9b8 (finally) */
        /* jump -> 0xdc9c2 */
        /* gosub 0xdc9b8 (finally) */
        throw <underflow>;
        debugCommandActive = false;
        suppressOutgoingCommands = false;
        /* end finally */
        if ((actionIdx === (EDebugAction).ADD_RESOURCES)) {
            return;
        } /* if 0xdc9e1 */
        if ((actionIdx === (EDebugAction).ADD_GEMS)) {
            selectedCharacter = (diamondsResource).getResourcePointer("Diamonds");
            if ((!(selectedCharacter).isNull())) {
                (diamondsResource).showDataGainedFloater("Diamonds", selectedCharacter, intParameter);
                return;
            } /* if 0xdca23 */
        } /* if 0xdca24 */
        if ((actionIdx === (EDebugAction).ADD_SCORE)) {
            return;
        } /* if 0xdca3d */
        if ((actionIdx === (EDebugAction).ADD_BRAWL_PASS_POINTS)) {
            (diamondsResource).showFloater(intParameter, 3);
            return;
        } /* if 0xdca56 (open) */
}
            unlockAllBrawlers () {
        return;
}
            upgradeAllBrawlers () {
        return;
}
            unlockAll () {
    var homeMode;
        homeMode = ((LogicHomeMode).LogicHomeMode).getInstance();
        if ((homeMode).isNull()) {
            return;
        } /* if 0xdcb0c */
        suppressOutgoingCommands = true;
        /* CATCH -> 0xdcb3c (try region) */
        LogicDebugCommand_unlockAll_native(NULL, homeMode, 1, 1, 1, 1, 0, NULL);
        homeMode = <underflow>;
        /* gosub 0xdcb42 (finally) */
        return;
        /* gosub 0xdcb42 (finally) */
        throw <underflow>;
        suppressOutgoingCommands = false;
        /* end finally */
        return;
}
            setLevelOnAllBrawlers (level) {
    var avatar, charactersTable, characterCount, i, character;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return;
        } /* if 0xdcbbc */
        charactersTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Characters);
        characterCount = (charactersTable).getItemCount();
        i = 0;
        while ((i < characterCount)) {
            character = (charactersTable).getItemAt(i);
            /* is_null  */
            if (!character) {
                (avatar).setCommodityCount(COMMODITY_TYPE_HERO_LEVEL, (character).instance, (level - 1), 0);
            } /* if 0xdcc2d */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xdcc37 (open) */
}
            executeNativeWithFloater (actionIdx, intParameter, dataGainedType) {
    var homeMode, command, selectedCharacter;
        homeMode = ((LogicHomeMode).LogicHomeMode).getInstance();
        if ((homeMode).isNull()) {
            return;
        } /* if 0xdccbc */
        command = new LogicDebugCommand(actionIdx, intParameter);
        selectedCharacter = (LogicDebugButtonMessage).getSelectedCharacter();
        if ((!(selectedCharacter).isNull())) {
            (((command).instance).add(cachedBrawlerOffset)).writePointer(selectedCharacter);
        } /* if 0xdccff */
        debugCommandActive = true;
        /* CATCH -> 0xdcd26 (try region) */
        (command).execute(homeMode);
        homeMode = command = selectedCharacter = <underflow>;
        /* gosub 0xdcd2c (finally) */
        /* jump -> 0xdcd30 */
        /* gosub 0xdcd2c (finally) */
        throw <underflow>;
        debugCommandActive = false;
        /* end finally */
        return;
}
            addResource (resourceName, amount, dataGainedTypeOverride) {
    var avatar, resource;
        avatar = ((GameStateManager).GameStateManager).getPlayerAvatar();
        if (((avatar).instance).isNull()) {
            return;
        } /* if 0xdcdb7 */
        resource = (this).getResourcePointer(resourceName);
        if ((resource).isNull()) {
            return;
        } /* if 0xdcdd0 */
        (avatar).changeCommodityCount(COMMODITY_TYPE_RESOURCE, resource, amount, COMMODITY_REASON_DEBUG);
        return;
}
            showDataGainedFloater (resourceName, resource, amount, dataGainedTypeOverride) {
    var dataGainedType;
        if ((dataGainedTypeOverride !== undefined)) {
        } /* if 0xdce47 */
        /* jump -> 0xdce4c */
        dataGainedType = RESOURCE_DATA_GAINED_TYPE[resourceName];
        if ((dataGainedType === undefined)) {
            return;
        } /* if 0xdce59 */
        return;
}
            getResourcePointer (name) {
    var cached, data, pointer;
        if ((!(this).resourceDataCache)) {
            this.resourceDataCache = new Map();
        } /* if 0xdcebf */
        cached = ((this).resourceDataCache)["get"](name);
        if (cached) {
            return cached;
        } /* if 0xdced8 */
        data = ((LogicDataTables).LogicDataTables).getTableItemByName((((LogicDataTables).LogicDataTables).table).Resources, name);
        if (((data) == null)) {
        } /* if 0xdcf07 */
        /* jump -> 0xdcf0c */
        if ((((undefined).instance) == null)) {
            pointer = NULL;
        } /* if 0xdcf16 */
        if ((!(pointer).isNull())) {
        } /* if 0xdcf38 */
        return pointer;
}
            showFloater (amount, dataGainedType) {
    var logicData, amount, dataGainedType, logicData, anchorButton;
        logicData = amount;
        amount = dataGainedType;
        if (((logicData) === undefined)) {
            dataGainedType = logicData = NULL;
        } /* if 0xdcfaf */
        logicData = (((HomeScreen).HomeScreen).getHomePage()).getButtonByName(buttonCosmeticCoinsNameStringObject());
        /* is_null  */
        if (logicData) {
            return;
        } /* if 0xdcfd7 */
        return;
}
            getSelectedCharacter () {
    var dailyData, length, arrayPtr;
        dailyData = ((LogicClientHome).LogicClientHome).getPlayerData();
        if (!(!dailyData)) {
            if ((dailyData).isNull()) {
                return NULL;
            } /* if 0xdd065 */
        } /* if 0xdd05d */
        length = ((dailyData).add(dailyDataSelectedCharactersLengthOffset)).readInt();
        if ((length < 1)) {
            return NULL;
        } /* if 0xdd089 */
        arrayPtr = ((dailyData).add(dailyDataSelectedCharactersPtrOffset)).readPointer();
        if ((arrayPtr).isNull()) {
            return NULL;
        } /* if 0xdd0b3 */
        return (arrayPtr).readPointer();
}
        }
        LogicDebugButtonMessage = StringObject = LogicDebugButtonMessage;
        exports.LogicDebugButtonMessage = LogicDebugButtonMessage;
        LogicDebugButtonMessage.resourceDataCache = null;
        return;
};

// --------------------- MODULE 4509 — ViewReplayByStringIdMessage ---------------------

// ============================================================ //
// webpack module 4509  —  ViewReplayByStringIdMessage
// exports: ViewReplayByStringIdMessage
// deps: 1588 (LogicMemory), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4509] = function ViewReplayByStringIdMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, StringObject, stringIdOffset, ViewReplayByStringIdMessage, <class_fields_init>, ViewReplayByStringIdMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ViewReplayByStringIdMessage = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        stringIdOffset = ((LogicMemory).LogicMemory).offset(144);
        <class_fields_init> = undefined;
        ViewReplayByStringIdMessage;
        class ViewReplayByStringIdMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4e158 (open) */
}
            readStringId (message) {
        return ((StringObject).StringObject).read((message).add(stringIdOffset));
}
        }
        ViewReplayByStringIdMessage = v8 = ViewReplayByStringIdMessage;
        exports.ViewReplayByStringIdMessage = ViewReplayByStringIdMessage;
        ViewReplayByStringIdMessage.encodeAddress = ((Libg).Libg).offset(16174088, 0);
        return;
};

// --------------------- MODULE 8777 — UdpConnectionInfoMessage ---------------------

// ============================================================ //
// webpack module 8777  —  UdpConnectionInfoMessage
// exports: UdpConnectionInfoMessage
// deps: 1588 (LogicMemory), 2141 (TSChaCha20), 2556 (BSDPlusManager), 3380 (Logcat), 4009 (Config), 5281 (BSDMessageManager), 6072 (GetBSDBattleProxyMessage), 7535 (StringObject), 8070 (Utils), 9724 (CustomTextEncoder), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8777] = function UdpConnectionInfoMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, LogicMemory, Logcat, BSDMessageManager, TSChaCha20, CustomTextEncoder, GetBSDBattleProxyMessage, Config, Utils, BSDPlusManager, UdpConnectionInfoMessage_decode, portOffset, ipOffset, proxyResponseTimeoutMs, UdpConnectionInfoMessage, <class_fields_init>, UdpConnectionInfoMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.UdpConnectionInfoMessage = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        Logcat = __webpack_require__(3380);
        BSDMessageManager = __webpack_require__(5281);
        TSChaCha20 = __webpack_require__(2141);
        CustomTextEncoder = __webpack_require__(9724);
        GetBSDBattleProxyMessage = __webpack_require__(6072);
        Config = __webpack_require__(4009);
        Utils = __webpack_require__(8070);
        BSDPlusManager = __webpack_require__(2556);
        UdpConnectionInfoMessage_decode = ((Libg).Libg).offset(16264832, 0);
        portOffset = ((LogicMemory).LogicMemory).offset(144);
        ipOffset = ((LogicMemory).LogicMemory).offset(152);
        proxyResponseTimeoutMs = 2500;
        <class_fields_init> = undefined;
        UdpConnectionInfoMessage;
        class UdpConnectionInfoMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4e001 (open) */
}
            patch () {
        return;
}
            requestProxy () {
    var response, acceptingResponse, deadline;
        response = null;
        acceptingResponse = true;
        deadline = ((Date).now() + proxyResponseTimeoutMs);
        /* CATCH -> 0x4dd12 (try region) */
        (((BSDMessageManager).BSDMessageManager).sendMessage(new (GetBSDBattleProxyMessage).GetBSDBattleProxyMessage((UdpConnectionInfoMessage).ip, (UdpConnectionInfoMessage).port), function () {
        /* is_null  */
        while (response) {
            if (((Date).now() < deadline)) {
                ((Utils).Utils).setGameThreadSleepTo(0.01);
                return;
            } /* if 0x4dd72 (open) */
        } /* while 0x4dd72 (open) */
}, false, function (result) {
        if (acceptingResponse) {
            if (((Date).now() < deadline)) {
                response = result;
                return;
            } /* if 0x4ddbf (open) */
        } /* if 0x4ddbf (open) */
}))["catch"](function () {
        return ((Logcat).Logcat).logDebug("Battle proxy request failed; using the game server");
});
        /* gosub 0x4dd18 (finally) */
        return response;
        /* gosub 0x4dd18 (finally) */
        throw response = acceptingResponse = deadline = <underflow>;
        acceptingResponse = false;
        /* end finally */
}
            applyProxyResponse (message, response) {
    var parsedResponseData, chaCha20, decryptedResponse, endpoint, ipString;
        if (!((response).statusCode !== 200)) {
            ((response).statusCode !== 200);
            if ((!(response).json)) {
                return;
            } /* if 0x4de64 */
        } /* if 0x4de61 */
        parsedResponseData = (response).json;
        chaCha20 = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        decryptedResponse = ((CustomTextEncoder).CustomTextEncoder).decode((chaCha20).decrypt(new Uint8Array(((BSDMessageManager).BSDMessageManager).escapedStringToBytes((parsedResponseData).data))));
        endpoint = ((JSON).parse(decryptedResponse)).data;
        if (!(!endpoint)) {
            if (!(typeof (endpoint).ip !== "string")) {
                (typeof (endpoint).ip !== "string");
                if (!(!(endpoint).ip.length)) {
                    if (!(!(Number).isInteger((endpoint).port))) {
                        (!(Number).isInteger((endpoint).port));
                        if (!((endpoint).port < 1)) {
                            if (((endpoint).port > 65535)) {
                                return;
                            } /* if 0x4df47 */
                        } /* if 0x4df44 */
                    } /* if 0x4df44 */
                } /* if 0x4df44 */
            } /* if 0x4df44 */
        } /* if 0x4df44 */
        ipString = ((message).add(ipOffset)).readPointer();
        if ((ipString).isNull()) {
            return;
        } /* if 0x4df6b */
        ((StringObject).StringObject).assign(ipString, (endpoint).ip);
        ((message).add(portOffset)).writeInt((endpoint).port);
        UdpConnectionInfoMessage.ip = (endpoint).ip;
        UdpConnectionInfoMessage.port = (endpoint).port;
        return;
}
        }
        UdpConnectionInfoMessage = Config = UdpConnectionInfoMessage;
        exports.UdpConnectionInfoMessage = UdpConnectionInfoMessage;
        UdpConnectionInfoMessage.ip = "";
        UdpConnectionInfoMessage.port = -1;
        return;
};

// --------------------- MODULE 9493 — AnalyticEvent ---------------------

// ============================================================ //
// webpack module 9493  —  AnalyticEvent
// exports: AnalyticEvent
// deps: 2214 (ModProperties), 3380 (Logcat), 4009 (Config), 4272 (EDebugger), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9493] = function AnalyticEvent_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Logcat, StringObject, Config, ModProperties, EDebugger, AnalyticEvent_setString, AnalyticEvent, <class_fields_init>, AnalyticEvent;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AnalyticEvent = undefined;
        Libg = __webpack_require__(9878);
        Logcat = __webpack_require__(3380);
        StringObject = __webpack_require__(7535);
        Config = __webpack_require__(4009);
        ModProperties = __webpack_require__(2214);
        EDebugger = __webpack_require__(4272);
        AnalyticEvent_setString = ((Libg).Libg).offset(15971784, 0);
        <class_fields_init> = undefined;
        AnalyticEvent;
        class AnalyticEvent {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x72422 (open) */
}
            patch () {
        return;
}
        }
        AnalyticEvent = <class_fields_init> = AnalyticEvent;
        exports.AnalyticEvent = AnalyticEvent;
        return;
};

// --------------------- MODULE 6465 — DeliveryUnit ---------------------

// ============================================================ //
// webpack module 6465  —  DeliveryUnit
// exports: DeliveryUnit
// deps: 1588 (LogicMemory), 1978 (Libc), 5417 (LogicArrayList), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6465] = function DeliveryUnit_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicArrayList, Libc, LogicMemory, DeliveryUnit_ctor, arrayOffset, capacityOffset, itemsCountOffset, DeliveryUnit, <class_fields_init>, DeliveryUnit;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DeliveryUnit = undefined;
        Libg = __webpack_require__(9878);
        LogicArrayList = __webpack_require__(5417);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        DeliveryUnit_ctor = new NativeFunction(((Libg).Libg).offset(14461060, 0), "void", ["pointer", "int"]);
        arrayOffset = ((LogicMemory).LogicMemory).offset(16);
        capacityOffset = ((LogicMemory).LogicMemory).offset(24);
        itemsCountOffset = ((LogicMemory).LogicMemory).offset(28);
        static addDrop (drop) {
        ((this).array).addElement((drop).instance);
        (((this).instance).add(arrayOffset)).writePointer(((this).array).getArray());
        (((this).instance).add(capacityOffset)).writeInt(((this).array).getCapacity());
        (((this).instance).add(itemsCountOffset)).writeInt(((this).array).getItemsCount());
        return this;
};
        <class_fields_init> = undefined;
        DeliveryUnit;
        class DeliveryUnit {
            constructor (unitType) {
        if (<class_fields_init>) {
        } /* if 0x57762 */
        this.instance = ((Libc).Libc).malloc((DeliveryUnit).allocationSize);
        DeliveryUnit_ctor((this).instance, unitType);
        this.array = new (LogicArrayList).LogicArrayList();
        return;
}
        }
        DeliveryUnit = DeliveryUnit = DeliveryUnit;
        exports.DeliveryUnit = DeliveryUnit;
        DeliveryUnit.allocationSize = 32;
        return;
};

// --------------------- MODULE 153 — BattleEndMessage ---------------------

// ============================================================ //
// webpack module 153  —  BattleEndMessage
// exports: BattleEndMessage
// deps: 910 (PlayerEntry), 1588 (LogicMemory), 5417 (LogicArrayList), 5532 (PiranhaMessage)
// ============================================================ //

__webpack_modules__[153] = function BattleEndMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, PiranhaMessage, LogicArrayList, PlayerEntry, battleUUIdHighOffset, battleUUIdLowOffset, typeOffset, resultOffset, winstreakOffset, state264Offset, trainingBattleOffset, playersArrayOffset, gameModeVariationOffset, practiceMatchOffset, BattleEndMessage, <class_fields_init>, BattleEndMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleEndMessage = undefined;
        LogicMemory = __webpack_require__(1588);
        PiranhaMessage = __webpack_require__(5532);
        LogicArrayList = __webpack_require__(5417);
        PlayerEntry = __webpack_require__(910);
        battleUUIdHighOffset = ((LogicMemory).LogicMemory).offset(144);
        battleUUIdLowOffset = ((LogicMemory).LogicMemory).offset(152);
        typeOffset = ((LogicMemory).LogicMemory).offset(160);
        resultOffset = ((LogicMemory).LogicMemory).offset(164);
        winstreakOffset = ((LogicMemory).LogicMemory).offset(240);
        state264Offset = ((LogicMemory).LogicMemory).offset(264);
        trainingBattleOffset = ((LogicMemory).LogicMemory).offset(266);
        playersArrayOffset = ((LogicMemory).LogicMemory).offset(280);
        gameModeVariationOffset = ((LogicMemory).LogicMemory).offset(360);
        practiceMatchOffset = ((LogicMemory).LogicMemory).offset(384);
        static get battleUUIdHigh () {
        return BigInt(((((this).instance).add(battleUUIdHighOffset)).readU64()).toString());
};
        static get battleUUIdLow () {
        return BigInt(((((this).instance).add(battleUUIdLowOffset)).readU64()).toString());
};
        static get battleUUId () {
    var hi, lo, uuid, hex;
        hi = (this).battleUUIdHigh;
        lo = (this).battleUUIdLow;
        uuid = ((hi << 128n) | lo);
        hex = ((uuid).toString(16)).padStart(32, "0");
        return ([(hex).slice(0, 8), (hex).slice(8, 12), (hex).slice(12, 16), (hex).slice(16, 20), (hex).slice(20)]).join("-");
};
        static get type () {
        return (((this).instance).add(typeOffset)).readInt();
};
        static get result () {
        return (((this).instance).add(resultOffset)).readInt();
};
        static get gameModeVariation () {
        return (((this).instance).add(gameModeVariationOffset)).readInt();
};
        static get winstreak () {
        return (((this).instance).add(winstreakOffset)).readInt();
};
        static get state264 () {
        return (!(!(((this).instance).add(state264Offset)).readU8()));
};
        static get trainingBattle () {
        return (!(!(((this).instance).add(trainingBattleOffset)).readU8()));
};
        static get playersArray () {
    var array;
        array = (((this).instance).add(playersArrayOffset)).readPointer();
        if ((array).isNull()) {
            return null;
        } /* if 0x491dd */
        return new (LogicArrayList).LogicArrayList((((this).instance).add(playersArrayOffset)).readPointer());
};
        static getPlayer (index) {
    var playersArray, element;
        playersArray = (this).playersArray;
        if (!(!playersArray)) {
            if (!(index < 0)) {
                if ((index > (playersArray).getItemsCount())) {
                    return null;
                } /* if 0x4925e */
            } /* if 0x4925a */
        } /* if 0x4925a */
        element = (playersArray).getElement(index);
        if ((element).isNull()) {
            return null;
        } /* if 0x4927a */
        return new (PlayerEntry).PlayerEntry(element);
};
        <class_fields_init> = undefined;
        BattleEndMessage;
        class BattleEndMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x492e4 */
        return this;
}
        }
        BattleEndMessage = winstreakOffset = BattleEndMessage;
        exports.BattleEndMessage = BattleEndMessage;
        BattleEndMessage.result = null;
        return;
};

// --------------------- MODULE 3498 — TeamBotSlotDisableMessage ---------------------

// ============================================================ //
// webpack module 3498  —  TeamBotSlotDisableMessage
// exports: TeamBotSlotDisableMessage
// deps: 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3498] = function TeamBotSlotDisableMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libc, Libg, TeamBotSlotDisableMessage_ctor, SLOT_INDEX_OFFSET, DISABLE_FLAG_OFFSET, TeamBotSlotDisableMessage, <class_fields_init>, TeamBotSlotDisableMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamBotSlotDisableMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        TeamBotSlotDisableMessage_ctor = new NativeFunction(((Libg).Libg).offset(15940384, 0), "void", ["pointer"]);
        SLOT_INDEX_OFFSET = 144;
        DISABLE_FLAG_OFFSET = 148;
        <class_fields_init> = undefined;
        TeamBotSlotDisableMessage;
        class TeamBotSlotDisableMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor (slotIndex) {
    var disable, slotIndex, disable, messageInstance, this.active_func, new.target;
        messageInstance = /*special:2*/;
        this.active_func = /*special:3*/;
        disable = slotIndex;
        if (((disable) === undefined)) {
            slotIndex = disable = true;
        } /* if 0x4d35d */
        disable = ((Libc).Libc).malloc((TeamBotSlotDisableMessage).allocationSize);
        TeamBotSlotDisableMessage_ctor(disable);
        ((disable).add(SLOT_INDEX_OFFSET)).writeS32(slotIndex);
        if (disable) {
        } /* if 0x4d3b3 */
        /* jump -> 0x4d3b4 */
        new.target = super(disable);
        if (<class_fields_init>) {
        } /* if 0x4d3d3 */
        return new.target;
}
        }
        TeamBotSlotDisableMessage = TeamBotSlotDisableMessage = TeamBotSlotDisableMessage;
        exports.TeamBotSlotDisableMessage = TeamBotSlotDisableMessage;
        TeamBotSlotDisableMessage.allocationSize = 152;
        return;
};

// --------------------- MODULE 4233 — DebugBillingRequestMessage ---------------------

// ============================================================ //
// webpack module 4233  —  DebugBillingRequestMessage
// exports: DebugBillingRequestMessage
// deps: 1978 (Libc), 5532 (PiranhaMessage), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4233] = function DebugBillingRequestMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libc, Libg, StringObject, DebugBillingRequestMessage_ctor, DebugBillingRequestMessage, <class_fields_init>, DebugBillingRequestMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DebugBillingRequestMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        DebugBillingRequestMessage_ctor = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer"]);
        static set tid (tid) {
        return;
};
        static set prodId (prodId) {
        return;
};
        static set currencyCode (currencyCode) {
        return;
};
        static set price (price) {
        return;
};
        static set receiptData (data) {
    var lenPtr, bufPtr, receiptBuffer, buffer, view;
        lenPtr = ((this).instance).add(216);
        bufPtr = ((this).instance).add(208);
        receiptBuffer = ((Libc).Libc).malloc(data.length);
        buffer = new ArrayBuffer(data.length);
        view = new Uint8Array(buffer);
        (receiptBuffer).writeByteArray(buffer);
        (bufPtr).writePointer(receiptBuffer);
        return;
};
        <class_fields_init> = undefined;
        DebugBillingRequestMessage;
        class DebugBillingRequestMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        messageInstance = ((Libc).Libc).malloc((DebugBillingRequestMessage).allocationSize);
        DebugBillingRequestMessage_ctor(messageInstance);
        this = super(messageInstance);
        if (<class_fields_init>) {
        } /* if 0x49623 */
        return this;
}
        }
        DebugBillingRequestMessage = v8 = DebugBillingRequestMessage;
        exports.DebugBillingRequestMessage = DebugBillingRequestMessage;
        DebugBillingRequestMessage.allocationSize = 224;
        return;
};

