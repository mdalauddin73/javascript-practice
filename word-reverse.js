// Reverse words

function reverseWords(str) {
    const words = str.split(' ');
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'I am a very good boy';
const result = reverseWords(myString);
console.log(result);