// Find longest word
// 🔹 Problem: Find the longest word in an array of strings.

const longestword = (num)=> num.reduce((acc,word)=> acc.length > word.length ? acc : word )
 

console.log(longestword(['code', 'developer', 'javascript', 'AI']))

function longest(arr){
    let longest = "";
    for(let i=0; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest =arr[i]
        }
    }
    return longest
}
console.log(longest(['code', 'developer', 'javascript', 'AI']))