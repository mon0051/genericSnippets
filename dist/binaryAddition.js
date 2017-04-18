'use strict';

var BinaryNumberState = require('./binaryNumbers/binaryNumberState');

function carryBit(number, index) {
    if (number.bits[index]) {
        number.bits[index] = false;
        carryBit(number, index + 1);
    } else {
        number.bits[index] = true;
    }
}

function addImpl(n1, n2) {
    var result = new BinaryNumberState();
    result.bits = n1.bits.map(function (x) {
        return x;
    });
    n2.bits.forEach(function (value, index) {
        if (!value) return;
        carryBit(result, index);
    });

    return result;
}

function binaryAdd(n1, n2) {
    if (n1.length > n2.length) {
        return addImpl(n1, n2);
    } else {
        return addImpl(n2, n1);
    }
}

module.exports = binaryAdd;
//# sourceMappingURL=binaryAddition.js.map