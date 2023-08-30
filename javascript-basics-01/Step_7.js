function calculation() {
    let shoeSize = parseFloat(prompt("Please enter your shoe size: "));
    let birthYear = parseFloat(prompt("Please enter your birth year: "));

if (!isNaN(shoeSize) && !isNaN(birthYear)) {
    let result = ((shoeSize * 2 + 5) * 50 - birthYear) - 1776;
    alert("The result is: " + result);
} else {
    alert("Please enter valid numbers.")
}
}

calculation()