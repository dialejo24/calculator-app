const GRID_BUTTONS = document.querySelector(".grid-buttons");
const displayer = document.querySelector(".display-input");
let stack = [];
let digits = "";

window.addEventListener("keydown", e => {
    const button = document.querySelector(`button[data-key="${e.key}"]`);
    if (button != null) {
        makeCalcWork(button.attributes[0].value);
        console.log(stack + " : " + digits);
        displayer.textContent = stack.join(" ") + " " + digits;
    }
});

GRID_BUTTONS.addEventListener("click", e => {
    if (e.target.attributes[0].name == "data-key") {
        makeCalcWork(e.target.attributes[0].value);
        console.log(stack + " : " + digits);
        displayer.textContent = stack.join(" ") + " " + digits;
    }
});

function makeCalcWork(input) {
    if (input == "*" || input == "/" || input == "+" || input == "-") {
        if (digits.length > 0 && Number(digits).toString() != "NaN") {
            console.log(Number(digits));
            stack.push(digits);
            digits = "";

            if (stack.length == 3) {
                calc();
            } 

            stack.push(input);

        } else if ((stack[1] == "*" || stack[1] == "/") && input == "-") {
            digits += input;

        } else if (stack.length > 0) {
            stack[1] = input;

        } else if (digits.length == 0 && input == "-") {
            digits += input;
        }

    } else if(input == "del") {
        stack = [];
        digits = "";

    } else if (input == ".") {
        if (digits.indexOf(".") == -1) {
            digits += ".";
            
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
        if (stack.length == 1) {
            stack.pop();
        }

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