/*
 * Copyright (c) 2025.  Azamov
 */
//
// // for (let i = 1; i <= 20; i++) {
// //     if (i === 5) {
// //         continue
// //     } else if (i % 2 === 1) {
// //         console.log(i)
// //     }
// // }
//
// //
//
// // Task2
// let matn = "  123123    asdqdqwd   qwdqd  dqwqd   dqwwqdqwd         "
// let lastWord = ""
// let isEnd = false
// for (let i = matn.length - 1; i >= 0; i--) {
//     if (matn[i] !== " ") {
//         lastWord += matn[i]
//         isEnd = true
//     }if (isEnd && matn[i] === " ") {
//         break
//     }
// }
// console.log(lastWord)
//
// //Homework 1
// let count = 0;
// for (let i = 1; i <= 10000; i++) {
//     if (i % 4 === 0) {
//         count++;
//         if (count === 25) continue;
//         console.log(i);
//     }
// }
//
//
// //Homework 2
// // Foydalanuvchidan matn kiritishni so'rash
// let userInput = prompt("Matn kiriting:");
//
// // Raqamlarni sanash
// let countNumbers = 0;
// for (let i = 0; i < userInput.length; i++) {
//     let char = userInput[i];
//     if (char >= '0' && char <= '9') {
//         countNumbers++;
//     }
// }
//
// console.log(`Matnda ${countNumbers} ta raqam bor.`);
//
//
// // Array  in js
//
// const sonlar2 =Array(5)
// console.log(sonlar2)
// console.log(sonlar2[2])
//


function numberCode(x) {
    return x.charCodeAt(0);
}


let indexx = 0;
let harflar = "";
let raqam = 0;
let qaytar = "";
str = "men doim ustozdan savol surayman"

function matnqosh(str) {
    indexx = Math.floor(Math.random() * str.length);
    const alifbo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 5; i++) {
        harflar += alifbo.charAt(Math.floor(Math.random() * alifbo.length));
    }
    return str.slice(0, indexx) + harflar + str.slice(indexx);
}

function shirflash(str) {
    str = removeRandomStr(str, harflar);
    raqam = Math.floor(Math.random() * 20) + 1;
    for (let i of str) {
        let k = numberCode(i) + raqam;
        qaytar += String.fromCharCode(k);
    }
    let randomIndex = Math.floor(Math.random() * (qaytar.length + 1));
    return qaytar.slice(0, randomIndex) + harflar + qaytar.slice(randomIndex);
}

function removeRandomStr(str, removableStr) {
    return str.replace(removableStr, "");
}

function dshifrlash(str, harflarIsAlive) {
    let qaytar = "";
    str = removeRandomStr(str, harflarIsAlive)
    for (let i of str) {
        let k = numberCode(i) - raqam;
        qaytar += String.fromCharCode(k);
    }

    return qaytar;
}

function showMatnAssciCodes(str) {
    let result = "";
    for (let i of str) {
        result += numberCode(i) + ", ";
    }
    console.log(result)
}

function ajrat(str) {
    return str.slice(0, indexx) + str.slice(indexx + 5);
}

let yangiMatn = matnqosh(str);
console.log("Yangi hosil bo'lgan matn : ", yangiMatn);
showMatnAssciCodes(yangiMatn)
console.log("Qo'shilgan harflar : ", harflar);

let shrif = shirflash(yangiMatn);
console.log("Shifrlangan matn : ", shrif);
showMatnAssciCodes(shrif)

let QaytaShifr = dshifrlash(shrif, harflar);
console.log("Deshifrlangan malumot : ", QaytaShifr);
console.log("Qo'shilgan harflar : ", harflar);

let aslmatnn = ajrat(QaytaShifr);
console.log("Asl malumot : ", aslmatnn);

