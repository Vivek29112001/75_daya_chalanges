// Q20. Filter object keys by value type
// 🔹 Problem: Given an object, return keys where values are numbers.

// Input: { a: 1, b: 'hello', c: true, d: 42 }
// Output: ['a', 'd']

function filter(arr){
    let result = [];
    for(let key in arr){
        if(typeof arr[key] === 'number' ){
            result.push(key)
        }
    }
    return result;
}
console.log(filter({ a: 1, b: 'hello', c: true, d: 42 })) // ['a', 'd']

const filters = (obj) =>{
    return Object.keys(obj).filter(key=> typeof obj[key] === 'number')
}
console.log(filters({ a: 1, b: 'hello', c: true, d: 42 })) // ['a', 'd']