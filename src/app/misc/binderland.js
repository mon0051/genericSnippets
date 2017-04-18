let blob = {
    name : "frank"
};

let otherBlob = {
    name : "tom"
};

function nameOut(that) {
    let result = "";
    that = that || {};
    result += "That : " + that.name +"\n";
    if(this){
        result +="This "+this.name+"\n";
    }
    result += "\n";
    return result;
}

let namer = nameOut.bind(blob,otherBlob);
namer();
console.log(namer({name:"tim"}));

blob.print = nameOut;
console.log(blob.print());

blob.print = nameOut.bind(otherBlob);
console.log(blob.print());
