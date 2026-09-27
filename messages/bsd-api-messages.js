class BSDMessage {
    constructor(body, route) {
        body.signature = this.getSignature(body);
        body.magic_number = MessageSignatureManager.getMagicalNumberWithoutMultiplier() * 43677;
        this.body = JSON.stringify(body);
        this.route = route;
    }
    getSignature(body) {
        var newBody = {};
        Object.keys(body).forEach(function (key) {
            if (key === "signature" || key === "magic_number") {
                return;
            }
            newBody[key] = body[key];
        });
        Logcat.logDebug(JSON.stringify(newBody));
        return MessageSignatureManager.getRequestSignature(newBody, body.magic_number);
    }
}

class BSDReportBattleEndResultsMessage extends BSDMessage {
    constructor(data) {
        var route = BSDApi.v1ApiRoute + BSDApi.REPORT_BATTLEEND_RESULTS;
        var requestBody = { tag: "$".concat(PlayerInfo.tag), magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: "", data: data };
        super(requestBody, route);
        requestBody.magic_number = Number(BigInt(requestBody.magic_number) * BigInt(MessageSignatureManager.requestMagicalNumberMultiplier));
    }
}

class BSDSetTitleMessage extends BSDMessage {
    constructor(title) {
        var route = BSDApi.v1ApiRoute + BSDApi.setTitleRoute;
        var secondsLeft = MessageSignatureManager.getMagicalNumberWithoutMultiplier();
        var requestBody = { tag: "#".concat(PlayerInfo.tag), custom_title: BSDSetTitleMessage.formatTitle(title), magic_number: secondsLeft, signature: "" };
        super(requestBody, route);
        requestBody.magic_number = requestBody.magic_number * MessageSignatureManager.requestMagicalNumberMultiplier;
    }
    static formatTitle(title) {
        return title;
    }
}

class BSDKeepAliveMessage extends BSDMessage {
    constructor() {
        var route = BSDApi.v1ApiRoute + BSDApi.KEEP_ALIVE;
        var requestBody = { data: "".concat(+BSDPlusManager.isBSDPlusEnabled, "#", PlayerInfo.tag), magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: "" };
        super(requestBody, route);
        requestBody.magic_number = Number(BigInt(requestBody.magic_number) * BigInt(MessageSignatureManager.requestMagicalNumberMultiplier));
    }
}

class GetBSDOnlineMessage extends BSDMessage {
    constructor() {
        var route = BSDApi.v1ApiRoute + BSDApi.GET_BSD_ONLINE;
        var requestBody = { magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: LogicRandom.getRandomInRangeExcept(12, 416) };
        super(requestBody, route);
    }
}
GetBSDOnlineMessage.lastOnline = 0;

class GetBSDOwnHomeData extends BSDMessage {
    constructor(loginOkData) {
        var route = BSDApi.v1ApiRoute + BSDApi.GET_BSD_OWN_HOME_DATA;
        var requestBody = { tag: "#".concat(PlayerInfo.tag), login_ok_data: loginOkData, magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: "" };
        super(requestBody, route);
        requestBody.magic_number = Number(BigInt(requestBody.magic_number) * BigInt(MessageSignatureManager.requestMagicalNumberMultiplier));
    }
}

class GetBSDUsersByMask extends BSDMessage {
    constructor(mask, gameMode) {
        if (gameMode === undefined) {
            gameMode = "NULL";
        }
        var route = BSDApi.v1ApiRoute + BSDApi.GET_BSD_USERS_BY_MASK;
        var requestBody = { data: mask, magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: LogicRandom.getRandomInRangeExcept(15251, 414124), tag: "#".concat(PlayerInfo.tag), gameMode: gameMode, eventSlotIndex: Settings.getLastPlayedEventSlot(), isFriendlyBattle: TeamManager.isFriendly() };
        super(requestBody, route);
    }
}

class LogExceptionMessage extends BSDMessage {
    constructor(exceptionType, exception, tag) {
        var route = BSDApi.v1ApiRoute + BSDApi.LOG_EXCEPTION;
        if (!ModProperties.isIntegration) {
            ModProperties.environment.branch = " 🦊" + "";
        }
        if (tag == null) {
            ModProperties.environment.playerTag = "#".concat(PlayerInfo.tag);
        }
        ModProperties.environment.config = Config.config;
        ModProperties.environment.magic_number = MessageSignatureManager.getMagicalNumberWithoutMultiplier();
        var requestBody = ModProperties.environment;
        super(requestBody, route);
        requestBody.magic_number = Number(BigInt(requestBody.magic_number) * BigInt(MessageSignatureManager.requestMagicalNumberMultiplier));
    }
}

class GetBSDBattleProxyMessage extends BSDMessage {
    constructor(ip, port) {
        var route = BSDApi.v1ApiRoute + BSDApi.GET_PROXY;
        var requestBody = { tag: "#".concat(PlayerInfo.tag), ip: ip, port: port, magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: LogicRandom.getRandomInRangeExcept(343, 17777) };
        super(requestBody, route);
        requestBody.magic_number = Number(BigInt(requestBody.magic_number) * BigInt(MessageSignatureManager.requestMagicalNumberMultiplier));
    }
}

class StartSCUtilsSpectateMessage extends BSDMessage {
    constructor(count, isBrawlTV) {
        var route = BSDApi.v1ApiRoute + BSDApi.SCUTILS_START_SPECTATE;
        var requestBody = { tag: "#".concat(PlayerInfo.tag), count: count, is_live: isBrawlTV, magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: LogicRandom.getRandomInRangeExcept(343, 17777) };
        super(requestBody, route);
        requestBody.magic_number = Number(BigInt(requestBody.magic_number) * BigInt(MessageSignatureManager.requestMagicalNumberMultiplier));
    }
}

var EUnlinkStatus = {};

class UnlinkTelegramAccountMessage extends BSDMessage {
    constructor(startUnlink) {
        var route = BSDApi.v1ApiRoute + BSDApi.UNLINK_TELEGRAM_ACCOUNT;
        var requestBody = { tag: "#".concat(PlayerInfo.tag), startUnlink: startUnlink, magic_number: MessageSignatureManager.getMagicalNumberWithoutMultiplier(), signature: "" };
        super(requestBody, route);
        requestBody.magic_number = requestBody.magic_number * MessageSignatureManager.requestMagicalNumberMultiplier;
    }
}
