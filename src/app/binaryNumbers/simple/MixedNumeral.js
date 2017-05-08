let BinaryNumberState = require('./low-level/BinaryNumberState');
let BinaryFraction = require('./BinaryFraction');

/**
 *
 * @param {BinaryNumberState|number} integer
 * @param {BinaryFraction|undefined} fraction
 * @constructor
 */
function MixedNumeral(integer,fraction){
    let that = this;

    that.integer = new BinaryNumberState(integer) || new BinaryNumberState(0);
    that.fraction = fraction || new BinaryFraction(new BinaryNumberState(0),new BinaryNumberState(1));

    this.toJsNumber = function(){
        return (that.integer.toJsNumber()) + (that.fraction.toJsNumber());
    }

    this.toString = function () {
        return "[object MixedNumeral]";
    }
}

module.exports = MixedNumeral;