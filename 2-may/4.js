const memorization = (fn)=>{
    const cache ={};
    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]) return cache[key]
        return cache[key] = fn.apply(this,args)
    }
}
console.log(memorization((a,b)=> a+b)(1,2)) // 3
console.log(memorization((a,b)=> a+b)(11,21)) // 3