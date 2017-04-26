'use strict';

var BinaryNumberState = require('./binaryNumberState');
var binaryAdd = require('./binaryAdd');

function multiImpl(n1, n2) {
    var result = new BinaryNumberState();

    n2.bits.forEach(function (value, index) {
        if (value === false) return;
        var temp = new BinaryNumberState(n1);
        for (var i = index; i > 0; i--) {
            temp.bits.unshift(false);
        }
        result = binaryAdd(result, temp);
    });

    return result;
}

function multi(n1, n2) {
    var result = multiImpl(n1, n2);
    result.isPositive = n1.isPositive === n2.isPositive;
    return result;
}

module.exports = multi;
//# sourceMappingURL=binaryMulti.js.map