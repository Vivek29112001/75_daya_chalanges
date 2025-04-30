// Create a small Node.js API server that returns a list of products.

const http  = require('http')

const products = [
    {id:1, name:"product1 ", price:100},
    {id:2, name:"product2 ", price:200},
    {id:3, name:"product3 ", price:300},
    {id:4, name:"product4 ", price:400},
    {id:5, name:"product5 ", price:500}
]
const server = http.createServer((req,res)=>{
    if(req.url ==='/products'){
        res.writeHead(200,{'Content-type':'application/json'})
        res.end(JSON.stringify(products))
    }else{
        res.writeHead(404,{'Content-type':'text/html'})
        res.end("<h1>404 Not Found</h1>")
    }
})
server.listen(5000,()=>{
    console.log("Server is running on port 5000")

})