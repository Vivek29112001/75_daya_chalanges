// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.
// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r


// Without using in Built function
const mergeString = (num1,num2)=>{
    let result ="";
    let i=0;
    let len1= num1.length;
    let len2= num2.length;
    let maxLen = len1>len2?len1: len2

    while(i<maxLen){
        if(i<len1){
            result += num1[i]
        }
        if(i<len2){
            result += num2[i]
        }
        i++
    }
    return result;
}
console.log(mergeString("apple","banana"))


// With in Built function

const mergeString2 =(word1,word2)=>{
    let result =[];
    let maxLen =Math.max(word1.length, word2.length)
    for(let i=0; i<maxLen ; i++){
        if(i<word1.length) result.push(word1.charAt(i))
        if(i<word2.length) result.push(word2.charAt(i))
        }
    return result.join("")
}

console.log(mergeString2("apple","banana"))
