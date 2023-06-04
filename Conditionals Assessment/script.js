var userChoice;
var randomNumber;
var computerChoice;

userChoice = prompt("Heads or tails?");

randomNumber = Math.round(Math.random());

if (randomNumber == 0) {
    computerChoice = "heads";
}
else if (randomNumber == 1) {
    computerChoice = "tails";
}

if (userChoice == computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice)
}
else {
    alert("Sorry, the coin flip landed on " + computerChoice)
}



var birthYear;

birthYear = prompt("What year were you born?");

var age = 2023 - birthYear;

if (age > 21) {
    alert("You are old enough to drink in the US")
}
if (age == 21) {
    alert("You are old enough to drink in the US... barely")
}
else if (age < 21) {
    alert("Sorry, you are not old enough to drink in the US")
}