function calcAge(birthYear) {
    return 2022 - birthYear;
}

const familyBirthYear = [1973, 1975, 2008, 2004];

const age = [calcAge(familyBirthYear[0]), calcAge(familyBirthYear[1]), calcAge(familyBirthYear[2]),
calcAge(familyBirthYear[familyBirthYear.length - 1])];

console.log(age);