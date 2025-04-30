// const obj = require("./sum.js")
// const name = "Node.Js"
// let a=5;
// let b=20;
// let c= a+b;
// console.log(name)
// console.log(c)
// obj.calculationsum(a,b)
// console.log(obj.x)
// console.log(global) // global window object in node.js
// console.log(this) // {}
// console.log(globalThis) // global this will give global object in any environment

// const { calculationsum } = require("./sum");

// const {x,calculatesum} = require("./sum.js")
// let name = "Node.Js"
// let a=5;
// let b=20;
// calculationsum(a,b)
// console.log(x)

// const {x, calculation} = require("./calculate/sum")
// const{multuiply}= require("./calculate/multiply")
// let a =10;
// let b=20;
// console.log(x)
// console.log(z)
// console.log(calculation(a,b))
// console.log(multuiply(a,b))

// const { calculation, multuiply} = require("./calculate/index")
// let a=10, b=100;
// calculation(a,b)
// multuiply(a,b)

// const data = require("./data.json")
// console.log(Object.keys(data))
// console.log(Object.values(data))

const data = require("./data.json");
let keys = Object.keys(data[0]); 

const values = data.map(item => keys.map(key => item[key]));
const output = [keys, ...values];

console.log(output);

