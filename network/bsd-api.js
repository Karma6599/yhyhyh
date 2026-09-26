// =============================================================
// BSD+ API CLIENT
// merged webpack modules: 7474 BSDApi, 6275 BSDHttpClient, 4461 NativeHTTPClient, 1591 NativeHTTPClientManager, 8886 HTTPResponse, 1753 IOSHTTPOffsets
// =============================================================

// --------------------- MODULE 7474 — BSDApi ---------------------

// ============================================================ //
// webpack module 7474  —  BSDApi
// exports: BSDApi
// ============================================================ //

__webpack_modules__[7474] = function BSDApi_factory(__unused_webpack_module, exports) {
    var BSDApi, <class_fields_init>, BSDApi;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDApi = undefined;
        <class_fields_init> = undefined;
        BSDApi;
        class BSDApi {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xde61f (open) */
}
        }
        BSDApi = BSDApi = BSDApi;
        exports.BSDApi = BSDApi;
        BSDApi.host = "plusapi.bsd.meowfox.net";
        BSDApi.alt_host = "plusapi.bsdbrawl.com";
        BSDApi.port = 80;
        BSDApi.v1ApiRoute = "/bsd/api/v1";
        BSDApi.getServerTimeRoute = "get_server_time";
        BSDApi.linkTagRoute = "/link_tag";
        BSDApi.GET_BSD_OWN_HOME_DATA = "/get_own_home_data";
        BSDApi.KEEP_ALIVE = "/keep_alive";
        BSDApi.GET_BSD_USERS_BY_MASK = "/get_bsd_users_by_mask";
        BSDApi.GET_BSD_ONLINE = "/online";
        BSDApi.setTitleRoute = "/set_title";
        BSDApi.LOG_EXCEPTION = "/log_exception";
        BSDApi.GET_PROXY = "/get_proxy";
        BSDApi.REPORT_BATTLEEND_RESULTS = "/battleend_result";
        BSDApi.UNLINK_TELEGRAM_ACCOUNT = "/unlink_telegram";
        BSDApi.SCUTILS_START_SPECTATE = "/do_spectate";
        BSDApi.RESPONSE_TO_LOCALE = { this_tg_account_linked_already: "BSDPlusTagAlreadyLinkedByYou", other_tg_account_linked_already: "BSDPlusTagAlreadyLinkedByOther", user_has_disabled_notifications: "BSDPlusUserHasDisabledNotifications", waiting_for_confirmation: "BSDPlusWaitingForConfirmation", telegram_timed_out: "BSDPlusTelegramTimedOut", user_not_found: "BSDPlusUserNotFound", unknown_server_error: "BSDPlusUnknownServerError" };
        return;
};

// --------------------- MODULE 6275 — BSDHttpClient ---------------------

// ============================================================ //
// webpack module 6275  —  BSDHttpClient
// exports: BSDHttpClient
// deps: 699 (FileManager), 3380 (Logcat), 4009 (Config), 4272 (EDebugger), 7474 (BSDApi), 8886 (HTTPResponse), 9724 (CustomTextEncoder)
// ============================================================ //

__webpack_modules__[6275] = function BSDHttpClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Config, CustomTextEncoder, EDebugger, Logcat, FileManager, BSDApi, HTTPResponse, SLEEP_TIMEOUT_MS, CONNECT_TIMEOUT_MS, READ_TIMEOUT_MS, BSDHttpClient, <class_fields_init>, BSDHttpClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BSDHttpClient = undefined;
        Config = __webpack_require__(4009);
        CustomTextEncoder = __webpack_require__(9724);
        EDebugger = __webpack_require__(4272);
        Logcat = __webpack_require__(3380);
        FileManager = __webpack_require__(699);
        BSDApi = __webpack_require__(7474);
        HTTPResponse = __webpack_require__(8886);
        SLEEP_TIMEOUT_MS = 2500;
        CONNECT_TIMEOUT_MS = 4000;
        READ_TIMEOUT_MS = 4000;
        static get (path) {
        /* return_async  */
};
        static post (path, body, onComplete) {
    var response;
        response = ((HTTPResponse).HTTPResponse).getNullResponse();
        /* CATCH -> 0xde9c1 (try region) */
        response = await ((this).sendRequest("POST", path, body));
        /* gosub 0xde9c7 (finally) */
        /* return_async  */
        /* gosub 0xde9c7 (finally) */
        throw response;
        if (onComplete) {
            onComplete(response);
            /* end finally */
        } /* if 0xde9cd */
        /* return_async  */
};
        static sendRequest (method, path, body) {
    var target, connection, host, bodyBytes, headers, header, headerBytes, reqBuf, reader, response, chunk, err;
        this.response = "";
        target = await ((this).connectToAvailableHost());
        if ((!target)) {
            /* return_async  */
        } /* if 0xdea90 */
        if (!((undefined) === undefined)) {
            connection = (Object(undefined)).connection;
            host = (Object(undefined)).host;
            Object(undefined);
        } /* if 0xdeaa5 */
        /* jump -> 0xdeaab */
        ((HTTPResponse).HTTPResponse).getNullResponse();
        /* loop: jump back to 0xdea95 */
        /* CATCH -> 0xdec7f (try region) */
        if (((body) == null)) {
        } /* if 0xdead9 */
        bodyBytes = ((CustomTextEncoder).CustomTextEncoder).encode("");
        headers = [("").concat(method, " ", path, " HTTP/1.1"), ("Host: ").concat(host)];
        if ((method === "POST")) {
            (headers).push("Content-Type: application/json", ("Content-Length: ").concat(bodyBytes.length));
        } /* if 0xdeb32 */
        (headers).push("Connection: close", "", "");
        header = (headers).join("\r\n");
        headerBytes = ((CustomTextEncoder).CustomTextEncoder).encode(header);
        reqBuf = new Uint8Array((headerBytes.length + bodyBytes.length));
        await (((connection).output).writeAll((reqBuf).buffer));
        reader = (connection).input;
        response = "";
        chunk = await ((this).readWithTimeout(reader, 4096, READ_TIMEOUT_MS));
        if ((!chunk)) {
            (BSDHttpClient).logConnectionMessage(((EDebugger).EDebugger).ERROR, ("Read failed or timed out: ").concat(host, " ", path));
            /* gosub 0xdecd9 (finally) */
            /* return_async  */
        } /* if 0xdec2f */
        if (!((chunk).byteLength === 0)) {
            response = (response + ((CustomTextEncoder).CustomTextEncoder).decode(chunk));
            /* loop: jump back to 0xdebcb */
        } /* if 0xdec5a */
        this.response = response;
        /* gosub 0xdecd9 (finally) */
        /* return_async  */
        err = (this).parseResponse((this).response);
        /* CATCH -> 0xdecd3 (try region) */
        (BSDHttpClient).logConnectionMessage(((EDebugger).EDebugger).ERROR, ("Socket error: ").concat(host, " ", path, ": ", err));
        /* gosub 0xdecd9 (finally) */
        /* return_async  */
        /* gosub 0xdecd9 (finally) */
        throw ((HTTPResponse).HTTPResponse).getNullResponse();
        await ((this).closeConnection(connection));
        /* end finally */
        /* return_async  */
};
        static connectToAvailableHost () {
    var preferredHost, hosts, fallbackHost, index, host, connection, nextHost;
        if (!(this).customHost) {
            preferredHost = (BSDHttpClient).getPreferredHost();
        } /* if 0xded7e */
        hosts = [preferredHost];
        if ((preferredHost === ((BSDApi).BSDApi).host)) {
        } /* if 0xdeda8 */
        /* jump -> 0xdedb5 */
        fallbackHost = ((BSDApi).BSDApi).host;
        if ((this).useApiHosts) {
            if ((fallbackHost !== preferredHost)) {
                (hosts).push(fallbackHost);
            } /* if 0xdedd7 */
        } /* if 0xdedd7 */
        index = 0;
        while ((index < hosts.length)) {
            host = hosts[index];
            connection = await ((this).connectWithTimeout(host, (this).port));
            if (connection) {
                if ((index > 0)) {
                    (BSDHttpClient).rememberSuccessfulFallback(host);
                    (BSDHttpClient).logConnectionMessage(((EDebugger).EDebugger).INFO, ("Connected to fallback: ").concat(host));
                } /* if 0xdee56 */
                /* return_async  */
            } /* if 0xdee68 */
            nextHost = hosts[(index + 1)];
            if (nextHost) {
            } /* if 0xdee8f */
            /* jump -> 0xdee9c */
            if (nextHost) {
            } /* if 0xdeecf */
            /* jump -> 0xdeed4 */
            ((EDebugger).EDebugger).ERROR(("Connection failed or timed out: ").concat(host, ":", (this).port), (("; trying fallback: ").concat(nextHost) + "; no hosts available"));
            index = ((index) + 1);
            (index++);
            /* return_async  */
        } /* while 0xdeee7 (open) */
};
        static closeConnection (connection) {
        /* CATCH -> 0xdf0d7 (try region) */
        await ((connection).close());
        /* jump -> 0xdf0de */
        /* CATCH -> 0xdf0e0 (try region) */
        /* jump -> 0xdf0de */
        throw <underflow>;
        /* return_async  */
};
        static parseResponse (raw) {
    var headerEndIndex, rawHeaders, rawBody;
        if ((!raw)) {
            return ((HTTPResponse).HTTPResponse).getNullResponse();
        } /* if 0xdf135 */
        headerEndIndex = (raw).indexOf("\r\n\r\n");
        if ((headerEndIndex <= 0)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Incorrect response!");
            return ((HTTPResponse).HTTPResponse).getNullResponse();
        } /* if 0xdf17e */
        rawHeaders = (raw).slice(0, headerEndIndex);
        rawBody = (raw).slice((headerEndIndex + 4));
        return new (HTTPResponse).HTTPResponse(rawHeaders, rawBody);
};
        static getResponse () {
        if ((this).response) {
            return (this).response;
        } /* if 0xdf1e2 */
        return;
};
        static readWithTimeout (reader, size, timeoutMs) {
    var timer;
        timer = undefined;
        /* CATCH -> 0xdf26c (try region) */
        /* gosub 0xdf280 (finally) */
        /* return_async  */
        await ((Promise).race([(reader).read(size), new Promise(function (resolve) {
        timer = setTimeout(function () {
        return resolve(null);
}, timeoutMs);
        return;
})]));
        /* CATCH -> 0xdf27a (try region) */
        /* gosub 0xdf280 (finally) */
        /* return_async  */
        /* gosub 0xdf280 (finally) */
        throw null;
        if ((timer !== undefined)) {
            clearTimeout(timer);
            /* end finally */
        } /* if 0xdf292 */
        /* return_async  */
};
        static connectWithTimeout (host, port) {
    var expired, timer, pendingConnection;
        expired = false;
        timer = undefined;
        pendingConnection = expired = timer = pendingConnection = <underflow>;
        /* CATCH -> 0xdf36c (try region) */
        /* gosub 0xdf372 (finally) */
        /* return_async  */
        /* gosub 0xdf372 (finally) */
        throw await ((Promise).race([pendingConnection(), new Promise(function (resolve) {
        timer = setTimeout(function () {
        expired = true;
        return;
}, CONNECT_TIMEOUT_MS);
        return;
})]));
        if ((timer !== undefined)) {
            clearTimeout(timer);
            /* end finally */
        } /* if 0xdf384 */
        /* return_async  */
};
        <class_fields_init> = undefined;
        BSDHttpClient;
        class BSDHttpClient {
            constructor (host, port) {
        if (<class_fields_init>) {
        } /* if 0xde8e3 */
        this.port = ((BSDApi).BSDApi).port;
        this.response = "";
        this.customHost = host;
        if (port) {
            this.port = port;
        } /* if 0xde90f */
        if ((!host)) {
            this.useApiHosts = (!port);
        } /* if 0xde918 */
        return;
}
            get shouldSleep () {
        if ((this)._shouldSleep) {
            if ((((Date).now() - (this).sleepStartTime) >= SLEEP_TIMEOUT_MS)) {
                this._shouldSleep = false;
            } /* if 0xde84a */
        } /* if 0xde84a */
        return (this)._shouldSleep;
}
            startSleep () {
        this._shouldSleep = true;
        this.sleepStartTime = (Date).now();
        return;
}
            stopSleep () {
        this._shouldSleep = false;
        return;
}
            getPreferredHost () {
    var useAltHost;
        useAltHost = (((Config).Config).config).BSDApiUseAltHost;
        if ((typeof useAltHost === "boolean")) {
            if (useAltHost) {
                return ((BSDApi).BSDApi).alt_host;
            } /* if 0xdef51 */
            return ((BSDApi).BSDApi).host;
        } /* if 0xdef5f */
        if ((((Config).Config).config).BSDProxy) {
            return ((BSDApi).BSDApi).host;
        } /* if 0xdef81 */
        return ((BSDApi).BSDApi).alt_host;
}
            rememberSuccessfulFallback (host) {
    var useAltHost;
        useAltHost = (host === ((BSDApi).BSDApi).alt_host);
        if (((((Config).Config).config).BSDApiUseAltHost === useAltHost)) {
            return;
        } /* if 0xdeff2 */
        ((Config).Config).config.BSDApiUseAltHost = useAltHost;
        /* CATCH -> 0xdf022 (try region) */
        ((FileManager).FileManager).updateConfigFile();
        return;
        useAltHost = <underflow>;
        /* CATCH -> 0xdf048 (try region) */
        (BSDHttpClient).logConnectionMessage(((EDebugger).EDebugger).ERROR, "Could not save API host preference; using it for this session");
        return;
        throw <underflow>;
}
            logConnectionMessage (level, message) {
        ((EDebugger).EDebugger).addMessage(level, message);
        return;
}
        }
        BSDHttpClient = CONNECT_TIMEOUT_MS = BSDHttpClient;
        exports.BSDHttpClient = BSDHttpClient;
        BSDHttpClient._shouldSleep = false;
        BSDHttpClient.sleepStartTime = 0;
        return;
};

// --------------------- MODULE 4461 — NativeHTTPClient ---------------------

// ============================================================ //
// webpack module 4461  —  NativeHTTPClient
// exports: NativeHTTPClient
// deps: 3380 (Logcat), 4272 (EDebugger), 5238 (IOSDownloader)
// ============================================================ //

__webpack_modules__[4461] = function NativeHTTPClient_factory(__unused_webpack_module, exports, __webpack_require__) {
    var EDebugger, Logcat, IOSDownloader, NativeHTTPClient, <class_fields_init>, NativeHTTPClient;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NativeHTTPClient = undefined;
        EDebugger = __webpack_require__(4272);
        Logcat = __webpack_require__(3380);
        IOSDownloader = __webpack_require__(5238);
        <class_fields_init> = undefined;
        NativeHTTPClient;
        class NativeHTTPClient {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x806f1 (open) */
}
            nativeHTTPGetRequest (url, callback, savePath) {
    var msg;
        if ((!savePath)) {
            msg = ("NativeHTTPClient.nativeHTTPGetRequest: savePath required on iOS, got empty for ").concat(url);
            ((Logcat).Logcat).logError(msg);
            /* CATCH -> 0x805de (try region) */
            callback(msg, 0);
            msg = <underflow>;
            return;
            /* CATCH -> 0x805e6 (try region) */
            return;
            throw <underflow>;
        } /* if 0x805e4 */
        return;
}
            nativeHTTPPostRequest (_url, callback, _postData) {
    var msg;
        msg = "NativeHTTPClient.nativeHTTPPostRequest: not supported on iOS";
        ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).WARNING, msg);
        ((Logcat).Logcat).logError(msg);
        /* CATCH -> 0x806bc (try region) */
        callback(msg, 0);
        msg = <underflow>;
        return;
        /* CATCH -> 0x806c4 (try region) */
        return;
        throw <underflow>;
}
        }
        NativeHTTPClient = NativeHTTPClient = NativeHTTPClient;
        exports.NativeHTTPClient = NativeHTTPClient;
        return;
};

// --------------------- MODULE 1591 — NativeHTTPClientManager ---------------------

// ============================================================ //
// webpack module 1591  —  NativeHTTPClientManager
// exports: NativeHTTPClientManager
// deps: 1588 (LogicMemory), 1753 (IOSHTTPOffsets), 1978 (Libc), 4009 (Config), 4272 (EDebugger), 4461 (NativeHTTPClient), 5294 (HostRewriter), 5952 (SafeJNI), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1591] = function NativeHTTPClientManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var HostRewriter, StringObject, Libg, Libc, LogicMemory, EDebugger, NativeHTTPClient, SafeJNI, IOSHTTPOffsets, Config, StartGetRequest, StartPostRequest, getFinishedAddr, postFinishedAddr, origGetFinished, origPostFinished, postDataOffset, postDataOffset2, NativeHTTPClientManager, <class_fields_init>, NativeHTTPClientManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NativeHTTPClientManager = undefined;
        HostRewriter = __webpack_require__(5294);
        StringObject = __webpack_require__(7535);
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        EDebugger = __webpack_require__(4272);
        NativeHTTPClient = __webpack_require__(4461);
        SafeJNI = __webpack_require__(5952);
        IOSHTTPOffsets = __webpack_require__(1753);
        Config = __webpack_require__(4009);
        StartGetRequest = new NativeFunction(((Libg).Libg).offset(7653996, 0), "int", ["pointer", "pointer", "pointer", "pointer"]);
        StartPostRequest = new NativeFunction(((Libg).Libg).offset(7651716, 0), "int", ["pointer", "pointer", "pointer"]);
        getFinishedAddr = ((Libg).Libg).offset(7366932, 0);
        postFinishedAddr = ((Libg).Libg).offset(7367156, 0);
        origGetFinished = new NativeFunction(getFinishedAddr, "void", ["int", "int", "pointer", "int", "int"]);
        origPostFinished = new NativeFunction(postFinishedAddr, "void", ["int", "int", "pointer", "int", "int"]);
        postDataOffset = ((LogicMemory).LogicMemory).offset(8);
        postDataOffset2 = ((LogicMemory).LogicMemory).offset(16);
        <class_fields_init> = undefined;
        NativeHTTPClientManager;
        class NativeHTTPClientManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7ef87 (open) */
}
            nativeHTTPGetRequest (hostName, callback) {
    var fileSavePath, hostName, callback, fileSavePath;
        fileSavePath = this;
        fileSavePath = hostName;
        hostName = callback;
        if (((fileSavePath) === undefined)) {
            callback = fileSavePath = "";
        } /* if 0x7e59f */
        if (((Process).platform !== "darwin")) {
            if ((!((SafeJNI).SafeJNI).isAvailable())) {
                return;
            } /* if 0x7e5e7 */
        } /* if 0x7e5e7 */
        return;
}
            nativeHTTPPostRequest (hostName, callback, postData) {
    var postDataVector, postDataBuffer, postBody, arrayBuffer;
        if ((!(postData).instance)) {
            return;
        } /* if 0x7e83f */
        postDataVector = ((Libc).Libc).malloc(24);
        if (((postData).instance.length > 0)) {
        } /* if 0x7e865 */
        /* jump -> 0x7e86e */
        postDataBuffer = new Uint8Array();
        postBody = ((Libc).Libc).malloc((postDataBuffer).byteLength);
        arrayBuffer = ((postDataBuffer).buffer).slice((postDataBuffer).byteOffset, ((postDataBuffer).byteOffset + (postDataBuffer).byteLength));
        (postBody).writeByteArray(arrayBuffer);
        (postDataVector).writePointer(postBody);
        ((postDataVector).add(postDataOffset)).writePointer((postBody).add((postDataBuffer).byteLength));
        ((postDataVector).add(postDataOffset2)).writePointer((postBody).add((postDataBuffer).byteLength));
        return;
}
            onNativeHTTPResponse (id, responseArrayBuffer, statusCode) {
    var pendingRequestID;
        pendingRequestID = (id).toString();
        if ((((Object).keys((this).queuedRequests)).indexOf(pendingRequestID) !== -1)) {
            /* delete  */
            return;
        } /* if 0x7ea70 (open) */
}
            applyRewrite (args, urlArgIdx) {
    var url, newUrl, newSO;
        /* CATCH -> 0x7eb0a (try region) */
        url = ((StringObject).StringObject).read(args[urlArgIdx]);
        newUrl = ((HostRewriter).HostRewriter).rewrite(url);
        if ((!newUrl)) {
            return null;
        } /* if 0x7eae7 */
        newSO = ((StringObject).StringObject).create(newUrl);
        args[urlArgIdx] = newSO;
        return newSO;
        url = newUrl = newSO = <underflow>;
        /* CATCH -> 0x7eb13 (try region) */
        return null;
        throw <underflow>;
}
            freeRewroteSO (rewroteSO) {
        if (!(!rewroteSO)) {
            if ((rewroteSO).isNull()) {
                return;
                /* CATCH -> 0x7eb64 (try region) */
            } /* if 0x7eb48 */
        } /* if 0x7eb45 */
        ((StringObject).StringObject).clear(rewroteSO);
        return;
        /* CATCH -> 0x7eb6c (try region) */
        return;
        throw <underflow>;
}
            flushPendingDownloads () {
    var pending;
        if (((this).pendingDownloads.length === 0)) {
            return;
        } /* if 0x7eb9c */
        pending = ((this).pendingDownloads).splice(0);
        return;
}
            dispatchFinishedHook (args) {
    var requestID, dataByteArray, dataLength, statusCode;
        /* CATCH -> 0x7ec9e (try region) */
        requestID = (args[1]).toInt32();
        dataByteArray = args[2];
        dataLength = (args[3]).toInt32();
        statusCode = (args[4]).toInt32();
        (NativeHTTPClientManager).onNativeHTTPResponse(requestID, (dataByteArray).readByteArray(dataLength), statusCode);
        requestID = dataByteArray = dataLength = statusCode = <underflow>;
        return;
        /* CATCH -> 0x7eca6 (try region) */
        return;
        throw <underflow>;
}
            patch () {
        if (((Process).platform === "darwin")) {
            return;
        } /* if 0x7ece0 */
        return;
}
            patchIos () {
    var URL_ARG_INDEX, onEnter, onLeave;
        URL_ARG_INDEX = 1;
        onEnter = URL_ARG_INDEX = onEnter = onLeave = <underflow>;
        onLeave = <underflow>;
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_get, { onEnter: onEnter, onLeave: onLeave });
        (Interceptor).attach((IOSHTTPOffsets).HTTPClient_post, { onEnter: onEnter, onLeave: onLeave });
        return;
}
            patchAndroid () {
    var URL_ARG_INDEX;
        URL_ARG_INDEX = 0;
        (Interceptor).attach(getFinishedAddr, { onEnter: (NativeHTTPClientManager).dispatchFinishedHook });
        (Interceptor).attach(postFinishedAddr, { onEnter: (NativeHTTPClientManager).dispatchFinishedHook });
        return;
}
        }
        NativeHTTPClientManager = IOSHTTPOffsets = NativeHTTPClientManager;
        exports.NativeHTTPClientManager = NativeHTTPClientManager;
        NativeHTTPClientManager.queuedRequests = {};
        NativeHTTPClientManager.pendingDownloads = [];
        return;
};

// --------------------- MODULE 8886 — HTTPResponse ---------------------

// ============================================================ //
// webpack module 8886  —  HTTPResponse
// exports: HTTPResponse
// deps: 4272 (EDebugger), 9724 (CustomTextEncoder)
// ============================================================ //

__webpack_modules__[8886] = function HTTPResponse_factory(__unused_webpack_module, exports, __webpack_require__) {
    var EDebugger, CustomTextEncoder, HTTPResponse, <class_fields_init>, HTTPResponse;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HTTPResponse = undefined;
        EDebugger = __webpack_require__(4272);
        CustomTextEncoder = __webpack_require__(9724);
        static get statusCode () {
    var statusLine, splittedLine;
        statusLine = ((this)._rawHeaders).split("\r\n")[0];
        splittedLine = (statusLine).split(" ");
        if ((splittedLine.length < 2)) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).ERROR, "Cannot parse status code.");
            return -1;
        } /* if 0xdf815 */
        return parseInt(splittedLine[1]);
};
        static get body () {
        return (this)._body;
};
        static get bytes () {
        return ((CustomTextEncoder).CustomTextEncoder).encode((this).body);
};
        static get json () {
    var body, isObject, isArray, e;
        /* CATCH -> 0xdf95b (try region) */
        if (!(!(this)._body)) {
            if ((typeof (this)._body !== "string")) {
                return null;
            } /* if 0xdf8d9 */
        } /* if 0xdf8d4 */
        body = ((this)._body).trim();
        if ((body).startsWith("{")) {
            (body).startsWith("{");
            isObject = (body).endsWith("}");
        } /* if 0xdf90d */
        if ((body).startsWith("[")) {
            (body).startsWith("[");
            isArray = (body).endsWith("]");
        } /* if 0xdf932 */
        if ((!isObject)) {
            if ((!isArray)) {
                return null;
            } /* if 0xdf942 */
        } /* if 0xdf942 */
        return (JSON).parse((this)._body);
        e = body = isObject = isArray = <underflow>;
        /* CATCH -> 0xdf964 (try region) */
        return null;
        throw <underflow>;
};
        static get headers () {
    var headers, lines, i, line, index, key;
        headers = {};
        lines = ((this)._rawHeaders).split(new RegExp("\\r?\\n", "\u0000\u0001\u0000(\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\u001c\u0004\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0001\r\u0000\n\u0001\n\u0000\f\u0000\n"));
        i = 1;
        while ((i < lines.length)) {
            line = (lines[i]).trim();
            if (!(!line)) {
                index = (line).indexOf(":");
                if (!(index === -1)) {
                    key = (((line).slice(0, index)).trim()).toLowerCase();
                    headers[key] = ((line).slice((index + 1))).trim();
                } /* if 0xdfa52 */
                i = ((i) + 1);
                (i++);
            } /* if 0xdfa5d */
            return headers;
        } /* while 0xdfa60 (open) */
};
        <class_fields_init> = undefined;
        HTTPResponse;
        class HTTPResponse {
            constructor (rawHeaders, body) {
        if (<class_fields_init>) {
        } /* if 0xdf780 */
        this._rawHeaders = rawHeaders;
        this._body = body;
        return;
}
            getNullResponse () {
        return new HTTPResponse("", "");
}
        }
        HTTPResponse = HTTPResponse = HTTPResponse;
        exports.HTTPResponse = HTTPResponse;
        return;
};

// --------------------- MODULE 1753 — IOSHTTPOffsets ---------------------

// ============================================================ //
// webpack module 1753  —  IOSHTTPOffsets
// exports: HTTPClient_download, HTTPClient_downloadFinalize, HTTPClient_get, HTTPClient_getMainTrampoline, HTTPClient_initWrapper, HTTPClient_post, HTTPClient_postMainTrampoline
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[1753] = function IOSHTTPOffsets_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.HTTPClient_initWrapper = undefined;
        undefined.HTTPClient_get = exports;
        exports.HTTPClient_post = undefined;
        undefined.HTTPClient_download = exports;
        exports.HTTPClient_getMainTrampoline = undefined;
        undefined.HTTPClient_postMainTrampoline = exports;
        exports.HTTPClient_downloadFinalize = undefined;
        Libg = __webpack_require__(9878);
        exports.HTTPClient_initWrapper = new NativeFunction(((Libg).Libg).offset(0, 0), "pointer", ["pointer"]);
        exports.HTTPClient_get = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer", "pointer", "pointer"]);
        exports.HTTPClient_post = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer", "pointer"]);
        exports.HTTPClient_download = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);
        exports.HTTPClient_getMainTrampoline = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer"]);
        exports.HTTPClient_postMainTrampoline = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer"]);
        exports.HTTPClient_downloadFinalize = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer"]);
        return;
};

