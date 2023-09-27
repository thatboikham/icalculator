const numbers = document.querySelectorAll(".number")
const resultDIv = document.querySelector("#resultSpan")

let firstNumber = "";
let secondNumber = "";

//loop through the numbers to get their values

function getFirstNumber(e){
    if(firstNumber.length < 8){
        const clikedNumber = this.innerHTML;
        firstNumber += clikedNumber;
    }
    resultDIv.innerHTML = parseInt(firstNumber).toLocaleString();
}

numbers.forEach(number =>{number.addEventListener("click", getFirstNumber)});