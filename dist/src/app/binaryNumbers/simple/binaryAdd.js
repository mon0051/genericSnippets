'use strict';

var binaryIncrease = require('./low-level/binaryIncrease');
var binaryDecrease = require('./low-level/binaryDecrease');
var BinaryNumberState = require('./low-level/BinaryNumberState');

/**
 *  @param n1 {BinaryNumberState}
 *  @param n2 {BinaryNumberState}
 *  @return {BinaryNumberState}
 **/
function binaryAdd(n1, n2) {
    if (n1.isPositive === n2.isPositive) {
        return binaryIncrease(new BinaryNumberState(n1), new BinaryNumberState(n2));
    } else {
        var temp = new BinaryNumberState(n2);
        temp.isPositive = !n2.isPositive;

        return binaryDecrease(new BinaryNumberState(n1), temp);
    }
}

module.exports = binaryAdd;
//# sourceMappingURL=binaryAdd.js.map