let number1 = parseFloat(prompt("Please enter the first number:"));
let number2 = parseFloat(prompt("Please enter the second number:"));

if (!isNaN(number1) && !isNaN(number2)) {
    let result = number1 * number2;
    alert("The result is: " + result);
} else {
    alert("Please enter numbers for both inputs.");
}