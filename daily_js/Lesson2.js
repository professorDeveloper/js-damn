/*
 * Copyright (c) 2025.
 */

// let num1 = Number(prompt("Enter number1:"))
// let num2 = Number(prompt("Enter number2:"))

// let bolinma = (num1 / num2) - ((num1 / num2) % 1);
// console.log(`${num1} / ${num2} = ${bolinma} (bolinma)`)
// console.log(`${num1} - ${num2} = ${num1 - num2} (ayirma)`)
// console.log(`${num1} + ${num2} = ${num1 + num2} (yig'indi)`)
// console.log(`${num1} %  ${num2} = ${num1 % num2} (qoldiq)`)
//
// // 1-usul
// num3 = num1
// num1 = num2
// num2 = num3
// console.log(`Num1: ${num1}`)
// console.log(`Num2: ${num2}`)
//
// // 2-usul
// num1 = num1 + num2
// num2 = num1 - num2
// num1 = num1 - num2
// console.log(`Num1: ${num1}`)
// console.log(`Num2: ${num2}`)
//

//Task2

let userNum = prompt('sonni kiriting:')
console.log(`Son juftmi ${userNum % 2 === 0}`)
console.log(`Ikki xonali sonmi  ${userNum > 9 && userNum < 100}`)
console.log(`Ikki xonali musbat sonmi  ${userNum > 0}`)
console.log(`2 xonali juft musbat sonmi ${(userNum % 2 === 0) && (userNum > 9 && userNum < 100) && (userNum > 0)}`)