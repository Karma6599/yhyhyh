// ============================================================= //
// FEATURE: Use battle proxy
// Config key: UseBattleProxy (default false)
// TID prefix: UseBattleProxy
// Icon: UseBattleProxyCallback (menu/icons.js, module 2120)
// Wiring: UdpConnectionInfoMessage (messages/game-protocol.js, module 8777)
// asks the BSD+ server for a proxy endpoint via GetBSDBattleProxyMessage
// (messages/bsd-api-messages.js, module 6072) and rewrites the battle
// connection before it is used
// ============================================================= //

Config.configStatic.UseBattleProxy = false;

// Strings ship in the game asset (bsd/internal/localization.json),
// not in the JS localisation overrides:
//   UseBattleProxy_name        = "Use battle proxy"
//   UseBattleProxy_descEnabled = "When enables, you'll be connected to proxy when entering a battle. This only make sense for russian players without VPN."

function UseBattleProxyCallback() {
    var iconSprite = new Sprite.Sprite(1);
    var battleClip = StringTable.StringTable.getMovieClip("sc/ui.sc", "icon_skins_outlaws");
    var badConectionIcon = StringTable.StringTable.getMovieClip("sc/ui.sc", "bad_conection_icon");
    badConectionIcon.gotoAndStopFrameIndex(0);
    var deniedClip = StringTable.StringTable.getMovieClip("sc/sprays_1.sc", "spray_denied");
    deniedClip.visibility = true;
    deniedClip.setXY(0, 0);
    deniedClip.scale = 1.1;
    battleClip.x = badConectionIcon.width / 3.6;
    battleClip.y = badConectionIcon.height / 3.3;
    battleClip.scale = 0.6;
    iconSprite.addChild(badConectionIcon);
    iconSprite.addChild(battleClip);
    iconSprite.addChild(deniedClip);
    return iconSprite;
}

// GetBSDBattleProxyMessage (module 6072, messages/bsd-api-messages.js) —
// the BSD+ API request for a proxy endpoint:
class GetBSDBattleProxyMessage extends BSDMessage.BSDMessage {
    constructor(ip, port) {
        var route = BSDApi.BSDApi.v1ApiRoute + BSDApi.BSDApi.GET_PROXY;
        var requestBody = {
            tag: "#".concat(PlayerInfo.PlayerInfo.tag),
            ip: ip,
            port: port,
            magic_number: MessageSignatureManager.MessageSignatureManager.getMagicalNumberWithoutMultiplier(),
            signature: LogicRandom.LogicRandom.getRandomInRangeExcept(343, 17777)
        };
        super(requestBody, route);
    }
}

// UdpConnectionInfoMessage (module 8777, messages/game-protocol.js) —
// the battle connection message whose endpoint gets swapped:
var UdpConnectionInfoMessage_decode = Libg.Libg.offset(16264832, 0);
var portOffset = LogicMemory.LogicMemory.offset(144);
var ipOffset = LogicMemory.LogicMemory.offset(152);
var proxyResponseTimeoutMs = 2500;

class UdpConnectionInfoMessage {
    static requestProxy() {
        var response = null;
        var acceptingResponse = true;
        var deadline = Date.now() + proxyResponseTimeoutMs;
        try {
            BSDMessageManager.BSDMessageManager.sendMessage(new GetBSDBattleProxyMessage(UdpConnectionInfoMessage.ip, UdpConnectionInfoMessage.port), function () {
                while (!response) {
                    if (Date.now() < deadline) {
                        Utils.Utils.setGameThreadSleepTo(0.01);
                    }
                }
            }, false, function (result) {
                if (acceptingResponse && Date.now() < deadline) {
                    response = result;
                }
            }).catch(function () {
                Logcat.Logcat.logDebug("Battle proxy request failed; using the game server");
            });
        } finally {
            acceptingResponse = false;
        }
        return response;
    }

    static applyProxyResponse(message, response) {
        if (response.statusCode !== 200 || !response.json) {
            return;
        }
        var parsedResponseData = response.json;
        var chaCha20 = new TSChaCha20.TSChaCha20(TSChaCha20.TSChaCha20.key, TSChaCha20.TSChaCha20.nonce);
        var decryptedResponse = CustomTextEncoder.CustomTextEncoder.decode(chaCha20.decrypt(new Uint8Array(BSDMessageManager.BSDMessageManager.escapedStringToBytes(parsedResponseData.data))));
        var endpoint = JSON.parse(decryptedResponse).data;
        if (!endpoint || typeof endpoint.ip !== "string" || !endpoint.ip.length || !Number.isInteger(endpoint.port) || endpoint.port < 1 || endpoint.port > 65535) {
            return;
        }
        var ipString = message.add(ipOffset).readPointer();
        if (ipString.isNull()) {
            return;
        }
        StringObject.StringObject.assign(ipString, endpoint.ip);
        message.add(portOffset).writeInt(endpoint.port);
        UdpConnectionInfoMessage.ip = endpoint.ip;
        UdpConnectionInfoMessage.port = endpoint.port;
    }
}
UdpConnectionInfoMessage.ip = "";
UdpConnectionInfoMessage.port = -1;

// The decode-side gate (UdpConnectionInfoMessage.patch) that decides whether
// the proxy is requested based on Config.config.UseBattleProxy is lost in the
// repo's own decompile (patch body truncated) — not invented.
