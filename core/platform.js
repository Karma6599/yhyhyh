class Libc {
    static getExportByName(module, exportName) {
        if (Process.platform !== "darwin") {
            return Module.getExportByName(module, exportName);
        }
        return Module.getExportByName("libSystem.B.dylib", exportName);
    }
    static getaddrinfo(node, service, hints, res) {
        return new NativeFunction(Module.findExportByName(null, "getaddrinfo"), "int", ["pointer", "pointer", "pointer", "pointer"])(node, service, hints, res);
    }
}
Libc.access = new NativeFunction(Libc.getExportByName("libc.so", "access"), "int", ["pointer", "int"]);
Libc.malloc = new NativeFunction(Libc.getExportByName("libc.so", "malloc"), "pointer", ["size_t"]);
Libc.read = new NativeFunction(Libc.getExportByName("libc.so", "read"), "long", ["int", "pointer", "size_t"]);
Libc.open = new NativeFunction(Libc.getExportByName("libc.so", "open"), "int", ["pointer", "int"]);
Libc.lseek = new NativeFunction(Libc.getExportByName("libc.so", "lseek"), "long", ["int", "long", "int"]);
Libc.close = new NativeFunction(Libc.getExportByName("libc.so", "close"), "int", ["int"]);
Libc.calloc = new NativeFunction(Libc.getExportByName("libc.so", "calloc"), "pointer", ["size_t", "size_t"]);
Libc.free = new NativeFunction(Libc.getExportByName("libc.so", "free"), "void", ["pointer"]);
Libc.getpid = new NativeFunction(Libc.getExportByName("libc.so", "getpid"), "int", []);
Libc.kill = new NativeFunction(Libc.getExportByName("libc.so", "kill"), "void", ["int", "int"]);
Libc.mkdir = new NativeFunction(Libc.getExportByName("libc.so", "mkdir"), "int", ["pointer", "uint"]);
Libc.system = new NativeFunction(Libc.getExportByName("libc.so", "system"), "int", ["pointer"]);
Libc.unlink = new NativeFunction(Libc.getExportByName("libc.so", "unlink"), "int", ["pointer"]);
Libc.usleep = new NativeFunction(Libc.getExportByName("libc.so", "usleep"), "int", ["uint"]);
Libc.time = new NativeFunction(Libc.getExportByName("libc.so", "time"), "long", ["pointer"]);
if (Process.platform === "linux") {
    Libc.android_log_write = new NativeFunction(Libc.getExportByName(null, "__android_log_write"), "int", ["int", "pointer", "pointer"]);
}
if (Process.platform === "linux") {
    Libc.systemPropertyGet = new NativeFunction(Libc.getExportByName(null, "__system_property_get"), "int", ["pointer", "pointer"]);
}

var outlinedAtomicsFeatureFlag = Libg.offset(19989544, 0);

class AndroidArm64Compatibility {
    static patch() {
        if (Process.platform !== "linux") {
            return;
        }
        var translatedArchitecture = Memory.alloc(92);
        var valueLength = Libc.systemPropertyGet(Memory.allocUtf8String("ro.dalvik.vm.isa.arm64"), translatedArchitecture);
        if (valueLength > 0) {
            if (translatedArchitecture.readUtf8String(valueLength) !== "x86_64") {
                return;
            }
        }
        if (outlinedAtomicsFeatureFlag.readU8() === 0) {
            return;
        }
        outlinedAtomicsFeatureFlag.writeU8(0);
    }
}

var safe_jni_getJniEnv = new NativeFunction(Libg.offset(18441752, 0), "pointer", []);
var safe_jni_findClass = new NativeFunction(Libg.offset(18442004, 0), "pointer", ["pointer"]);
var javaActivityAddr = Libg.offset(19988624, 0);
var callStaticObjectMethodVOffset = 113;
var callVoidMethodOffset = 141;
var newStringUtfOffset = 167;

class SafeJNI {
    static getJniEnv() {
        return safe_jni_getJniEnv();
    }
    static getActivity() {
        return javaActivityAddr.readPointer();
    }
    static findClass(className) {
        return safe_jni_findClass(Memory.allocUtf8String(className));
    }
    static isAvailable() {
        if (Process.platform === "darwin") {
            return false;
        }
        var env = SafeJNI.getJniEnv();
        if (!GameMain.isJniReady) {
            return false;
        }
        if (env.isNull()) {
            return false;
        }
        var vtable = env.readPointer();
        if (vtable.isNull()) {
            return false;
        }
        var getVersion = vtable.add(4 * Process.pointerSize).readPointer();
        if (getVersion.isNull()) {
            return false;
        }
        return true;
    }
    static callStaticObjectMethodV(clazz, mid, args) {
        var env = SafeJNI.getJniEnv();
        return new NativeFunction(env.readPointer().add(callStaticObjectMethodVOffset * Process.pointerSize).readPointer(), "pointer", ["pointer", "pointer", "pointer", "pointer"])(env, clazz, Memory.allocUtf8String(mid), Memory.allocUtf8String(args));
    }
    static callVoidMethod(clazz, mid, a, n) {
        var env = SafeJNI.getJniEnv();
        var activity = SafeJNI.getActivity();
        return new NativeFunction(env.readPointer().add(callVoidMethodOffset * Process.pointerSize).readPointer(), "void", ["pointer", "pointer", "pointer", "pointer"])(env, activity, a, n);
    }
    static newStringUTF(text) {
        var env = SafeJNI.getJniEnv();
        return new NativeFunction(env.readPointer().add(newStringUtfOffset * Process.pointerSize).readPointer(), "pointer", ["pointer", "pointer"])(env, Memory.allocUtf8String(text));
    }
}

var NativeDialogLibg = new NativeFunction(Libg.offset(7370504, 0), "void", ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"]);

class NativeDialog {
    static show(title = "", description = "", buttonPositive = "", buttonNeutral = "", buttonNegative = "", buttonListener = NULL) {
        if (!SafeJNI.isAvailable()) {
            if (Process.platform !== "darwin") {
                return;
            }
        }
        NativeDialogLibg(Memory.allocUtf8String(title), Memory.allocUtf8String(description), Memory.allocUtf8String(buttonPositive), Memory.allocUtf8String(buttonNeutral), Memory.allocUtf8String(buttonNegative), buttonListener);
    }
}

class LogicNativeDialog {
    static killGame(self, index) {
        if (index === 0) {
            Libc.kill(Libc.getpid(), 15);
        }
    }
    static showRestartRequiredDialog() {
        NativeDialog.show("Restart required", "The game must be restarted to apply the changes.", "OK", "", "", LogicNativeDialog.restartNativeDialogListener.instance);
    }
}
LogicNativeDialog.restartNativeDialogListener = new INativeDialogListener(LogicNativeDialog.killGame);

var LocalNotificationManager_resetNotifications = new NativeFunction(Libg.offset(11438712, 0), "void", ["pointer"]);
var localNotificationManagerInstanceAddr = Libg.offset(19943312, 0);
var debugForceFlagOffset = LogicMemory.offset(24, 48);
var FORCE_FLAG_DEFAULT = -1;
var FORCE_FLAG_ACTIVE = 0;
var FORCE_FLAG_ALL = 1;

class LocalNotificationManager {
    static getInstance() {
        return localNotificationManagerInstanceAddr.readPointer();
    }
    static setForceFlag(flag) {
        var instance = LocalNotificationManager.getInstance();
        if (instance.isNull()) {
            return;
        }
        instance.add(debugForceFlagOffset).writeInt(flag);
    }
    static forceActiveNotifications() {
        LocalNotificationManager.setForceFlag(FORCE_FLAG_ACTIVE);
    }
    static forceAllNotifications() {
        LocalNotificationManager.setForceFlag(FORCE_FLAG_ALL);
    }
    static resetForcedNotifications() {
        LocalNotificationManager.setForceFlag(FORCE_FLAG_DEFAULT);
        var instance = LocalNotificationManager.getInstance();
        if (!instance.isNull()) {
            LocalNotificationManager_resetNotifications(instance);
        }
    }
}

class DeviceSpecifications {
}
DeviceSpecifications.platform = Process.platform == "linux" ? "android" : "ios";
DeviceSpecifications.arch = Process.arch;

class Logcat {
    constructor() {
        if (Config.config.useDebugLogging) {
            var es = Error.prepareStackTrace;
            Error.prepareStackTrace = function (e, s) {
                if (Config.config.useDebugLogging) {
                    Logcat.logError(es(e, s));
                }
            };
        }
    }
    static _log(level, logtag, msg) {
        var tag = Memory.allocUtf8String(logtag);
        var str = Memory.allocUtf8String(msg.toString());
        if (Libc.android_log_write) {
            Libc.android_log_write(level, tag, str);
            return;
        }
        var matched = Object.entries(this.logPriority).find(function (entry) {
            return entry[1] === level;
        });
        var levelName = matched == null ? level : matched[0];
        console.log("[".concat(levelName, "] ", logtag, ":"), msg);
    }
    static log(level, logtag, msg) {
        if (logtag === undefined) {
            logtag = "BSD";
        }
        this._log(level, logtag, msg);
    }
    static logDebug(msg) {
        this._log(this.logPriority.DEBUG, "BSD", msg);
    }
    static logError(msg) {
        this._log(this.logPriority.ERROR, "BSD", msg);
    }
    static logInfo(msg) {
        this._log(this.logPriority.INFO, "BSD", msg);
    }
}
Logcat.logPriority = { UNKNOWN: 0, DEFAULT: 1, VERBOSE: 2, DEBUG: 3, INFO: 4, WARN: 5, ERROR: 6, FATAL: 7, SILENT: 8 };

var envFlagAddr = Libg.offset(19952756, 0);

class EnvOverride {
    static get current() {
        return envFlagAddr.readS32();
    }
    static set(value) {
        envFlagAddr.writeS32(value);
    }
    static isStage() {
        return EnvOverride.current !== EnvOverride.PROD_ENV;
    }
    static patch() {
        var before = envFlagAddr.readS32();
        envFlagAddr.writeS32(EnvOverride.PROD_ENV);
        var after = envFlagAddr.readS32();
        Logcat.logInfo("[EnvOverride] " + before + " -> " + after);
    }
}
EnvOverride.PROD_ENV = 3;
EnvOverride.STAGE_ENV = 2;
