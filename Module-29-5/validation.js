
// validation.js
//==================================================
const number = 25;
// string, number, boolean
if (typeof number === 'number') {
    console.log('value is number')
} else {
    console.log('value is not a number')
}

const numbers = [3, 12, 78, 90]
const student = { name: 'alauddin', job: 'it' }

console.log(Array.isArray(numbers));
console.log(typeof student);

