// Q19. Count frequency of values
// 🔹 Problem: Count how many times each value occurs in an array.
// Input: ['apple', 'banana', 'apple', 'cherry']
// Output: { apple: 2, banana: 1, cherry: 1 }

const CountFrequency = (arr) =>{
    return arr.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] ||0)+1;
        return acc;
    },{})
}
console.log(CountFrequency(['apple', 'banana', 'apple', 'cherry'])) // { apple: 2, banana: 1, cherry: 1 }

function frequency (num){
    let freq={}
    for(let i=0; i<num.length; i++){
        let val = num[i];
        if(freq[val]){
            freq[val]++
        }else{
            freq[val]=1
        }
    }
    return freq
}
console.log(frequency([1,2,3,4,5,1,2,3,4,5])) // { '1': 2, '2': 2, '3': 2, '4': 2, '5': 2 }