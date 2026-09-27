class BSDApi {
}

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

var SLEEP_TIMEOUT_MS = 2500;
var CONNECT_TIMEOUT_MS = 4000;
var READ_TIMEOUT_MS = 4000;

class BSDHttpClient {
    constructor(host, port) {
        this.port = BSDApi.port;
        this.response = "";
        this.customHost = host;
        if (port) {
            this.port = port;
        }
        if (!host) {
            this.useApiHosts = !port;
        }
        return;
    }
    get shouldSleep() {
        if (this._shouldSleep) {
            if (Date.now() - this.sleepStartTime >= SLEEP_TIMEOUT_MS) {
                this._shouldSleep = false;
            }
        }
        return this._shouldSleep;
    }
    startSleep() {
        this._shouldSleep = true;
        this.sleepStartTime = Date.now();
        return;
    }
    stopSleep() {
        this._shouldSleep = false;
        return;
    }
    async get(path) {
    }
    async post(path, body, onComplete) {
        var response;
        response = HTTPResponse.getNullResponse();
        try {
            response = await this.sendRequest("POST", path, body);
            return response;
        } finally {
            if (onComplete) {
                onComplete(response);
            }
        }
    }
    async sendRequest(method, path, body) {
        var target, connection, host, bodyBytes, headers, header, headerBytes, reqBuf, reader, response, chunk, err;
        this.response = "";
        target = await this.connectToAvailableHost();
        if (!target) {
            return HTTPResponse.getNullResponse();
        }
        connection = target.connection;
        host = target.host;
        try {
            if (body == null) {
                body = "";
            }
            bodyBytes = CustomTextEncoder.encode(body);
            headers = ["".concat(method, " ", path, " HTTP/1.1"), "Host: ".concat(host)];
            if (method === "POST") {
                headers.push("Content-Type: application/json", "Content-Length: ".concat(bodyBytes.length));
            }
            headers.push("Connection: close", "", "");
            header = headers.join("\r\n");
            headerBytes = CustomTextEncoder.encode(header);
            reqBuf = new Uint8Array(headerBytes.length + bodyBytes.length);
            await connection.output.writeAll(reqBuf.buffer);
            reader = connection.input;
            response = "";
            while (true) {
                chunk = await this.readWithTimeout(reader, 4096, READ_TIMEOUT_MS);
                if (!chunk) {
                    BSDHttpClient.logConnectionMessage(EDebugger.ERROR, "Read failed or timed out: ".concat(host, " ", path));
                    return HTTPResponse.getNullResponse();
                }
                if (chunk.byteLength === 0) {
                    break;
                }
                response = response + CustomTextEncoder.decode(chunk);
            }
            this.response = response;
            return this.parseResponse(this.response);
        } catch (err) {
            BSDHttpClient.logConnectionMessage(EDebugger.ERROR, "Socket error: ".concat(host, " ", path, ": ", err));
            return HTTPResponse.getNullResponse();
        } finally {
            await this.closeConnection(connection);
        }
    }
    async connectToAvailableHost() {
        var preferredHost, hosts, fallbackHost, index, host, connection, nextHost;
        if (!this.customHost) {
            preferredHost = BSDHttpClient.getPreferredHost();
        }
        hosts = [preferredHost];
        fallbackHost = BSDApi.host;
        if (this.useApiHosts) {
            if (fallbackHost !== preferredHost) {
                hosts.push(fallbackHost);
            }
        }
        index = 0;
        while (index < hosts.length) {
            host = hosts[index];
            connection = await this.connectWithTimeout(host, this.port);
            if (connection) {
                if (index > 0) {
                    BSDHttpClient.rememberSuccessfulFallback(host);
                    BSDHttpClient.logConnectionMessage(EDebugger.INFO, "Connected to fallback: ".concat(host));
                }
                return { connection: connection, host: host };
            }
            nextHost = hosts[index + 1];
            EDebugger.addMessage(EDebugger.ERROR, "Connection failed or timed out: ".concat(host, ":", this.port) + (nextHost ? "; trying fallback: ".concat(nextHost) : "; no hosts available"));
            index++;
        }
        return;
    }
    async closeConnection(connection) {
        try {
            await connection.close();
        } catch (e) {
        }
        return;
    }
    parseResponse(raw) {
        var headerEndIndex, rawHeaders, rawBody;
        if (!raw) {
            return HTTPResponse.getNullResponse();
        }
        headerEndIndex = raw.indexOf("\r\n\r\n");
        if (headerEndIndex <= 0) {
            EDebugger.addMessage(EDebugger.ERROR, "Incorrect response!");
            return HTTPResponse.getNullResponse();
        }
        rawHeaders = raw.slice(0, headerEndIndex);
        rawBody = raw.slice(headerEndIndex + 4);
        return new HTTPResponse(rawHeaders, rawBody);
    }
    getResponse() {
        if (this.response) {
            return this.response;
        }
        return;
    }
    async readWithTimeout(reader, size, timeoutMs) {
        var timer;
        timer = undefined;
        try {
            return await Promise.race([reader.read(size), new Promise(function (resolve) {
                timer = setTimeout(function () {
                    return resolve(null);
                }, timeoutMs);
                return;
            })]);
        } finally {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        }
    }
    async connectWithTimeout(host, port) {
        var expired, timer, pendingConnection;
        expired = false;
        timer = undefined;
        try {
            return await Promise.race([pendingConnection(), new Promise(function (resolve) {
                timer = setTimeout(function () {
                    expired = true;
                    return;
                }, CONNECT_TIMEOUT_MS);
                return;
            })]);
        } finally {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        }
    }
    static getPreferredHost() {
        var useAltHost;
        useAltHost = Config.config.BSDApiUseAltHost;
        if (typeof useAltHost === "boolean") {
            if (useAltHost) {
                return BSDApi.alt_host;
            }
            return BSDApi.host;
        }
        if (Config.config.BSDProxy) {
            return BSDApi.host;
        }
        return BSDApi.alt_host;
    }
    static rememberSuccessfulFallback(host) {
        var useAltHost;
        useAltHost = host === BSDApi.alt_host;
        if (Config.config.BSDApiUseAltHost === useAltHost) {
            return;
        }
        Config.config.BSDApiUseAltHost = useAltHost;
        try {
            FileManager.updateConfigFile();
            return;
        } catch (e) {
            BSDHttpClient.logConnectionMessage(EDebugger.ERROR, "Could not save API host preference; using it for this session");
            return;
        }
    }
    static logConnectionMessage(level, message) {
        EDebugger.addMessage(level, message);
        return;
    }
}
BSDHttpClient._shouldSleep = false;
BSDHttpClient.sleepStartTime = 0;

class NativeHTTPClient {
    static nativeHTTPGetRequest(url, callback, savePath) {
        var msg;
        if (!savePath) {
            msg = "NativeHTTPClient.nativeHTTPGetRequest: savePath required on iOS, got empty for ".concat(url);
            Logcat.logError(msg);
            try {
                callback(msg, 0);
            } catch (e) {
            }
            return;
        }
        return;
    }
    static nativeHTTPPostRequest(_url, callback, _postData) {
        var msg;
        msg = "NativeHTTPClient.nativeHTTPPostRequest: not supported on iOS";
        EDebugger.addMessage(EDebugger.WARNING, msg);
        Logcat.logError(msg);
        try {
            callback(msg, 0);
        } catch (e) {
        }
        return;
    }
}

var StartGetRequest = new NativeFunction(Libg.offset(7653996, 0), "int", ["pointer", "pointer", "pointer", "pointer"]);
var StartPostRequest = new NativeFunction(Libg.offset(7651716, 0), "int", ["pointer", "pointer", "pointer"]);
var getFinishedAddr = Libg.offset(7366932, 0);
var postFinishedAddr = Libg.offset(7367156, 0);
var origGetFinished = new NativeFunction(getFinishedAddr, "void", ["int", "int", "pointer", "int", "int"]);
var origPostFinished = new NativeFunction(postFinishedAddr, "void", ["int", "int", "pointer", "int", "int"]);
var postDataOffset = LogicMemory.offset(8);
var postDataOffset2 = LogicMemory.offset(16);

class NativeHTTPClientManager {
    static nativeHTTPGetRequest(hostName, callback, fileSavePath) {
        if (fileSavePath === undefined) {
            fileSavePath = "";
        }
        if (Process.platform !== "darwin") {
            if (!SafeJNI.isAvailable()) {
                return;
            }
        }
        return;
    }
    static nativeHTTPPostRequest(hostName, callback, postData) {
        var postDataVector, postDataBuffer, postBody, arrayBuffer;
        if (!postData.instance) {
            return;
        }
        postDataVector = Libc.malloc(24);
        if (postData.instance.length > 0) {
        }
        postDataBuffer = new Uint8Array(postData.instance);
        postBody = Libc.malloc(postDataBuffer.byteLength);
        arrayBuffer = postDataBuffer.buffer.slice(postDataBuffer.byteOffset, postDataBuffer.byteOffset + postDataBuffer.byteLength);
        postBody.writeByteArray(arrayBuffer);
        postDataVector.writePointer(postBody);
        postDataVector.add(postDataOffset).writePointer(postBody.add(postDataBuffer.byteLength));
        postDataVector.add(postDataOffset2).writePointer(postBody.add(postDataBuffer.byteLength));
        return;
    }
    static onNativeHTTPResponse(id, responseArrayBuffer, statusCode) {
        var pendingRequestID;
        pendingRequestID = id.toString();
        if (Object.keys(NativeHTTPClientManager.queuedRequests).indexOf(pendingRequestID) !== -1) {
            delete NativeHTTPClientManager.queuedRequests[pendingRequestID];
            return;
        }
    }
    static applyRewrite(args, urlArgIdx) {
        var url, newUrl, newSO;
        try {
            url = StringObject.read(args[urlArgIdx]);
            newUrl = HostRewriter.rewrite(url);
            if (!newUrl) {
                return null;
            }
            newSO = StringObject.create(newUrl);
            args[urlArgIdx] = newSO;
            return newSO;
        } catch (e) {
            return null;
        }
    }
    static freeRewroteSO(rewroteSO) {
        if (rewroteSO && rewroteSO.isNull()) {
            return;
        }
        StringObject.clear(rewroteSO);
        return;
    }
    static flushPendingDownloads() {
        var pending;
        if (NativeHTTPClientManager.pendingDownloads.length === 0) {
            return;
        }
        pending = NativeHTTPClientManager.pendingDownloads.splice(0);
        return;
    }
    static dispatchFinishedHook(args) {
        var requestID, dataByteArray, dataLength, statusCode;
        try {
            requestID = args[1].toInt32();
            dataByteArray = args[2];
            dataLength = args[3].toInt32();
            statusCode = args[4].toInt32();
            NativeHTTPClientManager.onNativeHTTPResponse(requestID, dataByteArray.readByteArray(dataLength), statusCode);
        } catch (e) {
            return;
        }
    }
    static patch() {
        if (Process.platform === "darwin") {
            return;
        }
        return;
    }
    static patchIos() {
        var URL_ARG_INDEX, onEnter, onLeave;
        URL_ARG_INDEX = 1;
        onEnter = undefined;
        onLeave = undefined;
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_get, { onEnter: onEnter, onLeave: onLeave });
        Interceptor.attach(IOSHTTPOffsets.HTTPClient_post, { onEnter: onEnter, onLeave: onLeave });
        return;
    }
    static patchAndroid() {
        var URL_ARG_INDEX;
        URL_ARG_INDEX = 0;
        Interceptor.attach(getFinishedAddr, { onEnter: NativeHTTPClientManager.dispatchFinishedHook });
        Interceptor.attach(postFinishedAddr, { onEnter: NativeHTTPClientManager.dispatchFinishedHook });
        return;
    }
}
NativeHTTPClientManager.queuedRequests = {};
NativeHTTPClientManager.pendingDownloads = [];

class HTTPResponse {
    constructor(rawHeaders, body) {
        this._rawHeaders = rawHeaders;
        this._body = body;
        return;
    }
    get statusCode() {
        var statusLine, splittedLine;
        statusLine = this._rawHeaders.split("\r\n")[0];
        splittedLine = statusLine.split(" ");
        if (splittedLine.length < 2) {
            EDebugger.addMessage(EDebugger.ERROR, "Cannot parse status code.");
            return -1;
        }
        return parseInt(splittedLine[1]);
    }
    get body() {
        return this._body;
    }
    get bytes() {
        return CustomTextEncoder.encode(this.body);
    }
    get json() {
        var body, isObject, isArray, e;
        try {
            if (!this._body || typeof this._body !== "string") {
                return null;
            }
            body = this._body.trim();
            isObject = body.startsWith("{") && body.endsWith("}");
            isArray = body.startsWith("[") && body.endsWith("]");
            if (!isObject && !isArray) {
                return null;
            }
            return JSON.parse(this._body);
        } catch (e) {
            return null;
        }
    }
    get headers() {
        var headers, lines, i, line, index, key;
        headers = {};
        lines = this._rawHeaders.split(new RegExp("\\r?\\n", "g"));
        i = 1;
        while (i < lines.length) {
            line = lines[i].trim();
            if (line) {
                index = line.indexOf(":");
                if (index !== -1) {
                    key = line.slice(0, index).trim().toLowerCase();
                    headers[key] = line.slice(index + 1).trim();
                }
                i++;
            }
        }
        return headers;
    }
    static getNullResponse() {
        return new HTTPResponse("", "");
    }
}

var IOSHTTPOffsets = {
    HTTPClient_initWrapper: new NativeFunction(Libg.offset(0, 0), "pointer", ["pointer"]),
    HTTPClient_get: new NativeFunction(Libg.offset(0, 0), "void", ["pointer", "pointer", "pointer"]),
    HTTPClient_post: new NativeFunction(Libg.offset(0, 0), "void", ["pointer", "pointer", "pointer", "int", "pointer", "pointer"]),
    HTTPClient_download: new NativeFunction(Libg.offset(0, 0), "void", ["pointer", "pointer", "pointer", "pointer"]),
    HTTPClient_getMainTrampoline: new NativeFunction(Libg.offset(0, 0), "void", ["pointer"]),
    HTTPClient_postMainTrampoline: new NativeFunction(Libg.offset(0, 0), "void", ["pointer"]),
    HTTPClient_downloadFinalize: new NativeFunction(Libg.offset(0, 0), "void", ["pointer"])
};
