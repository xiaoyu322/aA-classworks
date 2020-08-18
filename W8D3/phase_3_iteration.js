Array.prototype.bubbleSort = function() {
    for (let i=0; i<this.length; i++) {
        for (let j = 0; j<this.length; j++) {
            if(i<j && this[i]>this[j]) 
            {
                [this[i], this[j]] = [this[j], this[i]];
            }

        }
    }
    return this;
}