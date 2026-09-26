//============================================================================//
// MOD FEATURE: Battle log share
// Share battle log button.
//============================================================================//

// --------------------- MODULE 3982 — BattleLogShareButton ---------------------


// ============================================================ //
// webpack module 3982  —  BattleLogShareButton
// exports: BattleLogShareButton
// deps: 612 (MovieClip), 3210 (GUIContainer), 4111 (SharedReplay), 5039 (GameButton), 9250 (StringTable), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3982] = function BattleLogShareButton_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GUIContainer, MovieClip, StringTable, GameButton, SharedReplay, battleLogEntryCtorAddress, REPLAY_BUTTON_NAME, SHARE_REPLAY_BUTTON_NAME, TEMPLATE_ENTRY_NAME, BUTTON_X_OFFSET, TINT_RED, TINT_GREEN, TINT_BLUE, TINT_ALPHA, BattleLogShareButton, <class_fields_init>, BattleLogShareButton;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.BattleLogShareButton = undefined;
        Libg = __webpack_require__(9878);
        GUIContainer = __webpack_require__(3210);
        MovieClip = __webpack_require__(612);
        StringTable = __webpack_require__(9250);
        GameButton = __webpack_require__(5039);
        SharedReplay = __webpack_require__(4111);
        battleLogEntryCtorAddress = ((Libg).Libg).offset(10809436, 0);
        REPLAY_BUTTON_NAME = "replay_button";
        SHARE_REPLAY_BUTTON_NAME = "share_replay_button";
        TEMPLATE_ENTRY_NAME = "battlelog_2v2_entry";
        BUTTON_X_OFFSET = -98;
        TINT_RED = 215;
        TINT_GREEN = 140;
        TINT_BLUE = 30;
        TINT_ALPHA = 255;
        <class_fields_init> = undefined;
        BattleLogShareButton;
        class BattleLogShareButton {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9ab35 (open) */
}
            patch () {
        return;
}
            attachCopyButton (entry) {
    var movieClip, replayButton, template, copyButtonClip, copyButton, arrow, trophyIcon, trophyTxt;
        if ((entry).isNull()) {
            return;
        } /* if 0x9a8aa */
        movieClip = (new (GUIContainer).GUIContainer(entry)).getMovieClip();
        if (((movieClip).instance).isNull()) {
            return;
        } /* if 0x9a8d3 */
        replayButton = (movieClip).getChildByName(REPLAY_BUTTON_NAME);
        if ((!replayButton)) {
            return;
        } /* if 0x9a8e9 */
        if ((!(replayButton).visibility)) {
            return;
        } /* if 0x9a8f5 */
        template = ((StringTable).StringTable).getMovieClip_safe("sc/ui.sc", TEMPLATE_ENTRY_NAME);
        if ((!template)) {
            return;
        } /* if 0x9a915 */
        copyButtonClip = (template).getChildByName(SHARE_REPLAY_BUTTON_NAME);
        if ((!copyButtonClip)) {
            return;
        } /* if 0x9a92b */
        (copyButtonClip).removeFromParent();
        (copyButtonClip).setXY(0, 0);
        copyButtonClip.visibility = true;
        copyButton = new (GameButton).GameButton();
        (copyButton).setMovieClip(new (MovieClip).MovieClip((copyButtonClip).instance), true);
        arrow = ((copyButton).getMovieClip()).getChildById(2);
        (arrow).colorTransform.c1r = TINT_RED;
        (arrow).colorTransform.c2r = TINT_RED;
        (arrow).colorTransform.c1g = TINT_GREEN;
        (arrow).colorTransform.c2g = TINT_GREEN;
        (arrow).colorTransform.c1b = TINT_BLUE;
        (arrow).colorTransform.c2b = TINT_BLUE;
        (arrow).colorTransform.alpha = TINT_ALPHA;
        (copyButton).setXY(((replayButton).x + BUTTON_X_OFFSET), (replayButton).y);
        (copyButton).setCustomButtonListener(function () {
        return ((SharedReplay).SharedReplay).copyLinkForBattleLogItem(entry);
});
        (movieClip).addChild((copyButton).instance);
        trophyIcon = (movieClip).getChildByName("trophy_icon");
        if (trophyIcon) {
            if ((trophyIcon).visibility) {
                trophyTxt = (movieClip).getTextFieldByName("trophy_txt");
                trophyIcon.x = ((trophyIcon).x - (copyButton).width);
                trophyTxt.x = ((trophyTxt).x - (copyButton).width);
            } /* if 0x9aaa7 */
        } /* if 0x9aaa7 */
        return;
}
        }
        BattleLogShareButton = SHARE_REPLAY_BUTTON_NAME = BattleLogShareButton;
        exports.BattleLogShareButton = BattleLogShareButton;
        BattleLogShareButton.keepAlive = [];
        return;
};

