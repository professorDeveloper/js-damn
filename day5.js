/*
 * Copyrig
 * ht (c) 2025.  Azamov
 */

num1=Number(prompt("Enter number1:"))
amal=prompt("Enter amal (+, -, *, /):")
num2=Number(prompt("Enter number2:"))
let result;
switch (amal) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid amal");
        break;
}

if (result !== undefined) {
    document.body.innerHTML = `<h1>${num1} ${amal} ${num2} = ${result}</h1>`
}




