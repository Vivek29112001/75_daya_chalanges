// Find the Frequency of Each Element in an Array
// 🧠 Goal: Understand object mapping and counting occurrences.

// [1,2,2,3,1,4,1] => 1:3, 2:2, 3:1, 4:1

function elementFrequency (arr){
    let freq = {}
    for(let item of arr){
        freq[item] = (freq[item]||0)+1
    }
    return freq
}
console.log(elementFrequency([1, 2, 1,1,1,2, 3, 1, 4]));


// inbuild function

function frequency(arr){
    return arr.reduce((acc,item)=>{
        acc[item]= (acc[item] ||0)+1;
        return acc;
    }, {});
}
console.log(frequency([1, 2, 1,1,1,2, 3, 1, 4]));
