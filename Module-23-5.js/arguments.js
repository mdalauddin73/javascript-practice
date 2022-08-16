// Module-23-5
// arguments.js
// =====================================

// arguments is array like object
// don't work like array
// cannot work push or pop

function sum(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
}
sum(23, 20, 30, 50, 49);

// Module-23-5
// loosly-equal.js
// =====================================

// Result "false"  why?
function compare(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
const result2 = compare(15, "15");
console.log(result2);

// loosly equal, result true Why?
function compare(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
const result3 = compare(15, "15");
console.log(result3);