// ============================================================= //
// FEATURE: Show mute button
// Config key: ShowMuteButton (default false)
// TID prefix: ShowMuteButton
// Icon: none (questionmark fallback in the settings popup)
// Implementation: config key only — not wired in this build's JS.
// The related SoundMuted key (volume.js) is what actually silences
// the game; CombatHUD.muteButton teardown is referenced by the
// BattleScreen exit hook (ui/screens.js#7835).
// ============================================================= //

Config.configStatic.ShowMuteButton = false;

LocalisationOverrides.overrides.en.ShowMuteButton_name = "Show mute button";
LocalisationOverrides.overrides.en.ShowMuteButton_descEnabled = "When enabled, sound mute button will be available in battle.";
LocalisationOverrides.overrides.ru.ShowMuteButton_name = "Кнопка отключения звука";
LocalisationOverrides.overrides.ru.ShowMuteButton_descEnabled = "Когда включено: в бою будет отображаться кнопка отключения звука.";

// No JS consumer reads ShowMuteButton in this build. The mute plumbing that
// DOES ship lives in the volume feature (features/mod-settings/volume.js):
// Config.configStatic.SoundMuted plus the GameSettings isSfxEnabled /
// isMusicEnabled replacements in core/config.js, and BattleScreen's exit
// hook resets CombatHUD.muteButton = null (module 7835, ui/screens.js).
