'use strict';

var BinaryNumber = require('../../src/app/binaryNumbers/BinaryNumber');
var BinaryFraction = require('../../src/app/binaryNumbers/simple/BinaryFraction');
var BinaryNumberState = require('../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');
var MixedNumeral = require('../../src/app/binaryNumbers/simple/MixedNumeral');

describe("Binary Number Fraction Add", function () {
    it("1.333 to be 1.333", function () {
        var n1 = new BinaryNumber(new MixedNumeral(1, new BinaryFraction(1, 3)));

        expect(n1.toJsNumber().toFixed(3)).toBe(1.333.toFixed(3));
    });

    it("1.25 to be 1.25", function () {
        var n1 = new BinaryNumber("1.25");

        expect(n1.toJsNumber().toFixed(3)).toBe(1.250.toFixed(3));
    });

    it("1.333 + 1.333 to be 2.667 (js numbers round up when parsed out)", function () {
        var n1 = new BinaryNumber(new MixedNumeral(1, new BinaryFraction(1, 3)));
        var n2 = new BinaryNumber(new MixedNumeral(1, new BinaryFraction(1, 3)));

        n1.add(n2);

        expect(n1.toJsNumber().toFixed(3)).toBe(2.667.toFixed(3));
    });

    it("1.25 + 1.5 to be 2.75", function () {
        var n1 = new BinaryNumber(new MixedNumeral(1, new BinaryFraction(1, 4)));
        var n2 = new BinaryNumber(new MixedNumeral(1, new BinaryFraction(1, 2)));

        n1.add(n2);

        expect(n1.toJsNumber().toFixed(3)).toBe(2.750.toFixed(3));
    });

    it("1.25 + 1.5 to be 2.75", function () {
        var n1 = new BinaryNumber("1.25");
        var n2 = new BinaryNumber("1.5");

        n1.add(n2);

        expect(n1.toJsNumber().toFixed(3)).toBe(2.750.toFixed(3));
    });
});
//# sourceMappingURL=binaryNumber.spec.js.map