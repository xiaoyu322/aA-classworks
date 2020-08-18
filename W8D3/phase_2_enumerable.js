Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++){
       callback(this[i]);
    }
    //return undefined;
}

Array.prototype.myMap = function (callback) {
    let output = new Array();
    this.myEach((ele) => {
        output.push(callback(ele))
    });
    return output;
}

Array.prototype.myReduce = function (callback, initialValue) {
    let acc;
    if (initialValue == null) {
        acc = this[0];
        this.slice(1,this.length).myEach((ele) => {
            //console.log(acc);
            acc = callback(acc,ele);
        });
    }
    else {
        acc = initialValue;
        this.myEach((ele) => {
            acc = callback(acc, ele);
        })
    }
    return acc;
}

