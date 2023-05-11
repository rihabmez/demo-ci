function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error('Division par zéro');
    }
    return num1 / num2;
}

function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let result;
    if (document.getElementById('btn-plus').checked) {
        result = add(num1, num2);
    } else if (document.getElementById('btn-minus').checked) {
        result = subtract(num1, num2);
    } else if (document.getElementById('btn-times').checked) {
        result = multiply(num1, num2);
    } else if (document.getElementById('btn-divide').checked) {
        result = divide(num1, num2);
    }
    document.getElementById('result').value = result;
}
module.exports = { add, subtract, multiply, divide };
