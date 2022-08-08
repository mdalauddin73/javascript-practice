function getSumOfAnArray(numbers) {
    let sum = 0;
    // const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = [i];
        const element = numbers[index];
        // if (element % 2 === 1); {
        //     // console.log(index, element);
        //     oddNumbers.push(element);
        // }
        sum += element;
        console.log(index, element, sum);
    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
getSumOfAnArray(myNumbers);

