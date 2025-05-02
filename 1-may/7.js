const transactions = [
    { userId: 'u1', type: 'deposit', amount: 100 },
    { userId: 'u2', type: 'deposit', amount: 200 },
    { userId: 'u1', type: 'withdrawal', amount: 50 },
    { userId: 'u2', type: 'withdrawal', amount: 80 },
    { userId: 'u1', type: 'deposit', amount: 30 }
  ];

  
  const bank = (transactions) => {
    return transactions.reduce((acc,{userId,type,amount})=>{
        if(!acc[userId]) {
            acc[userId] = 0;
        }
        if(type ==="deposit"){
            acc[userId] +=amount
        }else if(type==="withdrawal"){
            acc[userId] -=amount
        } 
        return acc;
    },{})
  }

  console.log(bank(transactions))