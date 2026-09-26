// =============================================================
// FEATURE: Damage / DPS Overlay
// config keys: ShowDPS
// Damage tracker with DPS readout (per-enemy damage accounting). Also rendered by the battle screen (ui/screens.js#7835).
// merged webpack modules: 8138 DamageTracker
// =============================================================

// --------------------- MODULE 8138 — DamageTracker ---------------------

// ============================================================ //
// webpack module 8138  —  DamageTracker
// exports: DamageTracker
// deps: 211 (TextFieldHelper), 2476 (CombatHUD), 3932 (Character), 5523 (LogicBattleModeClient)
// ============================================================ //

__webpack_modules__[8138] = function DamageTracker_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Character, CombatHUD, TextFieldHelper, LogicBattleModeClient, DPS_COLOR_DEFAULT, DPS_COLOR_5K, DPS_COLOR_10K, DPS_COLOR_15K, DPS_COLOR_20K, DamageTracker, <class_fields_init>, DamageTracker;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DamageTracker = undefined;
        Character = __webpack_require__(3932);
        CombatHUD = __webpack_require__(2476);
        TextFieldHelper = __webpack_require__(211);
        LogicBattleModeClient = __webpack_require__(5523);
        DPS_COLOR_DEFAULT = 4294967295.0;
        DPS_COLOR_5K = 4294967040.0;
        DPS_COLOR_10K = 4294944000.0;
        DPS_COLOR_15K = 4294919424.0;
        DPS_COLOR_20K = 4294902015.0;
        <class_fields_init> = undefined;
        DamageTracker;
        class DamageTracker {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9d781 (open) */
}
            reset () {
        DamageTracker.entries = [];
        return;
}
            createTextField () {
    var tf;
        tf = ((TextFieldHelper).TextFieldHelper).createTextTextField();
        tf.x = 115;
        tf.y = 70;
        tf.color = DPS_COLOR_DEFAULT;
        tf.fontOutline = true;
        tf.fontSize = 13;
        tf.text = "DPS: 0";
        DamageTracker.textField = tf;
        return tf;
}
            colorForDps (dps) {
        if ((dps >= 20000)) {
            return DPS_COLOR_20K;
        } /* if 0x9d529 */
        if ((dps >= 15000)) {
            return DPS_COLOR_15K;
        } /* if 0x9d534 */
        if ((dps >= 10000)) {
            return DPS_COLOR_10K;
        } /* if 0x9d53f */
        if ((dps >= 5000)) {
            return DPS_COLOR_5K;
        } /* if 0x9d54a */
        return DPS_COLOR_DEFAULT;
}
            patch () {
        ((Character).Character).addFloatingNumberListener(function (character, damage) {
    var ownCharacter;
        /* CATCH -> 0x9d645 (try region) */
        ownCharacter = ((LogicBattleModeClient).LogicBattleModeClient).getOwnCharacter();
        if (((ownCharacter).instance).isNull()) {
            return undefined;
        } /* if 0x9d5ff */
        if ((((character).logic).index !== (ownCharacter).index)) {
            ((DamageTracker).entries).push({ ts: (Date).now(), dmg: (-damage) });
            ownCharacter = <underflow>;
        } /* if 0x9d640 */
        return;
        /* CATCH -> 0x9d64d (try region) */
        return;
        throw <underflow>;
});
        return;
}
        }
        DamageTracker = DPS_COLOR_20K = DamageTracker;
        exports.DamageTracker = DamageTracker;
        DamageTracker.entries = [];
        DamageTracker.textField = null;
        return;
};

