// const moon = 'Alauddin';
// if (moon === "Alauddin") {
//     console.log('I love you');
// }

// const moon = 'xyz';
// if (moon === "Alauddin") {
//     console.log('I love you');
// } else {
//     console.log('I do not love Moon');
// }

// BMI = Body Mass index
const massAlauddin = 80;
const heightAlauddin = 1.62;
const massMoon = 75;
const heightMoon = 1.62;

const BMIAlauddin = massAlauddin / heightAlauddin ** 2;
const BMIMoon = massMoon / (heightMoon * heightMoon);

// const markHigherBMI = BMIMoon > BMIAlauddin;

// console.log(BMIAlauddin, BMIMoon, markHigherBMI);
if (BMIMoon > BMIAlauddin) {
    // console.log(`Moon's BMI is higher than Alauddin's BMI`);
    // console.log("Moon's BMI is higher than Alauddin's BMI");
    // template literal example
    console.log(`Moon's BMI (${BMIMoon}) is higher than Alauddin's BMI (${BMIAlauddin})`);
} else {
    console.log(`Moon's BMI (${BMIMoon}) is less than Alauddin's BMI (${BMIAlauddin})`);
}

// var fruits = ['Apple', 'Banana', 'Orange'];
// var bananaIndex = (indexof Banana);
// console.log('bananaIndex');

for (var i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}
var isOk = 23;
var dataType = typeof isOk;
console.log(dataType);

// toFixed 

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
console.log(sum);
console.log(typeof sum);
sum = parseFloat(sum);
console.log(sum);
console.log(typeof sum);


var myMoney = 20000;
if (myMoney > 80000) {
    console.log('You can buy Mac');
} else if (myMoney > 60000) {
    console.log('You can buy Gaming Laptop');
} else if (myMoney > 40000) {
    console.log('You can buy Lenovo Yoga');
} else if (myMoney > 20000) {
    console.log('You can buy used laptop');
} else {
    console.log('You will use mobile phone');
}

// ARRAY

// var fruits = ['Apple', 'Banana', 'Mango', 'graps'];
// for (var i = 0; i <= 3; i++) {
//     console.log(fruits[i]);
//     i++;
// }

var fruits = ["Apple", "Banana", "Mango", "graps"];
// add element in the last
// fruits.push("Pineapple");
// add element in the first position
fruits.unshift("Pomegranate", "Guava");
// remove element from the last
// fruits.pop();
// remove element from the first
// fruits.shift();
// total items  of the element
var fLenght = fruits.length;
for (var i = 0; i <= fLenght; i++) {
    // fruits[1] = "Dragonfruit";
    console.log(fruits[i]);
}
// get number of element fo an Array
var fLenght = fruits.length;
console.log(fLenght);


// get the value from the index
fruitsName = fruits[3];
console.log(fruitsName);

var valueArrayElement = fruits[0];
console.log(valueArrayElement);

// get the index of an element by the value
var arrayIndex = fruits.indexOf("graps");
console.log(arrayIndex);

// var i = 1;
// while (i < 40) {
//     console.log(`${i}  Ajke amar mon valo nei`);
//     // console.log(i);
//     i++;
// }

// var i = 58;
// while (i < 99) {
//     console.log(i);
//     i++;
// }

// var i = 412;
// while (i < 457) {
//     console.log(i);
//     i += 2;
// }

var i = 581;
while (i < 624) {
    console.log(i);
    i += 2;
}

var learnTopics = ['html', 'css', 'javascript', 'php', 'mysql'];
var arrayLenght = learnTopics.length;
var i = 0;
while (i < arrayLenght) {
    console.log(learnTopics[i]);
    i++;
}

for (var i = 0; i < arrayLenght; i++) {
    console.log(learnTopics[i]);
}

for (var i = 30; i < 87; i++) {
    console.log(i);
    if (i > 44) {
        break;
    }
}

var bookPrices = [200, 300, 100, 150, 800];
var bookPriceLength = bookPrices.length;

for (var i = 0; i < bookPriceLength; i++) {
    var bookPrice = bookPrices[i];
    if (bookPrice < 200) {
        continue;
    }
    console.log(bookPrice);
}


function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result1 = add(30, 40);
var result2 = add(50, 40);
var result3 = add(100, 40);

console.log(result1, result2, result3);


function getAverage(mark1, mark2, mark3) {
    const markTotal = mark1 + mark2 + mark3;
    const average = markTotal / 3;
    return average;
}

const myAverageMark1 = getAverage(30, 30, 30);
const myAverageMark2 = getAverage(120, 30, 40);
// myAverageMark2 = myAverageMark2.toFixed(2);
const myAverageMark3 = getAverage(30, 120, 120);

console.log(myAverageMark1, myAverageMark2, myAverageMark3);


function movie() {
    return "Din the day";
    return "Poran";
    return "Hawwa"
}
console.log(movie());




