


/*let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })
})*/

let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}





/*const inputValue = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (inputValue.innerText === "NaN") {
        inputValue.innerText = "";
      }
      if (inputValue.innerText === "0") {
        inputValue.innerText = "";
      }
      inputValue.innerText += e.target.innerHTML.trim();
    });
  });

  const calculate = document
  .querySelectorAll(".operations")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      console.log(e.target.innerHTML);
    });
  });

  let lastValue = inputValue.innerText.substring(inputValue.innerText.length, inputValue.innerText.length - 1);

if (!isNaN(lastValue) && e.target.innerHTML === "=") {
    inputValue.innerText = eval(inputValue.innerText);
} else if (e.target.innerHTML === "AC") {
    inputValue.innerText = 0;
} else if (e.target.innerHTML === "DEL") {
    inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length - 1);
    if (inputValue.innerText.length == 0) {
        inputValue.innerText = 0;
    }
} else {
    if (!isNaN(lastValue)) {
        inputValue.innerText += e.target.innerHTML;
    }
}*/




/*const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("num"));
const operators = Array.from(document.getElementsByClassName("operator"));
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const equals = document.getElementById("equals");

let currentNum = "";
let prevNum = "";
let result = null;
let currentOperator = null;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

const updateDisplay = () => {
  display.value = currentNum;
};

const clearAll = () => {
  currentNum = "";
  prevNum = "";
  result = null;
  currentOperator = null;
  updateDisplay();
};

const deleteLastChar = () => {
  currentNum = currentNum.slice(0, -1);
  updateDisplay();
};

const appendNumber = (event) => {
  currentNum += event.target.value;
  updateDisplay();
};

const chooseOperator = (event) => {
  if (currentOperator !== null) {
    prevNum= parseFloat(currentNum);
    currentNum = "";
    result = operate(currentOperator, prevNum, parseFloat(currentNum));
  }
  currentOperator = event.target.value;
};

const calculateResult = () => {
  if (currentOperator === null || result === null) {
    return;
  }
  prevNum = parseFloat(currentNum);
  currentNum = "";
  result = operate(currentOperator, prevNum, parseFloat(currentNum));
  updateDisplay();
};

buttons.forEach((button) => {
  button.addEventListener("click", appendNumber);
});

operators.forEach((operator) => {
  operator.addEventListener("click", chooseOperator);
});

decimal.addEventListener("click", appendNumber);

clear.addEventListener("click", clearAll);

deleteButton.addEventListener("click", deleteLastChar);

equals.addEventListener("click", calculateResult);*/

/*function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
*/ 