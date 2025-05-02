Array.prototype.myReduce = (callback, initialvalue)=>{
    let acc= initialvalue;
    let startIndex=0;
    if(acc===undefined){
        acc=this[0];
        startIndex=1;
    }
    for(let i=startIndex; i<this.lenghh; i++){
        acc = callback(acc,this[i], i,this)
    }
    return acc;
}