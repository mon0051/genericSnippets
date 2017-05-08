let BinaryNumberState = require('./low-level/BinaryNumberState');
let BinaryFraction = require('./BinaryFraction');
let binaryAdd = require('./binaryAdd');
let binaryMulti = require('./binaryMulti');


/**
 * @param {BinaryFraction} n1
 * @param {BinaryFraction} n2
 */
function addBinaryFractions(n1,n2){
    if(n1.denominator.isEqualValue(n2.denominator)){
        return new BinaryFraction(binaryAdd(n1.numerator, n2.numerator), n1.denominator);
    }
    let n1ToFactor = new BinaryFraction(binaryMulti(n1.numerator, n2.denominator), binaryMulti(n1.denominator,n2.denominator));
    let n2ToFactor = new BinaryFraction(binaryMulti(n2.numerator, n1.denominator), binaryMulti(n1.denominator,n2.denominator));

    return addBinaryFractions(n1ToFactor,n2ToFactor);
}

module.exports = addBinaryFractions;