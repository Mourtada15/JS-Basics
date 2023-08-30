let userAge = parseFloat(prompt("Please enter your age: "));
 if (isNaN(userAge)) {
    alert("Please enter a valid number!");
} else if (userAge > 18) {
    alert("You are over 18.");
} else {
    alert("You are under 18.");
}