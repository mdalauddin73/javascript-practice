const shoppingCart = [
    { name: 'shoe', price: 1200, qty: 2 },
    { name: 'shirt', price: 2200, qty: 5 },
    { name: 'pant', price: 3700, qty: 4 },
    { name: 'belt', price: 600, qty: 3 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const productTotal = product.price * product.qty;
        // sum = sum + product.price; (used shorthand)
        sum += productTotal;
        console.log(product);
    }
    return sum;
}
const expense = totalCost(shoppingCart);
console.log(expense);
