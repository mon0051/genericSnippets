function fromJsNumber(number) {
    let bits = [];
    this.isPositive = (number > 0);
    if(number < 0){
        number = number * (-1);
    }
    while(number >= 1){
        bits[bits.length] = (number % 2 > 0);
        number = (number / 2) - (number % 2);
        number = number.toFixed(0)
    }
    if(number > 0){
        bits[bits.length] = true;
    }
    this.bits = bits;

}

function fromBinaryNumberState(number){
    if(number.toString() === "[object BinaryNumberState]"){
        this.bits = number.bits.slice();
        this.isPositive = number.isPositive;
    }else{
        this.bits = [];
        this.isPositive = true;
    }
}

let converterMap = {
    'number' : fromJsNumber,
    'object' : fromBinaryNumberState
};
/**
 * @param {BinaryNumberState|number|undefined|null}numberIn
 * @constructor
 */
function BinaryNumberState(numberIn){
    this.bits = [];
    this.isPositive = false;
    let that = this;

    (function (){
        let converter = converterMap[typeof numberIn];
        if (typeof converter === 'function') {
            converter.call(that, numberIn);
        }
    }());

    this.toJsNumber = function () {
        let bits = this.bits;
        let number = 0;

        bits.forEach(function (value, index) {
            if(value){
                number+= Math.pow(2,index);
            }
        });

        if(this.isPositive === true) return number;

        return number * (-1);
    };
    this.toString = function () {
        return "[object BinaryNumberState]";
    };
}

module.exports = BinaryNumberState;