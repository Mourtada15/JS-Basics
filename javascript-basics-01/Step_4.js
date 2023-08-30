var name = prompt("Please enter your name:");
var surname = prompt("Please enter your surname:");
var city = prompt("Please enter your city:");

if (name !== null && surname !== null && city !== null) {
    var message = "Hello " + name + " " + surname + " from " + city;
    alert(message);
} else {
    alert("You didn't provide all the information.");
}
