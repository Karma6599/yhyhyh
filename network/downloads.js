class DownloadManager {
    static init() {
        var entry;
        Logcat.logDebug("Initializing download entry...");
        DownloadManager.removeStaleAssets();
        for (const entry of DownloadManager.DOWNLOAD_ASSETS) {
            DownloadManager.checkAndQueue(entry);
        }
        return;
    }
    static removeStaleAssets() {
        var bsdDir, expectedFiles, cmd, path;
        if (Process.platform === "darwin") {
        }
        bsdDir = "".concat(FileManager.rootDirPath, "/update/bsd");
        if (!FileManager.isFilepath(bsdDir)) {
            return;
        }
        expectedFiles = DownloadManager.DOWNLOAD_ASSETS.map(function (entry) {
            if (Process.platform === "darwin") {
                return "".concat(FileManager.rootDirPath, "/", entry.path);
            }
            return "".concat(FileManager.rootDirPath, "/update/", entry.path);
        });
        cmd = "find \"".concat(bsdDir, "\" -type f");
        for (const path of expectedFiles) {
            cmd = cmd + " -not -path \"".concat(path, "\"");
        }
        path = "".concat(FileManager.rootDirPath, "/bsd");
        cmd = cmd + " -delete && find \"".concat(bsdDir, "\" -type d -empty -delete");
        Logcat.logDebug("Cleaning stale assets in ".concat(bsdDir, " (keeping ", expectedFiles.length, ")"));
        return;
    }
    static startDownloads() {
        if (DownloadManager.downloadQueue.length === 0) {
            return;
        }
        Logcat.logDebug("Starting ".concat(DownloadManager.downloadQueue.length, " downloads"));
        return;
    }
    static checkAndQueue(entry) {
        var targetPath, parts, currentDir, i, checksum;
        targetPath = entry.path;
        if (Process.platform !== "darwin") {
            targetPath = "".concat(FileManager.rootDirPath, "/update/", targetPath);
        } else {
            targetPath = "".concat(FileManager.rootDirPath, "/", targetPath);
        }
        parts = targetPath.split("/");
        currentDir = "";
        i = 0;
        while (i < parts.length - 1) {
            if (i === 0) {
                currentDir = parts[i];
            } else {
                currentDir = currentDir + "/" + parts[i];
            }
            if (!FileManager.isFilepath(currentDir)) {
                FileManager.createDirectory(currentDir);
            }
            i++;
        }
        if (FileManager.isFilepath(targetPath)) {
            checksum = new Checksum("sha1");
            checksum.update(FileManager.readFile(targetPath));
            if (checksum.getString() === entry.hash) {
                entry.loadingDone = true;
                DownloadManager.downloadedAssets = ++DownloadManager.downloadedAssets;
                return;
            }
        }
        return;
    }
    static processQueue() {
        var entry;
        while (DownloadManager.activeDownloads < DownloadManager.MAX_CONCURRENT && DownloadManager.downloadQueue.length > 0) {
            entry = DownloadManager.downloadQueue.shift();
            DownloadManager.startDownload(entry);
            return;
        }
    }
    static startDownload(entry) {
        var host, targetPath;
        DownloadManager.activeDownloads = ++DownloadManager.activeDownloads;
        if (entry.retries === undefined) {
            entry.retries = 0;
        }
        if (entry.retries < 1) {
        }
        host = "https://cf.bsdbrawl.com";
        targetPath = entry.path;
        if (Process.platform !== "darwin") {
            targetPath = "".concat(FileManager.rootDirPath, "/update/", targetPath);
        } else {
            targetPath = "".concat(FileManager.rootDirPath, "/", targetPath);
        }
        _.LogInfo("started downloading", entry.urlPath, "(attempt ".concat(entry.retries + 1, ", host: ", host, ")"));
        Breadcrumbs.push("Started downloading ".concat(entry.urlPath, " attempt ", entry.retries + 1));
        return;
    }
    static updateDownloadingStatus() {
        DownloadManager.downloadingFinished = DownloadManager.downloadedAssets === DownloadManager.DOWNLOAD_ASSETS.length;
        return;
    }
    static isFileDownloaded(fileName) {
        var asset;
        asset = DownloadManager.DOWNLOAD_ASSETS.find(function (e) {
            return e.path.toLowerCase().includes(fileName.toLowerCase());
        });
        if (!asset) {
            return false;
        }
        if (asset.loadingDone == null) {
            return false;
        }
    }
    static downloadIfNotExists(path, urlPath, hash, on200) {
        var entry;
        entry = DownloadManager.DOWNLOAD_ASSETS.find(function (e) {
            return e.urlPath === urlPath;
        });
        if (entry) {
            if (!entry.loadingDone) {
                DownloadManager.downloadQueue.push(entry);
                DownloadManager.processQueue();
                return;
            }
        }
    }
    static clear() {
        var dir, asset, path;
        dir = "".concat(FileManager.rootDirPath, "/update/");
        for (const asset of DownloadManager.DOWNLOAD_ASSETS) {
            path = dir + asset.path;
            if (FileManager.isFilepath(path)) {
                Libc.unlink(Memory.allocUtf8String(path));
            }
        }
        return;
    }
}
DownloadManager.DOWNLOAD_ASSETS = [];
DownloadManager.downloadedAssets = 0;
DownloadManager.downloadingFinished = false;
DownloadManager.MAX_CONCURRENT = 3;
DownloadManager.activeDownloads = 0;
DownloadManager.downloadQueue = [];

var GameDownloadManager_downloadDeferredFiles = new NativeFunction(Libg.offset(11257832, 0), "void", ["pointer"]);
var GameDownloadManager_smInstanceAddr = Libg.offset(19940280, 0);

class GameDownloadManager {
    static getInstance() {
        return GameDownloadManager_smInstanceAddr.readPointer();
    }
    static downloadDeferredFiles() {
        var instance;
        instance = GameDownloadManager.getInstance();
        if (instance.isNull()) {
            return;
        }
        GameDownloadManager_downloadDeferredFiles(instance);
        return;
    }
}

var DownloadedImage_ctor = new NativeFunction(Libg.offset(12038932, 0), "void", ["pointer", "pointer", "pointer", "pointer", "int"]);
var ALLOCATION_SIZE = 192;
var textureDataOffset = LogicMemory.offset(80);
var textureWidthOffset = LogicMemory.offset(28);
var textureHeightOffset = LogicMemory.offset(30);

class DownloadedImage extends Sprite {
    constructor(iconPath, parentClip) {
        super(DownloadedImage.build(iconPath, parentClip.instance, parentClip.instance, false));
    }
    static fromLocalFile(path, boundsRef, stretchToFill) {
        return new Sprite(DownloadedImage.build(path, NULL, boundsRef, stretchToFill));
    }
    static getNaturalSize(instance) {
        var textureData, width, height;
        textureData = instance.add(textureDataOffset).readPointer();
        if (textureData.isNull()) {
            return null;
        }
        width = textureData.add(textureWidthOffset).readU16();
        height = textureData.add(textureHeightOffset).readU16();
        if (width <= 0 || height <= 0) {
            return null;
        }
        return { width: width, height: height };
    }
    static build(path, parent, boundsRef, stretchToFill) {
        var instance, parentSlot;
        instance = Libc.malloc(ALLOCATION_SIZE);
        parentSlot = Libc.malloc(Process.pointerSize);
        parentSlot.writePointer(parent);
        StringObject.with(path, function (pathStrObj) {
            return DownloadedImage_ctor(instance, pathStrObj, parentSlot, boundsRef, stretchToFill ? 1 : 0);
        });
        return instance;
    }
}

var ResourceManager_doesFileExist = new NativeFunction(Libg.offset(5384480, 0), "bool", ["pointer"]);

class ResourceManager {
    static doesFileExist(path) {
        if (path.length > 0) {
            return Boolean(ResourceManager_doesFileExist(Memory.allocUtf8String(path)));
        }
    }
}

class AAsset {
}

AAsset.close = new NativeFunction(Libg.offset(18489024, 0), "void", ["pointer"]);
AAsset.getLength64 = new NativeFunction(Libg.offset(18490480, 0), "size_t", ["pointer"]);
AAsset.read = new NativeFunction(Libg.offset(18490512, 0), "int", ["pointer", "pointer", "size_t"]);
AAsset.open = new NativeFunction(Libg.offset(18489040, 0), "pointer", ["pointer", "pointer", "int"]);

class IOSDownloader {
    static download(url, savePath, expectedHash, callback) {
        var holder, wrapper, e;
        if (Process.platform !== "darwin") {
            IOSDownloader.failCallback(callback, "IOSDownloader.download called on non-darwin", 0);
            return;
        }
        IOSDownloader.installHooksIfNeeded();
        holder = IOSDownloader.allocateHolder();
        if (!holder) {
            IOSDownloader.failCallback(callback, "IOSDownloader: holder allocation failed", 0);
            return;
        }
        wrapper = holder.add(8).readPointer();
        if (wrapper.isNull()) {
            Libc.free(holder);
            IOSDownloader.failCallback(callback, "IOSDownloader: HTTPClientImpl alloc returned nil", 0);
            return;
        }
        IOSDownloader.pendingByWrapper.set(wrapper.toString(), { holder: holder, savePath: savePath, url: url, callback: callback });
        try {
            StringObject.withMany([url, savePath, expectedHash || ""], function (urlSO, savePathSO, hashSO) {
                return IOSHTTPOffsets.HTTPClient_download(holder, urlSO, savePathSO, hashSO);
            });
        } catch (e) {
            IOSDownloader.pendingByWrapper.delete(wrapper.toString());
            Libc.free(holder);
            IOSDownloader.failCallback(callback, "IOSDownloader: dispatch error: ".concat(e), 0);
            return undefined;
        }
    }
    static allocateHolder() {
        var holder, e;
        try {
            holder = Libc.malloc(16);
            if (holder.isNull()) {
                return null;
            }
            IOSHTTPOffsets.HTTPClient_initWrapper(holder);
            return holder;
        } catch (e) {
            Logcat.logError("IOSDownloader: holder alloc threw: ".concat(e));
            return null;
        }
    }
    static failCallback(callback, errorMsg, statusCode) {
        Logcat.logError(errorMsg);
        try {
            callback(errorMsg, statusCode);
        } catch (e) {
        }
        return;
    }
    static installHooksIfNeeded() {
        if (IOSDownloader.hooksInstalled) {
            return;
        }
        IOSDownloader.hooksInstalled = true;
        return;
    }
    static onDownloadFinalize(ctx) {
        var wrapperKey, entry, wrapper, status, code, success, e;
        wrapperKey = null;
        entry = undefined;
        try {
            wrapper = ctx.add(32).readPointer();
            wrapperKey = wrapper.toString();
            entry = IOSDownloader.pendingByWrapper.get(wrapperKey);
        } catch (e) {
            return undefined;
        }
        if (!entry || !wrapperKey) {
            return;
        }
        IOSDownloader.pendingByWrapper.delete(wrapperKey);
        status = 0;
        code = 0;
        try {
            status = ctx.add(40).readU32();
            code = ctx.add(44).readU32();
        } catch (e) {
        }
        success = status === 2;
        try {
            if (success) {
                entry.callback(null, 0);
            }
        } catch (e) {
            Logcat.logError("IOSDownloader callback failed for ".concat(entry.url, ": ", e));
        }
        Libc.free(entry.holder);
        return;
    }
}
IOSDownloader.pendingByWrapper = new Map();
IOSDownloader.hooksInstalled = false;
