'use strict';

var BinaryNumberState = require('./simple/low-level/BinaryNumberState');
var binaryAdd = require('./simple/binaryAdd');
var binarySubtract = require('./simple/binarySubtract');
var binaryMultiply = require('./simple/binaryMulti');
var simpleBinaryDivide = require('./simple/simpleBinaryDivide');
var MixedNumeral = require('./simple/MixedNumeral');

/**
 * @param inputNumber {BinaryNumber|MixedNumeral|number|undefined|null}
 * @return {MixedNumeral}
 */
function parse(inputNumber) {
    if (typeof inputNumber === 'number') {
        if (inputNumber.toFixed(0) - inputNumber !== 0) {
            throw "BinaryNumber can only accept integer values if JS number is passed in";
        }
        return new MixedNumeral(new BinaryNumberState(inputNumber));
    }
    if (inputNumber.toString() === '[object BinaryNumber]') {
        return new MixedNumeral(inputNumber);
    }
    return new MixedNumeral(0);
}

/**
 * @param number {BinaryNumber|MixedNumeral|number|undefined|null}
 */
function BinaryNumber(number) {
    var that = this;
    /**
     * @type {MixedNumeral}
     */
    this.state = parse(number);

    this.toJsNumber = function () {
        return that.state.toJsNumber();
    };

    this.add = function (number) {
        var n = parse(number);

        if (n.fraction.toJsNumber() === 0 && that.state.fraction.toJsNumber() === 0) {
            return new BinaryNumber(new MixedNumeral(binaryAdd(this.state.integer, n.integer)));
        }

        throw "Complex Numbers are not yet implemented";
    };
}
//# sourceMappingURL=BinaryNumber.js.map