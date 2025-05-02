const network = {
    A: ['B',"C"],
    B: ["C"],
    C: ["A"],
    D: ["C","A"],
}

const Graph =(graph , targetUserId) => {
    const followers =[];
    for(const user in graph){
        if(graph[user].includes(targetUserId)){
            followers.push(user);
        }
    }
    return followers;
}

console.log(Graph(network,"C")) // ["B","C"]