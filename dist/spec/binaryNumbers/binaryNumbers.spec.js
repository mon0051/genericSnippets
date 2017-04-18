'use strict';

var binaryAdd = require('../../src/app/binaryNumbers/binaryAddition');
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
});
//# sourceMappingURL=binaryNumbers.spec.js.map