// filter.js
// ===================================================
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
];

const expensive = products.filter(p => p.price > 40000);
console.log(expensive);



const numbers = [12, 56, 87, 44, 4, 3, 20];
const even = numbers.filter(n => n % 2 === 0);
console.log(even);

// find.js
// =====================================================
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
];

const expensive = products.find(p => p.price > 40000);
console.log(expensive);


const numbers = [5, 12, 56, 87, 44, 4, 3, 20];
const fives = numbers.find(n => n % 5 === 0);
console.log(fives);

// for-each.js
// ======================================================================
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom solaiman']

// friends.forEach(friend => console.log(friend));


const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
];

products.forEach(product => console.log(product));