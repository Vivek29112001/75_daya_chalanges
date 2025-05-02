const eventBubble =(element,eventName)=>{
    let current = element;
    while(current){
        const handler = current[`on${eventName}`];
        if(typeof handler === "function"){
            handler.call(current)
        }
    }
}