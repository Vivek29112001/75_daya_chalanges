const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];
  
  const orders = [
    { productId: 1, quantity: 2 },
    { productId: 2, quantity: 5 },
    { productId: 3, quantity: 3 },
    { productId: 1, quantity: 1 }
  ];

  
  const calculation = (products,orders)=>{
    const revenueMap = {};
    for(const {productId, quantity } of orders){
        const product = products.find(p=> p.id === productId);
        if(product){
            if(!revenueMap[productId.name]){
                revenueMap[productId.name]=0;
            }
            revenueMap[product.name] += product.price* quantity;
        }
    }
    return Object.entries(revenueMap).map(([name,totalRevenue])=>({
        name,
        totalRevenue
    }))
  }

  console.log(calculation(products,orders))