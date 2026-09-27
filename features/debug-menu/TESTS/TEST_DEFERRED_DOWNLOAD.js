var TEST_DEFERRED_DOWNLOAD_BUTTON = {
    label: "TEST_DEFERRED_DOWNLOAD",
    category: DebugMenuCategory.EDebugCategory.TESTS
};

function TEST_DEFERRED_DOWNLOAD_callback() {
    GameDownloadManager.GameDownloadManager.downloadDeferredFiles();
}
