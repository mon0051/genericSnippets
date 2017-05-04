let BinaryFraction = require('../../../src/app/binaryNumbers/simple/BinaryFraction');
let BinaryNumberState = require('../../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');

describe("Binary Fraction", function () {
    it("1/4 = 0.25", function () {
        let n1 = new BinaryNumberState(1);
        let n2 = new BinaryNumberState(4);

        let result = new BinaryFraction(n1, n2);

        expect(result.toJsNumber()).toBe(0.25);
    });

    it("1/3 ~= 0.333 (3 decimal places)", function () {
        let n1 = new BinaryNumberState(1);
        let n2 = new BinaryNumberState(3);

        let result = new BinaryFraction(n1, n2);

        expect(result.toJsNumber().toFixed(3)).toBe(0.333.toFixed(3));
    });
});