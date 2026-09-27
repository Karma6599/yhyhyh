var areaEffectProps = ["AreaEffectAttack", "AreaEffectAttack2", "AreaEffectUlti", "AreaEffectUlti2", "OverchargedAreaEffectUlti", "OverchargedAreaEffectUlti2", "AreaEffect", "AreaEffectStarPower", "AreaEffectStarPowerOvercharged", "AreaEffectStarPower2", "ChainAreaEffect", "OverchargedChainAreaEffect", "TriggerAreaEffect", "DestroyAreaEffect", "SpawnAreaEffectObject", "SpawnAreaEffectObject2", "SpawnAreaEffectTrail", "CustomAreaEffect1", "CustomAreaEffect2"];
var projectileProps = ["Projectiles", "OverchargedMainAttackProjectile", "UltiProjectile", "OverchargedUltiProjectile", "SecondaryProjectile", "ThirdProjectile", "AutoAttackProjectile", "ProjectileForShockyStarPower", "OverchargedProjectileForShockyStarPower", "BulletExplosionBullet", "ChainBullet"];
var itemProps = ["SpawnedItem", "SpawnedItem2", "BulletExplosionItem", "SpawnItem"];

class Utils {
    static syncObjects(obj1, obj2) {
        var key, val, newProp;
        for (key in obj1) {
            if (!(key in obj2)) {
                val = obj1[key];
                newProp = val;
                if (Array.isArray(val)) {
                    newProp = Object.assign([], val);
                } else if (val != null && typeof val === "object" && Object.getPrototypeOf(val) === Object.prototype) {
                    newProp = Object.assign({}, val);
                }
                obj2.insertProperty(key, newProp, Object.keys(obj1).indexOf(key));
            }
        }
    }
    static getCurrentTime() {
        return Math.floor(Date.now() / 1000);
    }
    static setGameThreadSleepTo(sec) {
        return;
    }
    static clearEmptyEntries(obj) {
        var key, val;
        for (key in obj) {
            val = obj[key];
            if (!val) {
                delete obj[key];
            } else if (typeof val === "object" && Object.getPrototypeOf(val) === Object.prototype) {
                Utils.clearEmptyEntries(val);
                if (Object.keys(val).length === 0) {
                    delete obj[key];
                }
            }
        }
    }
    static clearConfigEntriesIfAnyValIsNull(obj) {
        var key, val, skinKey, skin;
        for (key in obj) {
            val = obj[key];
            for (skinKey in val) {
                skin = val[skinKey];
                if (skin.a.length === 0) {
                    if (skin.p.length === 0) {
                        if (skin.i.length === 0) {
                            delete val[skinKey];
                        }
                    }
                }
            }
            if (Object.keys(val).length === 0) {
                delete obj[key];
            }
        }
    }
    static processDerivative(obj, type, hold) {
        var key, normalized, val;
        if (obj == null) {
            return;
        }
        if (!obj.name) {
            return;
        }
        hold[type].push(obj.name);
        for (key of Object.keys(obj)) {
            normalized = key[0].toUpperCase() + key.slice(1);
            val = obj[key];
            if (areaEffectProps.includes(normalized)) {
                Utils.processDerivative(val, "a", hold);
            }
            if (projectileProps.includes(normalized)) {
                Utils.processDerivative(val, "p", hold);
            }
            if (itemProps.includes(normalized)) {
                Utils.processDerivative(val, "i", hold);
            }
        }
    }
}
Utils.gameSleeping = false;

class Validation {
    static isDevAvailable() {
        if (ModProperties.isDev()) {
            return true;
        }
        if (Config.config.DevModeEnabled) {
            return Validation.developersList.includes(PlayerInfo.tag);
        }
        return false;
    }
    static isWhitelisted() {
        if (ModProperties.environment === "dev") {
            return true;
        }
        return Validation.betaList.includes(PlayerInfo.tag);
    }
}
Validation.developersList = ["9P0R2YC2Q", "2RGGJPLQU", "8PLVR29JP", "8GCQYL2VL", "QUJPVU0L", "PQL90VLR9"];
Validation.testersList = ["9P0R2YC2Q"];
Validation.betaList = ["9P0R2YC2Q"];

class GlobalID {
    static createGlobalID(tableIndex, csvRow) {
        return (csvRow % 1000000) + (1000000 * tableIndex);
    }
    static getClassID(globalID) {
        return Math.round(globalID / 1000000);
    }
    static getInstanceID(globalId) {
        return globalId % 1000000;
    }
}

class CallListener {
    static patch() {
        return;
    }
}

class IButtonListener {
    constructor(callback) {
        this._callback = callback;
        this.nativeCallback = new NativeCallback((selfPtr, buttonPtr) => this._callback(selfPtr, buttonPtr), "void", ["pointer", "pointer"]);
        this.vtable = Libc.calloc(Process.pointerSize * 2, 1);
        this.vtable.add(Process.pointerSize).writePointer(this.nativeCallback);
        this.instance = Libc.calloc(Process.pointerSize * 2, 1);
    }
}

class INativeDialogListener {
    constructor(func) {
        this.instance = Libc.malloc(Process.pointerSize);
        this.vtable = Libc.malloc(Process.pointerSize);
        this.nativeCallback = new NativeCallback(func, "void", ["pointer", "int"]);
        this.vtable.writePointer(this.nativeCallback);
    }
}

class CustomTextEncoder {
    constructor(text) {
        this.instance = CustomTextEncoder.encode(text);
    }
    static encode(text) {
        var utf8, i, charCode, nextCharCode;
        utf8 = [];
        i = 0;
        while (i < text.length) {
            charCode = text.charCodeAt(i);
            if (charCode >= 55296) {
                if (charCode <= 56319) {
                    if (i + 1 < text.length) {
                        nextCharCode = text.charCodeAt(i + 1);
                        if (nextCharCode >= 56320) {
                            if (nextCharCode <= 57343) {
                                charCode = 65536 + ((charCode - 55296) << 10) + (nextCharCode - 56320);
                                i++;
                            }
                        }
                    }
                }
            }
            if (charCode < 128) {
                utf8.push(charCode);
            } else if (charCode < 2048) {
                utf8.push(192 | (charCode >> 6), 128 | (charCode & 63));
            } else if (charCode < 65536) {
                utf8.push(224 | (charCode >> 12), 128 | ((charCode >> 6) & 63), 128 | (charCode & 63));
            } else {
                utf8.push(240 | (charCode >> 18), 128 | ((charCode >> 12) & 63), 128 | ((charCode >> 6) & 63), 128 | (charCode & 63));
            }
            i++;
        }
        return new Uint8Array(utf8);
    }
    static decode(arrayBuffer) {
        var bytes, result, i, byte1, byte2, byte3, byte4, codepoint, cp, high, low;
        bytes = new Uint8Array(arrayBuffer);
        result = "";
        i = 0;
        while (i < bytes.length) {
            byte1 = bytes[i++];
            if (byte1 < 128) {
                result = result + String.fromCharCode(byte1);
            } else if (byte1 < 224) {
                byte2 = bytes[i++];
                if (byte2 !== undefined) {
                    codepoint = ((byte1 & 31) << 6) | (byte2 & 63);
                    result = result + String.fromCharCode(codepoint);
                }
            } else if (byte1 < 240) {
                byte2 = bytes[i++];
                byte3 = bytes[i++];
                if (byte2 !== undefined && byte3 !== undefined) {
                    codepoint = ((byte1 & 15) << 12) | ((byte2 & 63) << 6) | (byte3 & 63);
                    result = result + String.fromCharCode(codepoint);
                }
            } else {
                byte2 = bytes[i++];
                byte3 = bytes[i++];
                byte4 = bytes[i++];
                if (byte2 !== undefined && byte3 !== undefined && byte4 !== undefined) {
                    codepoint = (((byte1 & 7) << 18) | ((byte2 & 63) << 12)) | ((byte3 & 63) << 6) | (byte4 & 63);
                    if (codepoint <= 65535) {
                        result = result + String.fromCharCode(codepoint);
                    } else {
                        cp = codepoint - 65536;
                        high = 55296 + (cp >> 10);
                        low = 56320 + (cp & 1023);
                        result = result + String.fromCharCode(high, low);
                    }
                }
            }
        }
        if (!result) {
            return "";
        }
        return result;
    }
    static toArrayBuffer(data) {
        var buffer;
        buffer = new ArrayBuffer(data.length);
        new Uint8Array(buffer).set(data);
        return buffer;
    }
}

class Json {
    static formatJSONString(obj, tablen) {
        if (tablen === undefined) {
            if (ModProperties.environment === "dev") {
                tablen = 4;
            } else {
                tablen = 0;
            }
        }
        return JSON.stringify(obj, null, tablen);
    }
    static formatLogJSON(level, message) {
        var typeArray;
        typeArray = ["ERROR", "WARNING"];
        EDebugger.logsObject[Date.now()] = { type: typeArray[level], message: message };
        return Json.formatJSONString(EDebugger.logsObject, 4);
    }
}

var JNI_VERSION_1_6 = 65542;
var VM_ATTACH_CURRENT_THREAD = 4;
var VM_GET_ENV = 6;
var ENV_FIND_CLASS = 6;
var ENV_EXCEPTION_CLEAR = 17;
var ENV_DELETE_LOCAL_REF = 23;
var ENV_GET_METHOD_ID = 33;
var ENV_CALL_OBJECT_METHOD_A = 36;
var ENV_CALL_INT_METHOD_A = 51;
var ENV_CALL_VOID_METHOD_A = 63;
var ENV_GET_STATIC_METHOD_ID = 113;
var ENV_CALL_STATIC_OBJECT_METHOD_A = 116;
var ENV_NEW_STRING_UTF = 167;
var ENV_EXCEPTION_CHECK = 228;
var PTR = Process.pointerSize;
var READ_CHUNK = 65536;

class ClipboardImage {
    static readImageTo(destPath) {
        var env, table, fn, findClass, getMethodId, getStaticMethodId, newStringUtf, callObjectA, callStaticObjectA, callIntA, callVoidA, exceptionCheck, exceptionClear, deleteLocalRef, refs, track, failed, cstr, oneArg, activityThread, currentApplication, context, contextClass, getSystemService, getContentResolver, clipboard, clipboardClass, getPrimaryClip, clip, clipDataClass, getItemAt, itemIndex, item, itemClass, getUri, uri, resolver, resolverClass, openFileDescriptor, openArgs, parcelFd, parcelFdClass, getFd, close, fd, ok, ref;
        env = ClipboardImage.getEnv();
        if (!env || env.isNull()) {
            return false;
        }
        table = env.readPointer();
        fn = function (index, retType, argTypes) {
            return new NativeFunction(table.add(index * PTR).readPointer(), retType, argTypes);
        };
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
        track = function (ref) {
            refs.push(ref);
            return ref;
        };
        failed = function () {
            return;
        };
        cstr = function (s) {
            return Memory.allocUtf8String(s);
        };
        oneArg = function (p) {
            var args = Libc.malloc(PTR);
            args.writePointer(p);
            return args;
        };
        try {
            activityThread = track(findClass(env, cstr("android/app/ActivityThread")));
            if (activityThread.isNull()) {
                failed();
                return false;
            }
            currentApplication = getStaticMethodId(env, activityThread, cstr("currentApplication"), cstr("()Landroid/app/Application;"));
            if (currentApplication.isNull()) {
                failed();
                return false;
            }
            context = track(callStaticObjectA(env, activityThread, currentApplication, NULL));
            if (context.isNull()) {
                failed();
                return false;
            }
            contextClass = track(findClass(env, cstr("android/content/Context")));
            getSystemService = getMethodId(env, contextClass, cstr("getSystemService"), cstr("(Ljava/lang/String;)Ljava/lang/Object;"));
            getContentResolver = getMethodId(env, contextClass, cstr("getContentResolver"), cstr("()Landroid/content/ContentResolver;"));
            if (getSystemService.isNull() || getContentResolver.isNull()) {
                failed();
                return false;
            }
            clipboard = track(callObjectA(env, context, getSystemService, oneArg(track(newStringUtf(env, cstr("clipboard"))))));
            if (clipboard.isNull()) {
                failed();
                return false;
            }
            clipboardClass = track(findClass(env, cstr("android/content/ClipboardManager")));
            getPrimaryClip = getMethodId(env, clipboardClass, cstr("getPrimaryClip"), cstr("()Landroid/content/ClipData;"));
            if (getPrimaryClip.isNull()) {
                failed();
                return false;
            }
            clip = track(callObjectA(env, clipboard, getPrimaryClip, NULL));
            if (clip.isNull()) {
                failed();
                return false;
            }
            clipDataClass = track(findClass(env, cstr("android/content/ClipData")));
            getItemAt = getMethodId(env, clipDataClass, cstr("getItemAt"), cstr("(I)Landroid/content/ClipData$Item;"));
            if (getItemAt.isNull()) {
                failed();
                return false;
            }
            itemIndex = Libc.malloc(8);
            itemIndex.writeU64(0);
            item = track(callObjectA(env, clip, getItemAt, itemIndex));
            if (item.isNull()) {
                failed();
                return false;
            }
            itemClass = track(findClass(env, cstr("android/content/ClipData$Item")));
            getUri = getMethodId(env, itemClass, cstr("getUri"), cstr("()Landroid/net/Uri;"));
            if (getUri.isNull()) {
                failed();
                return false;
            }
            uri = track(callObjectA(env, item, getUri, NULL));
            if (uri.isNull()) {
                failed();
                return false;
            }
            resolver = track(callObjectA(env, context, getContentResolver, NULL));
            if (resolver.isNull()) {
                failed();
                return false;
            }
            resolverClass = track(findClass(env, cstr("android/content/ContentResolver")));
            openFileDescriptor = getMethodId(env, resolverClass, cstr("openFileDescriptor"), cstr("(Landroid/net/Uri;Ljava/lang/String;)Landroid/os/ParcelFileDescriptor;"));
            if (openFileDescriptor.isNull()) {
                failed();
                return false;
            }
            openArgs = Libc.malloc(16);
            openArgs.writePointer(uri);
            openArgs.add(8).writePointer(track(newStringUtf(env, cstr("r"))));
            parcelFd = track(callObjectA(env, resolver, openFileDescriptor, openArgs));
            if (parcelFd.isNull()) {
                failed();
                return false;
            }
            parcelFdClass = track(findClass(env, cstr("android/os/ParcelFileDescriptor")));
            getFd = getMethodId(env, parcelFdClass, cstr("getFd"), cstr("()I"));
            close = getMethodId(env, parcelFdClass, cstr("close"), cstr("()V"));
            if (getFd.isNull()) {
                failed();
                return false;
            }
            fd = callIntA(env, parcelFd, getFd, NULL);
            ok = false;
            if (fd >= 0) {
                ok = ClipboardImage.copyFdToFile(fd, destPath);
            }
            if (!close.isNull()) {
                callVoidA(env, parcelFd, close, NULL);
                failed();
            }
            return ok;
        } catch (e) {
            return false;
        } finally {
            for (var ref of refs) {
                deleteLocalRef(env, ref);
            }
        }
    }
    static getEnv() {
        var symbol, getCreatedVMs, vmBuffer, vmCount, vm, vmTable, getEnv, envBuffer, attach;
        symbol = Module.findExportByName("libart.so", "JNI_GetCreatedJavaVMs");
        if (symbol == null) {
            symbol = Module.findExportByName(null, "JNI_GetCreatedJavaVMs");
        }
        if (!symbol) {
            return null;
        }
        getCreatedVMs = new NativeFunction(symbol, "int", ["pointer", "int", "pointer"]);
        vmBuffer = Libc.malloc(PTR);
        vmCount = Libc.malloc(4);
        if (getCreatedVMs(vmBuffer, 1, vmCount) !== 0 || vmCount.readS32() < 1) {
            return null;
        }
        vm = vmBuffer.readPointer();
        if (vm.isNull()) {
            return null;
        }
        vmTable = vm.readPointer();
        getEnv = new NativeFunction(vmTable.add(VM_GET_ENV * PTR).readPointer(), "int", ["pointer", "pointer", "int"]);
        envBuffer = Libc.malloc(PTR);
        if (getEnv(vm, envBuffer, JNI_VERSION_1_6) !== 0) {
            attach = new NativeFunction(vmTable.add(VM_ATTACH_CURRENT_THREAD * PTR).readPointer(), "int", ["pointer", "pointer", "pointer"]);
            if (attach(vm, envBuffer, NULL) !== 0) {
                return null;
            }
        }
        return envBuffer.readPointer();
    }
    static copyFdToFile(fd, destPath) {
        var buffer, file, total, read;
        buffer = Libc.malloc(READ_CHUNK);
        file = null;
        total = 0;
        try {
            file = new File(destPath, "wb");
            read = Number(Libc.read(fd, buffer, READ_CHUNK));
            while (read > 0) {
                file.write(buffer.readByteArray(read));
                total = total + read;
                read = Number(Libc.read(fd, buffer, READ_CHUNK));
            }
            file.close();
            return total > 0;
        } catch (e) {
            if (file) {
                file.close();
            }
            return false;
        }
    }
}
