//============================================================================//// UI INSPECTOR// merged webpack modules: 7710 UiInspector, 7251 UiSnapshot//============================================================================//
// --------------------- MODULE 7710 — UiInspector ---------------------


// ============================================================ //
// webpack module 7710  —  UiInspector
// exports: UiInspector
// deps: 612 (MovieClip), 699 (FileManager), 1191 (DisplayObject), 1721 (ColorTransform), 1978 (Libc), 2214 (ModProperties), 3015 (TextField), 3380 (Logcat), 7251 (UiSnapshot), 8156 (_), 8632 (Stage), 9250 (StringTable)
// ============================================================ //

__webpack_modules__[7710] = function UiInspector_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, Stage, DisplayObject, MovieClip, ColorTransform, TextField, StringTable, UiSnapshot, FileManager, ModProperties, Logcat, _, MAX_BOXES, MAX_LABELS, MAX_ENTRIES, STRIPS_PER_BOX, OUTLINE_THICKNESS, STRIP_ALPHA, LABEL_LINE_HEIGHT, PARENT_WALK_LIMIT, EMPTY_BOUNDS_SENTINEL, MAX_LEAVES, MAX_CHILDREN_SCAN, RECT_TOP_OFFSET, RECT_RIGHT_OFFSET, RECT_BOTTOM_OFFSET, OUTLINE_COLORS, UiInspector, <class_fields_init>, UiInspector;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.UiInspector = undefined;
        Libc = __webpack_require__(1978);
        Stage = __webpack_require__(8632);
        DisplayObject = __webpack_require__(1191);
        MovieClip = __webpack_require__(612);
        ColorTransform = __webpack_require__(1721);
        TextField = __webpack_require__(3015);
        StringTable = __webpack_require__(9250);
        UiSnapshot = __webpack_require__(7251);
        FileManager = __webpack_require__(699);
        ModProperties = __webpack_require__(2214);
        Logcat = __webpack_require__(3380);
        _ = __webpack_require__(8156);
        MAX_BOXES = 6;
        MAX_LABELS = 8;
        MAX_ENTRIES = 20;
        STRIPS_PER_BOX = 4;
        OUTLINE_THICKNESS = 1;
        STRIP_ALPHA = 235;
        LABEL_LINE_HEIGHT = 22;
        PARENT_WALK_LIMIT = 32;
        EMPTY_BOUNDS_SENTINEL = 100000;
        MAX_LEAVES = 256;
        MAX_CHILDREN_SCAN = 256;
        RECT_TOP_OFFSET = 4;
        RECT_RIGHT_OFFSET = 8;
        RECT_BOTTOM_OFFSET = 12;
        OUTLINE_COLORS = [[0, 229, 255], [255, 64, 129], [124, 252, 0], [255, 193, 7], [156, 39, 176], [255, 87, 34]];
        <class_fields_init> = undefined;
        UiInspector;
        class UiInspector {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xac5bd (open) */
}
            requestDump () {
    var label, includeHidden, requestId, label, includeHidden, requestId;
        label = this;
        if (((label) === undefined)) {
            label = label = "screen";
        } /* if 0xaa92a */
        if (((includeHidden) === undefined)) {
            includeHidden = includeHidden = false;
        } /* if 0xaa933 */
        requestId = requestId;
        label.pendingDump = { label: (label).slice(0, 128), includeHidden: includeHidden, requestId: requestId };
        return;
}
            isEnabled () {
        return (this).enabled;
}
            toggle () {
    var mainSprite;
        this.enabled = (!(this).enabled);
        if ((this).enabled) {
            (this).requestDump("inspector-enabled");
            /* CATCH -> 0xaaa05 (try region) */
            mainSprite = ((Stage).Stage).getMainSprite();
            if ((!(mainSprite).isNull())) {
                (this).ensureInitialized();
                (this).bringToTop();
                mainSprite = this;
            } /* if 0xaa9ff */
        } /* if 0xaaa0c */
        /* jump -> 0xaaa16 */
        /* CATCH -> 0xaaa0e (try region) */
        /* jump -> 0xaaa16 */
        throw <underflow>;
        (this).hideAll();
        return (this).enabled;
}
            patch () {
        if ((this).patched) {
            return;
        } /* if 0xaaa53 */
        this.patched = true;
        return;
}
            update () {
    var request, excluded, box, strip, label, error;
        (this).pollDumpRequest();
        if ((this).pendingDump) {
            request = (this).pendingDump;
            this.pendingDump = null;
            /* CATCH -> 0xaabe8 (try region) */
            excluded = new Set();
            /* jump -> 0xaab7f */
            box = /*iter*/ (this).boxes;
            /* jump -> 0xaab79 */
            strip = /*iter*/ (box).strips;
            (excluded).add(((strip).instance).toString());
            } while (!(box).strips);
            strip = (this).boxes;
            } while (!box = excluded = this);
            request = <underflow>;
            /* jump -> 0xaabb0 */
            label = /*iter*/ (this).labels;
            (excluded).add(((label).instance).toString());
            } while (!(this).labels);
            label = <underflow>;
            ((UiSnapshot).UiSnapshot).capture((request).label, (request).includeHidden, excluded, (request).requestId);
            /* jump -> 0xaac10 */
            error = <underflow>;
            /* CATCH -> 0xaac12 (try region) */
            ((Logcat).Logcat).logError(("[UI] snapshot failed: ").concat(error));
            /* jump -> 0xaac10 */
            throw <underflow>;
        } /* if 0xaac13 */
        if ((!(this).enabled)) {
            return;
        } /* if 0xaac1b */
        if (((this).captureSeq === (this).renderedSeq)) {
            return;
        } /* if 0xaac2d */
        this.renderedSeq = (this).captureSeq;
        /* CATCH -> 0xaac50 (try region) */
        (this).render();
        return;
        /* CATCH -> 0xaac58 (try region) */
        return;
        throw <underflow>;
}
            pollDumpRequest () {
    var content, request, error, e;
        if (!(!((ModProperties).ModProperties).isDev())) {
            (!((ModProperties).ModProperties).isDev());
            if (!(this).FUCK_POLL_DUMP_REQUEST) {
                if (!(!((FileManager).FileManager).saveDirPath)) {
                    if (((Date).now() < (this).nextRequestPoll)) {
                        return;
                        /* CATCH -> 0xaae4b (try region) */
                    } /* if 0xaacf8 */
                } /* if 0xaacf5 */
            } /* if 0xaacf5 */
        } /* if 0xaacf5 */
        this.nextRequestPoll = ((Date).now() + 1000);
        content = ((FileManager).FileManager).readFile(("").concat(((FileManager).FileManager).saveDirPath, "/ui-inspector-request.json"), "r");
        if (!(!content)) {
            if ((content === (this).lastRequest)) {
                return undefined;
            } /* if 0xaad61 */
        } /* if 0xaad5c */
        this.lastRequest = content;
        /* CATCH -> 0xaae20 (try region) */
        if ((content.length > 512)) {
            throw new Error("request exceeds 512 characters");
        } /* if 0xaad8c */
        request = (JSON).parse(content);
        if (!(typeof (request).id !== "string")) {
            (typeof (request).id !== "string");
            if (!(!(request).id)) {
                if (((request).id.length > 64)) {
                    throw new Error("request requires a short string id");
                } /* if 0xaadda */
            } /* if 0xaadc9 */
        } /* if 0xaadc9 */
        if ((typeof (request).label === "string")) {
        } /* if 0xaadfc */
        /* jump -> 0xaae04 */
        (request).label((request).id, ((request).includeHidden === true), (request).id);
        /* jump -> 0xaae46 */
        error = request = this;
        /* CATCH -> 0xaae48 (try region) */
        ((Logcat).Logcat).logError(("[UI] invalid request: ").concat(error));
        /* jump -> 0xaae46 */
        throw content = <underflow>;
        return;
        e = <underflow>;
        /* CATCH -> 0xaae62 (try region) */
        (_).LogInfo("sum error with UiInspector.pollDumpRequest");
        return;
        throw <underflow>;
}
            captureLeaves (vectorPointer) {
    var begin, end, count, leaves, i, leaf;
        /* CATCH -> 0xaafd7 (try region) */
        if ((vectorPointer).isNull()) {
            return undefined;
        } /* if 0xaaedf */
        begin = (vectorPointer).readPointer();
        end = ((vectorPointer).add((Process).pointerSize)).readPointer();
        if (!(begin).isNull()) {
            (begin).isNull();
            if ((end).isNull()) {
                return undefined;
            } /* if 0xaaf24 */
        } /* if 0xaaf1f */
        count = (((end).sub(begin)).toInt32() / (Process).pointerSize);
        if (!(count < 0)) {
            if ((count > MAX_LEAVES)) {
                return undefined;
            } /* if 0xaaf5b */
        } /* if 0xaaf56 */
        leaves = [];
        i = 0;
        while ((i < count)) {
            leaf = ((begin).add((i * (Process).pointerSize))).readPointer();
            if ((!(leaf).isNull())) {
                (leaves).push(leaf);
            } /* if 0xaafb1 */
            i = ((i) + 1);
            (i++);
        } /* while 0xaafbb */
        this.capturedLeaves = leaves;
        this.captureSeq = (++(this).captureSeq);
        return;
        /* CATCH -> 0xaafdf (try region) */
        leaf = i = begin = end = count = leaves = <underflow>;
        return;
        throw <underflow>;
}
            render () {
    var stage, mainSprite, entries, selection, boxesUsed, i, bounds, i;
        stage = ((Stage).Stage).getInstance();
        if ((stage).isNull()) {
            return;
        } /* if 0xab078 */
        mainSprite = ((Stage).Stage).getMainSprite();
        if ((mainSprite).isNull()) {
            return;
        } /* if 0xab097 */
        (this).ensureInitialized();
        entries = (this).collectEntries(mainSprite);
        selection = ((entries).map(function (entry) {
        return ((entry).instance).toString();
})).join(",");
        if ((selection !== (this).lastSelection)) {
            this.lastSelection = selection;
            ((UiSnapshot).UiSnapshot).logSelection((entries).map(function (entry) {
        return (entry).instance;
}));
        } /* if 0xab100 */
        if ((entries.length === 0)) {
            return;
        } /* if 0xab113 */
        boxesUsed = 0;
        i = 0;
        while ((i < entries.length)) {
            if ((boxesUsed < MAX_BOXES)) {
                bounds = (entries[i]).bounds;
                if (!(!bounds)) {
                    (this).drawBox(boxesUsed, bounds, OUTLINE_COLORS[(boxesUsed % OUTLINE_COLORS.length)]);
                    boxesUsed = ((boxesUsed) + 1);
                    (boxesUsed++);
                } /* if 0xab16b */
                i = ((i) + 1);
                (i++);
            } /* if 0xab175 */
        } /* while 0xab175 */
        i = boxesUsed;
        while ((i < MAX_BOXES)) {
            (this).hideBox(i);
            i = ((i) + 1);
            (i++);
        } /* while 0xab19e */
        return;
}
            drawLabels (entries) {
    var visibleCount, anchor, baseX, baseY, i, label, i;
        visibleCount = (Math).min(entries.length, MAX_LABELS);
        anchor = (entries[0]).bounds;
        if (anchor) {
        } /* if 0xab291 */
        /* jump -> 0xab293 */
        baseX = 40;
        if (anchor) {
        } /* if 0xab2ad */
        /* jump -> 0xab2af */
        baseY = 80;
        if (anchor) {
            if ((baseY < 10)) {
                baseY = ((anchor).bottom + 6);
            } /* if 0xab2cc */
        } /* if 0xab2cc */
        i = 0;
        while ((i < visibleCount)) {
            label = (this).labels[i];
            (label).setText("Text", (this).formatEntry(entries[i]));
            (label).setXY(baseX, (baseY + (i * LABEL_LINE_HEIGHT)));
            label.visibility = 1;
            i = ((i) + 1);
            (i++);
        } /* while 0xab338 */
        i = visibleCount;
        while ((i < MAX_LABELS)) {
            (this).labels[i].visibility = 0;
            i = ((i) + 1);
            (i++);
            return;
        } /* while 0xab364 (open) */
}
            collectEntries (mainSprite) {
    var seen, entries, addEntry, leaf, current, guard, entry;
        seen = new Set();
        entries = [];
        addEntry = seen = entries = addEntry = <underflow>;
        /* jump -> 0xab454 */
        leaf = /*iter*/ (this).capturedLeaves;
        current = leaf;
        guard = 0;
        while ((!(current).isNull())) {
            if ((!(current).equals(mainSprite))) {
                if ((guard < PARENT_WALK_LIMIT)) {
                    addEntry(current);
                    current = (new (DisplayObject).DisplayObject(current)).parent;
                    guard = ((guard) + 1);
                    (guard++);
                } /* if 0xab454 */
            } /* if 0xab454 */
        } /* while 0xab454 */
        } while (!current = guard = (this).capturedLeaves);
        leaf = <underflow>;
        /* jump -> 0xab474 */
        entry = /*iter*/ entries;
        (this).fillEntry(entry, mainSprite);
        } while (!entries);
        entry = <underflow>;
        (this).collectTextFieldsUnderPoint(entries, seen, addEntry, mainSprite);
        (entries).sort(function (a, b) {
        return ((this).boundsArea(a) - (this).boundsArea(b));
});
        return (entries).slice(0, MAX_ENTRIES);
}
            fillEntry (entry, mainSprite) {
    var displayObject, parentPointer;
        displayObject = new (DisplayObject).DisplayObject((entry).instance);
        if ((((displayObject).type) == null)) {
            entry.type = "?";
        } /* if 0xab5f2 */
        entry.x = (displayObject).x;
        entry.y = (displayObject).y;
        entry.bounds = (this).measureBounds((entry).instance, mainSprite);
        parentPointer = (displayObject).parent;
        if ((parentPointer).isNull()) {
        } /* if 0xab649 */
        /* jump -> 0xab64c */
        this.name = mainSprite(parentPointer, (entry).instance);
        return;
}
            collectTextFieldsUnderPoint (entries, seen, addEntry, mainSprite) {
    var pointX, pointY, smallestArea, entry, area, containerEntry, container, count, childArray, i, childPointer, child, bounds, entry;
        pointX = NaN;
        pointY = NaN;
        smallestArea = Infinity;
        /* jump -> 0xab785 */
        entry = /*iter*/ entries;
        if (!(!(entry).bounds)) {
            area = (this).boundsArea(entry);
            if ((area < smallestArea)) {
                smallestArea = area;
                pointX = ((((entry).bounds).left + ((entry).bounds).right) / 2);
                pointY = ((((entry).bounds).top + ((entry).bounds).bottom) / 2);
            } /* if 0xab785 */
        } /* if 0xab785 */
        } while (!area = entries);
        entry = pointX = pointY = smallestArea = <underflow>;
        if ((Number).isNaN(pointX)) {
            return;
        } /* if 0xab79e */
        /* jump -> 0xab99c */
        containerEntry = /*iter*/ 0;
        if (!(entries.length >= MAX_ENTRIES)) {
            /* CATCH -> 0xab994 (try region) */
            if ((!(new (DisplayObject).DisplayObject((containerEntry).instance)).isMovieClip())) {
                container = count = childArray = 0;
            } /* if 0xab7ea */
            /* jump -> 0xab99c */
            container = new (MovieClip).MovieClip((containerEntry).instance);
            count = (container).getChildCount();
            childArray = (container).getChildArray();
            if (!(childArray).isNull()) {
                (childArray).isNull();
                if (!(count <= 0)) {
                    (count <= 0);
                    if ((count > MAX_CHILDREN_SCAN)) {
                        ([]);
                    } /* if 0xab83f */
                } /* if 0xab839 */
            } /* if 0xab839 */
            /* jump -> 0xab99c */
            i = 0;
            while ((i < count)) {
                childPointer = ((childArray).add((i * (Process).pointerSize))).readPointer();
                if (!(childPointer).isNull()) {
                    (childPointer).isNull();
                    if (!(seen).has((childPointer).toString())) {
                        child = new (DisplayObject).DisplayObject(childPointer);
                        if (!(!(child).isTextField())) {
                            bounds = (this).measureBounds(childPointer, mainSprite);
                            if (!(!bounds)) {
                                if (!(pointX < (bounds).left)) {
                                    if (!(pointX > (bounds).right)) {
                                        if (!(pointY < (bounds).top)) {
                                            if (!(pointY > (bounds).bottom)) {
                                                entry = addEntry(childPointer);
                                                if (!(!entry)) {
                                                    entry.type = "TextField";
                                                    entry.x = (child).x;
                                                    entry.y = (child).y;
                                                    entry.bounds = bounds;
                                                    entry.name = (this).resolveName((containerEntry).instance, childPointer);
                                                } /* if 0xab983 */
                                            } /* if 0xab983 */
                                        } /* if 0xab91f */
                                    } /* if 0xab91f */
                                } /* if 0xab91f */
                            } /* if 0xab986 */
                        } /* if 0xab986 */
                    } /* if 0xab986 */
                } /* if 0xab8a3 */
                i = ((i) + 1);
                (i++);
            } /* while 0xab991 */
            /* jump -> 0xab99b */
            /* CATCH -> 0xab99d (try region) */
            /* jump -> 0xab99b */
            throw entry;
            } while (!entry);
            childPointer = child = bounds = entry = i = containerEntry = <underflow>;
            return;
        } /* if 0xab9a6 (open) */
}
            boundsArea (entry) {
        if ((!(entry).bounds)) {
            return Infinity;
        } /* if 0xab9ff */
        return ((((entry).bounds).right - ((entry).bounds).left) * (((entry).bounds).bottom - ((entry).bounds).top));
}
            resolveName (parentPointer, childPointer) {
    var parent, name, child, exportName;
        /* CATCH -> 0xabac5 (try region) */
        parent = new (DisplayObject).DisplayObject(parentPointer);
        if ((parent).isMovieClip()) {
            name = (new (MovieClip).MovieClip(parentPointer)).getNameOfChild(new (MovieClip).MovieClip(childPointer));
            if (name) {
                return name;
                name = parent = <underflow>;
            } /* if 0xababf */
        } /* if 0xababf */
        /* jump -> 0xabacc */
        /* CATCH -> 0xabace (try region) */
        /* jump -> 0xabacc */
        throw <underflow>;
        /* CATCH -> 0xabb15 (try region) */
        child = new (DisplayObject).DisplayObject(childPointer);
        if ((child).isMovieClip()) {
            exportName = (new (MovieClip).MovieClip(childPointer)).exportName;
            if (exportName) {
                return exportName;
                exportName = child = <underflow>;
            } /* if 0xabb0f */
        } /* if 0xabb0f */
        /* jump -> 0xabb1c */
        /* CATCH -> 0xabb1e (try region) */
        /* jump -> 0xabb1c */
        throw <underflow>;
        return "";
}
            formatEntry (entry) {
    var label, position, size;
        if (!(entry).name) {
            if (!(entry).type) {
                label = "?";
            } /* if 0xabb7f */
        } /* if 0xabb7f */
        position = ("").concat((Math).round((entry).x), ",", (Math).round((entry).y));
        if ((entry).bounds) {
        } /* if 0xabc19 */
        /* jump -> 0xabc1a */
        size = "";
        return ("").concat(label, " [", (entry).type, "]", (this).formatText(entry), " @", position, size);
}
            formatText (entry) {
    var value, trimmed;
        if (((entry).type !== "TextField")) {
            return "";
            /* CATCH -> 0xabcfe (try region) */
        } /* if 0xabc8d */
        value = (new (TextField).TextField((entry).instance)).text;
        if ((!value)) {
            return "";
        } /* if 0xabcb9 */
        if ((value.length > 24)) {
        } /* if 0xabce0 */
        /* jump -> 0xabce3 */
        trimmed = value;
        return (" =\"").concat(trimmed, "\"");
        ("").concat((value).slice(0, 24), "...");
        /* CATCH -> 0xabd07 (try region) */
        return "";
        throw value = trimmed = <underflow>;
}
            measureBounds (pointer, mainSprite) {
    var rect;
        /* CATCH -> 0xabdd0 (try region) */
        (new (DisplayObject).DisplayObject(pointer)).getBounds(mainSprite, (this).rectBuffer);
        rect = (this).readRectBuffer();
        if (!(!(Number).isFinite((rect).left))) {
            (!(Number).isFinite((rect).left));
            if (((rect).left >= EMPTY_BOUNDS_SENTINEL)) {
                return null;
            } /* if 0xabd9d */
        } /* if 0xabd98 */
        if (!((rect).right <= (rect).left)) {
            ((rect).right <= (rect).left);
            if (((rect).bottom <= (rect).top)) {
                return null;
            } /* if 0xabdc8 */
        } /* if 0xabdc3 */
        return rect;
        rect = <underflow>;
        /* CATCH -> 0xabdd9 (try region) */
        return null;
        throw <underflow>;
}
            readRectBuffer () {
        return { left: ((this).rectBuffer).readFloat(), top: (((this).rectBuffer).add(RECT_TOP_OFFSET)).readFloat(), right: (((this).rectBuffer).add(RECT_RIGHT_OFFSET)).readFloat(), bottom: (((this).rectBuffer).add(RECT_BOTTOM_OFFSET)).readFloat() };
}
            drawBox (boxIndex, bounds, color) {
    var strips, width, height, thickness;
        strips = ((this).boxes[boxIndex]).strips;
        width = ((bounds).right - (bounds).left);
        height = ((bounds).bottom - (bounds).top);
        thickness = (Math).max(0.5, (Math).min(OUTLINE_THICKNESS, (width / 2), (height / 2)));
        (this).placeStrip(strips[0], (bounds).left, (bounds).top, width, thickness, color);
        (this).placeStrip(strips[1], (bounds).left, ((bounds).bottom - thickness), width, thickness, color);
        (this).placeStrip(strips[2], (bounds).left, (bounds).top, thickness, height, color);
        return;
}
            placeStrip (strip, left, top, width, height, color) {
    var naturalWidth, naturalHeight, scaleX, scaleY;
        ((ColorTransform).ColorTransform).setColor((strip).instance, color[0], color[1], color[2], STRIP_ALPHA);
        if (!(((this).stripNatural).right - ((this).stripNatural).left)) {
            naturalWidth = 1;
        } /* if 0xac077 */
        if (!(((this).stripNatural).bottom - ((this).stripNatural).top)) {
            naturalHeight = 1;
        } /* if 0xac096 */
        scaleX = ((Math).max(width, 0.5) / naturalWidth);
        scaleY = ((Math).max(height, 0.5) / naturalHeight);
        strip.scaleX = scaleX;
        strip.scaleY = scaleY;
        (strip).setXY((left - (((this).stripNatural).left * scaleX)), (top - (((this).stripNatural).top * scaleY)));
        strip.visibility = 1;
        return;
}
            hideBox (boxIndex) {
    var strips, strip;
        strips = ((this).boxes[boxIndex]).strips;
        /* jump -> 0xac175 */
        strip = /*iter*/ strips;
        strip.visibility = 0;
        } while (!strip);
        return;
}
            hideAll () {
    var i, label;
        if ((!(this).initialized)) {
            return;
        } /* if 0xac1b1 */
        i = 0;
        while ((i < MAX_BOXES)) {
            (this).hideBox(i);
            i = ((i) + 1);
            (i++);
        } /* while 0xac1d6 */
        /* jump -> 0xac1ec */
        label = /*iter*/ (this).labels;
        label.visibility = 0;
        } while (!label);
        return;
}
            bringToTop () {
    var box, strip, label;
        if ((!(this).initialized)) {
            return;
        } /* if 0xac232 */
        /* jump -> 0xac286 */
        box = /*iter*/ (this).boxes;
        /* jump -> 0xac280 */
        strip = /*iter*/ (box).strips;
        ((Stage).Stage).removeChild((strip).instance);
        ((Stage).Stage).addChild((strip).instance);
        } while (!(box).strips);
        strip = (this).boxes;
        } while (!box = <underflow>);
        /* jump -> 0xac2cb */
        label = /*iter*/ (this).labels;
        ((Stage).Stage).removeChild((label).instance);
        ((Stage).Stage).addChild((label).instance);
        } while (!(this).labels);
        label = <underflow>;
        return;
}
            ensureInitialized () {
    var b, strips, s, strip, i, label;
        if ((this).initialized) {
            return;
        } /* if 0xac33a */
        b = 0;
        while ((b < MAX_BOXES)) {
            strips = [];
            s = 0;
            while ((s < STRIPS_PER_BOX)) {
                strip = ((StringTable).StringTable).getMovieClip("sc/ui.sc", "map_editor_ui_darkening");
                ((Stage).Stage).addChild((strip).instance);
                strip.visibility = 0;
                (strips).push(strip);
                s = ((s) + 1);
                (s++);
            } /* while 0xac3b9 */
            ((this).boxes).push({ strips: strips });
            b = ((b) + 1);
            (b++);
        } /* while 0xac3e0 */
        (this).measureStripNatural();
        i = 0;
        while ((i < MAX_LABELS)) {
            label = ((StringTable).StringTable).getMovieClip("sc/debug.sc", "debug_menu_text");
            ((Stage).Stage).addChild((label).instance);
            label.visibility = 0;
            ((this).labels).push(label);
            i = ((i) + 1);
            (i++);
        } /* while 0xac455 */
        this.initialized = true;
        return;
}
            measureStripNatural () {
    var mainSprite, probe, rect;
        /* CATCH -> 0xac57e (try region) */
        mainSprite = ((Stage).Stage).getMainSprite();
        if ((mainSprite).isNull()) {
            return undefined;
        } /* if 0xac4d6 */
        probe = ((this).boxes[0]).strips[0];
        probe.scaleX = 1;
        probe.scaleY = 1;
        (probe).setXY(0, 0);
        (probe).getBounds(mainSprite, (this).rectBuffer);
        rect = (this).readRectBuffer();
        if ((Number).isFinite((rect).left)) {
            if (((rect).left < EMPTY_BOUNDS_SENTINEL)) {
                if (((rect).right > (rect).left)) {
                    if (((rect).bottom > (rect).top)) {
                        this.stripNatural = rect;
                    } /* if 0xac579 */
                } /* if 0xac579 */
            } /* if 0xac579 */
        } /* if 0xac579 */
        return;
        /* CATCH -> 0xac586 (try region) */
        return;
        throw mainSprite = probe = rect = <underflow>;
}
        }
        UiInspector = FileManager = UiInspector;
        exports.UiInspector = UiInspector;
        UiInspector.patched = false;
        UiInspector.enabled = false;
        UiInspector.initialized = false;
        UiInspector.boxes = [];
        UiInspector.labels = [];
        UiInspector.rectBuffer = ((Libc).Libc).malloc(16);
        UiInspector.stripNatural = { left: 0, top: 0, right: 1, bottom: 1 };
        UiInspector.capturedLeaves = [];
        UiInspector.captureSeq = 0;
        UiInspector.renderedSeq = -1;
        UiInspector.pendingDump = null;
        UiInspector.lastRequest = "";
        UiInspector.nextRequestPoll = 0;
        UiInspector.lastSelection = "";
        UiInspector.FUCK_POLL_DUMP_REQUEST = true;
        return;
};

// --------------------- MODULE 7251 — UiSnapshot ---------------------


// ============================================================ //
// webpack module 7251  —  UiSnapshot
// exports: UiSnapshot
// deps: 612 (MovieClip), 699 (FileManager), 1191 (DisplayObject), 1978 (Libc), 3015 (TextField), 3217 (Sprite), 3380 (Logcat), 8632 (Stage), 9878 (Libg)
// ============================================================ //

__webpack_modules__[7251] = function UiSnapshot_factory(__unused_webpack_module, exports, __webpack_require__) {
    var DisplayObject, MovieClip, Sprite, TextField, Stage, Libc, Libg, Logcat, FileManager, MAX_NODES, MAX_CHILDREN, MAX_DEPTH, LOG_CHUNK_LENGTH, UiSnapshot, <class_fields_init>, UiSnapshot;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.UiSnapshot = undefined;
        DisplayObject = __webpack_require__(1191);
        MovieClip = __webpack_require__(612);
        Sprite = __webpack_require__(3217);
        TextField = __webpack_require__(3015);
        Stage = __webpack_require__(8632);
        Libc = __webpack_require__(1978);
        Libg = __webpack_require__(9878);
        Logcat = __webpack_require__(3380);
        FileManager = __webpack_require__(699);
        MAX_NODES = 8192;
        MAX_CHILDREN = 1024;
        MAX_DEPTH = 32;
        LOG_CHUNK_LENGTH = 700;
        <class_fields_init> = undefined;
        UiSnapshot;
        class UiSnapshot {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xad799 (open) */
}
            logSelection (pointers) {
    var snapshot, nodes;
        this.sequence = (++(this).sequence);
        snapshot = (Date).now()("-", (++(this).sequence), this);
        nodes = (pointers).map(function (pointer) {
    var object, type;
        object = new (DisplayObject).DisplayObject(pointer);
        type = (this).getType(object);
        if ((type).textField) {
        } /* if 0xac8a6 */
        /* jump -> 0xac8ab */
        (new (TextField).TextField(pointer)).text.text = undefined;
        return (new (TextField).TextField(pointer)).text;
});
        return;
}
            capture (label, includeHidden, excluded, requestId) {
    var started, snapshot, nodes, issues, seen, names, root, viewport, pending, item, key, node, object, type, bounds, children, index, child, error, node, result;
        started = (Date).now();
        this.sequence = (++(this).sequence);
        snapshot = started("-", (++(this).sequence), this);
        nodes = [];
        issues = [];
        seen = new Set();
        names = new Map();
        root = ((Stage).Stage).getMainSprite();
        viewport = [((Stage).Stage).getMatrixX(), ((Stage).Stage).getMatrixY()];
        pending = [{ pointer: root, parent: null, index: 0, name: "Stage", visible: true, alpha: 255, button: null, depth: 0 }];
        while (pending.length) {
            if ((nodes.length < MAX_NODES)) {
                item = (pending).pop();
                key = ((item).pointer).toString();
                if (!((item).pointer).isNull()) {
                    ((item).pointer).isNull();
                    if (!(seen).has(key)) {
                        (seen).has(key);
                        } while ((excluded).has(key));
                    } /* if 0xacac7 */
                } /* if 0xacac7 */
                (seen).add(key);
                if (!(item).name) {
                    if (!(names)["get"](key)) {
                    } /* if 0xacb23 */
                } /* if 0xacb23 */
                node = { id: nodes.length, parent: (item).parent, index: (item).index, pointer: key, name: "", type: "Unknown", visible: false, effectiveVisible: false, button: (item).button };
                /* CATCH -> 0xacedf (try region) */
                object = new (DisplayObject).DisplayObject((item).pointer);
                node.visible = ((object).visibility !== 0);
                node.alpha = ((object).colorTransform).alpha;
                node.effectiveAlpha = (((item).alpha * (node).alpha) / 255);
                if ((item).visible) {
                    if ((node).visible) {
                        node.effectiveVisible = ((node).effectiveAlpha > 0);
                    } /* if 0xacbdd */
                } /* if 0xacbdd */
                if ((!(node).effectiveVisible)) {
                    if ((!includeHidden)) {
                    } /* if 0xacbf5 */
                } /* if 0xacbf5 */
                type = (this).getType(object);
                node.type = (type).name;
                if ((type).button) {
                } /* if 0xacc2b */
                /* jump -> 0xacc33 */
                (node).id.button = (item).button;
                node.vtable = (((object).vtable).sub(((Libg).Libg).libgBeginOffset)).toString();
                node.position = [(object).x, (object).y];
                if ((type).movieClip) {
                    if ((((new (MovieClip).MovieClip((item).pointer)).exportName) == null)) {
                        (new (MovieClip).MovieClip((item).pointer)).exportName;
                        node.exportName = "";
                    } /* if 0xaccac */
                } /* if 0xaccb1 */
                if ((type).textField) {
                    node.text = (new (TextField).TextField((item).pointer)).text;
                } /* if 0xaccdc */
                (object).getBounds(root, (this).rectangle);
                bounds = ([0, 4, 8, 12]).map(function (offset) {
        return (((this).rectangle).add(offset)).readFloat();
});
                if ((bounds).every((Number).isFinite)) {
                    if ((bounds[0] < 100000)) {
                        if ((bounds[2] > bounds[0])) {
                            if ((bounds[3] > bounds[1])) {
                                node.bounds = (bounds).map(function (value) {
        return ((Math).round((value * 100)) / 100);
});
                                if ((bounds[2] > 0)) {
                                    if ((bounds[3] > 0)) {
                                        if ((bounds[0] < viewport[0])) {
                                            node.inViewport = (bounds[1] < viewport[1]);
                                        } /* if 0xacd8d */
                                    } /* if 0xacd8d */
                                } /* if 0xacd8d */
                            } /* if 0xacd92 */
                        } /* if 0xacd92 */
                    } /* if 0xacd92 */
                } /* if 0xacd92 */
                (nodes).push(node);
                children = (this).getChildren((item).pointer, type, names);
                if (((item).depth >= MAX_DEPTH)) {
                    if (children.length) {
                        (issues).push(("depth limit at node ").concat((node).id));
                    } /* if 0xacdf0 */
                } /* if 0xacdf4 */
                index = (children.length - 1);
                while ((index >= 0)) {
                    child = children[index];
                    if (!((child).pointer).isNull()) {
                        if (!(!((new (DisplayObject).DisplayObject((child).pointer)).parent).equals((item).pointer))) {
                            (pending).push({ pointer: (child).pointer, parent: (node).id, index: (child).index, name: (child).name, visible: (node).effectiveVisible, button: (node).button, alpha: (node).effectiveAlpha, depth: ((item).depth + 1) });
                        } /* if 0xacecd */
                    } /* if 0xaced0 */
                    index = ((index) - 1);
                    (index--);
                    child = index = node;
                } /* while 0xacedb */
                error = node;
                /* CATCH -> 0xacf47 (try region) */
                node.error = String(error);
                if ((nodes[(nodes.length - 1)] !== node)) {
                    (nodes).push(node);
                } /* if 0xacf12 */
                (issues).push(("node ").concat((node).id, ": ", (node).error));
                throw node;
            } /* if 0xacf48 */
        } /* while 0xacf48 */
        if (pending.length) {
            (issues).push(("node limit reached; ").concat(pending.length, " branches remain"));
        } /* if 0xacf6d */
        /* jump -> 0xacfcd */
        node = /*iter*/ nodes;
        if (((node).parent === (node).button)) {
            /* is_null  */
            if (!(node).button) {
                if ((node).name) {
                    if ((!(nodes[(node).button]).name)) {
                        nodes[(node).button].name = (node).name;
                    } /* if 0xacfcd */
                } /* if 0xacfcd */
            } /* if 0xacfcd */
        } /* if 0xacfcd */
        } while (!nodes[(node).button]);
        result = { schema: 1, snapshot: snapshot, requestId: requestId, label: label, includeHidden: includeHidden, coordinateSpace: "Stage.mainSprite", traversal: "live display list", viewport: viewport, pointSize: ((Stage).Stage).getPointSize(), nodes: nodes, issues: issues, elapsedMs: ((Date).now() - started) };
        Object.assign(result, null);
        ({ event: "begin" });
        0.nodes = undefined;
        this((this).emit, snapshot, 0);
        (nodes).forEach(function (node, index) {
        Object.assign(node, null);
        ({ event: "node" });
        return this((this).emit, snapshot, (index + 1));
});
        (this).emit(snapshot, (nodes.length + 1), { event: "end", nodes: nodes.length, issues: issues });
        if (((FileManager).FileManager).saveDirPath) {
            ((FileManager).FileManager).writeToFile(("").concat(((FileManager).FileManager).saveDirPath, "/ui-inspector-snapshot.json"), "w", (JSON).stringify(result));
        } /* if 0xad107 */
        return result;
}
            emit (snapshot, record, value) {
    var serialized, parts, part;
        serialized = (JSON).stringify(value);
        parts = (Math).ceil((serialized.length / LOG_CHUNK_LENGTH));
        part = 0;
        while ((part < parts)) {
            ((Logcat).Logcat).logDebug(("[UI] ").concat((JSON).stringify({ snapshot: snapshot, record: record, part: part, parts: parts, data: (serialized).slice((part * LOG_CHUNK_LENGTH), ((part + 1) * LOG_CHUNK_LENGTH)) })));
            part = ((part) + 1);
            (part++);
            return;
        } /* while 0xad2f0 (open) */
}
            getType (object) {
    var key, cached, movieClip, textField, button, gui, scroll, sprite, name, type;
        key = ((object).vtable).toString();
        cached = ((this).types)["get"](key);
        if (cached) {
            return cached;
        } /* if 0xad395 */
        movieClip = (!(!(object).isMovieClip()));
        if ((!movieClip)) {
            textField = (!(!(object).isTextField()));
        } /* if 0xad3b4 */
        if ((!movieClip)) {
            if ((!textField)) {
                button = (!(!(object).isCustomButton()));
            } /* if 0xad3d0 */
        } /* if 0xad3d0 */
        if ((!movieClip)) {
            if ((!textField)) {
                if ((!button)) {
                    gui = (!(!(object).isGUIContainer()));
                } /* if 0xad3f5 */
            } /* if 0xad3f5 */
        } /* if 0xad3f5 */
        if ((!movieClip)) {
            if ((!textField)) {
                if ((!button)) {
                    if ((!gui)) {
                        scroll = (!(!(object).isScrollArea()));
                    } /* if 0xad422 */
                } /* if 0xad422 */
            } /* if 0xad422 */
        } /* if 0xad422 */
        if ((!movieClip)) {
            if ((!textField)) {
                sprite = (!(!(object).isSprite()));
            } /* if 0xad43f */
        } /* if 0xad43f */
        if (movieClip) {
        } /* if 0xad44d */
        /* jump -> 0xad4b2 */
        if (textField) {
        } /* if 0xad459 */
        /* jump -> 0xad4b2 */
        if (button) {
        } /* if 0xad465 */
        /* jump -> 0xad4b2 */
        if (gui) {
        } /* if 0xad471 */
        /* jump -> 0xad4b2 */
        if (scroll) {
        } /* if 0xad47d */
        /* jump -> 0xad4b2 */
        if (sprite) {
        } /* if 0xad489 */
        /* jump -> 0xad4b2 */
        if ((object).isShape()) {
        } /* if 0xad49b */
        /* jump -> 0xad4b2 */
        if ((object).isSprite3D()) {
        } /* if 0xad4ad */
        /* jump -> 0xad4b2 */
        name = "DisplayObject";
        type = { name: name, movieClip: movieClip, textField: textField, sprite: sprite, button: button };
        return type;
}
            getChildren (pointer, type, names) {
    var children, movieClip, count, array, nameArray, index, namePointer, sprite, count, index;
        children = [];
        if ((type).movieClip) {
            movieClip = new (MovieClip).MovieClip(pointer);
            count = (movieClip).getChildCount();
            if (!(count < 0)) {
                if ((count > MAX_CHILDREN)) {
                    throw new Error(("invalid MovieClip child count ").concat(count));
                } /* if 0xad5d0 */
            } /* if 0xad5b4 */
            array = (movieClip).getChildArray();
            nameArray = (movieClip).getChildNameList();
            if (count) {
                if ((array).isNull()) {
                    throw new Error("null MovieClip child array");
                } /* if 0xad60a */
            } /* if 0xad60a */
            index = 0;
            while ((index < count)) {
                if ((nameArray).isNull()) {
                } /* if 0xad633 */
                /* jump -> 0xad654 */
                namePointer = ((nameArray).add((index * (Process).pointerSize))).readPointer();
                if ((!(namePointer).isNull())) {
                    if ((((namePointer).readUtf8String()) == null)) {
                        (namePointer).readUtf8String();
                    } /* if 0xad6a4 */
                    (names)["set"]((((array).add((index * (Process).pointerSize))).readPointer()).toString(), "");
                } /* if 0xad6a8 */
                index = ((index) + 1);
                (index++);
            } /* while 0xad6b6 */
        } /* if 0xad6b6 */
        if (!(type).movieClip) {
            if ((type).sprite) {
                sprite = new (Sprite).Sprite(pointer);
                count = (sprite).childCount;
                if ((count > MAX_CHILDREN)) {
                    throw new Error(("invalid Sprite child count ").concat(count));
                } /* if 0xad70a */
                index = 0;
                while ((index < count)) {
                    (children).push({ pointer: (sprite).getChildAt(index), index: index, name: "" });
                    index = ((index) + 1);
                    (index++);
                } /* while 0xad751 */
                return children;
            } /* if 0xad754 (open) */
        } /* if 0xad6c3 (open) */
}
        }
        UiSnapshot = FileManager = UiSnapshot;
        exports.UiSnapshot = UiSnapshot;
        UiSnapshot.types = new Map();
        UiSnapshot.rectangle = ((Libc).Libc).malloc(16);
        UiSnapshot.sequence = 0;
        return;
};

