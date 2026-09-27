// ============================================================= //
// FEATURE: Team chat anticensor
// Config key: TeamChatAnticensor (default false)
// TID prefix: TeamChatAnticensor
// Icon: none (questionmark fallback in the settings popup)
// Implementation: config key only — the chat censoring happens
// server-side, so the toggle is not effective in this build.
// ============================================================= //

Config.configStatic.TeamChatAnticensor = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   TeamChatAnticensor_name        = "Team chat anticensor"
//   TeamChatAnticensor_descEnabled = "When enabled, words won't be replaced with asterisks in the team chat."
//
// The word masking is applied by the server before the chat message reaches
// clients — no JS hook can un-mask it client-side, and none ships in this
// build. The battle-side text chat itself lives in
// features/mod-settings/text-chat-in-battle.js.
