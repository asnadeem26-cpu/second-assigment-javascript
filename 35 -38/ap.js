function displayCurrentDateTime() {
       var now = new Date(); 
          var dateTimeString = now.toString(); }
             console.log(dateTimeString)
             //q2
            function greetUser(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

greetUser("Ayesha", "Nadeem");
//q3
function greetUser(firstName, lastName) {
    alert("Hello " + firstName + " " + lastName);
}

greetUser("Ayesha", "Nadeem");
//q4

function calculator(num1, num2, operator) {
    var result;

    if (operator === "+") {
        result = num1 + num2;
    } 
    else if (operator === "-") {
        result = num1 - num2;
    } 
    else if (operator === "*") {
        result = num1 * num2;
    } 
    else if (operator === "/") {
        result = num1 / num2;
    } 
    else {
        result = "Invalid Operator";
    }

    return result;
}

var n1 = Number(prompt("Enter first number"));
var n2 = Number(prompt("Enter second number"));
var op = prompt("Enter operator (+, -, *, /)");

document.write("Result: " + calculator(n1, n2, op));

//q5

function square(num) {
    return num * num;
}

var n = Number(prompt("Enter a number"));
document.write("Square is: " + square(n));

function factorial(num) {
    var fact = 1;

    for (var i = 1; i <= num; i++) {
        fact = fact * i;
    }

    return fact;
}

var n = Number(prompt("Enter a number"));
document.write("Factorial is: " + factorial(n));


//q6
function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }
}

var startNum = Number(prompt("Enter start number"));
var endNum = Number(prompt("Enter end number"));

counting(startNum, endNum);

//q7    

function calculateHypotenuse(base, perpendicular) {

    function square(num) {
        return num * num;
    }

    var hypotenuse = Math.sqrt(
        square(base) + square(perpendicular)
    );

    return hypotenuse;
}

var b = Number(prompt("Enter base"));
var p = Number(prompt("Enter perpendicular"));

document.write("Hypotenuse is: " + calculateHypotenuse(b, p))


//q8

function rectangleArea(width, height) {
    return width * height;
}

var w = Number(prompt("Enter width"));
var h = Number(prompt("Enter height"));

document.write("Area of rectangle: " + rectangleArea(w, h));

//10

function isPalindrome(str) {
    var reversed = str.split("").reverse().join("");

    if (str === reversed) {
        return "It's a Palindrome";
    } else {
        return "Not a Palindrome";
    }
}

var word = prompt("Enter a word");
document.write(isPalindrome(word));