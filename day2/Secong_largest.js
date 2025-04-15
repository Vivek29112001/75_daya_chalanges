// Find the Second Largest Number in an Array

const secondLargest = (arr)=>{
    let first = -Infinity, second= -Infinity;
    for(let num of arr){
        if(first>num){
            second=first;
            first=second
        }else if(num>second && num !==first){
            second=num
        }
    }
    return second;
}
console.log(secondLargest([1,2,3,4,5])) // 4