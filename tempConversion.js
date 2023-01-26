/* This code converts temperature in kelvin to temperature in Celsius and Fahrenheit*/
// Declare const kelvin variable
const kelvin = 293;
// Convert from kelvin to celsius
const celsius = kelvin - 273;
// Convert from celsius to fahrenheit
let fahrenheit;
fahrenheit = celsius * (9/5) + 32;
// Round down to nearest integer
fahrenheit = Math.floor(fahrenheit);

// Output result to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${celsius} degrees Celsius`);
