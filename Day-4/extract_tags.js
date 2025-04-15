// Q23. Extract all tags from posts

const data = [
    { id: 1, tags: ['react', 'js'] },
    { id: 2, tags: ['node'] },
    { id: 3, tags: ['js', 'html'] }
]

// const extract = (data) =>{
//     return data.reduce((acc,curr)=>{
//         return acc.concat(curr.tags)
//     },[])
// }
// console.log(extract(data))


function extractTags(array){
    let result = [];
    for( let i=0; i<array.length ; i++){
        let postTags = array
    }
    return result 
}
console.log(extractTags(data))