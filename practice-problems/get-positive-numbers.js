const myNumbers = [2, 3, 60, 72, -1, 5, -4, -10, 50, -100];

function getPositiveNumbers(numbers) {
    const positiveNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element >= 0) {
            positiveNumbers.push(element);
        } else {
            break;
            // continue;
        }

    }
    return positiveNumbers;
}
const myPositiveNumbers = getPositiveNumbers(myNumbers);
console.log(myPositiveNumbers);