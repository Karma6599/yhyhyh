// ============================================================= //
// FEATURE: Instant reward opening
// Config key: InstantStarrDropOpening (default false)
// TID prefix: InstantStarrDropOpening
// Icon: InstantStarrDropOpeningCallback (menu/icons.js, module 2120)
// Implementation: config key only — the starr-drop opening flow is
// handled natively (no 4-tap sequence); no JS consumer in this build.
// ============================================================= //

Config.configStatic.InstantStarrDropOpening = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   InstantStarrDropOpening_name        = "Instant reward opening"
//   InstantStarrDropOpening_descEnabled = "When enabled, you won't have to tap 4 times to open starrdrop."

function InstantStarrDropOpeningCallback() {
    var clip = StringTable.StringTable.getMovieClip("sc/emoji_1.sc", "emoji_starr");
    var child = clip.getChildById(1);
    child.gotoAndStopFrameIndex(210);
    return clip;
}
