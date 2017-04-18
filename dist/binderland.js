"use strict";

var blob = {
    name: "frank"
};

var otherBlob = {
    name: "tom"
};

function nameOut(that) {
    var result = "";
    that = that || {};
    result += "That : " + that.name + "\n";
    if (this) {
        result += "This " + this.name + "\n";
    }
    result += "\n";
    return result;
}

var namer = nameOut.bind(blob, otherBlob);
namer();
console.log(namer({ name: "tim" }));

blob.print = nameOut;
console.log(blob.print());

blob.print = nameOut.bind(otherBlob);
console.log(blob.print());
//# sourceMappingURL=binderland.js.map