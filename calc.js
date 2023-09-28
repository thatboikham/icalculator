const numbers = document.querySelectorAll(".number")
const resultDIv = document.querySelector("#resultSpan")
const addition = document.querySelector('.value_addition')
const multiplication = document.querySelector('.value_multyplication')
const equals = document.querySelector('.value_equalsign')
const clear = document.querySelector('.value_clear')


let firstNumber = "";
let secondNumber = "";
let operation = null;

//loop through the numbers to get their values

function getFirstNumber(e){
    if(firstNumber.length < 10){
        const clikedNumber = this.innerHTML;
        firstNumber += clikedNumber;
    }else if(firstNumber.length >= 5){
        resultDIv.style.cssText = "font-size: 30px";
    }
    resultDIv.innerHTML = parseInt(firstNumber).toLocaleString();
}
function getSecondNumber(e){
    if(secondNumber.length < 8){
        const clikedNumber = this.innerHTML;
        secondNumber += clikedNumber;
    }
    resultDIv.innerHTML = parseInt(secondNumber).toLocaleString();
}

function add(){
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    resultDIv.innerHTML = sum;
}
function multiply(){
    let product = parseInt(firstNumber) * parseInt(secondNumber);
    resultDIv.innerHTML = product;
}

numbers.forEach(number => {
    number.addEventListener("click", function () {
        if (operation === null) {
            getFirstNumber.call(this);
        } else {
            getSecondNumber.call(this);
        }
        clear.innerHTML = "C"
    });
});

addition.addEventListener("click", () => {
    operation = "addition";
    resultDIv.innerHTML = "";
});
multiplication.addEventListener("click", () => {
    operation = "multiplication"
    resultDIv.innerHTML = "";
})

// Add click event listener for the equals button to perform the operation
equals.addEventListener("click", () => {
    if (operation === "addition") {
        add();
    }
    else if(operation === "multiplication"){
        multiply();
    }
});
clear.addEventListener("click", () => {
    clear.innerHTML = "AC"
    firstNumber = "";
    secondNumber = "";
    operation = null;
    resultDIv.innerHTML = 0;
});
