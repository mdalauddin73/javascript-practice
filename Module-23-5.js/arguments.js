// arguments is array like object
// don't work like array
// cannot work push or pop

function sum(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
}
sum(23, 20, 30, 50, 49);