// swap in wrong way
let first = 10;
let second = 20;
console.log(first, second);
// first = second;
// second = first;
// console.log(first, second);

// // approach - 1 (correct)
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approach-2 (correct - Destruturing)
[first, second] = [second, first];
console.log(first, second);
