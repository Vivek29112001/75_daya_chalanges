// Q11. Flatten a 2D array
// 🔹 Problem: Convert a 2D array into a 1D array.

// Input: [[1, 2], [3, 4], [5]]
// Output: [1, 2, 3, 4, 5]

const flatter = (arr)=> arr.reduce((acc,val)=> acc.concat(val),[]);
console.log(flatter([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

function flatter2(arr){
    let result =[];
    for(let i=0; i<arr.length; i++){
        let inner = arr[i];
        for(let j=0; j<inner.length; j++){
            result.push(inner[j])
        }
    }
    return result;
}
console.log(flatter2([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]

//  chunking the function

function chunking (array,size){
    let result =[];
    for(let i=0; i<array.length; i++){
        result.push(array.slice(i,i+size))
    }
    return result
}
console.log(chunking([1,2,3,4,5],2)); // [[1,2],[3,4],[5]]


//Dynamic reverse the flatter

const reverseFlatter = (flatArr, originalShape) => {
    let result = [];
    let index = 0;
    for (let group of originalShape) {
      result.push(flatArr.slice(index, index + group.length));
      index += group.length;
    }
    return result;
  };
  
  console.log(reverseFlatter([1, 2, 3, 4, 5], [[1, 2], [3, 4], [5]]));
  // Output: [[1, 2], [3, 4], [5]]
   // [[1, 2], [3, 4], [5]]