function myNumpadCalc() {
    const divClassTop = document.getElementsByClassName('top');
    const buttonClear = document.getElementsByClassName('clear')[0];
    const screen = document.getElementById('expressionOutput');
    const buttons = document.querySelectorAll("button[type=button]");
    const resultOutput = document.getElementById('resultOutput');


    for (let i = 1; i < buttons.length; i++) {
        if (buttons[i].innerHTML === '=') {
            buttons[i].addEventListener("click", calculate())
        } else {
            buttons[i].addEventListener("click", addCurrentValue(i))
        }
    }

    function addCurrentValue(i) {
        return function () {
            if (buttons[i].innerHtml === "/") {
                screen.innerHtml += " / ";

            } else if (buttons[i].innerText === "x") {
                screen.innerHTML += ' * ';
            } else {
                screen.innerHTML += buttons[i].innerHTML;
            }
        }
    }
    function calculate() {
        return function () {
            resultOutput.innerHTML = eval(screen.innerHTML);
        }
    }

    buttonClear.onclick = function () {
        screen.innerHTML = "";
        resultOutput.innerHTML = "";
    }
}


function numpadCalc() {
    const keys = Array.from(document.getElementsByClassName('keys'));
    const expressionOutput = document.getElementById('expressionOutput');
    const result = document.getElementById('resultOutput');
    const clearButton = document.querySelector('.clear');
    let operand;
    let firstNumber = '';
    let secondNumber = '';

    const calculator = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    keys.map(key => key.addEventListener('click', function (evt) {
        const currentSelection = evt.target.value;

        clearButton.addEventListener('click', () => {
            expressionOutput.textContent = '';
            result.textContent = '';
            firstNumber = '';
            secondNumber = '';
            operand = '';
        })

        if (+currentSelection || currentSelection === '.' || currentSelection == '0') {
            if (!operand) {
                firstNumber += currentSelection;
                expressionOutput.textContent += currentSelection;
            } else {
                secondNumber += currentSelection;
                expressionOutput.textContent += currentSelection
            }
        } else if (calculator.hasOwnProperty(currentSelection)) {
            operand = currentSelection;
            expressionOutput.textContent += ` ${operand} `;
        } else if (currentSelection == '=') {
            if (+firstNumber && +secondNumber) { //check if both are valid nums
                result.textContent = calculator[operand](+firstNumber, +secondNumber);
            } else {
                result.textContent = 'NaN';
            }
        }
    }))
}