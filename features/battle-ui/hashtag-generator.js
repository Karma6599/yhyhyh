var HashTagCodeGenerator_toCode = new NativeFunction(Libg.Libg.offset(16573488, 0), "pointer", ["pointer", "pointer"]);

class HashTagCodeGenerator {
    convertLongToPlayerTag(logicLong) {
        var highID = (logicLong instanceof LogicLong.LogicLong ? logicLong.instance : logicLong).readInt();
        var lowID = (logicLong instanceof LogicLong.LogicLong ? logicLong.instance : logicLong).add(4).readInt();
        var fullID = int64(lowID).shl(8).add(highID).toNumber();
        var tag = "";
        while (fullID > 0) {
            var conversionCharIndex = fullID % this.CONVERSION_CHARS.length;
            tag = tag + this.CONVERSION_CHARS[conversionCharIndex];
            fullID = fullID - conversionCharIndex;
            fullID = fullID / this.CONVERSION_CHARS.length;
        }
        return tag.split("").reverse().join("");
    }

    convertPlayerTagToLong(tag) {
        var tagArray = tag.toUpperCase().split("");
        var id = 0;
        if (tagArray[0] === "#") {
            tagArray.shift();
        }
        for (var i = 0; i < tagArray.length; i++) {
            var character = tagArray[i];
            var charIndex = this.CONVERSION_CHARS.indexOf(character);
            id = id * this.CONVERSION_CHARS.length;
            id = id + charIndex;
        }
        return new LogicLong.LogicLong(id % 256, (id - (id % 256)) / 256);
    }

    patch() {
    }
}

HashTagCodeGenerator.CONVERSION_CHARS = "0289PYLQGRJCUV";
