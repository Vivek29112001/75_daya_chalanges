const arr1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  const arr2 = [
    { id: 2, name: "Bob" },
    { id: 4, name: "David" },
    { id: 3, name: "Charlie" }
  ];


  const arrayDiff =(arr1,arr2)=>{
    const idSet = new Set(arr2.map(obj=> obj.id))
    return arr1.filter(obj=> idSet.has(obj.id))
  }
  console.log(arrayDiff(arr1,arr2))

//   🔑 .has() Method
// The .has(value) method checks whether a value exists in the Set.
// 🔑 Set in JavaScript
// A Set is a built-in object that stores unique values. Unlike arrays, 
// a Set guarantees no duplicates and provides very fast lookups (like a hash table).