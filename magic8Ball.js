/* Program simulates a magic 8 ball */
/* Outpus greeting, inserts username if inputted */
let userName = 'Kaylen';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')

// Outputs user question
const userQuestion = 'Will I travel a lot this year?';
console.log(`${userName} asked ${userQuestion}`);

// Select an random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
let eightBall='';

// Control flow to interpret randon num as ans
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidely so';
    break;
  case 2:
     eightBall ='Replay hazy try again';
    break;
  case 3:
     eightBall ='Cannot predict now';
    break;
  case 4:
     eightBall ='Do not count on it';
    break;
  case 5:
     eightBall ='My sources say no';
    break;
  case 6:
     eightBall ='Outlook not so good';
    break;
  case 7:
     eightBall ='Signs point to yes';
    break;
}

// Output the answer
console.log(eightBall)
