function getFactorial(number) {
    let num = 1;
    let result = 1;
    while (num <= number) {
        result *= num;
        console.log(num, result);
        num++;
    }
    return result;
}

// Get factorial in reverse Way 
function getFactorialReverse(number) {
    let num = 7;
    let result = 1;
    while (num >= 1) {
        result *= num;
        console.log(num, result);
        num--;
    }
    return result;
}
const myNumber = 7;
const myFactorial = getFactorial(myNumber);
const myFactorialReverse = getFactorialReverse(myNumber);
console.log(`The factorial of ${myNumber} is =`, myFactorial);
console.log(`The factorial(ReverseWay) of ${myNumber} is =`, myFactorialReverse);
