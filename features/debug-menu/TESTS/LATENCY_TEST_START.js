var LATENCY_TEST_START_BUTTON = {
    label: "LATENCY_TEST_START",
    category: DebugMenuCategory.EDebugCategory.TESTS
};

function LATENCY_TEST_START_callback() {
    new LatencyTestsPopup.LatencyTestsPopup().show();
}
