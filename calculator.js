// let num1 = undefined;
// let num2 = undefined;
// let operator = undefined;
function add(x, y) {
    let output = x + y;
    return output;
}

function subtract(x, y) {
    let output = x - y;
    return output;
}

function multiply(x, y) {
    let output = x * y;
    return output;
}

function divide(x, y) {
    let output = x / y;
    return output;
}

function operate(n1, o, n2) {
    if(o == 1) {
        return add(n1, n2);
    }
    else if(o == 2) {
        return subtract(n1, n2);
    }
    else if(o == 3) {
        return multiply(n1, n2);
    }
    else if(o == 4) {
        return divide(n1, n2);
    }
}
console.log(operate(1, 4, 2));