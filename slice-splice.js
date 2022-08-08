// Use of slice (copy/extract element)

const friends = [12, 74, 28, 39, 26, 29, 38];
const partial = friends.slice(2, 5);
console.log(friends);
console.log(partial);

//use of splice (Delete element)
const partial2 = friends.splice(2, 3);
console.log(partial2);
console.log(friends);

// Insert element
const partial3 = friends.splice(2, 3, 999, 555, 777);
console.log(partial3);
console.log(friends);
