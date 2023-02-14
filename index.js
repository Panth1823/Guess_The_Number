let randomNumber = Math.floor(Math.random() * 101);
let guess;
let numGuesses = 0;

do {
  guess = parseInt(prompt("Guess a number between 0 and 100"));
  numGuesses++;

  if (guess < randomNumber) {
    console.log("Guess Lower number, try again!");
  } 
  else if (guess > randomNumber) {
    console.log("Guess Higher number, try again!");
  } 
  else {
    console.log(`Congratulations, you've guessed the number successfully in ${numGuesses} guesses! The number was ${randomNumber}.`);
  }
} 
  while (guess !== randomNumber);