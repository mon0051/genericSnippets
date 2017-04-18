"use strict";

var BinaryNumberState = require('./binaryNumberState');

function borrowBit(number, index) {
    throw "borrowBit is not implemented";
}

function subImpl(n1, n2) {
    var result = new BinaryNumberState();

    throw "subImpl is not implemented";
    return result;
}

/**
 *  @param {BinaryNumberState} n1
 *  @param {BinaryNumberState} n2
 *  @return {BinaryNumberState}
 **/
function binarySub(n1, n2) {
    if (n1.bits.length > n2.bits.length) {
        return subImpl(n1, n2);
    } else {
        return subImpl(n2, n1);
    }
}

module.exports = binarySub;
//# sourceMappingURL=binarySubtract.js.map