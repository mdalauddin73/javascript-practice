// Result "false"  why?
function compare(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}
const result2 = compare(15, "15");
console.log(result2);

// loosly equal, result true Why?
function compare(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
const result3 = compare(15, "15");
console.log(result3);