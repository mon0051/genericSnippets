let BinaryNumberState = require('./low-level/BinaryNumberState');
let binaryDecrese = require('./low-level/binaryDecrease');
let binaryIncrese = require('./low-level/binaryIncrease');
let BinaryFraction = require('./BinaryFraction');
let MixedNumber = require('./MixedNumeral');

function divide(number,divisor){
    let temp = new BinaryNumberState(number);
    temp.isPositive = true;
    let dividesCount = new BinaryNumberState(0);
    dividesCount.isPositive = true;
    let one = new BinaryNumberState(1);

    while(temp.toJsNumber() >= divisor){
        temp = binaryDecrese(number,divisor);
        dividesCount = binaryIncrese(dividesCount,one);
    }

    if(temp.toJsNumber() === 0){
        return dividesCount;
    }

    return new MixedNumber();

}

/**
 * @param {BinaryNumberState} number
 * @param {BinaryNumberState} divisor
 * @return {BinaryNumberState|MixedNumeral}
 */
function simpleDivide(number,divisor){
    return divide(number,divisor);
}