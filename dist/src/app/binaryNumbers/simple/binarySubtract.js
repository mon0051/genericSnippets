'use strict';

var binaryIncrease = require('./low-level/binaryIncrease');
var binaryDecrease = require('./low-level/binaryDecrease');
var BinaryNumberState = require('./low-level/BinaryNumberState');

/**
 *  @param n1 {BinaryNumberState}
 *  @param n2 {BinaryNumberState}
 *  @return {BinaryNumberState}
 **/
function binarySubtract(n1, n2) {
    if (n1.isPositive === n2.isPositive) {
        var temp = new BinaryNumberState();
        temp.isPositive = n2.isPositive;
        temp.bits = n2.bits.slice();

        return binaryDecrease(new BinaryNumberState(n1), temp);
    } else {
        var _temp = new BinaryNumberState();
        _temp.isPositive = !n2.isPositive;
        _temp.bits = n2.bits.slice();

        return binaryIncrease(new BinaryNumberState(n1), _temp);
    }
}

module.exports = binarySubtract;
//# sourceMappingURL=binarySubtract.js.map