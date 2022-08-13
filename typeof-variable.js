// Variables

const name = 'Alauddin';
const age = 48;
const isMarried = true;
function add(num1, num2) { };
const student = { name: 'Alauddin', age: 48, subject: 'science' };
const myArray = [21, 20, 40, 74, 30];

console.log(typeof name);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof add);
console.log(typeof student);
console.log(typeof myArray); // did not find the array type

// how to find Array type
console.log(Array.isArray(myArray));

// find out the value existent in the array
// approach - 1
console.log(myArray.includes(20));
// approach -2 (old)
if (myArray.indexOf(201) !== -1) {
    console.log('Element exist');
} else {
    console.log('Canno find the element!');
}

// add two arrays 
const newArray = [200, 300, 400];
const allArray = newArray.concat(myArray);
console.log(allArray);

