// ============================================================= //
// FEATURE: Chromatic name (visual-only)
// Config key: ChromaticName (default false)
// TID prefix: VisualChromaticName
// Icon: VisualChromaticNamePinCallback (menu/icons.js, module 2120)
// Wiring: popup item (menu/mod-configuration.js, module 6893,
// shouldReloadGame: true) + PlayerDisplayData ctor hook
// (features/mod-menu/visual-name-change.js, module 9778)
// ============================================================= //

Config.configStatic.ChromaticName = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   VisualChromaticName_name        = "Chromatic name (visual-only)"
//   VisualChromaticName_descEnabled = "When enabled, your name color will become chromatic as with purchased Brawl Pass."

function VisualChromaticNamePinCallback() {
    return StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_resource_chromatic_coin");
}

// Applied inside the PlayerDisplayData constructor hook owned by
// visual-name-change.js (module 9778): arg 5 is the name color tier —
// forcing it to -2 renders the name with the chromatic (Brawl Pass) gradient.
// Own-name capture and name-color caching are handled by the same hook:
//
//     Interceptor.attach(PlayerDisplayData_ctor, {
//         onEnter(args) {
//             ...
//             if (Config.Config.config.ChromaticName) {
//                 args[5] = ptr(-2);
//             }
//             ...
//         }
//     });
