// Q14. Group names by starting letter
// 🔹 Problem: Group names into an object based on their first letter.

// Input: ['Alice', 'Adam', 'Bob', 'Charlie']
// Output: { A: ['Alice', 'Adam'], B: ['Bob'], C: ['Charlie'] }

const groupFilter = (names) =>{
    return names.reduce((acc,name)=>{
        const key = name[0];
        acc[key] = acc[key] || [];
        acc[key].push(name);
        return acc;
    },{})
}
console.log(groupFilter(['Alice', 'Adam', 'Bob', 'Charlie']))

function grouping (arr){
    let result ={};
    for(let i=0; i<arr.length; i++){
        let name = arr[i];
        let key = name[0]
        if(!result[key]){
            result[key] =[];
        }
        result[key].push(name)
    }
    return result;
}
    console.log(grouping({A: ['Alice', 'Adam'], B: ['Bob'], C: ['Charlie'] }))