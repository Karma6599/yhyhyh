// =============================================================
// FEATURE: Watermark
// config keys: -
// BSD Brawl watermark overlay.
// merged webpack modules: 7703 Watermark
// =============================================================

// --------------------- MODULE 7703 — Watermark ---------------------

// ============================================================ //
// webpack module 7703  —  Watermark
// exports: Watermark, scale
// deps: 2447 (StageDebugText), 8632 (Stage), 9518 (PlayerInfo)
// ============================================================ //

__webpack_modules__[7703] = function Watermark_factory(__unused_webpack_module, exports, __webpack_require__) {
    var StageDebugText, Stage, PlayerInfo, WATERMARK_FONT_SIZE, MAX_ROTATION, PULSE_PERIOD, ZONES, Watermark, <class_fields_init>, Watermark;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Watermark = undefined;
        StageDebugText = __webpack_require__(2447);
        Stage = __webpack_require__(8632);
        PlayerInfo = __webpack_require__(9518);
        WATERMARK_FONT_SIZE = 24;
        MAX_ROTATION = 20;
        PULSE_PERIOD = 6.6;
        exports.scale = { count: 8 };
        StageDebugText = Stage = PlayerInfo = WATERMARK_FONT_SIZE = MAX_ROTATION = PULSE_PERIOD = ZONES = Watermark = <underflow>.color = exports;
        StageDebugText = Stage = PlayerInfo = WATERMARK_FONT_SIZE = MAX_ROTATION = PULSE_PERIOD = ZONES = Watermark = <underflow>.scale = { count: 10 };
        <underflow>.color = StageDebugText = Stage = PlayerInfo = WATERMARK_FONT_SIZE = MAX_ROTATION = PULSE_PERIOD = ZONES = Watermark = <underflow>;
        <underflow>.scale = { count: 37 };
        <underflow>.color = <underflow>;
        ZONES = [<underflow>, <underflow>, <underflow>];
        <class_fields_init> = undefined;
        Watermark;
        class Watermark {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xadf6c (open) */
}
            toggle () {
    var width, height, text, zone, i, label;
        if (((Watermark).labels.length > 0)) {
            return;
        } /* if 0xadaec */
        Watermark.startedAt = (Date).now();
        width = ((Stage).Stage).getMatrixX();
        height = ((Stage).Stage).getMatrixY();
        text = (Watermark).watermarkText();
        /* jump -> 0xadc14 */
        zone = /*iter*/ ZONES;
        i = 0;
        while ((i < (zone).count)) {
            label = ((StageDebugText).StageDebugText).create({ x: ((Math).random() * width), y: ((Math).random() * height), color: (zone).color(i), fontSize: WATERMARK_FONT_SIZE, fontOutline: false });
            (label).setText(text);
            (label).rotate((((Math).random() * (2 * MAX_ROTATION)) - MAX_ROTATION), (zone).scale(i));
            ((Watermark).labels).push(label);
            i = ((i) + 1);
            (i++);
            } while (!label = i = ZONES);
        } /* while 0xadc16 */
        zone = Watermark;
        return;
}
            isEnabled () {
        return ((Watermark).labels.length > 0);
}
            update () {
    var elapsedSeconds, i, phase, wave;
        if (((Watermark).labels.length === 0)) {
            return;
        } /* if 0xadca5 */
        elapsedSeconds = (((Date).now() - (Watermark).startedAt) / 1000);
        i = 0;
        while ((i < (Watermark).labels.length)) {
            phase = ((elapsedSeconds - i) % PULSE_PERIOD);
            if ((phase < 0)) {
                phase = 0;
            } /* if 0xadcf8 */
            /* jump -> 0xadd05 */
            if ((phase > 2)) {
                phase = 2;
            } /* if 0xadd05 */
            wave = (Math).min(((Math).abs((phase - 1)) * 2.5), 1);
            ((Watermark).labels[i]).setAlpha((Math).round((((wave * 0.49) + 0.01) * 255)));
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xadd66 (open) */
}
            watermarkText () {
        return ("").concat((Watermark).playerTag(), "\n", (Watermark).utcTimestamp());
}
            playerTag () {
    var tag;
        /* CATCH -> 0xade15 (try region) */
        tag = ((PlayerInfo).PlayerInfo).tag;
        if (tag) {
            return ("#").concat(tag);
            tag = <underflow>;
        } /* if 0xade0f */
        /* jump -> 0xade1c */
        /* CATCH -> 0xade1e (try region) */
        /* jump -> 0xade1c */
        throw <underflow>;
        return "BSD";
}
            utcTimestamp () {
    var now, pad;
        now = new Date();
        pad = now = pad = <underflow>;
        return ("").concat(pad(((now).getUTCFullYear() % 100)), pad(((now).getUTCMonth() + 1)), pad((now).getUTCDate()), pad((now).getUTCHours()), pad((now).getUTCMinutes()), pad((now).getUTCSeconds()));
}
            clear () {
    var label;
        /* jump -> 0xadf2e */
        label = /*iter*/ (Watermark).labels;
        (label).destroy();
        } while (!(Watermark).labels);
        label = <underflow>;
        Watermark.labels = [];
        return;
}
        }
        Watermark = <class_fields_init> = Watermark;
        exports.Watermark = Watermark;
        Watermark.labels = [];
        Watermark.startedAt = 0;
        return;
};

