const { permission } = require("process");

const array1 = [
    { id: 1, permissions: ['read', 'write'] },
    { id: 2, permissions: ['delete'] },
    { id: 3, permissions: ['execute'] }
  ];
  
  const array2 = [
    { id: 10, permissions: ['write'] },
    { id: 11, permissions: ['execute', 'read'] }
  ];
  
const functionfz =(array1,array2)=>{
    const permissionSet = new Set(array2.flatMap(obj => obj.permissions));
    return array1.filter(obj=>
        obj.permissions.some(permission => permissionSet.has(permission))

    )
}
console.log(functionfz(array1,array2))