const hero = {
    name: 'Muaf',
    id: 234,
    address: '1212 East Shewrapara, Mirpur, Dhaka-1216',
    isSingle: 'yes',
    friends: ['tofayel', 'siam', 'nafisa', 'samira', 'boltu'],
    movies: [
        { name: 'sada kala', year: 2010, profit: 20000000 },
        { name: 'moyna', year: 2015, profit: 220000000 }
    ],
    car: {
        brand: 'telsa',
        price: 2899000,
        made: 'china',
    },
    act: function () {
        console.log('Mohammad Alauddin');
    }
}
// console.log(hero);
console.log(hero.car)
console.log(hero.friends)
hero.act();