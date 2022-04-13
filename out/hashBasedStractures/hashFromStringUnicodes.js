"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashFunction_StringUnicodes = {
    range: Math.pow(2, 16),
    hash: function (key) {
        var hash = 0;
        if (key.length == 0)
            return hash;
        for (var i = 0; i < key.length; i++) {
            var char = key.charCodeAt(i);
            hash = ((hash << 1) - hash) + char;
            hash = hash & hash; // Convet to 16bit integer
        }
        return hash;
    }
};
exports.default = hashFunction_StringUnicodes;
//# sourceMappingURL=hashFromStringUnicodes.js.map