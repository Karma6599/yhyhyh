var MAX_FRIENDLY_ROOM_SLOTS = 12;

class DisableBotsButton extends GameButton.GameButton {
    constructor() {
        super();
        this.setupVisual();
        this.x = -685;
        this.y = 0;
        this.scale = 1;
        this.setCustomButtonListener(this.onButtonPressed.bind(this), "disable_bots_button");
    }

    setupVisual() {
        try {
            var gameroomPartyMode = StringTable.StringTable.getMovieClip("sc/ui.sc", "gameroom_party_mode");
            if (gameroomPartyMode == null) {
                return;
            }
            var chatButtonClip = gameroomPartyMode.getMovieClipByName("button_chat");
            if (!chatButtonClip) {
                return undefined;
            }
            this.hideChildrenExceptBackground(chatButtonClip);
            this.setMovieClip(chatButtonClip, 1);
            this.addBotIcon(chatButtonClip);
            this.addCrossOverlay(chatButtonClip);
        } catch (e) {
        }
    }

    hideChildrenExceptBackground(clip) {
        var childCount = clip.getChildCount();
        var childArray = clip.getChildArray();
        for (var i = 1; i < childCount; i++) {
            var child = childArray.add(i * Process.pointerSize).readPointer();
            if (!child.isNull()) {
                new DisplayObject.DisplayObject(child).visibility = false;
            }
        }
    }

    addBotIcon(parentClip) {
        var memberItemClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "member_item_extrasmall");
        if (!memberItemClip) {
            return;
        }
        var outerPlaceholder = memberItemClip.getMovieClipByName("image_ph");
        if (!outerPlaceholder) {
            return;
        }
        var innerPlaceholder = outerPlaceholder.getMovieClipByName("image_ph");
        if (!innerPlaceholder) {
            return;
        }
        var backgroundChild = innerPlaceholder.getChildArray().readPointer();
        if (!backgroundChild.isNull()) {
            new DisplayObject.DisplayObject(backgroundChild).visibility = false;
        }
        outerPlaceholder.scale = 0.2;
        outerPlaceholder.y = -10;
        parentClip.addChild(outerPlaceholder.instance);
    }

    addCrossOverlay(parentClip) {
        var memberItemClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "member_item_extrasmall");
        if (!memberItemClip) {
            return;
        }
        var slotSwitchClip = memberItemClip.getMovieClipByName("button_slot_switch");
        if (!slotSwitchClip) {
            return;
        }
        slotSwitchClip.gotoAndStopFrameIndex(1);
        slotSwitchClip.scale = 0.5;
        slotSwitchClip.x = 27;
        slotSwitchClip.y = -25;
        parentClip.addChild(slotSwitchClip.instance);
    }

    onButtonPressed(self, button) {
        if (!DisableBotsButton.botsDisabled) {
            this.disableAllBotSlots();
            return;
        }
        this.enableAllDisabledSlots();
    }

    disableAllBotSlots() {
        for (var slotIndex = 0; slotIndex < MAX_FRIENDLY_ROOM_SLOTS; slotIndex++) {
            MessageManager.MessageManager.sendMessage(new TeamBotSlotDisableMessage.TeamBotSlotDisableMessage(slotIndex, true));
        }
        DisableBotsButton.botsDisabled = true;
    }

    enableAllDisabledSlots() {
        var disabledSlotIndices = TeamPopup.TeamPopup.getDisabledSlotIndices();
        for (var slotIndex of disabledSlotIndices) {
            MessageManager.MessageManager.sendMessage(new TeamBotSlotDisableMessage.TeamBotSlotDisableMessage(slotIndex, false));
        }
        DisableBotsButton.botsDisabled = false;
    }
}

DisableBotsButton.botsDisabled = false;
