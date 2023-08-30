let number1 = parseFloat(prompt("Please enter the first number:"));
let number2 = parseFloat(prompt("Please enter the second number:"));

if (!isNaN(number1) && !isNaN(number2) && number2 !==0) {
    let remainder = number1 % number2;
    alert("The remainder is: " + remainder);
} else if(number2 === 0) {
    alert("Division by 0 is not allowed.");
} else {
    alert("Please enter numbers for both inputs.");
}