//============================================================================//// DOWNLOADS & ASSETS// merged webpack modules: 783 DownloadManager, 1357 GameDownloadManager, 6224 DownloadedImage, 5212 ResourceManager, 2588 AAsset, 5238 IOSDownloader//============================================================================//
// --------------------- MODULE 783 — DownloadManager ---------------------


// ============================================================ //
// webpack module 783  —  DownloadManager
// exports: DownloadManager
// deps: 699 (FileManager), 1591 (NativeHTTPClientManager), 1978 (Libc), 3380 (Logcat), 4974 (Breadcrumbs), 8156 (_)
// ============================================================ //

__webpack_modules__[783] = function DownloadManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var FileManager, NativeHTTPClientManager, Logcat, _, Breadcrumbs, Libc, DownloadManager, <class_fields_init>, DownloadManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DownloadManager = undefined;
        FileManager = __webpack_require__(699);
        NativeHTTPClientManager = __webpack_require__(1591);
        Logcat = __webpack_require__(3380);
        _ = __webpack_require__(8156);
        Breadcrumbs = __webpack_require__(4974);
        Libc = __webpack_require__(1978);
        <class_fields_init> = undefined;
        DownloadManager;
        class DownloadManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x46920 (open) */
}
            init () {
    var entry;
        ((Logcat).Logcat).logDebug("Initializing download entry...");
        (this).removeStaleAssets();
        /* jump -> 0x45efa */
        entry = /*iter*/ (this).DOWNLOAD_ASSETS;
        (this).checkAndQueue(entry);
        } while (!(this).DOWNLOAD_ASSETS);
        entry = <underflow>;
        return;
}
            removeStaleAssets () {
    var bsdDir, expectedFiles, cmd, path;
        if (((Process).platform === "darwin")) {
        } /* if 0x45f82 */
        /* jump -> 0x45f9d */
        bsdDir = ("").concat(((FileManager).FileManager).rootDirPath, "/update/bsd");
        if ((!((FileManager).FileManager).isFilepath(bsdDir))) {
            return;
        } /* if 0x45fb5 */
        expectedFiles = ((this).DOWNLOAD_ASSETS).map(function (entry) {
        if (((Process).platform === "darwin")) {
            return ("").concat(((FileManager).FileManager).rootDirPath, "/", (entry).path);
        } /* if 0x460d6 */
        return ("").concat(((FileManager).FileManager).rootDirPath, "/update/", (entry).path);
});
        cmd = ("find \"").concat(bsdDir, "\" -type f");
        /* jump -> 0x46005 */
        path = /*iter*/ expectedFiles;
        cmd = (cmd + (" -not -path \"").concat(path, "\""));
        } while (!expectedFiles);
        path = ("").concat(((FileManager).FileManager).rootDirPath, "/bsd");
        cmd = (cmd + (" -delete && find \"").concat(bsdDir, "\" -type d -empty -delete"));
        ((Logcat).Logcat).logDebug(("Cleaning stale assets in ").concat(bsdDir, " (keeping ", expectedFiles.length, ")"));
        return;
}
            startDownloads () {
        if (((this).downloadQueue.length === 0)) {
            return;
        } /* if 0x46121 */
        ((Logcat).Logcat).logDebug(("Starting ").concat((this).downloadQueue.length, " downloads"));
        return;
}
            checkAndQueue (entry) {
    var targetPath, parts, currentDir, i, checksum;
        targetPath = (entry).path;
        if (((Process).platform !== "darwin")) {
            targetPath = ("").concat(((FileManager).FileManager).rootDirPath, "/update/", targetPath);
        } /* if 0x461e0 */
        /* jump -> 0x46203 */
        targetPath = ("").concat(((FileManager).FileManager).rootDirPath, "/", targetPath);
        parts = (targetPath).split("/");
        currentDir = "";
        i = 0;
        while ((i < (parts.length - 1))) {
            if ((i === 0)) {
            } /* if 0x4623a */
            /* jump -> 0x46247 */
            currentDir = (parts[i] + ("/" + parts[i]));
            if ((!((FileManager).FileManager).isFilepath(currentDir))) {
                ((FileManager).FileManager).createDirectory(currentDir);
            } /* if 0x46277 */
            i = ((i) + 1);
            (i++);
        } /* while 0x46281 */
        if (((FileManager).FileManager).isFilepath(targetPath)) {
            checksum = new Checksum("sha1");
            (checksum).update(((FileManager).FileManager).readFile(targetPath));
            if (((checksum).getString() === (entry).hash)) {
                entry.loadingDone = true;
                DownloadManager.downloadedAssets = (++(DownloadManager).downloadedAssets);
                return;
            } /* if 0x462fd */
        } /* if 0x462fd */
        return;
}
            processQueue () {
    var entry;
        while (((this).activeDownloads < (this).MAX_CONCURRENT)) {
            if (((this).downloadQueue.length > 0)) {
                entry = ((this).downloadQueue).shift();
                (this).startDownload(entry);
                return;
            } /* if 0x4637b (open) */
        } /* while 0x4637b (open) */
}
            startDownload (entry) {
    var host, targetPath;
        this.activeDownloads = (++(this).activeDownloads);
        if (((entry).retries === undefined)) {
            entry.retries = 0;
        } /* if 0x463e7 */
        if (((entry).retries < 1)) {
        } /* if 0x463f8 */
        /* jump -> 0x463fd */
        host = "https://cf.bsdbrawl.com";
        targetPath = (entry).path;
        if (((Process).platform !== "darwin")) {
            targetPath = ("").concat(((FileManager).FileManager).rootDirPath, "/update/", targetPath);
        } /* if 0x4643c */
        /* jump -> 0x4645f */
        targetPath = ("").concat(((FileManager).FileManager).rootDirPath, "/", targetPath);
        (_).LogInfo("started downloading", (entry).urlPath, ("(attempt ").concat(((entry).retries + 1), ", host: ", host, ")"));
        ((Breadcrumbs).Breadcrumbs).push(("Started downloading ").concat((entry).urlPath, " attempt ", ((entry).retries + 1)));
        return;
}
            updateDownloadingStatus () {
        DownloadManager.downloadingFinished = ((DownloadManager).downloadedAssets === (DownloadManager).DOWNLOAD_ASSETS.length);
        return;
}
            isFileDownloaded (fileName) {
    var asset;
        asset = ((DownloadManager).DOWNLOAD_ASSETS).find(function (e) {
        return (((e).path).toLowerCase()).includes((fileName).toLowerCase());
});
        if ((!asset)) {
            return false;
        } /* if 0x46743 */
        if ((((asset).loadingDone) == null)) {
            return false;
        } /* if 0x46751 (open) */
}
            downloadIfNotExists (path, urlPath, hash, on200) {
    var entry;
        entry = ((this).DOWNLOAD_ASSETS).find(function (e) {
        return ((e).urlPath === urlPath);
});
        if (entry) {
            if ((!(entry).loadingDone)) {
                ((this).downloadQueue).push(entry);
                (this).processQueue();
                return;
            } /* if 0x467fe (open) */
        } /* if 0x467fe (open) */
}
            clear () {
    var dir, asset, path;
        dir = ("").concat(((FileManager).FileManager).rootDirPath, "/update/");
        /* jump -> 0x468c8 */
        asset = /*iter*/ (DownloadManager).DOWNLOAD_ASSETS;
        path = (dir + (asset).path);
        if (((FileManager).FileManager).isFilepath(path)) {
            ((Libc).Libc).unlink((Memory).allocUtf8String(path));
        } /* if 0x468c8 */
        } while (!path = (DownloadManager).DOWNLOAD_ASSETS);
        asset = dir = <underflow>;
        return;
}
        }
        DownloadManager = DownloadManager = DownloadManager;
        exports.DownloadManager = DownloadManager;
        DownloadManager.DOWNLOAD_ASSETS = [];
        DownloadManager.downloadedAssets = 0;
        DownloadManager.downloadingFinished = false;
        DownloadManager.MAX_CONCURRENT = 3;
        DownloadManager.activeDownloads = 0;
        DownloadManager.downloadQueue = [];
        return;
};

// --------------------- MODULE 1357 — GameDownloadManager ---------------------


// ============================================================ //
// webpack module 1357  —  GameDownloadManager
// exports: GameDownloadManager
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[1357] = function GameDownloadManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GameDownloadManager_downloadDeferredFiles, GameDownloadManager_smInstanceAddr, GameDownloadManager, <class_fields_init>, GameDownloadManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GameDownloadManager = undefined;
        Libg = __webpack_require__(9878);
        GameDownloadManager_downloadDeferredFiles = new NativeFunction(((Libg).Libg).offset(11257832, 0), "void", ["pointer"]);
        GameDownloadManager_smInstanceAddr = ((Libg).Libg).offset(19940280, 0);
        <class_fields_init> = undefined;
        GameDownloadManager;
        class GameDownloadManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x46ab2 (open) */
}
            getInstance () {
        return (GameDownloadManager_smInstanceAddr).readPointer();
}
            downloadDeferredFiles () {
    var instance;
        instance = (GameDownloadManager).getInstance();
        if ((instance).isNull()) {
            return;
        } /* if 0x46a7e */
        return;
}
        }
        GameDownloadManager = GameDownloadManager = GameDownloadManager;
        exports.GameDownloadManager = GameDownloadManager;
        return;
};

// --------------------- MODULE 6224 — DownloadedImage ---------------------


// ============================================================ //
// webpack module 6224  —  DownloadedImage
// exports: DownloadedImage
// deps: 1588 (LogicMemory), 1978 (Libc), 3217 (Sprite), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6224] = function DownloadedImage_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Sprite, Libc, Libg, StringObject, LogicMemory, DownloadedImage_ctor, ALLOCATION_SIZE, textureDataOffset, textureWidthOffset, textureHeightOffset, DownloadedImage, <class_fields_init>, DownloadedImage;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DownloadedImage = undefined;
        Sprite = __webpack_require__(3217);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        LogicMemory = __webpack_require__(1588);
        DownloadedImage_ctor = new NativeFunction(((Libg).Libg).offset(12038932, 0), "void", ["pointer", "pointer", "pointer", "pointer", "int"]);
        ALLOCATION_SIZE = 192;
        textureDataOffset = ((LogicMemory).LogicMemory).offset(80);
        textureWidthOffset = ((LogicMemory).LogicMemory).offset(28);
        textureHeightOffset = ((LogicMemory).LogicMemory).offset(30);
        <class_fields_init> = undefined;
        DownloadedImage;
        class DownloadedImage extends <class_fields_init> = (Sprite).Sprite {
            constructor (iconPath, parentClip) {
    var instance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        instance = (DownloadedImage).build(iconPath, (parentClip).instance, (parentClip).instance, false);
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x764d4 */
        return this;
}
            fromLocalFile (path, boundsRef, stretchToFill) {
        return new (Sprite).Sprite((DownloadedImage).build(path, NULL, boundsRef, stretchToFill));
}
            getNaturalSize (instance) {
    var textureData, width, height;
        textureData = ((instance).add(textureDataOffset)).readPointer();
        if ((textureData).isNull()) {
            return null;
        } /* if 0x76584 */
        width = ((textureData).add(textureWidthOffset)).readU16();
        height = ((textureData).add(textureHeightOffset)).readU16();
        if (!(width <= 0)) {
            (width <= 0);
            if ((height <= 0)) {
                return null;
            } /* if 0x765c4 */
        } /* if 0x765c0 */
        return { width: width, height: height };
}
            build (path, parent, boundsRef, stretchToFill) {
    var instance, parentSlot;
        instance = ((Libc).Libc).malloc(ALLOCATION_SIZE);
        parentSlot = ((Libc).Libc).malloc((Process).pointerSize);
        (parentSlot).writePointer(parent);
        ((StringObject).StringObject).with(path, function (pathStrObj) {
        if (stretchToFill) {
        } /* if 0x766b9 */
        /* jump -> 0x766ba */
        return instance(pathStrObj, parentSlot, boundsRef, 1, 0);
});
        return instance;
}
        }
        DownloadedImage = textureWidthOffset = DownloadedImage;
        exports.DownloadedImage = DownloadedImage;
        return;
};

// --------------------- MODULE 5212 — ResourceManager ---------------------


// ============================================================ //
// webpack module 5212  —  ResourceManager
// exports: ResourceManager
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[5212] = function ResourceManager_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, ResourceManager_doesFileExist, ResourceManager, <class_fields_init>, ResourceManager;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ResourceManager = undefined;
        Libg = __webpack_require__(9878);
        ResourceManager_doesFileExist = new NativeFunction(((Libg).Libg).offset(5384480, 0), "bool", ["pointer"]);
        <class_fields_init> = undefined;
        ResourceManager;
        class ResourceManager {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x73773 (open) */
}
            doesFileExist (path) {
        if ((path.length > 0)) {
            return Boolean(ResourceManager_doesFileExist((Memory).allocUtf8String(path)));
        } /* if 0x7374a (open) */
}
        }
        ResourceManager = ResourceManager = ResourceManager;
        exports.ResourceManager = ResourceManager;
        return;
};

// --------------------- MODULE 2588 — AAsset ---------------------


// ============================================================ //
// webpack module 2588  —  AAsset
// exports: AAsset
// deps: 9878 (Libg)
// ============================================================ //

__webpack_modules__[2588] = function AAsset_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, AAsset, <class_fields_init>, AAsset;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AAsset = undefined;
        Libg = __webpack_require__(9878);
        <class_fields_init> = undefined;
        AAsset;
        class AAsset {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7ff32 (open) */
}
        }
        AAsset = AAsset = AAsset;
        exports.AAsset = AAsset;
        AAsset.close = new NativeFunction(((Libg).Libg).offset(18489024, 0), "void", ["pointer"]);
        AAsset.getLength64 = new NativeFunction(((Libg).Libg).offset(18490480, 0), "size_t", ["pointer"]);
        AAsset.read = new NativeFunction(((Libg).Libg).offset(18490512, 0), "int", ["pointer", "pointer", "size_t"]);
        AAsset.open = new NativeFunction(((Libg).Libg).offset(18489040, 0), "pointer", ["pointer", "pointer", "int"]);
        return;
};

// --------------------- MODULE 5238 — IOSDownloader ---------------------


// ============================================================ //
// webpack module 5238  —  IOSDownloader
// exports: IOSDownloader
// deps: 1753 (IOSHTTPOffsets), 1978 (Libc), 3380 (Logcat), 7535 (StringObject)
// ============================================================ //

__webpack_modules__[5238] = function IOSDownloader_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Logcat, StringObject, IOSHTTPOffsets, IOSDownloader, <class_fields_init>, IOSDownloader;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.IOSDownloader = undefined;
        Libc = __webpack_require__(1978);
        Logcat = __webpack_require__(3380);
        StringObject = __webpack_require__(7535);
        IOSHTTPOffsets = __webpack_require__(1753);
        <class_fields_init> = undefined;
        IOSDownloader;
        class IOSDownloader {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x7dffd (open) */
}
            download (url, savePath, expectedHash, callback) {
    var holder, wrapper, e;
        if (((Process).platform !== "darwin")) {
            return;
        } /* if 0x7daf3 */
        (this).installHooksIfNeeded();
        holder = (this).allocateHolder();
        if ((!holder)) {
            return;
        } /* if 0x7db1e */
        wrapper = ((holder).add(8)).readPointer();
        if ((wrapper).isNull()) {
            /* CATCH -> 0x7db60 (try region) */
            ((Libc).Libc).free(holder);
            (this).failCallback(callback, "IOSDownloader: holder allocation failed", 0);
            /* jump -> 0x7db67 */
            (this).failCallback(callback, "IOSDownloader.download called on non-darwin", 0);
            /* CATCH -> 0x7db69 (try region) */
            holder = wrapper = <underflow>;
            /* jump -> 0x7db67 */
            throw <underflow>;
            return;
        } /* if 0x7db78 */
        ((this).pendingByWrapper)["set"]((wrapper).toString(), { holder: holder, savePath: savePath, url: url, callback: callback });
        /* CATCH -> 0x7dbd5 (try region) */
        if (!expectedHash) {
        } /* if 0x7dbc7 */
        ((StringObject).StringObject).withMany([url, savePath, ""], function (arg0) {
    var urlSO, savePathSO, hashSO;
        urlSO = <null>;
        savePathSO = <underflow>;
        hashSO = <underflow>;
        return (IOSHTTPOffsets).HTTPClient_download(holder, urlSO, savePathSO, hashSO);
});
        (this).failCallback(callback, "IOSDownloader: HTTPClientImpl alloc returned nil", 0);
        return;
        e = <underflow>;
        /* CATCH -> 0x7dc38 (try region) */
        ((this).pendingByWrapper)["delete"]((wrapper).toString());
        /* CATCH -> 0x7dc11 (try region) */
        ((Libc).Libc).free(holder);
        /* jump -> 0x7dc18 */
        /* CATCH -> 0x7dc1a (try region) */
        /* jump -> 0x7dc18 */
        throw <underflow>;
        (this).failCallback(callback, ("IOSDownloader: dispatch error: ").concat(e), 0);
        return undefined;
        throw <underflow>;
}
            allocateHolder () {
    var holder, e;
        /* CATCH -> 0x7dd09 (try region) */
        holder = ((Libc).Libc).malloc(16);
        if ((holder).isNull()) {
            return null;
        } /* if 0x7dcf4 */
        (IOSHTTPOffsets).HTTPClient_initWrapper(holder);
        return holder;
        e = holder = <underflow>;
        /* CATCH -> 0x7dd31 (try region) */
        ((Logcat).Logcat).logError(("IOSDownloader: holder alloc threw: ").concat(e));
        return null;
        throw <underflow>;
}
            failCallback (callback, errorMsg, statusCode) {
        ((Logcat).Logcat).logError(errorMsg);
        /* CATCH -> 0x7dd7e (try region) */
        callback(errorMsg, statusCode);
        return;
        /* CATCH -> 0x7dd86 (try region) */
        return;
        throw <underflow>;
}
            installHooksIfNeeded () {
        if ((this).hooksInstalled) {
            return;
        } /* if 0x7ddb2 */
        this.hooksInstalled = true;
        return;
}
            onDownloadFinalize (ctx) {
    var wrapperKey, entry, wrapper, status, code, success, e;
        wrapperKey = null;
        entry = undefined;
        /* CATCH -> 0x7deaf (try region) */
        wrapper = ((ctx).add(32)).readPointer();
        wrapperKey = (wrapper).toString();
        entry = ((this).pendingByWrapper)["get"](wrapperKey);
        wrapper = wrapperKey = entry = status = code = success = <underflow>;
        /* jump -> 0x7deb6 */
        /* CATCH -> 0x7deb8 (try region) */
        return undefined;
        throw <underflow>;
        if (!(!entry)) {
            if ((!wrapperKey)) {
                return;
            } /* if 0x7dec5 */
        } /* if 0x7dec2 */
        ((this).pendingByWrapper)["delete"](wrapperKey);
        status = 0;
        code = 0;
        /* CATCH -> 0x7df18 (try region) */
        status = ((ctx).add(40)).readU32();
        code = ((ctx).add(44)).readU32();
        /* jump -> 0x7df1f */
        /* CATCH -> 0x7df21 (try region) */
        /* jump -> 0x7df1f */
        throw <underflow>;
        success = (status === 2);
        /* CATCH -> 0x7df58 (try region) */
        if (success) {
        } /* if 0x7df42 */
        /* jump -> 0x7df43 */
        if (success) {
        } /* if 0x7df4d */
        /* jump -> 0x7df4e */
        null(code, 0);
        /* jump -> 0x7df8d */
        e = entry;
        /* CATCH -> 0x7df8f (try region) */
        ((Logcat).Logcat).logError(("IOSDownloader callback failed for ").concat((entry).url, ": ", e));
        /* jump -> 0x7df8d */
        throw <underflow>;
        /* CATCH -> 0x7dfb0 (try region) */
        ((Libc).Libc).free((entry).holder);
        return;
        /* CATCH -> 0x7dfb8 (try region) */
        return;
        throw <underflow>;
}
        }
        IOSDownloader = v8 = IOSDownloader;
        exports.IOSDownloader = IOSDownloader;
        IOSDownloader.pendingByWrapper = new Map();
        IOSDownloader.hooksInstalled = false;
        return;
};

