// Reverse an Array (Without using reverse() method)

function ReverceArray(arr){
    let result =[]
    for(let i=arr.length-1; i>=0; i--){
        result.push(arr[i])

    }
    return result
}
console.log(ReverceArray([1,2,3,4,5])) // [5,4,3,2,1]


// with reverse() method

function ReverceArray(arr){
    return arr.reverse()
}
console.log(ReverceArray([1,2,3,4,5])) // [5,4,3,2,1]