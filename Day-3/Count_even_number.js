// Q13. Count number of even numbers
// 🔹 Problem: Count how many even numbers exist in an array.

// Input: [1, 2, 3, 4, 6]
// Output: 3

const CountEvenNumber = (arr) =>{
    let count =0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] %2 !==0) count++
        
    }
    return count;
}
console.log(CountEvenNumber([1, 2, 3, 4,5, 6])) // 3

const counterf = (arrays) => arrays.filter(arr=>arr%2==0).length
console.log(counterf([1, 2, 3, 4,5, 6])) // 3