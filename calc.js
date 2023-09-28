const numbers = document.querySelectorAll(".number")
const resultDIv = document.querySelector("#resultSpan")
const addition = document.querySelector('.value_addition')
const substraction = document.querySelector('.value_substraction')
const multiplication = document.querySelector('.value_multyplication')
const division = document.querySelector('.value_division')
const equals = document.querySelector('.value_equalsign')
const clear = document.querySelector('.value_clear')
const period = document.querySelector('.value_period')


let firstNumber = "";
let secondNumber = "";
let operation = null;

//loop through the numbers to get their values

function getFirstNumber(e) {
    if (firstNumber.length < 10) {
        const clickedNumber = this.innerHTML;
        if (!(firstNumber.includes('.') && clickedNumber === '.')) {
            firstNumber += clickedNumber;
            resultDIv.innerHTML = parseFloat(firstNumber).toLocaleString();
        }
}
function getSecondNumber(e) {
    if (secondNumber.length < 8) {
        const clickedNumber = this.innerHTML;
        if (!(secondNumber.includes('.') && clickedNumber === '.')) {
            secondNumber += clickedNumber;
            resultDIv.innerHTML = parseFloat(secondNumber).toLocaleString();
        }
    }
}

function add(){
    let sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    resultDIv.innerHTML = sum;
}
function substract(){
    let minus = parseFloat(firstNumber) - parseFloat(secondNumber);
    resultDIv.innerHTML = minus;
}
function multiply(){
    let product = parseFloat(firstNumber) * parseFloat(secondNumber);
    resultDIv.innerHTML = product;
}
function divide(){
    let quotient = parseFloat(firstNumber) / parseFloat(secondNumber);
    resultDIv.innerHTML = quotient; 
}

function decimalHandler() {
    if (operation === null) {
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            resultDIv.innerHTML = firstNumber;
        }
    } else {
        if (!secondNumber.includes(".")) {
            secondNumber += ".";
            resultDIv.innerHTML = secondNumber;
        }
    }
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
substraction.addEventListener("click", () =>{
    operation = "substraction";
    resultDIv.innerHTML = "";
});
multiplication.addEventListener("click", () => {
    operation = "multiplication";
    resultDIv.innerHTML = "";
});
division.addEventListener('click', ()=>{
    operation = "division";
    resultDIv.innerHTML = "";
})

// Add click event listener for the equals button to perform the operation
equals.addEventListener("click", () => {
    if (operation === "addition") {
        add();
    }
    else if(operation === "multiplication"){
        multiply();
    }else if(operation === "substraction"){
        substract();
    }else if(operation === "division"){
        divide();
    }
});
clear.addEventListener("click", () => {
    clear.innerHTML = "AC"
    firstNumber = "";
    secondNumber = "";
    operation = null;
    resultDIv.innerHTML = 0;
});
period.addEventListener("click", () => {
    decimalHandler();
});


