// =============================================================
// LOCALISATION & STRING TABLES
// merged webpack modules: 7265 Localisation, 9087 LocalisationStatic, 6528 LocalisationOverrides, 9250 StringTable
// =============================================================

// --------------------- MODULE 7265 — Localisation ---------------------

// ============================================================ //
// webpack module 7265  —  Localisation
// exports: Localisation
// deps: 699 (FileManager), 2214 (ModProperties)
// ============================================================ //

__webpack_modules__[7265] = function Localisation_factory(__unused_webpack_module, exports, __webpack_require__) {
    var FileManager, ModProperties, Localisation, <class_fields_init>, Localisation;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.Localisation = undefined;
        FileManager = __webpack_require__(699);
        ModProperties = __webpack_require__(2214);
        <class_fields_init> = undefined;
        Localisation;
        class Localisation {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb652b (open) */
}
            get languageCode () {
        return (this)._languageCode;
}
            set languageCode (value) {
        if (!(!value)) {
            if ((value.length === 0)) {
                value = "en";
            } /* if 0xb62d8 */
        } /* if 0xb62d0 */
        this._languageCode = value;
        return;
}
            init () {
    var creditsJSONString, creditsObject, modName, socials, serverCredit, aboutScreen, e;
        /* CATCH -> 0xb641c (try region) */
        creditsJSONString = ((FileManager).FileManager).readAAsset("bsd/credits.json", "r");
        if (creditsJSONString) {
            creditsObject = (JSON).parse(creditsJSONString);
            modName = (creditsObject).LobbyCreditModName;
            socials = (creditsObject).LobbyCreditSocials;
            serverCredit = (creditsObject).ServerConnectionCredit;
            aboutScreen = (creditsObject).AboutModCaptions;
            if (modName) {
                this.jointModName = (" & ").concat(modName);
            } /* if 0xb63b8 */
            if (socials) {
                this.jointModSocials = ("").concat(socials, "\n");
            } /* if 0xb63d5 */
            if (serverCredit) {
                this.jointModServerConnectionCredit = ("\n").concat(serverCredit, "\nㅤ");
            } /* if 0xb63f6 */
            if (aboutScreen) {
                this.jointModAboutScreen = ("\n").concat(aboutScreen, "\n");
            } /* if 0xb6417 */
            return;
            e = this;
        } /* if 0xb641a */
        /* CATCH -> 0xb643a (try region) */
        (console).error("Failed to initialize localization credits:", e);
        return;
        throw this;
}
            getString (key) {
        if (((this).localizationObject).hasOwnProperty(key)) {
            return (this).localizationObject[key];
        } /* if 0xb6484 */
        return key;
}
            getPatchNotesForCurrentVersion () {
    var currentPatchNotes;
        currentPatchNotes = (Localisation).patchNotes[((ModProperties).ModProperties).showPatchNotesFor];
        if ((!currentPatchNotes)) {
            return (Localisation).getString("NoChangelogs");
        } /* if 0xb64d9 */
        if ((currentPatchNotes).hasOwnProperty((Localisation).languageCode)) {
            return currentPatchNotes[(Localisation).languageCode];
        } /* if 0xb64fb */
        return "";
}
        }
        Localisation = Localisation = Localisation;
        exports.Localisation = Localisation;
        Localisation._languageCode = "";
        Localisation.jointModAboutScreen = "";
        Localisation.jointModName = "";
        Localisation.jointModServerConnectionCredit = "";
        Localisation.jointModSocials = "";
        Localisation.isLanguageIndexSet = false;
        Localisation.localizationObject = {};
        Localisation.patchNotes = { "32.0": { EN: "Refactored!", RU: "Рефактор!" } };
        return;
};

// --------------------- MODULE 9087 — LocalisationStatic ---------------------

// ============================================================ //
// webpack module 9087  —  LocalisationStatic
// exports: LocalisationStatic
// ============================================================ //

__webpack_modules__[9087] = function LocalisationStatic_factory(__unused_webpack_module, exports) {
    var LocalisationStatic, <class_fields_init>, LocalisationStatic;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LocalisationStatic = undefined;
        <class_fields_init> = undefined;
        LocalisationStatic;
        class LocalisationStatic {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb8d5e (open) */
}
        }
        LocalisationStatic = LocalisationStatic = LocalisationStatic;
        exports.LocalisationStatic = LocalisationStatic;
        LocalisationStatic["default"] = { TextServerConnectionCredit: "Brawl Stars Datamines|BSD{jointModServerConnectionCredit}", TextLobbyInfoCredit: "{jointModSocials}Telegram: @bsdatamines", TextModContributors: "⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘\nBSD Brawl v{ScriptPatchVersionName} by Brawl Stars Datamines | BSD\n<c3390ec>Telegram: t.me/bsdatamines</c>\n\n\n»»———————　BSD Brawl Team　———————««\n💼 <cfde423>H<cfdd509>e<cfdbf01>d<cfea603>g<cfe9304>e</c> (Director, Developer)\n<c3390ec>Telegram: @navia</c>    <c5865f2>Discord: heedge</c>\n\n🔍 <cba0000>t<cd10000>a<ce80000>i<cff0000>l<cff0000>s<cd40006>j<caa010c>s</c> (Developer, Code Review)\n<c3390ec>Telegram: @tailsjs/@im_evaelfie</c>    <c5865f2>Discord: tailiumcrypted</c>\n\n🔗 <cfe9c5f>h</c><cfea46b>p</c><cfeac78>d</c><cfeb484>e</c><cffbd90>v</c><cffc59c>f</c><cffcda9>o</c><cffd5b5>x</c> (Networking, Developer)\n<c3390ec>Telegram: @meowfoxd</c>    <c5865f2>Discord: hpdevfox</c>\n\n🤖 <ccb00ff>C<cd519cc>r<ce03399>o<cea4c66>w<cf56633>T<cff7f00>h<cff9900>e<cffb200>B<cffcc00>e<cffe500>s<cffff00>t</c> (Bots/API Manager)\n<c3390ec>Telegram: @CrowTheBest</c>    <c5865f2>Discord: crowthebest</c>\n\n🔧 <cdb84fe>B<cd377fe>r<ccb69fe>e<cc45cfe>a<ccf77fe>d<cda92fe>D<ce5adfe>E<cf1c9fe>V</c> (iOS Developer)\n<c3390ec>Telegram: @breaddev</c>    <c5865f2>Discord: breaddev</c>\n\n\n(っ◔◡◔)っ ♥Special Thanks♥\n<cd46176>oleavr</c> & <cef6456>Frida</c>\n<c708090>hz</c>\n<c374b03>FMZNkdv</c>\n\n\n(っ◔◡◔)っ ♥Donators♥\n---\n⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘⫘", CopyReplayCodeNoCapture: "No replay captured yet - tap watch in BattleLog first", CopyReplayCodeCopied: "Copied: {code}", BattleLogCopyLinkCopied: "Link copied to clipboard" };
        return;
};

// --------------------- MODULE 6528 — LocalisationOverrides ---------------------

// ============================================================ //
// webpack module 6528  —  LocalisationOverrides
// exports: LocalisationOverrides
// ============================================================ //

__webpack_modules__[6528] = function LocalisationOverrides_factory(__unused_webpack_module, exports) {
    var LocalisationOverrides, <class_fields_init>, LocalisationOverrides;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.LocalisationOverrides = undefined;
        <class_fields_init> = undefined;
        LocalisationOverrides;
        class LocalisationOverrides {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xb8c6d (open) */
}
        }
        LocalisationOverrides = LocalisationOverrides = LocalisationOverrides;
        exports.LocalisationOverrides = LocalisationOverrides;
        LocalisationOverrides.overrides = { en: { HighlightDuoQuizAnswers_name: "Duo quiz answers", HighlightDuoQuizAnswers_descEnabled: "Highlights correct answers in green during the Duo quiz event.", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", RandomLocalization_name: "Random localization", RandomLocalization_descEnabled: "When enabled, all text in the game will be randomly shuffled.", ShowTrophiesAboveHead_name: "Trophies above head", ShowTrophiesAboveHead_descEnabled: "Shows player trophies above their heads in battle.", BSDPlusOnly: "BSD+ only", PaidFeatureDescription: "This is a BSD+ feature.\nPurchase is available in @bsdbrawlbot Telegram bot.", DevModeToggle_name: "Developer mode", DevModeToggle_descEnabled: "Switches environment to dev.", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", ModConfigurationPopupSubheadingOptimization: "Optimization", DisableSkins_name: "Disable all skins", DisableSkins_descEnabled: "Removes all skins and their related effects.", DefaultEnvironments_name: "Default environments", DefaultEnvironments_descEnabled: "Replaces all environments with older (original) ones.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", ShowDPS_name: "DPS counter", ShowDPS_descEnabled: "Shows damage per second counter on the battle HUD.", ShowSkinNamesInProfile_name: "Skin names in profile", ShowSkinNamesInProfile_descEnabled: "Replaces brawler names with their selected skin names.", AllyRespawnTimer_name: "Ally respawn timer in Trio SD", AllyRespawnTimer_descEnabled: "Shows the missing teammate respawn countdown in Trio Showdown.", SpectateButton_name: "Spectate teammates", SpectateButton_descEnabled: "Shows the game's own spectate button in any team mode, so you can move the camera to your teammates.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", LegacyBackgrounds_name: "Legacy backgrounds", LegacyBackgrounds_descEnabled: "Replaces new detalized menu theme backgrounds with legacy style.", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", CopyReplayCodeNoCapture: "No replay captured yet - tap watch in Battle Log first", CopyReplayCodeCopied: "Copied: {code}", BattleLogCopyLinkCopied: "Link copied to clipboard", GiveByGlobalIdInputTitle: "Give by Global ID", GiveByGlobalIdButton: "Give", GiveFromContainerPickContainerInputTitle: "Container ID", GiveFromContainerPickItemInputTitle: "Global ID", GiveFromContainerNextButton: "Next", AddSpectatorsInputTitle: "Add Spectators", AddSpectatorsBrawlTvInputTitle: "Add Spectators (BrawlTV)", AddSpectatorsButton: "Add", AddSpectatorsMaxExceeded: "Maximum amount of spectators now is 2000", AddSpectatorsSuccess: "Added spectators: {count}", AddSpectatorsCooldown: "Too many requests, try again in {timeout} s.", AddSpectatorsError: "Failed to add spectators", AddSpectatorsBsdPlusRequired: "Requires an active BSD+ subscription for more than 2 months", ShowFameInputTitle: "Fame amount", ShowFameButton: "Show", WatchSharedReplayInputTitle: "Replay code", WatchSharedReplayButton: "Watch", WatchSharedReplayBadCode: "Invalid replay code", ScidSetUrlInputTitle: "SCID URL", ScidSetUrlButton: "Apply", ScidSetEnvInputTitle: "SCID Env (prod/stage)", ScidSetEnvButton: "Switch", LegacyNames_Ruffs: "COLONEL RUFFS", LegacyNames_Rico: "RICOCHET", LegacyNames_Glowbert: "GLOWBERT", CameraSettingsPopupTitle: "CAMERA SETTINGS", CameraSettingsZoom: "Zoom", CameraSettingsHeight: "Height", CameraSettingsPanX: "Pan X", CameraSettingsPanY: "Pan Y", CameraSettingsTilt: "Tilt", BackgroundMatchmaking_name: "Background matchmaking", BackgroundMatchmaking_descEnabled: "Don't open the matchmaking screen when tapping the \"PLAY\" button.", PrestigeMenuPopup: "Prestige", PrestigeMenuPopupTitle: "Prestige", Prestige: "Prestige {int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." }, ru: { HighlightDuoQuizAnswers_name: "Ответы на викторину Дуо", HighlightDuoQuizAnswers_descEnabled: "Подсвечивает зелёным правильные ответы на вопросы Дуо в бою.", DebugMenuWarningTitle: "Внимание!", DebugMenuWarningText: "Ресурсы выдаются только визуально. При попытке их потратить спишутся ваши реальные ресурсы.", CustomBgAlreadyReset: "Фон уже сброшен!", DebugMenuButton_name: "Кнопка дебаг-меню", DebugMenuButton_descEnabled: "Добавляет кнопку дебаг-меню на главный экран.", ThemeNoMusic: "Без музыки", CustomBgFromClipboard: "Из буфера", CustomBgInputTitle: "Путь к картинке", CustomBgInputButton: "Установить", CustomBgSet: "Фон установлен!", CustomBgReset: "Фон сброшен!", CustomBgNoImage: "В буфере обмена нет картинки!", CustomBgError: "Не удалось загрузить картинку!", RandomLocalization_name: "Рандомная локализация", RandomLocalization_descEnabled: "Когда включено: весь текст в игре будет случайным.", ShowTrophiesAboveHead_name: "Кубки над головой", ShowTrophiesAboveHead_descEnabled: "Показывает кубки игроков над их головами в бою.", BSDPlusOnly: "Только с BSD+", PaidFeatureDescription: "Это функция BSD+.\nПриобрести можно в Telegram-боте @bsdbrawlbot.", DevModeToggle_name: "Режим разработчика", DevModeToggle_descEnabled: "Переключает окружение на dev.", SeaMonsters: "Аквариум", LoveSwampShowdown: "Болото любви", LoveSwampIslandShowdown: "Болото любви [🏝]", GetGems: "ПОЛУЧИТЬ", LobbyTab: "ЛОББИ", BattleTab: "БОЙ", OtherTab: "ПРОЧЕЕ", ConfigTab: "НАСТРОЙКИ", DebugTab: "ОТЛАДКА", FontSelectorPopup: "ШРИФТ", SelectFont: "Шрифт", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Титул", SetTitleButton: "УСТАНОВИТЬ", CustomTitleTooLongTitle: "Титул слишком длинный!", CustomTitleIllegalSymbols: "Недопустимые символы!", CustomTitleBadRequest: "Ошибка запроса!", CustomTitleSuccessfullySet: "Титул установлен!", VisualChangeTitleResetHint: "Оставь поле пустым, чтобы сбросить титул", NoChangelogs: "Для этой версии нет списка изменений. Загляни позже!", SkinChangerWIP: "На данный момент скин-ченджер находится на переработке. Следи за новостями, чтобы не пропустить обновление!", LegacyNames_name: "Старые имена бойцов", LegacyNames_descEnabled: "Когда включено: меняет имена у Рико, Гавса и Глоуи на их старые варианты.", ModConfigurationPopupSubheadingOptimization: "Оптимизация", DisableSkins_name: "Отключить все скины", DisableSkins_descEnabled: "Убирает все скины и соответствующие эффекты.", DefaultEnvironments_name: "Стандартные окружения", DefaultEnvironments_descEnabled: "Заменяет все окружения на более старые (оригинальные).", EnforceBattleChatButton_name: "Всегда показывать кнопку чата", EnforceBattleChatButton_descEnabled: "Когда включено: кнопка чата в бою будет всегда доступна.", AntiAfkKick_name: "Анти-кик за неактивность в бою", AntiAfkKick_descEnabled: "Когда включено: кик за неактивность в бою будет отключен.", ExtendedTrajectory_name: "Расширенная траектория мяча", ExtendedTrajectory_descEnabled: "Показывает расширенную траекторию отскока мяча в Броулболе и шайбы в Аэробое.", HitboxRenderer_name: "Отрисовка границ моделей", HitboxRenderer_descEnabled: "Рисует 3D wireframe кубы вокруг игровых объектов в бою. <cFFD700>Может снижать производительность.</c>", EnemyTracer_name: "Трассер до врагов [β]", EnemyTracer_descEnabled: "Рисует линии от твоего персонажа до вражеских героев в бою. <cFFD700>Может снижать производительность.</c>", AttackRangeIndicator_name: "Радиус атаки врагов", AttackRangeIndicator_descEnabled: "Показывает круг дальности атаки вражеских героев в бою.", ShowMuteButton_name: "Кнопка отключения звука", ShowMuteButton_descEnabled: "Когда включено: в бою будет отображаться кнопка отключения звука.", SoundMuted0: "Звуки больше не выключены!", SoundMuted1: "Все звуки отключены!", ShowDPS_name: "Счётчик DPS", ShowDPS_descEnabled: "Показывает урон в секунду на экране боя.", ShowSkinNamesInProfile_name: "Имена скинов в профиле", ShowSkinNamesInProfile_descEnabled: "Отображать названия СКИНОВ вместо БОЙЦОВ.", AllyRespawnTimer_name: "Таймер возрождения союзника в Трио ШД", AllyRespawnTimer_descEnabled: "Показывает отсутствующий таймер до возрождения союзника в ТРОЙНОМ СТОЛКНОВЕНИИ.", SpectateButton_name: "Камера на союзников", SpectateButton_descEnabled: "Показывает родную кнопку спектатора в любом командном режиме - камера переключается на союзников.", EnforceOldFriendsList_name: "Старый список друзей", EnforceOldFriendsList_descEnabled: "Когда включено: игра будет использовать классический список друзей вместо нового.", LegacyBackgrounds_name: "Старый стиль фонов", LegacyBackgrounds_descEnabled: "Возвращает старый стиль фоновых тем в меню.", CatchedException: "Что-то пошло не так...", UpdatingModAssets: "Загрузка данных мода: <PROGRESS>%", ColorAlpha: "НЕПРОЗРАЧНОСТЬ", CopyReplayCodeNoCapture: "Повтор ещё недоступен - сначала запусти повтор", CopyReplayCodeCopied: "Скопировано: {code}", BattleLogCopyLinkCopied: "Ссылка скопирована в буфер обмена", GiveByGlobalIdInputTitle: "Выдать по глобальному ID", GiveByGlobalIdButton: "Выдать", GiveFromContainerPickContainerInputTitle: "ID контейнера", GiveFromContainerPickItemInputTitle: "Глобальный ID", GiveFromContainerNextButton: "Дальше", AddSpectatorsInputTitle: "Добавить зрителей", AddSpectatorsBrawlTvInputTitle: "Добавить зрителей (BrawlTV)", AddSpectatorsButton: "Добавить", AddSpectatorsMaxExceeded: "Максимальное количество зрителей на данный момент - 2000", AddSpectatorsSuccess: "Добавлено зрителей: {count}", AddSpectatorsCooldown: "Слишком много запросов - попробуй через {timeout} с.", AddSpectatorsError: "Не удалось добавить зрителей", AddSpectatorsBsdPlusRequired: "Необходима действующая подписка BSD+ сроком более 2 месяцев", ShowFameInputTitle: "Количество славы", ShowFameButton: "Показать", WatchSharedReplayInputTitle: "Код повтора", WatchSharedReplayButton: "Смотреть", WatchSharedReplayBadCode: "Неверный код повтора", ScidSetUrlInputTitle: "SCID URL", ScidSetUrlButton: "Применить", ScidSetEnvInputTitle: "SCID окружение (prod/stage)", ScidSetEnvButton: "Переключить", LegacyNames_Ruffs: "ГЕНЕРАЛ ГАВС", LegacyNames_Rico: "РИКОШЕТ", LegacyNames_Glowbert: "ГЛОУБЕРТ", CameraSettingsPopupTitle: "НАСТРОЙКИ КАМЕРЫ", CameraSettingsZoom: "Приближение", CameraSettingsHeight: "Высота", CameraSettingsPanX: "Сдвиг X", CameraSettingsPanY: "Сдвиг Y", CameraSettingsTilt: "Наклон", BackgroundMatchmaking_name: "Фоновый подбор", BackgroundMatchmaking_descEnabled: "Не открывать экран подбора матча при нажатии кнопки \"ИГРАТЬ\".", PrestigeMenuPopup: "Прайм", PrestigeMenuPopupTitle: "Прайм", Prestige: "Прайм {int}", ShowAllianceMembersInBattle_name: "Выделять соклановцев BSD", ShowAllianceMembersInBattle_descEnabled: "Добавляет [🛡️] к именам участников вашего BSD-клана в бою.", ShowBlacklistedPlayersInBattle_name: "Выделять игроков из ЧС", ShowBlacklistedPlayersInBattle_descEnabled: "Добавляет [❌] к именам игроков из вашего чёрного списка BSD в бою.", ManageBSDPlus: "Управление BSD+", ManageBSDPlus_Title: "Управление BSD+", ManageBSDPlus_Status_true: "У вас есть BSD+!", ManageBSDPlus_Status_false: "У вас нет BSD+!", ManageBSDPlus_TillEnds: "До окончания BSD+: {time}", ManageBSDPlus_AccountLink_true: "Аккаут привязан к Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram-аккаунт не привязан.", ManageBSDPlus_LinkButton_true: "Отвязать аккаунт", ManageBSDPlus_LinkButton_false: "Привязать аккаунт", ManageBSDPlus_LinkButton_cancel: "Отменить отвязку", ManageBSDPlus_PurchaseButton_true: "Купить BSD+", ManageBSDPlus_PurchaseButton_false: "Продлить BSD+", ManageBSDPlus_LinkingError_true: "Не удалось остановить процесс привязки аккаунта от Telegram. Попробуй позже.", ManageBSDPlus_LinkingError_false: "Не удалось отвязать аккаунт от Telegram. Попробуй позже.", ManageBSDPlus_LinkingError_undefined: "Неизвестная ошибка.", ManageBSDPlus_Response_successfully_unlinked: "Ваш аккаунт успешно был отвязан от Telegram.", ManageBSDPlus_Response_bad_request: "Неизвестная ошибка! Попробуйте ещё раз.", ManageBSDPlus_Response_tag_not_linked: "Вы не привязывали свой аккаунт к Telegram!", ManageBSDPlus_Response_unlink_cooldown: "Вы недавно отвязывали свой аккаунт.\nСледующая отвязка доступна через {time}", ManageBSDPlus_Response_bad_signature: "Неизвестная ошибка! Попробуйте ещё раз.", DaysShort: "д." }, cn: { HighlightDuoQuizAnswers_name: "多邻国答题提示", HighlightDuoQuizAnswers_descEnabled: "在多邻国答题活动中，以绿色标出正确答案。", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", LegacyNames_Ruffs: "拉夫上校", LegacyNames_Rico: "瑞科谢", LegacyNames_Glowbert: "格鲁伯特", PrestigeMenuPopup: "巅峰", PrestigeMenuPopupTitle: "巅峰", Prestige: "巅峰{int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." }, cnt: { HighlightDuoQuizAnswers_name: "多鄰國答題提示", HighlightDuoQuizAnswers_descEnabled: "在多鄰國答題活動中，以綠色標出正確答案。", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", LegacyNames_Ruffs: "拉夫上校", LegacyNames_Rico: "彈射", LegacyNames_Glowbert: "格魯伯特", PrestigeMenuPopup: "巔峰威望", PrestigeMenuPopupTitle: "巔峰威望", Prestige: "巔峰威望{int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." }, tr: { HighlightDuoQuizAnswers_name: "Duo testi cevapları", HighlightDuoQuizAnswers_descEnabled: "Duo testi etkinliğinde doğru cevapları yeşil renkle vurgular.", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", ModConfigurationPopupSubheadingOptimization: "Optimization", DisableSkins_name: "Disable all skins", DisableSkins_descEnabled: "Removes all skins and their related effects.", DefaultEnvironments_name: "Default environments", DefaultEnvironments_descEnabled: "Replaces all environments with older (original) ones.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", LegacyNames_Ruffs: "COLONEL RUFFS", LegacyNames_Rico: "RICOCHET", LegacyNames_Glowbert: "GLOWBERT", PrestigeMenuPopup: "PRESTİJ", PrestigeMenuPopupTitle: "PRESTİJ", Prestige: "PRESTİJ {int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." }, pl: { HighlightDuoQuizAnswers_name: "Odpowiedzi w quizie Duo", HighlightDuoQuizAnswers_descEnabled: "Podświetla poprawne odpowiedzi na zielono podczas quizu Duo.", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", ModConfigurationPopupSubheadingOptimization: "Optimization", DisableSkins_name: "Disable all skins", DisableSkins_descEnabled: "Removes all skins and their related effects.", DefaultEnvironments_name: "Default environments", DefaultEnvironments_descEnabled: "Replaces all environments with older (original) ones.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", LegacyNames_Ruffs: "PUŁKOWNIK RUFFS", LegacyNames_Rico: "RICOCHET", LegacyNames_Glowbert: "GLOWBERT", PrestigeMenuPopup: "PRESTIŻ", PrestigeMenuPopupTitle: "PRESTIŻ", Prestige: "PRESTIŻ {int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." }, it: { HighlightDuoQuizAnswers_name: "Risposte al quiz di Duo", HighlightDuoQuizAnswers_descEnabled: "Evidenzia in verde le risposte corrette durante il quiz di Duo.", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", ModConfigurationPopupSubheadingOptimization: "Optimization", DisableSkins_name: "Disable all skins", DisableSkins_descEnabled: "Removes all skins and their related effects.", DefaultEnvironments_name: "Default environments", DefaultEnvironments_descEnabled: "Replaces all environments with older (original) ones.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", LegacyNames_Ruffs: "COLONNELLO RINGHIO", LegacyNames_Rico: "STECCA", LegacyNames_Glowbert: "GLOWBERT", PrestigeMenuPopup: "PRESTIGIO", PrestigeMenuPopupTitle: "PRESTIGIO", Prestige: "PRESTIGIO {int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." }, de: { HighlightDuoQuizAnswers_name: "Antworten im Duo-Quiz", HighlightDuoQuizAnswers_descEnabled: "Hebt richtige Antworten im Duo-Quiz grün hervor.", DebugMenuWarningTitle: "Warning!", DebugMenuWarningText: "Resources are granted visually only. Trying to spend them will deduct your real resources.", CustomBgAlreadyReset: "Background already reset", DebugMenuButton_name: "Debug menu button", DebugMenuButton_descEnabled: "Adds a debug menu button to the home screen.", ThemeNoMusic: "No music", CustomBgFromClipboard: "From clipboard", CustomBgInputTitle: "Image path", CustomBgInputButton: "Set", CustomBgSet: "Background set", CustomBgReset: "Background reset", CustomBgNoImage: "No image in clipboard", CustomBgError: "Couldn't load image", SeaMonsters: "Aquarium", LoveSwampShowdown: "Love Swamp", LoveSwampIslandShowdown: "Love Swamp [🏝]", GetGems: "GET", LobbyTab: "LOBBY", BattleTab: "BATTLE", OtherTab: "OTHER", ConfigTab: "CONFIG", DebugTab: "DEBUG", FontSelectorPopup: "FONT", SelectFont: "Font", FontReset: "Сброс", FontPusia: "Pusia Bold", FontImpact: "Impact", FontCocon: "Nice Brawl", FontDowncome: "Ghoul Stars", FontHYWenHei: "Genshin Impact", SetTitle: "Title", SetTitleButton: "SET", CustomTitleTooLongTitle: "Too long title!", CustomTitleIllegalSymbols: "Illegal symbols!", CustomTitleBadRequest: "Request error!", CustomTitleSuccessfullySet: "Title set!", VisualChangeTitleResetHint: "Leave field empty to reset title", NoChangelogs: "This version doesn't have changelogs. Check again later!", SkinChangerWIP: "Skin Changer is currently being reworked. Stay tuned!", LegacyNames_name: "Old brawler names", LegacyNames_descEnabled: "When enabled, changes the names of Rico, Ruffs, and Glowy to their older variants.", ModConfigurationPopupSubheadingOptimization: "Optimization", DisableSkins_name: "Disable all skins", DisableSkins_descEnabled: "Removes all skins and their related effects.", DefaultEnvironments_name: "Default environments", DefaultEnvironments_descEnabled: "Replaces all environments with older (original) ones.", EnforceBattleChatButton_name: "Always show chat button", EnforceBattleChatButton_descEnabled: "When enabled, chat button in battle will be always available.", AntiAfkKick_name: "Anti AFK kick", AntiAfkKick_descEnabled: "When enabled, you won't be kicked because of being AFK.", ExtendedTrajectory_name: "Extended ball trajectory", ExtendedTrajectory_descEnabled: "Shows extended bounce trajectory for the ball in Brawl Ball and the puck in Hockey.", HitboxRenderer_name: "Hitbox wireframe", HitboxRenderer_descEnabled: "Draws 3D wireframe boxes around game objects in battle. <cFFD700>May reduce performance.</c>", EnemyTracer_name: "Enemy tracer [β]", EnemyTracer_descEnabled: "Draws lines from your character to enemy heroes in battle. <cFFD700>May reduce performance.</c>", AttackRangeIndicator_name: "Enemy attack range", AttackRangeIndicator_descEnabled: "Shows attack range circles around enemy heroes in battle.", ShowMuteButton_name: "Show mute button", ShowMuteButton_descEnabled: "When enabled, sound mute button will be available in battle.", SoundMuted0: "Sounds are no longer muted!", SoundMuted1: "All sounds are muted!", CatchedException: "Something went wrong...", UpdatingModAssets: "Downloading Mod Content: <PROGRESS>%", ColorAlpha: "OPACITY", LegacyNames_Ruffs: "COLONEL RUFFS", LegacyNames_Rico: "RICOCHET", LegacyNames_Glowbert: "GLOWBERT", PrestigeMenuPopup: "PRESTIGE", PrestigeMenuPopupTitle: "PRESTIGE", Prestige: "PRESTIGE {int}", ShowAllianceMembersInBattle_name: "Highlight BSD-clan members", ShowAllianceMembersInBattle_descEnabled: "Adds [🛡️] to the battle names of players in your BSD-clan.", ShowBlacklistedPlayersInBattle_name: "Highlight blacklisted players", ShowBlacklistedPlayersInBattle_descEnabled: "Adds [❌] to the battle names of players on your BSD blacklist.", EnforceOldFriendsList_name: "Old friends list", EnforceOldFriendsList_descEnabled: "When enabled, game uses the classic friends list layout instead of the new one.", ManageBSDPlus: "Manage BSD+", ManageBSDPlus_Title: "BSD+ Management", ManageBSDPlus_Status_true: "You have BSD+!", ManageBSDPlus_Status_false: "You don't have BSD+!", ManageBSDPlus_TillEnds: "Until BSD+ expires: {time}", ManageBSDPlus_AccountLink_true: "Account is linked to Telegram: {telegram}", ManageBSDPlus_AccountLink_false: "Telegram account is not linked.", ManageBSDPlus_LinkButton_true: "Unlink account", ManageBSDPlus_LinkButton_false: "Link account", ManageBSDPlus_LinkButton_cancel: "Cancel unlinking", ManageBSDPlus_PurchaseButton_true: "Buy BSD+", ManageBSDPlus_PurchaseButton_false: "Renew BSD+", ManageBSDPlus_LinkingError_true: "Failed to stop the process of unlinking the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_false: "Failed to unlink the account from Telegram. Try again later.", ManageBSDPlus_LinkingError_undefined: "Unknown error.", ManageBSDPlus_Response_successfully_unlinked: "Your account has been successfully unlinked from Telegram.", ManageBSDPlus_Response_bad_request: "Unknown error! Try again.", ManageBSDPlus_Response_tag_not_linked: "You haven't linked your account to Telegram!", ManageBSDPlus_Response_unlink_cooldown: "You recently unlinked your account.\nNext unlink available in {time}", ManageBSDPlus_Response_bad_signature: "Unknown error! Try again.", DaysShort: "d." } };
        return;
};

// --------------------- MODULE 9250 — StringTable ---------------------

// ============================================================ //
// webpack module 9250  —  StringTable
// exports: StringTable, StringTable_getString
// deps: 356 (LoadingScreen), 612 (MovieClip), 699 (FileManager), 1588 (LogicMemory), 2214 (ModProperties), 2533 (AllianceEventStreamEntry), 4009 (Config), 4272 (EDebugger), 6528 (LocalisationOverrides), 7265 (Localisation), 7535 (StringObject), 7657 (DuoQuizAnswers), 8632 (Stage), 9087 (LocalisationStatic), 9244 (ThemeSelector), 9786 (FPSCounter), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9250] = function StringTable_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, MovieClip, StringObject, Localisation, FileManager, LocalisationOverrides, EDebugger, FPSCounter, Config, ModProperties, ThemeSelector, LocalisationStatic, AllianceEventStreamEntry, LoadingScreen, DuoQuizAnswers, Stage, StringTable_getMovieClip, StringTable_getStringByCString, StringTable_getCurrentLanguageCode, StringTable_setLanguageIndex, StringTable_setLanguageIndex_native, currentLanguageColumnIndexAddr, stringTableGlobalAddr, languageCodeCountOffset, stringTableLanguageArrayOffset, csvTableRowCountOffset, csvTableColumnsOffset, csvColumnStringArrayOffset, stringObjectSize, StringTable, <class_fields_init>, StringTable;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StringTable_getString = undefined;
        undefined.StringTable = exports;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        MovieClip = __webpack_require__(612);
        StringObject = __webpack_require__(7535);
        Localisation = __webpack_require__(7265);
        FileManager = __webpack_require__(699);
        LocalisationOverrides = __webpack_require__(6528);
        EDebugger = __webpack_require__(4272);
        FPSCounter = __webpack_require__(9786);
        Config = __webpack_require__(4009);
        ModProperties = __webpack_require__(2214);
        ThemeSelector = __webpack_require__(9244);
        LocalisationStatic = __webpack_require__(9087);
        AllianceEventStreamEntry = __webpack_require__(2533);
        LoadingScreen = __webpack_require__(356);
        DuoQuizAnswers = __webpack_require__(7657);
        Stage = __webpack_require__(8632);
        StringTable_getMovieClip = new NativeFunction(((Libg).Libg).offset(13722932, 0), "pointer", ["pointer", "pointer", "pointer"]);
        exports.StringTable_getString = new NativeFunction(((Libg).Libg).offset(13721504, 0), "pointer", ["pointer"]);
        StringTable_getStringByCString = ((Libg).Libg).offset(13721376, 0);
        StringTable_getCurrentLanguageCode = new NativeFunction(((Libg).Libg).offset(13722276, 0), "pointer", []);
        StringTable_setLanguageIndex = ((Libg).Libg).offset(13721848, 0);
        StringTable_setLanguageIndex_native = new NativeFunction(StringTable_setLanguageIndex, "void", ["int", "bool"]);
        currentLanguageColumnIndexAddr = ((Libg).Libg).offset(19144532, 0);
        stringTableGlobalAddr = ((Libg).Libg).offset(19958984, 0);
        languageCodeCountOffset = ((LogicMemory).LogicMemory).offset(84);
        stringTableLanguageArrayOffset = 8;
        csvTableRowCountOffset = 84;
        csvTableColumnsOffset = 56;
        csvColumnStringArrayOffset = 8;
        stringObjectSize = 16;
        <class_fields_init> = undefined;
        StringTable;
        class StringTable {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5ebd2 (open) */
}
            getMovieClip (fileName, movieClipName) {
    var movieClipPtr;
        movieClipPtr = StringTable_getMovieClip((Memory).allocUtf8String(fileName), (Memory).allocUtf8String(movieClipName), NULL);
        return new (MovieClip).MovieClip(movieClipPtr);
}
            getMovieClip_safe (fileName, movieClipName) {
    var movieClipPtr;
        movieClipPtr = StringTable_getMovieClip((Memory).allocUtf8String(fileName), (Memory).allocUtf8String(movieClipName), NULL);
        if ((movieClipPtr).isNull()) {
            return null;
        } /* if 0x5d972 */
        return new (MovieClip).MovieClip(movieClipPtr);
}
            getString (string) {
        return ((StringObject).StringObject).with(string, function (stringObjectPointer) {
        return ((StringObject).StringObject).read((exports).StringTable_getString(stringObjectPointer));
});
}
            getCurrentLanguageCode () {
        return ((StringObject).StringObject).read(StringTable_getCurrentLanguageCode());
}
            getCurrentLanguageIndex () {
        return (currentLanguageColumnIndexAddr).readS32();
}
            getLanguageCount () {
    var table, codeList;
        table = (stringTableGlobalAddr).readPointer();
        if ((table).isNull()) {
            return 0;
        } /* if 0x5da81 */
        codeList = (table).readPointer();
        if ((codeList).isNull()) {
            return 0;
        } /* if 0x5da9c */
        return ((codeList).add(languageCodeCountOffset)).readU32();
}
            toggleShowTidKeys () {
        ((Config).Config).config.ShowTidKeys = (!(((Config).Config).config).ShowTidKeys);
        return (((Config).Config).config).ShowTidKeys;
}
            isShowTidKeys () {
        return Boolean((((Config).Config).config).ShowTidKeys);
}
            setLanguageIndex (index) {
    var refreshCode, index, refreshCode;
        refreshCode = index;
        if (((refreshCode) === undefined)) {
            index = refreshCode = true;
        } /* if 0x5db75 */
        if (refreshCode) {
        } /* if 0x5db80 */
        /* jump -> 0x5db81 */
        return;
}
            get replacedStrings () {
        if ((!(this)._replacedStrings)) {
            this._replacedStrings = { serverConnectionCredit: ((StringObject).StringObject).create(((((LocalisationStatic).LocalisationStatic)["default"]).TextServerConnectionCredit).replace("{jointModServerConnectionCredit}", ((this).jointStrings).serverConnectionCredit)), aboutScreenText: ((StringObject).StringObject).create(((((((((LocalisationStatic).LocalisationStatic)["default"]).TextModContributors).replace("{ScriptPatchVersionName}", ((ModProperties).ModProperties).version)).replace("{Platform}", "Platform")).replace("{ModVersion}", ((ModProperties).ModProperties).environment)).replace("{jointModAboutScreen}", ((this).jointStrings).aboutScreenText) + "<names>")), heroMaxTier: ((StringObject).StringObject).create("35"), emptyString: ((StringObject).StringObject).create("") };
        } /* if 0x5dcb6 */
        return (this)._replacedStrings;
}
            get rankNames () {
        if ((!(this)._rankNames)) {
            this._rankNames = { ar: ((StringObject).StringObject).create("الترتيب"), cn: ((StringObject).StringObject).create("荣誉"), cnt: ((StringObject).StringObject).create("RANK"), de: ((StringObject).StringObject).create("RANG"), en: ((StringObject).StringObject).create("RANK"), es: ((StringObject).StringObject).create("RANGO"), fi: ((StringObject).StringObject).create("ARVO"), fr: ((StringObject).StringObject).create("RANG"), he: ((StringObject).StringObject).create("דירוג"), id: ((StringObject).StringObject).create("KELAS"), it: ((StringObject).StringObject).create("GRADO"), jp: ((StringObject).StringObject).create("ランク"), kr: ((StringObject).StringObject).create("RANK"), ms: ((StringObject).StringObject).create("PANGKAT"), nl: ((StringObject).StringObject).create("RANG"), pl: ((StringObject).StringObject).create("RANGA"), pt: ((StringObject).StringObject).create("CLASSE"), ru: ((StringObject).StringObject).create("РАНГ"), th: ((StringObject).StringObject).create("อันดับ"), tr: ((StringObject).StringObject).create("RÜTBE"), vi: ((StringObject).StringObject).create("HẠNG") };
        } /* if 0x5df20 */
        return (this)._rankNames;
}
            onLanguageSet () {
    var l10n, e;
        (Localisation).Localisation.languageCode = (StringTable).getCurrentLanguageCode();
        /* CATCH -> 0x5e088 (try region) */
        l10n = (JSON).parse((((FileManager).FileManager).readAAsset("bsd/internal/localization.json", "r")).toString());
        if (((Object).keys(l10n)).includes((((Localisation).Localisation).languageCode).toLowerCase())) {
            if (((l10n[(((Localisation).Localisation).languageCode).toLowerCase()]) == null)) {
                l10n[(((Localisation).Localisation).languageCode).toLowerCase()];
            } /* if 0x5e021 */
            (Localisation).Localisation.localizationObject = (Object).assign({}, ((LocalisationOverrides).LocalisationOverrides).overrides[(((Localisation).Localisation).languageCode).toLowerCase()]);
        } /* if 0x5e04e */
        /* jump -> 0x5e082 */
        (Localisation).Localisation.localizationObject = (Object).assign((l10n).en, (((LocalisationOverrides).LocalisationOverrides).overrides).en);
        /* jump -> 0x5e08f */
        e = (Localisation).Localisation;
        /* CATCH -> 0x5e091 (try region) */
        l10n = (Localisation).Localisation;
        /* jump -> 0x5e08f */
        throw <underflow>;
        (Localisation).Localisation.isLanguageIndexSet = true;
        StringTable.overlaysPending = true;
        if ((((Config).Config).config).RandomThemeMask[0]) {
            ((ThemeSelector).ThemeSelectorManager).setRandomTheme();
            return;
        } /* if 0x5e0cd (open) */
}
            updateOverlays () {
        if (!(!(StringTable).overlaysPending)) {
            if ((((Stage).Stage).getMainSprite()).isNull()) {
                return;
            } /* if 0x5e12e */
        } /* if 0x5e12b */
        StringTable.overlaysPending = false;
        ((EDebugger).EDebugger).destroy();
        ((EDebugger).EDebugger).create();
        ((FPSCounter).FPSCounter).toggle(false);
        return;
}
            addStringByCStringRedirector (redirector) {
        ((StringTable).stringByCStringRedirectors).push(redirector);
        return;
}
            hookStringByCString () {
        if ((StringTable).stringByCStringHooked) {
            return;
        } /* if 0x5e1fb */
        StringTable.stringByCStringHooked = true;
        return;
}
            patch () {
    var bsdTIDs, aprilTIDs, aprilCollected;
        if ((this).patched) {
            return;
        } /* if 0x5e393 */
        this.patched = true;
        (Interceptor).attach(StringTable_setLanguageIndex, { onLeave () {
        return;
} });
        bsdTIDs = ["TID_CONTENT_UPDATE", "TID_CREDITS_BUTTON", "TID_CONNECTING_TO_SERVER", "TID_ABOUT", "TID_STREAM_EVENT_114", "TID_MENDER"];
        StringTable.aprilFoolsMapping = {};
        aprilTIDs = [];
        aprilCollected = false;
        return;
}
        }
        StringTable = FPSCounter = StringTable;
        exports.StringTable = StringTable;
        StringTable.overlaysPending = false;
        StringTable.jointStrings = { serverConnectionCredit: "", aboutScreenText: "" };
        StringTable._replacedStrings = null;
        StringTable.aprilFoolsMapping = {};
        StringTable.aprilFoolsCleaned = {};
        StringTable._rankNames = null;
        StringTable.stringByCStringRedirectors = [];
        StringTable.stringByCStringHooked = false;
        StringTable.patched = false;
        return;
};

