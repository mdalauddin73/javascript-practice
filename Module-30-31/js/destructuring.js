// destructuring.js
// object destructuring
//==========================================================
const fish = {
    name: 'king Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '01715697780',
    price: 4000
}
const phone = fish.phone;
const color = fish.color;
const price = fish.price;
console.log(phone, color, price);

const { age, name } = { name: 'Alauddin', age: 50, profession: 'IT' }
console.log(name);

const { address } = fish;
console.log(address);

// array destructuring

const [fisrt, another] = [44, 99, 88, 456];

const nayoks = ['sakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);
// result : raj

function getNames() {
    return ['alim', 'halim'];
}
const [baba, chacha] = getNames();
console.log(chacha, baba);
// result: halim alim

//dom.js
//=============================================================
document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (let friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
})
document.getElementById('center-third').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = 'center';
})
document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    // add .friend class to the newly created friend
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name"> New Friend </h3>
    <p>something new added</p>
    `
    friendContainer.appendChild(friend);
})





