let BinaryNumberState = require('./low-level/BinaryNumberState');
/**
 * @param {BinaryNumberState} numerator
 * @param {BinaryNumberState} denominator
 * @constructor
 */
function BinaryFraction(numerator,denominator){
    let that = this;
    this.numerator = new BinaryNumberState(numerator);
    this.denominator = new BinaryNumberState(denominator);

    this.toJsNumber = function(){
        return (that.numerator.toJsNumber() / that.denominator.toJsNumber());
    };

    this.toString = function () {
        return "[object BinaryFraction]";
    }
}

module.exports = BinaryFraction;