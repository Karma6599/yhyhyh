// =============================================================
// SOCIAL UI ENTRIES
// merged webpack modules: 2533 AllianceEventStreamEntry, 7676 ChatStreamEntry, 3341 TeamStream, 8727 StreamItem, 8418 FriendItem, 1982 FriendRequestContainer, 9526 TeamMemberItem, 100 TeamMemberEntry, 1399 TeamEntry, 4223 AllianceFullEntry, 6371 AllianceHeaderEntry, 910 PlayerEntry, 1760 StatusItem, 6265 StatusSelector
// =============================================================

// --------------------- MODULE 2533 — AllianceEventStreamEntry ---------------------

// ============================================================ //
// webpack module 2533  —  AllianceEventStreamEntry
// exports: AllianceEventStreamEntry
// deps: 1588 (LogicMemory), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2533] = function AllianceEventStreamEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, StringObject, AllianceEventStreamEntry_decode, playerNameOffset, eventType, AllianceEventStreamEntry, <class_fields_init>, AllianceEventStreamEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AllianceEventStreamEntry = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        StringObject = __webpack_require__(7535);
        AllianceEventStreamEntry_decode = ((Libg).Libg).offset(15965780, 0);
        playerNameOffset = ((LogicMemory).LogicMemory).offset(24);
        eventType = ((LogicMemory).LogicMemory).offset(72);
        <class_fields_init> = undefined;
        AllianceEventStreamEntry;
        class AllianceEventStreamEntry {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5c9cb (open) */
}
            patch () {
        return;
}
        }
        AllianceEventStreamEntry = AllianceEventStreamEntry = AllianceEventStreamEntry;
        exports.AllianceEventStreamEntry = AllianceEventStreamEntry;
        return;
};

// --------------------- MODULE 7676 — ChatStreamEntry ---------------------

// ============================================================ //
// webpack module 7676  —  ChatStreamEntry
// exports: ChatStreamEntry
// deps: 1588 (LogicMemory), 2476 (CombatHUD), 2743 (LogicLong), 4009 (Config), 4541 (HashTagCodeGenerator), 7146 (CustomMarks), 7535 (StringObject), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7676] = function ChatStreamEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Config, StringObject, CombatHUD, LogicLong, PlayerInfo, HashTagCodeGenerator, CustomMarks, ChatStreamEntry_decode, authorIdPtrOffset, authorNameOffset, messageOffset, ChatStreamEntry, <class_fields_init>, ChatStreamEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ChatStreamEntry = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Config = __webpack_require__(4009);
        StringObject = __webpack_require__(7535);
        CombatHUD = __webpack_require__(2476);
        LogicLong = __webpack_require__(2743);
        PlayerInfo = __webpack_require__(9518);
        HashTagCodeGenerator = __webpack_require__(4541);
        CustomMarks = __webpack_require__(7146);
        ChatStreamEntry_decode = ((Libg).Libg).offset(15959584, 0);
        authorIdPtrOffset = ((LogicMemory).LogicMemory).offset(16);
        authorNameOffset = ((LogicMemory).LogicMemory).offset(24);
        messageOffset = ((LogicMemory).LogicMemory).offset(48);
        <class_fields_init> = undefined;
        ChatStreamEntry;
        class ChatStreamEntry {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5ce23 (open) */
}
            patch () {
        return;
}
        }
        ChatStreamEntry = CustomMarks = ChatStreamEntry;
        exports.ChatStreamEntry = ChatStreamEntry;
        return;
};

// --------------------- MODULE 3341 — TeamStream ---------------------

// ============================================================ //
// webpack module 3341  —  TeamStream
// exports: TeamStream, chatButtonOffset
// deps: 1588 (LogicMemory), 3320 (InputField), 4009 (Config), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3341] = function TeamStream_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Config, InputField, TeamStream_buttonClicked, TeamStream_instanceAddr, textInputFieldOffset, TeamStream, <class_fields_init>, TeamStream;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.chatButtonOffset = undefined;
        undefined.TeamStream = exports;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Config = __webpack_require__(4009);
        InputField = __webpack_require__(3320);
        TeamStream_buttonClicked = new NativeFunction(((Libg).Libg).offset(9274952, 0), "void", ["pointer", "pointer"]);
        TeamStream_instanceAddr = ((Libg).Libg).offset(19938352, 0);
        exports.chatButtonOffset = ((LogicMemory).LogicMemory).offset(40);
        textInputFieldOffset = ((LogicMemory).LogicMemory).offset(88);
        <class_fields_init> = undefined;
        TeamStream;
        class TeamStream {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5d429 (open) */
}
            getInstance () {
        return (TeamStream_instanceAddr).readPointer();
}
            buttonClicked (buttonOffset) {
        return;
}
            patch () {
        return;
}
        }
        TeamStream = <class_fields_init> = TeamStream;
        exports.TeamStream = TeamStream;
        return;
};

// --------------------- MODULE 8727 — StreamItem ---------------------

// ============================================================ //
// webpack module 8727  —  StreamItem
// exports: StreamItem
// deps: 1191 (DisplayObject), 3015 (TextField), 6851 (CustomButton), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8727] = function StreamItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, CustomButton, DisplayObject, TextField, StreamItem_refreshEntry, StreamItem, <class_fields_init>, StreamItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StreamItem = undefined;
        Libg = __webpack_require__(9878);
        CustomButton = __webpack_require__(6851);
        DisplayObject = __webpack_require__(1191);
        TextField = __webpack_require__(3015);
        StreamItem_refreshEntry = ((Libg).Libg).offset(9050804, 0);
        <class_fields_init> = undefined;
        StreamItem;
        class StreamItem {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5d12f (open) */
}
            patch () {
        return;
}
            patchAllTextFields (movieClip) {
    var childCount, childArray, i, childPtr, displayObject, textField;
        childCount = (movieClip).getChildCount();
        if ((childCount <= 0)) {
            return;
        } /* if 0x5d03c */
        childArray = (movieClip).getChildArray();
        if ((childArray).isNull()) {
            return;
        } /* if 0x5d054 */
        i = 0;
        while ((i < childCount)) {
            childPtr = ((childArray).add((i * (Process).pointerSize))).readPointer();
            if (!(childPtr).isNull()) {
                displayObject = new (DisplayObject).DisplayObject(childPtr);
                if (!(!(displayObject).isTextField())) {
                    textField = new (TextField).TextField(childPtr);
                    textField.colorTag = true;
                    (textField).setTextScaleIfNecessary((textField).text);
                } /* if 0x5d0ea */
            } /* if 0x5d0ea */
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0x5d0f8 (open) */
}
        }
        StreamItem = v8 = StreamItem;
        exports.StreamItem = StreamItem;
        return;
};

// --------------------- MODULE 8418 — FriendItem ---------------------

// ============================================================ //
// webpack module 8418  —  FriendItem
// exports: FriendItem
// deps: 4009 (Config), 6851 (CustomButton), 9878 (Libg)
// ============================================================ //

__webpack_modules__[8418] = function FriendItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, CustomButton, Config, FriendItem_ctor, FriendItem, <class_fields_init>, FriendItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FriendItem = undefined;
        Libg = __webpack_require__(9878);
        CustomButton = __webpack_require__(6851);
        Config = __webpack_require__(4009);
        FriendItem_ctor = ((Libg).Libg).offset(10854264, 0);
        <class_fields_init> = undefined;
        FriendItem;
        class FriendItem {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x3e6e0 (open) */
}
            patch () {
        return;
}
        }
        FriendItem = v8 = FriendItem;
        exports.FriendItem = FriendItem;
        return;
};

// --------------------- MODULE 1982 — FriendRequestContainer ---------------------

// ============================================================ //
// webpack module 1982  —  FriendRequestContainer
// exports: FriendRequestContainer
// deps: 4541 (HashTagCodeGenerator), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1982] = function FriendRequestContainer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, StringObject, HashTagCodeGenerator, FriendRequestContainer_show, FriendRequestContainer, <class_fields_init>, FriendRequestContainer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FriendRequestContainer = undefined;
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        HashTagCodeGenerator = __webpack_require__(4541);
        FriendRequestContainer_show = new NativeFunction(((Libg).Libg).offset(11643604, 0), "void", ["pointer", "pointer"]);
        <class_fields_init> = undefined;
        FriendRequestContainer;
        class FriendRequestContainer {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x41b34 (open) */
}
            show (name, id) {
        return;
}
            showForTag (tag) {
        return;
}
        }
        FriendRequestContainer = v8 = FriendRequestContainer;
        exports.FriendRequestContainer = FriendRequestContainer;
        return;
};

// --------------------- MODULE 9526 — TeamMemberItem ---------------------

// ============================================================ //
// webpack module 9526  —  TeamMemberItem
// exports: TeamMemberItem
// deps: 4009 (Config), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9526] = function TeamMemberItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Config, TeamMemberItem_setMember, TeamMemberItem, <class_fields_init>, TeamMemberItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamMemberItem = undefined;
        Libg = __webpack_require__(9878);
        Config = __webpack_require__(4009);
        TeamMemberItem_setMember = ((Libg).Libg).offset(10896296, 0);
        <class_fields_init> = undefined;
        TeamMemberItem;
        class TeamMemberItem {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x56bf0 (open) */
}
            patch () {
        return;
}
        }
        TeamMemberItem = TeamMemberItem = TeamMemberItem;
        exports.TeamMemberItem = TeamMemberItem;
        return;
};

// --------------------- MODULE 100 — TeamMemberEntry ---------------------

// ============================================================ //
// webpack module 100  —  TeamMemberEntry
// exports: TeamMemberEntry
// deps: 1588 (LogicMemory), 4009 (Config), 6139 (LogicDataTables), 6794 (LogicData), 7669 (SkinSelector), 9518 (PlayerInfo), 9878 (Libg)
// ============================================================ //

__webpack_modules__[100] = function TeamMemberEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, SkinSelector, PlayerInfo, LogicData, Config, LogicDataTables, TeamMemberEntry_decode, skinOffset, characterOffset, playerIdOffset, lowIdOffset, TeamMemberEntry, <class_fields_init>, TeamMemberEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamMemberEntry = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        SkinSelector = __webpack_require__(7669);
        PlayerInfo = __webpack_require__(9518);
        LogicData = __webpack_require__(6794);
        Config = __webpack_require__(4009);
        LogicDataTables = __webpack_require__(6139);
        TeamMemberEntry_decode = new NativeFunction(((Libg).Libg).offset(15949940, 0), "void", ["pointer", "pointer"]);
        skinOffset = ((LogicMemory).LogicMemory).offset(24, 24);
        characterOffset = ((LogicMemory).LogicMemory).offset(16, 16);
        playerIdOffset = ((LogicMemory).LogicMemory).offset(8, 8);
        lowIdOffset = ((LogicMemory).LogicMemory).offset(4, 4);
        <class_fields_init> = undefined;
        TeamMemberEntry;
        class TeamMemberEntry {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x53722 (open) */
}
            patch () {
        return;
}
        }
        TeamMemberEntry = skinOffset = TeamMemberEntry;
        exports.TeamMemberEntry = TeamMemberEntry;
        return;
};

// --------------------- MODULE 1399 — TeamEntry ---------------------

// ============================================================ //
// webpack module 1399  —  TeamEntry
// exports: TeamEntry
// deps: 1588 (LogicMemory), 1978 (Libc), 4272 (EDebugger), 4974 (Breadcrumbs), 9878 (Libg)
// ============================================================ //

__webpack_modules__[1399] = function TeamEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Libg, Breadcrumbs, EDebugger, LogicMemory, TeamEntry_decode, TeamEntry_getMember, unknownOffset, membersArrayOffset, TeamEntry, <class_fields_init>, TeamEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.TeamEntry = undefined;
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        Breadcrumbs = __webpack_require__(4974);
        EDebugger = __webpack_require__(4272);
        LogicMemory = __webpack_require__(1588);
        TeamEntry_decode = ((Libg).Libg).offset(15929588, 0);
        TeamEntry_getMember = new NativeFunction(((Libg).Libg).offset(15931764, 0), "pointer", ["pointer", "pointer"]);
        unknownOffset = ((LogicMemory).LogicMemory).offset(72);
        membersArrayOffset = ((LogicMemory).LogicMemory).offset(48);
        <class_fields_init> = undefined;
        TeamEntry;
        class TeamEntry {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0x5658f (open) */
}
            patch () {
        (Interceptor).replace(TeamEntry_getMember, new NativeCallback(function (entry, long) {
        if ((((entry).add(membersArrayOffset)).readPointer()).isNull()) {
            ((EDebugger).EDebugger).addMessage(((EDebugger).EDebugger).WARNING, "TeamEntry::getMember:", "Members array is NULL! Why???");
            ((Breadcrumbs).Breadcrumbs).push("TeamEntry::getMember(teamEntry, long); TeamEntry->m_membersArray = NULL!");
            return ((Libc).Libc).malloc(1);
        } /* if 0x564fb */
        return TeamEntry_getMember(entry, long);
}, "pointer", ["pointer", "pointer"]));
        return;
}
        }
        TeamEntry = membersArrayOffset = TeamEntry;
        exports.TeamEntry = TeamEntry;
        return;
};

// --------------------- MODULE 4223 — AllianceFullEntry ---------------------

// ============================================================ //
// webpack module 4223  —  AllianceFullEntry
// exports: AllianceFullEntry
// deps: 1588 (LogicMemory), 5417 (LogicArrayList), 6371 (AllianceHeaderEntry)
// ============================================================ //

__webpack_modules__[4223] = function AllianceFullEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, LogicArrayList, AllianceHeaderEntry, membersArrayOffset, AllianceFullEntry, <class_fields_init>, AllianceFullEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AllianceFullEntry = undefined;
        LogicMemory = __webpack_require__(1588);
        LogicArrayList = __webpack_require__(5417);
        AllianceHeaderEntry = __webpack_require__(6371);
        membersArrayOffset = ((LogicMemory).LogicMemory).offset(8);
        static get header () {
        return new (AllianceHeaderEntry).AllianceHeaderEntry(((this).instance).readPointer());
};
        static get members () {
        return new (LogicArrayList).LogicArrayList((((this).instance).add(membersArrayOffset)).readPointer());
};
        <class_fields_init> = undefined;
        AllianceFullEntry;
        class AllianceFullEntry {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x3a8d1 */
        this.instance = instance;
        return;
}
        }
        AllianceFullEntry = v8 = AllianceFullEntry;
        exports.AllianceFullEntry = AllianceFullEntry;
        return;
};

// --------------------- MODULE 6371 — AllianceHeaderEntry ---------------------

// ============================================================ //
// webpack module 6371  —  AllianceHeaderEntry
// exports: AllianceHeaderEntry
// deps: 2743 (LogicLong)
// ============================================================ //

__webpack_modules__[6371] = function AllianceHeaderEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicLong, AllianceHeaderEntry, <class_fields_init>, AllianceHeaderEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.AllianceHeaderEntry = undefined;
        LogicLong = __webpack_require__(2743);
        static get allianceId () {
        return new (LogicLong).LogicLong(((this).instance).readPointer());
};
        <class_fields_init> = undefined;
        AllianceHeaderEntry;
        class AllianceHeaderEntry {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x3aa1b */
        this.instance = instance;
        return;
}
        }
        AllianceHeaderEntry = AllianceHeaderEntry = AllianceHeaderEntry;
        exports.AllianceHeaderEntry = AllianceHeaderEntry;
        return;
};

// --------------------- MODULE 910 — PlayerEntry ---------------------

// ============================================================ //
// webpack module 910  —  PlayerEntry
// exports: PlayerEntry
// deps: 1588 (LogicMemory), 2743 (LogicLong), 4009 (Config), 6139 (LogicDataTables), 6794 (LogicData), 7669 (SkinSelector), 8775 (GameMain), 9778 (PlayerDisplayData), 9878 (Libg)
// ============================================================ //

__webpack_modules__[910] = function PlayerEntry_factory(__unused_webpack_module, exports, __webpack_require__) {
    var LogicMemory, Libg, SkinSelector, GameMain, LogicData, Config, LogicDataTables, LogicLong, PlayerDisplayData, PlayerEntry_decode, playerIdOffset, playersArrayOffset, skinOffset, playersCountOffset, playerDisplayDataOffset, killsOffset, deathsOffset, damageOffset, healOffset, PlayerEntry, <class_fields_init>, PlayerEntry;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.PlayerEntry = undefined;
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        SkinSelector = __webpack_require__(7669);
        GameMain = __webpack_require__(8775);
        LogicData = __webpack_require__(6794);
        Config = __webpack_require__(4009);
        LogicDataTables = __webpack_require__(6139);
        LogicLong = __webpack_require__(2743);
        PlayerDisplayData = __webpack_require__(9778);
        PlayerEntry_decode = new NativeFunction(((Libg).Libg).offset(15996220, 0), "void", ["pointer", "pointer"]);
        playerIdOffset = ((LogicMemory).LogicMemory).offset(96);
        playersArrayOffset = ((LogicMemory).LogicMemory).offset(8);
        skinOffset = ((LogicMemory).LogicMemory).offset(24);
        playersCountOffset = ((LogicMemory).LogicMemory).offset(20);
        playerDisplayDataOffset = ((LogicMemory).LogicMemory).offset(104);
        killsOffset = ((LogicMemory).LogicMemory).offset(136);
        deathsOffset = ((LogicMemory).LogicMemory).offset(140);
        damageOffset = ((LogicMemory).LogicMemory).offset(144);
        healOffset = ((LogicMemory).LogicMemory).offset(148);
        static get playerId () {
    var long;
        long = (((this).instance).add(playerIdOffset)).readPointer();
        if ((long).isNull()) {
            return null;
        } /* if 0x52fa5 */
        return new (LogicLong).LogicLong(long);
};
        static get displayData () {
        return new (PlayerDisplayData).PlayerDisplayData((((this).instance).add(playerDisplayDataOffset)).readPointer());
};
        static get kills () {
        return (((this).instance).add(killsOffset)).readInt();
};
        static get deaths () {
        return (((this).instance).add(deathsOffset)).readInt();
};
        static get damage () {
        return (((this).instance).add(damageOffset)).readInt();
};
        static get heal () {
        return (((this).instance).add(healOffset)).readInt();
};
        <class_fields_init> = undefined;
        PlayerEntry;
        class PlayerEntry {
            constructor (instance) {
        if (<class_fields_init>) {
        } /* if 0x52f4a */
        this.instance = instance;
        return;
}
            patch () {
        return;
}
        }
        PlayerEntry = PlayerDisplayData = PlayerEntry;
        exports.PlayerEntry = PlayerEntry;
        return;
};

// --------------------- MODULE 1760 — StatusItem ---------------------

// ============================================================ //
// webpack module 1760  —  StatusItem
// exports: StatusItem
// deps: 612 (MovieClip), 5039 (GameButton), 8261 (ListContainerPopup), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[1760] = function StatusItem_factory(__unused_webpack_module, exports, __webpack_require__) {
    var GameButton, ListContainerPopup, StringTable, MovieClip, StatusItem, <class_fields_init>, StatusItem;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StatusItem = undefined;
        GameButton = __webpack_require__(5039);
        ListContainerPopup = __webpack_require__(8261);
        StringTable = __webpack_require__(9250);
        MovieClip = __webpack_require__(612);
        static getStatusName (statusItemId) {
    var statusItemName;
        statusItemName = undefined;
        if ((statusItemId === -1)) {
            statusItemName = "TID_EDIT_REVERT";
        } /* if 0xb5c6b */
        /* jump -> 0xb5c99 */
        if ((statusItemId === 12)) {
            statusItemName = ("TID_TEAM_MEMBER_STATUS_NEW_").concat(statusItemId);
        } /* if 0xb5c86 */
        /* jump -> 0xb5c99 */
        statusItemName = ("TID_TEAM_MEMBER_STATUS_").concat(statusItemId);
        return statusItemName;
};
        <class_fields_init> = undefined;
        StatusItem;
        class StatusItem extends <class_fields_init> = (GameButton).GameButton {
            constructor (statusItemId) {
    var statusItemMovieClip, buttonTextField, statusItemName, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super();
        if (<class_fields_init>) {
        } /* if 0xb5b74 */
        ((this).instance).writePointer((ListContainerPopup).countryPopupListItemVtableAddr);
        statusItemMovieClip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "country_item");
        (this).setMovieClip((statusItemMovieClip).instance, 1);
        buttonTextField = ((MovieClip).MovieClip).getTextFieldByName((statusItemMovieClip).instance, "Text");
        statusItemName = (this).getStatusName(statusItemId);
        this.id = statusItemId;
        buttonTextField.colorTag = true;
        (buttonTextField).setTextScaleIfNecessary(((StringTable).StringTable).getString(statusItemName));
        (statusItemMovieClip).gotoAndStopFrameIndex(1);
        return this;
}
        }
        StatusItem = v8 = StatusItem;
        exports.StatusItem = StatusItem;
        return;
};

// --------------------- MODULE 6265 — StatusSelector ---------------------

// ============================================================ //
// webpack module 6265  —  StatusSelector
// exports: StatusSelectorPopup
// deps: 1760 (StatusItem), 4934 (GUI), 5039 (GameButton), 5599 (TeamMemberStatusMessage), 7265 (Localisation), 8261 (ListContainerPopup), 9168 (MessageManager)
// ============================================================ //

__webpack_modules__[6265] = function StatusSelector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var ListContainerPopup, Localisation, StatusItem, TeamMemberStatusMessage, MessageManager, GUI, GameButton, StatusSelectorPopup, <class_fields_init>, StatusSelectorPopup;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.StatusSelectorPopup = undefined;
        ListContainerPopup = __webpack_require__(8261);
        Localisation = __webpack_require__(7265);
        StatusItem = __webpack_require__(1760);
        TeamMemberStatusMessage = __webpack_require__(5599);
        MessageManager = __webpack_require__(9168);
        GUI = __webpack_require__(4934);
        GameButton = __webpack_require__(5039);
        static refreshItems () {
    var listContainer, statusItemIndex, statusItem, naviHeight;
        listContainer = (this).container;
        (listContainer).clearEntries();
        this.statusItemsCount = (this).statusesArray.length;
        statusItemIndex = 0;
        while ((statusItemIndex < (this).statusItemsCount)) {
            statusItem = new (StatusItem).StatusItem((this).statusesArray[statusItemIndex]);
            (statusItem).setCustomButtonListener(((this).buttonPressed).bind(this));
            ((this).container).addEntry(statusItem);
            statusItemIndex = ((statusItemIndex) + 1);
            (statusItemIndex++);
        } /* while 0xcf55e */
        naviHeight = (this).getNaviHeight();
        ((this).container).refreshEntryPositions(4, naviHeight, 8, 0, 0, 0, -1);
        return;
};
        static buttonPressed (self, button) {
    var statusButton, teamMemberStatus, teamMemberStatusMessage;
        statusButton = new (GameButton).GameButton(button);
        teamMemberStatus = (statusButton).id;
        teamMemberStatusMessage = new (TeamMemberStatusMessage).TeamMemberStatusMessage(teamMemberStatus);
        ((MessageManager).MessageManager).sendMessage(teamMemberStatusMessage);
        return;
};
        <class_fields_init> = undefined;
        StatusSelectorPopup;
        class StatusSelectorPopup extends <class_fields_init> = (ListContainerPopup).ListContainerPopup {
            constructor () {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        this = super({ Title: ((Localisation).Localisation).getString("StatusesPopupTitle") });
        if (<class_fields_init>) {
        } /* if 0xcf42f */
        this.statusesArray = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.statusItemsCount = 0;
        (this).adjustPopupHeaderButtons("status_selector");
        (this).refreshItems();
        StatusSelectorPopup.instance = this;
        if (this) {
            return this;
        } /* if 0xcf48e (open) */
}
        }
        StatusSelectorPopup = <class_fields_init> = StatusSelectorPopup;
        exports.StatusSelectorPopup = StatusSelectorPopup;
        return;
};

