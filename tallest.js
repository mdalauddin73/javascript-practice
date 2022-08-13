// find the height

function maxInArray(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}
const heights = [20, 49, 200, 300, 400];
const tallest = maxInArray(heights);
console.log(tallest);