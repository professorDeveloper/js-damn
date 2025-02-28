/*
 * Copyright (c) 2025.  Azamov
 */

// for (let i = 1; i <= 20; i++) {
//     if (i === 5) {
//         continue
//     } else if (i % 2 === 1) {
//         console.log(i)
//     }
// }

//

// Task2
let matn = "  123123    asdqdqwd   qwdqd  dqwqd   dqwwqdqwd         "
let lastWord = ""
let isEnd = false
for (let i = matn.length - 1; i >= 0; i--) {
    if (matn[i] !== " ") {
        lastWord += matn[i]
        isEnd = true
    }if (isEnd && matn[i] === " ") {
        break
    }
}
console.log(lastWord)

//Homework 1
let count = 0;
for (let i = 1; i <= 10000; i++) {
    if (i % 4 === 0) {
        count++;
        if (count === 25) continue;
        console.log(i);
    }
}


//Homework 2
// Foydalanuvchidan matn kiritishni so'rash
let userInput = prompt("Matn kiriting:");

// Raqamlarni sanash
let countNumbers = 0;
for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i];
    if (char >= '0' && char <= '9') {
        countNumbers++;
    }
}

console.log(`Matnda ${countNumbers} ta raqam bor.`);


// Array  in js

const sonlar2 =Array(5)
console.log(sonlar2)
console.log(sonlar2[2])

