// reduce.js
//====================================================

const numbers = [1, 2, 3, 4, 5];

// .reduce (accumulatorFunction, initial value)
// accunulatorFunction use two parameters
// const total = numbers.reduce((previous, current) => previous + current, 0)
const total = numbers.reduce((previous, current) => {
    console.log(previous, current);
    return previous + current
}, 0);
console.log(total);

// summary.js
// =========================================================
/*
1. Optional chaining
2. map, filter, find
3. (optional) forEach , reduce (advanced)
4. Class
5  (optional) inheritance, super
6. (must) prototopical inheritance
*/c