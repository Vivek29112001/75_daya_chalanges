// Capitalize first letter of every word
// 🔹 Problem: Given an array of lowercase words, return an array with each word capitalized (first letter uppercase).


// Input: ['apple', 'banana', 'cherry']
// Output: ['Apple', 'Banana', 'Cherry']

const capital =(arr)=>arr.map(word=>word[0].toUpperCase()+ word.slice(1))
console.log(capital(['apple', 'banana', 'cherry']))

function cap(arr){
    let result =[];
    for(let i=0;i<arr.length;i++){
        result.push(arr[i][0].toUpperCase()+ arr[i].slice(1))
    }
    return result
}
console.log(cap(['apple', 'banana', 'cherry']))