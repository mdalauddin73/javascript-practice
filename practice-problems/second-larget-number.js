// find second larget number from an array

function secondLargestNumber(numbers) {
    let largestNumber = 0;
    let secondLargestNumberTemp = 0;
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element > largestNumber) {
            secondLargestNumberTemp = largestNumber;
            largestNumber = element;
        } else if (element > secondLargestNumberTemp) {
            secondLargestNumberTemp = element;
        }
    }
    return secondLargestNumberTemp;

}
const myNumbers = [100, 150, 150, 38, 29, 300];
const finalSecondLargestNumber = secondLargestNumber(myNumbers);
console.log(finalSecondLargestNumber);
