'use strict';

var BinaryNumberState = require('./binaryNumberState');

function bigger(n1, n2) {
    if (n1.bits.length > n2.bits.length) {
        return true;
    }
    if (n2.bits.length > n1.bits.length) {
        return false;
    }
    for (var i = n1.bits.length - 1; i > 0; i--) {
        if (n1.bits[i] === n2.bits[i]) {
            continue;
        }
        return n1.bits[i];
    }
    return false;
}
/**
 * @param {BinaryNumberState} number
 */
function trimZeros(number) {
    if (number.bits[number.bits.length - 1] === true) {
        return;
    }

    for (var i = number.bits.length - 1; i >= 0; i--) {
        if (number.bits[i] === true) {
            number.bits = number.bits.slice(0, i + 1);
            return;
        }
    }
}

/**
 * @param {BinaryNumberState} number
 * @param {number} index
 */
function borrowBit(number, index) {
    if (index === number.bits.length - 1 && number.bits[index] === false) {
        throw "Bad borrow";
    }
    if (typeof number.bits[index] === 'undefined' || number.bits[index] === null || number.bits[index] === undefined) {
        throw "index out of bounds";
    }
    if (number.bits[index] === true) {
        number.bits[index] = false;
    } else {
        number.bits[index] = true;
        borrowBit(number, index + 1);
    }
}
/**
 *
 * @param n1 {BinaryNumberState}
 * @param n2 {BinaryNumberState}
 * @returns {BinaryNumberState}
 */
function subImpl(n1, n2) {
    var result = new BinaryNumberState();
    result.bits = n1.bits.slice();
    result.isPositive = n1.isPositive;

    for (var i = n1.bits.length - 1; i >= 0; i--) {
        if (!n2.bits[i]) continue;
        borrowBit(result, i);
    }

    trimZeros(result);
    return result;
}

/**
 *  @param n1 {BinaryNumberState}
 *  @param n2 {BinaryNumberState}
 *  @return {BinaryNumberState}
 **/
function binarySub(n1, n2) {
    if (n1.isPositive !== n2.isPositive) {
        throw "Can't subtract numbers with opposite signs";
    }

    var n1Bigger = bigger(n1, n2);

    var magnitudeDifference = null;

    if (n1Bigger === true) {
        magnitudeDifference = subImpl(n1, n2);
        magnitudeDifference.isPositive = n1.isPositive;
    } else {
        magnitudeDifference = subImpl(n2, n1);
        magnitudeDifference.isPositive = !n1.isPositive;
    }
    return magnitudeDifference;
}

module.exports = binarySub;
//# sourceMappingURL=binaryDecrease.js.map