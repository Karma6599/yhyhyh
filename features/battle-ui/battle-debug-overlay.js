var TILE_SIZE = 300;

class BattleDebugOverlay {
    toggle() {
        if (this.overlay) {
            this.overlay.destroy();
            this.overlay = null;
            return;
        }
        if (BattleMode.BattleMode.getInstance().isNull()) {
            return;
        }
        this.overlay = StageDebugText.StageDebugText.create({ x: 20, y: 60, fontSize: 14 });
    }

    update() {
        if (!this.overlay) {
            return;
        }
        try {
            if (BattleMode.BattleMode.getInstance().isNull()) {
                this.overlay.setText("not in battle");
                return;
            }
            var own = LogicBattleModeClient.LogicBattleModeClient.getOwnCharacter();
            if (own.instance.isNull()) {
                this.overlay.setText("");
                return;
            }
            var tileX = (own.x / TILE_SIZE).toFixed(1);
            var tileY = (own.y / TILE_SIZE).toFixed(1);
            this.overlay.setText("pos: ".concat(tileX, ", ", tileY, "\nplayer: ", own.index));
        } catch (e) {
        }
    }
}

BattleDebugOverlay.overlay = null;
