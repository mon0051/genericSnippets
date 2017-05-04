let binaryIncrease = require('./low-level/binaryIncrease');
let binaryDecrease = require('./low-level/binaryDecrease');
let BinaryNumberState = require('./low-level/BinaryNumberState');

/**
 *  @param n1 {BinaryNumberState}
 *  @param n2 {BinaryNumberState}
 *  @return {BinaryNumberState}
 **/
function binarySubtract(n1, n2) {
    if(n1.isPositive === n2.isPositive){
        let temp = new BinaryNumberState();
        temp.isPositive = n2.isPositive;
        temp.bits = n2.bits.slice();

        return binaryDecrease(new BinaryNumberState(n1), temp);
    }else{
        let temp = new BinaryNumberState();
        temp.isPositive = !n2.isPositive;
        temp.bits = n2.bits.slice();

        return binaryIncrease(new BinaryNumberState(n1), temp);
    }
}

module.exports = binarySubtract;