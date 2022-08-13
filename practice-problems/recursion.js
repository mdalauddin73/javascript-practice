function sum(i) {
    if (i == 1) {
        return i;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

/*
5 + sum(4)
5 + 4 + sum(3)
5 + 4 + 3 + sum(2)
5 + 4 + 3 + 2 + sum(1)
5 + 4 + 3 + 2 + 1 = 15
*/


// factorial formula = n! = n * (n-1)!

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
const factorialResult = factorial(5);
console.log(factorialResult);

/*
loop 1: i * factorial(i - 1);
        5 * factorial (4);
loop 2: 5 * i * factorial(i - 1);
        5 * 4 * factorial(3);
loop 3: 5 * 4 * i * factorial(i - 1);
        5 * 4 * 3 * factorial (2)
loop 4: 5 * 4 * 3 * i * factorial(i - 1);
        5 * 4 * 3 * 2 * factorial (1);
loop 5: 5 * 4 * 3 * 2 * i * factorial(i - 1);
        5 * 4 * 3 * 2 * 1 (return 1);
result = 120
*/