let binaryIncrease = require('./binaryIncrease');
let binaryDecrease = require('./binaryDecrease');
let BinaryNumberState = require('./binaryNumberState');

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