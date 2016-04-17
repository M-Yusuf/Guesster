var randomNumber = Math.floor(Math.random() * 9) + 1;
var guess = prompt(‘I am thinking of a number between 1 and 6. Guess!’)

if (parseInt(guess) === randomNumber) {
	document.write(“You guessed Right”)
} else if (parseInt(guess) < randomNumber) {
	var guessMore = prompt(“Try Again. The number is More than ” + guess);
	if (parseInt(guessMore) === randomNumber) {
correctGuess = true; 
  }
} else if(parseInt(guess) > randomNumber) {
var guessLess = prompt(“Try Again. The number is Less than ” + guess);
	if (parseInt(guessLess) === randomNumber) {
correctLess = true;
  }
}
if (correctGuess===true) {
	document.write(“<p>You guessed the number</p>”);
} else {
	documents.write(‘<p>Sorry. The number was ” + randomNumber + “</p>”);
}

function check() {               
  console.log(document.getElementById("number-input").value.onsubmit); 
}