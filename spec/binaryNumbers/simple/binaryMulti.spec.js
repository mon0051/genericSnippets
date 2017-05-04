let binaryMulti = require('../../../src/app/binaryNumbers/simple/binaryMulti');
let BinaryNumberState = require('../../../src/app/binaryNumbers/simple/low-level/BinaryNumberState');

describe("Binary Number Multiplication", function () {
    it("5 * 7 = 35", function () {
        let n1 = new BinaryNumberState(5);
        let n2 = new BinaryNumberState(7);

        let result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(35);
    });

    it("6 * 7 = 42", function () {
        let n1 = new BinaryNumberState(6);
        let n2 = new BinaryNumberState(7);

        let result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(42);
    });

    it("6 * 6 = 36", function () {
        let n1 = new BinaryNumberState(6);
        let n2 = new BinaryNumberState(6);

        let result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(36);
    });

    it("-6 * -6 = 36", function () {
        let n1 = new BinaryNumberState(-6);
        let n2 = new BinaryNumberState(-6);

        let result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(36);
    });

    it("-6 * 6 = -36", function () {
        let n1 = new BinaryNumberState(-6);
        let n2 = new BinaryNumberState(6);

        let result = binaryMulti(n1, n2);

        expect(result.toJsNumber()).toBe(-36);
    });
});