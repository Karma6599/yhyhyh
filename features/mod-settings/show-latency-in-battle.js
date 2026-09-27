var currentLatencyOffset = LogicMemory.LogicMemory.offset(48);
var maxLatencyOffset = LogicMemory.LogicMemory.offset(52);
var badWifiTicksOffset = LogicMemory.LogicMemory.offset(68);
var droppedVuOffset = LogicMemory.LogicMemory.offset(340);

class BattleNetStatsOverlay {
    static toggle() {
        if (this.overlay) {
            this.overlay.destroy();
            this.overlay = null;
            return;
        }
        if (BattleMode.BattleMode.getInstance().isNull()) {
            return;
        }
        this.overlay = StageDebugText.StageDebugText.create({ x: 20, y: 100, fontSize: 12 });
    }

    static update() {
        try {
            if (!this.overlay) {
                return;
            }
            if (BattleMode.BattleMode.getInstance().isNull()) {
                this.overlay.setText("not in battle");
                return;
            }
            var inputManager = BattleMode.BattleMode.clientInputManager;
            if (inputManager.isNull()) {
                this.overlay.setText("no input manager");
                return;
            }
            var currentLat = inputManager.add(currentLatencyOffset).readU32();
            var maxLat = inputManager.add(maxLatencyOffset).readU32();
            var badWifi = inputManager.add(badWifiTicksOffset).readU32();
            var logicBattle = LogicBattleModeClient.LogicBattleModeClient.getInstance();
            var droppedVu = logicBattle.add(droppedVuOffset).readU32();
            this.overlay.setText("lat curr: ".concat(currentLat, " ms\n") + "lat max: ".concat(maxLat, " ms\n") + "dropped VU: ".concat(droppedVu, "\n") + "bad wifi ticks: ".concat(badWifi));
        } catch (e) {
            return;
        }
    }
}

BattleNetStatsOverlay.overlay = null;
