var TOGGLE_WATERMARK_BUTTON = {
    label: "TOGGLE_WATERMARK",
    category: DebugMenuCategory.EDebugCategory.UTILS,
    checkbox: {}
};

var WATERMARK_FONT_SIZE = 24;
var MAX_ROTATION = 20;
var PULSE_PERIOD = 6.6;

var ZONES = [
    { count: 8, color: function (i) {
        return;
    }, scale: function (i) {
        return;
    } },
    { count: 10, color: function (i) {
        return;
    }, scale: function (i) {
        return;
    } },
    { count: 37, color: function (i) {
        return;
    }, scale: function (i) {
        return;
    } }
];

class Watermark {
    toggle() {
        if (Watermark.labels.length > 0) {
            return;
        }
        Watermark.startedAt = Date.now();
        var width = Stage.Stage.getMatrixX();
        var height = Stage.Stage.getMatrixY();
        var text = Watermark.watermarkText();
        for (var zone of ZONES) {
            var i = 0;
            while (i < zone.count) {
                var label = StageDebugText.StageDebugText.create({ x: Math.random() * width, y: Math.random() * height, color: zone.color(i), fontSize: WATERMARK_FONT_SIZE, fontOutline: false });
                label.setText(text);
                label.rotate(Math.random() * (2 * MAX_ROTATION) - MAX_ROTATION, zone.scale(i));
                Watermark.labels.push(label);
                i++;
            }
        }
        return;
    }

    isEnabled() {
        return Watermark.labels.length > 0;
    }

    update() {
        if (Watermark.labels.length === 0) {
            return;
        }
        var elapsedSeconds = (Date.now() - Watermark.startedAt) / 1000;
        var i = 0;
        while (i < Watermark.labels.length) {
            var phase = (elapsedSeconds - i) % PULSE_PERIOD;
            if (phase < 0) {
                phase = 0;
            }
            if (phase > 2) {
                phase = 2;
            }
            var wave = Math.min(Math.abs(phase - 1) * 2.5, 1);
            Watermark.labels[i].setAlpha(Math.round((wave * 0.49 + 0.01) * 255));
            i++;
        }
        return;
    }

    watermarkText() {
        return "".concat(Watermark.playerTag(), "\n", Watermark.utcTimestamp());
    }

    playerTag() {
        try {
            var tag = PlayerInfo.PlayerInfo.tag;
            if (tag) {
                return "#".concat(tag);
            }
        } catch (e) {
        }
        return "BSD";
    }

    utcTimestamp() {
        var now = new Date();
        var pad = function (value) {
            return value < 10 ? "0".concat(value) : "".concat(value);
        };
        return "".concat(pad(now.getUTCFullYear() % 100), pad(now.getUTCMonth() + 1), pad(now.getUTCDate()), pad(now.getUTCHours()), pad(now.getUTCMinutes()), pad(now.getUTCSeconds()));
    }

    clear() {
        for (var label of Watermark.labels) {
            label.destroy();
        }
        Watermark.labels = [];
        return;
    }
}
Watermark.labels = [];
Watermark.startedAt = 0;

function TOGGLE_WATERMARK_callback() {
    if (Watermark.isEnabled()) {
        Watermark.clear();
        return;
    }
    Watermark.toggle();
}

function TOGGLE_WATERMARK_getState() {
    return Watermark.isEnabled();
}
