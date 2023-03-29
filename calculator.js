
function add(x, y) {
    let output = x + y;
    display.innerHTML = output;
}

function subtract(x, y) {
    let output = x - y;
    display.innerHTML = output;
}

function multiply(x, y) {
    let output = x * y;
    display.innerHTML = output;
}

function divide(x, y) {
    let output = x / y;
    display.innerHTML = output;
}

function operate(n1, o, n2) {
    if(o == '+') {
        return add(n1, n2);
    }
    else if(o == '-') {
        return subtract(n1, n2);
    }
    else if(o == 'x') {
        return multiply(n1, n2);
    }
    else if(o == '&divide') {
        return divide(n1, n2);
    }
}

let display = document.getElementById("display");
let displayArray = [];
let numberArray1 = [];
let numberArray2 = [];
let operator = undefined;

const button = document.querySelector('.equalsButton');
  button.addEventListener('click', () => {
    for(let i = 0; i < displayArray.length; i++)
    {
        if(displayArray[i] == 'x' || displayArray[i] == '&divide' || 
           displayArray[i] == '+' || displayArray[i] == '-') {

            operator = displayArray[i];

            for(let j = 0; j < i; j++) {
                numberArray1.push(displayArray[j]);
            }
            for(let k = i+1; k < displayArray.length; k++) {
                numberArray2.push(displayArray[k]);
            }
            console.log(operator);
        }
    }
    let num1 = parseInt(numberArray1.join(""));
    let num2 = parseInt(numberArray2.join(""));
    console.log(operate(num1, operator, num2));
  });

function populateDisplay(item) {
    display.innerHTML = item;
    displayArray.push(item);
    display.innerHTML = displayArray.join("");
    console.log(displayArray);
    if(item == null) {
        displayArray = [];
        numberArray1 = [];
        numberArray2 = [];
    }
}
