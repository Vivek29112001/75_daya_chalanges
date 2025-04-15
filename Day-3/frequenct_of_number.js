// Count frequency of each number
// 🔹 Problem: Given an array of numbers, return an object with the count of each unique number.

const number =(arr)=> arr.reduce((acc,curr)=> {
    acc[curr] = acc[curr]+1 ||1;
    return acc;
},{})
console.log(number([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]))


function frequency(num){
    let result = {};
    for(let i=0; i<num.length; i++){
        let arr =num[i];
        if(result[arr]){
            result[arr]++;
        }else{
            result[arr] = 1;
        }
    }
    return result
}
console.log(frequency([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6]))