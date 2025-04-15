// Q8. Square and sum
// 🔹 Problem: Given an array of numbers, return the sum of the squares of each number.

// Input: [1, 2, 3]
// Output: 14 (1² + 2² + 3²)

const square_sum =(arr)=>{
    return arr.map(squ=> squ**2).reduce((access,num)=> access+num,0)

}
console.log(square_sum([1, 2, 3,5]))

function xyz(abc){
    let sum=0
    for(let i=0; i<abc.length; i++){
        sum +=abc[i] * abc[i]
    }
    return sum;
}
console.log(xyz([1, 2, 3,5]))