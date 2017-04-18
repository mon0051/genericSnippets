let BinaryNumberState = require('./binaryNumberState');

function carryBit(number,index){
    if(number.bits[index]){
        number.bits[index] = false;
        carryBit(number,index+1)
    }else{
        number.bits[index] = true;
    }
}

function addImpl(n1,n2) {
    let result = new BinaryNumberState();
    result.bits = n1.bits.map(x=>x);
    n2.bits.forEach(function(value,index){
        if(!value) return;
        carryBit(result,index);
    });

    return result;
}
/**
 *  @param {BinaryNumberState} n1
 *  @param {BinaryNumberState} n2
 *  @return {BinaryNumberState}
 **/
function binaryAdd(n1,n2){
    if(n1.bits.length > n2.bits.length){
        return addImpl(n1,n2);
    }else{
        return addImpl(n2,n1);
    }
}

module.exports = binaryAdd;
