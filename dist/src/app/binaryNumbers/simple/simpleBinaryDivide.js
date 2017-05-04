'use strict';

var BinaryNumberState = require('./low-level/BinaryNumberState');
var binaryDecrese = require('./low-level/binaryDecrease');
var binaryIncrese = require('./low-level/binaryIncrease');
var BinaryFraction = require('./BinaryFraction');
var MixedNumber = require('./MixedNumeral');

function divide(number, divisor) {
    var temp = new BinaryNumberState(number);
    temp.isPositive = true;
    var dividesCount = new BinaryNumberState(0);
    dividesCount.isPositive = true;
    var one = new BinaryNumberState(1);

    while (temp.toJsNumber() >= divisor) {
        temp = binaryDecrese(number, divisor);
        dividesCount = binaryIncrese(dividesCount, one);
    }

    if (temp.toJsNumber() === 0) {
        return dividesCount;
    }

    return new MixedNumber();
}

/**
 * @param {BinaryNumberState} number
 * @param {BinaryNumberState} divisor
 * @return {BinaryNumberState|MixedNumeral}
 */
function simpleDivide(number, divisor) {
    return divide(number, divisor);
}
//# sourceMappingURL=simpleBinaryDivide.js.map