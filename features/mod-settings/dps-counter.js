var DPS_COLOR_DEFAULT = 4294967295.0;
var DPS_COLOR_5K = 4294967040.0;
var DPS_COLOR_10K = 4294944000.0;
var DPS_COLOR_15K = 4294919424.0;
var DPS_COLOR_20K = 4294902015.0;

class DamageTracker {
    static reset() {
        DamageTracker.entries = [];
    }

    static createTextField() {
        var tf = TextFieldHelper.TextFieldHelper.createTextTextField();
        tf.x = 115;
        tf.y = 70;
        tf.color = DPS_COLOR_DEFAULT;
        tf.fontOutline = true;
        tf.fontSize = 13;
        tf.text = "DPS: 0";
        DamageTracker.textField = tf;
        return tf;
    }

    static colorForDps(dps) {
        if (dps >= 20000) {
            return DPS_COLOR_20K;
        }
        if (dps >= 15000) {
            return DPS_COLOR_15K;
        }
        if (dps >= 10000) {
            return DPS_COLOR_10K;
        }
        if (dps >= 5000) {
            return DPS_COLOR_5K;
        }
        return DPS_COLOR_DEFAULT;
    }

    static patch() {
        Character.Character.addFloatingNumberListener(function (character, damage) {
            try {
                var ownCharacter = LogicBattleModeClient.LogicBattleModeClient.getOwnCharacter();
                if (ownCharacter.instance.isNull()) {
                    return undefined;
                }
                if (character.logic.index !== ownCharacter.index) {
                    DamageTracker.entries.push({ ts: Date.now(), dmg: -damage });
                }
            } catch (e) {
                return;
            }
        });
    }
}

DamageTracker.entries = [];
DamageTracker.textField = null;
