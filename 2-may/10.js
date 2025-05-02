const original = {name: 'John', age: 30};
const copy = {...original};
copy.name= "janvi"
copy.age= 20
console.log(copy.name)
console.log(copy.age)
console.log(original.name)
console.log(original.age)
console.log(original)
console.log(copy)