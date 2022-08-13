// Best Friends

const friends = [
    'prince',
    'morshed',
    'Monowar Hossain Badal',
    'jashim',
    'rafiqul islam razu'
];

function bestFriend(friends) {
    let containBestFriend = '';
    for (let i = 0; i < friends.length; i++) {
        const arrayIndex = i;
        const arrayfriend = friends[arrayIndex];
        if (containBestFriend.length < arrayfriend.length) {
            containBestFriend = arrayfriend;
        }
    }
    return containBestFriend
};

const myBestFriend = bestFriend(friends);
console.log(myBestFriend);
