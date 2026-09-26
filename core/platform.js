// =============================================================
// PLATFORM BRIDGE (JNI / LIBC / ANDROID)
// merged webpack modules: 308 AndroidArm64Compatibility, 5952 SafeJNI, 1978 Libc, 3902 NativeDialog, 1128 LogicNativeDialog, 514 LocalNotificationManager, 2635 DeviceSpecifications, 3380 Logcat, 746 EnvOverride
// =============================================================

// --------------------- MODULE 308 — AndroidArm64Compatibility ---------------------

// ============================================================ //
// webpack module 308  —  AndroidArm64Compatibility
// exports: AndroidArm64Compatibility
// deps: 1978 (Libc), 3380 (Logcat), 9878 (Libg)
// ============================================================ //

__webpack_modules__[308] = function AndroidArm64Compatibility_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Libg, Logcat, outlinedAtomicsFeatureFlag, AndroidArm64Compatibility, <class_fields_init>, AndroidArm64Compatibility;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AndroidArm64Compatibility = undefined;
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        Logcat = __webpack_require__(3380);
        outlinedAtomicsFeatureFlag = ((Libg).Libg).offset(19989544, 0);
        <class_fields_init> = undefined;
        AndroidArm64Compatibility;
        class AndroidArm64Compatibility {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x84746 (open) */
}
            patch () {
    var translatedArchitecture, valueLength;
        if (((Process).platform !== "linux")) {
            return;
        } /* if 0x8468b */
        translatedArchitecture = (Memory).alloc(92);
        valueLength = ((Libc).Libc).systemPropertyGet((Memory).allocUtf8String("ro.dalvik.vm.isa.arm64"), translatedArchitecture);
        if (!(valueLength <= 0)) {
            (valueLength <= 0);
            if (((translatedArchitecture).readUtf8String(valueLength) !== "x86_64")) {
                return;
            } /* if 0x846e1 */
        } /* if 0x846de */
        if (((outlinedAtomicsFeatureFlag).readU8() === 0)) {
            return;
        } /* if 0x846f1 */
        (outlinedAtomicsFeatureFlag).writeU8(0);
        return;
}
        }
        AndroidArm64Compatibility = v8 = AndroidArm64Compatibility;
        exports.AndroidArm64Compatibility = AndroidArm64Compatibility;
        return;
};

// --------------------- MODULE 5952 — SafeJNI ---------------------

// ============================================================ //
// webpack module 5952  —  SafeJNI
// exports: SafeJNI
// deps: 8775 (GameMain), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5952] = function SafeJNI_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GameMain, safe_jni_getJniEnv, safe_jni_findClass, javaActivityAddr, callStaticObjectMethodVOffset, callVoidMethodOffset, newStringUtfOffset, SafeJNI, <class_fields_init>, SafeJNI;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.SafeJNI = undefined;
        Libg = __webpack_require__(9878);
        GameMain = __webpack_require__(8775);
        safe_jni_getJniEnv = new NativeFunction(((Libg).Libg).offset(18441752, 0), "pointer", []);
        safe_jni_findClass = new NativeFunction(((Libg).Libg).offset(18442004, 0), "pointer", ["pointer"]);
        javaActivityAddr = ((Libg).Libg).offset(19988624, 0);
        callStaticObjectMethodVOffset = 113;
        callVoidMethodOffset = 141;
        newStringUtfOffset = 167;
        <class_fields_init> = undefined;
        SafeJNI;
        class SafeJNI {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x73640 (open) */
}
            getJniEnv () {
        return safe_jni_getJniEnv();
}
            getActivity () {
        return (javaActivityAddr).readPointer();
}
            findClass (className) {
        return safe_jni_findClass((Memory).allocUtf8String(className));
}
            isAvailable () {
    var env, vtable, getVersion;
        if (((Process).platform === "darwin")) {
            return false;
        } /* if 0x73394 */
        env = (SafeJNI).getJniEnv();
        if ((!((GameMain).GameMain).isJniReady)) {
            return false;
        } /* if 0x733b2 */
        if ((env).isNull()) {
            return false;
        } /* if 0x733c1 */
        vtable = (env).readPointer();
        if ((vtable).isNull()) {
            return false;
        } /* if 0x733dc */
        getVersion = ((vtable).add((4 * (Process).pointerSize))).readPointer();
        if ((getVersion).isNull()) {
            return false;
        } /* if 0x7340b */
        return true;
}
            callStaticObjectMethodV (clazz, mid, args) {
    var env;
        env = (SafeJNI).getJniEnv();
        return new NativeFunction((((env).readPointer()).add((callStaticObjectMethodVOffset * (Process).pointerSize))).readPointer(), "pointer", ["pointer", "pointer", "pointer", "pointer"])(env, clazz, (Memory).allocUtf8String(mid), (Memory).allocUtf8String(args));
}
            callVoidMethod (clazz, mid, a, n) {
    var env, activity;
        env = (SafeJNI).getJniEnv();
        activity = (SafeJNI).getActivity();
        return;
}
            newStringUTF (text) {
    var env;
        env = (SafeJNI).getJniEnv();
        return new NativeFunction((((env).readPointer()).add((newStringUtfOffset * (Process).pointerSize))).readPointer(), "pointer", ["pointer", "pointer"])(env, (Memory).allocUtf8String(text));
}
        }
        SafeJNI = SafeJNI = SafeJNI;
        exports.SafeJNI = SafeJNI;
        return;
};

// --------------------- MODULE 1978 — Libc ---------------------

// ============================================================ //
// webpack module 1978  —  Libc
// exports: Libc
// ============================================================ //

__webpack_modules__[1978] = function Libc_factory(__unused_webpack_module, exports) {
    var Libc, <class_fields_init>, Libc;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Libc = undefined;
        <class_fields_init> = undefined;
        Libc;
        class Libc {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x840a5 (open) */
}
            getExportByName (module, exportName) {
        if (((Process).platform !== "darwin")) {
            return (Module).getExportByName(module, exportName);
        } /* if 0x84004 */
        return (Module).getExportByName("libSystem.B.dylib", exportName);
}
            getaddrinfo (node, service, hints, res) {
        return new NativeFunction((Module).findExportByName(null, "getaddrinfo"), "int", ["pointer", "pointer", "pointer", "pointer"])(node, service, hints, res);
}
        }
        Libc = Libc = Libc;
        exports.Libc = Libc;
        Libc.access = new NativeFunction((Libc).getExportByName("libc.so", "access"), "int", ["pointer", "int"]);
        Libc.malloc = new NativeFunction((Libc).getExportByName("libc.so", "malloc"), "pointer", ["size_t"]);
        Libc.read = new NativeFunction((Libc).getExportByName("libc.so", "read"), "long", ["int", "pointer", "size_t"]);
        Libc.open = new NativeFunction((Libc).getExportByName("libc.so", "open"), "int", ["pointer", "int"]);
        Libc.lseek = new NativeFunction((Libc).getExportByName("libc.so", "lseek"), "long", ["int", "long", "int"]);
        Libc.close = new NativeFunction((Libc).getExportByName("libc.so", "close"), "int", ["int"]);
        Libc.calloc = new NativeFunction((Libc).getExportByName("libc.so", "calloc"), "pointer", ["size_t", "size_t"]);
        Libc.free = new NativeFunction((Libc).getExportByName("libc.so", "free"), "void", ["pointer"]);
        Libc.getpid = new NativeFunction((Libc).getExportByName("libc.so", "getpid"), "int", []);
        Libc.kill = new NativeFunction((Libc).getExportByName("libc.so", "kill"), "void", ["int", "int"]);
        Libc.mkdir = new NativeFunction((Libc).getExportByName("libc.so", "mkdir"), "int", ["pointer", "uint"]);
        Libc.system = new NativeFunction((Libc).getExportByName("libc.so", "system"), "int", ["pointer"]);
        Libc.unlink = new NativeFunction((Libc).getExportByName("libc.so", "unlink"), "int", ["pointer"]);
        Libc.usleep = new NativeFunction((Libc).getExportByName("libc.so", "usleep"), "int", ["uint"]);
        Libc.time = new NativeFunction((Libc).getExportByName("libc.so", "time"), "long", ["pointer"]);
        if (((Process).platform === "linux")) {
        } /* if 0x83f39 */
        /* jump -> 0x83f3a */
        new NativeFunction((Libc).getExportByName(null, "__android_log_write"), "int", ["int", "pointer", "pointer"]).android_log_write = null;
        if (((Process).platform === "linux")) {
        } /* if 0x83f82 */
        /* jump -> 0x83f83 */
        new NativeFunction((Libc).getExportByName(null, "__system_property_get"), "int", ["pointer", "pointer"]).systemPropertyGet = null;
        return;
};

// --------------------- MODULE 3902 — NativeDialog ---------------------

// ============================================================ //
// webpack module 3902  —  NativeDialog
// exports: NativeDialog
// deps: 5952 (SafeJNI), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3902] = function NativeDialog_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, SafeJNI, NativeDialogLibg, NativeDialog, <class_fields_init>, NativeDialog;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NativeDialog = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        SafeJNI = __webpack_require__(5952);
        NativeDialogLibg = new NativeFunction(((Libg).Libg).offset(7370504, 0), "void", ["pointer", "pointer", "pointer", "pointer", "pointer", "pointer"]);
        <class_fields_init> = undefined;
        NativeDialog;
        class NativeDialog {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x804ae (open) */
}
            show () {
    var title, description, buttonPositive, buttonNeutral, buttonNegative, buttonListener, title, description, buttonPositive, buttonNeutral, buttonNegative, buttonListener;
        if (((title) === undefined)) {
            title = title = "";
        } /* if 0x803a3 */
        if (((description) === undefined)) {
            description = description = "";
        } /* if 0x803ac */
        if (((buttonPositive) === undefined)) {
            buttonPositive = buttonPositive = "";
        } /* if 0x803b5 */
        if (((buttonNeutral) === undefined)) {
            buttonNeutral = buttonNeutral = "";
        } /* if 0x803be */
        if (((buttonNegative) === undefined)) {
            buttonNegative = buttonNegative = "";
        } /* if 0x803cb */
        if (((buttonListener) === undefined)) {
            buttonListener = buttonListener = NULL;
        } /* if 0x803dd */
        if ((!((SafeJNI).SafeJNI).isAvailable())) {
            if (((Process).platform !== "darwin")) {
                return;
            } /* if 0x80405 */
        } /* if 0x80405 */
        return;
}
        }
        NativeDialog = v8 = NativeDialog;
        exports.NativeDialog = NativeDialog;
        return;
};

// --------------------- MODULE 1128 — LogicNativeDialog ---------------------

// ============================================================ //
// webpack module 1128  —  LogicNativeDialog
// exports: LogicNativeDialog
// deps: 1978 (Libc), 3902 (NativeDialog), 7265 (Localisation), 9025 (INativeDialogListener)
// ============================================================ //

__webpack_modules__[1128] = function LogicNativeDialog_factory(__unused_webpack_module, exports, __webpack_require__) {
    var _a, Localisation, NativeDialog, INativeDialogListener, Libc, LogicNativeDialog, <class_fields_init>, LogicNativeDialog;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicNativeDialog = undefined;
        Localisation = __webpack_require__(7265);
        NativeDialog = __webpack_require__(3902);
        INativeDialogListener = __webpack_require__(9025);
        Libc = __webpack_require__(1978);
        <class_fields_init> = undefined;
        LogicNativeDialog;
        class LogicNativeDialog {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb9a30 (open) */
}
            killGame (self, index) {
        if ((index === 0)) {
            ((Libc).Libc).kill(((Libc).Libc).getpid(), 15);
            return;
        } /* if 0xb996f (open) */
}
            showRestartRequiredDialog () {
        return;
}
        }
        LogicNativeDialog = v8 = LogicNativeDialog;
        exports.LogicNativeDialog = LogicNativeDialog;
        _a = LogicNativeDialog;
        LogicNativeDialog.restartNativeDialogListener = new (INativeDialogListener).INativeDialogListener((_a).killGame);
        return;
};

// --------------------- MODULE 514 — LocalNotificationManager ---------------------

// ============================================================ //
// webpack module 514  —  LocalNotificationManager
// exports: LocalNotificationManager
// deps: 1588 (LogicMemory), 9878 (Libg)
// ============================================================ //

__webpack_modules__[514] = function LocalNotificationManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, LocalNotificationManager_resetNotifications, localNotificationManagerInstanceAddr, debugForceFlagOffset, FORCE_FLAG_DEFAULT, FORCE_FLAG_ACTIVE, FORCE_FLAG_ALL, LocalNotificationManager, <class_fields_init>, LocalNotificationManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LocalNotificationManager = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        LocalNotificationManager_resetNotifications = new NativeFunction(((Libg).Libg).offset(11438712, 0), "void", ["pointer"]);
        localNotificationManagerInstanceAddr = ((Libg).Libg).offset(19943312, 0);
        debugForceFlagOffset = ((LogicMemory).LogicMemory).offset(24, 48);
        FORCE_FLAG_DEFAULT = -1;
        FORCE_FLAG_ACTIVE = 0;
        FORCE_FLAG_ALL = 1;
        <class_fields_init> = undefined;
        LocalNotificationManager;
        class LocalNotificationManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x4e401 (open) */
}
            getInstance () {
        return (localNotificationManagerInstanceAddr).readPointer();
}
            forceActiveNotifications () {
        return;
}
            forceAllNotifications () {
        return;
}
            resetForcedNotifications () {
        return;
}
            setForceFlag (flag) {
    var instance;
        instance = (LocalNotificationManager).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x4e3b4 */
        ((instance).add(debugForceFlagOffset)).writeInt(flag);
        return;
}
        }
        LocalNotificationManager = LocalNotificationManager = LocalNotificationManager;
        exports.LocalNotificationManager = LocalNotificationManager;
        return;
};

// --------------------- MODULE 2635 — DeviceSpecifications ---------------------

// ============================================================ //
// webpack module 2635  —  DeviceSpecifications
// exports: DeviceSpecifications
// ============================================================ //

__webpack_modules__[2635] = function DeviceSpecifications_factory(__unused_webpack_module, exports) {
    var DeviceSpecifications, <class_fields_init>, DeviceSpecifications;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DeviceSpecifications = undefined;
        <class_fields_init> = undefined;
        DeviceSpecifications;
        class DeviceSpecifications {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x92d8a (open) */
}
        }
        DeviceSpecifications = DeviceSpecifications = DeviceSpecifications;
        exports.DeviceSpecifications = DeviceSpecifications;
        if (((Process).platform == "linux")) {
        } /* if 0x92d3c */
        /* jump -> 0x92d41 */
        "android".platform = "ios";
        DeviceSpecifications.arch = (Process).arch;
        return;
};

// --------------------- MODULE 3380 — Logcat ---------------------

// ============================================================ //
// webpack module 3380  —  Logcat
// exports: Logcat
// deps: 1978 (Libc), 4009 (Config)
// ============================================================ //

__webpack_modules__[3380] = function Logcat_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Config, Logcat, <class_fields_init>, Logcat;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Logcat = undefined;
        Libc = __webpack_require__(1978);
        Config = __webpack_require__(4009);
        <class_fields_init> = undefined;
        Logcat;
        class Logcat {
            constructor () {
    var es;
        if (<class_fields_init>) {
        } /* if 0x97f8b */
        if ((((Config).Config).config).useDebugLogging) {
            es = (Error).prepareStackTrace;
            Error.prepareStackTrace = function (e, s) {
        if ((((Config).Config).config).useDebugLogging) {
            (Logcat).logError(es(e, s));
            return;
        } /* if 0x98013 (open) */
};
            return;
        } /* if 0x97fbd (open) */
}
            _log (level, logtag, msg) {
    var tag, str, levelName;
        tag = (Memory).allocUtf8String(logtag);
        str = (Memory).allocUtf8String((msg).toString());
        if (((Libc).Libc).android_log_write) {
            ((Libc).Libc).android_log_write(level, tag, str);
            return;
        } /* if 0x980a6 */
        if (((((Object).entries((this).logPriority)).find(function (arg0) {
    var _, val;
        _ = <null>;
        val = <underflow>;
        return (val === level);
})) == null)) {
            ((Object).entries((this).logPriority)).find(function (arg0) {
    var _, val;
        _ = <null>;
        val = <underflow>;
        return (val === level);
});
        } /* if 0x980ce */
        /* jump -> 0x980d0 */
        if (((undefined[0]) == null)) {
            levelName = level;
        } /* if 0x980d6 */
        (console).log(("[").concat(levelName, "] ", logtag, ":"), msg);
        return;
}
            log (level) {
    var logtag, msg, level, logtag, msg;
        logtag = this;
        logtag = level;
        if (((logtag) === undefined)) {
            msg = logtag = "BSD";
        } /* if 0x9818f */
        level = msg;
        return;
}
            logDebug (msg) {
        return;
}
            logError (msg) {
        return;
}
            logInfo (msg) {
        return;
}
        }
        Logcat = Logcat = Logcat;
        exports.Logcat = Logcat;
        Logcat.logPriority = { UNKNOWN: 0, DEFAULT: 1, VERBOSE: 2, DEBUG: 3, INFO: 4, WARN: 5, ERROR: 6, FATAL: 7, SILENT: 8 };
        return;
};

// --------------------- MODULE 746 — EnvOverride ---------------------

// ============================================================ //
// webpack module 746  —  EnvOverride
// exports: EnvOverride, PROD_ENV, STAGE_ENV
// deps: 3380 (Logcat), 9878 (Libg)
// ============================================================ //

__webpack_modules__[746] = function EnvOverride_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Logcat, envFlagAddr, EnvOverride, <class_fields_init>, EnvOverride;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PROD_ENV = undefined;
        undefined.STAGE_ENV = exports;
        exports.EnvOverride = undefined;
        Libg = __webpack_require__(9878);
        Logcat = __webpack_require__(3380);
        envFlagAddr = ((Libg).Libg).offset(19952756, 0);
        exports.PROD_ENV = 3;
        exports.STAGE_ENV = 2;
        <class_fields_init> = undefined;
        EnvOverride;
        class EnvOverride {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9f199 (open) */
}
            get current () {
        return (envFlagAddr).readS32();
}
            set (value) {
        return;
}
            isStage () {
        return ((EnvOverride).current !== (exports).PROD_ENV);
}
            patch () {
    var before, after;
        before = (envFlagAddr).readS32();
        (envFlagAddr).writeS32((exports).PROD_ENV);
        after = (envFlagAddr).readS32();
        return;
}
        }
        EnvOverride = EnvOverride = EnvOverride;
        exports.EnvOverride = EnvOverride;
        return;
};

