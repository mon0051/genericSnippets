'use strict';

var BinaryNumberState = require('../simple/low-level/BinaryNumberState');

function MixedNumeral(integer, numerator, denominator) {
    var that = this;

    that.integer = integer || new BinaryNumberState();
    that.numerator = numerator || new BinaryNumberState();
    that.denominator = denominator || new BinaryNumberState();

    this.toJsNumber = function () {
        return that.integer.toJsNumber() + that.numerator.toJsNumber() / that.denominator.toJsNumber();
    };
}

module.exports = MixedNumeral;
//# sourceMappingURL=MixedNumeral.js.map