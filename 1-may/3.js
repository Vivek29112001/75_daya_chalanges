let data =[
    {name:"Sakshi",role:"Developer"},
    {name:"Harshita",role:"Designer"},
    {name:"anshika",role:"Manager"},
    {name:"Anjali",role:"Designer"},
    {name:"Ankita",role:"Developer"},
    {name:"Ankush",role:"Manager"},
]
const roles = (data)=>{
    const result = {}
    for(const person of data){
        const {name, role} = person;
        if(!result[role]){
            result[role] = []
        }
        result[role].push(name)
    }
    return result
}
               
console.log(roles(data)) 


const group = (data)=>{
    return data.reduce((acc, {name,role})=>{
        acc[role] = acc[role] || [];
        acc[role].push(name);
        return acc;
    },{})
}

console.log(group(data))