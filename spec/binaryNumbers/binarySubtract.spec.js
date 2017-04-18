let binarySub = require('../../src/app/binaryNumbers/binarySubtract');
let BinaryNumberState = require('../../src/app/binaryNumbers/binaryNumberState');

describe("Binary Number Subtraction", function () {
    it("odd sub odd 5 - 7 = -2", function () {
        let n1 = new BinaryNumberState(5);
        let n2 = new BinaryNumberState(7);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-2);
    });

    it("even plus odd 6 - 7 = -1", function () {
        let n1 = new BinaryNumberState(6);
        let n2 = new BinaryNumberState(7);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-1);
    });

    it("even sub even 6 - 16 = -10", function () {
        let n1 = new BinaryNumberState(6);
        let n2 = new BinaryNumberState(16);

        let result = binarySub(n1, n2);

        expect(result.toJsNumber()).toBe(-10);
    });
});