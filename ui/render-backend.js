var vpMatrixOffset = LogicMemory.offset(2152);
var vertex0YOffset = 4;
var vertex0ZOffset = 8;
var vertex1XOffset = 12;
var vertex1YOffset = 16;
var vertex1ZOffset = 20;
var FLOATS_PER_VERTEX = 3;
var BYTES_PER_FLOAT = 4;
var VERTEX_STRIDE_BYTES = FLOATS_PER_VERTEX * BYTES_PER_FLOAT;
var VERTICES_PER_LINE = 2;
var MAX_VERTEX_FLOATS = 512;
var MAX_LINES_PER_FRAME = 1024;
var LINE_STRIDE_FLOATS = 10;
var FRAMES_BEFORE_INIT = 30;
var MAX_GAME_OBJECTS = 100;
var MIN_VP_MATRIX_VALUE = 0.01;
var WIREFRAME_CUBE_LINE_INDICES = [0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7];

class RenderOverlay {
    constructor() {
        this.inBattle = false;
        this.isInitialized = false;
        this.initializationAttempted = false;
        this.framesSinceStart = 0;
    }
    patch() {
        if (Process.platform === "darwin") {
            this.backend = new MetalOverlayBackend();
        } else {
            this.backend = new GLOverlay();
        }
        this.backend.setupHooks();
        return;
    }
    addRenderer(configKey, callback) {
        RenderOverlay.registeredRenderers.push({ configKey: configKey, callback: callback });
        return;
    }
    setDrawColor(r, g, b, a) {
        if (this.collectingData) {
            this.currentColor = { r: r, g: g, b: b, a: a };
            return;
        }
        if (this.backend) {
            this.backend.setColorUniform(r, g, b, a);
            return;
        }
    }
    drawLineSegment(x0, y0, z0, x1, y1, z1) {
        var off;
        if (this.collectingData) {
            if (this.pendingCount >= MAX_LINES_PER_FRAME) {
                return;
            }
            off = this.pendingCount * LINE_STRIDE_FLOATS;
            this.pendingBuffer[off] = this.currentColor.r;
            this.pendingBuffer[off + 1] = this.currentColor.g;
            this.pendingBuffer[off + 2] = this.currentColor.b;
            this.pendingBuffer[off + 3] = this.currentColor.a;
            this.pendingBuffer[off + 4] = x0;
            this.pendingBuffer[off + 5] = y0;
            this.pendingBuffer[off + 6] = z0;
            this.pendingBuffer[off + 7] = x1;
            this.pendingBuffer[off + 8] = y1;
            this.pendingBuffer[off + 9] = z1;
            ++this.pendingCount;
            return;
        }
        if (!this.backend) {
            return;
        }
        this.vertexDataBuffer.writeFloat(x0);
        this.vertexDataBuffer.add(vertex0YOffset).writeFloat(y0);
        this.vertexDataBuffer.add(vertex0ZOffset).writeFloat(z0);
        this.vertexDataBuffer.add(vertex1XOffset).writeFloat(x1);
        this.vertexDataBuffer.add(vertex1YOffset).writeFloat(y1);
        this.vertexDataBuffer.add(vertex1ZOffset).writeFloat(z1);
        return;
    }
    drawWireframeCube(minX, minY, minZ, maxX, maxY, maxZ) {
        var corners, i, s, e;
        corners = [[minX, minY, minZ], [maxX, minY, minZ], [maxX, maxY, minZ], [minX, maxY, minZ], [minX, minY, maxZ], [maxX, minY, maxZ], [maxX, maxY, maxZ], [minX, maxY, maxZ]];
        i = 0;
        while (i < WIREFRAME_CUBE_LINE_INDICES.length) {
            s = corners[WIREFRAME_CUBE_LINE_INDICES[i]];
            e = corners[WIREFRAME_CUBE_LINE_INDICES[i + 1]];
            this.drawLineSegment(s[0], s[1], s[2], e[0], e[1], e[2]);
            i = i + 2;
        }
    }
    collectFrameData() {
        var activeRenderers, logicBattleModeClientPtr, logicBattleModeClient, gameObjects, objectArray, objectCount, ownTeam, ownPlayerIndex, renderer, prev;
        if (!this.inBattle) {
            return;
        }
        if (!BSDPlusManager.isBSDPlusEnabled) {
            return;
        }
        activeRenderers = RenderOverlay.registeredRenderers.filter(function (r) {
            return Config.config[r.configKey];
        });
        if (activeRenderers.length === 0) {
            return;
        }
        try {
            logicBattleModeClientPtr = BattleMode.getLogicBattleModeClient();
            if (logicBattleModeClientPtr.isNull()) {
                return undefined;
            }
            logicBattleModeClient = new LogicBattleModeClient(logicBattleModeClientPtr);
            gameObjects = logicBattleModeClient.getGameObjects();
            objectArray = gameObjects.getArray();
            if (objectArray.isNull()) {
                return undefined;
            }
            objectCount = gameObjects.getItemsCount();
            if (objectCount > MAX_GAME_OBJECTS) {
                return undefined;
            }
            ownTeam = logicBattleModeClient.ownPlayerTeam;
            ownPlayerIndex = logicBattleModeClient.ownPlayerIndex;
            RenderOverlay.pendingCount = 0;
            RenderOverlay.collectingData = true;
            for (const renderer of activeRenderers) {
                renderer.callback(objectArray, objectCount, ownTeam, ownPlayerIndex);
            }
            RenderOverlay.collectingData = false;
            prev = RenderOverlay.lineBuffer;
            RenderOverlay.lineBuffer = RenderOverlay.pendingBuffer;
            RenderOverlay.lineCount = RenderOverlay.pendingCount;
            RenderOverlay.pendingBuffer = prev;
            return;
        } catch (e) {
            return;
        }
    }
    onFrame() {
        var battleScreen, vpMatrixPointer;
        ++this.framesSinceStart;
        if (!this.initializationAttempted) {
            if (this.framesSinceStart > FRAMES_BEFORE_INIT) {
                this.initializationAttempted = true;
                try {
                    this.initializeGPU();
                } catch (e) {
                }
            }
        }
        if (!this.isInitialized) {
            return;
        }
        if (!BSDPlusManager.isBSDPlusEnabled) {
            return;
        }
        if (!this.inBattle) {
            return;
        }
        if (DebugMenuState.isOpen) {
            return;
        }
        if (RenderOverlay.lineCount === 0) {
            return;
        }
        try {
            battleScreen = BattleScreen.getInstance();
            if (battleScreen) {
                if (battleScreen.isNull()) {
                    return undefined;
                }
            }
            vpMatrixPointer = battleScreen.add(vpMatrixOffset);
            if (Math.abs(vpMatrixPointer.readFloat()) < MIN_VP_MATRIX_VALUE) {
                return undefined;
            }
            this.saveAndPrepareState(vpMatrixPointer);
            this.flushAllLines();
            this.restoreState();
            return;
        } catch (e) {
            return;
        }
    }
    flushAllLines() {
        var curR, curG, curB, curA, bufferedCount, buf, flush, i, off, r, g, b, a, voff;
        curR = -1;
        curG = -1;
        curB = -1;
        curA = -1;
        bufferedCount = 0;
        buf = RenderOverlay.lineBuffer;
        flush = () => {
            if (bufferedCount > 0) {
                this.uploadAndDrawLines(RenderOverlay.vertexDataBuffer, bufferedCount);
                bufferedCount = 0;
            }
            return;
        };
        i = 0;
        while (i < RenderOverlay.lineCount) {
            off = i * LINE_STRIDE_FLOATS;
            r = buf[off];
            g = buf[off + 1];
            b = buf[off + 2];
            a = buf[off + 3];
            if (r !== curR || g !== curG || b !== curB || a !== curA) {
                flush();
                this.setColorUniform(r, g, b, a);
                curR = r;
                curG = g;
                curB = b;
                curA = a;
            }
            if ((bufferedCount + VERTICES_PER_LINE) * FLOATS_PER_VERTEX > MAX_VERTEX_FLOATS) {
                flush();
            }
            voff = bufferedCount * VERTEX_STRIDE_BYTES;
            RenderOverlay.vertexDataBuffer.add(voff).writeFloat(buf[off + 4]);
            RenderOverlay.vertexDataBuffer.add(voff + 4).writeFloat(buf[off + 5]);
            RenderOverlay.vertexDataBuffer.add(voff + 8).writeFloat(buf[off + 6]);
            RenderOverlay.vertexDataBuffer.add(voff + 12).writeFloat(buf[off + 7]);
            RenderOverlay.vertexDataBuffer.add(voff + 16).writeFloat(buf[off + 8]);
            RenderOverlay.vertexDataBuffer.add(voff + 20).writeFloat(buf[off + 9]);
            bufferedCount = bufferedCount + VERTICES_PER_LINE;
            i = i + 1;
        }
        flush();
        return;
    }
    onBattleEnter() {
        this.inBattle = true;
        return;
    }
    onBattleExit() {
        this.inBattle = false;
        RenderOverlay.lineCount = 0;
        RenderOverlay.pendingCount = 0;
        return;
    }
    setupBattleHooks() {
        var backend;
        backend = this;
        BattleScreen.addExitListener(function () {
            return backend.onBattleExit();
        });
        BattleScreen.addEnterListener(function () {
            return backend.onBattleEnter();
        });
        return;
    }
    setupHooks() {
        return;
    }
    initializeGPU() {
        return false;
    }
    saveAndPrepareState(vpMatrix) {
        return;
    }
    setColorUniform(r, g, b, a) {
        return;
    }
    uploadAndDrawLines(vertexData, vertexCount) {
        return;
    }
    restoreState() {
        return;
    }
}
RenderOverlay.backend = null;
RenderOverlay.registeredRenderers = [];
RenderOverlay.collectingData = false;
RenderOverlay.currentColor = { r: 1, g: 1, b: 1, a: 1 };
RenderOverlay.vertexDataBuffer = Libc.malloc(MAX_VERTEX_FLOATS * BYTES_PER_FLOAT);
RenderOverlay.lineBuffer = new Float32Array(MAX_LINES_PER_FRAME * LINE_STRIDE_FLOATS);
RenderOverlay.lineCount = 0;
RenderOverlay.pendingBuffer = new Float32Array(MAX_LINES_PER_FRAME * LINE_STRIDE_FLOATS);
RenderOverlay.pendingCount = 0;

var GL_LINES = 1;
var GL_FLOAT = 5126;
var GL_ARRAY_BUFFER = 34962;
var GL_DYNAMIC_DRAW = 35048;
var GL_VERTEX_SHADER = 35633;
var GL_FRAGMENT_SHADER = 35632;
var GL_COMPILE_STATUS = 35713;
var GL_LINK_STATUS = 35714;
var GL_DEPTH_TEST = 2929;
var GL_BLEND = 3042;
var GL_CURRENT_PROGRAM = 35725;
var GL_VERTEX_ARRAY_BINDING = 34229;
var GL_FRAMEBUFFER = 36160;
var GL_DRAW_FRAMEBUFFER_BINDING = 36006;
var GL_STENCIL_TEST = 2960;
var GL_SCISSOR_TEST = 3089;
var VERTEX_SHADER_SOURCE = "#version 300 es\nin vec3 aPos;\nuniform mat4 uMVP;\nvoid main() { gl_Position = uMVP * vec4(aPos, 1.0); }";
var FRAGMENT_SHADER_SOURCE = "#version 300 es\nprecision mediump float;\nuniform vec4 uColor;\nout vec4 fragColor;\nvoid main() { fragColor = uColor; }";

class GLOverlay extends RenderOverlay {
    constructor() {
        super();
        this.glFunctions = null;
        this.shaderProgram = 0;
        this.positionAttributeLocation = 0;
        this.mvpUniformLocation = 0;
        this.colorUniformLocation = 0;
        this.vertexBufferObject = 0;
        this.vertexArrayObject = 0;
        this.savedGLState = Libc.malloc(12);
    }
    setupHooks() {
        var eglSwapBuffersAddress, backend;
        this.setupBattleHooks();
        eglSwapBuffersAddress = Module.findExportByName("libEGL.so", "eglSwapBuffers");
        if (!eglSwapBuffersAddress) {
            return;
        }
        backend = this;
        Interceptor.attach(eglSwapBuffersAddress, {
            onEnter() {
                backend.collectFrameData();
                return backend.onFrame();
            }
        });
        return;
    }
    initializeGPU() {
        var glLibName, fn, vs, fs, linkStatus, idBuf;
        glLibName = "libGLESv2.so";
        fn = function (name, retType, argTypes) {
            var address;
            address = Module.findExportByName(glLibName, name);
            if (!address) {
                return null;
            }
            return new NativeFunction(address, retType, argTypes);
        };
        this.glFunctions = { createShader: fn("glCreateShader", "uint32", ["uint32"]), shaderSource: fn("glShaderSource", "void", ["uint32", "int32", "pointer", "pointer"]), compileShader: fn("glCompileShader", "void", ["uint32"]), getShaderiv: fn("glGetShaderiv", "void", ["uint32", "uint32", "pointer"]), createProgram: fn("glCreateProgram", "uint32", []), attachShader: fn("glAttachShader", "void", ["uint32", "uint32"]), linkProgram: fn("glLinkProgram", "void", ["uint32"]), getProgramiv: fn("glGetProgramiv", "void", ["uint32", "uint32", "pointer"]), useProgram: fn("glUseProgram", "void", ["uint32"]), getAttribLocation: fn("glGetAttribLocation", "int32", ["uint32", "pointer"]), getUniformLocation: fn("glGetUniformLocation", "int32", ["uint32", "pointer"]), enableVertexAttribArray: fn("glEnableVertexAttribArray", "void", ["uint32"]), disableVertexAttribArray: fn("glDisableVertexAttribArray", "void", ["uint32"]), vertexAttribPointer: fn("glVertexAttribPointer", "void", ["uint32", "int32", "uint32", "uint8", "int32", "pointer"]), uniform4f: fn("glUniform4f", "void", ["int32", "float", "float", "float", "float"]), uniformMatrix4fv: fn("glUniformMatrix4fv", "void", ["int32", "int32", "uint8", "pointer"]), drawArrays: fn("glDrawArrays", "void", ["uint32", "int32", "int32"]), genBuffers: fn("glGenBuffers", "void", ["int32", "pointer"]), bindBuffer: fn("glBindBuffer", "void", ["uint32", "uint32"]), bufferData: fn("glBufferData", "void", ["uint32", "int32", "pointer", "uint32"]), enable: fn("glEnable", "void", ["uint32"]), disable: fn("glDisable", "void", ["uint32"]), lineWidth: fn("glLineWidth", "void", ["float"]), depthMask: fn("glDepthMask", "void", ["uint8"]), getIntegerv: fn("glGetIntegerv", "void", ["uint32", "pointer"]), genVertexArrays: fn("glGenVertexArrays", "void", ["int32", "pointer"]), bindVertexArray: fn("glBindVertexArray", "void", ["uint32"]), bindFramebuffer: fn("glBindFramebuffer", "void", ["uint32", "uint32"]) };
        if (!this.glFunctions.createShader) {
            return false;
        }
        vs = this.compileShader(GL_VERTEX_SHADER, VERTEX_SHADER_SOURCE);
        fs = this.compileShader(GL_FRAGMENT_SHADER, FRAGMENT_SHADER_SOURCE);
        if (!vs || !fs) {
            return false;
        }
        this.shaderProgram = this.glFunctions.createProgram();
        this.glFunctions.attachShader(this.shaderProgram, vs);
        this.glFunctions.attachShader(this.shaderProgram, fs);
        this.glFunctions.linkProgram(this.shaderProgram);
        linkStatus = Libc.malloc(BYTES_PER_FLOAT);
        this.glFunctions.getProgramiv(this.shaderProgram, GL_LINK_STATUS, linkStatus);
        if (!linkStatus.readS32()) {
            return false;
        }
        this.positionAttributeLocation = this.glFunctions.getAttribLocation(this.shaderProgram, Memory.allocUtf8String("aPos"));
        this.mvpUniformLocation = this.glFunctions.getUniformLocation(this.shaderProgram, Memory.allocUtf8String("uMVP"));
        this.colorUniformLocation = this.glFunctions.getUniformLocation(this.shaderProgram, Memory.allocUtf8String("uColor"));
        idBuf = Libc.malloc(BYTES_PER_FLOAT);
        this.glFunctions.genVertexArrays(1, idBuf);
        this.vertexArrayObject = idBuf.readU32();
        this.glFunctions.genBuffers(1, idBuf);
        this.vertexBufferObject = idBuf.readU32();
        this.isInitialized = true;
        return true;
    }
    saveAndPrepareState(vpMatrix) {
        var gl;
        gl = this.glFunctions;
        gl.getIntegerv(GL_CURRENT_PROGRAM, this.savedGLState);
        gl.getIntegerv(GL_VERTEX_ARRAY_BINDING, this.savedGLState.add(4));
        gl.getIntegerv(GL_DRAW_FRAMEBUFFER_BINDING, this.savedGLState.add(8));
        gl.bindFramebuffer(GL_FRAMEBUFFER, 0);
        gl.useProgram(this.shaderProgram);
        gl.bindVertexArray(this.vertexArrayObject);
        gl.disable(GL_DEPTH_TEST);
        gl.disable(GL_BLEND);
        gl.disable(GL_STENCIL_TEST);
        gl.disable(GL_SCISSOR_TEST);
        gl.depthMask(0);
        gl.lineWidth(2);
        return;
    }
    setColorUniform(r, g, b, a) {
        this.glFunctions.uniform4f(this.colorUniformLocation, r, g, b, a);
        return;
    }
    uploadAndDrawLines(vertexData, vertexCount) {
        var gl;
        gl = this.glFunctions;
        gl.bindBuffer(GL_ARRAY_BUFFER, this.vertexBufferObject);
        gl.bufferData(GL_ARRAY_BUFFER, vertexCount * VERTEX_STRIDE_BYTES, vertexData, GL_DYNAMIC_DRAW);
        gl.enableVertexAttribArray(this.positionAttributeLocation);
        gl.vertexAttribPointer(this.positionAttributeLocation, FLOATS_PER_VERTEX, GL_FLOAT, 0, 0, ptr(0));
        gl.drawArrays(GL_LINES, 0, vertexCount);
        return;
    }
    restoreState() {
        var gl;
        gl = this.glFunctions;
        gl.bindBuffer(GL_ARRAY_BUFFER, 0);
        gl.bindFramebuffer(GL_FRAMEBUFFER, this.savedGLState.add(8).readU32());
        gl.bindVertexArray(this.savedGLState.add(4).readU32());
        gl.useProgram(this.savedGLState.readU32());
        gl.enable(GL_DEPTH_TEST);
        return;
    }
    compileShader(type, source) {
        var shader, srcPtr, srcArr, status;
        shader = this.glFunctions.createShader(type);
        if (!shader) {
            return 0;
        }
        srcPtr = Memory.allocUtf8String(source);
        srcArr = Libc.malloc(8);
        srcArr.writePointer(srcPtr);
        this.glFunctions.shaderSource(shader, 1, srcArr, NULL);
        this.glFunctions.compileShader(shader);
        status = Libc.malloc(BYTES_PER_FLOAT);
        this.glFunctions.getShaderiv(shader, GL_COMPILE_STATUS, status);
        if (status.readS32()) {
            return shader;
        }
        return 0;
    }
}

var MTL_PRIMITIVE_TYPE_LINE = 1;
var MTL_VERTEX_FORMAT_FLOAT3 = 30;
var MTL_PIXEL_FORMAT_BGRA8_UNORM = 80;
var MTL_LOAD_ACTION_LOAD = 2;
var MTL_STORE_ACTION_STORE = 1;
var UNIFORM_SIZE = 16 * BYTES_PER_FLOAT + 4 * BYTES_PER_FLOAT;
var MSL_SOURCE = "\n#include <metal_stdlib>\nusing namespace metal;\nstruct VertexIn { float3 position [[attribute(0)]]; };\nstruct Uniforms { float4x4 mvp; float4 color; };\nstruct VertexOut { float4 position [[position]]; };\nvertex VertexOut vertex_main(VertexIn in [[stage_in]], constant Uniforms &u [[buffer(1)]]) {\n    VertexOut out;\n    out.position = u.mvp * float4(in.position, 1.0);\n    return out;\n}\nfragment float4 fragment_main(VertexOut in [[stage_in]], constant Uniforms &u [[buffer(1)]]) {\n    return u.color;\n}\n";

class MetalOverlayBackend extends RenderOverlay {
    constructor() {
        super();
        this.device = null;
        this.pipelineState = null;
        this.commandQueue = null;
        this.uniformBuf = null;
        this.encoder = null;
        this.ownCmdBuf = null;
        this.currentFbPtr = NULL;
        this.gameCmdBufPtr = NULL;
        this.cachedTexture = null;
    }
    setupHooks() {
        this.setupBattleHooks();
        return;
    }
    initializeGPU() {
        var createDevice, nsSource, errorPtr, library, err, vertexFn, fragmentFn, desc, vd, attr0, e;
        try {
            if (typeof ObjC === "undefined" || !ObjC.available) {
                Logcat.logError("[MetalOverlay] ObjC not available");
                return false;
            }
            createDevice = new NativeFunction(Module.findExportByName("Metal", "MTLCreateSystemDefaultDevice"), "pointer", []);
            this.device = new ObjC.Object(createDevice());
            if (!this.device) {
                Logcat.logError("[MetalOverlay] no MTLDevice");
                return false;
            }
            nsSource = ObjC.classes.NSString.stringWithString_(MSL_SOURCE);
            errorPtr = Libc.malloc(Process.pointerSize);
            errorPtr.writePointer(NULL);
            library = this.device.newLibraryWithSource_options_error_(nsSource, NULL, errorPtr);
            if (!library) {
                err = new ObjC.Object(errorPtr.readPointer());
                Logcat.logError("[MetalOverlay] shader compile: ".concat(err.localizedDescription()));
                return false;
            }
            vertexFn = library.newFunctionWithName_("vertex_main");
            fragmentFn = library.newFunctionWithName_("fragment_main");
            if (!vertexFn || !fragmentFn) {
                Logcat.logError("[MetalOverlay] shader functions not found");
                return false;
            }
            desc = ObjC.classes.MTLRenderPipelineDescriptor.alloc().init();
            desc.setVertexFunction_(vertexFn);
            desc.setFragmentFunction_(fragmentFn);
            vd = ObjC.classes.MTLVertexDescriptor.vertexDescriptor();
            attr0 = vd.attributes().objectAtIndexedSubscript_(0);
            attr0.setFormat_(MTL_VERTEX_FORMAT_FLOAT3);
            attr0.setOffset_(0);
            attr0.setBufferIndex_(0);
            vd.layouts().objectAtIndexedSubscript_(0).setStride_(VERTEX_STRIDE_BYTES);
            desc.setVertexDescriptor_(vd);
            desc.colorAttachments().objectAtIndexedSubscript_(0).setPixelFormat_(MTL_PIXEL_FORMAT_BGRA8_UNORM);
            desc.setDepthAttachmentPixelFormat_(0);
            desc.setStencilAttachmentPixelFormat_(0);
            errorPtr.writePointer(NULL);
            this.pipelineState = this.device.newRenderPipelineStateWithDescriptor_error_(desc, errorPtr);
            if (!this.pipelineState) {
                err = new ObjC.Object(errorPtr.readPointer());
                Logcat.logError("[MetalOverlay] pipeline: ".concat(err.localizedDescription()));
                return false;
            }
            this.commandQueue = this.device.newCommandQueue();
            this.uniformBuf = this.device.newBufferWithLength_options_(UNIFORM_SIZE, 0);
            this.isInitialized = true;
            Logcat.logInfo("[MetalOverlay] GPU initialized");
            return true;
        } catch (e) {
            Logcat.logError("[MetalOverlay] init failed: ".concat(e.stack || e.message || e));
            return false;
        }
    }
    saveAndPrepareState(vpMatrix) {
        var gameQueue, rpd, colorAtt, contents, e;
        try {
            if (this.cachedTexture) {
                if (this.gameCmdBufPtr.isNull()) {
                    return undefined;
                }
            }
            gameQueue = new ObjC.Object(this.gameCmdBufPtr).commandQueue();
            if (!gameQueue) {
                return undefined;
            }
            rpd = ObjC.classes.MTLRenderPassDescriptor.renderPassDescriptor();
            colorAtt = rpd.colorAttachments().objectAtIndexedSubscript_(0);
            colorAtt.setTexture_(this.cachedTexture);
            colorAtt.setLoadAction_(MTL_LOAD_ACTION_LOAD);
            colorAtt.setStoreAction_(MTL_STORE_ACTION_STORE);
            this.ownCmdBuf = gameQueue.commandBuffer();
            if (!this.ownCmdBuf) {
                return undefined;
            }
            this.encoder = this.ownCmdBuf.renderCommandEncoderWithDescriptor_(rpd);
            if (!this.encoder) {
                return undefined;
            }
            this.encoder.setRenderPipelineState_(this.pipelineState);
            contents = this.uniformBuf.contents();
            Memory.copy(contents, vpMatrix, 64);
            this.encoder.setVertexBuffer_offset_atIndex_(this.uniformBuf, 0, 1);
            this.encoder.setFragmentBuffer_offset_atIndex_(this.uniformBuf, 0, 1);
            return;
        } catch (e) {
            this.encoder = null;
            this.ownCmdBuf = null;
            return;
        }
    }
    setColorUniform(r, g, b, a) {
        var contents;
        if (!this.uniformBuf || !this.encoder) {
            return;
        }
        contents = this.uniformBuf.contents();
        contents.add(64).writeFloat(r);
        contents.add(68).writeFloat(g);
        contents.add(72).writeFloat(b);
        contents.add(76).writeFloat(a);
        return;
    }
    uploadAndDrawLines(vertexData, vertexCount) {
        var size, vtxBuf;
        if (!this.encoder || !this.device) {
            return;
        }
        try {
            size = vertexCount * VERTEX_STRIDE_BYTES;
            vtxBuf = this.device.newBufferWithBytes_length_options_(vertexData, size, 0);
            if (!vtxBuf) {
                return undefined;
            }
            this.encoder.setVertexBuffer_offset_atIndex_(vtxBuf, 0, 0);
            this.encoder.drawPrimitives_vertexStart_vertexCount_(MTL_PRIMITIVE_TYPE_LINE, 0, vertexCount);
            return;
        } catch (e) {
            return;
        }
    }
    restoreState() {
        if (!this.encoder) {
            return;
        }
        try {
            this.encoder.endEncoding();
        } catch (e) {
        }
        this.encoder = null;
        return;
    }
}
