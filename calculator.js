function add(x, y) {
    let output = x + y;
    output = Math.round(output * 1000) /1000;
    display.innerHTML = output;
    return output;
}

function subtract(x, y) {
    let output = x - y;
    output = Math.round(output * 1000) /1000;
    display.innerHTML = output;
    return output;
}

function multiply(x, y) {
    let output = x * y;
    output = Math.round(output * 1000) /1000;
    display.innerHTML = output;
    return output;
}

function divide(x, y) {
    let output = x / y;
    output = Math.round(output * 1000) /1000;
    display.innerHTML = output;
    return output;
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
    else if(o == '÷') {    
        return divide(n1, n2);
    }
}

let display = document.getElementById("display");
let displayArray = [];
let stringArray = [];
let lastString = [];
let operatorArray = [];
let concatenator = undefined;
let joinedStringArray = [];
let numArray = [];
let finalValue = undefined;


const button = document.querySelector('.equalsButton');
button.addEventListener('click', () => {

    for(let i = 0; i < displayArray.length; i++)
    {
        if(displayArray[i] == 'x' || displayArray[i] == '÷' || 
           displayArray[i] == '+' || displayArray[i] == '-') 
        {  
            operatorArray.push(displayArray[i]);
            delete displayArray[i];

            for(let j = 0; j < i; j++) {
                stringArray.push(displayArray[j]);
                delete displayArray[j];
                 
            }
            
            concatenator = stringArray.join("");
            joinedStringArray.push(concatenator);
            concatenator = [];
            stringArray = [];    
        }
    }

    for(let i = displayArray.length - 1; i > 0; i--) 
    {
        if(displayArray[i] == 'x' || displayArray[i] == '÷' || 
           displayArray[i] == '+' || displayArray[i] == '-') 
        {
            break;
        }
        lastString.push(displayArray[i]);
    }

    lastString = lastString.reverse();
    lastString = lastString.join("");

    console.log(operatorArray);
    console.log(stringArray);
    console.log(joinedStringArray);
    console.log(lastString);

    for(let i = 0; i < joinedStringArray.length; i++)
    {
       let stringToNum = parseFloat(joinedStringArray[i]);
       numArray.push(stringToNum);
    }

    lastString = parseFloat(lastString);
    numArray.push(lastString);
    console.log(numArray);

    calculate(numArray[0]);
    function calculate(num1) {

        for(let i = 0; i < operatorArray.length; i++)
        {
            num1 = operate(num1, operatorArray[i], numArray[i+1]);
        }
        finalValue = num1;
        // num1.toString();
        // display.innerHTML = num1;
        return num1;
    }
    displayArray = [];
    stringArray = [];
    joinedStringArray = [];
    lastString = [];
    operatorArray = [];
    numArray = [];
    display.innerHTML = finalValue;
    finalValue.toString();
    displayArray.push(finalValue);
});

function populateDisplay(item) {
    display.innerHTML = item;
    displayArray.push(item);
    display.innerHTML = displayArray.join("");
    if(item == null) {
        display.innerHTML = "";
        displayArray = [];
        stringArray = [];
        joinedStringArray = [];
        lastString = [];
        operatorArray = [];
        numArray = [];
    }
}
