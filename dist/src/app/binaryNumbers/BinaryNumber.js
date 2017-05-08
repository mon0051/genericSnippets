'use strict';

var BinaryNumberState = require('./simple/low-level/BinaryNumberState');
var binaryAdd = require('./simple/binaryAdd');
var binarySubtract = require('./simple/binarySubtract');
var binaryMultiply = require('./simple/binaryMulti');
var binaryFractionAdd = require('./simple/binaryFractionAdd');
var simpleBinaryDivide = require('./simple/simpleBinaryDivide');
var MixedNumeral = require('./simple/MixedNumeral');
var BinaryFraction = require('./simple/BinaryFraction');
var parseBinaryNumberFromString = require('./parseBinaryNumberFromString');

/**
 * @param inputNumber {BinaryNumber|MixedNumeral|number|string|undefined|null}
 * @return {MixedNumeral}
 */
function parse(inputNumber) {
    if (typeof inputNumber === "string") {
        return parseBinaryNumberFromString(inputNumber);
    }
    if (typeof inputNumber === "undefined") {
        return new MixedNumeral();
    }
    if (typeof inputNumber === 'number') {
        if (inputNumber.toFixed(0) - inputNumber !== 0) {
            throw "BinaryNumber can only accept integer values if JS number is passed in";
        }

        return new MixedNumeral(new BinaryNumberState(inputNumber));
    }

    if (inputNumber.toString() === '[object MixedNumeral]') {
        return new MixedNumeral(inputNumber.integer, inputNumber.fraction);
    }

    return new MixedNumeral();
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

    /**
     * @param {BinaryNumber} number
     * @return {BinaryNumber}
     */
    this.add = function (number) {
        var n = number;
        if (number.toString() !== "[object BinaryNumber]") {
            parse(number);
        }

        if (n.state.fraction.toJsNumber() === 0 && that.state.fraction.toJsNumber() === 0) {
            return new BinaryNumber(new MixedNumeral(binaryAdd(this.state.integer, n.state.integer), new BinaryFraction(0, 1)));
        }

        that.state = new BinaryNumber(new MixedNumeral(binaryAdd(this.state.integer, n.state.integer), binaryFractionAdd(this.state.fraction, n.state.fraction)));

        return that;
    };

    this.toString = function () {
        return "[object BinaryNumber]";
    };
}

module.exports = BinaryNumber;
//# sourceMappingURL=BinaryNumber.js.map