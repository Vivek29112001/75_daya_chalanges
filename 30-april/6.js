const data = [
    { name: "apple", category: "fruit" },
    { name: "banana", category: "fruit" },
    { name: "carrot", category: "vegetable" },
]

const fruitcategory = (cat) => {
    return cat.reduce((acc, item) => {
        let { category } = item;
        if (!acc[category]) acc[category] = [];
        acc[category].push(item.name) // Push the entire object
        return acc;
    }, {})
}

console.log(fruitcategory(data))