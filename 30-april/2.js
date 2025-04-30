// Question 2:
// You have an object where keys are product names and values are their prices. 
// You also have an array of product names that are on sale.
// Write a function that returns a new object containing only the products that are on sale,
//  with their original prices.

let data =[
    {
        name:"apple",
        price:"20",
        product: "sale"

    },
    {
        name:"banana",
        price:"30",
        product: "No-sale"
    },
    {
        name:"orange",
        price:"40",
        product: "No-sale"
    },
    {
        name:"grape",
        price:"50",
        product: "sale"
    }
]

const profuctiSale = (sale) =>{
    return sale.reduce((arr,curr)=>{
        if(curr.product !=="sale"){
            arr.push(curr.name)
        }
        return arr
    },[])
}
console.log(profuctiSale(data))

const profuctiSale2 = (sale2) =>{
    return sale2.filter(product => product.product !=="sale").map(name => name.name)
}
console.log(profuctiSale2(data))