const myFamilies = ['alauddin', 'moon', 'muaf', 'juwayriya', 'jobayer', 'zabir', 'sawdha'];
const arrayElement = myFamilies.length;
console.log(arrayElement);

// display the array elements
for (let i = 0; i < myFamilies.length; i++) {
    const index = i;
    const element = myFamilies[index];
    console.log(element);
}

myFamilies[1] = 'Karimoon Nahar';
myFamilies.pop();
myFamilies.shift();
myFamilies.unshift('salahuddin', 'sawdha');
console.log(myFamilies);

// find out > 80 number from the array
const myNumbers = [40, 20, 30, 80, 82, 86, 100, 25, 48];
for (let i = 0; i < myNumbers.length; i++) {
    const index = i;
    const element = myNumbers[index];
    if (element > 80) {
        console.log(element);
    }
}
