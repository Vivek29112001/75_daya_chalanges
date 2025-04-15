const data = [
    {
        "Name": "John",
        "Age": "25",
        "Gender": "Male",
        "Location": "NYC"
    },
    {
        "Name": "'Jenny'",
        "Age": "'32'",
        "Gender": "'Female'",
        "Location": "'Canada'"
    }
];

//   output: [
//     ['name', 'age', 'gender', 'location'],
//     ['john', '25', 'male', 'nyc'],
//     ['jenny', '32', 'female', 'canada']
//   ]


const FormateData = str => str.toLowerCase().replace(/'/g, '');

const result = [
    Object.keys(data[0]).map(k => k.toLowerCase()),
    ...data.map(obj => Object.values(obj).map(val => FormateData(val)))
]
console.log(result)