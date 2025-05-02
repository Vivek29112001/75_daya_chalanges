const debouncer =(fn ,delay)=>{
    let timeId;
    return function(...args){
        clearTimeout(timeId);
        timeId = setTimeOut(()=> fn.apply(this,args),delay);
    }
}