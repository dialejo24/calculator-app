const GRID_BUTTONS = document.querySelector(".grid-buttons");
let stack = [];
let digits = "";
let decimalPoint = true;

window.addEventListener("keydown", e => {
    const button = document.querySelector(`button[data-key="${e.key}"]`);
    if (button != null) {
        makeCalcWork(button.attributes[0].value);
        console.log(stack + " - " + digits);
    }
});

GRID_BUTTONS.addEventListener("click", e => {
    if (e.target.attributes[0].name == "data-key") {
        makeCalcWork(e.target.attributes[0].value);
        console.log(stack + " - " + digits);
    }
});

function makeCalcWork(input) {
    if (input == "*" || input == "/" || input == "+" || input == "-") {
        if (digits.length > 0 && Number(digits) != NaN) {
            stack.push(digits);
            digits = "";
            decimalPoint = true;

            if (stack.length == 3) {
                calc();
            } 

            stack.push(input);

        } else if (stack.length > 0) {
            stack[1] = input;

        } else if (digits.length == 0 && (input == "-" || input == "+")) {
            digits += input;
        }

    } else if(input == "del") {
        stack = [];
        operand = "";

    } else if (input == ".") {
        if (decimalPoint == true) {
            digits += ".";
            decimalPoint = false; 
        }

    } else if (input == "Enter") {
        if (Number(digits) != NaN && stack.length == 2 && digits.length > 0) {
            stack.push(digits);
            digits = "";
        }

        if (stack.length == 3) {
            calc();
        }

    } else if (input == "Backspace") {
        if (digits.length > 0) {
            digits = digits.slice(0, digits.length - 1);

        } else if (stack.length == 2) {
            stack.pop();

        } else if (stack.length == 1) {
            digits = stack.pop() + "";
            digits = digits.slice(0, digits.length - 1);
        }

    } else {
        digits += input;
    }
}

function calc() {
    let operand2 = stack.pop();
    let operator = stack.pop();
    let operand1 = stack.pop();
    let result = operate(operator, operand1, operand2);
    stack.push(result);
    
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            return add(Number(a), Number(b));
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return null;
    }
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a  - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return b != 0 ? a / b : null;
}