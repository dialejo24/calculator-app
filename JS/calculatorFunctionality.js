import calculate from './mathOperations';

let stack = []; //stores the user input and results of math operations
let digits = "";

export default function makeCalcWork(input) {
    if (input == "*" || input == "/" || input == "+" || input == "-") {
        if (digits.length > 0 && Number(digits).toString() != "NaN") {
            stack.push(digits);
            digits = "";

            if (stack.length == 3) {
                pushResultToStack();
            } 

            stack.push(input);

        } else if ((stack[1] == "*" || stack[1] == "/") && input == "-") {
            digits += input;

        } else if (stack.length > 0) {
            stack[1] = input;

        } else if (digits.length == 0 && input == "-") {
            digits += input;
        }

    } else if (input == "del") {
        stack = [];
        digits = "";

    } else if (input == ".") {
        if (digits.indexOf(".") == -1) {
            digits += ".";
        }

    } else if (input == "Enter") {
        if (!isNaN(digits) && stack.length == 2 && digits.length > 0) {
            stack.push(digits);
            digits = "";
            pushResultToStack();
        }      

    } else if (input == "Backspace") {
        if (digits.length > 0) {
            digits = digits.slice(0, digits.length - 1);

        } else if (stack.length == 2) {
            stack.pop();
            digits = stack.pop() + "";

        }

    } else {
        if (stack.length == 1) {
            stack.pop();
        }

        digits += input;
    }
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
        result = result.toExponential(10);
    } else if (result.toString().length > 14) {
        result = result.toFixed(3);
    }
    stack.push(result);
    
}
