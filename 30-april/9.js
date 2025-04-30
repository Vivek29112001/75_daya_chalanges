let data =[
    "name=Alice,age=30,city=New York",
    "name=Bob,age=25,city=Los Angeles",
    "name=Charlie,age=35,city=Chicago",
    "name=David,age=28,city=Houston",
]

const jsonformated = (data)=>{
    return data.map(str=>{
        return str.split(",").reduce((obj,par)=>{
            const[key,value] = par.split("=")
            obj[key.trim()]= value.trim();
            return obj;
        }, {})
    })
}

console.log(jsonformated(data))