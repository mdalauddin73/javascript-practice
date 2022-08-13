// Searching String 

const lyrics = 'Tumi bondhu kala PAkhi ami jeno ki. bosonto kale tomai bolte pari ni';
const searchString = 'Pakhi';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLowerCase = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLowerCase);
// coding in one line 
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);
console.log(doesExistOneLine);

// IndexOf

console.log(lyrics.indexOf('kala'));

if (lyrics.indexOf('Kala') !== -1) {
    console.log('Exist inside the string');
} else {
    console.log('Canno find it');
}

// startsWith 
console.log(lyrics.startsWith('Tumi'));

// endWith
const fileName = 'incidentreport.pdf';
const otherFileName = 'alauddin.png';
console.log(fileName.endsWith('.pdf'));


