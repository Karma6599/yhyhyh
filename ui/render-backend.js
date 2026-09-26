//============================================================================//// OVERLAY RENDERING BACKEND (GL/METAL OVERLAY USED BY ALL DRAWING FEATURES)// merged webpack modules: 1301 RenderOverlay, 5508 GLOverlay, 3388 MetalOverlayBackend//============================================================================//
// --------------------- MODULE 1301 — RenderOverlay ---------------------


// ============================================================ //
// webpack module 1301  —  RenderOverlay
// exports: BYTES_PER_FLOAT, FLOATS_PER_VERTEX, FRAMES_BEFORE_INIT, LINE_STRIDE_FLOATS, MAX_GAME_OBJECTS, MAX_LINES_PER_FRAME, MAX_VERTEX_FLOATS, MIN_VP_MATRIX_VALUE, RenderOverlay, VERTEX_STRIDE_BYTES, VERTICES_PER_LINE
// deps: 1588 (LogicMemory), 1978 (Libc), 2556 (BSDPlusManager), 4009 (Config), 5523 (LogicBattleModeClient), 6128 (BattleMode), 6584 (EnemyTracer), 6670 (DebugMenuState), 7835 (BattleScreen)
// ============================================================ //

__webpack_modules__[1301] = function RenderOverlay_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, BattleMode, BattleScreen, Config, LogicMemory, BSDPlusManager, LogicBattleModeClient, EnemyTracer, DebugMenuState, vpMatrixOffset, vertex0YOffset, vertex0ZOffset, vertex1XOffset, vertex1YOffset, vertex1ZOffset, WIREFRAME_CUBE_LINE_INDICES, RenderOverlay, <class_fields_init>, RenderOverlay;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.FLOATS_PER_VERTEX = undefined;
        undefined.BYTES_PER_FLOAT = exports;
        exports.VERTEX_STRIDE_BYTES = undefined;
        undefined.VERTICES_PER_LINE = exports;
        exports.MAX_VERTEX_FLOATS = undefined;
        undefined.MAX_LINES_PER_FRAME = exports;
        exports.LINE_STRIDE_FLOATS = undefined;
        undefined.FRAMES_BEFORE_INIT = exports;
        exports.MAX_GAME_OBJECTS = undefined;
        undefined.MIN_VP_MATRIX_VALUE = exports;
        exports.RenderOverlay = undefined;
        Libc = __webpack_require__(1978);
        BattleMode = __webpack_require__(6128);
        BattleScreen = __webpack_require__(7835);
        Config = __webpack_require__(4009);
        LogicMemory = __webpack_require__(1588);
        BSDPlusManager = __webpack_require__(2556);
        LogicBattleModeClient = __webpack_require__(5523);
        EnemyTracer = __webpack_require__(6584);
        DebugMenuState = __webpack_require__(6670);
        vpMatrixOffset = ((LogicMemory).LogicMemory).offset(2152);
        exports.FLOATS_PER_VERTEX = 3;
        exports.BYTES_PER_FLOAT = 4;
        exports.VERTEX_STRIDE_BYTES = ((exports).FLOATS_PER_VERTEX * (exports).BYTES_PER_FLOAT);
        exports.VERTICES_PER_LINE = 2;
        vertex0YOffset = 4;
        vertex0ZOffset = 8;
        vertex1XOffset = 12;
        vertex1YOffset = 16;
        vertex1ZOffset = 20;
        exports.MAX_VERTEX_FLOATS = 512;
        exports.MAX_LINES_PER_FRAME = 1024;
        exports.LINE_STRIDE_FLOATS = 10;
        exports.FRAMES_BEFORE_INIT = 30;
        exports.MAX_GAME_OBJECTS = 100;
        exports.MIN_VP_MATRIX_VALUE = 0.01;
        WIREFRAME_CUBE_LINE_INDICES = [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7];
        static collectFrameData () {
    var activeRenderers, logicBattleModeClientPtr, logicBattleModeClient, gameObjects, objectArray, objectCount, ownTeam, ownPlayerIndex, renderer, prev;
        if ((!(this).inBattle)) {
            return;
        } /* if 0xa4818 */
        if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            return;
        } /* if 0xa4829 */
        activeRenderers = ((RenderOverlay).registeredRenderers).filter(function (r) {
        return ((Config).Config).config[(r).configKey];
});
        if ((activeRenderers.length === 0)) {
            return;
            /* CATCH -> 0xa4987 (try region) */
        } /* if 0xa4845 */
        logicBattleModeClientPtr = ((BattleMode).BattleMode).getLogicBattleModeClient();
        if ((logicBattleModeClientPtr).isNull()) {
            return undefined;
        } /* if 0xa4883 */
        logicBattleModeClient = new (LogicBattleModeClient).LogicBattleModeClient(logicBattleModeClientPtr);
        gameObjects = (logicBattleModeClient).getGameObjects();
        objectArray = (gameObjects).getArray();
        if ((objectArray).isNull()) {
            return undefined;
        } /* if 0xa48bc */
        objectCount = (gameObjects).getItemsCount();
        if (!(objectCount <= 0)) {
            (objectCount <= 0);
            if ((objectCount > (exports).MAX_GAME_OBJECTS)) {
                return undefined;
            } /* if 0xa48e3 */
        } /* if 0xa48de */
        ownTeam = (logicBattleModeClient).ownPlayerTeam;
        ownPlayerIndex = (logicBattleModeClient).ownPlayerIndex;
        RenderOverlay.pendingCount = 0;
        RenderOverlay.collectingData = true;
        /* jump -> 0xa493e */
        renderer = /*iter*/ activeRenderers;
        /* CATCH -> 0xa4937 (try region) */
        (renderer).callback(objectArray, objectCount, ownTeam, ownPlayerIndex);
        /* jump -> 0xa493e */
        renderer = RenderOverlay;
        /* CATCH -> 0xa4940 (try region) */
        /* jump -> 0xa493e */
        throw logicBattleModeClientPtr = logicBattleModeClient = gameObjects = objectArray = objectCount = ownTeam = ownPlayerIndex = prev = activeRenderers = <underflow>;
        } while (!<underflow>);
        RenderOverlay.collectingData = false;
        prev = (RenderOverlay).lineBuffer;
        RenderOverlay.lineBuffer = (RenderOverlay).pendingBuffer;
        RenderOverlay.lineCount = (RenderOverlay).pendingCount;
        RenderOverlay.pendingBuffer = prev;
        return;
        /* CATCH -> 0xa498f (try region) */
        return;
        throw RenderOverlay;
};
        static onFrame () {
    var battleScreen, vpMatrixPointer;
        this.framesSinceStart = (++(this).framesSinceStart);
        if ((!(this).initializationAttempted)) {
            if (((this).framesSinceStart > (exports).FRAMES_BEFORE_INIT)) {
                this.initializationAttempted = true;
                /* CATCH -> 0xa4a61 (try region) */
                (this).initializeGPU();
            } /* if 0xa4a68 */
        } /* if 0xa4a68 */
        /* jump -> 0xa4a68 */
        /* CATCH -> 0xa4a6a (try region) */
        /* jump -> 0xa4a68 */
        throw <underflow>;
        if ((!(this).isInitialized)) {
            return;
        } /* if 0xa4a72 */
        if ((!((BSDPlusManager).BSDPlusManager).isBSDPlusEnabled)) {
            return;
        } /* if 0xa4a83 */
        if ((!(this).inBattle)) {
            return;
        } /* if 0xa4a8d */
        if (((DebugMenuState).DebugMenuState).isOpen) {
            return;
        } /* if 0xa4a9d */
        if (((RenderOverlay).lineCount === 0)) {
            return;
            /* CATCH -> 0xa4b37 (try region) */
        } /* if 0xa4aaa */
        battleScreen = ((BattleScreen).BattleScreen).getInstance();
        if (!(!battleScreen)) {
            if ((battleScreen).isNull()) {
                return undefined;
            } /* if 0xa4ade */
        } /* if 0xa4ad9 */
        vpMatrixPointer = (battleScreen).add(vpMatrixOffset);
        if (((Math).abs((vpMatrixPointer).readFloat()) < (exports).MIN_VP_MATRIX_VALUE)) {
            return undefined;
        } /* if 0xa4b11 */
        (this).saveAndPrepareState(vpMatrixPointer);
        (this).flushAllLines();
        (this).restoreState();
        battleScreen = vpMatrixPointer = <underflow>;
        return;
        /* CATCH -> 0xa4b3f (try region) */
        return;
        throw <underflow>;
};
        static flushAllLines () {
    var curR, curG, curB, curA, bufferedCount, buf, flush, i, off, r, g, b, a, voff;
        curR = -1;
        curG = -1;
        curB = -1;
        curA = -1;
        bufferedCount = 0;
        buf = (RenderOverlay).lineBuffer;
        flush = curR = curG = curB = curA = bufferedCount = buf = flush = <underflow>;
        i = 0;
        while ((i < (RenderOverlay).lineCount)) {
            off = (i * (exports).LINE_STRIDE_FLOATS);
            r = buf[off];
            g = buf[(off + 1)];
            b = buf[(off + 2)];
            a = buf[(off + 3)];
            if (!(r !== curR)) {
                (r !== curR);
                if (!(g !== curG)) {
                    (g !== curG);
                    if (!(b !== curB)) {
                        (b !== curB);
                        if ((a !== curA)) {
                            flush();
                            (this).setColorUniform(r, g, b, a);
                            curR = r;
                            curG = g;
                            curB = b;
                            curA = a;
                        } /* if 0xa4cc3 */
                    } /* if 0xa4c85 */
                } /* if 0xa4c85 */
            } /* if 0xa4c85 */
            if ((((bufferedCount + (exports).VERTICES_PER_LINE) * (exports).FLOATS_PER_VERTEX) > (exports).MAX_VERTEX_FLOATS)) {
                flush();
            } /* if 0xa4ce2 */
            voff = (bufferedCount * (exports).VERTEX_STRIDE_BYTES);
            (((RenderOverlay).vertexDataBuffer).add(voff)).writeFloat(buf[(off + 4)]);
            (((RenderOverlay).vertexDataBuffer).add((voff + 4))).writeFloat(buf[(off + 5)]);
            (((RenderOverlay).vertexDataBuffer).add((voff + 8))).writeFloat(buf[(off + 6)]);
            (((RenderOverlay).vertexDataBuffer).add((voff + 12))).writeFloat(buf[(off + 7)]);
            (((RenderOverlay).vertexDataBuffer).add((voff + 16))).writeFloat(buf[(off + 8)]);
            (((RenderOverlay).vertexDataBuffer).add((voff + 20))).writeFloat(buf[(off + 9)]);
            bufferedCount = (bufferedCount + (exports).VERTICES_PER_LINE);
            i = ((i) + 1);
            (i++);
        } /* while 0xa4df9 */
        return;
};
        static onBattleEnter () {
        this.inBattle = true;
        return;
};
        static onBattleExit () {
        this.inBattle = false;
        RenderOverlay.lineCount = 0;
        RenderOverlay.pendingCount = 0;
        return;
};
        static setupBattleHooks () {
    var backend;
        backend = this;
        ((BattleScreen).BattleScreen).addExitListener(function () {
        return (backend).onBattleExit();
});
        ((BattleScreen).BattleScreen).addEnterListener(function () {
        return (backend).onBattleEnter();
});
        return;
};
        static setupHooks () {
        return;
};
        static initializeGPU () {
        return false;
};
        static saveAndPrepareState (vpMatrix) {
        return;
};
        static setColorUniform (r, g, b, a) {
        return;
};
        static uploadAndDrawLines (vertexData, vertexCount) {
        return;
};
        static restoreState () {
        return;
};
        <class_fields_init> = undefined;
        RenderOverlay;
        class RenderOverlay {
            constructor () {
        if (<class_fields_init>) {
        } /* if 0xa42f6 */
        this.inBattle = false;
        this.isInitialized = false;
        this.initializationAttempted = false;
        this.framesSinceStart = 0;
        return;
}
            addRenderer (configKey, callback) {
        return;
}
            setDrawColor (r, g, b, a) {
        if ((this).collectingData) {
            this.currentColor = { r: r, g: g, b: b, a: a };
            return;
        } /* if 0xa43ae */
        if ((this).backend) {
            ((this).backend).setColorUniform(r, g, b, a);
            return;
        } /* if 0xa43c9 (open) */
}
            drawLineSegment (x0, y0, z0, x1, y1, z1) {
    var off;
        if ((this).collectingData) {
            if (((this).pendingCount >= (exports).MAX_LINES_PER_FRAME)) {
                return;
            } /* if 0xa444c */
            off = ((this).pendingCount * (exports).LINE_STRIDE_FLOATS);
            (this).pendingBuffer[off] = ((this).currentColor).r;
            (this).pendingBuffer[(off + 1)] = ((this).currentColor).g;
            (this).pendingBuffer[(off + 2)] = ((this).currentColor).b;
            (this).pendingBuffer[(off + 3)] = ((this).currentColor).a;
            (this).pendingBuffer[(off + 4)] = x0;
            (this).pendingBuffer[(off + 5)] = y0;
            (this).pendingBuffer[(off + 6)] = z0;
            (this).pendingBuffer[(off + 7)] = x1;
            (this).pendingBuffer[(off + 8)] = y1;
            (this).pendingBuffer[(off + 9)] = z1;
            this.pendingCount = (++(this).pendingCount);
            return;
        } /* if 0xa451c */
        if ((!(this).backend)) {
            return;
        } /* if 0xa4523 */
        ((this).vertexDataBuffer).writeFloat(x0);
        (((this).vertexDataBuffer).add(vertex0YOffset)).writeFloat(y0);
        (((this).vertexDataBuffer).add(vertex0ZOffset)).writeFloat(z0);
        (((this).vertexDataBuffer).add(vertex1XOffset)).writeFloat(x1);
        (((this).vertexDataBuffer).add(vertex1YOffset)).writeFloat(y1);
        (((this).vertexDataBuffer).add(vertex1ZOffset)).writeFloat(z1);
        return;
}
            drawWireframeCube (minX, minY, minZ, maxX, maxY, maxZ) {
    var corners, i, s, e;
        corners = [[minX, minY, minZ], [maxX, minY, minZ], [maxX, maxY, minZ], [minX, maxY, minZ], [minX, minY, maxZ], [maxX, minY, maxZ], [maxX, maxY, maxZ], [minX, maxY, maxZ]];
        i = 0;
        while ((i < WIREFRAME_CUBE_LINE_INDICES.length)) {
            s = corners[WIREFRAME_CUBE_LINE_INDICES[i]];
            e = corners[WIREFRAME_CUBE_LINE_INDICES[(i + 1)]];
            (this).drawLineSegment(s[0], s[1], s[2], e[0], e[1], e[2]);
            i = (i + 2);
            return;
        } /* while 0xa46f6 (open) */
}
            patch () {
    var MetalOverlayBackend, GLOverlayBackend;
        if (((Process).platform === "darwin")) {
            if (!((undefined) === undefined)) {
                MetalOverlayBackend = (Object(undefined)).MetalOverlayBackend;
                Object(undefined);
            } /* if 0xa474c */
            /* jump -> 0xa4754 */
            MetalOverlayBackend = <underflow>;
            /* loop: jump back to 0xa4742 */
            this.backend = new MetalOverlayBackend();
        } /* if 0xa4763 */
        /* jump -> 0xa478a */
        if (!((undefined) === undefined)) {
            GLOverlayBackend = (Object(undefined)).GLOverlayBackend;
            Object(undefined);
        } /* if 0xa4775 */
        /* jump -> 0xa477d */
        GLOverlayBackend = this;
        /* loop: jump back to 0xa476b */
        this.backend = new GLOverlayBackend();
        return;
}
        }
        RenderOverlay = DebugMenuState = RenderOverlay;
        exports.RenderOverlay = RenderOverlay;
        RenderOverlay.backend = null;
        RenderOverlay.registeredRenderers = [];
        RenderOverlay.collectingData = false;
        RenderOverlay.currentColor = { r: 1, g: 1, b: 1, a: 1 };
        RenderOverlay.vertexDataBuffer = ((Libc).Libc).malloc(((exports).MAX_VERTEX_FLOATS * (exports).BYTES_PER_FLOAT));
        RenderOverlay.lineBuffer = new Float32Array(((exports).MAX_LINES_PER_FRAME * (exports).LINE_STRIDE_FLOATS));
        RenderOverlay.lineCount = 0;
        RenderOverlay.pendingBuffer = new Float32Array(((exports).MAX_LINES_PER_FRAME * (exports).LINE_STRIDE_FLOATS));
        RenderOverlay.pendingCount = 0;
        return;
};

// --------------------- MODULE 5508 — GLOverlay ---------------------


// ============================================================ //
// webpack module 5508  —  GLOverlay
// exports: GLOverlay, GLOverlayBackend
// deps: 1301 (RenderOverlay), 1978 (Libc)
// ============================================================ //

__webpack_modules__[5508] = function GLOverlay_factory(__unused_webpack_module, exports, __webpack_require__) {
    var Libc, RenderOverlay, GL_LINES, GL_FLOAT, GL_ARRAY_BUFFER, GL_DYNAMIC_DRAW, GL_VERTEX_SHADER, GL_FRAGMENT_SHADER, GL_COMPILE_STATUS, GL_LINK_STATUS, GL_DEPTH_TEST, GL_BLEND, GL_CURRENT_PROGRAM, GL_VERTEX_ARRAY_BINDING, GL_FRAMEBUFFER, GL_DRAW_FRAMEBUFFER_BINDING, GL_STENCIL_TEST, GL_SCISSOR_TEST, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE, GLOverlayBackend, <class_fields_init>, GLOverlayBackend, GLOverlay, <class_fields_init>, GLOverlay;
        (Object).defineProperty(exports, "__esModule", { value: true });
        exports.GLOverlayBackend = undefined;
        undefined.GLOverlay = exports;
        Libc = __webpack_require__(1978);
        RenderOverlay = __webpack_require__(1301);
        GL_LINES = 1;
        GL_FLOAT = 5126;
        GL_ARRAY_BUFFER = 34962;
        GL_DYNAMIC_DRAW = 35048;
        GL_VERTEX_SHADER = 35633;
        GL_FRAGMENT_SHADER = 35632;
        GL_COMPILE_STATUS = 35713;
        GL_LINK_STATUS = 35714;
        GL_DEPTH_TEST = 2929;
        GL_BLEND = 3042;
        GL_CURRENT_PROGRAM = 35725;
        GL_VERTEX_ARRAY_BINDING = 34229;
        GL_FRAMEBUFFER = 36160;
        GL_DRAW_FRAMEBUFFER_BINDING = 36006;
        GL_STENCIL_TEST = 2960;
        GL_SCISSOR_TEST = 3089;
        VERTEX_SHADER_SOURCE = "#version 300 es\nin vec3 aPos;\nuniform mat4 uMVP;\nvoid main() { gl_Position = uMVP * vec4(aPos, 1.0); }";
        FRAGMENT_SHADER_SOURCE = "#version 300 es\nprecision mediump float;\nuniform vec4 uColor;\nout vec4 fragColor;\nvoid main() { fragColor = uColor; }";
        static setupHooks () {
    var eglSwapBuffersAddress, backend;
        eglSwapBuffersAddress = (Module).findExportByName("libEGL.so", "eglSwapBuffers");
        if ((!eglSwapBuffersAddress)) {
            return;
        } /* if 0x9f538 */
        backend = this;
        (Interceptor).attach(eglSwapBuffersAddress, { onEnter () {
        return;
} });
        return;
};
        static initializeGPU () {
    var glLibName, fn, vs, fs, linkStatus, idBuf;
        glLibName = "libGLESv2.so";
        fn = glLibName = fn = vs = fs = linkStatus = idBuf = <underflow>;
        this.glFunctions = { createShader: fn("glCreateShader", "uint32", ["uint32"]), shaderSource: fn("glShaderSource", "void", ["uint32", "int32", "pointer", "pointer"]), compileShader: fn("glCompileShader", "void", ["uint32"]), getShaderiv: fn("glGetShaderiv", "void", ["uint32", "uint32", "pointer"]), createProgram: fn("glCreateProgram", "uint32", []), attachShader: fn("glAttachShader", "void", ["uint32", "uint32"]), linkProgram: fn("glLinkProgram", "void", ["uint32"]), getProgramiv: fn("glGetProgramiv", "void", ["uint32", "uint32", "pointer"]), useProgram: fn("glUseProgram", "void", ["uint32"]), getAttribLocation: fn("glGetAttribLocation", "int32", ["uint32", "pointer"]), getUniformLocation: fn("glGetUniformLocation", "int32", ["uint32", "pointer"]), enableVertexAttribArray: fn("glEnableVertexAttribArray", "void", ["uint32"]), disableVertexAttribArray: fn("glDisableVertexAttribArray", "void", ["uint32"]), vertexAttribPointer: fn("glVertexAttribPointer", "void", ["uint32", "int32", "uint32", "uint8", "int32", "pointer"]), uniform4f: fn("glUniform4f", "void", ["int32", "float", "float", "float", "float"]), uniformMatrix4fv: fn("glUniformMatrix4fv", "void", ["int32", "int32", "uint8", "pointer"]), drawArrays: fn("glDrawArrays", "void", ["uint32", "int32", "int32"]), genBuffers: fn("glGenBuffers", "void", ["int32", "pointer"]), bindBuffer: fn("glBindBuffer", "void", ["uint32", "uint32"]), bufferData: fn("glBufferData", "void", ["uint32", "int32", "pointer", "uint32"]), enable: fn("glEnable", "void", ["uint32"]), disable: fn("glDisable", "void", ["uint32"]), lineWidth: fn("glLineWidth", "void", ["float"]), depthMask: fn("glDepthMask", "void", ["uint8"]), getIntegerv: fn("glGetIntegerv", "void", ["uint32", "pointer"]), genVertexArrays: fn("glGenVertexArrays", "void", ["int32", "pointer"]), bindVertexArray: fn("glBindVertexArray", "void", ["uint32"]), bindFramebuffer: fn("glBindFramebuffer", "void", ["uint32", "uint32"]) };
        if ((!((this).glFunctions).createShader)) {
            return false;
        } /* if 0x9f9b1 */
        vs = (this).compileShader(GL_VERTEX_SHADER, VERTEX_SHADER_SOURCE);
        fs = (this).compileShader(GL_FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
        if (!(!vs)) {
            if ((!fs)) {
                return false;
            } /* if 0x9f9e3 */
        } /* if 0x9f9df */
        this.shaderProgram = ((this).glFunctions).createProgram();
        ((this).glFunctions).attachShader((this).shaderProgram, vs);
        ((this).glFunctions).attachShader((this).shaderProgram, fs);
        ((this).glFunctions).linkProgram((this).shaderProgram);
        linkStatus = ((Libc).Libc).malloc((RenderOverlay).BYTES_PER_FLOAT);
        ((this).glFunctions).getProgramiv((this).shaderProgram, GL_LINK_STATUS, linkStatus);
        if ((!(linkStatus).readS32())) {
            return false;
        } /* if 0x9fa8b */
        this.positionAttributeLocation = ((this).glFunctions).getAttribLocation((this).shaderProgram, (Memory).allocUtf8String("aPos"));
        this.mvpUniformLocation = ((this).glFunctions).getUniformLocation((this).shaderProgram, (Memory).allocUtf8String("uMVP"));
        this.colorUniformLocation = ((this).glFunctions).getUniformLocation((this).shaderProgram, (Memory).allocUtf8String("uColor"));
        idBuf = ((Libc).Libc).malloc((RenderOverlay).BYTES_PER_FLOAT);
        ((this).glFunctions).genVertexArrays(1, idBuf);
        this.vertexArrayObject = (idBuf).readU32();
        ((this).glFunctions).genBuffers(1, idBuf);
        this.vertexBufferObject = (idBuf).readU32();
        this.isInitialized = true;
        return true;
};
        static saveAndPrepareState (vpMatrix) {
    var gl;
        gl = (this).glFunctions;
        (gl).getIntegerv(GL_CURRENT_PROGRAM, (this).savedGLState);
        (gl).getIntegerv(GL_VERTEX_ARRAY_BINDING, ((this).savedGLState).add(4));
        (gl).getIntegerv(GL_DRAW_FRAMEBUFFER_BINDING, ((this).savedGLState).add(8));
        (gl).bindFramebuffer(GL_FRAMEBUFFER, 0);
        (gl).useProgram((this).shaderProgram);
        (gl).bindVertexArray((this).vertexArrayObject);
        (gl).disable(GL_DEPTH_TEST);
        (gl).disable(GL_BLEND);
        (gl).disable(GL_STENCIL_TEST);
        (gl).disable(GL_SCISSOR_TEST);
        (gl).depthMask(0);
        (gl).lineWidth(2);
        return;
};
        static setColorUniform (r, g, b, a) {
        return;
};
        static uploadAndDrawLines (vertexData, vertexCount) {
    var gl;
        gl = (this).glFunctions;
        (gl).bindBuffer(GL_ARRAY_BUFFER, (this).vertexBufferObject);
        (gl).bufferData(GL_ARRAY_BUFFER, (vertexCount * (RenderOverlay).VERTEX_STRIDE_BYTES), vertexData, GL_DYNAMIC_DRAW);
        (gl).enableVertexAttribArray((this).positionAttributeLocation);
        (gl).vertexAttribPointer((this).positionAttributeLocation, (RenderOverlay).FLOATS_PER_VERTEX, GL_FLOAT, 0, 0, ptr(0));
        (gl).drawArrays(GL_LINES, 0, vertexCount);
        return;
};
        static restoreState () {
    var gl;
        gl = (this).glFunctions;
        (gl).bindBuffer(GL_ARRAY_BUFFER, 0);
        (gl).bindFramebuffer(GL_FRAMEBUFFER, (((this).savedGLState).add(8)).readU32());
        (gl).bindVertexArray((((this).savedGLState).add(4)).readU32());
        (gl).useProgram(((this).savedGLState).readU32());
        (gl).enable(GL_DEPTH_TEST);
        return;
};
        static compileShader (type, source) {
    var shader, srcPtr, srcArr, status;
        shader = ((this).glFunctions).createShader(type);
        if ((!shader)) {
            return 0;
        } /* if 0x9ffdd */
        srcPtr = (Memory).allocUtf8String(source);
        srcArr = ((Libc).Libc).malloc(8);
        (srcArr).writePointer(srcPtr);
        ((this).glFunctions).shaderSource(shader, 1, srcArr, NULL);
        ((this).glFunctions).compileShader(shader);
        status = ((Libc).Libc).malloc((RenderOverlay).BYTES_PER_FLOAT);
        ((this).glFunctions).getShaderiv(shader, GL_COMPILE_STATUS, status);
        if ((status).readS32()) {
            return shader;
        } /* if 0xa0080 */
        return 0;
};
        <class_fields_init> = undefined;
        GLOverlayBackend;
        class GLOverlayBackend extends <class_fields_init> = (RenderOverlay).RenderOverlay {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0x9f486 */
        this.glFunctions = null;
        this.shaderProgram = 0;
        this.positionAttributeLocation = 0;
        this.mvpUniformLocation = 0;
        this.colorUniformLocation = 0;
        this.vertexBufferObject = 0;
        this.vertexArrayObject = 0;
        this.savedGLState = ((Libc).Libc).malloc(12);
        return this;
}
        }
        GLOverlayBackend = GL_COMPILE_STATUS = GLOverlayBackend;
        exports.GLOverlayBackend = GLOverlayBackend;
        <class_fields_init> = undefined;
        GLOverlay;
        class GLOverlay {
            constructor () {
        if (<class_fields_init>) {
            return;
        } /* if 0xa0206 (open) */
}
            addRenderer (configKey, callback) {
        return;
}
            setDrawColor (r, g, b, a) {
        return;
}
            drawLineSegment (x0, y0, z0, x1, y1, z1) {
        return;
}
            drawWireframeCube (minX, minY, minZ, maxX, maxY, maxZ) {
        return;
}
            patch () {
        return;
}
        }
        GLOverlay = GL_COMPILE_STATUS = GLOverlay;
        exports.GLOverlay = GLOverlay;
        return;
};

// --------------------- MODULE 3388 — MetalOverlayBackend ---------------------


// ============================================================ //
// webpack module 3388  —  MetalOverlayBackend
// exports: MetalOverlayBackend
// deps: 1301 (RenderOverlay), 1978 (Libc), 3380 (Logcat)
// ============================================================ //

__webpack_modules__[3388] = function MetalOverlayBackend_factory(__unused_webpack_module, exports, __webpack_require__) {
    var __webpack_unused_export__, Libc, RenderOverlay, Logcat, MTL_PRIMITIVE_TYPE_LINE, MTL_VERTEX_FORMAT_FLOAT3, MTL_PIXEL_FORMAT_BGRA8_UNORM, MTL_LOAD_ACTION_LOAD, MTL_STORE_ACTION_STORE, UNIFORM_SIZE, MSL_SOURCE, MetalOverlayBackend, <class_fields_init>, MetalOverlayBackend;
        __webpack_unused_export__ = { value: true };
        exports.MetalOverlayBackend = undefined;
        Libc = __webpack_require__(1978);
        RenderOverlay = __webpack_require__(1301);
        Logcat = __webpack_require__(3380);
        MTL_PRIMITIVE_TYPE_LINE = 1;
        MTL_VERTEX_FORMAT_FLOAT3 = 30;
        MTL_PIXEL_FORMAT_BGRA8_UNORM = 80;
        MTL_LOAD_ACTION_LOAD = 2;
        MTL_STORE_ACTION_STORE = 1;
        UNIFORM_SIZE = ((16 * (RenderOverlay).BYTES_PER_FLOAT) + (4 * (RenderOverlay).BYTES_PER_FLOAT));
        MSL_SOURCE = "\n#include <metal_stdlib>\nusing namespace metal;\nstruct VertexIn { float3 position [[attribute(0)]]; };\nstruct Uniforms { float4x4 mvp; float4 color; };\nstruct VertexOut { float4 position [[position]]; };\nvertex VertexOut vertex_main(VertexIn in [[stage_in]], constant Uniforms &u [[buffer(1)]]) {\n    VertexOut out;\n    out.position = u.mvp * float4(in.position, 1.0);\n    return out;\n}\nfragment float4 fragment_main(VertexOut in [[stage_in]], constant Uniforms &u [[buffer(1)]]) {\n    return u.color;\n}\n";
        static setupHooks () {
        (this).setupBattleHooks();
        return;
};
        static initializeGPU () {
    var createDevice, nsSource, errorPtr, library, err, vertexFn, fragmentFn, desc, vd, attr0, err, e;
        /* CATCH -> 0xa3216 (try region) */
        /* typeof_is_undefined  */
        if (!ObjC) {
            if ((!(ObjC).available)) {
                ((Logcat).Logcat).logError("[MetalOverlay] ObjC not available");
                return false;
            } /* if 0xa2eda */
        } /* if 0xa2ebf */
        createDevice = new NativeFunction((Module).findExportByName("Metal", "MTLCreateSystemDefaultDevice"), "pointer", []);
        this.device = new (ObjC).Object(createDevice());
        if ((!(this).device)) {
            ((Logcat).Logcat).logError("[MetalOverlay] no MTLDevice");
            return false;
        } /* if 0xa2f3f */
        nsSource = (((ObjC).classes).NSString).stringWithString_(MSL_SOURCE);
        errorPtr = ((Libc).Libc).malloc((Process).pointerSize);
        (errorPtr).writePointer(NULL);
        library = ((this).device).newLibraryWithSource_options_error_(nsSource, NULL, errorPtr);
        if ((!library)) {
            err = new (ObjC).Object((errorPtr).readPointer());
            ((Logcat).Logcat).logError(("[MetalOverlay] shader compile: ").concat((err).localizedDescription()));
            return false;
        } /* if 0xa2ff1 */
        vertexFn = (library).newFunctionWithName_("vertex_main");
        fragmentFn = (library).newFunctionWithName_("fragment_main");
        if (!(!vertexFn)) {
            if ((!fragmentFn)) {
                ((Logcat).Logcat).logError("[MetalOverlay] shader functions not found");
                return false;
            } /* if 0xa303c */
        } /* if 0xa3021 */
        desc = ((((ObjC).classes).MTLRenderPipelineDescriptor).alloc()).init();
        (desc).setVertexFunction_(vertexFn);
        (desc).setFragmentFunction_(fragmentFn);
        vd = (((ObjC).classes).MTLVertexDescriptor).vertexDescriptor();
        attr0 = ((vd).attributes()).objectAtIndexedSubscript_(0);
        (attr0).setFormat_(MTL_VERTEX_FORMAT_FLOAT3);
        (attr0).setOffset_(0);
        (attr0).setBufferIndex_(0);
        (((vd).layouts()).objectAtIndexedSubscript_(0)).setStride_((RenderOverlay).VERTEX_STRIDE_BYTES);
        (desc).setVertexDescriptor_(vd);
        (((desc).colorAttachments()).objectAtIndexedSubscript_(0)).setPixelFormat_(MTL_PIXEL_FORMAT_BGRA8_UNORM);
        (desc).setDepthAttachmentPixelFormat_(0);
        (desc).setStencilAttachmentPixelFormat_(0);
        (errorPtr).writePointer(NULL);
        this.pipelineState = ((this).device).newRenderPipelineStateWithDescriptor_error_(desc, errorPtr);
        if ((!(this).pipelineState)) {
            err = new (ObjC).Object((errorPtr).readPointer());
            ((Logcat).Logcat).logError(("[MetalOverlay] pipeline: ").concat((err).localizedDescription()));
            return false;
        } /* if 0xa31c2 */
        this.commandQueue = ((this).device).newCommandQueue();
        this.uniformBuf = ((this).device).newBufferWithLength_options_(UNIFORM_SIZE, 0);
        this.isInitialized = true;
        ((Logcat).Logcat).logInfo("[MetalOverlay] GPU initialized");
        return true;
        e = this;
        /* CATCH -> 0xa3256 (try region) */
        if (!(e).stack) {
            if (!(e).message) {
            } /* if 0xa3249 */
        } /* if 0xa3249 */
        ((Logcat).Logcat).logError(("[MetalOverlay] init failed: ").concat(e));
        return false;
        throw this;
};
        static saveAndPrepareState (vpMatrix) {
    var gameQueue, rpd, colorAtt, contents, e;
        /* CATCH -> 0xa3441 (try region) */
        if (!(!(this).cachedTexture)) {
            if (((this).gameCmdBufPtr).isNull()) {
                return undefined;
            } /* if 0xa3305 */
        } /* if 0xa3300 */
        gameQueue = (new (ObjC).Object((this).gameCmdBufPtr)).commandQueue();
        if ((!gameQueue)) {
            return undefined;
        } /* if 0xa332c */
        rpd = (((ObjC).classes).MTLRenderPassDescriptor).renderPassDescriptor();
        colorAtt = ((rpd).colorAttachments()).objectAtIndexedSubscript_(0);
        (colorAtt).setTexture_((this).cachedTexture);
        (colorAtt).setLoadAction_(MTL_LOAD_ACTION_LOAD);
        (colorAtt).setStoreAction_(MTL_STORE_ACTION_STORE);
        this.ownCmdBuf = (gameQueue).commandBuffer();
        if ((!(this).ownCmdBuf)) {
            return undefined;
        } /* if 0xa33a9 */
        this.encoder = ((this).ownCmdBuf).renderCommandEncoderWithDescriptor_(rpd);
        if ((!(this).encoder)) {
            return undefined;
        } /* if 0xa33cf */
        ((this).encoder).setRenderPipelineState_((this).pipelineState);
        contents = ((this).uniformBuf).contents();
        (Memory).copy(contents, vpMatrix, 64);
        ((this).encoder).setVertexBuffer_offset_atIndex_((this).uniformBuf, 0, 1);
        ((this).encoder).setFragmentBuffer_offset_atIndex_((this).uniformBuf, 0, 1);
        return;
        e = this;
        /* CATCH -> 0xa345a (try region) */
        this.encoder = null;
        this.ownCmdBuf = null;
        return;
        throw this;
};
        static setColorUniform (r, g, b, a) {
    var contents;
        if (!(!(this).uniformBuf)) {
            if ((!(this).encoder)) {
                return;
            } /* if 0xa34bf */
        } /* if 0xa34bc */
        contents = ((this).uniformBuf).contents();
        ((contents).add(64)).writeFloat(r);
        ((contents).add(68)).writeFloat(g);
        ((contents).add(72)).writeFloat(b);
        return;
};
        static uploadAndDrawLines (vertexData, vertexCount) {
    var size, vtxBuf;
        if (!(!(this).encoder)) {
            if ((!(this).device)) {
                return;
                /* CATCH -> 0xa35e0 (try region) */
            } /* if 0xa3580 */
        } /* if 0xa357d */
        size = (vertexCount * (RenderOverlay).VERTEX_STRIDE_BYTES);
        vtxBuf = ((this).device).newBufferWithBytes_length_options_(vertexData, size, 0);
        if ((!vtxBuf)) {
            return undefined;
        } /* if 0xa35b3 */
        ((this).encoder).setVertexBuffer_offset_atIndex_(vtxBuf, 0, 0);
        ((this).encoder).drawPrimitives_vertexStart_vertexCount_(MTL_PRIMITIVE_TYPE_LINE, 0, vertexCount);
        size = vtxBuf = <underflow>;
        return;
        /* CATCH -> 0xa35e8 (try region) */
        return;
        throw <underflow>;
};
        static restoreState () {
        if ((!(this).encoder)) {
            return;
            /* CATCH -> 0xa362e (try region) */
        } /* if 0xa3614 */
        ((this).encoder).endEncoding();
        /* jump -> 0xa3635 */
        /* CATCH -> 0xa3637 (try region) */
        /* jump -> 0xa3635 */
        throw <underflow>;
        this.encoder = null;
        return;
};
        <class_fields_init> = undefined;
        MetalOverlayBackend;
        class MetalOverlayBackend extends <class_fields_init> = (RenderOverlay).RenderOverlay {
            constructor () {
    var this.active_func, new.target, arguments;
        this.active_func = /*special:2*/;
        new.target = /*special:3*/;
        arguments = /*special:0*/;
        this = [].apply(new.target, [0]);
        if (<class_fields_init>) {
        } /* if 0xa2d5f */
        this.device = null;
        this.pipelineState = null;
        this.commandQueue = null;
        this.uniformBuf = null;
        this.encoder = null;
        this.ownCmdBuf = null;
        this.currentFbPtr = NULL;
        this.gameCmdBufPtr = NULL;
        this.cachedTexture = null;
        return this;
}
        }
        MetalOverlayBackend = MTL_STORE_ACTION_STORE = MetalOverlayBackend;
        exports.MetalOverlayBackend = MetalOverlayBackend;
        return;
};

