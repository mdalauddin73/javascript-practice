// find the smallest number

function minInArray(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}
const heights = [20, 49, 200, 300, 400, 3];
const lowest = minInArray(heights);
console.log(lowest);