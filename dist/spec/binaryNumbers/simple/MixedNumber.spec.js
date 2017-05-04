'use strict';

var BinaryFraction = require('../../../src/app/binaryNumbers/simple/BinaryFraction');
var BinaryNumberState = require('../../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');
var MixedNumber = require('../../../src/app/binaryNumbers/simple/MixedNumeral');

describe("Binary Number", function () {
    it("25 = 25", function () {
        var n1 = new BinaryNumber();
        var n2 = new BinaryNumberState(4);

        var result = new MixedNumber(n1, n1, n2);

        expect(result.toJsNumber()).toBe(1.25);
    });

    it("1 1/3 ~= 1.333 (3 decimal places)", function () {
        var n1 = new BinaryNumberState(1);
        var n2 = new BinaryNumberState(3);

        var result = new MixedNumber(n1, n1, n2);

        expect(result.toJsNumber().toFixed(3)).toBe(1.333.toFixed(3));
    });
});
//# sourceMappingURL=MixedNumber.spec.js.map