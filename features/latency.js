// =============================================================
// FEATURE: Latency Tools
// config keys: -
// Latency measurement + latency-test popup and protocol messages.
// merged webpack modules: 9322 Latency, 1474 LatencyData, 8335 LatencyTestsPopup, 7638 LatencyTestResultMessage, 4494 TriggerLatencyTestMessage, 3187 BattleLatency
// =============================================================

// --------------------- MODULE 9322 — Latency ---------------------

// ============================================================ //
// webpack module 9322  —  Latency
// exports: Latency
// deps: 4494 (TriggerLatencyTestMessage), 8335 (LatencyTestsPopup), 9168 (MessageManager)
// ============================================================ //

__webpack_modules__[9322] = function Latency_factory(__unused_webpack_module, exports, __webpack_require__) {
    var MessageManager, LatencyTestsPopup, TriggerLatencyTestMessage, Latency, <class_fields_init>, Latency;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Latency = undefined;
        MessageManager = __webpack_require__(9168);
        LatencyTestsPopup = __webpack_require__(8335);
        TriggerLatencyTestMessage = __webpack_require__(4494);
        <class_fields_init> = undefined;
        Latency;
        class Latency {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x473bc (open) */
}
            test () {
        return;
}
            getLatencyReport () {
        if ((((MessageManager).MessageManager).getInstance()).isNull()) {
            return ((LatencyTestsPopup).LatencyTestsPopup).unavailableReport;
        } /* if 0x47270 */
        return ((LatencyTestsPopup).LatencyTestsPopup).refreshOfflineReport();
}
            getBestLatency () {
    var latencyTests, bestLatencyData, i, latencyData;
        if ((((MessageManager).MessageManager).getLatencyTestsCount() < 1)) {
            return;
        } /* if 0x472c7 */
        latencyTests = ((MessageManager).MessageManager).getLatencyTests();
        bestLatencyData = latencyTests[0];
        i = 1;
        while ((i < latencyTests.length)) {
            latencyData = latencyTests[i];
            if (((latencyData).getPing(true) < (bestLatencyData).getPing(true))) {
                bestLatencyData = latencyData;
            } /* if 0x4731b */
            i = ((i) + 1);
            (i++);
        } /* while 0x47325 */
        return bestLatencyData;
}
            parseBestLatency () {
    var latencyData;
        latencyData = (this).getBestLatency();
        if ((!latencyData)) {
            return "N/A";
        } /* if 0x47368 */
        return ("").concat((latencyData).getPing(), " ms (", (latencyData).getServerName(), ")");
}
        }
        Latency = Latency = Latency;
        exports.Latency = Latency;
        return;
};

// --------------------- MODULE 1474 — LatencyData ---------------------

// ============================================================ //
// webpack module 1474  —  LatencyData
// exports: LatencyData
// deps: 7535 (StringObject)
// ============================================================ //

__webpack_modules__[1474] = function LatencyData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StringObject, regionIdOffset, pingOffset, serverNameOffset, LatencyData, <class_fields_init>, LatencyData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LatencyData = undefined;
        StringObject = __webpack_require__(7535);
        regionIdOffset = 0;
        pingOffset = 4;
        serverNameOffset = 40;
        static getRegionId () {
        return (((this).instance).add(regionIdOffset)).readInt();
};
        static getPing () {
    var raw, raw, ping;
        ping = this;
        if (((raw) === undefined)) {
            raw = raw = false;
        } /* if 0x47531 */
        raw = (((ping).instance).add(pingOffset)).readInt();
        if (raw) {
            return raw;
        } /* if 0x47556 */
        if ((raw > 1000)) {
            return (raw - 1000);
        } /* if 0x47567 */
        return raw;
};
        static getServerName () {
        return ((StringObject).StringObject).read((((this).instance).add(serverNameOffset)).readPointer());
};
        <class_fields_init> = undefined;
        LatencyData;
        class LatencyData {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x474b8 */
        this.instance = instance;
        return;
}
        }
        LatencyData = v8 = LatencyData;
        exports.LatencyData = LatencyData;
        return;
};

// --------------------- MODULE 8335 — LatencyTestsPopup ---------------------

// ============================================================ //
// webpack module 8335  —  LatencyTestsPopup
// exports: LatencyTestsPopup
// deps: 612 (MovieClip), 1978 (Libc), 3210 (GUIContainer), 4934 (GUI), 6193 (GenericPopup), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8335] = function LatencyTestsPopup_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, GenericPopup, GUIContainer, MovieClip, GUI, LatencyTestsPopup_ctor, LatencyTestsPopup_update, latencyTestsPopupAllocationSize, scrollAreaTextFieldName, LatencyTestsPopup, <class_fields_init>, LatencyTestsPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LatencyTestsPopup = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        GenericPopup = __webpack_require__(6193);
        GUIContainer = __webpack_require__(3210);
        MovieClip = __webpack_require__(612);
        GUI = __webpack_require__(4934);
        LatencyTestsPopup_ctor = new NativeFunction(((Libg).Libg).offset(13194804, 0), "void", ["pointer"]);
        LatencyTestsPopup_update = new NativeFunction(((Libg).Libg).offset(13195752, 0), "void", ["pointer"]);
        latencyTestsPopupAllocationSize = 480;
        scrollAreaTextFieldName = "scroll_area";
        <class_fields_init> = undefined;
        LatencyTestsPopup;
        class LatencyTestsPopup extends <class_fields_init> = (GenericPopup).GenericPopup {
            constructor () {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        instance = ((Libc).Libc).malloc(latencyTestsPopupAllocationSize);
        LatencyTestsPopup_ctor(instance);
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x43898 */
        return this;
}
            show () {
        if ((((GUI).GUI).getInstance()).isNull()) {
            return;
        } /* if 0x438d6 */
        return;
}
            refreshOfflineReport () {
    var offlineInstance, scrollAreaTextField;
        offlineInstance = (LatencyTestsPopup).getOrCreateOfflineInstance();
        if ((offlineInstance).isNull()) {
            return (LatencyTestsPopup).unavailableReport;
        } /* if 0x4394c */
        LatencyTestsPopup_update(offlineInstance);
        scrollAreaTextField = ((MovieClip).MovieClip).getTextFieldByName(((GUIContainer).GUIContainer).getMovieClip(offlineInstance), scrollAreaTextFieldName);
        if ((!scrollAreaTextField)) {
            return (LatencyTestsPopup).unavailableReport;
        } /* if 0x4398a */
        return (scrollAreaTextField).text;
}
            get unavailableReport () {
        return "LatencyTestResults: ---";
}
            getOrCreateOfflineInstance () {
    var instance;
        if ((!((LatencyTestsPopup).offlineInstance).isNull())) {
            return (LatencyTestsPopup).offlineInstance;
        } /* if 0x439f8 */
        instance = ((Libc).Libc).malloc(latencyTestsPopupAllocationSize);
        LatencyTestsPopup_ctor(instance);
        LatencyTestsPopup.offlineInstance = instance;
        return instance;
}
        }
        LatencyTestsPopup = latencyTestsPopupAllocationSize = LatencyTestsPopup;
        exports.LatencyTestsPopup = LatencyTestsPopup;
        LatencyTestsPopup.offlineInstance = NULL;
        return;
};

// --------------------- MODULE 7638 — LatencyTestResultMessage ---------------------

// ============================================================ //
// webpack module 7638  —  LatencyTestResultMessage
// exports: LatencyTestResultMessage
// deps: 699 (FileManager), 4009 (Config), 4934 (GUI), 7265 (Localisation), 9698 (BattleServers), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7638] = function LatencyTestResultMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, FileManager, GUI, Localisation, BattleServers, RegionIdOffset, PingOffset, SpoofedTickField0Offset, SpoofedTickField1Offset, SpoofedTickField2Offset, LatencyTestResultMessage_setServerHost, LatencyTestResultMessage, <class_fields_init>, LatencyTestResultMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LatencyTestResultMessage = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        FileManager = __webpack_require__(699);
        GUI = __webpack_require__(4934);
        Localisation = __webpack_require__(7265);
        BattleServers = __webpack_require__(9698);
        RegionIdOffset = 144;
        PingOffset = 148;
        SpoofedTickField0Offset = 152;
        SpoofedTickField1Offset = 156;
        SpoofedTickField2Offset = 160;
        LatencyTestResultMessage_setServerHost = new NativeFunction(((Libg).Libg).offset(13907944, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        LatencyTestResultMessage;
        class LatencyTestResultMessage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x49f43 (open) */
}
            patch () {
        return;
}
        }
        LatencyTestResultMessage = SpoofedTickField0Offset = LatencyTestResultMessage;
        exports.LatencyTestResultMessage = LatencyTestResultMessage;
        return;
};

// --------------------- MODULE 4494 — TriggerLatencyTestMessage ---------------------

// ============================================================ //
// webpack module 4494  —  TriggerLatencyTestMessage
// exports: TriggerLatencyTestMessage
// deps: 1978 (Libc), 5532 (PiranhaMessage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4494] = function TriggerLatencyTestMessage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var PiranhaMessage, Libg, Libc, TriggerLatencyTestMessage_ctor, TriggerLatencyTestMessage, <class_fields_init>, TriggerLatencyTestMessage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TriggerLatencyTestMessage = undefined;
        PiranhaMessage = __webpack_require__(5532);
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        TriggerLatencyTestMessage_ctor = new NativeFunction(((Libg).Libg).offset(13196404, 0), "void", ["pointer"]);
        <class_fields_init> = undefined;
        TriggerLatencyTestMessage;
        class TriggerLatencyTestMessage extends <class_fields_init> = (PiranhaMessage).PiranhaMessage {
            constructor () {
    var messageInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        messageInstance = ((Libc).Libc).malloc((TriggerLatencyTestMessage).allocationSize);
        TriggerLatencyTestMessage_ctor(messageInstance);
        this = super(messageInstance);
        if (<class_fields_init>) {
        } /* if 0x4d8f1 */
        return this;
}
        }
        TriggerLatencyTestMessage = v8 = TriggerLatencyTestMessage;
        exports.TriggerLatencyTestMessage = TriggerLatencyTestMessage;
        TriggerLatencyTestMessage.allocationSize = 160;
        return;
};

// --------------------- MODULE 3187 — BattleLatency ---------------------

// ============================================================ //
// webpack module 3187  —  BattleLatency
// exports: BattleLatency
// deps: 211 (TextFieldHelper), 3020 (LogicColor)
// ============================================================ //

__webpack_modules__[3187] = function BattleLatency_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicColor, TextFieldHelper, BattleLatency, <class_fields_init>, BattleLatency;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleLatency = undefined;
        LogicColor = __webpack_require__(3020);
        TextFieldHelper = __webpack_require__(211);
        static set text (text) {
        (this).textField.text = text;
        return;
};
        <class_fields_init> = undefined;
        BattleLatency;
        class BattleLatency {
            constructor () {
    var latencyTextField;
        if (<class_fields_init>) {
        } /* if 0xba939 */
        latencyTextField = ((TextFieldHelper).TextFieldHelper).createTextTextField();
        latencyTextField.x = 400;
        latencyTextField.y = 15;
        latencyTextField.color = 4294967295.0;
        latencyTextField.fontOutline = true;
        latencyTextField.fontSize = 15;
        this.textField = latencyTextField;
        return;
}
            getColor (latency) {
        if ((latency < 60)) {
            return 3329330;
        } /* if 0xba9f0 */
        if ((latency < 140)) {
            return (this).latencyColorArray[(latency - 60)];
        } /* if 0xbaa03 */
        return 16711680;
}
        }
        BattleLatency = BattleLatency = BattleLatency;
        exports.BattleLatency = BattleLatency;
        BattleLatency.latencyColorArray = (((LogicColor).LogicColor).generateColorArray(16776960, 3329330, 40)).concat(((LogicColor).LogicColor).generateColorArray(16711680, 16776960, 40));
        return;
};

