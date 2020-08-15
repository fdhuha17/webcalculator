const calculator = {
    displayNumber: '0',
    operator : null,
    firstNumber: null,
    waitingForSecondNumber: false
};

function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
}

function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
}

function inputDigit(digit) {
    if(calculator.displayNumber == '0') {
        calculator.displayNumber = digit;
    } else {
        calculator.displayNumber += digit;
    }
}

const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
    button.addEventListener('click', function(event) {
        const target = event.target;
        if(target.classList.contains('clear')) {
            clearCalculator();
            updateDisplay();
            return;
        }

        if(target.classList.contains('negative')) {
            inverseNumber();
            updateDisplay();
            return;
        }

        if(target.classList.contains('equals')) {
            performCalculation();
            updateDisplay();
            return;
        }

        if(target.classList.contains('operator')) {
            handleOperator(target.innerText);
            return;
        }
        inputDigit(target.innerText);
        updateDisplay();
    });
}

function inverseNumber() {
    if(displayNumber === '0'){
        return;
    }
    calculator.displayNumber = calculator.displayNumber*-1;
}

function handleOperator() {
    if(!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
        calculator.displayNumber = '0';
    } else {
        alert('operator sudah ditetapkan');
    }
}

function performCalculation() {
    if(calculator.firstNumber == null || calculator.operator == null) {
        alert('anda belum menetapka operator');
        return;
    }
    let result = 0;
    if(calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    } else {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }
    calculator.displayNumber = result;
}