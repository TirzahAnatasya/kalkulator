let display = document.getElementById('display');
let operation = '';
let operand1 = '';
let operand2 = '';
let result = '';

function appendToDisplay(value) {
    if (display.textContent == '0' && value != '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function setOperation(op) {
    operation = op;
    operand1 = display.textContent;
    display.textContent = '0';
}

function clearDisplay() {
    display.textContent = '0';
    operation = '';
    operand1 = '';
    operand2 = '';
    result = '';
}

function calculateResult() {
    operand2 = display.textContent;
    switch (operation) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.textContent = result;
    operand1 = result;
    operand2 = '';
    operation = '';
}

function calculatePercentage() {
    let value = parseFloat(display.textContent) / 100;
    display.textContent = value;
}

function calculateSquareRoot() {
    let value = Math.sqrt(parseFloat(display.textContent));
    display.textContent = value;
}

function calculatePower() {
    let value = Math.pow(parseFloat(operand1), parseFloat(display.textContent));
    display.textContent = value;
}
