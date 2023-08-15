import calculate from './mathOperations';

let stack = []; //stores operands, operators and results of math operations
let operand = ""; //stores the digits of an operand

function makeCalcWork(input) {
    if (input == "*" || input == "/" || input == "+" || input == "-") {
        setOperator(input);

    } else if (input == "del") {
        stack = [];
        operand = "";

    } else if (input == ".") {
        if (operand.indexOf(".") == -1) {
            operand += ".";
        }

    } else if (input == "Enter") {
        operate();

    } else if (input == "Backspace") {
       removeDigitOrOperator();

    } else {
        if (stack.length == 1) {
            stack.pop();
        }

        appendDigitToOperand(input);
    }
}

function getUserInput() {
    return stack.join(" ") + " " + operand;
}

function pushResultToStack() { //pushes the operation's result to the stack
    let operand2 = stack.pop();
    let operator = stack.pop();
    let operand1 = stack.pop();
    let result = calculate(operator, operand1, operand2);

    if (result == "error") {
        alert("Error! you can't divide by 0");
        return;
    }
    
    if (result >= 10e13) {
        result = result.toExponential(9);
    } else if (result.toString().length > 13) {
        result = result.toFixed(3);
    }
    stack.push(result);
    
}

function setOperator(operator) { //pushes operator to stack or sets it as an operand's sign if equals '-'
    if (operand.length > 0 && !isNaN(Number(operand))) {
        stack.push(operand);
        operand = "";

        if (stack.length == 3) {
            pushResultToStack();
        } 

        stack.push(operator);

    } else if (stack.length > 0) {
        stack[1] = operator;

    } else if (((stack[1] == "*" || stack[1] == "/") && operator == "-") || (operand.length == 0 && operator == "-")) {
        operand += operator;
    }    
}

function operate() {
    if (!isNaN(operand) && stack.length == 2 && operand.length > 0) {
        stack.push(operand);
        operand = "";
        pushResultToStack();
    }  
}

function removeDigitOrOperator() {
    if (operand.length > 0) {
        operand = operand.slice(0, operand.length - 1);

    } else if (stack.length == 2) {
        stack.pop();
        operand = stack.pop() + "";

    }
}

function appendDigitToOperand(digit) {
    operand += digit;
}

export {makeCalcWork, getUserInput};
