//system-1
{/* <button onclick="console.log(7)">Click Me</button> */ }

// system-2 [we will use this]
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

//system-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// another-3 [we will use it sometime]
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
// system-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}
// another 4
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

// system 4 final [we will use this sometime]
document.getElementById('make-goldenRod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})