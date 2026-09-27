var TEST_CONTENT_UPDATE_BUTTON = {
    label: "TEST_CONTENT_UPDATE",
    category: DebugMenuCategory.EDebugCategory.TESTS,
    checkbox: {}
};

function enableTestContentUpdate() {
    ServerConnection.ServerConnection.setTestContentUpdate(!ServerConnection.ServerConnection.isTestContentUpdateEnabled());
    if (ServerConnection.ServerConnection.isTestContentUpdateEnabled()) {
    }
}

function TEST_CONTENT_UPDATE_callback() {
    enableTestContentUpdate();
}

function TEST_CONTENT_UPDATE_getState() {
    return ServerConnection.ServerConnection.isTestContentUpdateEnabled();
}
