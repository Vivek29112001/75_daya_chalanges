
const objData =[
    { id: 1, name: 'A' },
    { id: 2, parentId: 1, name: 'B' },
    { id: 3, parentId: 1, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, parentId: 4, name: 'E' },
  ];

const childArray = (data)=>{
   const nodeMap={}
   data.forEach(item=>{
    nodeMap[item.id]={...item, children:[]}
   })
   const nestedResult =[]
   data.forEach(item=>{
    const currentNode = nodeMap[item.id]
    if(item.parentId && nodeMap[item.parentId]){
        const parentNode = nodeMap[item.parentId];
        parentNode.children.push(currentNode)
    }else{
        nestedResult[item.id]=currentNode
    }
   })
   return nestedResult
}
const nestedData = childArray(objData)
console.log("\nNested Structure:")
console.log(JSON.stringify(nestedData, null, 2))