import {makeCalcWork, getUserInput} from "./calculatorFunctionality";

const GRID_BUTTONS = document.querySelector(".grid-buttons");
const displayer = document.querySelector(".display-input");
const contentToDisplay = document.getElementById("display-input");
let theme = document.querySelector(".theme");
let toggle = document.querySelector(".toggle");
let togglePoint = document.querySelector(".point");
let title = document.querySelector(".title");
let screen = document.querySelector(".calc-display");
let displayInput = document.querySelector(".display-input");
let keypad = document.querySelector(".grid-buttons");
let buttons = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let reset = document.querySelector(".reset");
let del = document.querySelector(".del");

window.addEventListener("keydown", e => {
    const button = document.querySelector(`button[data-key="${e.key}"]`);
    if (button != null) {
        makeCalcWork(button.attributes[0].value);
        displayUserInput();
        
    }
});

GRID_BUTTONS.addEventListener("click", e => {
    if (e.target.attributes[0].name == "data-key") {
        makeCalcWork(e.target.attributes[0].value);
        displayUserInput();
    }
});

toggle.addEventListener("click", e => {
    if (e.target.id == "three") {
        togglePoint.style = "transform: translateX(49px)";
        changeTheme(3);
    } else if (e.target.id == "two") {
        togglePoint.style = "transform: translateX(24px)";
        changeTheme(2);
    } else {
        togglePoint.style = "transform: translateX(0px)";
        changeTheme(1);
    }
})

function displayUserInput() { //displays user input and operations result
    let userInput = getUserInput();

    if (userInput.includes("NaN") || userInput.includes("null")) {
        alert("Error!");
        userInput = 0;
    } else if (userInput == " ") {
        userInput = 0;
    }

    contentToDisplay.textContent = userInput;
    preventOverflow(userInput);
}



function changeTheme(themeId) { //changes the calculator and background theme
    document.body.className = `body_theme${themeId}`;
    title.className = `title h1_theme${themeId}`;
    theme.className = `theme theme${themeId}`;
    toggle.className = `toggle toggle_theme${themeId}`;
    screen.className = `calc-display calc-display_theme${themeId}`;
    displayInput.className = `display-input display-input_theme${themeId}`;
    keypad.className = `grid-buttons grid-buttons_theme${themeId}`;
    equal.className = `btn equal equal_theme${themeId}`;
    reset.className = `btn reset reset_theme${themeId}`;
    del.className = `btn del del_theme${themeId}`;

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].attributes[0].value == "del" || buttons[i].attributes[0].value == "Enter"
        || buttons[i].attributes[0].value == "Backspace") {
            continue;
        }
        
        buttons[i].className = `btn btn_theme${themeId}`;
    }
}

function preventOverflow(userInput) {
    while (contentToDisplay.offsetWidth > displayer.offsetWidth) {
        userInput = userInput.slice(1, );
        contentToDisplay.textContent = userInput;
    }
}