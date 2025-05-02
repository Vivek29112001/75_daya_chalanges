const products = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Phone", category: "Electronics", price: 800 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Jeans", category: "Clothing", price: 60 },
    { name: "Blender", category: "Home Appliances", price: 100 }
  ];

  const mostExpensiveProduct =(products)=>{
    return products.reduce((acc,curr)=>{
        const {category,price} = curr;
        if(!acc[category] || price > acc[category].price){
            acc[category]= products
        }
        return acc;
    },{})
  }

  console.log(mostExpensiveProduct(products))