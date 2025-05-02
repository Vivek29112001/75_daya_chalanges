let tasks = [
    { id: 1, description: "Fix bug", priority: "high", completed: false },
    { id: 2, description: "Write docs", priority: "medium", completed: true },
    { id: 3, description: "Code review", priority: "high", completed: false },
    { id: 4, description: "Update dependencies", priority: "low", completed: false }
  ];
const tasklist = (tasks)=>{
    return tasks.reduce((acc,{priority,description ,completed})=>{
        if(!completed){
            if(!acc[priority]){
                acc[priority] = []
            }
            acc[priority].push(description)
        }
        return acc
    },{})
}

console.log(tasklist(tasks))