
let data =[{
    "name": "John",
    "age": 30,
},
{
    "name": "Jane",
    "age": 25,
},
{
    "name": "Doe",
    "age": 22,
}, {  
    "name": "Smith",
    "age": 38,
}]


const agePerson = (person)=>{
    return person.reduce((acc,curr)=>{
        if(curr.age>30){
            acc.push(curr.name)
        }
        return acc
    },[])
}
console.log(agePerson(data))


const agePerson2 = (person2)=>{
    return person2.filter(age=> age.age>30).map(name=> name.name)
}
console.log(agePerson2(data))