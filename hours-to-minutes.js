function hoursToMinutes(hours) {
    const min = hours * 60;
    // console.log(min);
    return min;
}
const hours = 4;
const myMinutes = hoursToMinutes(hours);
console.log(`${hours} hours =`, myMinutes, `minutes`);
