let div1 = document.createElement("div");

document.body.appendChild(div1);

let input1 = document.getElementById("name");

input1.addEventListener("input", function(){
    div1.textContent = input1.value;
});
