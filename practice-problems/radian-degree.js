function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const pi = Math.PI;
        const degree = (radian * (180 / pi)).toFixed(2);
        const result = parseFloat(degree);
        return result;
    }
    return 'This in not a number';
}

const myNumber = '25';
const radianResult = radianToDegree(myNumber);
console.log(radianResult);