// Reverse Text

function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myText = 'I love you, Moon';
const reversed = reverseString(myText);
console.log(reversed);
