//============================================================================//
// MOD FEATURE: Disable bots
// Disable-bots button for friendly rooms.
//============================================================================//

// --------------------- MODULE 5392 — DisableBotsButton ---------------------


// ============================================================ //
// webpack module 5392  —  DisableBotsButton
// exports: DisableBotsButton
// deps: 1191 (DisplayObject), 3498 (TeamBotSlotDisableMessage), 4401 (TeamPopup), 5039 (GameButton), 9168 (MessageManager), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[5392] = function DisableBotsButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, StringTable, DisplayObject, MessageManager, TeamBotSlotDisableMessage, TeamPopup, MAX_FRIENDLY_ROOM_SLOTS, DisableBotsButton, <class_fields_init>, DisableBotsButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DisableBotsButton = undefined;
        GameButton = __webpack_require__(5039);
        StringTable = __webpack_require__(9250);
        DisplayObject = __webpack_require__(1191);
        MessageManager = __webpack_require__(9168);
        TeamBotSlotDisableMessage = __webpack_require__(3498);
        TeamPopup = __webpack_require__(4401);
        MAX_FRIENDLY_ROOM_SLOTS = 12;
        static setupVisual () {
    var gameroomPartyMode, chatButtonClip, e;
        /* CATCH -> 0xaff9e (try region) */
        gameroomPartyMode = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "gameroom_party_mode");
        if (((gameroomPartyMode) == null)) {
        } /* if 0xaff4d */
        /* jump -> 0xaff5a */
        chatButtonClip = (undefined).getMovieClipByName("button_chat");
        if ((!chatButtonClip)) {
            return undefined;
        } /* if 0xaff64 */
        (this).hideChildrenExceptBackground(chatButtonClip);
        (this).setMovieClip(chatButtonClip, 1);
        (this).addBotIcon(chatButtonClip);
        (this).addCrossOverlay(chatButtonClip);
        gameroomPartyMode = chatButtonClip = <underflow>;
        return;
        e = <underflow>;
        /* CATCH -> 0xaffa6 (try region) */
        return;
        throw <underflow>;
};
        static hideChildrenExceptBackground (clip) {
    var childCount, childArray, i, child;
        childCount = (clip).getChildCount();
        childArray = (clip).getChildArray();
        i = 1;
        while ((i < childCount)) {
            child = ((childArray).add((i * (Process).pointerSize))).readPointer();
            if ((!(child).isNull())) {
                new (DisplayObject).DisplayObject(child).visibility = false;
            } /* if 0xb004f */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xb0059 (open) */
};
        static addBotIcon (parentClip) {
    var memberItemClip, outerPlaceholder, innerPlaceholder, backgroundChild;
        memberItemClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "member_item_extrasmall");
        if ((!memberItemClip)) {
            return;
        } /* if 0xb00c8 */
        outerPlaceholder = (memberItemClip).getMovieClipByName("image_ph");
        if ((!outerPlaceholder)) {
            return;
        } /* if 0xb00e0 */
        innerPlaceholder = (outerPlaceholder).getMovieClipByName("image_ph");
        if ((!innerPlaceholder)) {
            return;
        } /* if 0xb00f8 */
        backgroundChild = ((innerPlaceholder).getChildArray()).readPointer();
        if ((!(backgroundChild).isNull())) {
            new (DisplayObject).DisplayObject(backgroundChild).visibility = false;
        } /* if 0xb012f */
        outerPlaceholder.scale = 0.2;
        outerPlaceholder.y = -10;
        return;
};
        static addCrossOverlay (parentClip) {
    var memberItemClip, slotSwitchClip;
        memberItemClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "member_item_extrasmall");
        if ((!memberItemClip)) {
            return;
        } /* if 0xb01b8 */
        slotSwitchClip = (memberItemClip).getMovieClipByName("button_slot_switch");
        if ((!slotSwitchClip)) {
            return;
        } /* if 0xb01d0 */
        (slotSwitchClip).gotoAndStopFrameIndex(1);
        slotSwitchClip.scale = 0.5;
        slotSwitchClip.x = 27;
        slotSwitchClip.y = -25;
        return;
};
        static onButtonPressed (self, button) {
        if ((!(DisableBotsButton).botsDisabled)) {
            (this).disableAllBotSlots();
            return;
        } /* if 0xb0259 */
        (this).enableAllDisabledSlots();
        return;
};
        static disableAllBotSlots () {
    var slotIndex;
        slotIndex = 0;
        while ((slotIndex < MAX_FRIENDLY_ROOM_SLOTS)) {
            ((MessageManager).MessageManager).sendMessage(new (TeamBotSlotDisableMessage).TeamBotSlotDisableMessage(slotIndex, true));
            slotIndex = ((slotIndex) + 1);
            (slotIndex++);
        } /* while 0xb02cb */
        DisableBotsButton.botsDisabled = true;
        return;
};
        static enableAllDisabledSlots () {
    var disabledSlotIndices, slotIndex;
        disabledSlotIndices = ((TeamPopup).TeamPopup).getDisabledSlotIndices();
        /* jump -> 0xb0347 */
        slotIndex = /*iter*/ disabledSlotIndices;
        ((MessageManager).MessageManager).sendMessage(new (TeamBotSlotDisableMessage).TeamBotSlotDisableMessage(slotIndex, false));
        } while (!disabledSlotIndices);
        slotIndex = disabledSlotIndices = <underflow>;
        DisableBotsButton.botsDisabled = false;
        return;
};
        <class_fields_init> = undefined;
        DisableBotsButton;
        class DisableBotsButton extends <class_fields_init> = (GameButton).GameButton {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        DisableBotsButton.botsDisabled = false;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xafe93 */
        (this).setupVisual();
        this.x = -685;
        this.y = 0;
        this.scale = 1;
        (this).setCustomButtonListener(((this).onButtonPressed).bind(this), "disable_bots_button");
        return this;
}
        }
        DisableBotsButton = <class_fields_init> = DisableBotsButton;
        exports.DisableBotsButton = DisableBotsButton;
        DisableBotsButton.botsDisabled = false;
        return;
};

