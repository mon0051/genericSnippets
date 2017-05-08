'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function fromJsNumber(number) {
    var bits = [];
    this.isPositive = number > 0;
    if (number < 0) {
        number = number * -1;
    }
    while (number >= 1) {
        bits[bits.length] = number % 2 > 0;
        number = number / 2 - number % 2;
        number = number.toFixed(0);
    }
    if (number > 0) {
        bits[bits.length] = true;
    }
    this.bits = bits;
}

function fromBinaryNumberState(number) {
    if (number.toString() === "[object BinaryNumberState]") {
        this.bits = number.bits.slice();
        this.isPositive = number.isPositive;
    } else {
        this.bits = [];
        this.isPositive = true;
    }
}

// TODO : Parse from string so we can easily enter numbers by hand
var converterMap = {
    'number': fromJsNumber,
    'object': fromBinaryNumberState
};
/**
 * @param {BinaryNumberState|number|undefined|null}numberIn
 * @constructor
 */
function BinaryNumberState(numberIn) {
    this.bits = [];
    this.isPositive = false;
    var that = this;

    (function () {
        var converter = converterMap[typeof numberIn === 'undefined' ? 'undefined' : _typeof(numberIn)];
        if (typeof converter === 'function') {
            converter.call(that, numberIn);
        }
    })();

    this.toJsNumber = function () {
        var bits = this.bits;
        var number = 0;

        bits.forEach(function (value, index) {
            if (value) {
                number += Math.pow(2, index);
            }
        });

        if (this.isPositive === true) return number;

        return number * -1;
    };
    /**
     *
     * @param {BinaryNumberState} n2
     */
    this.isEqualValue = function (n2) {
        if (n2.toString() !== "[object BinaryNumberState]") {
            return false;
        }
        return that.bits.every(function (value, index) {
            return that.bits[index] === n2.bits[index];
        });
    };

    this.toString = function () {
        return "[object BinaryNumberState]";
    };
}

module.exports = BinaryNumberState;
//# sourceMappingURL=BinaryNumberState.js.map