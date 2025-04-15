// Q9. Remove falsy values
// 🔹 Problem: Remove all falsy values (false, 0, "", null, undefined, NaN) from an array.

// Input: [0, "hello", false, 42, "", null]
// Output: ["hello", 42]

const falsyvalue = (arr) => arr.filter(Boolean);
console.log(falsyvalue([0, "hello", false, 42, "", null])); // ["hello", 42]


function faulsyvalue1 (num){
    let result =[];
    for(let i=0; i<num.length; i++){
        if(num[i]){
            result.push(num[i])
        }
    }
    return result
}
console.log(faulsyvalue1([0, "hello", false, 42, "", null])); // ["hello", 42]