/*
 * Copyright (c) 2025.  Azamov
 */


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//     }
// }
// console.log(sum);

//shunday funksiya yarating  funksiya ichida userdan prompt orqali  son olinsin. va shu olingan son callback funksiyaga berilsin


customPrompt(num => {
    console.log(num)
})

function customPrompt(callBack) {
    let num = Number(prompt("Num:"))
    callBack(num)
}