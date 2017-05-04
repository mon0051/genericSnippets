let BinaryNumberState = require('./low-level/BinaryNumberState');
let binaryAdd = require('./binaryAdd');

function multiImpl(n1,n2){
    let result = new BinaryNumberState();

    n2.bits.forEach(function (value, index) {
        if(value === false) return;
        let temp = new BinaryNumberState(n1);
        for(let i = index; i > 0; i--){
            temp.bits.unshift(false);
        }
        result = binaryAdd(result,temp);
    });

    return result;
}

function multi(n1,n2) {
    let result = multiImpl(n1,n2);
    result.isPositive = n1.isPositive === n2.isPositive;
    return result;
}

module.exports = multi;