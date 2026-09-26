// =============================================================
// MISC HELPERS & LISTENERS
// merged webpack modules: 8070 Utils, 5667 Validation, 8341 GlobalID, 1866 CallListener, 8402 IButtonListener, 9025 INativeDialogListener, 9724 CustomTextEncoder, 8234 Json, 758 ClipboardImage
// =============================================================

// --------------------- MODULE 8070 — Utils ---------------------

// ============================================================ //
// webpack module 8070  —  Utils
// exports: Utils
// ============================================================ //

__webpack_modules__[8070] = function Utils_factory(__unused_webpack_module, exports) {
    var areaEffectProps, projectileProps, itemProps, Utils, <class_fields_init>, Utils;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Utils = undefined;
        areaEffectProps = ["AreaEffectAttack", "AreaEffectAttack2", "AreaEffectUlti", "AreaEffectUlti2", "OverchargedAreaEffectUlti", "OverchargedAreaEffectUlti2", "AreaEffect", "AreaEffectStarPower", "AreaEffectStarPowerOvercharged", "AreaEffectStarPower2", "ChainAreaEffect", "OverchargedChainAreaEffect", "TriggerAreaEffect", "DestroyAreaEffect", "SpawnAreaEffectObject", "SpawnAreaEffectObject2", "SpawnAreaEffectTrail", "CustomAreaEffect1", "CustomAreaEffect2"];
        projectileProps = ["Projectiles", "OverchargedMainAttackProjectile", "UltiProjectile", "OverchargedUltiProjectile", "SecondaryProjectile", "ThirdProjectile", "AutoAttackProjectile", "ProjectileForShockyStarPower", "OverchargedProjectileForShockyStarPower", "BulletExplosionBullet", "ChainBullet"];
        itemProps = ["SpawnedItem", "SpawnedItem2", "BulletExplosionItem", "SpawnItem"];
        <class_fields_init> = undefined;
        Utils;
        class Utils {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xe32df (open) */
}
            syncObjects (obj1, obj2) {
    var key, val, newProp;
        /* jump -> 0xe2fb9 */
        key = /*forin*/ obj1;
        if ((!(key in obj2))) {
            val = obj1[key];
            if ((Array).isArray(val)) {
            } /* if 0xe2f49 */
            /* jump -> 0xe2f8e */
            /* is_null  */
            if (!val) {
                if ((typeof val === "object")) {
                    if (((Object).getPrototypeOf(val) === (Object).prototype)) {
                    } /* if 0xe2f8b */
                } /* if 0xe2f8b */
            } /* if 0xe2f8b */
            /* jump -> 0xe2f8e */
            newProp = val;
            (obj2).insertProperty(key, newProp, ((Object).keys(obj1)).indexOf(key));
            } while (!(Object).assign({}, val));
        } /* if 0xe2fbb */
        (Object).assign([], val);
        return;
}
            getCurrentTime () {
        return (Math).floor(((Date).now() / 1000));
}
            setGameThreadSleepTo (sec) {
        return;
}
            clearEmptyEntries (obj) {
    var key, val;
        /* jump -> 0xe30bd */
        key = /*forin*/ obj;
        val = obj[key];
        if ((!val)) {
            /* delete  */
        } /* if 0xe306a */
        /* jump -> 0xe30bd */
        if (!(typeof val !== "object")) {
            if (!((Object).getPrototypeOf(val) !== (Object).prototype)) {
                (Utils).clearEmptyEntries(val);
                if (((Object).keys(val).length === 0)) {
                    /* delete  */
                } /* if 0xe30bd */
            } /* if 0xe30bd */
        } /* if 0xe30bd */
        } while (!obj);
        return;
}
            clearConfigEntriesIfAnyValIsNull (obj) {
    var key, val, skinKey, skin;
        /* jump -> 0xe3172 */
        key = /*forin*/ obj;
        val = obj[key];
        /* jump -> 0xe3152 */
        skinKey = /*forin*/ val;
        skin = val[skinKey];
        if (((skin).a.length === 0)) {
            if (((skin).p.length === 0)) {
                if (((skin).i.length === 0)) {
                    /* delete  */
                } /* if 0xe3152 */
            } /* if 0xe3152 */
        } /* if 0xe3152 */
        } while (!val);
        skin = skinKey = val = key = <underflow>;
        if (((Object).keys(val).length === 0)) {
            /* delete  */
        } /* if 0xe3172 */
        } while (!obj);
        return;
}
            processDerivative (obj, type, hold) {
    var key, normalized, val;
        if (((obj) == null)) {
        } /* if 0xe31d2 */
        /* jump -> 0xe31d7 */
        if ((!(undefined).name)) {
            return;
        } /* if 0xe31db */
        (hold[type]).push((obj).name);
        /* jump -> 0xe329e */
        key = /*iter*/ (Object).keys(obj);
        normalized = ((key[0]).toUpperCase() + (key).slice(1));
        val = obj[key];
        if ((areaEffectProps).includes(normalized)) {
            (Utils).processDerivative(val, "a", hold);
        } /* if 0xe3251 */
        /* jump -> 0xe329d */
        if ((projectileProps).includes(normalized)) {
            (Utils).processDerivative(val, "p", hold);
        } /* if 0xe3278 */
        /* jump -> 0xe329d */
        if ((itemProps).includes(normalized)) {
            (Utils).processDerivative(val, "i", hold);
        } /* if 0xe329d */
        } while (!normalized = val = (Object).keys(obj));
        key = <underflow>;
        return;
}
        }
        Utils = Utils = Utils;
        exports.Utils = Utils;
        Utils.gameSleeping = false;
        return;
};

// --------------------- MODULE 5667 — Validation ---------------------

// ============================================================ //
// webpack module 5667  —  Validation
// exports: Validation
// deps: 2214 (ModProperties), 4009 (Config), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[5667] = function Validation_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ModProperties, PlayerInfo, Config, Validation, <class_fields_init>, Validation;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Validation = undefined;
        ModProperties = __webpack_require__(2214);
        PlayerInfo = __webpack_require__(9518);
        Config = __webpack_require__(4009);
        <class_fields_init> = undefined;
        Validation;
        class Validation {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xe2d18 (open) */
}
            isDevAvailable () {
        if (!((ModProperties).ModProperties).isDev()) {
            ((ModProperties).ModProperties).isDev();
            if ((((Config).Config).config).DevModeEnabled) {
                return ((Validation).developersList).includes(((PlayerInfo).PlayerInfo).tag);
            } /* if 0xe2c98 (open) */
        } /* if 0xe2c98 (open) */
}
            isWhitelisted () {
        if ((((ModProperties).ModProperties).environment === "dev")) {
            return true;
        } /* if 0xe2cd1 */
        return ((this).betaList).includes(((PlayerInfo).PlayerInfo).tag);
}
        }
        Validation = Validation = Validation;
        exports.Validation = Validation;
        Validation.developersList = ["9P0R2YC2Q", "2RGGJPLQU", "8PLVR29JP", "8GCQYL2VL", "QUJPVU0L", "PQL90VLR9"];
        Validation.testersList = ["9P0R2YC2Q"];
        Validation.betaList = ["9P0R2YC2Q"];
        return;
};

// --------------------- MODULE 8341 — GlobalID ---------------------

// ============================================================ //
// webpack module 8341  —  GlobalID
// exports: GlobalID
// ============================================================ //

__webpack_modules__[8341] = function GlobalID_factory(__unused_webpack_module, exports) {
    var GlobalID, <class_fields_init>, GlobalID;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GlobalID = undefined;
        <class_fields_init> = undefined;
        GlobalID;
        class GlobalID {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5f383 (open) */
}
            createGlobalID (tableIndex, csvRow) {
        return ((csvRow % 1000000) + (1000000 * tableIndex));
}
            getClassID (globalID) {
        return (Math).round((globalID / 1000000));
}
            getInstanceID (globalId) {
        return (globalId % 1000000);
}
        }
        GlobalID = GlobalID = GlobalID;
        exports.GlobalID = GlobalID;
        return;
};

// --------------------- MODULE 1866 — CallListener ---------------------

// ============================================================ //
// webpack module 1866  —  CallListener
// exports: CallListener
// ============================================================ //

__webpack_modules__[1866] = function CallListener_factory(__unused_webpack_module, exports) {
    var CallListener, <class_fields_init>, CallListener;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CallListener = undefined;
        <class_fields_init> = undefined;
        CallListener;
        class CallListener {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x96136 (open) */
}
            patch () {
        return;
}
        }
        CallListener = CallListener = CallListener;
        exports.CallListener = CallListener;
        return;
};

// --------------------- MODULE 8402 — IButtonListener ---------------------

// ============================================================ //
// webpack module 8402  —  IButtonListener
// exports: IButtonListener
// deps: 1978 (Libc)
// ============================================================ //

__webpack_modules__[8402] = function IButtonListener_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, IButtonListener, <class_fields_init>, IButtonListener;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IButtonListener = undefined;
        Libc = __webpack_require__(1978);
        <class_fields_init> = undefined;
        IButtonListener;
        class IButtonListener {
            constructor (callback) {
        if (<class_fields_init>) {
        } /* if 0x7fff1 */
        this._callback = callback;
        this.nativeCallback = new NativeCallback(function (selfPtr, buttonPtr) {
        return (this)._callback(selfPtr, buttonPtr);
}, "void", ["pointer", "pointer"]);
        this.vtable = ((Libc).Libc).calloc(((Process).pointerSize * 2), 1);
        (((this).vtable).add((Process).pointerSize)).writePointer((this).nativeCallback);
        this.instance = ((Libc).Libc).calloc(((Process).pointerSize * 2), 1);
        return;
}
        }
        IButtonListener = IButtonListener = IButtonListener;
        exports.IButtonListener = IButtonListener;
        return;
};

// --------------------- MODULE 9025 — INativeDialogListener ---------------------

// ============================================================ //
// webpack module 9025  —  INativeDialogListener
// exports: INativeDialogListener
// deps: 1978 (Libc)
// ============================================================ //

__webpack_modules__[9025] = function INativeDialogListener_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, INativeDialogListener, <class_fields_init>, INativeDialogListener;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.INativeDialogListener = undefined;
        Libc = __webpack_require__(1978);
        <class_fields_init> = undefined;
        INativeDialogListener;
        class INativeDialogListener {
            constructor (func) {
        if (<class_fields_init>) {
        } /* if 0x8018c */
        this.instance = ((Libc).Libc).malloc((Process).pointerSize);
        this.vtable = ((Libc).Libc).malloc((Process).pointerSize);
        this.nativeCallback = new NativeCallback(func, "void", ["pointer", "int"]);
        ((this).vtable).writePointer((this).nativeCallback);
        return;
}
        }
        INativeDialogListener = INativeDialogListener = INativeDialogListener;
        exports.INativeDialogListener = INativeDialogListener;
        return;
};

// --------------------- MODULE 9724 — CustomTextEncoder ---------------------

// ============================================================ //
// webpack module 9724  —  CustomTextEncoder
// exports: CustomTextEncoder
// ============================================================ //

__webpack_modules__[9724] = function CustomTextEncoder_factory(__unused_webpack_module, exports) {
    var CustomTextEncoder, <class_fields_init>, CustomTextEncoder;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CustomTextEncoder = undefined;
        <class_fields_init> = undefined;
        CustomTextEncoder;
        class CustomTextEncoder {
            constructor (text) {
        if (<class_fields_init>) {
        } /* if 0x945e3 */
        this.instance = (CustomTextEncoder).encode(text);
        return;
}
            encode (text) {
    var utf8, i, charCode, nextCharCode;
        utf8 = [];
        i = 0;
        while ((i < text.length)) {
            charCode = (text).charCodeAt(i);
            if ((charCode >= 55296)) {
                if ((charCode <= 56319)) {
                    if (((i + 1) < text.length)) {
                        nextCharCode = (text).charCodeAt((i + 1));
                        if ((nextCharCode >= 56320)) {
                            if ((nextCharCode <= 57343)) {
                                charCode = ((65536 + ((charCode - 55296) << 10)) + (nextCharCode - 56320));
                                i = ((i) + 1);
                                (i++);
                            } /* if 0x946bd */
                        } /* if 0x946bd */
                    } /* if 0x946bd */
                } /* if 0x946bd */
            } /* if 0x946bd */
            if ((charCode < 128)) {
                (utf8).push(charCode);
            } /* if 0x946d8 */
            /* jump -> 0x94775 */
            if ((charCode < 2048)) {
                (utf8).push((192 | (charCode >> 6)), (128 | (charCode & 63)));
            } /* if 0x94702 */
            /* jump -> 0x94774 */
            if ((charCode < 65536)) {
                (utf8).push((224 | (charCode >> 12)), (128 | ((charCode >> 6) & 63)), (128 | (charCode & 63)));
            } /* if 0x9473b */
            /* jump -> 0x94774 */
            (utf8).push((240 | (charCode >> 18)), (128 | ((charCode >> 12) & 63)), (128 | ((charCode >> 6) & 63)), (128 | (charCode & 63)));
            i = ((i) + 1);
            (i++);
        } /* while 0x94782 */
        return new Uint8Array(utf8);
}
            decode (arrayBuffer) {
    var bytes, result, i, byte1, byte2, codepoint, byte2, byte3, codepoint, byte2, byte3, byte4, codepoint, cp, high, low;
        bytes = new Uint8Array(arrayBuffer);
        result = "";
        i = 0;
        while ((i < bytes.length)) {
            i = ((i) + 1);
            byte1 = bytes[(i++)];
            if ((byte1 < 128)) {
                result = (result + (String).fromCharCode(byte1));
                /* loop: jump back to 0x94822 */
            } /* if 0x94862 */
            if ((byte1 < 224)) {
                i = ((i) + 1);
                byte2 = bytes[(i++)];
                if (!(byte2 === undefined)) {
                    codepoint = (((byte1 & 31) << 6) | (byte2 & 63));
                    result = (result + (String).fromCharCode(codepoint));
                    if ((byte1 < 240)) {
                        i = ((i) + 1);
                        byte2 = bytes[(i++)];
                        i = ((i) + 1);
                        byte3 = bytes[(i++)];
                        if (!(byte2 === undefined)) {
                            (byte2 === undefined);
                            if (!(byte3 === undefined)) {
                                codepoint = ((((byte1 & 15) << 12) | ((byte2 & 63) << 6)) | (byte3 & 63));
                                result = (result + (String).fromCharCode(codepoint));
                                i = ((i) + 1);
                                byte2 = bytes[(i++)];
                                i = ((i) + 1);
                                byte3 = bytes[(i++)];
                                i = ((i) + 1);
                                byte4 = bytes[(i++)];
                                if (!(byte2 === undefined)) {
                                    (byte2 === undefined);
                                    if (!(byte3 === undefined)) {
                                        (byte3 === undefined);
                                        if (!(byte4 === undefined)) {
                                            codepoint = (((((byte1 & 7) << 18) | ((byte2 & 63) << 12)) | ((byte3 & 63) << 6)) | (byte4 & 63));
                                            if ((codepoint <= 65535)) {
                                                result = (result + (String).fromCharCode(codepoint));
                                            } /* if 0x949dd */
                                            cp = (codepoint - 65536);
                                            high = (55296 + (cp >> 10));
                                            low = (56320 + (cp & 1023));
                                            result = (result + (String).fromCharCode(high, low));
                                        } /* if 0x94a30 */
                                    } /* if 0x9498d */
                                } /* if 0x9498d */
                            } /* if 0x94a30 */
                        } /* if 0x948fb */
                    } /* if 0x94937 */
                } /* if 0x94a30 */
            } /* if 0x948b9 */
        } /* while 0x94a30 */
        if ((!result)) {
            return "";
        } /* if 0x94a35 */
        return result;
}
            toArrayBuffer (data) {
    var buffer;
        buffer = new ArrayBuffer(data.length);
        (new Uint8Array(buffer))["set"](data);
        return buffer;
}
        }
        CustomTextEncoder = CustomTextEncoder = CustomTextEncoder;
        exports.CustomTextEncoder = CustomTextEncoder;
        return;
};

// --------------------- MODULE 8234 — Json ---------------------

// ============================================================ //
// webpack module 8234  —  Json
// exports: Json
// deps: 2214 (ModProperties), 4272 (EDebugger)
// ============================================================ //

__webpack_modules__[8234] = function Json_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ModProperties, EDebugger, Json, <class_fields_init>, Json;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Json = undefined;
        ModProperties = __webpack_require__(2214);
        EDebugger = __webpack_require__(4272);
        <class_fields_init> = undefined;
        Json;
        class Json {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xaeacb (open) */
}
            formatJSONString (obj) {
    var tablen, obj, tablen;
        tablen = obj;
        if (((tablen) === undefined)) {
            if ((((ModProperties).ModProperties).environment === "dev")) {
            } /* if 0xaea0c */
            /* jump -> 0xaea0d */
            obj = tablen = 0;
        } /* if 0xaea0e */
        return (JSON).stringify(obj, null, tablen);
}
            formatLogJSON (level, message) {
    var typeArray;
        typeArray = ["ERROR", "WARNING"];
        ((EDebugger).EDebugger).logsObject[(Date).now()] = { type: typeArray[level], message: message };
        return (Json).formatJSONString(((EDebugger).EDebugger).logsObject, 4);
}
        }
        Json = Json = Json;
        exports.Json = Json;
        return;
};

// --------------------- MODULE 758 — ClipboardImage ---------------------

// ============================================================ //
// webpack module 758  —  ClipboardImage
// exports: ClipboardImage
// deps: 1978 (Libc)
// ============================================================ //

__webpack_modules__[758] = function ClipboardImage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, JNI_VERSION_1_6, VM_ATTACH_CURRENT_THREAD, VM_GET_ENV, ENV_FIND_CLASS, ENV_EXCEPTION_CLEAR, ENV_DELETE_LOCAL_REF, ENV_GET_METHOD_ID, ENV_CALL_OBJECT_METHOD_A, ENV_CALL_INT_METHOD_A, ENV_CALL_VOID_METHOD_A, ENV_GET_STATIC_METHOD_ID, ENV_CALL_STATIC_OBJECT_METHOD_A, ENV_NEW_STRING_UTF, ENV_EXCEPTION_CHECK, PTR, READ_CHUNK, ClipboardImage, <class_fields_init>, ClipboardImage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ClipboardImage = undefined;
        Libc = __webpack_require__(1978);
        JNI_VERSION_1_6 = 65542;
        VM_ATTACH_CURRENT_THREAD = 4;
        VM_GET_ENV = 6;
        ENV_FIND_CLASS = 6;
        ENV_EXCEPTION_CLEAR = 17;
        ENV_DELETE_LOCAL_REF = 23;
        ENV_GET_METHOD_ID = 33;
        ENV_CALL_OBJECT_METHOD_A = 36;
        ENV_CALL_INT_METHOD_A = 51;
        ENV_CALL_VOID_METHOD_A = 63;
        ENV_GET_STATIC_METHOD_ID = 113;
        ENV_CALL_STATIC_OBJECT_METHOD_A = 116;
        ENV_NEW_STRING_UTF = 167;
        ENV_EXCEPTION_CHECK = 228;
        PTR = (Process).pointerSize;
        READ_CHUNK = 65536;
        <class_fields_init> = undefined;
        ClipboardImage;
        class ClipboardImage {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9c3f2 (open) */
}
            readImageTo (destPath) {
    var env, table, fn, findClass, getMethodId, getStaticMethodId, newStringUtf, callObjectA, callStaticObjectA, callIntA, callVoidA, exceptionCheck, exceptionClear, deleteLocalRef, refs, track, failed, cstr, oneArg, activityThread, currentApplication, context, contextClass, getSystemService, getContentResolver, clipboard, clipboardClass, getPrimaryClip, clip, clipDataClass, getItemAt, itemIndex, item, itemClass, getUri, uri, resolver, resolverClass, openFileDescriptor, openArgs, parcelFd, parcelFdClass, getFd, close, fd, ok, ref;
        env = (this).getEnv();
        if (!(!env)) {
            if ((env).isNull()) {
                return false;
            } /* if 0x9b7cf */
        } /* if 0x9b7cb */
        table = (env).readPointer();
        fn = env = table = fn = findClass = getMethodId = getStaticMethodId = newStringUtf = callObjectA = callStaticObjectA = callIntA = callVoidA = exceptionCheck = exceptionClear = deleteLocalRef = refs = track = failed = cstr = oneArg = <underflow>;
        findClass = fn(ENV_FIND_CLASS, "pointer", ["pointer", "pointer"]);
        getMethodId = fn(ENV_GET_METHOD_ID, "pointer", ["pointer", "pointer", "pointer", "pointer"]);
        getStaticMethodId = fn(ENV_GET_STATIC_METHOD_ID, "pointer", ["pointer", "pointer", "pointer", "pointer"]);
        newStringUtf = fn(ENV_NEW_STRING_UTF, "pointer", ["pointer", "pointer"]);
        callObjectA = fn(ENV_CALL_OBJECT_METHOD_A, "pointer", ["pointer", "pointer", "pointer", "pointer"]);
        callStaticObjectA = fn(ENV_CALL_STATIC_OBJECT_METHOD_A, "pointer", ["pointer", "pointer", "pointer", "pointer"]);
        callIntA = fn(ENV_CALL_INT_METHOD_A, "int", ["pointer", "pointer", "pointer", "pointer"]);
        callVoidA = fn(ENV_CALL_VOID_METHOD_A, "void", ["pointer", "pointer", "pointer", "pointer"]);
        exceptionCheck = fn(ENV_EXCEPTION_CHECK, "int", ["pointer"]);
        exceptionClear = fn(ENV_EXCEPTION_CLEAR, "void", ["pointer"]);
        deleteLocalRef = fn(ENV_DELETE_LOCAL_REF, "void", ["pointer", "pointer"]);
        refs = [];
        track = <underflow>;
        failed = <underflow>;
        cstr = <underflow>;
        oneArg = <underflow>;
        /* CATCH -> 0x9bea6 (try region) */
        activityThread = track(findClass(env, cstr("android/app/ActivityThread")));
        if ((activityThread).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9b9ec */
        currentApplication = getStaticMethodId(env, activityThread, cstr("currentApplication"), cstr("()Landroid/app/Application;"));
        if ((currentApplication).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9ba26 */
        context = track(callStaticObjectA(env, activityThread, currentApplication, NULL));
        if ((context).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9ba5a */
        contextClass = track(findClass(env, cstr("android/content/Context")));
        getSystemService = getMethodId(env, contextClass, cstr("getSystemService"), cstr("(Ljava/lang/String;)Ljava/lang/Object;"));
        getContentResolver = getMethodId(env, contextClass, cstr("getContentResolver"), cstr("()Landroid/content/ContentResolver;"));
        if (!(getSystemService).isNull()) {
            (getSystemService).isNull();
            if ((getContentResolver).isNull()) {
                failed();
                /* gosub 0x9beba (finally) */
                return false;
            } /* if 0x9bad9 */
        } /* if 0x9baca */
        clipboard = track(callObjectA(env, context, getSystemService, oneArg(track(newStringUtf(env, cstr("clipboard"))))));
        if ((clipboard).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bb20 */
        clipboardClass = track(findClass(env, cstr("android/content/ClipboardManager")));
        getPrimaryClip = getMethodId(env, clipboardClass, cstr("getPrimaryClip"), cstr("()Landroid/content/ClipData;"));
        if ((getPrimaryClip).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bb70 */
        clip = track(callObjectA(env, clipboard, getPrimaryClip, NULL));
        if ((clip).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bba4 */
        clipDataClass = track(findClass(env, cstr("android/content/ClipData")));
        getItemAt = getMethodId(env, clipDataClass, cstr("getItemAt"), cstr("(I)Landroid/content/ClipData$Item;"));
        if ((getItemAt).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bbf4 */
        itemIndex = ((Libc).Libc).malloc(8);
        (itemIndex).writeU64(0);
        item = track(callObjectA(env, clip, getItemAt, itemIndex));
        if ((item).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bc47 */
        itemClass = track(findClass(env, cstr("android/content/ClipData$Item")));
        getUri = getMethodId(env, itemClass, cstr("getUri"), cstr("()Landroid/net/Uri;"));
        if ((getUri).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bc97 */
        uri = track(callObjectA(env, item, getUri, NULL));
        if ((uri).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bccb */
        resolver = track(callObjectA(env, context, getContentResolver, NULL));
        if ((resolver).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bcff */
        resolverClass = track(findClass(env, cstr("android/content/ContentResolver")));
        openFileDescriptor = getMethodId(env, resolverClass, cstr("openFileDescriptor"), cstr("(Landroid/net/Uri;Ljava/lang/String;)Landroid/os/ParcelFileDescriptor;"));
        if ((openFileDescriptor).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bd4f */
        openArgs = ((Libc).Libc).malloc(16);
        (openArgs).writePointer(uri);
        ((openArgs).add(8)).writePointer(track(newStringUtf(env, cstr("r"))));
        parcelFd = track(callObjectA(env, resolver, openFileDescriptor, openArgs));
        if ((parcelFd).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9bdce */
        parcelFdClass = track(findClass(env, cstr("android/os/ParcelFileDescriptor")));
        getFd = getMethodId(env, parcelFdClass, cstr("getFd"), cstr("()I"));
        close = getMethodId(env, parcelFdClass, cstr("close"), cstr("()V"));
        if ((getFd).isNull()) {
            failed();
            /* gosub 0x9beba (finally) */
            return false;
        } /* if 0x9be3e */
        fd = callIntA(env, parcelFd, getFd, NULL);
        ok = false;
        if ((fd >= 0)) {
            ok = (this).copyFdToFile(fd, destPath);
        } /* if 0x9be71 */
        if ((!(close).isNull())) {
            callVoidA(env, parcelFd, close, NULL);
            failed();
        } /* if 0x9be99 */
        /* gosub 0x9beba (finally) */
        return ok;
        activityThread = currentApplication = context = contextClass = getSystemService = getContentResolver = clipboard = clipboardClass = getPrimaryClip = clip = clipDataClass = getItemAt = itemIndex = item = itemClass = getUri = uri = resolver = resolverClass = openFileDescriptor = openArgs = parcelFd = parcelFdClass = getFd = close = fd = ok = <underflow>;
        /* CATCH -> 0x9beb4 (try region) */
        /* gosub 0x9beba (finally) */
        return false;
        /* gosub 0x9beba (finally) */
        throw <underflow>;
        /* jump -> 0x9bedf */
        ref = /*iter*/ refs;
        /* CATCH -> 0x9bed8 (try region) */
        deleteLocalRef(env, ref);
        /* jump -> 0x9bedf */
        ref = <underflow>;
        /* CATCH -> 0x9bee1 (try region) */
        /* jump -> 0x9bedf */
        throw <underflow>;
        } while (!<underflow>);
        /* end finally */
}
            getEnv () {
    var symbol, getCreatedVMs, vmBuffer, vmCount, vm, vmTable, getEnv, envBuffer, attach;
        if ((((Module).findExportByName("libart.so", "JNI_GetCreatedJavaVMs")) == null)) {
            (Module).findExportByName("libart.so", "JNI_GetCreatedJavaVMs");
            symbol = (Module).findExportByName(null, "JNI_GetCreatedJavaVMs");
        } /* if 0x9c137 */
        if ((!symbol)) {
            return null;
        } /* if 0x9c140 */
        getCreatedVMs = new NativeFunction(symbol, "int", ["pointer", "int", "pointer"]);
        vmBuffer = ((Libc).Libc).malloc(PTR);
        vmCount = ((Libc).Libc).malloc(4);
        if (!(getCreatedVMs(vmBuffer, 1, vmCount) !== 0)) {
            (getCreatedVMs(vmBuffer, 1, vmCount) !== 0);
            if (((vmCount).readS32() < 1)) {
                return null;
            } /* if 0x9c1ac */
        } /* if 0x9c1a8 */
        vm = (vmBuffer).readPointer();
        if ((vm).isNull()) {
            return null;
        } /* if 0x9c1c8 */
        vmTable = (vm).readPointer();
        getEnv = new NativeFunction(((vmTable).add((VM_GET_ENV * PTR))).readPointer(), "int", ["pointer", "pointer", "int"]);
        envBuffer = ((Libc).Libc).malloc(PTR);
        if ((getEnv(vm, envBuffer, JNI_VERSION_1_6) !== 0)) {
            attach = new NativeFunction(((vmTable).add((VM_ATTACH_CURRENT_THREAD * PTR))).readPointer(), "int", ["pointer", "pointer", "pointer"]);
            if ((attach(vm, envBuffer, NULL) !== 0)) {
                return null;
            } /* if 0x9c28b */
        } /* if 0x9c28b */
        return (envBuffer).readPointer();
}
            copyFdToFile (fd, destPath) {
    var buffer, file, total, read;
        buffer = ((Libc).Libc).malloc(READ_CHUNK);
        file = null;
        total = 0;
        /* CATCH -> 0x9c38a (try region) */
        file = new File(destPath, "wb");
        read = Number(((Libc).Libc).read(fd, buffer, READ_CHUNK));
        while (!(read <= 0)) {
            (file).write((buffer).readByteArray(read));
            total = (total + read);
        } /* while 0x9c374 */
        (file).close();
        return (total > 0);
        read = buffer = file = total = <underflow>;
        /* CATCH -> 0x9c3b6 (try region) */
        /* CATCH -> 0x9c3a9 (try region) */
        if (file) {
            (file).close();
        } /* if 0x9c3a3 */
        /* jump -> 0x9c3b0 */
        /* CATCH -> 0x9c3b2 (try region) */
        /* jump -> 0x9c3b0 */
        throw <underflow>;
        return false;
        throw <underflow>;
}
        }
        ClipboardImage = ENV_CALL_OBJECT_METHOD_A = ClipboardImage;
        exports.ClipboardImage = ClipboardImage;
        return;
};

