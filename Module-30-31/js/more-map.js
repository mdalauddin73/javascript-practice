// more-map.js
const numbers = [12, 56, 87, 44]

const half = numbers.map(x => x / 2);
const thirds = numbers.map(n => n / 3);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom solaiman']
const firstLetters = friends.map(friend => friend[1])
console.log(firstLetters);

const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 23000 }
];

// const items = products.map(product => console.log(product.name));
const items = products.map(product => product.name);
console.log(items);





