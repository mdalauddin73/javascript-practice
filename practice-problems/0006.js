let fruits = ['Apple', 'Banana', 'Orange'];

const arrayIndex = fruits.indexOf('Banana');
fruits[1] = 'Mango';
console.log(arrayIndex);
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);