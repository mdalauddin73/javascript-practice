// map.js
// ==========================================
const numbers = [20, 30, 40, 59];
const output = [];
for (let number of numbers) {
    const double = number * 2;
    output.push(double);
}
// console.log(output);

// make above code as function
function getDoubleIt(numbers) {
    const output = [];
    for (let number of numbers) {
        // const double = number * 2;
        const double = doubleIt(number);
        output.push(double);
    }
    return output;
}

function doubleIt2(number) {
    return number * 2;
}

// make the above function as arrow function
const doubleIt = num => num * 2;

const doubleNumbers = getDoubleIt(numbers);
// console.log(doubleNumbers);

/* 
Purpose:
1. get the array
2. for every elements of the array do something
3. store the result in an array
4. return the result array
*/

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDoubleByX = numbers.map(x => x * 2);
const makeDoubleDirectArray = [20, 30, 40, 59].map(x => x * 2);
console.log(makeDoubleDirectArray);

