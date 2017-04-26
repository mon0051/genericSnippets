'use strict';

var binaryMulti = require('../../src/app/binaryNumbers/binaryMulti');
var BinaryNumberState = require('../../src/app/binaryNumbers/binaryNumberState');

describe("Binary Number Addition", function () {
    it("5 * 7 = 35", function () {
        var n1 = new BinaryNumberState(5);
        var n2 = new BinaryNumberState(7);

        var result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(35);
    });

    it("6 * 7 = 42", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(7);

        var result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(42);
    });

    it("6 * 6 = 36", function () {
        var n1 = new BinaryNumberState(6);
        var n2 = new BinaryNumberState(6);

        var result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(36);
    });

    it("-6 * -6 = 36", function () {
        var n1 = new BinaryNumberState(-6);
        var n2 = new BinaryNumberState(-6);

        var result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(36);
    });

    it("-6 * 6 = -36", function () {
        var n1 = new BinaryNumberState(-6);
        var n2 = new BinaryNumberState(6);

        var result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(-36);
    });
});
//# sourceMappingURL=binaryMulti.spec.js.map