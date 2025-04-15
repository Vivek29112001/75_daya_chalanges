// Check if Two Arrays are Equal
const Arraytwo = (num1,num2)=>{
    if(num1.length!== num2.length) return false
    for(let i=0; i<num1.length; i++){
        if(num1[i]!== num2[i]) return false
    }
    return true
}
console.log(Arraytwo([1,2,3,4],[1,4,2,3])) 
console.log(Arraytwo([1,2,3,4],[1,2,3,4])) 
