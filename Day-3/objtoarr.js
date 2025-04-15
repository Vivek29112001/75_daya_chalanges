// Q12. Convert object values to array
// 🔹 Problem: Convert an object’s values to an array.

// Input: {a: 1, b: 2, c: 3}
// Output: [1, 2, 3]

const objArray = (arr) =>{
    let result =[]
    for(let num in arr){
        result.push(arr[num])
    }
    return result
}
console.log(objArray({a: 1, b: 2, c: 3})); // [1, 2, 3]

const objArray2 =(array) => Object.values(array);
console.log(objArray2({a: 1, b: 2, c: 3})); // [1, 2, 3]