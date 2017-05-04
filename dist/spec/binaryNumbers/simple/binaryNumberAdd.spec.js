'use strict';

var binaryAdd = require('../../../src/app/binaryNumbers/simple/binaryAdd');
var BinaryNumberState = require('../../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');

describe("Binary Number Addition", function () {
    it("odd plus odd 5 + 7 = 12", function () {
        var n1 = new BinaryNumberState(5);
        var n2 = new BinaryNumberState(7);

        var result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(12);
    });

    it("even plus odd 6 + 7 = 13", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(7);

        var result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(13);
    });

    it("even plus even 6 + 6 = 12", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(6);

        var result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(12);
    });

    it("even plus negative 6 + -6 = 0", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(-6);

        var result = binaryAdd(n1, n2);

        expect(result.toJsNumber()).toBe(0);
    });
});
//# sourceMappingURL=binaryNumberAdd.spec.js.map