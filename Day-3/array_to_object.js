// Q10. Convert array to object (index as key)
// 🔹 Problem: Convert an array to an object where key = index and value = item.

// Input: ['a', 'b', 'c']
// Output: { 0: 'a', 1: 'b', 2: 'c' }

const arrayToObject = (arr) => {
    const result = {};
    for(let num in arr){
        result[num] = arr[num]
    }
    return result
}
console.log(arrayToObject(['a', 'b', 'c'])); // { 0: 'a', 1: 'b', 2: 'c' }


const arrayToObject1 = (arr) => 
    arr.reduce((obj,val,index)=>{
        obj[index]= val;
        return obj
    },{})
    console.log(arrayToObject1(['a', 'b', 'c'])); // { 0: 'a', 1: 'b', 2: 'c' }