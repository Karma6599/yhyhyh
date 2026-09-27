class Latency {
    static test() {
        MessageManager.MessageManager.sendMessage(new TriggerLatencyTestMessage());
    }

    static getLatencyReport() {
        if (MessageManager.MessageManager.getInstance().isNull()) {
            return LatencyTestsPopup.unavailableReport;
        }
        return LatencyTestsPopup.refreshOfflineReport();
    }

    static getBestLatency() {
        if (MessageManager.MessageManager.getLatencyTestsCount() < 1) {
            return;
        }
        var latencyTests = MessageManager.MessageManager.getLatencyTests();
        var bestLatencyData = latencyTests[0];
        for (var i = 1; i < latencyTests.length; i++) {
            var latencyData = latencyTests[i];
            if (latencyData.getPing(true) < bestLatencyData.getPing(true)) {
                bestLatencyData = latencyData;
            }
        }
        return bestLatencyData;
    }

    static parseBestLatency() {
        var latencyData = Latency.getBestLatency();
        if (!latencyData) {
            return "N/A";
        }
        return "".concat(latencyData.getPing(), " ms (", latencyData.getServerName(), ")");
    }
}

var regionIdOffset = 0;
var pingOffset = 4;
var serverNameOffset = 40;

class LatencyData {
    constructor(instance) {
        this.instance = instance;
    }

    getRegionId() {
        return this.instance.add(regionIdOffset).readInt();
    }

    getPing(raw) {
        if (raw === undefined) {
            raw = false;
        }
        var ping = this.instance.add(pingOffset).readInt();
        if (raw) {
            return ping;
        }
        if (ping > 1000) {
            return ping - 1000;
        }
        return ping;
    }

    getServerName() {
        return StringObject.StringObject.read(this.instance.add(serverNameOffset).readPointer());
    }
}

var LatencyTestsPopup_ctor = new NativeFunction(Libg.Libg.offset(13194804, 0), "void", ["pointer"]);
var LatencyTestsPopup_update = new NativeFunction(Libg.Libg.offset(13195752, 0), "void", ["pointer"]);
var latencyTestsPopupAllocationSize = 480;
var scrollAreaTextFieldName = "scroll_area";

class LatencyTestsPopup extends GenericPopup.GenericPopup {
    constructor() {
        var instance = Libc.Libc.malloc(latencyTestsPopupAllocationSize);
        LatencyTestsPopup_ctor(instance);
        super(instance);
    }

    show() {
        if (GUI.GUI.getInstance().isNull()) {
            return;
        }
        GUI.GUI.showPopup(this, true, true, false);
    }

    static refreshOfflineReport() {
        var offlineInstance = LatencyTestsPopup.getOrCreateOfflineInstance();
        if (offlineInstance.isNull()) {
            return LatencyTestsPopup.unavailableReport;
        }
        LatencyTestsPopup_update(offlineInstance);
        var scrollAreaTextField = MovieClip.MovieClip.getTextFieldByName(GUIContainer.GUIContainer.getMovieClip(offlineInstance), scrollAreaTextFieldName);
        if (!scrollAreaTextField) {
            return LatencyTestsPopup.unavailableReport;
        }
        return scrollAreaTextField.text;
    }

    static get unavailableReport() {
        return "LatencyTestResults: ---";
    }

    static getOrCreateOfflineInstance() {
        if (!LatencyTestsPopup.offlineInstance.isNull()) {
            return LatencyTestsPopup.offlineInstance;
        }
        var instance = Libc.Libc.malloc(latencyTestsPopupAllocationSize);
        LatencyTestsPopup_ctor(instance);
        LatencyTestsPopup.offlineInstance = instance;
        return instance;
    }
}

LatencyTestsPopup.offlineInstance = NULL;

var RegionIdOffset = 144;
var PingOffset = 148;
var SpoofedTickField0Offset = 152;
var SpoofedTickField1Offset = 156;
var SpoofedTickField2Offset = 160;
var LatencyTestResultMessage_setServerHost = new NativeFunction(Libg.Libg.offset(13907944, 0), "void", ["pointer", "pointer"]);

class LatencyTestResultMessage {
    static patch() {
        return;
    }
}

var TriggerLatencyTestMessage_ctor = new NativeFunction(Libg.Libg.offset(13196404, 0), "void", ["pointer"]);

class TriggerLatencyTestMessage extends PiranhaMessage.PiranhaMessage {
    constructor() {
        var messageInstance = Libc.Libc.malloc(TriggerLatencyTestMessage.allocationSize);
        TriggerLatencyTestMessage_ctor(messageInstance);
        super(messageInstance);
    }
}

TriggerLatencyTestMessage.allocationSize = 160;

class BattleLatency {
    constructor() {
        var latencyTextField = TextFieldHelper.TextFieldHelper.createTextTextField();
        latencyTextField.x = 400;
        latencyTextField.y = 15;
        latencyTextField.color = 4294967295.0;
        latencyTextField.fontOutline = true;
        latencyTextField.fontSize = 15;
        this.textField = latencyTextField;
    }

    set text(text) {
        this.textField.text = text;
    }

    getColor(latency) {
        if (latency < 60) {
            return 3329330;
        }
        if (latency < 140) {
            return this.latencyColorArray[latency - 60];
        }
        return 16711680;
    }
}

BattleLatency.latencyColorArray = LogicColor.LogicColor.generateColorArray(16776960, 3329330, 40).concat(LogicColor.LogicColor.generateColorArray(16711680, 16776960, 40));
