let zeroArray = (arr) =>{
    let zeros = arr.filter(num => num!==0)
    let result = arr.length - zeros.length
    // return [...result, ...Array(zeros).fill(0)]
    return [...zeros, ...Array(result).fill(0)]
}
console.log(zeroArray([1,2,3,0,0,4])) // [1,2,3,4,0,0]