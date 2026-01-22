//q1
var number =Math.round(43.8)
var num =Math.ceil(45.3)
var num =Math.floor(48.7
)
document.write(num+"</br>")
document.write(number+"</br>")
document.write(num+"</br>")
//q2
document.write("<h1>negative number</h1>")
var digit=Math.round(-45.6)
var dig=Math.ceil(-65.5)
var dig=Math.floor(-45.3)
document.write(dig+"</br>")
document.write(digit+"</br>")
document.write(dig+"</br>")
//q3
document.write("<h2>absoute number</h2>")
var interput=+prompt("enter a number to find absoult")
if(!isNaN(interput)){
    var absoultvalue=Math.abs(interput)
    document.write("the absoult value of"+interput+"is**"+absoultvalue+"**")
}else{
    document.write("Invalid input. Please enter a valid number.")
}
//q4
var rollDice = function() {
    return Math.floor(Math.random() * 6) + 1;
};


var diceValue = rollDice();
//q5

var coinToss = Math.random();

var result;
if (coinToss < 0.5) {
    result = "Heads";
} else {
    result = "Tails";
}


document.write("random coin value: **" + result + "**");
//q6

// Generate a random integer between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the number in your browser
document.write("Your random number between 1 and 100 is: **" + randomNumber + "**");

//q7
// Ask the user for their weight input
var  userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kg, 50.2kilograms):");

// Use parseFloat to extract the number from the beginning of the string.
// This handles inputs with or without units.
var weight = parseFloat(userInput);

// Check if the result is a valid number (not NaN - Not a Number)
if (!isNaN(weight)) {
    // Display the parsed weight in the browser
    document.write("Your weight is: **" + weight + "** kg");
} else {
    // Handle invalid input
    document.write("Invalid input. Please enter a weight starting with a number.");
}
//q8
// 1. Store a random secret number from 1 to 10 in a variable
// Formula: Math.floor(Math.random() * (max - min + 1)) + min
var secretNumber = Math.floor(Math.random() * 10) + 1;

// 2. Ask the user to input a number between 1 and 10
var  userInput = prompt("Guess the secret number (between 1 and 10):");

// Convert the user input from a string to a number
var  userGuess = parseInt(userInput);

// 3. If the user input equals the secret number, congratulate the user
if (userGuess === secretNumber) {
    alert("Congratulations! You guessed the secret number!");
} else {
    // Optional: provide a hint if they are wrong
    alert("Sorry, that's incorrect. The secret number was " + secretNumber + ".");
}
