Array.prototype.uniq = function () {
    let mySet = new Set(); 
    let output_arr = new Array();
    this.forEach((ele)=>{
        if (!mySet.has(ele))
        {
            mySet.add(ele); 
            output_arr.push(ele);
        }
    });
    return output_arr;
}

Array.prototype.twoSum = function () {
    debugger
    let output_arr = new Array(); 
    for(let i=0;i<this.length;i++)
    {
        for(let j=i+1;j<this.length;j++)
        {
            if(this[i]+this[j] === 0)
            {
                output_arr.push([i, j]);
            }
        }
    }
    return output_arr;
}

Array.prototype.transpose = function () {
    let output_arr = new Array();    
    for (let i = 0; i < this.length; i++) {
        let tmp_arr = new Array();    
        for (let j = 0 ; j < this.length; j++) {
            tmp_arr[j] = this[j][i]; // tmp_arr = output[i] / tmp_arr[j] = output[i][j]
        }
        output_arr.push(tmp_arr);
    }
    return output_arr;
}