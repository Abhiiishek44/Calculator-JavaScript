
let Buttons = document.querySelectorAll("button");
let disVal = document.querySelector("#calc-typed")
let ACs = document.querySelector(".ac")
let string = "";
ACs.addEventListener("click", function () {
    disVal.innerText = ""
})
Array.from(Buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string)
            disVal.innerText = string;
        } else if (e.target.innerHTML == "⌫") {
            string = string.slice(0, -1);
            disVal.innerText = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = ""
            disVal.innerText = string;
        }
        else {
            string = string + e.target.innerHTML;
            disVal.innerText = string;
        }
    });
});



