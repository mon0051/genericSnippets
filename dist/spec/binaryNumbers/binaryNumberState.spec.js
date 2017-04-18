"use strict";

var BinaryNumberState = require('../../src/app/binaryNumbers/binaryNumberState');

describe("Binary Number Test Suite", function () {

    it("numbers 1 holds value", function () {
        var n1 = new BinaryNumberState(1);

        expect(n1.toJsNumber()).toBe(1);
    });

    it("numbers 0 holds value", function () {
        var n1 = new BinaryNumberState(0);

        expect(n1.toJsNumber()).toBe(0);
    });

    it("even number holds value", function () {
        var n1 = new BinaryNumberState(222);

        expect(n1.toJsNumber()).toBe(222);
    });

    it("odd number holds value", function () {
        var n1 = new BinaryNumberState(1001);

        expect(n1.toJsNumber()).toBe(1001);
    });

    it("remembers negative number state", function () {
        expect(new BinaryNumberState(-1).toJsNumber()).toBe(-1);
    });
});
//# sourceMappingURL=binaryNumberState.spec.js.map