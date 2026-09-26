var battleLogEntryCtorAddress = Libg.Libg.offset(10809436, 0);
var REPLAY_BUTTON_NAME = "replay_button";
var SHARE_REPLAY_BUTTON_NAME = "share_replay_button";
var TEMPLATE_ENTRY_NAME = "battlelog_2v2_entry";
var BUTTON_X_OFFSET = -98;
var TINT_RED = 215;
var TINT_GREEN = 140;
var TINT_BLUE = 30;
var TINT_ALPHA = 255;

class BattleLogShareButton {
    patch() {
        Interceptor.attach(battleLogEntryCtorAddress, {
            onEnter(args) {
                this.entry = args[0];
            },
            onLeave() {
                BattleLogShareButton.attachCopyButton(this.entry);
            }
        });
    }

    attachCopyButton(entry) {
        if (entry.isNull()) {
            return;
        }
        var movieClip = new GUIContainer.GUIContainer(entry).getMovieClip();
        if (movieClip.instance.isNull()) {
            return;
        }
        var replayButton = movieClip.getChildByName(REPLAY_BUTTON_NAME);
        if (!replayButton) {
            return;
        }
        if (!replayButton.visibility) {
            return;
        }
        var template = StringTable.StringTable.getMovieClip_safe("sc/ui.sc", TEMPLATE_ENTRY_NAME);
        if (!template) {
            return;
        }
        var copyButtonClip = template.getChildByName(SHARE_REPLAY_BUTTON_NAME);
        if (!copyButtonClip) {
            return;
        }
        copyButtonClip.removeFromParent();
        copyButtonClip.setXY(0, 0);
        copyButtonClip.visibility = true;
        var copyButton = new GameButton.GameButton();
        copyButton.setMovieClip(new MovieClip.MovieClip(copyButtonClip.instance), true);
        var arrow = copyButton.getMovieClip().getChildById(2);
        arrow.colorTransform.c1r = TINT_RED;
        arrow.colorTransform.c2r = TINT_RED;
        arrow.colorTransform.c1g = TINT_GREEN;
        arrow.colorTransform.c2g = TINT_GREEN;
        arrow.colorTransform.c1b = TINT_BLUE;
        arrow.colorTransform.c2b = TINT_BLUE;
        arrow.colorTransform.alpha = TINT_ALPHA;
        copyButton.setXY(replayButton.x + BUTTON_X_OFFSET, replayButton.y);
        copyButton.setCustomButtonListener(function () {
            return SharedReplay.SharedReplay.copyLinkForBattleLogItem(entry);
        });
        movieClip.addChild(copyButton.instance);
        BattleLogShareButton.keepAlive.push(copyButton);
        var trophyIcon = movieClip.getChildByName("trophy_icon");
        if (trophyIcon) {
            if (trophyIcon.visibility) {
                var trophyTxt = movieClip.getTextFieldByName("trophy_txt");
                trophyIcon.x -= copyButton.width;
                trophyTxt.x -= copyButton.width;
            }
        }
    }
}

BattleLogShareButton.keepAlive = [];
