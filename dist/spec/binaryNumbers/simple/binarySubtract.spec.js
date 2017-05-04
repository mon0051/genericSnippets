'use strict';

var binarySub = require('../../../src/app/binaryNumbers/simple/binarySubtract');
var BinaryNumberState = require('../../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');

describe("Binary Number Subtraction", function () {
    it("odd sub odd 5 - 7 = -2", function () {
        var n1 = new BinaryNumberState(5);
        var n2 = new BinaryNumberState(7);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-2);
    });

    it("even plus odd 6 - 7 = -1", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(-7);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(13);
    });

    it("even sub even 6 - 16 = -10", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(16);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-10);
    });

    it("bigger take smaller", function () {
        var n1 = new BinaryNumberState(1600);
        var n2 = new BinaryNumberState(600);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(1000);
    });

    it("take nothing", function () {
        var n1 = new BinaryNumberState(100);
        var n2 = new BinaryNumberState(0);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(100);
    });

    it("two negatives cancel", function () {
        var n1 = new BinaryNumberState(-10);
        var n2 = new BinaryNumberState(-10);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(0);
    });

    it("negative take positive", function () {
        var n1 = new BinaryNumberState(-10);
        var n2 = new BinaryNumberState(10);

        var result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-20);
    });
});
//# sourceMappingURL=binarySubtract.spec.js.map