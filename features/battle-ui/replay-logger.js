var UUID_BYTE_LENGTH = 16;
var UUID_HEX_LENGTH = 32;

class ReplayUuid {
    toBuffer(uuid) {
        var hex = uuid.replace(/[^0-9a-fA-F]/g, "");
        if (hex.length !== UUID_HEX_LENGTH) {
            return null;
        }
        var buffer = Libc.Libc.malloc(UUID_BYTE_LENGTH);
        for (var byteIndex = 0; byteIndex < UUID_BYTE_LENGTH; byteIndex++) {
            buffer.add(byteIndex).writeU8(parseInt(hex.substr(byteIndex * 2, 2), 16));
        }
        return buffer;
    }

    toHex(buffer) {
        var hex = "";
        for (var byteIndex = 0; byteIndex < UUID_BYTE_LENGTH; byteIndex++) {
            hex = hex + buffer.add(byteIndex).readU8().toString(16).padStart(2, "0");
        }
        return hex;
    }

    toFormatted(buffer) {
        var hex = ReplayUuid.toHex(buffer);
        return "".concat(hex.slice(0, 8), "-", hex.slice(8, 12), "-", hex.slice(12, 16), "-", hex.slice(16, 20), "-", hex.slice(20, 32));
    }
}

class ReplayStringIdLogger {
    patch() {
        Interceptor.attach(ViewReplayByStringIdMessage.ViewReplayByStringIdMessage.encodeAddress, {
            onEnter() {
                ReplayStringIdLogger.lastCapturedStringId = ViewReplayByStringIdMessage.ViewReplayByStringIdMessage.readStringId(this.context.x0);
            }
        });
    }

    getLastCapturedStringId() {
        return ReplayStringIdLogger.lastCapturedStringId;
    }
}

ReplayStringIdLogger.lastCapturedStringId = null;

class ReplayUuidLogger {
    patch() {
        Interceptor.attach(AllianceManager.AllianceManager.doStartReplayAddr, {
            onEnter(args) {
                ReplayUuidLogger.captureRawUuid(args[1], args[2]);
                ReplayUuidLogger.lastCapturedUuid = ReplayUuid.ReplayUuid.toFormatted(ReplayUuidLogger.rawUuid);
            }
        });
    }

    getLastCapturedUuid() {
        return ReplayUuidLogger.lastCapturedUuid;
    }

    getLastRawUuid() {
        if (ReplayUuidLogger.hasRawUuid) {
            return ReplayUuidLogger.rawUuid;
        }
        return null;
    }

    captureRawUuid(uuidHigh, uuidLow) {
        ReplayUuidLogger.rawUuid.writePointer(uuidHigh);
        ReplayUuidLogger.rawUuid.add(8).writePointer(uuidLow);
        ReplayUuidLogger.hasRawUuid = true;
    }
}

ReplayUuidLogger.lastCapturedUuid = null;
ReplayUuidLogger.hasRawUuid = false;
ReplayUuidLogger.rawUuid = Libc.Libc.malloc(UUID_BYTE_LENGTH);
