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