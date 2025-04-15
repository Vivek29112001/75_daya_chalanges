// Q16. Remove duplicate values
// 🔹 Problem: Remove duplicate numbers from an array.

// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

const duplicate = (array) => {
    return array.filter((item,index)=> array.indexOf(item)=== index)
}
console.log(duplicate([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5]

function dupl(arr){
    let result = []
    for(let i=0; i<arr.length; i++){
        let already = false;
        for(let j=0; j<result.length; j++){
            if(arr[i]=== result[j]){
                already = true;
                break
            }
        }
        if(!already) result.push(arr[i])
    }
return result
}
console.log(dupl([1, 3,3, 4, 4, 5])) // [1, 2, 3, 4, 5]