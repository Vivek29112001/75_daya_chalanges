// Question 2: Group Words by Length
// Given an array of strings, group them based on the length of the words.

const words = ["a", "to", "tea", "ted", "ten", "i", "in"];

const GroupWord = Object.values(words.reduce((acc,word)=>{
    const len = word.length;
    if(!acc[len]) acc[len] = [];
    acc[len].push(word);
    return acc;
}, {}))
console.log(GroupWord);