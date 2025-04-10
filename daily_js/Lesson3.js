/*
 * Copyright (c) 2025.  Azamov
 */

let test = 14;
if (test > 10) { // 1-masala
    console.log("Test 10 dan katta")
} else if (test < 10) { //2-masal
    console.log("Test 10 dan kichik")
} else if (test === 10) { //3-masala
    console.log("Test 10 ga teng")
} else if (test >= 10) {//4-masala
    console.log(" Test 10 dan katta yoki teng")
} else if (test !== 10) { //5-masala
    console.log("Test 10 ga teng emas")
}

//6-masala
let test1 = 14;
let test2 = 15;
if (test1 > test2) {
    console.log(`${test1} katta ${test2} dan`)
}

//7-masala
if (test1 !== test2) {
    console.log(`${test1} va ${test2} teng emas `)
} else {
    console.log(`${test1} va ${test2} teng `)
}

//11-masala
let num = 12;
if (num < 5 && num > 0) {
    console.log(`${num} soni 5 dan kichik va 0 dan katta `)
}
//12 -masala
if (num >= 10 && num <= 20) {
    console.log(`${num} soni 10 dan katta va 20 dan kichik `)
}

//13-masala
let num1 = 14;
let num2 = 14;
if (num1 <= 1 && num2 <= num1) {
    console.log(`${num1}  soni 1 dan kichik va ${num2} dan katta yoki teng`)
}
//14-masala
if (num1 <= 1 && num2 >= 3) {
    console.log(`${num1} 1 dna kichik yoki teng va ${num2} 3 dan katta yoki teng`)
}

// 15-16-masala tushuntirish

// 17-masala
let kun = 24;
if (kun <= 31) {

    let haftaKuni = (kun) % 7;

    if (haftaKuni === 1) {
        console.log("Dushanba")
    } else if (haftaKuni === 2) {
        console.log("Seshanba")
    } else if (haftaKuni === 3) {
        console.log("Chorshanba")
    } else if (haftaKuni === 4) {
        console.log("Payshanba")
    } else if (haftaKuni === 5) {
        console.log("Juma")
    } else if (haftaKuni === 6) {
        console.log("Shanba")
    } else if (haftaKuni === 7) {
        console.log("Yakshanba")
    }
} else {
    console.log("Kun 31 dan kichik yoki teng  bolish kerak")
}

//18-masala   tepadagi kodda bajarildi

//19-masala
let num19 = 12;
if (num19 > 10 && num19 <= 99) {
    let birlar = num19 % 10
    let onlar = (num19 / 10)
    let yigindi = birlar + onlar
    if (yigindi <= 9) {
        console.log(`${num19} soning Raqamlar yig'indisi 1 xonali`)
    } else {
        console.log(`${num19} soning raqamlar yig'indisi 2 xonali`)
    }
} else {
    console.log("Kiritilgan raqam 2 xonali bolishi kerak")
}

//20 masala
let oy = 2
let kun = 1


let monthOfDay = 31;
if (oy === 2) {
    monthOfDay = 28;
}
if (oy === 4 || oy === 6 || oy === 9 || oy === 11) {
    monthOfDay = 30;
}

if (oy < 1 || oy > 12) {
    console.log("Noto‘g‘ri oy kiritildi!")
}
if (kun < 1 || kun > monthOfDay) {
    console.log("Notogri kun kiritildi")
}

let jamiKunlar = 0;

if (oy > 1) {
    jamiKunlar += 31;
}
if (oy > 2) {
    jamiKunlar += 28;
}
if (oy > 3) {
    jamiKunlar += 31;
}
if (oy > 4) {
    jamiKunlar += 30;
}
if (oy > 5) {
    jamiKunlar += 31;
}
if (oy > 6) {
    jamiKunlar += 30;
}
if (oy > 7) {
    jamiKunlar += 31;
}
if (oy > 8) {
    jamiKunlar += 31;
}
if (oy > 9) {
    jamiKunlar += 30;
}
if (oy > 10) {
    jamiKunlar += 31;
}
if (oy > 11) {
    jamiKunlar += 30;
}

jamiKunlar += kun;
let haftaKuni = jamiKunlar % 7;
if (haftaKuni === 1) {
    console.log("Chorshanba")
}
if (haftaKuni === 2) {
    console.log("Payshanba")
}
if (haftaKuni === 3) {
    console.log("Juma")
}
if (haftaKuni === 4) {
    console.log("Shanba")
}
if (haftaKuni === 5) {
    console.log("Yakshanba")
}
if (haftaKuni === 6) {
    console.log("Dushanba")
}
if (haftaKuni === 7) {
    console.log("Seshanba")
}

