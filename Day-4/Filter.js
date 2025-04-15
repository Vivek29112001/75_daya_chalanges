// Input: { a: 1, b: 'hello', c: true, d: 42 }
// Output: ['a', 'd']

const filterKeys =(arr)=>{
    return  Object.keys(arr).filter(key => typeof arr[key] ==='number');
}
console.log(filterKeys({ a: 1, b: 'hello', c: true, d: 42 }));


const filterKeys2 = (obj) => {
    return Object.keys(obj).reduce((acc,key)=> {
        if( typeof obj[key] === 'number'){
            acc.push(key)
        }
        return acc
    }, [])
}
console.log(filterKeys2({ a: 1, b: 'hello', c: true, d: 42 }));


const Filter = (array)=>{
    let result =[];
    for(let i=0; i<array.length; i++){
        if(typeof array[i] ==='number'){
            result.push(array[i])
        }
        
    }
    return result
}
console.log(Filter([1, 'hello', true, 42]))


const Filter2 = (arra)=>{
    let response = []
    for(let key in arra){
        if(typeof arra[key] ==='number'){
            response.push(key)
        }
    }
    return response
}
console.log(Filter2({a:1, b:"hello", c:true, d:42}))