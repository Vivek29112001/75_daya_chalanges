// Multiply all values in an array

const multiply = (arr) => arr.reduce((arr,num)=> arr*num,1);
console.log(multiply([1, 2, 3, 4, 5])); //

function arrayM (num){
    let result =1;
    for(let i=0; i<num.length; i++){
        result*=num[i];
    }
    return result;
}
console.log(arrayM([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]