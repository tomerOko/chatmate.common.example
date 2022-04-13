"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashFromStringUnicodes_1 = require("./hashBasedStractures/hashFromStringUnicodes");
var hashSet_1 = require("./hashBasedStractures/hashSet");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.executable = function () {
        var userCommandTypes = ["initializeDataStracture", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"];
        var userCommandsValues = [[], [1], [2], [1], [3], [2], [2], [2], [2]];
        var userInput = [userCommandTypes, userCommandsValues];
        var result = executeCommandsCollection(userInput);
        console.log('result:  ', result);
        var expectedResult = [null, null, null, true, false, null, true, null, false];
        console.log('expected:  ', expectedResult);
        console.log('is the result equeal to expected result', compareArrays(expectedResult, result));
    };
    Main.hashSet = null;
    return Main;
}());
var executeCommandsCollection = function (userCommnds) {
    var result = [];
    userCommnds[0].forEach(function (value, index) {
        result.push(executeSingleCommand(value, userCommnds[1][index]));
    });
    return result;
};
var executeSingleCommand = function (command, value) {
    var _a, _b, _c;
    switch (command) {
        case 'initializeDataStracture':
            Main.hashSet = new hashSet_1.HashSet(hashFromStringUnicodes_1.default, function (a, b) { return a[0] == b[0]; });
            return null;
            break;
        case 'add':
            return ((_a = Main.hashSet) === null || _a === void 0 ? void 0 : _a.add(value)) ? null : false;
        case 'contains':
            return (_b = Main.hashSet) === null || _b === void 0 ? void 0 : _b.contains(value);
        case 'remove':
            return ((_c = Main.hashSet) === null || _c === void 0 ? void 0 : _c.remove(value)) ? null : false;
        default:
            return null;
            break;
    }
};
var compareArrays = function (array1, array2) {
    try {
        array1.forEach(function (value, index) {
            if (value !== array2[index])
                throw "inequeivalent found";
        });
        return true;
    }
    catch (error) {
        return false;
    }
};
Main.executable();
/**
 * todo:
 *
 * add tests
 * save tsconfig.json & lucnch.json into template V
 * make it all run V
 */ 
//# sourceMappingURL=index.js.map