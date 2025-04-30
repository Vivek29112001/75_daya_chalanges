const items = [
    { name: "apple", quantity: 3 },
    { name: "banana", quantity: 5 },
    { name: "orange", quantity: 2 }
];

const discounts = {
    apple: 10,
    banana: 5,
};

const fruitPrice = (items, discounts) => {
    const unitPrice = 2;

    return items.map(({ name, quantity }) => {
        const originalPrice = quantity * unitPrice;
        const discountPercentage = discounts[name] || 0;
        const discountPrice = +(originalPrice * (1 - discountPercentage / 100)).toFixed(2);

        return {
            name,
            quantity,
            originalPrice,
            discountPrice
        };
    });
};

console.log(fruitPrice(items, discounts));
