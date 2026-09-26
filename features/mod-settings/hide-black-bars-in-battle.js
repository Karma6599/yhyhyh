//============================================================================//
// MOD FEATURE: Hide black bars in battle
// In-game name: "Hide black bars in battle"  (TID: HideLaserScreenMask_name)
// Description: "When enabled, black bars in battle will NOT be displayed."
// Menu: Mod Settings — BSD BRAWL SETTINGS popup (menu/mod-configuration.js)
// Config key: HideBattleBlackBars  (default true)
// Implementation below:
// Note: CombatHUD module.
//============================================================================//

// --------------------- MODULE 2476 — CombatHUD ---------------------


// ============================================================ //
// webpack module 2476  —  CombatHUD
// exports: CombatHUD
// deps: 612 (MovieClip), 1588 (LogicMemory), 3000 (StartLoadingMessage), 3187 (BattleLatency), 4974 (Breadcrumbs), 6013 (LogicPlayer), 6128 (BattleMode), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2476] = function CombatHUD_factory(__unused_webpack_module, exports, __webpack_require__) {
    var BattleLatency, BattleMode, Libg, MovieClip, LogicMemory, StartLoadingMessage, Breadcrumbs, LogicPlayer, BattleIntro_ctor_rndInst, renderTitle, CombatHUD_toggleChatBubbles, CombatHUD_setHintText, CombatHUD_update, LogicBattleModeClient_getTimeSinceLastProcessedTick, CombatHUD_latencyUpdateReturnAddress, CombatHUD_updateHintTexts_BEGIN, CombatHUD_updateHintTexts_END, CombatHUD_KilledPlayerHUD_update, killedPlayerHudClipOffset, primaryHintTextFieldOffset, primaryHintActiveFlagOffset, secondaryHintActiveFlagOffset, battleIntroTitleClipOffset, spectateButtonOffset, displayObjectVisibleOffset, CombatHUD, <class_fields_init>, CombatHUD;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CombatHUD = undefined;
        BattleLatency = __webpack_require__(3187);
        BattleMode = __webpack_require__(6128);
        Libg = __webpack_require__(9878);
        MovieClip = __webpack_require__(612);
        LogicMemory = __webpack_require__(1588);
        StartLoadingMessage = __webpack_require__(3000);
        Breadcrumbs = __webpack_require__(4974);
        LogicPlayer = __webpack_require__(6013);
        BattleIntro_ctor_rndInst = ((Libg).Libg).offset(9284644, 0);
        renderTitle = new NativeFunction(((Libg).Libg).offset(9284016, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);
        CombatHUD_toggleChatBubbles = new NativeFunction(((Libg).Libg).offset(8756532, 0), "void", ["pointer", "char"]);
        CombatHUD_setHintText = new NativeFunction(((Libg).Libg).offset(8852904, 0), "void", ["pointer", "pointer", "pointer"]);
        CombatHUD_update = ((Libg).Libg).offset(8771136, 0);
        LogicBattleModeClient_getTimeSinceLastProcessedTick = ((Libg).Libg).offset(16279388, 0);
        CombatHUD_latencyUpdateReturnAddress = ((Libg).Libg).offset(8767968, 0);
        CombatHUD_updateHintTexts_BEGIN = ((Libg).Libg).offset(8848292, 0);
        CombatHUD_updateHintTexts_END = ((Libg).Libg).offset((8848292 + 6876), 0);
        CombatHUD_KilledPlayerHUD_update = new NativeFunction(((Libg).Libg).offset(8858972, 0), "void", ["pointer", "float"]);
        killedPlayerHudClipOffset = ((LogicMemory).LogicMemory).offset(16);
        primaryHintTextFieldOffset = ((LogicMemory).LogicMemory).offset(1008);
        primaryHintActiveFlagOffset = ((LogicMemory).LogicMemory).offset(1192);
        secondaryHintActiveFlagOffset = ((LogicMemory).LogicMemory).offset(512);
        battleIntroTitleClipOffset = ((LogicMemory).LogicMemory).offset(40);
        spectateButtonOffset = ((LogicMemory).LogicMemory).offset(1824);
        displayObjectVisibleOffset = ((LogicMemory).LogicMemory).offset(8);
        <class_fields_init> = undefined;
        CombatHUD;
        class CombatHUD {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3e2c3 (open) */
}
            addUpdateListener (callback) {
        return;
}
            addHintTextsListener (callback) {
        ((CombatHUD).hintTextsListeners).push(callback);
        return;
}
            hookHintTexts () {
        if ((CombatHUD).hintTextsHooked) {
            return;
        } /* if 0x3dab0 */
        CombatHUD.hintTextsHooked = true;
        return;
}
            isReturnAddressInUpdateHintTexts (returnAddress) {
        if (((returnAddress).compare(CombatHUD_updateHintTexts_BEGIN) >= 0)) {
            ((returnAddress).compare(CombatHUD_updateHintTexts_BEGIN) >= 0);
            return ((returnAddress).compare(CombatHUD_updateHintTexts_END) < 0);
        } /* if 0x3db70 (open) */
}
            setHintText (combatHud, stringObjectPointer, textFieldPointer) {
        return;
}
            getPrimaryHintTextField (combatHud) {
        return ((combatHud).add(primaryHintTextFieldOffset)).readPointer();
}
            setPrimaryHintActive (combatHud, active) {
        if (active) {
        } /* if 0x3dc06 */
        /* jump -> 0x3dc07 */
        return;
}
            setSecondaryHintActive (combatHud, active) {
        if (active) {
        } /* if 0x3dc43 */
        /* jump -> 0x3dc44 */
        return;
}
            getSpectateButton (combatHud) {
        return ((combatHud).add(spectateButtonOffset)).readPointer();
}
            getSpectateButtonVisible (combatHud) {
    var spectateButton;
        spectateButton = (CombatHUD).getSpectateButton(combatHud);
        if ((spectateButton).isNull()) {
            return -1;
        } /* if 0x3dcbb */
        return ((spectateButton).add(displayObjectVisibleOffset)).readU8();
}
            setSpectateButtonVisible (combatHud, visible) {
    var spectateButton;
        spectateButton = (CombatHUD).getSpectateButton(combatHud);
        if ((spectateButton).isNull()) {
            return;
        } /* if 0x3dd1a */
        if (visible) {
        } /* if 0x3dd33 */
        /* jump -> 0x3dd34 */
        return;
}
            toggleChatBubbles (hudInstance) {
        if ((hudInstance).isNull()) {
            return (CombatHUD).chatBubblesVisible;
        } /* if 0x3dd6f */
        CombatHUD.chatBubblesVisible = (!(CombatHUD).chatBubblesVisible);
        if ((CombatHUD).chatBubblesVisible) {
        } /* if 0x3dd91 */
        /* jump -> 0x3dd92 */
        hudInstance(1, 0);
        return (CombatHUD).chatBubblesVisible;
}
            areChatBubblesVisible () {
        return (CombatHUD).chatBubblesVisible;
}
            rerenderTitle (titleDataPtr, index) {
    var clips;
        ((Breadcrumbs).Breadcrumbs).push(("rerenderTitle idx=").concat(index, " saved=", (CombatHUD).savedTitleClips.length, " ptr=", titleDataPtr));
        if ((index < (CombatHUD).savedTitleClips.length)) {
            clips = (CombatHUD).savedTitleClips[index];
            ((Breadcrumbs).Breadcrumbs).push(("rerenderTitle calling render titleClip=").concat((clips).titleClip, " prestigeClip=", (clips).prestigeClip));
            renderTitle(titleDataPtr, (clips).titleClip, (clips).prestigeClip, (clips).txtStr);
            return;
        } /* if 0x3de8f (open) */
}
            patch () {
        (Interceptor).attach(CombatHUD_update, { onEnter () {
    var listener;
        /* jump -> 0x3dfd7 */
        listener = /*iter*/ (CombatHUD).updateListeners;
        /* CATCH -> 0x3dfd0 (try region) */
        listener();
        /* jump -> 0x3dfd7 */
        listener = <underflow>;
        /* CATCH -> 0x3dfd9 (try region) */
        /* jump -> 0x3dfd7 */
        throw <underflow>;
        } while (!<underflow>);
        return;
} });
        (Interceptor).attach(LogicBattleModeClient_getTimeSinceLastProcessedTick, { onEnter () {
    var context, latency;
        if (!(!(CombatHUD).latencyTextField)) {
            if ((!((this).returnAddress).equals(CombatHUD_latencyUpdateReturnAddress))) {
                return;
            } /* if 0x3e03f */
        } /* if 0x3e03c */
        context = (this).context;
        latency = ((context).x23).toInt32();
        if (!(latency === 0)) {
            (latency === 0);
            if (((BattleMode).BattleMode).isInOfflineGame) {
                return;
            } /* if 0x3e070 */
        } /* if 0x3e06d */
        (CombatHUD).latencyTextField.text = ((latency).toString() + " ms");
        ((CombatHUD).latencyTextField).textField.color = (4278190080.0 + ((BattleLatency).BattleLatency).getColor(latency));
        return;
} });
        (Interceptor).replace(CombatHUD_KilledPlayerHUD_update, new NativeCallback(function (hud, delta) {
    var hudClip, killedField, killerField;
        CombatHUD_KilledPlayerHUD_update(hud, delta);
        hudClip = new (MovieClip).MovieClip(((hud).add(killedPlayerHudClipOffset)).readPointer());
        killedField = (hudClip).getTextFieldByName("killed");
        if (killedField) {
            killedField.colorTag = true;
        } /* if 0x3e150 */
        killerField = (hudClip).getTextFieldByName("killer");
        if (killerField) {
            killerField.colorTag = true;
            return;
        } /* if 0x3e16f (open) */
}, "void", ["pointer", "float"]));
        (Interceptor).attach(BattleIntro_ctor_rndInst, { onEnter () {
        CombatHUD.savedTitleClips = [];
        return;
} });
        return;
}
        }
        CombatHUD = BattleIntro_ctor_rndInst = CombatHUD;
        exports.CombatHUD = CombatHUD;
        CombatHUD.savedTitleClips = [];
        CombatHUD.chatBubblesVisible = true;
        CombatHUD.updateListeners = [];
        CombatHUD.hintTextsListeners = [];
        CombatHUD.hintTextsHooked = false;
        return;
};

