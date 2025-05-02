const lists = [
    "apple,banana,orange",
    "banana,apple",
    "grape,orange,apple"
  ];
  

  const numberofLIsts =(lists)=>{
    let count ={};
    for(let list of lists){
        const items = list.split(",").map(item=>item.trim())
        for(let item of items){
            count[item] = (count[item] ||0)+1
        }
    }
    return count
  }

  console.log(numberofLIsts(lists))