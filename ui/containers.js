//============================================================================//// CONTAINERS & SCROLL AREAS// merged webpack modules: 3210 GUIContainer, 9407 DropGUIContainer, 9016 ScrollArea, 2681 ListContainer//============================================================================//
// --------------------- MODULE 3210 — GUIContainer ---------------------


// ============================================================ //
// webpack module 3210  —  GUIContainer
// exports: GUIContainer
// deps: 612 (MovieClip), 1588 (LogicMemory), 3217 (Sprite), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[3210] = function GUIContainer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Sprite, MovieClip, LogicMemory, Libg, StringObject, GUIContainer_addGameButtonManually, GUIContainer_getTextField, getMovieClipOffset, GUIContainer, <class_fields_init>, GUIContainer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GUIContainer = undefined;
        Sprite = __webpack_require__(3217);
        MovieClip = __webpack_require__(612);
        LogicMemory = __webpack_require__(1588);
        Libg = __webpack_require__(9878);
        StringObject = __webpack_require__(7535);
        GUIContainer_addGameButtonManually = new NativeFunction(((Libg).Libg).offset(8956356, 0), "void", ["pointer", "pointer"]);
        GUIContainer_getTextField = new NativeFunction(((Libg).Libg).offset(6125912, 0), "pointer", ["pointer", "pointer", "pointer"]);
        getMovieClipOffset = ((LogicMemory).LogicMemory).offset(144);
        static getMovieClip () {
        return new (MovieClip).MovieClip((GUIContainer).getMovieClip((this).instance));
};
        static isDestructed () {
        return (this).visibility;
};
        static addGameButtonManually (button) {
        GUIContainer_addGameButtonManually((this).instance, (button).instance);
        return this;
};
        <class_fields_init> = undefined;
        GUIContainer;
        class GUIContainer extends <class_fields_init> = (Sprite).Sprite {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x76d56 */
        return this;
}
            _getMovieClip (instance) {
        return new (MovieClip).MovieClip((GUIContainer).getMovieClip(instance));
}
            getMovieClip (gui) {
        return ((gui).add(getMovieClipOffset)).readPointer();
}
            getTextField (gui, textField, text) {
        return;
}
        }
        GUIContainer = GUIContainer = GUIContainer;
        exports.GUIContainer = GUIContainer;
        return;
};

// --------------------- MODULE 9407 — DropGUIContainer ---------------------


// ============================================================ //
// webpack module 9407  —  DropGUIContainer
// exports: DropGUIContainer
// deps: 1588 (LogicMemory), 1978 (Libc), 3210 (GUIContainer), 5039 (GameButton), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9407] = function DropGUIContainer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, GUIContainer, Libc, GameButton, LogicMemory, DropGUIContainer_ctor, DropGUIContainer_addGameButton, setMovieClipOffset, DropGUIContainer, <class_fields_init>, DropGUIContainer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.DropGUIContainer = undefined;
        Libg = __webpack_require__(9878);
        GUIContainer = __webpack_require__(3210);
        Libc = __webpack_require__(1978);
        GameButton = __webpack_require__(5039);
        LogicMemory = __webpack_require__(1588);
        DropGUIContainer_ctor = new NativeFunction(((Libg).Libg).offset(8951716, 0), "void", ["pointer"]);
        DropGUIContainer_addGameButton = new NativeFunction(((Libg).Libg).offset(8952932, 0), "pointer", ["pointer", "pointer", "int"]);
        setMovieClipOffset = ((LogicMemory).LogicMemory).offset((44 * (Process).pointerSize));
        static addGameButton (buttonName, int) {
        return new (GameButton).GameButton(DropGUIContainer_addGameButton((this).instance, ((LogicMemory).LogicMemory).ensurePointer(buttonName), int));
};
        static setMovieClip (movieClip) {
        if ((((movieClip).instance) == null)) {
        } /* if 0x769d4 */
        return;
};
        <class_fields_init> = undefined;
        DropGUIContainer;
        class DropGUIContainer extends <class_fields_init> = (GUIContainer).GUIContainer {
            constructor (instance, allocationSize) {
    var this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if ((instance instanceof NativePointer)) {
            this = super(instance);
            if (<class_fields_init>) {
            } /* if 0x768b9 */
            return this;
        } /* if 0x768bf */
        if ((!instance)) {
            if (((allocationSize) == null)) {
            } /* if 0x768de */
            instance = ((Libc).Libc).malloc((DropGUIContainer).allocationSize);
        } /* if 0x768e2 */
        DropGUIContainer_ctor(instance);
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x76900 */
        return this;
}
        }
        DropGUIContainer = DropGUIContainer = DropGUIContainer;
        exports.DropGUIContainer = DropGUIContainer;
        DropGUIContainer.allocationSize = 496;
        return;
};

// --------------------- MODULE 9016 — ScrollArea ---------------------


// ============================================================ //
// webpack module 9016  —  ScrollArea
// exports: ScrollArea
// deps: 1588 (LogicMemory), 1978 (Libc), 3015 (TextField), 3217 (Sprite), 9878 (Libg)
// ============================================================ //

__webpack_modules__[9016] = function ScrollArea_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, LogicMemory, Sprite, TextField, Libc, ScrollArea_ctor, ScrollArea_ctorOwnWidthHeight, ScrollArea_addContent, ScrollArea_addContentDontUpdateBounds, ScrollArea_update, ScrollArea_removeAllContent, clippingOffset, dragHandlerOffset, dragHandlerAlignmentOffset, dragHandlerPinchingOffset, unknownOffset, widthOffset, heightOffset, horizontalDragOffset1, verticalDragOffset1, ScrollArea, <class_fields_init>, ScrollArea;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ScrollArea = undefined;
        Libg = __webpack_require__(9878);
        LogicMemory = __webpack_require__(1588);
        Sprite = __webpack_require__(3217);
        TextField = __webpack_require__(3015);
        Libc = __webpack_require__(1978);
        ScrollArea_ctor = new NativeFunction(((Libg).Libg).offset(8958304, 0), "void", ["pointer", "pointer", "int"]);
        ScrollArea_ctorOwnWidthHeight = new NativeFunction(((Libg).Libg).offset(8957652), "void", ["pointer", "float", "float", "int"]);
        ScrollArea_addContent = new NativeFunction(((Libg).Libg).offset(8959636, 0), "void", ["pointer", "pointer"]);
        ScrollArea_addContentDontUpdateBounds = new NativeFunction(((Libg).Libg).offset(8962464, 0), "void", ["pointer", "pointer"]);
        ScrollArea_update = new NativeFunction(((Libg).Libg).offset(8960220, 0), "void", ["pointer", "float"]);
        ScrollArea_removeAllContent = new NativeFunction(((Libg).Libg).offset(8959724, 0), "void", ["pointer"]);
        clippingOffset = ((LogicMemory).LogicMemory).offset(224);
        dragHandlerOffset = ((LogicMemory).LogicMemory).offset(240);
        dragHandlerAlignmentOffset = ((LogicMemory).LogicMemory).offset(392);
        dragHandlerPinchingOffset = ((LogicMemory).LogicMemory).offset(398);
        unknownOffset = ((LogicMemory).LogicMemory).offset(632);
        widthOffset = ((LogicMemory).LogicMemory).offset(192);
        heightOffset = ((LogicMemory).LogicMemory).offset(196);
        horizontalDragOffset1 = ((LogicMemory).LogicMemory).offset(232);
        verticalDragOffset1 = ((LogicMemory).LogicMemory).offset(231);
        static addContent (content) {
    var updateBounds, content, updateBounds;
        updateBounds = this;
        updateBounds = content;
        if (((updateBounds) === undefined)) {
            content = updateBounds = true;
        } /* if 0x7b081 */
        if (updateBounds) {
            ScrollArea_addContent((updateBounds).instance, (content).instance);
            return;
        } /* if 0x7b097 */
        ScrollArea_addContentDontUpdateBounds((updateBounds).instance, (content).instance);
        return;
};
        static enablePinching (pinchingState) {
        return;
};
        static enableHorizontalDrag (state) {
        return;
};
        static enableVerticalDrag (state) {
        return;
};
        static removeAllContent () {
        return;
};
        static setClipping (state) {
        return;
};
        static setAlignment (alignment) {
        return;
};
        static get clipWidth () {
        return (((this).instance).add(widthOffset)).readFloat();
};
        static set clipWidth (value) {
        return;
};
        static get clipHeight () {
        return (((this).instance).add(heightOffset)).readFloat();
};
        static set clipHeight (value) {
        return;
};
        static update (deltaTime) {
        return;
};
        <class_fields_init> = undefined;
        ScrollArea;
        class ScrollArea extends <class_fields_init> = (Sprite).Sprite {
            constructor (instance, unkOrWidth, unk2) {
    var scrollInstance, scrollInstance, this.active_func, new.target;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        if ((instance instanceof (TextField).TextField)) {
            scrollInstance = ((Libc).Libc).malloc((ScrollArea).allocationSize);
            ScrollArea_ctor(scrollInstance, (instance).instance, unkOrWidth);
            this = super(scrollInstance);
            if (<class_fields_init>) {
            } /* if 0x7afb5 */
            return this;
        } /* if 0x7afbb */
        if ((typeof instance === "number")) {
            scrollInstance = ((Libc).Libc).malloc((ScrollArea).allocationSize);
            ScrollArea_ctorOwnWidthHeight(scrollInstance, instance, unkOrWidth, unk2);
            this = super(scrollInstance);
            if (<class_fields_init>) {
            } /* if 0x7b008 */
            return this;
        } /* if 0x7b00e */
        this = super(instance);
        if (<class_fields_init>) {
        } /* if 0x7b026 */
        return this;
}
        }
        ScrollArea = ScrollArea_addContentDontUpdateBounds = ScrollArea;
        exports.ScrollArea = ScrollArea;
        ScrollArea.allocationSize = 712;
        return;
};

// --------------------- MODULE 2681 — ListContainer ---------------------


// ============================================================ //
// webpack module 2681  —  ListContainer
// exports: ListContainer
// deps: 1978 (Libc), 7535 (StringObject), 9878 (Libg)
// ============================================================ //

__webpack_modules__[2681] = function ListContainer_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libg, Libc, StringObject, ListContainer_ctor, ListContainer_addEntry, ListContainer_clearEntries, ListContainer_refreshBounds, ListContainer_refreshEntryPositions, ListContainer_scrollTo, ListContainer, <class_fields_init>, ListContainer;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.ListContainer = undefined;
        Libg = __webpack_require__(9878);
        Libc = __webpack_require__(1978);
        StringObject = __webpack_require__(7535);
        ListContainer_ctor = new NativeFunction(((Libg).Libg).offset(9408232, 0), "void", ["pointer", "pointer", "int", "int", "int", "pointer", "pointer"]);
        ListContainer_addEntry = new NativeFunction(((Libg).Libg).offset(9410960, 0), "void", ["pointer", "pointer"]);
        ListContainer_clearEntries = new NativeFunction(((Libg).Libg).offset(9410044, 0), "void", ["pointer"]);
        ListContainer_refreshBounds = new NativeFunction(((Libg).Libg).offset(9410788, 0), "void", ["pointer", "float"]);
        ListContainer_refreshEntryPositions = new NativeFunction(((Libg).Libg).offset(9411620, 0), "void", ["pointer", "int", "float", "float", "float", "int", "int", "float"]);
        ListContainer_scrollTo = new NativeFunction(((Libg).Libg).offset(0, 0), "void", ["pointer", "float", "float"]);
        static refreshBounds (naviHeight) {
        return;
};
        static refreshEntryPositions (itemsInRow, startYPosition, distanceBetweenRows, f3, f4, int2, f5) {
        return;
};
        static addEntry (entry) {
        ((this).entries).push(entry);
        return;
};
        static getEntry (lambda) {
        return ((this).entries).find(lambda);
};
        static clearEntries () {
        return;
};
        static scrollTo (x, y) {
        if (((Process).platform === "darwin")) {
            ListContainer_scrollTo((this).instance, x, y);
            return;
        } /* if 0x7894a (open) */
};
        <class_fields_init> = undefined;
        ListContainer;
        class ListContainer {
            constructor (movieClip, a2, a3, a4, str, ptr) {
        if (<class_fields_init>) {
        } /* if 0x78756 */
        this.entries = [];
        this.instance = ((Libc).Libc).malloc((ListContainer).allocationSize);
        return;
}
        }
        ListContainer = ListContainer_scrollTo = ListContainer;
        exports.ListContainer = ListContainer;
        ListContainer.allocationSize = 248;
        return;
};

