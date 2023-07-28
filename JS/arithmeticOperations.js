export default function calculate(operator, a, b) {
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
    return b != 0 ? a / b : "error";
}