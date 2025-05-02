let arr=[1,[2,3],4,[5,6,[7,8]]]

const flatenArray =(arr)=>{
    return arr.reduce((acc,curr)=>
        acc.concat(Array.isArray(curr)?flatenArray(curr):curr),[])
}
console.log(flatenArray(arr))