function getLeapYearFromArray(years) {
    const leapYears = [];
    for (let i = 0; i < years.length; i++) {
        const index = i;
        const element = years[index];
        if (element % 4 === 0) {
            leapYears.push(element);
        }
    }
    // console.log(leapYears);
    return leapYears;
}
const myYears = [2023, 2040, 2025, 2028, 2030];
const myLeapYears = getLeapYearFromArray(myYears);
console.log(myLeapYears);