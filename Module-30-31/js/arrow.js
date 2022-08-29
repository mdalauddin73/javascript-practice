// arrow.js

const add = (a, b) => a + b;
const result = add(20, 30);
console.log(result);

const getPi = () => 3.27;
const PI = getPi();
console.log(PI);

const square = num => num * num;
const result2 = square(10);
console.log(result2);

const multiLineCode = (a, b, c) => {
    sum1 = a + b;
    sum2 = a + c;
    sum3 = b + c;
    return sum1, sum2, sum3;
}

const result3 = multiLineCode(25, 10, 20);
console.log(result3);

// class.js
// syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`Please create quiz for module ${module}`)
    }
}
const alauddin = new Instructor('Muaf', 'Dhaka');
console.log(alauddin);

alauddin.startSupportSession('9:00');
alauddin.createQuiz(60);

