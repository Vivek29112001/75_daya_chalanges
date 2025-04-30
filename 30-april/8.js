const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const orders = [
    { userId: 1, orderTotal: 50 },
    { userId: 1, orderTotal: 70 },
    { userId: 2, orderTotal: 30 }
  ];
  
const mergeUserOrders = (users, orders) => {
    return users.map(user=>{
        const total = orders
        .filter(order=> order.userId === user.id)
        .reduce((sum,o)=> sum + o.orderTotal,0)
        return {name:user.name, totalOrderAmount: total}
    })
}
  console.log(mergeUserOrders(users, orders));
  