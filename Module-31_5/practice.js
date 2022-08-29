// Problem 3.1
const division = number => number / 5;
const result = division(20);
console.log(result);

// Problem 3.2
const sumMultiply = (num1, num2) => (num1 + 2) * (num2 + 2);
console.log(sumMultiply(3, 5));

const quib = (a, b, c) => a * b * c;
const quibResult = quib(2, 3, 4);
console.log(quibResult);

// problem 5
const array = [2, 5, 7, 9, 2, 9, 3, 7];
const fives = array.map(n => n * 5);
console.log(fives);

// Problem 6
const array2 = [22, 52, 17, 19, 20, 90, 3, 7];
const oddNumbers = array2.filter(n => n % 2 != 0);
console.log(oddNumbers);

//Problem 7
const products = [
    { id: 1, name: 'mobile', price: 43900 },
    { id: 2, name: 'latop', price: 5000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 43000 }
];
const findPrice = products.filter(n => n.price === 5000);
console.log(findPrice);

// problem 8
const { price } = products[2];
console.log(price);

//problem 11 and 12
const student = [{
    name: 'Muaf Ahmed',
    Class: 'XI',
    Position: 2,
    College: 'Mapale Leaf',
    marks: {
        math: 90,
        chemestry: 70,
        physics: {
            firstSemester: 90,
            secondSemester: 95,
            thirdSemester: 70
        }
    }
}]

const physicsMarks = student?.marks?.physics;
console.log(physicsMarks);





