// ============================================================= //
// FEATURE: Always show chat button
// Config key: EnforceBattleChatButton (default true)
// TID prefix: EnforceBattleChatButton
// Icon: EnforceBattleChatButtonCallback (menu/icons.js, module 2120)
// Wiring: BattleScreen.patch (ui/screens.js, module 7835)
// ============================================================= //

Config.configStatic.EnforceBattleChatButton = true;

LocalisationOverrides.overrides.en.EnforceBattleChatButton_name = "Always show chat button";
LocalisationOverrides.overrides.en.EnforceBattleChatButton_descEnabled = "When enabled, chat button in battle will be always available.";
LocalisationOverrides.overrides.ru.EnforceBattleChatButton_name = "Всегда показывать кнопку чата";
LocalisationOverrides.overrides.ru.EnforceBattleChatButton_descEnabled = "Когда включено: кнопка чата в бою будет всегда доступна.";

function EnforceBattleChatButtonCallback() {
    var emoteButtonClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "emote_button");
    var cooldownChild = emoteButtonClip.getChildByName("cooldown");
    cooldownChild.gotoAndStopFrameIndex(99);
    return cooldownChild;
}

// BattleScreen native (module 7835, ui/screens.js):
var BattleScreen_shouldShowChatButton = Libg.Libg.offset(11791332, 0);

function patchEnforceBattleChatButton() {
    Interceptor.attach(BattleScreen_shouldShowChatButton, { onLeave(retval) {
        if (Config.Config.config.EnforceBattleChatButton) {
            retval.replace(ptr(1));
        }
    } });
}
