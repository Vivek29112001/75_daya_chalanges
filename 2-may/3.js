const throttle = (fn,limit)=>{
    let isThrotle =false;
    return function(...args){
        if(!isThrotle){
            fn.apply(this.args)
            isThrotle = true;
            setTimeout(()=>{
                isThrotle = false,limit
            })
        }
    }
}