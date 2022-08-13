function isBestFriend(friends) {
    const firstName = friends[0].name;
    const secondName = friends[1].name;
    const firstFriend = friends[0].friend;
    const secondFriend = friends[1].friend;

    if (firstName === secondFriend && secondName === firstFriend) {
        return true;
    } else {
        return false;
    }
};

let friends = [
    { name: 'alauddin', friend: 'badal' },
    { name: 'badal', friend: 'alauddin' }
];

const result = isBestFriend(friends);
console.log(result);