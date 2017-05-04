let BinaryNumberState = require('./simple/low-level/BinaryNumberState');
let binaryAdd = require('./simple/binaryAdd');
let binarySubtract = require('./simple/binarySubtract');
let binaryMultiply = require('./simple/binaryMulti');
let simpleBinaryDivide = require('./simple/simpleBinaryDivide');
let MixedNumeral = require('./simple/MixedNumeral');

/**
 * @param inputNumber {BinaryNumber|MixedNumeral|number|undefined|null}
 * @return {MixedNumeral}
 */
function parse(inputNumber){
    if(typeof inputNumber === 'number'){
        if(inputNumber.toFixed(0) - inputNumber !== 0){
            throw "BinaryNumber can only accept integer values if JS number is passed in";
        }
        return new MixedNumeral(new BinaryNumberState(inputNumber));
    }
    if(inputNumber.toString() === '[object BinaryNumber]'){
        return new MixedNumeral(inputNumber);
    }
    return new MixedNumeral(0);
}

/**
 * @param number {BinaryNumber|MixedNumeral|number|undefined|null}
 */
function BinaryNumber(number){
    let that = this;
    /**
     * @type {MixedNumeral}
     */
    this.state = parse(number);

    this.toJsNumber = function () {
        return that.state.toJsNumber();
    };

    this.add = function (number) {
        let n = parse(number);

        if(n.fraction.toJsNumber() === 0 && that.state.fraction.toJsNumber() === 0){
            return new BinaryNumber(new MixedNumeral(binaryAdd(this.state.integer, n.integer)));
        }

        throw "Complex Numbers are not yet implemented";
    }
}