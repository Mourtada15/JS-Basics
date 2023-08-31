let div1 = document.createElement("div");
let input1 = document.getElementById("name");
let body1 = document.querySelector("body");

input1.addEventListener("input", function(){
    div1.textContent = input1.value;
    body1.appendChild(div1);
});