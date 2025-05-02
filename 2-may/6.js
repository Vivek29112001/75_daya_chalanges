const eventCapturing = (element,eventName)=>{
    const path =[];
    let current = element;
    while(current){
        path.unshift(current)
        current = current.parentElement
    }
    path.forEach(el=>{
        const handler = el[`on${eventName}`]
        if(typeof handler === "function"){
            handler.call(el)
        }
    })
}