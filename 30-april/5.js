const logs = [
    "2023-01-01 101 login",
    "2023-01-01 102 logout",
    "2023-01-01 101 view",
    "2023-01-02 103 login",
    "2023-01-02 101 logout"
  ];

const useractivity =(user)=>{
    return user.reduce((acc,loguser)=>{
        const[,userId,action]= loguser.split(" ");
        if(!acc[userId]){
            acc[userId] = [];
        }
        acc[userId].push(action);
        return acc
    },{})
}
console.log(useractivity(logs))