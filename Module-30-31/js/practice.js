// Practice Problem
// ================================================================================
// Problem 1:  arrow function
const multiply = (a, b, c) => a * b * c;
const multiplyResult = multiply(5, 5, 5);
console.log(multiplyResult);

// Problem 2: use of backtick (`)
const statement = `I am a web developer
I love code
I love to eat biryani`
console.log(statement);

// Problem 3: 
const sum = (a, b = 10) => a + b;
const sumResult = sum(10, 30);
console.log(sumResult);

function getSum(a, b = 9) { return a + b; } console.log(getSum(2, 7));


const y = x => x * x; const z = y(5);
console.log(z);

// const division = num1, num2 => console.log(num1 / num2);

const numbers = [10, 20, 30, 40, 50, 60, 70];
console.log(Math.max(...numbers));

const cars = ['toyota', 'honda', 'mercedes'];
const newCars = [...cars, 'ferrari'];
console.log(newCars);

// Problem 4:
const friends = ['alauddin', 'sumsuddin', 'rafiquel islam', 'monowar hossain', 'shihab'];

const evenCharfriends = (friends) => {
    const friendContainer = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 === 0) {
            friendContainer.push(friends[i]);
        }
    }
    return friendContainer;
}
const evenResult = evenCharfriends(friends);
console.log(evenResult);






















// Practice Problem
// ================================================================================

// Problem 5
const numbersForSquare = [5, 4, 6, 5];
const getSquare = numbers => {
    // square the numbers
    const resultContainer = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const number = numbers[index];
        const resultToSquare = number ** 2;
        resultContainer.push(resultToSquare);
    }
    // add squared numbers
    let sum = 0;
    for (let i = 0; i < resultContainer.length; i++) {
        let index = i;
        let squareNumber = resultContainer[index];
        sum += squareNumber;
    }
    // Calculate average the sum of the squared numbers
    sumAverage = sum / resultContainer.length;
    console.log(resultContainer);
    console.log(sum);
    // return the average of squared sum
    return sumAverage;
}
const squareOfArrayElement = getSquare(numbersForSquare);
console.log(squareOfArrayElement);


// Problem 6: 
const array1 = [20, 30, 40, 78, 30];
const array2 = [50, 30, 59, 10, 300];

const array3 = (param1, param2) => {
    const array4 = [...param1, ...param2];
    const maxNumber = Math.max(...array4);
    return maxNumber;
}
const result = array3(array1, array2);
console.log(result);