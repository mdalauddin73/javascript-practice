const names = ['babul', 'kabul', 'abul', 'sabul', 'kabul', 'babul', 'badal', 'badal'];
function removeDuplicate(names) {
    const uniqueNames = [];
    for (i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqueNames.includes(name) === false) {
            uniqueNames.push(name);
        }
    }
    return uniqueNames;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);