const SumEqual = (arr,target)=>{
let pair = []
for(let i=0; i<arr.length;i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]  + arr[j] === target){
            pair.push([arr[i], arr[j]])
        }
    }
}
return pair
}
console.log(SumEqual([1,2,3,4,5], 51)) // [1,4],[2,3]