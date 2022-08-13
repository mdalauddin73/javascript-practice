// Problem 1: function radianToDegree

function radianToDegree(radian) {
    if (typeof radian === 'number') {
        const pi = Math.PI;
        const degree = (radian * (180 / pi)).toFixed(2);
        const result = parseFloat(degree);
        return result;
    }
    return 'This in not a number';
}

// Problem 2: Function isJavaScriptFile

function isJavaScriptFile(fileName) {
    if (typeof fileName === 'string') {
        if (fileName.endsWith('.js')) {
            return true;
        } else {
            return false;
        }
    }
    return 'This is not string';
}

// Problem 3: Function oilPrice

function oilPrice(dieseLQty, petroLqty, octenLQty) {
    if (typeof dieseLQty === 'number' && typeof petroLqty === 'number' && typeof octenLQty === 'number') {
        const dieselPrice = 114 * dieseLQty;
        const petrolPrice = 130 * petroLqty;
        const octenPrice = 135 * octenLQty;
        const totalPrice = dieselPrice + petrolPrice + octenPrice;
        return totalPrice;
    }
    return 'This are not numbers';
}

// Problem 4:Function publicBusFare

function publicBusFare(picnicMembers) {
    if (typeof picnicMembers === 'number') {
        const membersAfterBus = picnicMembers % 50;
        const membersAfterMicroBus = membersAfterBus % 11;
        const publicBusFare = membersAfterMicroBus * 250;
        return publicBusFare;
    }
    return 'This in not a number';
}

// Problem 5: isBestFriend

const personOne = { name: 'AlAuddin', friend: 'badal' };
const personTwo = { name: 'badal', friend: 'alauddin' };

function isBestFriend(personOne, personTwo) {
    if (typeof personOne === 'object' && typeof personTwo === 'object') {
        const personOneName = personOne.name;
        const personOneNameLowerCase = personOneName.toLowerCase();
        const personOneFriend = personOne.friend;
        const personOneFriendLowerCase = personOneFriend.toLowerCase();
        const personTwoName = personTwo.name;
        const personTwoNameLowerCase = personTwoName.toLowerCase();
        const personTwoFriend = personTwo.friend;
        const personTwoFriendLowerCase = personTwoFriend.toLowerCase();
        if (personOneNameLowerCase === personTwoFriendLowerCase &&
            personTwoNameLowerCase === personOneFriendLowerCase) {
            return true;
        } else {
            return false;
        }
    }
    return 'This is not object';

};


// End of Assinment 4 