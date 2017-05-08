let MixedNumeral = require('./simple/MixedNumeral');
let BinaryFraction = require('./simple/BinaryFraction');

/**
 * @param {string} input
 * @returns {MixedNumeral}
 */
function parseBinaryNumberFromString(input) {
    if(input.length === 0){
        return new MixedNumeral(0);
    }
    let wholeNumbers = input.replace(/\.\d*/,"");
    let fraction = input.replace(/\d*\./,"");
    // TODO : Make this "lossless"
    return new MixedNumeral(parseInt(wholeNumbers),new BinaryFraction(parseInt(fraction),(Math.pow(10,fraction.length))));
}

module.exports = parseBinaryNumberFromString;