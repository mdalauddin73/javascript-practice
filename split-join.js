// Use of split 
const lyrics = 'Tumi bondhu kala PAkhi ami jeno ki. bosonto kale tomai bolte pari ni. kala kaka sada sada';
const parts = lyrics.split(' ');
const sentence = lyrics.split('.')
const character = lyrics.split('');

console.log(parts);
console.log(sentence);
console.log(character);

// Use of slice 
const partial = lyrics.slice(5, 8);
console.log(partial);

// Use of substring
const partial2 = lyrics.substring(5, 8);
console.log(partial2);

//Use of Concatenate (Join)
const lines = [
    'Tumi bondhu kala PAkhi ami jeno ki',
    'bosonto kale tomai bolte pari ni',
    'kala kaka sada sada'
];
const newSong = lines.join(':');
console.log(newSong);


