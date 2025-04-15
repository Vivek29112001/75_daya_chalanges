const users = [
    { name: 'A', age: 17 },
    { name: 'B', age: 21 },
    { name: 'C', age: 30 }
  ];

  const personage =(age)=> age.filter(age=> age.age>18)
console.log(personage(users))

function page(page){
    let age = [];
    for(let i=0;i<page.length; i++){
        if(page[i].age>18){
            age.push(page[i])
        }
    }
    return age
}
console.log(page(users))