function isBestFriend(personOne, personTwo) {
    const personOneName = personOne.name;
    const personOneNameLowerCase = personOneName.toLowerCase();
    const personOneFriend = personOne.friend;
    const personOneFriendLowerCase = personOneFriend.toLowerCase();
    const personTwoName = personTwo.name;
    const personTwoNameLowerCase = personTwoName.toLowerCase();
    const personTwoFriend = personTwo.friend;
    const personTwoFriendLowerCase = personTwoFriend.toLowerCase();
    console.log(personOneName, personOneFriend, personTwoName, personTwoFriend);
    if (personOneNameLowerCase === personTwoFriendLowerCase && personTwoNameLowerCase === personOneFriendLowerCase) {
        return true;
    } else {
        return false;
    }

};

const personOne = { name: 'AlAuddin', friend: 'badal' };
const personTwo = { name: 'badal', friend: 'alauddin' };

const isBestFriendResult = isBestFriend(personOne, personTwo);
console.log(isBestFriendResult);