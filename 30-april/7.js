let data =[
    {name:"akshita", grade:[90, 98,78]},
    {name:"anshika", grade:[85, 88, 92]},
    {name:"monika", grade:[95, 90, 89]},
    {name:"priyanka", grade:[88, 92, 95]}
]
const avgGrade = (avg)=>{
    return avg.map(({name,grade})=>{
        const avgGrades = grade.reduce((sum,g)=> sum + g,0)/grade.length;
        return {name, avgGrades}
    })
}
console.log(avgGrade(data))