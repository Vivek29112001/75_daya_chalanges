// Q21. Capitalize first letter of each word
// 🔹 Problem: Capitalize the first letter of every word in a string array.

// Input: ['hello', 'world']
// Output: ['Hello', 'World']

//with inbuid function
const capitalized = (array) => {
    return array.map(word => word.charAt(0).toUpperCase() + word.slice(1))
}
console.log(capitalized(['hello', 'world']))

//with reduce 
const reduceCapi = (arr) => {
    return arr.reduce((acc, curr) => {
        acc.push(curr.charAt(0).toUpperCase() + curr.slice(1))
        return acc
    },[])
}
console.log(reduceCapi(['hello', 'world']))


// without inbuilt function
function apple(mango){
    let result = [];
    for(let i=0; i<mango.length; i++){
        result.push(mango[i].charAt(0).toUpperCase() + mango[i].slice(1))
    }
    return result
}
console.log(apple(['hello', 'world']))