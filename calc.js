const numbers = document.querySelectorAll(".number")
const resultDIv = document.querySelector("#resultSpan")
const addition = document.querySelector('.value_addition')
const substraction = document.querySelector('.value_substraction')
const multiplication = document.querySelector('.value_multyplication')
const division = document.querySelector('.value_division')
const equals = document.querySelector('.value_equalsign')
const clear = document.querySelector('.value_clear')
const period = document.querySelector('.value_period')
const percentage = document.querySelector('.value_percentage')
const tooglesign = document.querySelector('.value_changesign')
const whiteBackground = Array.from(document.querySelectorAll('.operator'))




let firstNumber = "";
let secondNumber = "";
let operation = null;

//loop through the numbers to get their values

function getFirstNumber(e) {
    if (firstNumber.length < 8) {
        const clickedNumber = this.innerHTML;
        if (!(firstNumber.includes('.') && clickedNumber === '.')) {
            firstNumber += clickedNumber;
            resultDIv.innerHTML = parseFloat(firstNumber).toLocaleString();
        }
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
function reduceFontsize() {
    const size = resultDIv.innerHTML.length;
    if (size > 8) {
        const newSize = 8 / size * 50; // Adjust the 24 based on your desired font size
        resultDIv.style.fontSize = newSize + 'px';
    } else {
        resultDIv.style.fontSize = '40px'; // Set the default font size here
    }
}
function updateResult() {
    resultDIv.innerHTML = parseFloat(resultDIv.innerHTML).toLocaleString();
    reduceFontsize();
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
function addWhiteBackground() {
    document.body.addEventListener("click", (e) => {
        // Check if the clicked element has the "operator" class
        if (e.target.classList.contains("operator")) {
            e.target.classList.add("white");
        } else {
            // If not, remove the class from all elements with the "operator" class
            whiteBackground.forEach(element => {
                element.classList.remove("white");
            });
        }
    });
}

addWhiteBackground();

function divideby100() {
    if (operation === null) {
        firstNumber = (parseFloat(firstNumber) / 100).toString();
        resultDIv.innerHTML = parseFloat(firstNumber).toLocaleString();
    } else {
        secondNumber = (parseFloat(secondNumber) / 100).toString();
        resultDIv.innerHTML = parseFloat(secondNumber).toLocaleString();
    }
}

function toggleSign(number) {
    return -1 * number;
}

function changeSign(){
    if(operation == null){
        firstNumber = toggleSign(firstNumber);
        resultDIv.innerHTML = parseFloat(firstNumber).toLocaleString();
    }else{
        secondNumber = toggleSign(secondNumber);
        resultDIv.innerHTML = parseFloat(secondNumber).toLocaleString();
    }
}


addition.addEventListener("click", () => {
    operation = "addition";
});
substraction.addEventListener("click", () =>{
    operation = "substraction";
});
multiplication.addEventListener("click", () => {
    operation = "multiplication";
});
division.addEventListener('click', ()=>{
    operation = "division";
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
    updateResult();
});
clear.addEventListener("click", () => {
    clear.innerHTML = "AC"
    firstNumber = "";
    secondNumber = "";
    operation = null;
    resultDIv.innerHTML = 0;
    resultDIv.style.fontSize = '40px'; 
});
period.addEventListener("click", () => {
    decimalHandler();
})
percentage.addEventListener("click", divideby100)
tooglesign.addEventListener("click", changeSign)