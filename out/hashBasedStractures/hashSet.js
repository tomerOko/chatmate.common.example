"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashSet = void 0;
var compareAsStrings = function (a, b) {
    return a.toString() == b.toString();
};
var HashSet = /** @class */ (function () {
    function HashSet(hashFunction, comperator) {
        this.hashFunction = hashFunction;
        this.storage = new Array(hashFunction.range);
        this.comperator = comperator ? comperator : compareAsStrings;
    }
    HashSet.prototype.add = function (value) {
        var _a = this.findIndex(value), hashedKey = _a.hashedKey, index = _a.index;
        if (index != null) {
            var overriddenValue = this.storage[hashedKey][index];
            this.storage[hashedKey][index] = value;
            return overriddenValue;
        }
        if (this.storage[hashedKey] == undefined)
            this.storage[hashedKey] = [];
        this.storage[hashedKey].push(value);
        return true;
    };
    HashSet.prototype.contains = function (value) {
        var x = this.findIndex(value);
        var hashedKey = x.hashedKey, index = x.index;
        return index != null ? true : false;
    };
    HashSet.prototype.remove = function (value) {
        var _a = this.findIndex(value), hashedKey = _a.hashedKey, index = _a.index;
        if (index != null) {
            var removed = this.storage[hashedKey].splice(index, 1);
            return removed[0];
        }
        return true;
    };
    HashSet.prototype.findIndex = function (value) {
        var _this = this;
        var hashedKey = this.hashFunction.hash(value.toString());
        var bucket = this.storage[hashedKey];
        var index = bucket ? bucket.findIndex(function (obj) { return _this.comperator(obj, value); }) : null;
        index = index != null && index > -1 ? index : null;
        return { hashedKey: hashedKey, index: index };
    };
    return HashSet;
}());
exports.HashSet = HashSet;
//# sourceMappingURL=hashSet.js.map