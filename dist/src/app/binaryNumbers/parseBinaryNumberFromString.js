'use strict';

var MixedNumeral = require('./simple/MixedNumeral');
var BinaryFraction = require('./simple/BinaryFraction');

/**
 * @param {string} input
 * @returns {MixedNumeral}
 */
function parseBinaryNumberFromString(input) {
    if (input.length === 0) {
        return new MixedNumeral(0);
    }
    var wholeNumbers = input.replace(/\.\d*/, "");
    var fraction = input.replace(/\d*\./, "");
    // TODO : Make this "lossless"
    return new MixedNumeral(parseInt(wholeNumbers), new BinaryFraction(parseInt(fraction), Math.pow(10, fraction.length)));
}

module.exports = parseBinaryNumberFromString;
//# sourceMappingURL=parseBinaryNumberFromString.js.map