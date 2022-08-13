const numbers = [45, 65, 23, 98, 19];

for (const number of numbers) {
    console.log(number);
}


const products = [
    { id: 1, name: 'xiami phone one night', price: 19000 },
    { id: 2, name: 'iphone', price: 19000 },
    { id: 3, name: 'mac book air', price: 19000 },
    { id: 4, name: 'lenovo yoga laptop 2025', price: 19000 },
    { id: 5, name: 'dell inspire laptop', price: 19000 },
    { id: 6, name: 'samsun phone note 7', price: 19000 },
    { id: 7, name: 'Sumasung A23 Galaxy', price: 19000 },
    { id: 8, name: 'nokia old age phone gone', price: 19000 },
    { id: 9, name: 'phone one', price: 19000 },
]

function matchProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}
const result = matchProducts(products, 'galaxy');
console.log(result);