var BattleIntro_ctor_rndInst = Libg.Libg.offset(9284644, 0);
var renderTitle = new NativeFunction(Libg.Libg.offset(9284016, 0), "void", ["pointer", "pointer", "pointer", "pointer"]);
var CombatHUD_toggleChatBubbles = new NativeFunction(Libg.Libg.offset(8756532, 0), "void", ["pointer", "char"]);
var CombatHUD_setHintText = new NativeFunction(Libg.Libg.offset(8852904, 0), "void", ["pointer", "pointer", "pointer"]);
var CombatHUD_update = Libg.Libg.offset(8771136, 0);
var LogicBattleModeClient_getTimeSinceLastProcessedTick = Libg.Libg.offset(16279388, 0);
var CombatHUD_latencyUpdateReturnAddress = Libg.Libg.offset(8767968, 0);
var CombatHUD_updateHintTexts_BEGIN = Libg.Libg.offset(8848292, 0);
var CombatHUD_updateHintTexts_END = Libg.Libg.offset(8848292 + 6876, 0);
var CombatHUD_KilledPlayerHUD_update = new NativeFunction(Libg.Libg.offset(8858972, 0), "void", ["pointer", "float"]);
var killedPlayerHudClipOffset = LogicMemory.LogicMemory.offset(16);
var primaryHintTextFieldOffset = LogicMemory.LogicMemory.offset(1008);
var primaryHintActiveFlagOffset = LogicMemory.LogicMemory.offset(1192);
var secondaryHintActiveFlagOffset = LogicMemory.LogicMemory.offset(512);
var battleIntroTitleClipOffset = LogicMemory.LogicMemory.offset(40);
var spectateButtonOffset = LogicMemory.LogicMemory.offset(1824);
var displayObjectVisibleOffset = LogicMemory.LogicMemory.offset(8);

class CombatHUD {
    static addUpdateListener(callback) {
        CombatHUD.updateListeners.push(callback);
    }

    static addHintTextsListener(callback) {
        CombatHUD.hintTextsListeners.push(callback);
    }

    static hookHintTexts() {
        if (CombatHUD.hintTextsHooked) {
            return;
        }
        CombatHUD.hintTextsHooked = true;
    }

    static isReturnAddressInUpdateHintTexts(returnAddress) {
        return returnAddress.compare(CombatHUD_updateHintTexts_BEGIN) >= 0 && returnAddress.compare(CombatHUD_updateHintTexts_END) < 0;
    }

    static setHintText(combatHud, stringObjectPointer, textFieldPointer) {
        CombatHUD_setHintText(combatHud, stringObjectPointer, textFieldPointer);
    }

    static getPrimaryHintTextField(combatHud) {
        return combatHud.add(primaryHintTextFieldOffset).readPointer();
    }

    static setPrimaryHintActive(combatHud, active) {
        combatHud.add(primaryHintActiveFlagOffset).writeU8(+active);
    }

    static setSecondaryHintActive(combatHud, active) {
        combatHud.add(secondaryHintActiveFlagOffset).writeU8(+active);
    }

    static getSpectateButton(combatHud) {
        return combatHud.add(spectateButtonOffset).readPointer();
    }

    static getSpectateButtonVisible(combatHud) {
        var spectateButton = CombatHUD.getSpectateButton(combatHud);
        if (spectateButton.isNull()) {
            return -1;
        }
        return spectateButton.add(displayObjectVisibleOffset).readU8();
    }

    static setSpectateButtonVisible(combatHud, visible) {
        var spectateButton = CombatHUD.getSpectateButton(combatHud);
        if (spectateButton.isNull()) {
            return;
        }
        spectateButton.add(displayObjectVisibleOffset).writeU8(+visible);
    }

    static toggleChatBubbles(hudInstance) {
        if (hudInstance.isNull()) {
            return CombatHUD.chatBubblesVisible;
        }
        CombatHUD.chatBubblesVisible = !CombatHUD.chatBubblesVisible;
        if (CombatHUD.chatBubblesVisible) {
            CombatHUD_toggleChatBubbles(hudInstance, 1);
        } else {
            CombatHUD_toggleChatBubbles(hudInstance, 0);
        }
        return CombatHUD.chatBubblesVisible;
    }

    static areChatBubblesVisible() {
        return CombatHUD.chatBubblesVisible;
    }

    static rerenderTitle(titleDataPtr, index) {
        Breadcrumbs.Breadcrumbs.push("rerenderTitle idx=".concat(index, " saved=", CombatHUD.savedTitleClips.length, " ptr=", titleDataPtr));
        if (index < CombatHUD.savedTitleClips.length) {
            var clips = CombatHUD.savedTitleClips[index];
            Breadcrumbs.Breadcrumbs.push("rerenderTitle calling render titleClip=".concat(clips.titleClip, " prestigeClip=", clips.prestigeClip));
            renderTitle(titleDataPtr, clips.titleClip, clips.prestigeClip, clips.txtStr);
        }
    }

    static patch() {
        Interceptor.attach(CombatHUD_update, {
            onEnter() {
                for (var listener of CombatHUD.updateListeners) {
                    try {
                        listener();
                    } catch (e) {
                    }
                }
            }
        });
        Interceptor.attach(LogicBattleModeClient_getTimeSinceLastProcessedTick, {
            onEnter() {
                if (!CombatHUD.latencyTextField || !this.returnAddress.equals(CombatHUD_latencyUpdateReturnAddress)) {
                    return;
                }
                var context = this.context;
                var latency = context.x23.toInt32();
                if (latency === 0 || BattleMode.BattleMode.isInOfflineGame) {
                    return;
                }
                CombatHUD.latencyTextField.text = latency.toString() + " ms";
                CombatHUD.latencyTextField.textField.color = 4278190080.0 + BattleLatency.BattleLatency.getColor(latency);
            }
        });
        Interceptor.replace(CombatHUD_KilledPlayerHUD_update, new NativeCallback(function (hud, delta) {
            CombatHUD_KilledPlayerHUD_update(hud, delta);
            var hudClip = new MovieClip.MovieClip(hud.add(killedPlayerHudClipOffset).readPointer());
            var killedField = hudClip.getTextFieldByName("killed");
            if (killedField) {
                killedField.colorTag = true;
            }
            var killerField = hudClip.getTextFieldByName("killer");
            if (killerField) {
                killerField.colorTag = true;
            }
        }, "void", ["pointer", "float"]));
        Interceptor.attach(BattleIntro_ctor_rndInst, {
            onEnter() {
                CombatHUD.savedTitleClips = [];
            }
        });
    }
}

CombatHUD.savedTitleClips = [];
CombatHUD.chatBubblesVisible = true;
CombatHUD.updateListeners = [];
CombatHUD.hintTextsListeners = [];
CombatHUD.hintTextsHooked = false;
