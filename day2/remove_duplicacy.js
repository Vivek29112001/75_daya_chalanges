// Remove Duplicates from an Array

const removeDuplicacy = (arr) =>{
    return [...new Set(arr)];
}
console.log(removeDuplicacy([1,2,3,4,5,1,2,3])) 


const removeDuplicacy2 = (arr2)=>{
    let result = [];
    for(let i=0; i<length.arr2;i++){
        if(!result.includes(arr2[i])){
            result.push(arr2[i])
        }
    }
    return result
}
console.log(removeDuplicacy2([1,2,3,4,5,1,2,3])) // [1,2,3,4,5]