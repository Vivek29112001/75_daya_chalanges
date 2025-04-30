

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