// =============================================================
// SERVER CONNECTION & MESSAGING
// merged webpack modules: 8129 ServerConnection, 7324 Messaging, 9168 MessageManager, 5281 BSDMessageManager, 8286 MessageSignatureManager
// =============================================================

// --------------------- MODULE 8129 — ServerConnection ---------------------

// ============================================================ //
// webpack module 8129  —  ServerConnection
// exports: ServerConnection
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[8129] = function ServerConnection_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, ServerConnection_sm_testContentUpdate, ServerConnection_instanceAddr, ServerConnection_debugResetCurrentAccountData, ServerConnection, <class_fields_init>, ServerConnection;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ServerConnection = undefined;
        Libg = __webpack_require__(9878);
        ServerConnection_sm_testContentUpdate = ((Libg).Libg).offset(19940480, 0);
        ServerConnection_instanceAddr = ((Libg).Libg).offset(19940472, 0);
        ServerConnection_debugResetCurrentAccountData = new NativeFunction(((Libg).Libg).offset(11415320, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        ServerConnection;
        class ServerConnection {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x48b0c (open) */
}
            getInstance () {
        return (ServerConnection_instanceAddr).readPointer();
}
            setTestContentUpdate (enabled) {
        if (enabled) {
        } /* if 0x48a5d */
        /* jump -> 0x48a5e */
        return;
}
            isTestContentUpdateEnabled () {
        return ((ServerConnection_sm_testContentUpdate).readU8() === 1);
}
            debugResetCurrentAccountData () {
    var instance;
        instance = (ServerConnection).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x48ac3 */
        return;
}
            patch () {
        return;
}
        }
        ServerConnection = v8 = ServerConnection;
        exports.ServerConnection = ServerConnection;
        ServerConnection.stackedDelta = 0;
        return;
};

// --------------------- MODULE 7324 — Messaging ---------------------

// ============================================================ //
// webpack module 7324  —  Messaging
// exports: Messaging
// deps: 699 (FileManager), 3902 (NativeDialog), 4009 (Config), 6312 (BSDProxy), 7265 (Localisation), 7535 (StringObject), 9250 (StringTable), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7324] = function Messaging_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, FileManager, Localisation, NativeDialog, StringObject, BSDProxy, StringTable, Messaging_connect, Messaging, <class_fields_init>, Messaging;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Messaging = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        Localisation = __webpack_require__(7265);
        NativeDialog = __webpack_require__(3902);
        StringObject = __webpack_require__(7535);
        BSDProxy = __webpack_require__(6312);
        StringTable = __webpack_require__(9250);
        Messaging_connect = ((Libg).Libg).offset(7935948, 0);
        <class_fields_init> = undefined;
        Messaging;
        class Messaging {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4879a (open) */
}
            patch () {
        return;
}
            clearConnectingTimeout () {
        if ((!(Messaging).connectionTimeout)) {
            return;
        } /* if 0x48755 */
        clearTimeout((Messaging).connectionTimeout);
        Messaging.connectionTimeout = null;
        return;
}
        }
        Messaging = Messaging_connect = Messaging;
        exports.Messaging = Messaging;
        Messaging.connectionTimeout = null;
        return;
};

// --------------------- MODULE 9168 — MessageManager ---------------------

// ============================================================ //
// webpack module 9168  —  MessageManager
// exports: MessageManager, MessageManager_update
// deps: 153 (BattleEndMessage), 356 (LoadingScreen), 1474 (LatencyData), 1588 (LogicMemory), 2476 (CombatHUD), 3226 (PlayAgainMessage), 4009 (Config), 4541 (HashTagCodeGenerator), 4974 (Breadcrumbs), 5281 (BSDMessageManager), 6139 (LogicDataTables), 7011 (BSDReportBattleEndResultsMessage), 7933 (LogicLaserMessageFactory), 9250 (StringTable), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9168] = function MessageManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicLaserMessageFactory, LogicMemory, CombatHUD, Config, PlayAgainMessage, Breadcrumbs, LoadingScreen, BattleEndMessage, HashTagCodeGenerator, LogicDataTables, PlayerInfo, BSDMessageManager, BSDReportBattleEndResultsMessage, LatencyData, StringTable, MessageManager_instanceAddr, MessageManager_receiveMessage, MessageManager_startTutorial, MessageManager_requestSeasonRewards, sendMessageOffset, conversionTutorialFlagOffset, latencyTestsCountOffset, latencyTestsOffset, MessageManager, <class_fields_init>, MessageManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MessageManager_update = undefined;
        undefined.MessageManager = exports;
        Libg = __webpack_require__(9878);
        LogicLaserMessageFactory = __webpack_require__(7933);
        LogicMemory = __webpack_require__(1588);
        CombatHUD = __webpack_require__(2476);
        Config = __webpack_require__(4009);
        PlayAgainMessage = __webpack_require__(3226);
        Breadcrumbs = __webpack_require__(4974);
        LoadingScreen = __webpack_require__(356);
        BattleEndMessage = __webpack_require__(153);
        HashTagCodeGenerator = __webpack_require__(4541);
        LogicDataTables = __webpack_require__(6139);
        PlayerInfo = __webpack_require__(9518);
        BSDMessageManager = __webpack_require__(5281);
        BSDReportBattleEndResultsMessage = __webpack_require__(7011);
        LatencyData = __webpack_require__(1474);
        StringTable = __webpack_require__(9250);
        MessageManager_instanceAddr = ((Libg).Libg).offset(19940336, 0);
        MessageManager_receiveMessage = new NativeFunction(((Libg).Libg).offset(11280784, 0), "int", ["pointer", "pointer"]);
        MessageManager_startTutorial = new NativeFunction(((Libg).Libg).offset(11310400, 0), "void", ["pointer", "pointer", "char"]);
        MessageManager_requestSeasonRewards = new NativeFunction(((Libg).Libg).offset(11313628, 0), "void", ["pointer", "int", "char"]);
        exports.MessageManager_update = ((Libg).Libg).offset(11308636, 0);
        sendMessageOffset = ((LogicMemory).LogicMemory).offset((3 * (Process).pointerSize));
        conversionTutorialFlagOffset = ((LogicMemory).LogicMemory).offset(537);
        latencyTestsCountOffset = ((LogicMemory).LogicMemory).offset(532);
        latencyTestsOffset = ((LogicMemory).LogicMemory).offset(520);
        <class_fields_init> = undefined;
        MessageManager;
        class MessageManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x483e6 (open) */
}
            getInstance () {
        return (MessageManager_instanceAddr).readPointer();
}
            getPiranhaMessageInstance () {
        return (this).piranhaMessage;
}
            sendMessage (message) {
        return new NativeFunction(((((this).getInstance()).readPointer()).add(sendMessageOffset)).readPointer(), "void", ["pointer", "pointer"])((this).getInstance(), (message).instance);
}
            startTutorial (avatar) {
        return;
}
            getLatencyTestsCount () {
        return (((this).getInstance()).add(latencyTestsCountOffset)).readInt();
}
            getLatencyTests () {
    var instance, count, arrayPtr, latencyDatas, i;
        instance = (this).getInstance();
        count = ((instance).add(latencyTestsCountOffset)).readInt();
        arrayPtr = ((instance).add(latencyTestsOffset)).readPointer();
        latencyDatas = [];
        i = 0;
        while ((i < count)) {
            (latencyDatas).push(new (LatencyData).LatencyData(((arrayPtr).add(((Process).pointerSize * i))).readPointer()));
            i = ((i) + 1);
            (i++);
        } /* while 0x47bdb */
        return latencyDatas;
}
            requestSeasonRewards () {
    var seasonId, refresh, seasonId, refresh, instance;
        refresh = this;
        if (((seasonId) === undefined)) {
            seasonId = seasonId = 0;
        } /* if 0x47c2f */
        if (((refresh) === undefined)) {
            refresh = refresh = true;
        } /* if 0x47c38 */
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0x47c4f */
        seasonId = (refresh).getInstance();
        if ((seasonId).isNull()) {
            return;
        } /* if 0x47c67 */
        return;
}
            startTutorialFromConversionPopup () {
    var instance;
        instance = (this).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x47cb4 */
        return;
}
            patch () {
        return;
}
            onMatchMakingStatusMessageReceived (message) {
        if (!(!(((Config).Config).config).BackgroundMatchmaking)) {
            if ((!(MessageManager).inMatchMaking)) {
                return;
            } /* if 0x47ec0 */
        } /* if 0x47ebd */
        MessageManager.matchmakingText = ("").concat((message).playerCount, "/", (message).maxPlayers);
        MessageManager.matchmakingTextPending = true;
        return;
}
            onMatchmakeFailedMessageReceived (message) {
        return;
}
            stopMatchMaking () {
    var resetButton, resetButton;
        if (((resetButton) === undefined)) {
            resetButton = resetButton = true;
        } /* if 0x47f46 */
        if (resetButton) {
            if (!(MessageManager).inMatchMaking) {
                MessageManager.matchmakingTextPending = (MessageManager).matchmakingTextPending;
            } /* if 0x47f63 */
        } /* if 0x47f63 */
        MessageManager.inMatchMaking = false;
        return;
}
            setMatchmakingButtonUpdater (callback) {
        MessageManager.matchmakingButtonUpdater = callback;
        return;
}
            updateMatchmakingButton () {
    var updateButton, text;
        updateButton = (MessageManager).matchmakingButtonUpdater;
        if (!(!(MessageManager).matchmakingTextPending)) {
            if ((!updateButton)) {
                return;
            } /* if 0x47fe2 */
        } /* if 0x47fdf */
        if ((MessageManager).inMatchMaking) {
        } /* if 0x47ff6 */
        /* jump -> 0x4800b */
        text = ((StringTable).StringTable).getString("TID_BATTLE");
        if (updateButton(text)) {
            MessageManager.matchmakingTextPending = false;
            return;
        } /* if 0x4801e (open) */
}
            onBattleEndMessageReceived (message) {
    var playersAmount, gameModeVariationData, variation, battleResult, i, player, playerTag, result, e;
        if ((((message).playersArray) == null)) {
        } /* if 0x480a1 */
        /* jump -> 0x480a9 */
        if (!(undefined).getItemsCount()) {
            (undefined).getItemsCount();
            playersAmount = 0;
        } /* if 0x480ae */
        gameModeVariationData = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).GameModeVariations, (message).gameModeVariation);
        if (gameModeVariationData) {
        } /* if 0x480ea */
        /* jump -> 0x480ef */
        variation = "UNK";
        battleResult = { battleUuid: (message).battleUUId, gameMode: variation, type: (message).type, result: (message).result, ownIndex: -1, winstreak: (message).winstreak, players: [] };
        i = 0;
        while ((i < playersAmount)) {
            /* CATCH -> 0x48222 (try region) */
            player = (message).getPlayer(i);
            if ((!player)) {
                player = playerTag = result = i = (gameModeVariationData).getName();
            } /* if 0x4816c */
            /* jump -> 0x4824c */
            if ((player).playerId) {
            } /* if 0x48190 */
            /* jump -> 0x48195 */
            playerTag = "BOT";
            if ((((player).playerId) == null)) {
            } /* if 0x481a7 */
            /* jump -> 0x481bc */
            if ((undefined).equals(((PlayerInfo).PlayerInfo).accountId)) {
                battleResult.ownIndex = i;
            } /* if 0x481c9 */
            result = { playerTag: playerTag, kills: (player).kills, deaths: (player).deaths, damage: (player).damage, heal: (player).heal };
            ((battleResult).players).push(result);
            /* jump -> 0x4824b */
            e = ((HashTagCodeGenerator).HashTagCodeGenerator).convertLongToPlayerTag((player).playerId);
            /* CATCH -> 0x4824d (try region) */
            ((Breadcrumbs).Breadcrumbs).push(("[MessageManager.onBattleEndMessageReceived] Couldn't handle data for player with index ").concat(i));
            playersAmount = gameModeVariationData = variation = battleResult = <underflow>;
            /* jump -> 0x4824b */
            throw <underflow>;
            i = ((i) + 1);
            (i++);
        } /* while 0x48259 */
        if ((!(message).state264)) {
            if ((!(message).trainingBattle)) {
                (BattleEndMessage).BattleEndMessage.result = battleResult;
                ((BSDMessageManager).BSDMessageManager).sendMessage(new (BSDReportBattleEndResultsMessage).BSDReportBattleEndResultsMessage(battleResult));
                return;
            } /* if 0x48298 (open) */
        } /* if 0x48298 (open) */
}
            onMyAllianceMessageReceived (message) {
    var header;
        header = (message).header;
        if ((!header)) {
            return;
        } /* if 0x482ed */
        (PlayerInfo).PlayerInfo.allianceId = (header).allianceId;
        return;
}
            onPlayAgainStatusMessageReceived (message) {
    var status;
        status = (message).getPlayAgainStatus();
        if ((!([1, 2, 3]).includes(status))) {
            if ((((Config).Config).config).ShowFastPlayAgainButton) {
                if (((CombatHUD).CombatHUD).fastPlayAgainButton) {
                    ((CombatHUD).CombatHUD).fastPlayAgainButton.visibility = true;
                } /* if 0x4838a */
            } /* if 0x4838a */
            if ((((Config).Config).config).AutoPlayAgain) {
                (MessageManager).sendMessage(new (PlayAgainMessage).PlayAgainMessage(true));
                return;
            } /* if 0x483b7 (open) */
        } /* if 0x483b7 (open) */
}
        }
        MessageManager = BattleEndMessage = MessageManager;
        exports.MessageManager = MessageManager;
        MessageManager.matchmakingText = "";
        MessageManager.matchmakingTextPending = false;
        MessageManager.matchmakingButtonUpdater = null;
        MessageManager.inMatchMaking = false;
        MessageManager.DO_NOT_LOG_MESSAGES = [20108, 24109];
        MessageManager.TEST = false;
        return;
};

// --------------------- MODULE 5281 — BSDMessageManager ---------------------

// ============================================================ //
// webpack module 5281  —  BSDMessageManager
// exports: BSDMessageManager
// deps: 2141 (TSChaCha20), 3380 (Logcat), 4009 (Config), 4272 (EDebugger), 6275 (BSDHttpClient), 8286 (MessageSignatureManager), 9724 (CustomTextEncoder)
// ============================================================ //

__webpack_modules__[5281] = function BSDMessageManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BSDHttpClient, TSChaCha20, CustomTextEncoder, MessageSignatureManager, Config, EDebugger, Logcat, RESPONSE_LOG_CHUNK_LENGTH, BSDMessageManager, <class_fields_init>, BSDMessageManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDMessageManager = undefined;
        BSDHttpClient = __webpack_require__(6275);
        TSChaCha20 = __webpack_require__(2141);
        CustomTextEncoder = __webpack_require__(9724);
        MessageSignatureManager = __webpack_require__(8286);
        Config = __webpack_require__(4009);
        EDebugger = __webpack_require__(4272);
        Logcat = __webpack_require__(3380);
        RESPONSE_LOG_CHUNK_LENGTH = 800;
        <class_fields_init> = undefined;
        BSDMessageManager;
        class BSDMessageManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xe04a8 (open) */
}
            sendMessage (message, onSent, shouldSleep, onResponse) {
    var chacha, bodyBytes, bodyBytesEncrypted, body, onComplete, responsePromise;
        chacha = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
        bodyBytes = ((CustomTextEncoder).CustomTextEncoder).encode((message).body);
        bodyBytesEncrypted = (chacha).encrypt(bodyBytes);
        body = { data: (this).bytesToEscapedString((Array).from(bodyBytesEncrypted)) };
        if (!shouldSleep) {
            if (onResponse) {
            } /* if 0xdfcfc */
        } /* if 0xdfcf6 */
        /* jump -> 0xdfd01 */
        onComplete = undefined;
        responsePromise = (new (BSDHttpClient).BSDHttpClient()).post((message).route, (JSON).stringify(body), onComplete);
        if (onSent) {
            onSent();
        } /* if 0xdfd38 */
        return (responsePromise).then(function (response) {
        (BSDMessageManager).logResponse((message).route, response);
        return response;
});
}
            logResponse (route, response) {
    var responseBody, format, encryptedBody, cryptor, bytes, chunks, prefix, index, message;
        if (!(!((Config).Config).useDebugLogging)) {
            if (((((Config).Config).config).ShowBSDApiResponse !== true)) {
                return;
                /* CATCH -> 0xe0066 (try region) */
            } /* if 0xdfe7f */
        } /* if 0xdfe7c */
        if ((!(response).body)) {
            if (((Object).keys((response).headers).length === 0)) {
                return undefined;
            } /* if 0xdfeb7 */
        } /* if 0xdfeb7 */
        responseBody = (response).body;
        format = "";
        encryptedBody = (response).json;
        if (((encryptedBody) == null)) {
        } /* if 0xdfed2 */
        /* jump -> 0xdfed7 */
        if ((typeof (undefined).data === "string")) {
            /* CATCH -> 0xdff76 (try region) */
            cryptor = new (TSChaCha20).TSChaCha20(((TSChaCha20).TSChaCha20).key, ((TSChaCha20).TSChaCha20).nonce);
            bytes = new Uint8Array((BSDMessageManager).escapedStringToBytes((encryptedBody).data));
            responseBody = (JSON).stringify((JSON).parse(((CustomTextEncoder).CustomTextEncoder).decode((cryptor).decrypt(bytes))));
            cryptor = bytes = responseBody = format = encryptedBody = chunks = prefix = <underflow>;
            /* jump -> 0xdff87 */
            /* CATCH -> 0xdff89 (try region) */
            format = " [raw body; JSON decryption failed]";
            /* jump -> 0xdff87 */
            throw <underflow>;
        } /* if 0xdff8a */
        if ((((responseBody).match(new RegExp(("[\\s\\S]{1,").concat(RESPONSE_LOG_CHUNK_LENGTH, "}"), "gu"))) == null)) {
            (responseBody).match(new RegExp(("[\\s\\S]{1,").concat(RESPONSE_LOG_CHUNK_LENGTH, "}"), "gu"));
            chunks = ["<empty body>"];
        } /* if 0xdffc2 */
        prefix = ("[BSD API] ").concat(route, " HTTP ", (response).statusCode, format);
        index = 0;
        while ((index < chunks.length)) {
            message = ("").concat(prefix, " [", (index + 1), "/", chunks.length, "] ", chunks[index]);
            ((Logcat).Logcat).logDebug(message);
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).INFO, message);
            index = ((index) + 1);
            (index++);
            message = index = <underflow>;
        } /* while 0xe0061 */
        return;
        /* CATCH -> 0xe006e (try region) */
        return;
        throw <underflow>;
}
            validateMessage (parsedMessage) {
    var clientResponseSignature, serverResponseSignature, isSignatureOk, clientMagicalNumber, serverMagicalNumber, isMagicalNumberOk;
        clientResponseSignature = ((MessageSignatureManager).MessageSignatureManager).getResponseSignature(parsedMessage);
        serverResponseSignature = (parsedMessage).signature;
        isSignatureOk = (clientResponseSignature === serverResponseSignature);
        clientMagicalNumber = ((MessageSignatureManager).MessageSignatureManager).getMagicalNumberWithoutMultiplier();
        serverMagicalNumber = ((parsedMessage).magic_number / ((MessageSignatureManager).MessageSignatureManager).responseMagicalNumberMultiplier);
        isMagicalNumberOk = ((Math).abs((clientMagicalNumber - serverMagicalNumber)) <= 10);
        if ((!isSignatureOk)) {
            return false;
        } /* if 0xe0147 */
        return isMagicalNumberOk;
}
            bytesToEscapedString (bytes) {
        return ((bytes).map(function (b) {
        return ("\\x" + ((b).toString(16)).padStart(2, "0"));
})).join("");
}
            escapedStringToBytes (input) {
    var bytes, isHex, i, ch, next, hex;
        if ((input).startsWith("b'")) {
            if ((input).endsWith("'")) {
                input = (input).slice(2, -1);
            } /* if 0xe0224 */
        } /* if 0xe0224 */
        /* jump -> 0xe0250 */
        if ((input).startsWith("b\"")) {
            if ((input).endsWith("\"")) {
                input = (input).slice(2, -1);
            } /* if 0xe0250 */
        } /* if 0xe0250 */
        bytes = [];
        isHex = bytes = isHex = <underflow>;
        i = 0;
        while ((i < input.length)) {
            ch = input[i];
            if ((ch !== "\\")) {
                (bytes).push((ch).charCodeAt(0));
                i = ((i) + 1);
                (i++);
                /* loop: jump back to 0xe0261 */
            } /* if 0xe02a5 */
            next = input[(i + 1)];
            if ((next === "x")) {
                if (((i + 3) < input.length)) {
                    if (isHex(input[(i + 2)])) {
                        if (isHex(input[(i + 3)])) {
                            hex = (input).substring((i + 2), (i + 4));
                            (bytes).push(parseInt(hex, 16));
                            i = (i + 4);
                        } /* if 0xe0319 */
                    } /* if 0xe0319 */
                } /* if 0xe0319 */
            } /* if 0xe0319 */
            if (!(next === "\\")) {
                (next === "\\");
                if (!(next === "'")) {
                    (next === "'");
                    if ((next === "\"")) {
                        (bytes).push((next).charCodeAt(0));
                        i = (i + 2);
                    } /* if 0xe0363 */
                } /* if 0xe033c */
            } /* if 0xe033c */
            if ((next === "n")) {
                (bytes).push(10);
                i = (i + 2);
            } /* if 0xe0389 */
            if ((next === "r")) {
                (bytes).push(13);
                i = (i + 2);
            } /* if 0xe03af */
            if ((next === "t")) {
                (bytes).push(9);
                i = (i + 2);
            } /* if 0xe03d5 */
            (bytes).push((next).charCodeAt(0));
            i = (i + 2);
            return bytes;
        } /* while 0xe03fd (open) */
}
        }
        BSDMessageManager = BSDMessageManager = BSDMessageManager;
        exports.BSDMessageManager = BSDMessageManager;
        return;
};

// --------------------- MODULE 8286 — MessageSignatureManager ---------------------

// ============================================================ //
// webpack module 8286  —  MessageSignatureManager
// exports: MessageSignatureManager
// deps: 2508 (CryptoTools), 5485 (LoginOkMessage), 7510 (CustomCRC32)
// ============================================================ //

__webpack_modules__[8286] = function MessageSignatureManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var CryptoTools, CustomCRC32, LoginOkMessage, MessageSignatureManager, <class_fields_init>, MessageSignatureManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MessageSignatureManager = undefined;
        CryptoTools = __webpack_require__(2508);
        CustomCRC32 = __webpack_require__(7510);
        LoginOkMessage = __webpack_require__(5485);
        <class_fields_init> = undefined;
        MessageSignatureManager;
        class MessageSignatureManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x94de3 (open) */
}
            getResponseSignature (response) {
    var newBody, cleanBody, key, xorEncrypted, preSignature;
        if ((!(response).magic_number)) {
            return;
        } /* if 0x94bfa */
        newBody = {};
        ((Object).keys(response)).forEach(function (key) {
        if (!(key === "signature")) {
            (key === "signature");
            if ((key === "magic_number")) {
                return;
            } /* if 0x94cd0 */
        } /* if 0x94ccd */
        newBody[key] = response[key];
        return;
});
        cleanBody = (JSON).stringify(newBody);
        key = ((CryptoTools).CryptoTools).getTransformedPrivateServerKey();
        xorEncrypted = ((CryptoTools).CryptoTools).xor(cleanBody, key);
        preSignature = ((CustomCRC32).CustomCRC32).compute(xorEncrypted);
        return ((BigInt((preSignature * ((response).magic_number / (this).responseMagicalNumberMultiplier)))).toString(16)).slice(0, -2);
}
            getRequestSignature (body, magicalNumber) {
    var key, xorEncrypted, preSignature;
        key = ((CryptoTools).CryptoTools).getTransformedPrivateServerKey();
        xorEncrypted = ((CryptoTools).CryptoTools).xor((JSON).stringify(body), key);
        preSignature = ((CustomCRC32).CustomCRC32).compute(xorEncrypted);
        return ((BigInt((preSignature * magicalNumber))).toString(16)).slice(0, -2);
}
            getMagicalNumberWithoutMultiplier () {
        return (((LoginOkMessage).LoginOkMessage).playTimeInSeconds - ((LoginOkMessage).LoginOkMessage).getSecondsSinceLoginOk());
}
        }
        MessageSignatureManager = MessageSignatureManager = MessageSignatureManager;
        exports.MessageSignatureManager = MessageSignatureManager;
        MessageSignatureManager.responseMagicalNumberMultiplier = 41391;
        MessageSignatureManager.requestMagicalNumberMultiplier = 43677;
        return;
};

