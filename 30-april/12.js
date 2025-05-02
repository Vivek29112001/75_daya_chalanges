const inventory = {
    apples: 10,
    bananas: 5,
    oranges: 8
  };
  
  const order = {
    apples: 3,
    bananas: 2
  };

  const checkInventiry = (inventory, order)=>{
    const updatedInventory = {...inventory};
    for(let item in order){
        updatedInventory[item] -= order[item];
    }
    return updatedInventory;
  }

  console.log(checkInventiry(inventory, order));