/* Program asigns a race number to participants of the race based on age and registration time */
// Declare needed variables
let raceNumber = Math.floor(Math.random() * 1000);
const earlyReg = false;
const age = 12;

// Checks runners age and registration time
if ( age > 18 && earlyReg === true) {
  raceNumber += 1000
}

// Determines race time
if (age > 18 && earlyReg === true) {
  console.log(`Runner ${raceNumber} will race at 9:30am.`);
} else if (age > 18 && earlyReg === false) {
  console.log(`Runner ${raceNumber} will race at 11:00 am.`);
} else if (age < 18) {
  console.log(`Runner ${raceNumber} will race at 12:30pm.`);
} else {
  console.log(`Runner ${raceNumber} please see the registration desk.`);
}

Project 6: Sleep debt calculator
