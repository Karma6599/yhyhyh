var ServerConnection_sm_testContentUpdate = Libg.offset(19940480, 0);
var ServerConnection_instanceAddr = Libg.offset(19940472, 0);
var ServerConnection_debugResetCurrentAccountData = new NativeFunction(Libg.offset(11415320, 0), "void", ["pointer"]);

class ServerConnection {
    static getInstance() {
        return ServerConnection_instanceAddr.readPointer();
    }
    static setTestContentUpdate(enabled) {
        if (enabled) {
        }
        return;
    }
    static isTestContentUpdateEnabled() {
        return ServerConnection_sm_testContentUpdate.readU8() === 1;
    }
    static debugResetCurrentAccountData() {
        var instance;
        instance = ServerConnection.getInstance();
        if (instance.isNull()) {
            return;
        }
        ServerConnection_debugResetCurrentAccountData(instance);
        return;
    }
    static patch() {
        return;
    }
}
ServerConnection.stackedDelta = 0;

var Messaging_connect = Libg.offset(7935948, 0);

class Messaging {
    static patch() {
        return;
    }
    static clearConnectingTimeout() {
        if (!Messaging.connectionTimeout) {
            return;
        }
        clearTimeout(Messaging.connectionTimeout);
        Messaging.connectionTimeout = null;
        return;
    }
}
Messaging.connectionTimeout = null;

var MessageManager_instanceAddr = Libg.offset(19940336, 0);
var MessageManager_receiveMessage = new NativeFunction(Libg.offset(11280784, 0), "int", ["pointer", "pointer"]);
var MessageManager_startTutorial = new NativeFunction(Libg.offset(11310400, 0), "void", ["pointer", "pointer", "char"]);
var MessageManager_requestSeasonRewards = new NativeFunction(Libg.offset(11313628, 0), "void", ["pointer", "int", "char"]);
var MessageManager_update = Libg.offset(11308636, 0);
var sendMessageOffset = LogicMemory.offset(3 * Process.pointerSize);
var conversionTutorialFlagOffset = LogicMemory.offset(537);
var latencyTestsCountOffset = LogicMemory.offset(532);
var latencyTestsOffset = LogicMemory.offset(520);

class MessageManager {
    static getInstance() {
        return MessageManager_instanceAddr.readPointer();
    }
    static getPiranhaMessageInstance() {
        return this.piranhaMessage;
    }
    static sendMessage(message) {
        return new NativeFunction(this.getInstance().readPointer().add(sendMessageOffset).readPointer(), "void", ["pointer", "pointer"])(this.getInstance(), message.instance);
    }
    static startTutorial(avatar) {
        return;
    }
    static getLatencyTestsCount() {
        return this.getInstance().add(latencyTestsCountOffset).readInt();
    }
    static getLatencyTests() {
        var instance, count, arrayPtr, latencyDatas, i;
        instance = this.getInstance();
        count = instance.add(latencyTestsCountOffset).readInt();
        arrayPtr = instance.add(latencyTestsOffset).readPointer();
        latencyDatas = [];
        i = 0;
        while (i < count) {
            latencyDatas.push(new LatencyData(arrayPtr.add(Process.pointerSize * i).readPointer()));
            i++;
        }
        return latencyDatas;
    }
    static requestSeasonRewards(seasonId, refresh) {
        var instance;
        if (seasonId === undefined) {
            seasonId = 0;
        }
        if (refresh === undefined) {
            refresh = true;
        }
        if (Process.platform === "darwin") {
            return;
        }
        instance = this.getInstance();
        if (instance.isNull()) {
            return;
        }
        MessageManager_requestSeasonRewards(instance, seasonId, refresh);
        return;
    }
    static startTutorialFromConversionPopup() {
        var instance;
        instance = this.getInstance();
        if (instance.isNull()) {
            return;
        }
        return;
    }
    static patch() {
        return;
    }
    static onMatchMakingStatusMessageReceived(message) {
        if (Config.config.BackgroundMatchmaking) {
            if (!MessageManager.inMatchMaking) {
                return;
            }
        }
        MessageManager.matchmakingText = "".concat(message.playerCount, "/", message.maxPlayers);
        MessageManager.matchmakingTextPending = true;
        return;
    }
    static onMatchmakeFailedMessageReceived(message) {
        return;
    }
    static stopMatchMaking(resetButton) {
        if (resetButton === undefined) {
            resetButton = true;
        }
        if (resetButton) {
            if (!MessageManager.inMatchMaking) {
            }
        }
        MessageManager.inMatchMaking = false;
        return;
    }
    static setMatchmakingButtonUpdater(callback) {
        MessageManager.matchmakingButtonUpdater = callback;
        return;
    }
    static updateMatchmakingButton() {
        var updateButton, text;
        updateButton = MessageManager.matchmakingButtonUpdater;
        if (MessageManager.matchmakingTextPending && !updateButton) {
            return;
        }
        if (MessageManager.inMatchMaking) {
            text = MessageManager.matchmakingText;
        } else {
            text = StringTable.getString("TID_BATTLE");
        }
        if (updateButton(text)) {
            MessageManager.matchmakingTextPending = false;
            return;
        }
    }
    static onBattleEndMessageReceived(message) {
        var playersAmount, gameModeVariationData, variation, battleResult, i, player, playerTag, result, e;
        playersAmount = 0;
        if (message.playersArray != null) {
            playersAmount = message.playersArray.getItemsCount();
            if (!playersAmount) {
                playersAmount = 0;
            }
        }
        gameModeVariationData = LogicDataTables.getDataById(LogicDataTables.table.GameModeVariations, message.gameModeVariation);
        if (gameModeVariationData) {
            variation = gameModeVariationData.getName();
        } else {
            variation = "UNK";
        }
        battleResult = { battleUuid: message.battleUUId, gameMode: variation, type: message.type, result: message.result, ownIndex: -1, winstreak: message.winstreak, players: [] };
        i = 0;
        while (i < playersAmount) {
            try {
                player = message.getPlayer(i);
                if (!player) {
                    i++;
                    continue;
                }
                if (player.playerId) {
                    playerTag = HashTagCodeGenerator.convertLongToPlayerTag(player.playerId);
                } else {
                    playerTag = "BOT";
                }
                if (player.playerId != null && player.playerId.equals(PlayerInfo.accountId)) {
                    battleResult.ownIndex = i;
                }
                result = { playerTag: playerTag, kills: player.kills, deaths: player.deaths, damage: player.damage, heal: player.heal };
                battleResult.players.push(result);
            } catch (e) {
                Breadcrumbs.push("[MessageManager.onBattleEndMessageReceived] Couldn't handle data for player with index ".concat(i));
            }
            i++;
        }
        if (!message.state264) {
            if (!message.trainingBattle) {
                BattleEndMessage.result = battleResult;
                BSDMessageManager.sendMessage(new BSDReportBattleEndResultsMessage(battleResult));
                return;
            }
        }
    }
    static onMyAllianceMessageReceived(message) {
        var header;
        header = message.header;
        if (!header) {
            return;
        }
        PlayerInfo.allianceId = header.allianceId;
        return;
    }
    static onPlayAgainStatusMessageReceived(message) {
        var status;
        status = message.getPlayAgainStatus();
        if (![1, 2, 3].includes(status)) {
            if (Config.config.ShowFastPlayAgainButton) {
                if (CombatHUD.fastPlayAgainButton) {
                    CombatHUD.fastPlayAgainButton.visibility = true;
                }
            }
            if (Config.config.AutoPlayAgain) {
                MessageManager.sendMessage(new PlayAgainMessage(true));
                return;
            }
        }
    }
}
MessageManager.matchmakingText = "";
MessageManager.matchmakingTextPending = false;
MessageManager.matchmakingButtonUpdater = null;
MessageManager.inMatchMaking = false;
MessageManager.DO_NOT_LOG_MESSAGES = [20108, 24109];
MessageManager.TEST = false;

var RESPONSE_LOG_CHUNK_LENGTH = 800;

class BSDMessageManager {
    static sendMessage(message, onSent, shouldSleep, onResponse) {
        var chacha, bodyBytes, bodyBytesEncrypted, body, onComplete, responsePromise;
        chacha = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
        bodyBytes = CustomTextEncoder.encode(message.body);
        bodyBytesEncrypted = chacha.encrypt(bodyBytes);
        body = { data: this.bytesToEscapedString(Array.from(bodyBytesEncrypted)) };
        if (!shouldSleep) {
            if (onResponse) {
            }
        }
        onComplete = undefined;
        responsePromise = new BSDHttpClient().post(message.route, JSON.stringify(body), onComplete);
        if (onSent) {
            onSent();
        }
        return responsePromise.then(function (response) {
            BSDMessageManager.logResponse(message.route, response);
            return response;
        });
    }
    static logResponse(route, response) {
        var responseBody, format, encryptedBody, cryptor, bytes, chunks, prefix, index, message;
        if (!Config.useDebugLogging) {
            return;
        }
        if (Config.config.ShowBSDApiResponse !== true) {
            return;
        }
        try {
            if (!response.body) {
                if (Object.keys(response.headers).length === 0) {
                    return undefined;
                }
            }
            responseBody = response.body;
            format = "";
            encryptedBody = response.json;
            if (encryptedBody != null) {
                if (typeof encryptedBody.data === "string") {
                    try {
                        cryptor = new TSChaCha20(TSChaCha20.key, TSChaCha20.nonce);
                        bytes = new Uint8Array(BSDMessageManager.escapedStringToBytes(encryptedBody.data));
                        responseBody = JSON.stringify(JSON.parse(CustomTextEncoder.decode(cryptor.decrypt(bytes))));
                    } catch (e) {
                        format = " [raw body; JSON decryption failed]";
                    }
                }
            }
            chunks = responseBody.match(new RegExp("[\\s\\S]{1,".concat(RESPONSE_LOG_CHUNK_LENGTH, "}"), "gu"));
            if (chunks == null) {
                chunks = ["<empty body>"];
            }
            prefix = "[BSD API] ".concat(route, " HTTP ", response.statusCode, format);
            index = 0;
            while (index < chunks.length) {
                message = "".concat(prefix, " [", index + 1, "/", chunks.length, "] ", chunks[index]);
                Logcat.logDebug(message);
                EDebugger.addMessage(EDebugger.INFO, message);
                index++;
            }
            return;
        } catch (e) {
            return;
        }
    }
    static validateMessage(parsedMessage) {
        var clientResponseSignature, serverResponseSignature, isSignatureOk, clientMagicalNumber, serverMagicalNumber, isMagicalNumberOk;
        clientResponseSignature = MessageSignatureManager.getResponseSignature(parsedMessage);
        serverResponseSignature = parsedMessage.signature;
        isSignatureOk = clientResponseSignature === serverResponseSignature;
        clientMagicalNumber = MessageSignatureManager.getMagicalNumberWithoutMultiplier();
        serverMagicalNumber = parsedMessage.magic_number / MessageSignatureManager.responseMagicalNumberMultiplier;
        isMagicalNumberOk = Math.abs(clientMagicalNumber - serverMagicalNumber) <= 10;
        if (!isSignatureOk) {
            return false;
        }
        return isMagicalNumberOk;
    }
    static bytesToEscapedString(bytes) {
        return bytes.map(function (b) {
            return "\\x" + b.toString(16).padStart(2, "0");
        }).join("");
    }
    static escapedStringToBytes(input) {
        var bytes, isHex, i, ch, next, hex;
        if (input.startsWith("b'")) {
            if (input.endsWith("'")) {
                input = input.slice(2, -1);
            }
        } else if (input.startsWith("b\"")) {
            if (input.endsWith("\"")) {
                input = input.slice(2, -1);
            }
        }
        bytes = [];
        isHex = function (c) {
            return /[0-9a-fA-F]/.test(c);
        };
        i = 0;
        while (i < input.length) {
            ch = input[i];
            if (ch !== "\\") {
                bytes.push(ch.charCodeAt(0));
                i++;
                continue;
            }
            next = input[i + 1];
            if (next === "x") {
                if (i + 3 < input.length) {
                    if (isHex(input[i + 2])) {
                        if (isHex(input[i + 3])) {
                            hex = input.substring(i + 2, i + 4);
                            bytes.push(parseInt(hex, 16));
                            i = i + 4;
                            continue;
                        }
                    }
                }
            }
            if (next === "\\") {
                bytes.push(next.charCodeAt(0));
                i = i + 2;
            } else if (next === "'") {
                bytes.push(next.charCodeAt(0));
                i = i + 2;
            } else if (next === "\"") {
                bytes.push(next.charCodeAt(0));
                i = i + 2;
            } else if (next === "n") {
                bytes.push(10);
                i = i + 2;
            } else if (next === "r") {
                bytes.push(13);
                i = i + 2;
            } else if (next === "t") {
                bytes.push(9);
                i = i + 2;
            } else {
                bytes.push(next.charCodeAt(0));
                i = i + 2;
            }
        }
        return bytes;
    }
}

class MessageSignatureManager {
    static getResponseSignature(response) {
        var newBody, cleanBody, key, xorEncrypted, preSignature;
        if (!response.magic_number) {
            return;
        }
        newBody = {};
        Object.keys(response).forEach(function (key) {
            if (key === "signature" || key === "magic_number") {
                return;
            }
            newBody[key] = response[key];
            return;
        });
        cleanBody = JSON.stringify(newBody);
        key = CryptoTools.getTransformedPrivateServerKey();
        xorEncrypted = CryptoTools.xor(cleanBody, key);
        preSignature = CustomCRC32.compute(xorEncrypted);
        return BigInt(preSignature * (response.magic_number / this.responseMagicalNumberMultiplier)).toString(16).slice(0, -2);
    }
    static getRequestSignature(body, magicalNumber) {
        var key, xorEncrypted, preSignature;
        key = CryptoTools.getTransformedPrivateServerKey();
        xorEncrypted = CryptoTools.xor(JSON.stringify(body), key);
        preSignature = CustomCRC32.compute(xorEncrypted);
        return BigInt(preSignature * magicalNumber).toString(16).slice(0, -2);
    }
    static getMagicalNumberWithoutMultiplier() {
        return LoginOkMessage.playTimeInSeconds - LoginOkMessage.getSecondsSinceLoginOk();
    }
}
MessageSignatureManager.responseMagicalNumberMultiplier = 41391;
MessageSignatureManager.requestMagicalNumberMultiplier = 43677;
