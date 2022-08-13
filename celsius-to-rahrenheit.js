//Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const myCelsius = 100;
const myFahrenheit = celsiusToFahrenheit(myCelsius);
console.log(`${myCelsius} Celsius =`, myFahrenheit, 'Fahrenheit');

// formula (0°C × 9/5) + 32 = 32°F