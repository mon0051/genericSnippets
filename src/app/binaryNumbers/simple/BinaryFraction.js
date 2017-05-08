let BinaryNumberState = require('./low-level/BinaryNumberState');
/**
 * @param {BinaryNumberState|number} numerator
 * @param {BinaryNumberState|number} denominator
 * @constructor
 */
function BinaryFraction(numerator,denominator){
    let that = this;
    this.numerator = new BinaryNumberState(numerator);
    this.denominator = new BinaryNumberState(denominator);

    this.toJsNumber = function(){
        if(that.numerator.toJsNumber() === 0){
            return 0;
        }
        return (that.numerator.toJsNumber() / that.denominator.toJsNumber());
    };

    this.toString = function () {
        return "[object BinaryFraction]";
    }
}

module.exports = BinaryFraction;