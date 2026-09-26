// =============================================================
// FEATURE: Duo Quiz Answers
// config keys: HighlightDuoQuizAnswers
// Highlights correct duo quiz answers.
// merged webpack modules: 7657 DuoQuizAnswers
// =============================================================

// --------------------- MODULE 7657 — DuoQuizAnswers ---------------------

// ============================================================ //
// webpack module 7657  —  DuoQuizAnswers
// exports: DuoQuizAnswers
// deps: 4009 (Config), 7535 (StringObject)
// ============================================================ //

__webpack_modules__[7657] = function DuoQuizAnswers_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Config, StringObject, DuoQuizAnswers, <class_fields_init>, DuoQuizAnswers;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DuoQuizAnswers = undefined;
        Config = __webpack_require__(4009);
        StringObject = __webpack_require__(7535);
        <class_fields_init> = undefined;
        DuoQuizAnswers;
        class DuoQuizAnswers {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x9e359 (open) */
}
            getHighlightedAnswer (tid, localizedString) {
    var text, highlightedText, highlightedString;
        if (!(!(((Config).Config).config).HighlightDuoQuizAnswers)) {
            if (!(!tid)) {
                if ((!((this).correctAnswerTids).has(tid))) {
                    return null;
                } /* if 0x9e21d */
            } /* if 0x9e219 */
        } /* if 0x9e219 */
        if ((localizedString).isNull()) {
            return null;
        } /* if 0x9e22a */
        text = ((StringObject).StringObject).read(localizedString);
        if (!(!text)) {
            if ((text === tid)) {
                return null;
            } /* if 0x9e24d */
        } /* if 0x9e249 */
        highlightedText = ("<c00FF00>").concat((text).replace(new RegExp("<c[0-9a-f]+>|<\\/c>", "\u0003\u0001\u0000L\u0000\u0000\u0000\b\u0006\u0000\u0000\u0000\u0004\u0007õÿÿÿ\u000b\u0000\t+\u0000\u0000\u0000\u0001<\u0000\u0001C\u0000\u001c\f\u0000\u0000\u0000\u0001\u0000\u0000\u0000ÿÿÿ\u0001\u0000\u0000\u0000\u0015\u0002\u00000\u00009\u0000A\u0000F\u0000\n\u0001>\u0000\u0007\f\u0000\u0000\u0000\u0001<\u0000\u0001/\u0000\u0001C\u0000\u0001>\u0000\f\u0000\n"), ""), "</c>");
        highlightedString = ((this).highlightedStrings)["get"](highlightedText);
        if ((!highlightedString)) {
            highlightedString = ((StringObject).StringObject).create(highlightedText);
        } /* if 0x9e2b6 */
        return highlightedString;
}
        }
        DuoQuizAnswers = DuoQuizAnswers = DuoQuizAnswers;
        exports.DuoQuizAnswers = DuoQuizAnswers;
        [..."TID_QUIZ_DUO_32_ANSWER_1"][32] = "TID_QUIZ_DUO_33_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][33] = "TID_QUIZ_DUO_34_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][34] = "TID_QUIZ_DUO_35_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][35] = "TID_QUIZ_DUO_36_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][36] = "TID_QUIZ_DUO_37_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][37] = "TID_QUIZ_DUO_38_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][38] = "TID_QUIZ_DUO_39_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][39] = "TID_QUIZ_DUO_40_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][40] = "TID_QUIZ_DUO_41_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][41] = "TID_QUIZ_DUO_42_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][42] = "TID_QUIZ_DUO_43_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][43] = "TID_QUIZ_DUO_44_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][44] = "TID_QUIZ_DUO_45_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][45] = "TID_QUIZ_DUO_46_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][46] = "TID_QUIZ_DUO_47_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][47] = "TID_QUIZ_DUO_48_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][48] = "TID_QUIZ_DUO_49_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][49] = "TID_QUIZ_DUO_50_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][50] = "TID_QUIZ_DUO_51_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][51] = "TID_QUIZ_DUO_52_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][52] = "TID_QUIZ_DUO_53_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][53] = "TID_QUIZ_DUO_54_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][54] = "TID_QUIZ_DUO_55_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][55] = "TID_QUIZ_DUO_56_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][56] = "TID_QUIZ_DUO_57_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][57] = "TID_QUIZ_DUO_58_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][58] = "TID_QUIZ_DUO_59_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][59] = "TID_QUIZ_DUO_60_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][60] = "TID_QUIZ_DUO_61_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][61] = "TID_QUIZ_DUO_62_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][62] = "TID_QUIZ_DUO_63_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][63] = "TID_QUIZ_DUO_64_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][64] = "TID_QUIZ_DUO_65_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][65] = "TID_QUIZ_DUO_66_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][66] = "TID_QUIZ_DUO_67_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][67] = "TID_QUIZ_DUO_68_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][68] = "TID_QUIZ_DUO_69_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][69] = "TID_QUIZ_DUO_70_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][70] = "TID_QUIZ_DUO_71_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][71] = "TID_QUIZ_DUO_72_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][72] = "TID_QUIZ_DUO_73_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][73] = "TID_QUIZ_DUO_74_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][74] = "TID_QUIZ_DUO_75_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][75] = "TID_QUIZ_DUO_76_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][76] = "TID_QUIZ_DUO_77_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][77] = "TID_QUIZ_DUO_78_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][78] = "TID_QUIZ_DUO_79_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][79] = "TID_QUIZ_DUO_79_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][80] = "TID_QUIZ_DUO_79_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][81] = "TID_QUIZ_DUO_80_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][82] = "TID_QUIZ_DUO_81_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][83] = "TID_QUIZ_DUO_81_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][84] = "TID_QUIZ_DUO_81_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][85] = "TID_QUIZ_DUO_82_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][86] = "TID_QUIZ_DUO_82_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][87] = "TID_QUIZ_DUO_82_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][88] = "TID_QUIZ_DUO_83_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][89] = "TID_QUIZ_DUO_84_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][90] = "TID_QUIZ_DUO_85_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][91] = "TID_QUIZ_DUO_85_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][92] = "TID_QUIZ_DUO_86_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][93] = "TID_QUIZ_DUO_86_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][94] = "TID_QUIZ_DUO_87_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][95] = "TID_QUIZ_DUO_88_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][96] = "TID_QUIZ_DUO_89_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][97] = "TID_QUIZ_DUO_90_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][98] = "TID_QUIZ_DUO_91_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][99] = "TID_QUIZ_DUO_92_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][100] = "TID_QUIZ_DUO_93_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][101] = "TID_QUIZ_DUO_94_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][102] = "TID_QUIZ_DUO_95_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][103] = "TID_QUIZ_DUO_96_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][104] = "TID_QUIZ_DUO_97_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][105] = "TID_QUIZ_DUO_98_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][106] = "TID_QUIZ_DUO_99_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][107] = "TID_QUIZ_DUO_100_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][108] = "TID_QUIZ_DUO_101_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][109] = "TID_QUIZ_DUO_102_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][110] = "TID_QUIZ_DUO_103_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][111] = "TID_QUIZ_DUO_104_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][112] = "TID_QUIZ_DUO_105_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][113] = "TID_QUIZ_DUO_106_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][114] = "TID_QUIZ_DUO_107_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][115] = "TID_QUIZ_DUO_108_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][116] = "TID_QUIZ_DUO_109_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][117] = "TID_QUIZ_DUO_110_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][118] = "TID_QUIZ_DUO_111_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][119] = "TID_QUIZ_DUO_112_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][120] = "TID_QUIZ_DUO_113_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][121] = "TID_QUIZ_DUO_114_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][122] = "TID_QUIZ_DUO_115_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][123] = "TID_QUIZ_DUO_116_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][124] = "TID_QUIZ_DUO_117_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][125] = "TID_QUIZ_DUO_118_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][126] = "TID_QUIZ_DUO_119_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][127] = "TID_QUIZ_DUO_120_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][128] = "TID_QUIZ_DUO_121_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][129] = "TID_QUIZ_DUO_122_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][130] = "TID_QUIZ_DUO_123_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][131] = "TID_QUIZ_DUO_124_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][132] = "TID_QUIZ_DUO_125_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][133] = "TID_QUIZ_DUO_126_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][134] = "TID_QUIZ_DUO_127_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][135] = "TID_QUIZ_DUO_128_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][136] = "TID_QUIZ_DUO_129_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][137] = "TID_QUIZ_DUO_130_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][138] = "TID_QUIZ_DUO_131_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][139] = "TID_QUIZ_DUO_132_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][140] = "TID_QUIZ_DUO_133_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][141] = "TID_QUIZ_DUO_134_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][142] = "TID_QUIZ_DUO_135_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][143] = "TID_QUIZ_DUO_136_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][144] = "TID_QUIZ_DUO_137_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][145] = "TID_QUIZ_DUO_138_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][146] = "TID_QUIZ_DUO_139_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][147] = "TID_QUIZ_DUO_140_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][148] = "TID_QUIZ_DUO_141_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][149] = "TID_QUIZ_DUO_142_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][150] = "TID_QUIZ_DUO_143_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][151] = "TID_QUIZ_DUO_144_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][152] = "TID_QUIZ_DUO_145_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][153] = "TID_QUIZ_DUO_146_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][154] = "TID_QUIZ_DUO_147_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][155] = "TID_QUIZ_DUO_148_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][156] = "TID_QUIZ_DUO_149_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][157] = "TID_QUIZ_DUO_150_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][158] = "TID_QUIZ_DUO_151_ANSWER_3";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][159] = "TID_QUIZ_DUO_152_ANSWER_2";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][160] = "TID_QUIZ_DUO_153_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][161] = "TID_QUIZ_DUO_154_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][162] = "TID_QUIZ_DUO_155_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][163] = "TID_QUIZ_DUO_156_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][164] = "TID_QUIZ_DUO_157_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][165] = "TID_QUIZ_DUO_158_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][166] = "TID_QUIZ_DUO_159_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][167] = "TID_QUIZ_DUO_160_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][168] = "TID_QUIZ_DUO_161_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][169] = "TID_QUIZ_DUO_162_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][170] = "TID_QUIZ_DUO_163_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][171] = "TID_QUIZ_DUO_164_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][172] = "TID_QUIZ_DUO_165_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][173] = "TID_QUIZ_DUO_166_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][174] = "TID_QUIZ_DUO_167_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][175] = "TID_QUIZ_DUO_168_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][176] = "TID_QUIZ_DUO_169_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][177] = "TID_QUIZ_DUO_170_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][178] = "TID_QUIZ_DUO_171_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][179] = "TID_QUIZ_DUO_172_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][180] = "TID_QUIZ_DUO_173_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][181] = "TID_QUIZ_DUO_174_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][182] = "TID_QUIZ_DUO_175_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][183] = "TID_QUIZ_DUO_176_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][184] = "TID_QUIZ_DUO_177_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][185] = "TID_QUIZ_DUO_178_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][186] = "TID_QUIZ_DUO_179_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][187] = "TID_QUIZ_DUO_180_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][188] = "TID_QUIZ_DUO_181_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][189] = "TID_QUIZ_DUO_182_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][190] = "TID_QUIZ_DUO_183_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][191] = "TID_QUIZ_DUO_184_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][192] = "TID_QUIZ_DUO_185_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][193] = "TID_QUIZ_DUO_186_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][194] = "TID_QUIZ_DUO_187_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][195] = "TID_QUIZ_DUO_188_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][196] = "TID_QUIZ_DUO_189_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][197] = "TID_QUIZ_DUO_190_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][198] = "TID_QUIZ_DUO_191_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][199] = "TID_QUIZ_DUO_192_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][200] = "TID_QUIZ_DUO_193_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][201] = "TID_QUIZ_DUO_194_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][202] = "TID_QUIZ_DUO_195_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][203] = "TID_QUIZ_DUO_196_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][204] = "TID_QUIZ_DUO_197_ANSWER_1";
        [..."TID_QUIZ_DUO_32_ANSWER_1"][205] = "TID_QUIZ_DUO_198_ANSWER_1";
        "TID_QUIZ_DUO_29_ANSWER_1".correctAnswerTids = new "TID_QUIZ_DUO_30_ANSWER_1"([..."TID_QUIZ_DUO_32_ANSWER_1"]);
        DuoQuizAnswers.highlightedStrings = new Map();
        return;
};

