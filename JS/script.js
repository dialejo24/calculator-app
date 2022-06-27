const GRID_BUTTONS = document.querySelector(".grid-buttons");
const displayer = document.querySelector(".display-input");
const span = document.getElementById("display-input");
let stack = [];
let digits = "";
let theme = document.querySelector(".theme");
let toggle = document.querySelector(".toggle");
let togglePoint = document.querySelector(".point");
let title = document.querySelector(".title");
let screen = document.querySelector(".calc-display");
let displayInput = document.querySelector(".display-input");
let keypad = document.querySelector(".grid-buttons");
let button = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let reset = document.querySelector(".reset");
let del = document.querySelector(".del");

window.addEventListener("keydown", e => {
    const button = document.querySelector(`button[data-key="${e.key}"]`);
    if (button != null) {
        makeCalcWork(button.attributes[0].value);
        display();
        
    }
});

GRID_BUTTONS.addEventListener("click", e => {
    if (e.target.attributes[0].name == "data-key") {
        makeCalcWork(e.target.attributes[0].value);
        display();
    }
});

toggle.addEventListener("click", e => {
    if (e.target.id == "three") {
        togglePoint.style = "transform: translateX(49px)";
        theme3();
    } else if (e.target.id == "two") {
        togglePoint.style = "transform: translateX(24px)";
        theme2();
    } else {
        togglePoint.style = "transform: translateX(0px)";
        theme1();
    }
})

function makeCalcWork(input) {
    if (input == "*" || input == "/" || input == "+" || input == "-") {
        if (digits.length > 0 && Number(digits).toString() != "NaN") {
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
        if (stack.length == 1 && digits.length == 0) {

        } else if (digits.indexOf(".") == -1) {
            digits += ".";
        }

    } else if (input == "Enter") {
        if (Number(digits) != NaN && stack.length == 2 && digits.length > 0) {
            stack.push(digits);
            digits = "";
            calc();
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

function display() {
    let display = stack.join(" ") + " " + digits;
    console.log(display);

    if (display.includes("NaN") || display.includes("null")) {
        alert("Error!");
        display = 0;
    } else if (display == " ") {
        display = 0;
    }

    span.textContent = display;

    while (span.offsetWidth > displayer.offsetWidth) {
        display = display.slice(1, );
        span.textContent = display;
    }

}

function calc() {
    let operand2 = stack.pop();
    let operator = stack.pop();
    let operand1 = stack.pop();
    let result = operate(operator, operand1, operand2);
    if (result == "error") {
        alert("Error! you can't divide by 0");
        return;
    } else if (result >= 10e13) {
        result = result.toExponential(10);
    }
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
    return b != 0 ? a / b : "error";
}

function theme1() {
    document.body.classList.add("body_theme1");
    document.body.classList.remove("body_theme2");
    document.body.classList.remove("body_theme3");

    title.classList.add("h1_theme1");
    title.classList.remove("h1_theme2");
    title.classList.remove("h1_theme3");

    theme.classList.add("theme1");
    theme.classList.remove("theme2");
    theme.classList.remove("theme3");

    toggle.classList.add("toggle_theme1");
    toggle.classList.remove("toggle_theme2");
    toggle.classList.remove("toggle_theme3");

    togglePoint.classList.add("point_theme1");
    togglePoint.classList.remove("point_theme2");
    togglePoint.classList.remove("point_theme3");

    screen.classList.add("calc-display_theme1");
    screen.classList.remove("calc-display_theme2");
    screen.classList.remove("calc-display_theme3");

    displayInput.classList.add("display-input_theme1");
    displayInput.classList.remove("display-input_theme2");
    displayInput.classList.remove("display-input_theme3");

    keypad.classList.add("grid-buttons_theme1");
    keypad.classList.remove("grid-buttons_theme2");
    keypad.classList.remove("grid-buttons_theme3");

    equal.classList.add("equal_theme1");
    equal.classList.remove("equal_theme2");
    equal.classList.remove("equal_theme3");

    reset.classList.add("reset_theme1");
    reset.classList.remove("reset_theme2");
    reset.classList.remove("reset_theme3");

    del.classList.add("del_theme1");
    del.classList.remove("del_theme2");
    del.classList.remove("del_theme3");

    for (let i = 0; i < button.length; i++) {
        if (button[i].attributes[0].value == "del" || button[i].attributes[0].value == "Enter"
        || button[i].attributes[0].value == "Backspace") {
            continue;
        }

        button[i].classList.add("btn_theme1");
        button[i].classList.remove("btn_theme2");
        button[i].classList.remove("btn_theme3");
    }
    
}

function theme2() {
    document.body.classList.add("body_theme2");
    document.body.classList.remove("body_theme1");
    document.body.classList.remove("body_theme3");

    title.classList.add("h1_theme2");
    title.classList.remove("h1_theme1");
    title.classList.remove("h1_theme3");

    theme.classList.add("theme2");
    theme.classList.remove("theme1");
    theme.classList.remove("theme3");

    toggle.classList.add("toggle_theme2");
    toggle.classList.remove("toggle_theme1");
    toggle.classList.remove("toggle_theme3");

    togglePoint.classList.add("point_theme2");
    togglePoint.classList.remove("point_theme1");
    togglePoint.classList.remove("point_theme3");

    screen.classList.add("calc-display_theme2");
    screen.classList.remove("calc-display_theme1");
    screen.classList.remove("calc-display_theme3");

    displayInput.classList.add("display-input_theme2");
    displayInput.classList.remove("display-input_theme1");
    displayInput.classList.remove("display-input_theme3");

    keypad.classList.add("grid-buttons_theme2");
    keypad.classList.remove("grid-buttons_theme1");
    keypad.classList.remove("grid-buttons_theme3");

    equal.classList.add("equal_theme2");
    equal.classList.remove("equal_theme1");
    equal.classList.remove("equal_theme3");

    reset.classList.add("reset_theme2");
    reset.classList.remove("reset_theme1");
    reset.classList.remove("reset_theme3");

    del.classList.add("del_theme2");
    del.classList.remove("del_theme1");
    del.classList.remove("del_theme3");

    for (let i = 0; i < button.length; i++) {
        if (button[i].attributes[0].value == "del" || button[i].attributes[0].value == "Enter"
        || button[i].attributes[0].value == "Backspace") {
            continue;
        }

        button[i].classList.add("btn_theme2");
        button[i].classList.remove("btn_theme1");
        button[i].classList.remove("btn_theme3");
    }
    
}

function theme3() {
    document.body.classList.add("body_theme3");
    document.body.classList.remove("body_theme2");
    document.body.classList.remove("body_theme1");

    title.classList.add("h1_theme3");
    title.classList.remove("h1_theme2");
    title.classList.remove("h1_theme1");

    theme.classList.add("theme3");
    theme.classList.remove("theme2");
    theme.classList.remove("theme1");

    toggle.classList.add("toggle_theme3");
    toggle.classList.remove("toggle_theme2");
    toggle.classList.remove("toggle_theme1");

    togglePoint.classList.add("point_theme3");
    togglePoint.classList.remove("point_theme2");
    togglePoint.classList.remove("point_theme1");

    screen.classList.add("calc-display_theme3");
    screen.classList.remove("calc-display_theme2");
    screen.classList.remove("calc-display_theme1");

    displayInput.classList.add("display-input_theme3");
    displayInput.classList.remove("display-input_theme2");
    displayInput.classList.remove("display-input_theme1");

    keypad.classList.add("grid-buttons_theme3");
    keypad.classList.remove("grid-buttons_theme2");
    keypad.classList.remove("grid-buttons_theme1");

    equal.classList.add("equal_theme3");
    equal.classList.remove("equal_theme2");
    equal.classList.remove("equal_theme1");

    reset.classList.add("reset_theme3");
    reset.classList.remove("reset_theme2");
    reset.classList.remove("reset_theme1");

    del.classList.add("del_theme3");
    del.classList.remove("del_theme2");
    del.classList.remove("del_theme1");

    for (let i = 0; i < button.length; i++) {
        if (button[i].attributes[0].value == "del" || button[i].attributes[0].value == "Enter"
        || button[i].attributes[0].value == "Backspace") {
            continue;
        }

        button[i].classList.add("btn_theme3");
        button[i].classList.remove("btn_theme2");
        button[i].classList.remove("btn_theme1");
    }
    
}