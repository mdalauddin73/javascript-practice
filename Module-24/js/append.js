//1. Where to add
const fruitList = document.getElementById('fruits-list');
//2. Waht to add
const li = document.createElement('li');
li.innerText = 'Orange';
//3. Add the child
fruitList.appendChild(li);


/// Add a section
// 1. Where to add
const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

//2. What to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biryani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'White Rice';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Khichuri';
ul.appendChild(li3);

const li4 = document.createElement('li');
li4.innerText = 'Chicken Biryani';
ul.appendChild(li4);

section.appendChild(ul);
mainContainer.appendChild(section);

// set inner HTML directly -- approach 2 shortcut
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress </h1>
<ul>
    <li> Shirt </li>
    <li> Lungi</li>
    <li> Payjama</li>
</ul>
`
mainContainer.appendChild(sectionDress);