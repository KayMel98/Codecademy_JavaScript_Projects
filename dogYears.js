/* Converts age in human years to dog years */
// Set variable for users age
const myAge = 24;
// Variable for early years
let earlyYears=2;
earlyYears *= 10.5;
// Subtract early years from users age
let laterYears= myAge - 2;
// Calculate later years into dog years
laterYears *= 4;
// Add early and late years for total age
let myAgeInDogYears = earlyYears + laterYears;
// User name, and convert to lower case
let myName = 'Kaylen'.toLowerCase();

// Output result to console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);
