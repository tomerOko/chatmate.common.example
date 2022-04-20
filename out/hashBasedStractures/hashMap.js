"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashMap = void 0;
var HashMap = /** @class */ (function () {
    function HashMap(hashFunction) {
        this.hashFunction = hashFunction;
        this.storage = new Array(hashFunction.range);
    }
    HashMap.prototype.add = function (key, value) {
        var _a = this.findIndex(key), hashedKey = _a.hashedKey, index = _a.index;
        if (index != null) {
            var result = this.storage[hashedKey][index].value;
            this.storage[hashedKey][index].value = value;
            return result;
        }
        if (this.storage[hashedKey] == undefined)
            this.storage[hashedKey] = [];
        this.storage[hashedKey].push({ key: key, value: value });
        return null;
    };
    HashMap.prototype.contains = function (key) {
        var _a = this.findIndex(key), hashedKey = _a.hashedKey, index = _a.index;
        return index !== null ? true : false;
    };
    HashMap.prototype.get = function (key) {
        var _a = this.findIndex(key), hashedKey = _a.hashedKey, index = _a.index;
        return index ? this.storage[hashedKey][index].value : null;
    };
    HashMap.prototype.remove = function (key) {
        var _a = this.findIndex(key), hashedKey = _a.hashedKey, index = _a.index;
        if (index !== null) {
            var removed = this.storage[hashedKey].splice(index, 1);
            return removed[0].value;
        }
        return null;
    };
    HashMap.prototype.findIndex = function (key) {
        var hashedKey = this.hashFunction.hash(key);
        var bucket = this.storage[hashedKey];
        var index = bucket ? bucket.findIndex(function (obj) { return obj.key == key; }) : null;
        return { hashedKey: hashedKey, index: (index !== null && index > -1) ? index : null };
    };
    return HashMap;
}());
exports.HashMap = HashMap;
//# sourceMappingURL=hashMap.js.map