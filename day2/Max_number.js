// question:Find the Maximum Number in an Array
//  Goal: Understand array traversal and Math.max

const maxNumber = (max)=>{
    return Math.max(...max)
}

console.log(maxNumber([1,2,3,4,5])) // 5


// Alternative Approach

const maxNumber2 = (arr)=>{
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(maxNumber2([1,2,3,4,5,6])) // 5