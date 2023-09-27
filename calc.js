const numbers = document.querySelectorAll(".number")
const resultDIv = document.querySelector("#resultSpan")
const addition = document.querySelector('.value_addition')
const equals = document.querySelector('.value_equalsign')


let firstNumber = "";
let secondNumber = "";
let operation = null;

//loop through the numbers to get their values

function getFirstNumber(e){
    if(firstNumber.length < 8){
        const clikedNumber = this.innerHTML;
        firstNumber += clikedNumber;
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

numbers.forEach(number => {
    number.addEventListener("click", function () {
        if (operation === null) {
            getFirstNumber.call(this);
        } else {
            getSecondNumber.call(this);
        }
    });
});

addition.addEventListener("click", () => {
    operation = "addition";
    resultDIv.innerHTML = "";
});

// Add click event listener for the equals button to perform the operation
equals.addEventListener("click", () => {
    if (operation === "addition") {
        add();
    }
});