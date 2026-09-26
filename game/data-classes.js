//============================================================================//// GAME DATA CLASSES (LOGIC*DATA)// merged webpack modules: 1552 LogicAreaEffectData, 7559 LogicColorGradientData, 6292 LogicCardData, 7171 LogicCharacterData, 3020 LogicColor, 2567 LogicEffectData, 8040 LogicEmoteData, 7269 LogicFameTierData, 9822 LogicGameModeVariationData, 8899 LogicItemData, 4325 LogicLocationData, 944 LogicLocationThemeData, 4629 LogicPlayerTitleData, 7479 LogicProjectileData, 3311 LogicRandomRewardContainerData, 2202 LogicRandomRewardData, 2118 LogicResourceData, 3537 LogicSkillData, 3555 LogicSkinData, 5257 LogicSkinConfData, 7493 LogicSprayData, 6253 LogicThemeData, 3503 LogicMusicData, 7542 MaintenanceModeInfo, 733 LocationInfo, 4812 LogicConfData, 7089 LogicDailyData//============================================================================//
// --------------------- MODULE 1552 — LogicAreaEffectData ---------------------


// ============================================================ //
// webpack module 1552  —  LogicAreaEffectData
// exports: LogicAreaEffectData
// ============================================================ //

__webpack_modules__[1552] = function LogicAreaEffectData_factory(__unused_webpack_module, exports) {
    var LogicAreaEffectData, <class_fields_init>, LogicAreaEffectData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicAreaEffectData = undefined;
        <class_fields_init> = undefined;
        LogicAreaEffectData;
        class LogicAreaEffectData {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x60fd7 (open) */
}
        }
        LogicAreaEffectData = LogicAreaEffectData = LogicAreaEffectData;
        exports.LogicAreaEffectData = LogicAreaEffectData;
        LogicAreaEffectData.allocationSize = 576;
        LogicAreaEffectData.fields = { PlaybackType: 424, RotationType: 428, Type: 320 };
        return;
};

// --------------------- MODULE 7559 — LogicColorGradientData ---------------------


// ============================================================ //
// webpack module 7559  —  LogicColorGradientData
// exports: LogicColorGradientData
// deps: 6794 (LogicData)
// ============================================================ //

__webpack_modules__[7559] = function LogicColorGradientData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicColorGradientData, <class_fields_init>, LogicColorGradientData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicColorGradientData = undefined;
        LogicData = __webpack_require__(6794);
        <class_fields_init> = undefined;
        LogicColorGradientData;
        class LogicColorGradientData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x65f33 */
        return this;
}
        }
        LogicColorGradientData = LogicColorGradientData = LogicColorGradientData;
        exports.LogicColorGradientData = LogicColorGradientData;
        return;
};

// --------------------- MODULE 6292 — LogicCardData ---------------------


// ============================================================ //
// webpack module 6292  —  LogicCardData
// exports: CARD_META_GADGET, CARD_META_STAR_POWER, LogicCardData
// deps: 6794 (LogicData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6292] = function LogicCardData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, Libg, LogicCardData_getMetaType, LogicCardData, <class_fields_init>, LogicCardData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.CARD_META_STAR_POWER = undefined;
        undefined.CARD_META_GADGET = exports;
        exports.LogicCardData = undefined;
        LogicData = __webpack_require__(6794);
        Libg = __webpack_require__(9878);
        LogicCardData_getMetaType = new NativeFunction(((Libg).Libg).offset(14596992, 0), "int", ["pointer"]);
        exports.CARD_META_STAR_POWER = 4;
        exports.CARD_META_GADGET = 5;
        static get metaType () {
        return LogicCardData_getMetaType((this).instance);
};
        <class_fields_init> = undefined;
        LogicCardData;
        class LogicCardData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6533d */
        return this;
}
        }
        LogicCardData = LogicCardData = LogicCardData;
        exports.LogicCardData = LogicCardData;
        return;
};

// --------------------- MODULE 7171 — LogicCharacterData ---------------------


// ============================================================ //
// webpack module 7171  —  LogicCharacterData
// exports: LogicCharacterData
// deps: 1588 (LogicMemory), 3537 (LogicSkillData), 3555 (LogicSkinData), 4009 (Config), 6794 (LogicData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7171] = function LogicCharacterData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicData, LogicMemory, LogicSkinData, Config, LogicSkillData, LogicCharacterData_useColorMod, LogicCharacterData_getRedAdd, LogicCharacterData_sm_columnIndexDisabled, projectileStartZOffset, flyingHeightOffset, speedOffset, autoAttackRangeOffset, scaleOffset, shadowScaleXOffset, shadowScaleYOffset, collisionRadiusOffset, healthBarOffsetYOffset, typeOffset, weaponSkillOffset, ultimateSkillOffset, overchargedUltimateSkillOffset, defaultSkinOffset, HERO_CHARACTER_TYPE_DEFAULT, HERO_CHARACTER_TYPE_ALT, LogicCharacterData, <class_fields_init>, LogicCharacterData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicCharacterData = undefined;
        Libg = __webpack_require__(9878);
        LogicData = __webpack_require__(6794);
        LogicMemory = __webpack_require__(1588);
        LogicSkinData = __webpack_require__(3555);
        Config = __webpack_require__(4009);
        LogicSkillData = __webpack_require__(3537);
        LogicCharacterData_useColorMod = new NativeFunction(((Libg).Libg).offset(14615428, 0), "bool", ["pointer"]);
        LogicCharacterData_getRedAdd = new NativeFunction(((Libg).Libg).offset(14615452, 0), "int", ["pointer"]);
        LogicCharacterData_sm_columnIndexDisabled = ((Libg).Libg).offset(19146488, 0);
        projectileStartZOffset = ((LogicMemory).LogicMemory).offset(600);
        flyingHeightOffset = ((LogicMemory).LogicMemory).offset(612);
        speedOffset = ((LogicMemory).LogicMemory).offset(620);
        autoAttackRangeOffset = ((LogicMemory).LogicMemory).offset(632);
        scaleOffset = ((LogicMemory).LogicMemory).offset(636);
        shadowScaleXOffset = ((LogicMemory).LogicMemory).offset(664);
        shadowScaleYOffset = ((LogicMemory).LogicMemory).offset(668);
        collisionRadiusOffset = ((LogicMemory).LogicMemory).offset(684);
        healthBarOffsetYOffset = ((LogicMemory).LogicMemory).offset(696);
        typeOffset = ((LogicMemory).LogicMemory).offset(772);
        weaponSkillOffset = ((LogicMemory).LogicMemory).offset(808);
        ultimateSkillOffset = ((LogicMemory).LogicMemory).offset(816);
        overchargedUltimateSkillOffset = ((LogicMemory).LogicMemory).offset(824);
        defaultSkinOffset = ((LogicMemory).LogicMemory).offset(328);
        HERO_CHARACTER_TYPE_DEFAULT = 0;
        HERO_CHARACTER_TYPE_ALT = 26;
        static isDisabled () {
        return (this).getBooleanValueAt((LogicCharacterData_sm_columnIndexDisabled).readInt());
};
        static isHero () {
    var typeId;
        typeId = (this).readS32(typeOffset);
        if (!(typeId === HERO_CHARACTER_TYPE_DEFAULT)) {
            (typeId === HERO_CHARACTER_TYPE_DEFAULT);
            return (typeId === HERO_CHARACTER_TYPE_ALT);
        } /* if 0x65791 (open) */
};
        static getCharacterType () {
        return (this).readS32(typeOffset);
};
        static getProjectileStartZ () {
        return (this).readS32(projectileStartZOffset);
};
        static getFlyingHeight () {
        return (this).readS32(flyingHeightOffset);
};
        static getSpeed () {
        return (this).readS32(speedOffset);
};
        static getAutoAttackRange () {
        return (this).readS32(autoAttackRangeOffset);
};
        static getScale () {
        return (this).readFloat(scaleOffset);
};
        static getShadowScaleX () {
        return (this).readFloat(shadowScaleXOffset);
};
        static getShadowScaleY () {
        return (this).readFloat(shadowScaleYOffset);
};
        static getCollisionRadius () {
        return (this).readS32(collisionRadiusOffset);
};
        static getHealthBarOffsetY () {
        return (this).readS32(healthBarOffsetYOffset);
};
        static getDefaultSkin () {
        return new (LogicSkinData).LogicSkinData((this).readPointer(defaultSkinOffset));
};
        static get weaponSkill () {
        return (this).readWrappedPointer(weaponSkillOffset, function (pointer) {
        return new (LogicSkillData).LogicSkillData(pointer);
});
};
        static get ultimateSkill () {
        return (this).readWrappedPointer(ultimateSkillOffset, function (pointer) {
        return new (LogicSkillData).LogicSkillData(pointer);
});
};
        static get overchargedUltimateSkill () {
        return (this).readWrappedPointer(overchargedUltimateSkillOffset, function (pointer) {
        return new (LogicSkillData).LogicSkillData(pointer);
});
};
        <class_fields_init> = undefined;
        LogicCharacterData;
        class LogicCharacterData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x65c18 */
        return this;
}
            patch () {
        (Interceptor).replace(LogicCharacterData_useColorMod, new NativeCallback(function (character) {
    var chara, name;
        chara = new LogicCharacterData(character);
        name = (chara).getName();
        if ((name === "NinjaFake")) {
            if ((((Config).Config).config).HighlightLeonClone) {
                return 1;
            } /* if 0x65b43 */
        } /* if 0x65b43 */
        return LogicCharacterData_useColorMod(character);
}, "bool", ["pointer"]));
        return;
}
        }
        LogicCharacterData = LogicCharacterData_sm_columnIndexDisabled = LogicCharacterData;
        exports.LogicCharacterData = LogicCharacterData;
        return;
};

// --------------------- MODULE 3020 — LogicColor ---------------------


// ============================================================ //
// webpack module 3020  —  LogicColor
// exports: LogicColor
// ============================================================ //

__webpack_modules__[3020] = function LogicColor_factory(__unused_webpack_module, exports) {
    var LogicColor, <class_fields_init>, LogicColor;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicColor = undefined;
        <class_fields_init> = undefined;
        LogicColor;
        class LogicColor {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb93af (open) */
}
            argbToIntString (argb) {
    var alphaHex, redHex, greenHex, blueHex;
        alphaHex = (((Math).round(((argb[3] * 255) / 100))).toString(16)).padStart(2, "0");
        redHex = (((Math).round(((argb[0] * 255) / 100))).toString(16)).padStart(2, "0");
        greenHex = (((Math).round(((argb[1] * 255) / 100))).toString(16)).padStart(2, "0");
        blueHex = (((Math).round(((argb[2] * 255) / 100))).toString(16)).padStart(2, "0");
        return (("").concat(alphaHex, redHex, greenHex, blueHex)).toUpperCase();
}
            rgbToInt (rgb) {
        return (((rgb[0] << 16) + (rgb[1] << 8)) + rgb[2]);
}
            intToRGB (number) {
        return [((number & 16711680) >> 16), ((number & 65280) >> 8), (number & 255)];
}
            generateColorArray (colorStart, colorEnd, colorCount) {
    var start, end, colorArray, alpha, i, c;
        start = (this).intToRGB(colorStart);
        end = (this).intToRGB(colorEnd);
        colorArray = [];
        alpha = 0;
        i = 0;
        while ((i < colorCount)) {
            c = [];
            alpha = (alpha + (1 / colorCount));
            c[0] = ((start[0] * alpha) + ((1 - alpha) * end[0]));
            c[1] = ((start[1] * alpha) + ((1 - alpha) * end[1]));
            c[2] = ((start[2] * alpha) + ((1 - alpha) * end[2]));
            (colorArray).push((this).rgbToInt(c));
            i = ((i) + 1);
            (i++);
            return colorArray;
        } /* while 0xb9213 (open) */
}
            lerp (a, b, t) {
        return (a + ((b - a) * t));
}
            lerpColor (colorStart, colorEnd, t) {
    var r1, g1, b1, r2, g2, b2, r, g, b;
        if (!((undefined) === undefined)) {
            r1 = undefined;
            r1 = g1 = b1 = r2 = g2 = b2 = r = g = b = <underflow>;
            g1 = <underflow>;
            b1 = <underflow>;
        } /* if 0xb92d8 */
        /* jump -> 0xb92e6 */
        /* loop: jump back to 0xb92c8 */
        if (!((undefined) === undefined)) {
            r2 = undefined;
            (this).intToRGB(colorStart);
            g2 = <underflow>;
            b2 = <underflow>;
        } /* if 0xb92fd */
        /* jump -> 0xb930b */
        /* loop: jump back to 0xb92eb */
        r = (Math).round((this).lerp(r1, r2, t));
        g = (Math).round((this).lerp(g1, g2, t));
        b = (Math).round((this).lerp(b1, b2, t));
        return (this).rgbToInt([r, g, b]);
}
        }
        LogicColor = LogicColor = LogicColor;
        exports.LogicColor = LogicColor;
        return;
};

// --------------------- MODULE 2567 — LogicEffectData ---------------------


// ============================================================ //
// webpack module 2567  —  LogicEffectData
// exports: LogicEffectData
// deps: 1588 (LogicMemory), 1978 (Libc), 4009 (Config), 5417 (LogicArrayList), 6794 (LogicData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2567] = function LogicEffectData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, Libg, Config, Libc, LogicMemory, LogicArrayList, LogicEffectData_getShakeScreenOwn, LogicEffectData_getShakeScreenOthers, layerArrayOffset, typeArrayOffset, scaleArrayOffset, enemyVersionOffset, loopOffset, allocSize, LogicEffectData, <class_fields_init>, LogicEffectData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicEffectData = undefined;
        LogicData = __webpack_require__(6794);
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        LogicArrayList = __webpack_require__(5417);
        LogicEffectData_getShakeScreenOwn = new NativeFunction(((Libg).Libg).offset(0, 0), "int", ["pointer"]);
        LogicEffectData_getShakeScreenOthers = new NativeFunction(((Libg).Libg).offset(0, 0), "int", ["pointer"]);
        layerArrayOffset = ((LogicMemory).LogicMemory).offset(88);
        typeArrayOffset = ((LogicMemory).LogicMemory).offset(104);
        scaleArrayOffset = ((LogicMemory).LogicMemory).offset(120);
        enemyVersionOffset = ((LogicMemory).LogicMemory).offset(200);
        loopOffset = ((LogicMemory).LogicMemory).offset(240);
        allocSize = 264;
        static getTypeArray () {
        return new (LogicArrayList).LogicArrayList(((this).instance).add(typeArrayOffset));
};
        static setTypeArray (type) {
        return;
};
        static getLayerArray () {
        return new (LogicArrayList).LogicArrayList(((this).instance).add(layerArrayOffset));
};
        static setLayerArray (layers) {
        return;
};
        static getScaleArray () {
        return new (LogicArrayList).LogicArrayList(((this).instance).add(scaleArrayOffset));
};
        static setScaleArray (scales) {
        return;
};
        static get loop () {
        return (this).readBoolByte(loopOffset);
};
        static set loop (value) {
        return;
};
        static get enemyVersion () {
        return (this).readWrappedPointer(enemyVersionOffset, function (pointer) {
        return new LogicEffectData(pointer);
});
};
        static set enemyVersion (value) {
        return;
};
        static clone () {
    var memory;
        memory = ((Libc).Libc).malloc(allocSize);
        (Memory).copy(memory, (this).instance, allocSize);
        return new LogicEffectData(memory);
};
        <class_fields_init> = undefined;
        LogicEffectData;
        class LogicEffectData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x69da9 */
        return this;
}
            patch () {
    var shakeAllowedCaller, shakeOthersAllowed;
        if (((Process).platform === "darwin")) {
        } /* if 0x69bd4 */
        /* jump -> 0x69bd5 */
        shakeAllowedCaller = null;
        if (((Process).platform === "darwin")) {
            (Interceptor).replace(LogicEffectData_getShakeScreenOwn, new NativeCallback(function (instance) {
        if (shakeAllowedCaller) {
            if ((!(shakeAllowedCaller).equals((this).returnAddress))) {
                return LogicEffectData_getShakeScreenOwn(instance);
            } /* if 0x69cca */
        } /* if 0x69cca */
        if ((((Config).Config).config).DisableShake) {
            return 0;
        } /* if 0x69ce0 */
        return LogicEffectData_getShakeScreenOwn(instance);
}, "int", ["pointer"]));
        } /* if 0x69c11 */
        if (((Process).platform === "darwin")) {
        } /* if 0x69c37 */
        /* jump -> 0x69c38 */
        shakeOthersAllowed = null;
        if (((Process).platform === "darwin")) {
            (Interceptor).replace(LogicEffectData_getShakeScreenOthers, new NativeCallback(function (instance) {
        if (shakeOthersAllowed) {
            if ((!(shakeOthersAllowed).equals((this).returnAddress))) {
                return LogicEffectData_getShakeScreenOthers(instance);
            } /* if 0x69d34 */
        } /* if 0x69d34 */
        if ((((Config).Config).config).DisableShake) {
            return 0;
        } /* if 0x69d4a */
        return LogicEffectData_getShakeScreenOthers(instance);
}, "int", ["pointer"]));
            return;
        } /* if 0x69c74 (open) */
}
        }
        LogicEffectData = layerArrayOffset = LogicEffectData;
        exports.LogicEffectData = LogicEffectData;
        return;
};

// --------------------- MODULE 8040 — LogicEmoteData ---------------------


// ============================================================ //
// webpack module 8040  —  LogicEmoteData
// exports: LogicEmoteData
// deps: 6794 (LogicData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8040] = function LogicEmoteData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, Libg, LogicEmoteData_sm_columnIndexIconSWF, LogicEmoteData_sm_columnIndexIconExportName, LogicEmoteData, <class_fields_init>, LogicEmoteData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicEmoteData = undefined;
        LogicData = __webpack_require__(6794);
        Libg = __webpack_require__(9878);
        LogicEmoteData_sm_columnIndexIconSWF = ((Libg).Libg).offset(19147860, 0);
        LogicEmoteData_sm_columnIndexIconExportName = ((Libg).Libg).offset(19147864, 0);
        static getRarity () {
        return (this).getStringValueAt(10);
};
        static getIconSWF () {
        return (this).getStringValueAt((LogicEmoteData_sm_columnIndexIconSWF).readInt());
};
        static getIconExportName () {
        return (this).getStringValueAt((LogicEmoteData_sm_columnIndexIconExportName).readInt());
};
        <class_fields_init> = undefined;
        LogicEmoteData;
        class LogicEmoteData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x69f85 */
        return this;
}
        }
        LogicEmoteData = v8 = LogicEmoteData;
        exports.LogicEmoteData = LogicEmoteData;
        return;
};

// --------------------- MODULE 7269 — LogicFameTierData ---------------------


// ============================================================ //
// webpack module 7269  —  LogicFameTierData
// exports: LogicFameTierData
// deps: 6794 (LogicData), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7269] = function LogicFameTierData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, Libg, StringObject, LogicFameTierData_getIconStarsExportName, LogicFameTierData, <class_fields_init>, LogicFameTierData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicFameTierData = undefined;
        LogicData = __webpack_require__(6794);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        LogicFameTierData_getIconStarsExportName = new NativeFunction(((Libg).Libg).offset(14843820, 0), "pointer", ["pointer"]);
        static get iconStarsExportName () {
        return ((StringObject).StringObject).read(LogicFameTierData_getIconStarsExportName((this).instance));
};
        <class_fields_init> = undefined;
        LogicFameTierData;
        class LogicFameTierData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6a10b */
        return this;
}
        }
        LogicFameTierData = v8 = LogicFameTierData;
        exports.LogicFameTierData = LogicFameTierData;
        return;
};

// --------------------- MODULE 9822 — LogicGameModeVariationData ---------------------


// ============================================================ //
// webpack module 9822  —  LogicGameModeVariationData
// exports: LogicGameModeVariationData
// deps: 1588 (LogicMemory), 6794 (LogicData)
// ============================================================ //

__webpack_modules__[9822] = function LogicGameModeVariationData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicData, variationOffset, isEnabledFlagOffset, hasBannerOverrideFirstFieldOffset, hasBannerOverrideSecondFieldOffset, itemClaimDelaySecondsOffset, isPlayedOnVeryLargeMapOffset, spectateAfterGameOverOffset, spectateAfterDeathOffset, isTypeOfBossFightOffset, LogicGameModeVariationData, <class_fields_init>, LogicGameModeVariationData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicGameModeVariationData = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        variationOffset = ((LogicMemory).LogicMemory).offset(84);
        isEnabledFlagOffset = ((LogicMemory).LogicMemory).offset(88);
        hasBannerOverrideFirstFieldOffset = ((LogicMemory).LogicMemory).offset(164);
        hasBannerOverrideSecondFieldOffset = ((LogicMemory).LogicMemory).offset(180);
        itemClaimDelaySecondsOffset = ((LogicMemory).LogicMemory).offset(720);
        isPlayedOnVeryLargeMapOffset = ((LogicMemory).LogicMemory).offset(724);
        spectateAfterGameOverOffset = ((LogicMemory).LogicMemory).offset(725);
        spectateAfterDeathOffset = ((LogicMemory).LogicMemory).offset(726);
        isTypeOfBossFightOffset = ((LogicMemory).LogicMemory).offset(839);
        static getVariation () {
        return (LogicGameModeVariationData).getVariation((this).instance);
};
        static get isEnabled () {
        return (((this).readU8(isEnabledFlagOffset) & 1) === 0);
};
        static get hasBannerOverride () {
        if (((this).readU32(hasBannerOverrideFirstFieldOffset) !== 0)) {
            ((this).readU32(hasBannerOverrideFirstFieldOffset) !== 0);
            return ((this).readU32(hasBannerOverrideSecondFieldOffset) !== 0);
        } /* if 0x6a5b7 (open) */
};
        static get itemClaimDelaySeconds () {
        return (this).readU32(itemClaimDelaySecondsOffset);
};
        static get isClaimStarsWithDelay () {
        return ((this).readS32(itemClaimDelaySecondsOffset) > 0);
};
        static get isPlayedOnVeryLargeMap () {
        return (this).readBoolByte(isPlayedOnVeryLargeMapOffset);
};
        static get spectateAfterGameOver () {
        return (this).readBoolByte(spectateAfterGameOverOffset);
};
        static get spectateAfterDeath () {
        return (this).readBoolByte(spectateAfterDeathOffset);
};
        static get isTypeOfBossFight () {
        return (this).readBoolByte(isTypeOfBossFightOffset);
};
        <class_fields_init> = undefined;
        LogicGameModeVariationData;
        class LogicGameModeVariationData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6a72f */
        return this;
}
            getVariation (gameModeVariation) {
        return ((gameModeVariation).add(variationOffset)).readU32();
}
        }
        LogicGameModeVariationData = spectateAfterGameOverOffset = LogicGameModeVariationData;
        exports.LogicGameModeVariationData = LogicGameModeVariationData;
        return;
};

// --------------------- MODULE 8899 — LogicItemData ---------------------


// ============================================================ //
// webpack module 8899  —  LogicItemData
// exports: LogicItemData
// ============================================================ //

__webpack_modules__[8899] = function LogicItemData_factory(__unused_webpack_module, exports) {
    var LogicItemData, <class_fields_init>, LogicItemData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicItemData = undefined;
        <class_fields_init> = undefined;
        LogicItemData;
        class LogicItemData {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x627a2 (open) */
}
        }
        LogicItemData = LogicItemData = LogicItemData;
        exports.LogicItemData = LogicItemData;
        LogicItemData.allocationSize = 320;
        return;
};

// --------------------- MODULE 4325 — LogicLocationData ---------------------


// ============================================================ //
// webpack module 4325  —  LogicLocationData
// exports: LogicLocationData, gameModeVariationOffset, locationThemeOffset
// deps: 699 (FileManager), 944 (LogicLocationThemeData), 1588 (LogicMemory), 4009 (Config), 4974 (Breadcrumbs), 6139 (LogicDataTables), 6794 (LogicData), 9822 (LogicGameModeVariationData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4325] = function LogicLocationData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, LogicMemory, LogicData, LogicDataTables, LogicGameModeVariationData, LogicLocationThemeData, FileManager, Breadcrumbs, LogicLocationData_createReferences, LogicLocationData_sm_columnIndexMap, LogicLocationData_sm_columnIndexSupportingCampaignGround, LogicLocationData_sm_columnIndexBannerOverrideSWF, LogicLocationData_sm_columnIndexBannerOverrideExportName, LogicLocationData_sm_columnIndexDisabled, LogicLocationData_sm_columnIndexCommunityCredit, LogicLocationData_sm_columnIndexTrainingGroundsEnabled, LogicLocationData, <class_fields_init>, LogicLocationData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.locationThemeOffset = undefined;
        undefined.gameModeVariationOffset = exports;
        exports.LogicLocationData = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        LogicDataTables = __webpack_require__(6139);
        LogicGameModeVariationData = __webpack_require__(9822);
        LogicLocationThemeData = __webpack_require__(944);
        FileManager = __webpack_require__(699);
        Breadcrumbs = __webpack_require__(4974);
        LogicLocationData_createReferences = new NativeFunction(((Libg).Libg).offset(14895260, 0), "void", ["pointer"]);
        LogicLocationData_sm_columnIndexMap = ((Libg).Libg).offset(19149116, 0);
        LogicLocationData_sm_columnIndexSupportingCampaignGround = ((Libg).Libg).offset(19149124, 0);
        LogicLocationData_sm_columnIndexBannerOverrideSWF = ((Libg).Libg).offset(19149128, 0);
        LogicLocationData_sm_columnIndexBannerOverrideExportName = ((Libg).Libg).offset(19149132, 0);
        LogicLocationData_sm_columnIndexDisabled = ((Libg).Libg).offset(19149136, 0);
        LogicLocationData_sm_columnIndexCommunityCredit = ((Libg).Libg).offset(19149140, 0);
        LogicLocationData_sm_columnIndexTrainingGroundsEnabled = ((Libg).Libg).offset(19149148, 0);
        exports.locationThemeOffset = ((LogicMemory).LogicMemory).offset(88);
        exports.gameModeVariationOffset = ((LogicMemory).LogicMemory).offset(96);
        static get gameModeVariation () {
        return new (LogicGameModeVariationData).LogicGameModeVariationData((this).readPointer((exports).gameModeVariationOffset));
};
        static set gameModeVariation (variation) {
        return;
};
        static get locationTheme () {
        return new (LogicLocationThemeData).LogicLocationThemeData((this).readPointer((exports).locationThemeOffset));
};
        static set locationTheme (theme) {
        return;
};
        static isDisabled () {
        return (this).getBooleanValueAt((LogicLocationData_sm_columnIndexDisabled).readInt());
};
        static getMap () {
        return (this).getStringValueAt((LogicLocationData_sm_columnIndexMap).readInt());
};
        static isSupportingCampaignGround () {
        return (this).getBooleanValueAt((LogicLocationData_sm_columnIndexSupportingCampaignGround).readInt());
};
        static getBannerOverrideSWF () {
        return (this).getStringValueAt((LogicLocationData_sm_columnIndexBannerOverrideSWF).readInt());
};
        static getBannerOverrideExportName () {
        return (this).getStringValueAt((LogicLocationData_sm_columnIndexBannerOverrideExportName).readInt());
};
        static getCommunityCredit () {
        return (this).getStringValueAt((LogicLocationData_sm_columnIndexCommunityCredit).readInt());
};
        static isTrainingGroundsEnabled () {
        return (this).getBooleanValueAt((LogicLocationData_sm_columnIndexTrainingGroundsEnabled).readInt());
};
        <class_fields_init> = undefined;
        LogicLocationData;
        class LogicLocationData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6c190 */
        return this;
}
            applyDefaultEnvironments () {
    var locationTable, context, count, i, location;
        if ((!(((Config).Config).config).DefaultEnvironments)) {
            return;
        } /* if 0x6b8ce */
        locationTable = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Locations);
        context = { firstThemePerGroup: (LogicLocationData).collectFirstThemePerSizeGroup(locationTable), hardcodedCache: new Map(), softCache: new Map() };
        count = (locationTable).getItemCount();
        i = 0;
        while ((i < count)) {
            location = (locationTable).getItemAt(i);
            if (!(!location)) {
                (LogicLocationData).applyDefaultThemeFor(location, context);
            } /* if 0x6b967 */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0x6b971 (open) */
}
            themeSizeGroupKey (variationId, width, height) {
        return ("").concat(variationId, "_", width, "_", height);
}
            collectFirstThemePerSizeGroup (locationTable) {
    var result, count, i, location, theme, key;
        result = new Map();
        count = (locationTable).getItemCount();
        i = 0;
        while ((i < count)) {
            location = (locationTable).getItemAt(i);
            if (!(!location)) {
                theme = (location).locationTheme;
                if (!(!(theme).isAvailableForOverride())) {
                    key = (LogicLocationData).themeSizeGroupKey(((location).gameModeVariation).getVariation(), (theme).getMapWidth(), (theme).getMapHeight());
                    if ((!(result).has(key))) {
                    } /* if 0x6baa7 */
                } /* if 0x6baa7 */
            } /* if 0x6baa7 */
            i = ((i) + 1);
            (i++);
            return result;
        } /* while 0x6bab5 (open) */
}
            applyDefaultThemeFor (location, context) {
    var currentTheme, chosen;
        currentTheme = (location).locationTheme;
        if (((currentTheme).instance).isNull()) {
            return;
        } /* if 0x6bb0f */
        chosen = (LogicLocationData).chooseDefaultThemeFor(location, currentTheme, context);
        if (!(!chosen)) {
            if (((chosen).getGlobalID() === (currentTheme).getGlobalID())) {
                return;
            } /* if 0x6bb42 */
        } /* if 0x6bb3f */
        location.locationTheme = chosen;
        return;
}
            chooseDefaultThemeFor (location, currentTheme, context) {
    var variationId, targetWidth, targetHeight, hardcoded, soft, fallbackKey;
        variationId = ((location).gameModeVariation).getVariation();
        targetWidth = (currentTheme).getMapWidth();
        targetHeight = (currentTheme).getMapHeight();
        hardcoded = (LogicLocationData).resolveHardcodedThemeForSize(variationId, targetWidth, targetHeight, (context).hardcodedCache);
        if (hardcoded) {
            return hardcoded;
        } /* if 0x6bbf0 */
        soft = (LogicLocationData).resolveSoftOverrideForVariation(variationId, (context).softCache);
        if (soft) {
            return soft;
        } /* if 0x6bc0f */
        fallbackKey = (LogicLocationData).themeSizeGroupKey(variationId, targetWidth, targetHeight);
        if (((((context).firstThemePerGroup)["get"](fallbackKey)) == null)) {
            return null;
        } /* if 0x6bc3c (open) */
}
            resolveHardcodedThemeForSize (variationId, targetWidth, targetHeight, cache) {
    var cacheKey, cached, rule, candidate, resolved;
        cacheKey = (LogicLocationData).themeSizeGroupKey(variationId, targetWidth, targetHeight);
        cached = (cache)["get"](cacheKey);
        if ((cached !== undefined)) {
            return cached;
        } /* if 0x6bcc9 */
        rule = ((LogicLocationData).DEFAULT_THEME_RULES).find(function (r) {
        if (((r).variation === variationId)) {
            ((r).variation === variationId);
            if (((r).width === targetWidth)) {
                ((r).width === targetWidth);
                return ((r).height === targetHeight);
            } /* if 0x6bd80 (open) */
        } /* if 0x6bd80 (open) */
});
        if ((!rule)) {
            return null;
        } /* if 0x6bcf2 */
        candidate = ((LogicDataTables).LogicDataTables).getLocationThemeByName((rule).theme);
        resolved = (LogicLocationData).candidateThemeMatchingSize(candidate, targetWidth, targetHeight);
        return resolved;
}
            candidateThemeMatchingSize (candidate, targetWidth, targetHeight) {
        if (!(!candidate)) {
            if ((!(candidate).isAvailableForOverride())) {
                return null;
            } /* if 0x6bdb5 */
        } /* if 0x6bdb1 */
        if (!((candidate).getMapWidth() !== targetWidth)) {
            ((candidate).getMapWidth() !== targetWidth);
            if (((candidate).getMapHeight() !== targetHeight)) {
                return null;
            } /* if 0x6bdd3 */
        } /* if 0x6bdcf */
        return candidate;
}
            resolveSoftOverrideForVariation (variationId, cache) {
    var cached, name, candidate, resolved;
        cached = (cache)["get"](variationId);
        if ((cached !== undefined)) {
            return cached;
        } /* if 0x6be38 */
        name = (LogicLocationData).DEFAULT_THEME_BY_VARIATION_SOFT[variationId];
        if ((!name)) {
            return null;
        } /* if 0x6be57 */
        candidate = ((LogicDataTables).LogicDataTables).getLocationThemeByName(name);
        if (((candidate) == null)) {
        } /* if 0x6be76 */
        /* jump -> 0x6be7e */
        if ((undefined).isAvailableForOverride()) {
        } /* if 0x6be85 */
        /* jump -> 0x6be86 */
        resolved = null;
        return resolved;
}
            patch () {
        return;
}
            applyConfiguredEnvironments () {
    var locations, removed, index, location;
        ((LogicLocationThemeData).LogicLocationThemeData).clearAvailabilityCache();
        locations = ((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).Locations);
        removed = false;
        index = 0;
        while ((index < (locations).getItemCount())) {
            location = (locations).getItemAt(index);
            if (location) {
                if ((this).applyManualOverrideIfConfigured((location).instance)) {
                    removed = true;
                } /* if 0x6bfbe */
            } /* if 0x6bfbe */
            index = ((index) + 1);
            (index++);
        } /* while 0x6bfc8 */
        if (removed) {
            ((FileManager).FileManager).updateConfigFile();
        } /* if 0x6bfde */
        return;
}
            applyManualOverrideIfConfigured (logicLocationData) {
    var locationName, location, themeName, theme, canApplyOverride;
        locationName = ((LogicData).LogicData).getName(logicLocationData);
        if ((!(locationName in (((Config).Config).config).LocationThemeOverrides))) {
            return false;
        } /* if 0x6c075 */
        location = new LogicLocationData(logicLocationData);
        themeName = (((Config).Config).config).LocationThemeOverrides[locationName];
        theme = ((LogicDataTables).LogicDataTables).getLocationThemeByName(themeName);
        if ((theme !== null)) {
            (theme !== null);
            if ((!(((location).locationTheme).instance).isNull())) {
                (!(((location).locationTheme).instance).isNull());
                canApplyOverride = (theme).isAvailableForOverride();
            } /* if 0x6c0d7 */
        } /* if 0x6c0d7 */
        if (canApplyOverride) {
            location.locationTheme = theme;
            return false;
        } /* if 0x6c0eb */
        /* delete  */
        ((Breadcrumbs).Breadcrumbs).push(("Location override rejected: ").concat(locationName, " -> ", themeName));
        return true;
}
        }
        LogicLocationData = Breadcrumbs = LogicLocationData;
        exports.LogicLocationData = LogicLocationData;
        LogicLocationData.DEFAULT_THEME_BY_VARIATION_SOFT = { 0: "Mine", 2: "Default", 3: "Default", 5: "Grassfield", 6: "DefaultShowdown", 7: "BBArena", 8: "Mortuary", 9: "DefaultShowdown", 10: "MadEvilManor", 17: "Arcade", 20: "Rooftop", 22: "BBArena", 23: "BBArena", 24: "Default", 25: "Default", 26: "ScrapyardShowdown", 31: "SBGrassfield", 32: "SBGrassfield", 33: "SBGrassfield", 35: "SBGrassfield", 37: "Hub", 38: "DefaultShowdown", 45: "AirHockey", 46: "Mine", 47: "ScrapyardShowdown", 48: "IslandShowdown", 49: "Grassfield", 50: "Rooftop", 52: "BBArena", 53: "AirHockey", 55: "BBArena", 56: "Mortuary", 57: "AirHockey", 58: "Pyramidquest", 60: "KatanaKingdom", 61: "MadEvilManor", 63: "Hub", 64: "BandStand", 65: "Mine", 66: "BBArena", 68: "Hub", 70: "Default", 72: "DefaultShowdown", 75: "DefaultShowdown", 76: "Grassfield", 77: "Pyramidquest", 78: "DefaultShowdown", 79: "AirHockey" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][32] = { variation: 48, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][33] = { variation: 49, width: 21, height: 33, theme: "Grassfield" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][34] = { variation: 50, width: 21, height: 33, theme: "Rooftop" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][35] = { variation: 52, width: 21, height: 33, theme: "BBArena" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][36] = { variation: 53, width: 21, height: 33, theme: "AirHockey" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][37] = { variation: 55, width: 21, height: 33, theme: "BBArena" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][38] = { variation: 56, width: 21, height: 33, theme: "Mortuary" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][39] = { variation: 57, width: 21, height: 33, theme: "AirHockey" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][40] = { variation: 58, width: 21, height: 33, theme: "Pyramidquest" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][41] = { variation: 59, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][42] = { variation: 60, width: 21, height: 33, theme: "KatanaKingdom" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][43] = { variation: 60, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][44] = { variation: 61, width: 21, height: 33, theme: "MadEvilManor" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][45] = { variation: 61, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][46] = { variation: 62, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][47] = { variation: 63, width: 21, height: 33, theme: "Hub" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][48] = { variation: 64, width: 21, height: 33, theme: "BandStand" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][49] = { variation: 64, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][50] = { variation: 65, width: 21, height: 33, theme: "Mine" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][51] = { variation: 65, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][52] = { variation: 66, width: 21, height: 33, theme: "BBArena" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][53] = { variation: 66, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][54] = { variation: 67, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][55] = { variation: 68, width: 21, height: 33, theme: "Hub" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][56] = { variation: 69, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][57] = { variation: 70, width: 21, height: 33, theme: "Default" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][58] = { variation: 71, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][59] = { variation: 72, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][60] = { variation: 73, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][61] = { variation: 74, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][62] = { variation: 75, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][63] = { variation: 76, width: 21, height: 33, theme: "Grassfield" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][64] = { variation: 77, width: 21, height: 33, theme: "Pyramidquest" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][65] = { variation: 77, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][66] = { variation: 78, width: 60, height: 60, theme: "DefaultShowdown" };
        [...{ variation: 48, width: 21, height: 33, theme: "IslandShowdown" }][67] = { variation: 79, width: 21, height: 33, theme: "AirHockey" };
        return;
};

// --------------------- MODULE 944 — LogicLocationThemeData ---------------------


// ============================================================ //
// webpack module 944  —  LogicLocationThemeData
// exports: LogicLocationThemeData
// deps: 1588 (LogicMemory), 3380 (Logcat), 4009 (Config), 4974 (Breadcrumbs), 5212 (ResourceManager), 6794 (LogicData), 7535 (StringObject), 8944 (EffectRegistry), 9878 (Libg)
// ============================================================ //

__webpack_modules__[944] = function LogicLocationThemeData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, StringObject, LogicData, EffectRegistry, ResourceManager, Breadcrumbs, Logcat, LogicMemory, LogicLocationThemeData_getBgFrameName, LogicLocationThemeData_getFogVFXExportName, LogicLocationThemeData_sm_columnIndexMapWidth, LogicLocationThemeData_sm_columnIndexMapHeight, LogicLocationThemeData_sm_columnIndexDisabled, LogicLocationThemeData_modelColumns, CSVRow_getArraySize, CSVRow_getArrayValue, csvRowOffset, LogicLocationThemeData, <class_fields_init>, LogicLocationThemeData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicLocationThemeData = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        StringObject = __webpack_require__(7535);
        LogicData = __webpack_require__(6794);
        EffectRegistry = __webpack_require__(8944);
        ResourceManager = __webpack_require__(5212);
        Breadcrumbs = __webpack_require__(4974);
        Logcat = __webpack_require__(3380);
        LogicMemory = __webpack_require__(1588);
        LogicLocationThemeData_getBgFrameName = ((Libg).Libg).offset(14905624, 0);
        LogicLocationThemeData_getFogVFXExportName = ((Libg).Libg).offset(14905656, 0);
        LogicLocationThemeData_sm_columnIndexMapWidth = ((Libg).Libg).offset(19149544, 0);
        LogicLocationThemeData_sm_columnIndexMapHeight = ((Libg).Libg).offset(19149548, 0);
        LogicLocationThemeData_sm_columnIndexDisabled = ((Libg).Libg).offset(19149212, 0);
        LogicLocationThemeData_modelColumns = [((Libg).Libg).offset(19149236, 0), ((Libg).Libg).offset(19149240, 0), ((Libg).Libg).offset(19149244, 0), ((Libg).Libg).offset(19149248, 0)];
        CSVRow_getArraySize = new NativeFunction(((Libg).Libg).offset(5453960, 0), "int", ["pointer", "int"]);
        CSVRow_getArrayValue = new NativeFunction(((Libg).Libg).offset(5453720, 0), "pointer", ["pointer", "int", "int"]);
        csvRowOffset = ((LogicMemory).LogicMemory).offset(8);
        static isAvailableForOverride () {
    var recheck, recheck, key, cached, csvRow, columnAddress, column, count, row, value, specification, path, message;
        message = this;
        if (((recheck) === undefined)) {
            recheck = recheck = false;
        } /* if 0x6c593 */
        if (!((message).instance).isNull()) {
            ((message).instance).isNull();
            if (!((LogicLocationThemeData_sm_columnIndexDisabled).readInt() < 0)) {
                ((LogicLocationThemeData_sm_columnIndexDisabled).readInt() < 0);
                if ((message).isDisabled()) {
                    return false;
                } /* if 0x6c5cf */
            } /* if 0x6c5cb */
        } /* if 0x6c5cb */
        recheck = ((message).instance).toString();
        key = ((LogicLocationThemeData).availability)["get"](recheck);
        if ((!recheck)) {
            if ((key !== undefined)) {
                return key;
            } /* if 0x6c606 */
        } /* if 0x6c606 */
        cached = (((message).instance).add(csvRowOffset)).readPointer();
        /* jump -> 0x6c76a */
        csvRow = /*iter*/ LogicLocationThemeData_modelColumns;
        columnAddress = (csvRow).readInt();
        if ((columnAddress < 0)) {
            return undefined;
        } /* if 0x6c64d */
        column = CSVRow_getArraySize(cached, columnAddress);
        count = 0;
        while ((count < column)) {
            row = CSVRow_getArrayValue(cached, columnAddress, count);
            if ((row).isNull()) {
                return undefined;
            } /* if 0x6c693 */
            value = ((StringObject).StringObject).read(row);
            /* jump -> 0x6c756 */
            specification = /*iter*/ (((value).split("+")).map(function (path) {
        return (path).trim();
})).filter(function (path) {
        return (path.length > 0);
});
            if (!((ResourceManager).ResourceManager).doesFileExist(specification)) {
                path = ("Location theme ").concat((message).getName(), ": missing model ", specification);
                ((Breadcrumbs).Breadcrumbs).push(path);
                ((Logcat).Logcat).logError(path);
                return undefined;
            } /* if 0x6c755 */
            } while (!path = (((value).split("+")).map(function (path) {
        return (path).trim();
})).filter(function (path) {
        return (path.length > 0);
}));
            specification = row = value = count = columnAddress = column = LogicLocationThemeData_modelColumns;
            count = ((count) + 1);
            (count++);
            } while (!undefined);
        } /* while 0x6c76c */
        return true;
};
        static getMapWidth () {
        return (this).getIntValueAt((LogicLocationThemeData_sm_columnIndexMapWidth).readInt());
};
        static getMapHeight () {
        return (this).getIntValueAt((LogicLocationThemeData_sm_columnIndexMapHeight).readInt());
};
        static isDisabled () {
        return (this).getBooleanValueAt((LogicLocationThemeData_sm_columnIndexDisabled).readInt());
};
        <class_fields_init> = undefined;
        LogicLocationThemeData;
        class LogicLocationThemeData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6caba */
        return this;
}
            clearAvailabilityCache () {
        return;
}
            getCustomFog () {
    var name, cached, namePointer;
        name = (((Config).Config).config).FogType;
        if ((name === "")) {
            return NULL;
        } /* if 0x6c8cb */
        cached = ((LogicLocationThemeData).fogStrings)["get"](name);
        if (cached) {
            return cached;
        } /* if 0x6c8e8 */
        if ((!((EffectRegistry).EffectRegistry).hasEffect(name))) {
            return NULL;
        } /* if 0x6c904 */
        namePointer = ((StringObject).StringObject).create(name);
        return namePointer;
}
            patch () {
        (Interceptor).attach(LogicLocationThemeData_getBgFrameName, { onLeave (retval) {
        if (((LogicLocationThemeData).getCustomFog()).isNull()) {
            return;
        } /* if 0x6c9d2 */
        if (((LogicLocationThemeData).fogFrameName).isNull()) {
            LogicLocationThemeData.fogFrameName = ((StringObject).StringObject).create("1_lab");
        } /* if 0x6ca01 */
        return;
} });
        return;
}
        }
        LogicLocationThemeData = LogicMemory = LogicLocationThemeData;
        exports.LogicLocationThemeData = LogicLocationThemeData;
        LogicLocationThemeData.fogStrings = new Map();
        LogicLocationThemeData.fogFrameName = NULL;
        LogicLocationThemeData.availability = new Map();
        return;
};

// --------------------- MODULE 4629 — LogicPlayerTitleData ---------------------


// ============================================================ //
// webpack module 4629  —  LogicPlayerTitleData
// exports: LogicPlayerTitleData
// deps: 1588 (LogicMemory), 1978 (Libc), 6794 (LogicData), 7535 (StringObject), 7559 (LogicColorGradientData)
// ============================================================ //

__webpack_modules__[4629] = function LogicPlayerTitleData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, LogicMemory, StringObject, LogicColorGradientData, LogicData, titleTidOffset, gradientOffset, LogicPlayerTitleData, <class_fields_init>, LogicPlayerTitleData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicPlayerTitleData = undefined;
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        LogicColorGradientData = __webpack_require__(7559);
        LogicData = __webpack_require__(6794);
        titleTidOffset = ((LogicMemory).LogicMemory).offset(88);
        gradientOffset = ((LogicMemory).LogicMemory).offset(104);
        static get titleTid () {
        return (this).readString(titleTidOffset);
};
        static set titleTid (value) {
        return;
};
        static get gradient () {
        return new (LogicColorGradientData).LogicColorGradientData((this).readPointer(gradientOffset));
};
        static set gradient (gradient) {
        return;
};
        static clone () {
    var memory;
        memory = ((Libc).Libc).malloc((LogicPlayerTitleData).allocSize);
        (Memory).copy(memory, (this).instance, (LogicPlayerTitleData).allocSize);
        return new LogicPlayerTitleData(memory);
};
        <class_fields_init> = undefined;
        LogicPlayerTitleData;
        class LogicPlayerTitleData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6ceb3 */
        return this;
}
        }
        LogicPlayerTitleData = <class_fields_init> = LogicPlayerTitleData;
        exports.LogicPlayerTitleData = LogicPlayerTitleData;
        LogicPlayerTitleData.allocSize = 120;
        return;
};

// --------------------- MODULE 7479 — LogicProjectileData ---------------------


// ============================================================ //
// webpack module 7479  —  LogicProjectileData
// exports: LogicProjectileData
// ============================================================ //

__webpack_modules__[7479] = function LogicProjectileData_factory(__unused_webpack_module, exports) {
    var LogicProjectileData, <class_fields_init>, LogicProjectileData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicProjectileData = undefined;
        <class_fields_init> = undefined;
        LogicProjectileData;
        class LogicProjectileData {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x63dfc (open) */
}
        }
        LogicProjectileData = LogicProjectileData = LogicProjectileData;
        exports.LogicProjectileData = LogicProjectileData;
        LogicProjectileData.allocationSize = 752;
        LogicProjectileData.fields = { IgnoreLevelBorder: 628, IsBouncing: 474, PreExplosionTimeMs: 296, GetRendering: 276, SpecialTrailEffect: 192, SpecialVisualState: 580, TravelType: 608, TriggerWithDelayMs: 312, UniqueProperty: 652 };
        return;
};

// --------------------- MODULE 3311 — LogicRandomRewardContainerData ---------------------


// ============================================================ //
// webpack module 3311  —  LogicRandomRewardContainerData
// exports: LogicRandomRewardContainerData
// deps: 1588 (LogicMemory), 6794 (LogicData)
// ============================================================ //

__webpack_modules__[3311] = function LogicRandomRewardContainerData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicData, multiDropCountOffset, visualTypeOffset, groupTypeOffset, collabIdOffset, LogicRandomRewardContainerData, <class_fields_init>, LogicRandomRewardContainerData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicRandomRewardContainerData = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        multiDropCountOffset = ((LogicMemory).LogicMemory).offset(96);
        visualTypeOffset = ((LogicMemory).LogicMemory).offset(160, 152);
        groupTypeOffset = ((LogicMemory).LogicMemory).offset(328, 320);
        collabIdOffset = ((LogicMemory).LogicMemory).offset(336, 328);
        static get multiDropCount () {
        return (this).readS32(multiDropCountOffset);
};
        static get visualType () {
        return (this).readS32(visualTypeOffset);
};
        static set visualType (value) {
        return;
};
        static get groupType () {
        return (this).readS32(groupTypeOffset);
};
        static get collabId () {
        return (this).readS32(collabIdOffset);
};
        <class_fields_init> = undefined;
        LogicRandomRewardContainerData;
        class LogicRandomRewardContainerData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6d139 */
        return this;
}
        }
        LogicRandomRewardContainerData = LogicRandomRewardContainerData = LogicRandomRewardContainerData;
        exports.LogicRandomRewardContainerData = LogicRandomRewardContainerData;
        return;
};

// --------------------- MODULE 2202 — LogicRandomRewardData ---------------------


// ============================================================ //
// webpack module 2202  —  LogicRandomRewardData
// exports: LogicRandomRewardData
// deps: 6794 (LogicData)
// ============================================================ //

__webpack_modules__[2202] = function LogicRandomRewardData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicRandomRewardData, <class_fields_init>, LogicRandomRewardData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicRandomRewardData = undefined;
        LogicData = __webpack_require__(6794);
        <class_fields_init> = undefined;
        LogicRandomRewardData;
        class LogicRandomRewardData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6d224 */
        return this;
}
        }
        LogicRandomRewardData = LogicRandomRewardData = LogicRandomRewardData;
        exports.LogicRandomRewardData = LogicRandomRewardData;
        return;
};

// --------------------- MODULE 2118 — LogicResourceData ---------------------


// ============================================================ //
// webpack module 2118  —  LogicResourceData
// exports: LogicResourceData
// deps: 6794 (LogicData)
// ============================================================ //

__webpack_modules__[2118] = function LogicResourceData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicResourceData, <class_fields_init>, LogicResourceData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicResourceData = undefined;
        LogicData = __webpack_require__(6794);
        <class_fields_init> = undefined;
        LogicResourceData;
        class LogicResourceData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6d30f */
        return this;
}
        }
        LogicResourceData = LogicResourceData = LogicResourceData;
        exports.LogicResourceData = LogicResourceData;
        return;
};

// --------------------- MODULE 3537 — LogicSkillData ---------------------


// ============================================================ //
// webpack module 3537  —  LogicSkillData
// exports: LogicSkillData
// deps: 1588 (LogicMemory), 2567 (LogicEffectData), 4009 (Config), 6794 (LogicData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3537] = function LogicSkillData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, LogicMemory, LogicData, LogicEffectData, LogicSkillData_getCastingRangeTilesHookTarget, LogicSkillData_sm_columnIndexCastingRange, castingEffectOffset, attackEffectOffset, LogicSkillData, <class_fields_init>, LogicSkillData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicSkillData = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        LogicData = __webpack_require__(6794);
        LogicEffectData = __webpack_require__(2567);
        LogicSkillData_getCastingRangeTilesHookTarget = ((Libg).Libg).offset(15038984, 0);
        LogicSkillData_sm_columnIndexCastingRange = ((Libg).Libg).offset(19151960, 0);
        castingEffectOffset = ((LogicMemory).LogicMemory).offset(304);
        attackEffectOffset = ((LogicMemory).LogicMemory).offset(320);
        static getAttackEffect () {
        return (this).readWrappedPointer(attackEffectOffset, function (pointer) {
        return new (LogicEffectData).LogicEffectData(pointer);
});
};
        static getCastingEffect () {
        return (this).readWrappedPointer(castingEffectOffset, function (pointer) {
        return new (LogicEffectData).LogicEffectData(pointer);
});
};
        static getCastingRangeTiles () {
        return (this).getIntValueAt((LogicSkillData_sm_columnIndexCastingRange).readInt());
};
        <class_fields_init> = undefined;
        LogicSkillData;
        class LogicSkillData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6d6e5 */
        return this;
}
            getCastingRangeTiles (skillDataPointer) {
        return ((LogicData).LogicData).getIntValueAt(skillDataPointer, (LogicSkillData_sm_columnIndexCastingRange).readInt());
}
            patch () {
        return;
}
        }
        LogicSkillData = attackEffectOffset = LogicSkillData;
        exports.LogicSkillData = LogicSkillData;
        return;
};

// --------------------- MODULE 3555 — LogicSkinData ---------------------


// ============================================================ //
// webpack module 3555  —  LogicSkinData
// exports: LogicSkinData
// deps: 1588 (LogicMemory), 1978 (Libc), 5257 (LogicSkinConfData), 6794 (LogicData)
// ============================================================ //

__webpack_modules__[3555] = function LogicSkinData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicSkinConfData, LogicMemory, Libc, skinConfOffset, petSkinOffset, petSkin2Offset, allocSize, LogicSkinData, <class_fields_init>, LogicSkinData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicSkinData = undefined;
        LogicData = __webpack_require__(6794);
        LogicSkinConfData = __webpack_require__(5257);
        LogicMemory = __webpack_require__(1588);
        Libc = __webpack_require__(1978);
        skinConfOffset = ((LogicMemory).LogicMemory).offset(152);
        petSkinOffset = ((LogicMemory).LogicMemory).offset(160);
        petSkin2Offset = ((LogicMemory).LogicMemory).offset(168);
        allocSize = ((LogicMemory).LogicMemory).offset(248);
        static getCharacter () {
        if ((((this).getConf()) == null)) {
            (this).getConf();
            return undefined;
        } /* if 0x6dc1c */
        return (<underflow>).getCharacter();
};
        static getConf () {
        return (this).readWrappedPointer(skinConfOffset, function (pointer) {
        return new (LogicSkinConfData).LogicSkinConfData(pointer);
});
};
        static setConf (conf) {
        return;
};
        static getRarity () {
        return (this).getStringValueAt(27);
};
        static getPetSkin () {
        return (this).readWrappedPointer(petSkinOffset, function (pointer) {
        return new LogicSkinData(pointer);
});
};
        static getPetSkin2 () {
        return (this).readWrappedPointer(petSkin2Offset, function (pointer) {
        return new LogicSkinData(pointer);
});
};
        static clone () {
    var memory;
        memory = ((Libc).Libc).malloc(allocSize);
        (Memory).copy(memory, (this).instance, allocSize);
        return new LogicSkinData(memory);
};
        <class_fields_init> = undefined;
        LogicSkinData;
        class LogicSkinData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6de30 */
        return this;
}
        }
        LogicSkinData = LogicSkinData = LogicSkinData;
        exports.LogicSkinData = LogicSkinData;
        return;
};

// --------------------- MODULE 5257 — LogicSkinConfData ---------------------


// ============================================================ //
// webpack module 5257  —  LogicSkinConfData
// exports: LogicSkinConfData
// deps: 1588 (LogicMemory), 4009 (Config), 5417 (LogicArrayList), 6794 (LogicData), 7171 (LogicCharacterData), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[5257] = function LogicSkinConfData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicCharacterData, LogicMemory, Libg, StringObject, Config, LogicArrayList, LogicSkinConfData_getKillEffect, characterOffset, LogicSkinConfData, <class_fields_init>, LogicSkinConfData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicSkinConfData = undefined;
        LogicData = __webpack_require__(6794);
        LogicCharacterData = __webpack_require__(7171);
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        Config = __webpack_require__(4009);
        LogicArrayList = __webpack_require__(5417);
        LogicSkinConfData_getKillEffect = ((Libg).Libg).offset(15090760, 0);
        characterOffset = ((LogicMemory).LogicMemory).offset(88);
        static getCharacter () {
    var index, index, charactersArray, charaPtr;
        charaPtr = this;
        if (((index) === undefined)) {
            index = index = 0;
        } /* if 0x6d89e */
        index = new (LogicArrayList).LogicArrayList(((charaPtr).instance).add(characterOffset));
        if (!(index < 0)) {
            if ((index >= (index).getItemsCount())) {
                return null;
            } /* if 0x6d8db */
        } /* if 0x6d8d7 */
        charactersArray = (index).getElement(index);
        if ((charactersArray).isNull()) {
            return null;
        } /* if 0x6d8f7 */
        return new (LogicCharacterData).LogicCharacterData(charactersArray);
};
        <class_fields_init> = undefined;
        LogicSkinConfData;
        class LogicSkinConfData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6da70 */
        return this;
}
            getKillEffectName (name) {
    var stringObject;
        stringObject = ((LogicSkinConfData).killEffectNames)["get"](name);
        if ((!stringObject)) {
            stringObject = ((StringObject).StringObject).create(name);
        } /* if 0x6d977 */
        return stringObject;
}
            patch () {
        return;
}
        }
        LogicSkinConfData = characterOffset = LogicSkinConfData;
        exports.LogicSkinConfData = LogicSkinConfData;
        LogicSkinConfData.killEffectNames = new Map();
        return;
};

// --------------------- MODULE 7493 — LogicSprayData ---------------------


// ============================================================ //
// webpack module 7493  —  LogicSprayData
// exports: LogicSprayData
// deps: 6794 (LogicData)
// ============================================================ //

__webpack_modules__[7493] = function LogicSprayData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicSprayData, <class_fields_init>, LogicSprayData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicSprayData = undefined;
        LogicData = __webpack_require__(6794);
        <class_fields_init> = undefined;
        LogicSprayData;
        class LogicSprayData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6df1b */
        return this;
}
        }
        LogicSprayData = LogicSprayData = LogicSprayData;
        exports.LogicSprayData = LogicSprayData;
        return;
};

// --------------------- MODULE 6253 — LogicThemeData ---------------------


// ============================================================ //
// webpack module 6253  —  LogicThemeData
// exports: LogicThemeData, NO_MUSIC_THEME_ID
// deps: 3503 (LogicMusicData), 4009 (Config), 6139 (LogicDataTables), 6794 (LogicData), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[6253] = function LogicThemeData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicDataTables, StringObject, Config, LogicData, LogicMusicData, LogicThemeData_getExportName, LogicThemeData_getThemeMusic, LogicThemeData_getParticleFileName, LogicThemeData_getParticleExportName, LogicThemeData_getParticleStyle, LogicThemeData_getParticleVariations, LogicThemeData_sm_columnIndexDisabled, LogicThemeData_sm_columnIndexFileName, LogicThemeData_sm_columnIndexLoadingJingle, LogicThemeData_sm_columnIndexLoadingScreen, LogicThemeData_sm_columnIndexCustomButtonName, LogicThemeData, <class_fields_init>, LogicThemeData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.NO_MUSIC_THEME_ID = undefined;
        undefined.LogicThemeData = exports;
        Libg = __webpack_require__(9878);
        LogicDataTables = __webpack_require__(6139);
        StringObject = __webpack_require__(7535);
        Config = __webpack_require__(4009);
        LogicData = __webpack_require__(6794);
        LogicMusicData = __webpack_require__(3503);
        exports.NO_MUSIC_THEME_ID = -2;
        LogicThemeData_getExportName = new NativeFunction(((Libg).Libg).offset(15121752, 0), "pointer", ["pointer"]);
        LogicThemeData_getThemeMusic = new NativeFunction(((Libg).Libg).offset(15121832, 0), "pointer", ["pointer"]);
        LogicThemeData_getParticleFileName = new NativeFunction(((Libg).Libg).offset(15121768, 0), "pointer", ["pointer"]);
        LogicThemeData_getParticleExportName = new NativeFunction(((Libg).Libg).offset(15121784, 0), "pointer", ["pointer"]);
        LogicThemeData_getParticleStyle = new NativeFunction(((Libg).Libg).offset(15121800, 0), "pointer", ["pointer"]);
        LogicThemeData_getParticleVariations = new NativeFunction(((Libg).Libg).offset(15121816, 0), "void", ["pointer"]);
        LogicThemeData_sm_columnIndexDisabled = ((Libg).Libg).offset(19153552, 0);
        LogicThemeData_sm_columnIndexFileName = ((Libg).Libg).offset(19153556, 0);
        LogicThemeData_sm_columnIndexLoadingJingle = ((Libg).Libg).offset(19153584, 0);
        LogicThemeData_sm_columnIndexLoadingScreen = ((Libg).Libg).offset(19153588, 0);
        LogicThemeData_sm_columnIndexCustomButtonName = ((Libg).Libg).offset(19153592, 0);
        static isDisabled () {
        return (this).getBooleanValueAt((LogicThemeData_sm_columnIndexDisabled).readInt());
};
        static getExportName () {
        return ((StringObject).StringObject).read(LogicThemeData_getExportName((this).instance));
};
        static getFileName () {
        return (this).getStringValueAt((LogicThemeData_sm_columnIndexFileName).readInt());
};
        static getLoadingJingle () {
        return (this).getStringValueAt((LogicThemeData_sm_columnIndexLoadingJingle).readInt());
};
        static getLoadingScreen () {
        return (this).getStringValueAt((LogicThemeData_sm_columnIndexLoadingScreen).readInt());
};
        static getCustomButtonName () {
        return (this).getStringValueAt((LogicThemeData_sm_columnIndexCustomButtonName).readInt());
};
        static getThemeMusic () {
    var musicInstance;
        musicInstance = LogicThemeData_getThemeMusic((this).instance);
        return new (LogicMusicData).LogicMusicData(musicInstance);
};
        <class_fields_init> = undefined;
        LogicThemeData;
        class LogicThemeData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6e863 */
        return this;
}
            patch () {
        (Interceptor).replace(LogicThemeData_getThemeMusic, new NativeCallback(function (theme) {
    var themeData;
        if (((Process).platform === "darwin")) {
            if (((((this).returnAddress).sub(((Libg).Libg).libgBeginOffset)).toInt32() != 3681376)) {
                return LogicThemeData_getThemeMusic(theme);
            } /* if 0x6e588 */
        } /* if 0x6e588 */
        if (((((Config).Config).config).ThemeMusicID === (exports).NO_MUSIC_THEME_ID)) {
            return NULL;
        } /* if 0x6e5a9 */
        if (((((Config).Config).config).ThemeMusicID !== -1)) {
            themeData = ((LogicDataTables).LogicDataTables).getDataById((((LogicDataTables).LogicDataTables).table).Themes, (((Config).Config).config).ThemeMusicID);
            if ((!themeData)) {
                return LogicThemeData_getThemeMusic(theme);
            } /* if 0x6e604 */
            return LogicThemeData_getThemeMusic((themeData).instance);
        } /* if 0x6e612 */
        return LogicThemeData_getThemeMusic(theme);
}, "pointer", ["pointer"]));
        (Interceptor).replace(LogicThemeData_getParticleFileName, new NativeCallback(function () {
        return ((StringObject).StringObject).create("sc/ui.sc");
}, "pointer", ["pointer"]));
        (Interceptor).replace(LogicThemeData_getParticleExportName, new NativeCallback(function () {
        if (((((Config).Config).config).ParticleExportName == -1)) {
        } /* if 0x6e692 */
        /* jump -> 0x6e6a4 */
        return ""((((Config).Config).config).ParticleExportName);
}, "pointer", ["pointer"]));
        (Interceptor).replace(LogicThemeData_getParticleVariations, new NativeCallback(function () {
        return;
}, "void", ["pointer"]));
        (Interceptor).replace(LogicThemeData_getParticleStyle, new NativeCallback(function () {
        if (((((Config).Config).config).ParticleStyle == -1)) {
        } /* if 0x6e6fe */
        /* jump -> 0x6e710 */
        return "Snow"((((Config).Config).config).ParticleStyle);
}, "pointer", ["pointer"]));
        return;
}
        }
        LogicThemeData = LogicThemeData_getParticleFileName = LogicThemeData;
        exports.LogicThemeData = LogicThemeData;
        return;
};

// --------------------- MODULE 3503 — LogicMusicData ---------------------


// ============================================================ //
// webpack module 3503  —  LogicMusicData
// exports: LogicMusicData
// deps: 6794 (LogicData)
// ============================================================ //

__webpack_modules__[3503] = function LogicMusicData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicData, LogicMusicData, <class_fields_init>, LogicMusicData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicMusicData = undefined;
        LogicData = __webpack_require__(6794);
        <class_fields_init> = undefined;
        LogicMusicData;
        class LogicMusicData extends <class_fields_init> = (LogicData).LogicData {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x6cbc4 */
        return this;
}
            patch () {
        return;
}
        }
        LogicMusicData = LogicMusicData = LogicMusicData;
        exports.LogicMusicData = LogicMusicData;
        return;
};

// --------------------- MODULE 7542 — MaintenanceModeInfo ---------------------


// ============================================================ //
// webpack module 7542  —  MaintenanceModeInfo
// exports: MaintenanceModeInfo
// deps: 1588 (LogicMemory), 1978 (Libc), 7535 (StringObject)
// ============================================================ //

__webpack_modules__[7542] = function MaintenanceModeInfo_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, LogicMemory, StringObject, ALLOCATION_SIZE, modeOffset, secondsUntilEndOffset, reservedQwordOffset, updateRequiredOffset, messageStringOffset, MaintenanceModeInfo, <class_fields_init>, MaintenanceModeInfo;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.MaintenanceModeInfo = undefined;
        Libc = __webpack_require__(1978);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        ALLOCATION_SIZE = 40;
        modeOffset = ((LogicMemory).LogicMemory).offset(0);
        secondsUntilEndOffset = ((LogicMemory).LogicMemory).offset(4);
        reservedQwordOffset = ((LogicMemory).LogicMemory).offset(8);
        updateRequiredOffset = ((LogicMemory).LogicMemory).offset(16);
        messageStringOffset = ((LogicMemory).LogicMemory).offset(24);
        <class_fields_init> = undefined;
        MaintenanceModeInfo;
        class MaintenanceModeInfo {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x3fdd9 */
        this.instance = instance;
        return;
}
            alloc (mode, secondsUntilEnd, updateRequired, message) {
    var buffer;
        buffer = ((Libc).Libc).calloc(ALLOCATION_SIZE, 1);
        ((buffer).add(modeOffset)).writeInt(mode);
        ((buffer).add(secondsUntilEndOffset)).writeInt(secondsUntilEnd);
        ((buffer).add(reservedQwordOffset)).writePointer(NULL);
        if (updateRequired) {
        } /* if 0x3feaf */
        /* jump -> 0x3feb0 */
        ((StringObject).StringObject).create(message, (buffer).add(messageStringOffset));
        return new MaintenanceModeInfo(buffer);
}
        }
        MaintenanceModeInfo = messageStringOffset = MaintenanceModeInfo;
        exports.MaintenanceModeInfo = MaintenanceModeInfo;
        return;
};

// --------------------- MODULE 733 — LocationInfo ---------------------


// ============================================================ //
// webpack module 733  —  LocationInfo
// exports: LocationInfo
// deps: 4325 (LogicLocationData), 6139 (LogicDataTables), 9878 (Libg)
// ============================================================ //

__webpack_modules__[733] = function LocationInfo_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicLocationData, LogicDataTables, LocationInfo_getLocationThemeIndex, LocationInfo, <class_fields_init>, LocationInfo;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LocationInfo = undefined;
        Libg = __webpack_require__(9878);
        LogicLocationData = __webpack_require__(4325);
        LogicDataTables = __webpack_require__(6139);
        LocationInfo_getLocationThemeIndex = new NativeFunction(((Libg).Libg).offset(10291924, 0), "int", ["pointer"]);
        static get locationData () {
        return new (LogicLocationData).LogicLocationData(((this)._instance).readPointer());
};
        static getLocationThemeData () {
    var themeIndex;
        themeIndex = LocationInfo_getLocationThemeIndex((this)._instance);
        return (((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).LocationThemes)).getItemAt(themeIndex);
};
        <class_fields_init> = undefined;
        LocationInfo;
        class LocationInfo {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x574b9 */
        this._instance = instance;
        return;
}
            getLocationThemeData (locationData) {
    var themeIndex;
        themeIndex = LocationInfo_getLocationThemeIndex((locationData).instance);
        return (((LogicDataTables).LogicDataTables).getTable((((LogicDataTables).LogicDataTables).table).LocationThemes)).getItemAt(themeIndex);
}
        }
        LocationInfo = v8 = LocationInfo;
        exports.LocationInfo = LocationInfo;
        return;
};

// --------------------- MODULE 4812 — LogicConfData ---------------------


// ============================================================ //
// webpack module 4812  —  LogicConfData
// exports: LogicConfData
// deps: 699 (FileManager), 1588 (LogicMemory), 4009 (Config), 9244 (ThemeSelector), 9368 (EventSlot), 9878 (Libg)
// ============================================================ //

__webpack_modules__[4812] = function LogicConfData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, FileManager, Config, ThemeSelector, EventSlot, LogicConfData_getIntValue, eventArrayPointerOffset, eventArrayCountOffset, LogicConfData, <class_fields_init>, LogicConfData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicConfData = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        FileManager = __webpack_require__(699);
        Config = __webpack_require__(4009);
        ThemeSelector = __webpack_require__(9244);
        EventSlot = __webpack_require__(9368);
        LogicConfData_getIntValue = new NativeFunction(((Libg).Libg).offset(16080256, 0), "int", ["pointer", "int", "int"]);
        eventArrayPointerOffset = ((LogicMemory).LogicMemory).offset(16);
        eventArrayCountOffset = ((LogicMemory).LogicMemory).offset(28);
        <class_fields_init> = undefined;
        LogicConfData;
        class LogicConfData {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x664b1 (open) */
}
            getIntValue (confData, valueId, defaultValue) {
        return LogicConfData_getIntValue(confData, valueId, defaultValue);
}
            getActiveEventForSlot (confData, slotIndex) {
    var slot;
        if ((confData).isNull()) {
            return null;
        } /* if 0x66136 */
        /* jump -> 0x6615d */
        slot = /*iter*/ (LogicConfData).iterateEventSlotPointers(confData);
        if (((slot).slotIndex === slotIndex)) {
            return undefined;
        } /* if 0x6615d */
        } while (!(LogicConfData).iterateEventSlotPointers(confData));
        slot = <underflow>;
        return null;
}
            getEventSlots (confData) {
        return (Array).from((LogicConfData).iterateEventSlotPointers(confData));
}
            iterateEventSlotPointers (confData) {
    var arrayPointer, count, i, slotPointer;
        if ((confData).isNull()) {
            /* return_async  */
        } /* if 0x661eb */
        arrayPointer = ((confData).add(eventArrayPointerOffset)).readPointer();
        count = ((confData).add(eventArrayCountOffset)).readInt();
        i = 0;
        while ((i < count)) {
            slotPointer = ((arrayPointer).add((i * (Process).pointerSize))).readPointer();
            if (!(slotPointer).isNull()) {
                if (yield (new (EventSlot).EventSlot(slotPointer))) {
                    /* return_async  */
                    slotPointer = i = undefined;
                } /* if 0x66268 */
            } /* if 0x66269 */
            i = ((i) + 1);
            (i++);
        } /* while 0x66273 */
        /* return_async  */
}
            patch () {
        return;
}
        }
        LogicConfData = eventArrayCountOffset = LogicConfData;
        exports.LogicConfData = LogicConfData;
        return;
};

// --------------------- MODULE 7089 — LogicDailyData ---------------------


// ============================================================ //
// webpack module 7089  —  LogicDailyData
// exports: LogicDailyData
// deps: 1018 (HomeMode), 1588 (LogicMemory), 3555 (LogicSkinData), 4009 (Config), 5417 (LogicArrayList), 6139 (LogicDataTables), 7171 (LogicCharacterData), 7669 (SkinSelector), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7089] = function LogicDailyData_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, SkinSelector, Config, LogicDataTables, LogicCharacterData, LogicSkinData, LogicMemory, HomeMode, LogicArrayList, LogicDailyData_decode, LogicDailyData_getSkin, LogicDailyData_hasUnlockedSkin, HeroScreenPopup_refreshSkinUI_hasUnlockedSkinRetAddr, dayIndexOffset, secondsUntilDayChangeOffset, currentTrophiesOffset, heroScoreSumOffset, maxTrophiesOffset, highestHeroScoreSumOffset, heroScoreSumRewardClaimedUpToLevelOffset, trophyWorldClaimedUpToMilestoneIndexOffset, playerXpOffset, playerThumbnailOffset, seasonSecondsLeftOffset, regionOffset, unlockedSkinsArrayHeadOffset, newItemsArrayHeadOffset, skinOffsets, LogicDailyData, <class_fields_init>, LogicDailyData;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LogicDailyData = undefined;
        Libg = __webpack_require__(9878);
        SkinSelector = __webpack_require__(7669);
        Config = __webpack_require__(4009);
        LogicDataTables = __webpack_require__(6139);
        LogicCharacterData = __webpack_require__(7171);
        LogicSkinData = __webpack_require__(3555);
        LogicMemory = __webpack_require__(1588);
        HomeMode = __webpack_require__(1018);
        LogicArrayList = __webpack_require__(5417);
        LogicDailyData_decode = ((Libg).Libg).offset(16093332, 0);
        LogicDailyData_getSkin = new NativeFunction(((Libg).Libg).offset(16100244, 0), "pointer", ["pointer", "pointer", "pointer"]);
        LogicDailyData_hasUnlockedSkin = ((Libg).Libg).offset(16101108, 0);
        HeroScreenPopup_refreshSkinUI_hasUnlockedSkinRetAddr = ((Libg).Libg).offset(12419940, 0);
        dayIndexOffset = ((LogicMemory).LogicMemory).offset(0);
        secondsUntilDayChangeOffset = ((LogicMemory).LogicMemory).offset(4);
        currentTrophiesOffset = ((LogicMemory).LogicMemory).offset(8);
        heroScoreSumOffset = ((LogicMemory).LogicMemory).offset(8);
        maxTrophiesOffset = ((LogicMemory).LogicMemory).offset(12);
        highestHeroScoreSumOffset = ((LogicMemory).LogicMemory).offset(12);
        heroScoreSumRewardClaimedUpToLevelOffset = ((LogicMemory).LogicMemory).offset(20);
        trophyWorldClaimedUpToMilestoneIndexOffset = ((LogicMemory).LogicMemory).offset(24);
        playerXpOffset = ((LogicMemory).LogicMemory).offset(28);
        playerThumbnailOffset = ((LogicMemory).LogicMemory).offset(40);
        seasonSecondsLeftOffset = ((LogicMemory).LogicMemory).offset(196);
        regionOffset = ((LogicMemory).LogicMemory).offset(172);
        unlockedSkinsArrayHeadOffset = ((LogicMemory).LogicMemory).offset(120);
        newItemsArrayHeadOffset = ((LogicMemory).LogicMemory).offset(152);
        skinOffsets = [((Libg).Libg).offset(9063544, 0), ((Libg).Libg).offset(13061408, 0), ((Libg).Libg).offset(11920352, 0), ((Libg).Libg).offset(13031160, 0), ((Libg).Libg).offset(12403004, 0), ((Libg).Libg).offset(11204968, 0), ((Libg).Libg).offset(10610924, 0)];
        <class_fields_init> = undefined;
        LogicDailyData;
        class LogicDailyData {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x670eb (open) */
}
            getCurrentTrophies () {
        return (this).currentTrophies;
}
            getMaxTrophies () {
        return (this).maxTrophies;
}
            getSeasonSecondsLeft () {
    var playerData;
        playerData = ((HomeMode).HomeMode).getPlayerData();
        if ((playerData).isNull()) {
            return -1;
        } /* if 0x66a04 */
        return ((playerData).add(seasonSecondsLeftOffset)).readInt();
}
            getDayIndex (playerData) {
        return ((playerData).add(dayIndexOffset)).readU32();
}
            getSecondsUntilDayChange (playerData) {
        return ((playerData).add(secondsUntilDayChangeOffset)).readU32();
}
            getHeroScoreSum (playerData) {
        return ((playerData).add(heroScoreSumOffset)).readU32();
}
            getHighestHeroScoreSum (playerData) {
        return ((playerData).add(highestHeroScoreSumOffset)).readU32();
}
            getHeroScoreSumRewardClaimedUpToLevel (playerData) {
        return ((playerData).add(heroScoreSumRewardClaimedUpToLevelOffset)).readU32();
}
            getTrophyWorldClaimedUpToMilestoneIndex (playerData) {
        return ((playerData).add(trophyWorldClaimedUpToMilestoneIndexOffset)).readU32();
}
            getPlayerXp (playerData) {
        return ((playerData).add(playerXpOffset)).readU32();
}
            getRegion (playerData) {
        return ((playerData).add(regionOffset)).readU32();
}
            getPlayerThumbnail (playerData) {
        return ((playerData).add(playerThumbnailOffset)).readPointer();
}
            getSkin (playerData, playerAvatar, character) {
        return new (LogicSkinData).LogicSkinData(LogicDailyData_getSkin(playerData, (playerAvatar).instance, (character).instance));
}
            addUnlockedSkin (playerData, skin) {
        if ((playerData).isNull()) {
            return;
        } /* if 0x66c3b */
        return;
}
            addNewItem (playerData, card) {
        if (!(playerData).isNull()) {
            (playerData).isNull();
            if ((card).isNull()) {
                return;
            } /* if 0x66ca2 */
        } /* if 0x66c9f */
        return;
}
            getNewItems (playerData) {
    var newItemsArray, count, items, i, cardDataPointer;
        if ((playerData).isNull()) {
            return [];
        } /* if 0x66d18 */
        newItemsArray = new (LogicArrayList).LogicArrayList((playerData).add(newItemsArrayHeadOffset));
        count = (newItemsArray).getItemsCount();
        items = [];
        i = 0;
        while ((i < count)) {
            cardDataPointer = (newItemsArray).getElement(i);
            if (!(cardDataPointer).isNull()) {
                (items).push(cardDataPointer);
            } /* if 0x66d7e */
            i = ((i) + 1);
            (i++);
        } /* while 0x66d88 */
        return items;
}
            patch () {
        (Interceptor).attach(LogicDailyData_decode, { onEnter (args) {
        this.logicDailyData = args[0];
        return;
}, onLeave () {
        LogicDailyData.currentTrophies = (((this).logicDailyData).add(currentTrophiesOffset)).readInt();
        LogicDailyData.maxTrophies = (((this).logicDailyData).add(maxTrophiesOffset)).readInt();
        return;
} });
        (Interceptor).attach(LogicDailyData_getSkin, { onEnter (args) {
        this.character = new (LogicCharacterData).LogicCharacterData(args[2]);
        return;
}, onLeave (retval) {
    var defaultSkin, characterName, replacedSkinName;
        if ((((Config).Config).config).DisableSkins) {
            defaultSkin = ((this).character).getDefaultSkin();
            if ((!((defaultSkin).instance).isNull())) {
                (retval).replace((defaultSkin).instance);
                return;
            } /* if 0x66f9b */
        } /* if 0x66f9c */
        if ((!((SkinSelector).SkinSelector).isInUse())) {
            return;
        } /* if 0x66fb0 */
        if ((skinOffsets).some(function (value) {
        return ((this).returnAddress).equals(value);
})) {
            characterName = ((this).character).getName();
            if (((((Config).Config).config).SkinOverrides).hasOwnProperty(characterName)) {
                replacedSkinName = (((Config).Config).config).SkinOverrides[characterName];
                (retval).replace((((LogicDataTables).LogicDataTables).getSkinByName(replacedSkinName)).instance);
                return;
            } /* if 0x6702c (open) */
        } /* if 0x6702c (open) */
} });
        return;
}
        }
        LogicDailyData = LogicArrayList = LogicDailyData;
        exports.LogicDailyData = LogicDailyData;
        return;
};

