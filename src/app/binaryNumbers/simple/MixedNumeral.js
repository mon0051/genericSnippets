let BinaryNumberState = require('./low-level/BinaryNumberState');
let BinaryFraction = require('./BinaryFraction');

function MixedNumeral(integer,fraction){
    let that = this;

    that.integer = new BinaryNumberState(integer) || new BinaryNumberState(0);
    that.fraction = fraction || new BinaryFraction(new BinaryNumberState(0),new BinaryNumberState(0));

    this.toJsNumber = function(){
        return (that.integer.toJsNumber()) + (that.fraction.toJsNumber());
    }
}

module.exports = MixedNumeral;