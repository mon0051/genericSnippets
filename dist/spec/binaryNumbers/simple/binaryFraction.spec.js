'use strict';

var BinaryFraction = require('../../../src/app/binaryNumbers/simple/BinaryFraction');
var BinaryNumberState = require('../../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');

describe("Binary Fraction", function () {
    it("1/4 = 0.25", function () {
        var n1 = new BinaryNumberState(1);
        var n2 = new BinaryNumberState(4);

        var result = new BinaryFraction(n1, n2);

        expect(result.toJsNumber()).toBe(0.25);
    });

    it("1/3 ~= 0.333 (3 decimal places)", function () {
        var n1 = new BinaryNumberState(1);
        var n2 = new BinaryNumberState(3);

        var result = new BinaryFraction(n1, n2);

        expect(result.toJsNumber().toFixed(3)).toBe(0.333.toFixed(3));
    });
});
//# sourceMappingURL=binaryFraction.spec.js.map