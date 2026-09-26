//============================================================================//// BSD+ API MESSAGES// merged webpack modules: 5577 BSDMessage, 7011 BSDReportBattleEndResultsMessage, 2598 BSDSetTitleMessage, 3458 BSDKeepAliveMessage, 1111 GetBSDOnlineMessage, 1874 GetBSDOwnHomeData, 3548 GetBSDUsersByMask, 5548 LogExceptionMessage, 6072 GetBSDBattleProxyMessage, 6761 StartSCUtilsSpectateMessage, 9622 UnlinkTelegramAccountMessage//============================================================================//
// --------------------- MODULE 5577 — BSDMessage ---------------------


// ============================================================ //
// webpack module 5577  —  BSDMessage
// exports: BSDMessage
// deps: 3380 (Logcat), 8286 (MessageSignatureManager)
// ============================================================ //

__webpack_modules__[5577] = function BSDMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var MessageSignatureManager, Logcat, BSDMessage, <class_fields_init>, BSDMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDMessage = undefined;
        MessageSignatureManager = __webpack_require__(8286);
        Logcat = __webpack_require__(3380);
        static getSignature (body) {
    var newBody;
        newBody = {};
        ((Object).keys(body)).forEach(function (key) {
        if (!(key === "signature")) {
            (key === "signature");
            if ((key === "magic_number")) {
                return;
            } /* if 0xdf65e */
        } /* if 0xdf65b */
        newBody[key] = body[key];
        return;
});
        ((Logcat).Logcat).logDebug((JSON).stringify(newBody));
        return ((MessageSignatureManager).MessageSignatureManager).getRequestSignature(newBody, (body).magic_number);
};
        <class_fields_init> = undefined;
        BSDMessage;
        class BSDMessage {
            constructor (body, route) {
        if (<class_fields_init>) {
        } /* if 0xdf558 */
        body.signature = (this).getSignature(body);
        body.magic_number = (((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier() * 43677);
        this.body = (JSON).stringify(body);
        this.route = route;
        return;
}
        }
        BSDMessage = BSDMessage = BSDMessage;
        exports.BSDMessage = BSDMessage;
        return;
};

// --------------------- MODULE 7011 — BSDReportBattleEndResultsMessage ---------------------


// ============================================================ //
// webpack module 7011  —  BSDReportBattleEndResultsMessage
// exports: BSDReportBattleEndResultsMessage
// deps: 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[7011] = function BSDReportBattleEndResultsMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PlayerInfo, MessageSignatureManager, BSDApi, BSDMessage, BSDReportBattleEndResultsMessage, <class_fields_init>, BSDReportBattleEndResultsMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDReportBattleEndResultsMessage = undefined;
        PlayerInfo = __webpack_require__(9518);
        MessageSignatureManager = __webpack_require__(8286);
        BSDApi = __webpack_require__(7474);
        BSDMessage = __webpack_require__(5577);
        <class_fields_init> = undefined;
        BSDReportBattleEndResultsMessage;
        class BSDReportBattleEndResultsMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (data) {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).REPORT_BATTLEEND_RESULTS);
        requestBody = { tag: ("$").concat(((PlayerInfo).PlayerInfo).tag), magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: "", data: data };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe082e */
        requestBody.magic_number = Number((BigInt((requestBody).magic_number) * BigInt(((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier)));
        return this;
}
        }
        BSDReportBattleEndResultsMessage = v8 = BSDReportBattleEndResultsMessage;
        exports.BSDReportBattleEndResultsMessage = BSDReportBattleEndResultsMessage;
        return;
};

// --------------------- MODULE 2598 — BSDSetTitleMessage ---------------------


// ============================================================ //
// webpack module 2598  —  BSDSetTitleMessage
// exports: BSDSetTitleMessage
// deps: 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[2598] = function BSDSetTitleMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, PlayerInfo, MessageSignatureManager, BSDSetTitleMessage, <class_fields_init>, BSDSetTitleMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDSetTitleMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        PlayerInfo = __webpack_require__(9518);
        MessageSignatureManager = __webpack_require__(8286);
        <class_fields_init> = undefined;
        BSDSetTitleMessage;
        class BSDSetTitleMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (title) {
    var route, secondsLeft, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).setTitleRoute);
        secondsLeft = ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier();
        requestBody = { tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), custom_title: (BSDSetTitleMessage).formatTitle(title), magic_number: secondsLeft, signature: "" };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe0a36 */
        requestBody.magic_number = ((requestBody).magic_number * ((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier);
        return this;
}
            formatTitle (title) {
        return title;
}
        }
        BSDSetTitleMessage = v8 = BSDSetTitleMessage;
        exports.BSDSetTitleMessage = BSDSetTitleMessage;
        return;
};

// --------------------- MODULE 3458 — BSDKeepAliveMessage ---------------------


// ============================================================ //
// webpack module 3458  —  BSDKeepAliveMessage
// exports: BSDKeepAliveMessage
// deps: 2556 (BSDPlusManager), 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[3458] = function BSDKeepAliveMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, MessageSignatureManager, BSDPlusManager, PlayerInfo, BSDKeepAliveMessage, <class_fields_init>, BSDKeepAliveMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDKeepAliveMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        MessageSignatureManager = __webpack_require__(8286);
        BSDPlusManager = __webpack_require__(2556);
        PlayerInfo = __webpack_require__(9518);
        <class_fields_init> = undefined;
        BSDKeepAliveMessage;
        class BSDKeepAliveMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor () {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).KEEP_ALIVE);
        requestBody = { data: ("").concat((+((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled), "#", ((PlayerInfo).PlayerInfo).tag), magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: "" };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe0658 */
        requestBody.magic_number = Number((BigInt((requestBody).magic_number) * BigInt(((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier)));
        return this;
}
        }
        BSDKeepAliveMessage = v8 = BSDKeepAliveMessage;
        exports.BSDKeepAliveMessage = BSDKeepAliveMessage;
        return;
};

// --------------------- MODULE 1111 — GetBSDOnlineMessage ---------------------


// ============================================================ //
// webpack module 1111  —  GetBSDOnlineMessage
// exports: GetBSDOnlineMessage
// deps: 884 (LogicRandom), 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager)
// ============================================================ //

__webpack_modules__[1111] = function GetBSDOnlineMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, MessageSignatureManager, LogicRandom, GetBSDOnlineMessage, <class_fields_init>, GetBSDOnlineMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GetBSDOnlineMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        MessageSignatureManager = __webpack_require__(8286);
        LogicRandom = __webpack_require__(884);
        <class_fields_init> = undefined;
        GetBSDOnlineMessage;
        class GetBSDOnlineMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor () {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).GET_BSD_ONLINE);
        requestBody = { magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: ((LogicRandom).LogicRandom).getRandomInRangeExcept(12, 416) };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe0e13 */
        return this;
}
        }
        GetBSDOnlineMessage = v8 = GetBSDOnlineMessage;
        exports.GetBSDOnlineMessage = GetBSDOnlineMessage;
        GetBSDOnlineMessage.lastOnline = 0;
        return;
};

// --------------------- MODULE 1874 — GetBSDOwnHomeData ---------------------


// ============================================================ //
// webpack module 1874  —  GetBSDOwnHomeData
// exports: GetBSDOwnHomeData
// deps: 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[1874] = function GetBSDOwnHomeData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, PlayerInfo, MessageSignatureManager, GetBSDOwnHomeData, <class_fields_init>, GetBSDOwnHomeData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GetBSDOwnHomeData = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        PlayerInfo = __webpack_require__(9518);
        MessageSignatureManager = __webpack_require__(8286);
        <class_fields_init> = undefined;
        GetBSDOwnHomeData;
        class GetBSDOwnHomeData extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (loginOkData) {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).GET_BSD_OWN_HOME_DATA);
        requestBody = { tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), login_ok_data: loginOkData, magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: "" };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe0fb8 */
        requestBody.magic_number = Number((BigInt((requestBody).magic_number) * BigInt(((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier)));
        return this;
}
        }
        GetBSDOwnHomeData = v8 = GetBSDOwnHomeData;
        exports.GetBSDOwnHomeData = GetBSDOwnHomeData;
        return;
};

// --------------------- MODULE 3548 — GetBSDUsersByMask ---------------------


// ============================================================ //
// webpack module 3548  —  GetBSDUsersByMask
// exports: GetBSDUsersByMask
// deps: 884 (LogicRandom), 3644 (TeamManager), 5577 (BSDMessage), 7332 (Settings), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[3548] = function GetBSDUsersByMask_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, MessageSignatureManager, LogicRandom, PlayerInfo, Settings, TeamManager, GetBSDUsersByMask, <class_fields_init>, GetBSDUsersByMask;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GetBSDUsersByMask = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        MessageSignatureManager = __webpack_require__(8286);
        LogicRandom = __webpack_require__(884);
        PlayerInfo = __webpack_require__(9518);
        Settings = __webpack_require__(7332);
        TeamManager = __webpack_require__(3644);
        <class_fields_init> = undefined;
        GetBSDUsersByMask;
        class GetBSDUsersByMask extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (mask) {
    var gameMode, mask, gameMode, route, requestBody, this.active_func, new.target;
        requestBody = /*special:2*/;
        this.active_func = /*special:3*/;
        gameMode = mask;
        if (((gameMode) === undefined)) {
            mask = gameMode = "NULL";
        } /* if 0xe1176 */
        gameMode = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).GET_BSD_USERS_BY_MASK);
        route = { data: mask, magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: ((LogicRandom).LogicRandom).getRandomInRangeExcept(15251, 414124), tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), gameMode: gameMode, eventSlotIndex: ((Settings).Settings).getLastPlayedEventSlot(), isFriendlyBattle: ((TeamManager).TeamManager).isFriendly() };
        new.target = super(route, gameMode);
        if (<class_fields_init>) {
        } /* if 0xe1241 */
        return new.target;
}
        }
        GetBSDUsersByMask = <class_fields_init> = GetBSDUsersByMask;
        exports.GetBSDUsersByMask = GetBSDUsersByMask;
        return;
};

// --------------------- MODULE 5548 — LogExceptionMessage ---------------------


// ============================================================ //
// webpack module 5548  —  LogExceptionMessage
// exports: LogExceptionMessage
// deps: 2214 (ModProperties), 4009 (Config), 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[5548] = function LogExceptionMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, MessageSignatureManager, PlayerInfo, Config, ModProperties, LogExceptionMessage, <class_fields_init>, LogExceptionMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogExceptionMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        MessageSignatureManager = __webpack_require__(8286);
        PlayerInfo = __webpack_require__(9518);
        Config = __webpack_require__(4009);
        ModProperties = __webpack_require__(2214);
        <class_fields_init> = undefined;
        LogExceptionMessage;
        class LogExceptionMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (exceptionType, exception, tag) {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).LOG_EXCEPTION);
        if (((ModProperties).ModProperties).isIntegration) {
        } /* if 0xe171a */
        /* jump -> 0xe171b */
        ((ModProperties).ModProperties).environment.branch = (" 🦊" + "");
        if (((tag) == null)) {
        } /* if 0xe173e */
        ((ModProperties).ModProperties).environment.playerTag = ("#").concat(((PlayerInfo).PlayerInfo).tag);
        ((ModProperties).ModProperties).environment.config = ((Config).Config).config;
        ((ModProperties).ModProperties).environment.magic_number = ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier();
        requestBody = ((ModProperties).ModProperties).environment;
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe178b */
        requestBody.magic_number = Number((BigInt((requestBody).magic_number) * BigInt(((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier)));
        return this;
}
        }
        LogExceptionMessage = LogExceptionMessage = LogExceptionMessage;
        exports.LogExceptionMessage = LogExceptionMessage;
        return;
};

// --------------------- MODULE 6072 — GetBSDBattleProxyMessage ---------------------


// ============================================================ //
// webpack module 6072  —  GetBSDBattleProxyMessage
// exports: GetBSDBattleProxyMessage
// deps: 884 (LogicRandom), 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[6072] = function GetBSDBattleProxyMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, PlayerInfo, MessageSignatureManager, LogicRandom, GetBSDBattleProxyMessage, <class_fields_init>, GetBSDBattleProxyMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GetBSDBattleProxyMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        PlayerInfo = __webpack_require__(9518);
        MessageSignatureManager = __webpack_require__(8286);
        LogicRandom = __webpack_require__(884);
        <class_fields_init> = undefined;
        GetBSDBattleProxyMessage;
        class GetBSDBattleProxyMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (ip, port) {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).GET_PROXY);
        requestBody = { tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), ip: ip, port: port, magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: ((LogicRandom).LogicRandom).getRandomInRangeExcept(343, 17777) };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe0c47 */
        requestBody.magic_number = Number((BigInt((requestBody).magic_number) * BigInt(((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier)));
        return this;
}
        }
        GetBSDBattleProxyMessage = v8 = GetBSDBattleProxyMessage;
        exports.GetBSDBattleProxyMessage = GetBSDBattleProxyMessage;
        return;
};

// --------------------- MODULE 6761 — StartSCUtilsSpectateMessage ---------------------


// ============================================================ //
// webpack module 6761  —  StartSCUtilsSpectateMessage
// exports: StartSCUtilsSpectateMessage
// deps: 884 (LogicRandom), 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[6761] = function StartSCUtilsSpectateMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDMessage, BSDApi, PlayerInfo, MessageSignatureManager, LogicRandom, StartSCUtilsSpectateMessage, <class_fields_init>, StartSCUtilsSpectateMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StartSCUtilsSpectateMessage = undefined;
        BSDMessage = __webpack_require__(5577);
        BSDApi = __webpack_require__(7474);
        PlayerInfo = __webpack_require__(9518);
        MessageSignatureManager = __webpack_require__(8286);
        LogicRandom = __webpack_require__(884);
        <class_fields_init> = undefined;
        StartSCUtilsSpectateMessage;
        class StartSCUtilsSpectateMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (count, isBrawlTV) {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).SCUTILS_START_SPECTATE);
        requestBody = { tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), count: count, is_live: isBrawlTV, magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: ((LogicRandom).LogicRandom).getRandomInRangeExcept(343, 17777) };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe199b */
        requestBody.magic_number = Number((BigInt((requestBody).magic_number) * BigInt(((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier)));
        return this;
}
        }
        StartSCUtilsSpectateMessage = v8 = StartSCUtilsSpectateMessage;
        exports.StartSCUtilsSpectateMessage = StartSCUtilsSpectateMessage;
        return;
};

// --------------------- MODULE 9622 — UnlinkTelegramAccountMessage ---------------------


// ============================================================ //
// webpack module 9622  —  UnlinkTelegramAccountMessage
// exports: EUnlinkStatus, UnlinkTelegramAccountMessage
// deps: 5577 (BSDMessage), 7474 (BSDApi), 8286 (MessageSignatureManager), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[9622] = function UnlinkTelegramAccountMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PlayerInfo, MessageSignatureManager, BSDApi, BSDMessage, EUnlinkStatus, UnlinkTelegramAccountMessage, <class_fields_init>, UnlinkTelegramAccountMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.EUnlinkStatus = undefined;
        undefined.UnlinkTelegramAccountMessage = exports;
        PlayerInfo = __webpack_require__(9518);
        MessageSignatureManager = __webpack_require__(8286);
        BSDApi = __webpack_require__(7474);
        BSDMessage = __webpack_require__(5577);
        if (!EUnlinkStatus) {
            exports.EUnlinkStatus = v8 = {};
        } /* if 0xe1a8e */
        v8 = {}(exports);
        <class_fields_init> = undefined;
        UnlinkTelegramAccountMessage;
        class UnlinkTelegramAccountMessage extends <class_fields_init> = (BSDMessage).BSDMessage {
            constructor (startUnlink) {
    var route, requestBody, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        route = (((BSDApi).BSDApi).v1ApiRoute + ((BSDApi).BSDApi).UNLINK_TELEGRAM_ACCOUNT);
        requestBody = { tag: ("#").concat(((PlayerInfo).PlayerInfo).tag), startUnlink: startUnlink, magic_number: ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier(), signature: "" };
        this = super(requestBody, route);
        if (<class_fields_init>) {
        } /* if 0xe1beb */
        requestBody.magic_number = ((requestBody).magic_number * ((MessageSignatureManager).MessageSignatureManager).requestMagicalNumberMultiplier);
        return this;
}
        }
        UnlinkTelegramAccountMessage = v8 = UnlinkTelegramAccountMessage;
        exports.UnlinkTelegramAccountMessage = UnlinkTelegramAccountMessage;
        return;
};

