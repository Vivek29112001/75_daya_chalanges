// Question
// Given an array of objects, normalize the keys to lowercase and remove extra quotes from string values.


const data = [
    { "Name": "John", "Age": "25", "Gender": "Male", "Location": "NYC" },
    { "Name": "'Jenny'", "Age": "'32'", "Gender": "'Female'", "Location": "'Canada'" }
  ];

const result =[
    Object.keys(data[0]).map(key => key.toLowerCase()),
    ...data.map(obj=>Object.entries(obj).map(([key,value])=>
    value.toLowerCase().replace(/^'|'$/g,'')
))
]
console.log(result)