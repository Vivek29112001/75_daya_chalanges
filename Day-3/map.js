// // Double array
// const num = (arr)=>{
//     return arr.map(key=> key*22)
// }
// console.log(num([1,2,3]))


// const num2 = (arr2)=>{
//     let result =[];
//     for(let i=0; i<arr2.length; i++){
//         result.push(arr2[i]*2)
//     }
//     return result
// }
// console.log(num2([1,2,3]))

//Sum of all element in array

// const abc = (arr)=>arr.reduce((acc,curr)=> acc+curr,0)

// console.log(abc([1,2,3]))

// function array(arr){
//     let total =0;
//     for(let i=0; i<arr.length;i++){
//         total +=arr[i]
//     }
//     return total
// }
// console.log(array([1,2,3,4]))

// filter even number

// const evenNumber = (arr)=> arr.filter(num=> num%2===0)
// console.log(evenNumber([1,2,3,4,5,6]))


// function even(arrr) {
//     let result = [];
//     for (let i = 0; i < arrr.length; i++) {
//         if (arrr[i] % 2 === 0) result.push(arrr[i])
//         }
//         return result;
// }
// console.log(even([1, 2, 3, 4, 5, 6]))


// const odd = (arr)=>arr.filter(num=>num%2!==0)
// console.log(odd([1,2,3,4,5,6]))

const people = [
    { name: 'Alice' },
    { name: 'Bob' },
    { name: 'Charlie' }
  ];
// function getName(arr){
//     return arr.map(obj=>obj.name)
// }  
// console.log(getName(people))

// function name(arr){
//     let result = [];
//     for(let name of arr){
//         result.push(name.name)
//     }
//     return result
// }
// console.log(name(people))

