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
let stringArray = [];
let lastString = [];
// let operator = undefined;
let operatorArray = [];
let concatenator = undefined;
let numArray = [];


const button = document.querySelector('.equalsButton');
button.addEventListener('click', () => {

    // for(let i = 0; i < displayArray.length; i++)
    // {
    //     if(displayArray[i] == 'x' || displayArray[i] == '&divide' || 
    //        displayArray[i] == '+' || displayArray[i] == '-') {
            
    //         operator = displayArray[i];

    //         for(let j = 0; j < i; j++) {
    //             numberArray1.push(displayArray[j]);
    //         }
    //         for(let k = i+1; k < displayArray.length; k++) {
    //             if(displayArray[k] == 'x' || displayArray[k] == '&divide' || 
    //                displayArray[k] == '+' || displayArray[k] == '-') {
    //                 operatorArray.push(displayArray[k]);
    //             }
    //             numberArray2.push(displayArray[k]);
    //         }
    //     }
    // }
    // let num1 = parseInt(numberArray1.join(""));
    // let num2 = parseInt(numberArray2.join(""));
    // operate(num1, operator, num2);


     for(let i = 0; i < displayArray.length; i++)
    {
        if(displayArray[i] == 'x' || displayArray[i] == '&divide' || 
           displayArray[i] == '+' || displayArray[i] == '-') 
        {  
            operatorArray.push(displayArray[i]);
            delete displayArray[i];

            for(let j = 0; j < i; j++) {
                stringArray.push(displayArray[j]);
                delete displayArray[j];
                 
            }
            
            concatenator = stringArray.join("");
            numArray.push(concatenator);
            concatenator = [];
            stringArray = [];    
        }
    }
    for(let k = displayArray.length - 1; k > 0; k--) 
    {
        if(displayArray[k] == 'x' || displayArray[k] == '&divide' || 
           displayArray[k] == '+' || displayArray[k] == '-') 
        {
            break;
        }
        lastString.push(displayArray[k]);
    }
    lastString = lastString.reverse();
    lastString = lastString.join("");

        console.log(operatorArray);
        console.log(stringArray);
        console.log(numArray);
        console.log(displayArray);
        console.log(lastString);
    // let num1 = parseInt(numberArray1.join(""));
    // operate(num1, operator, num2);
    
});


function populateDisplay(item) {
    display.innerHTML = item;
    displayArray.push(item);
    display.innerHTML = displayArray.join("");
    if(item == null) {
        display.innerHTML = "";
        displayArray = [];
        stringArray = [];
        numArray = [];
    }
}
