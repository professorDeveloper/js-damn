/*
 * Copyright (c) 2025.  Azamov
 */
//Task1 For
for (let i = 1; i <= 10; i++) {
    console.log(i)
}
//Task1 While
let i = 1
while (i <= 10) {
    console.log(i)
    i++
}

//Task1 Do While
do {
    console.log(i)
    i++
} while (i <= 10);

//Task2
karraSon = Number(prompt("Num:"))
for (let i = 1; i <= karraSon; i++) {
    console.log(`${i}x${karraSon}=${i * karraSon}`)
}
//Task2 While
let i2 = 1
while (i2 <= karraSon) {
    console.log(`${i2}x${karraSon}=${i2 * karraSon}`)
    i2++
}

//Task2 Do While
do {
    console.log(`${i2}x${karraSon}=${i2 * karraSon}`)
    i2++
} while (i2 <= karraSon);

//Task3
let num3 = 20;
for (let i = 1; i <= num3; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//Task3 while
let i3 = 1
while (i3 <= num3) {
    if (i3 % 2 === 0) {
        console.log(i3)
    }
    i3++
}
//Task3 Do While
do {
    if (i3 % 2 === 0) {
        console.log(i3)
    }
    i3++
} while (i3 <= num3);


//Task4
let a = 10;
let b = 20;
let sum = 0;

for (let i = a; i <= b; i++) {
    sum += i
}
console.log(sum)

//Task4 While
let i4 = a
let sum4 = 0
while (i4 <= b) {
    sum4 += i4
    i4++
}
console.log(sum4)
//Task4 Do While
let i4Do = a
let sum5 = 0
do {
    sum5 += i4Do
    i4Do++
} while (i4Do <= b);
console.log(sum5)

//Task5
let n = 30;
for (let i = 1; i <= n; i++) {
    if (i % n === 0) {
        console.log(i)
    }
}
//Task5 while
let i5 = 1
while (i5 <= n) {
    if (i5 % n === 0) {
        console.log(i5)
    }
    i5++
}
//Task5 Do While
let i5Do = 1
do {
    if (i5Do % n === 0) {
        console.log(i5Do)
    }
    i5Do++
} while (i5Do <= n);

//Task6 For
let n6 = 30;
let sum6 = 0;
for (let i = 1; i < n6; i++) {
    if (i % n6 === 0) {
        sum6 += 1
    }
}
console.log(sum6 === n6 ? "Mukammal Sone" : "Mukammal Son emas")

//Task6 While
let i6 = 1
let sum6While = 0
while (i6 < n6) {
    if (i6 % n6 === 0) {
        sum6While += 1
    }
    i6++
}
console.log(sum6While === n6 ? "Mukammal Sone" : "Mukammal Son emas")

//Task6 Do While
let i6Do = 1
let sum6Do = 0
do {
    if (i6Do % n6 === 0) {
        sum6Do += 1
    }
    i6Do++
} while (i6Do < n6);
console.log(sum6Do === n6 ? "Mukammal Sone" : "Mukammal Son emas")

//Task7
let n7 = 30;
let sum7 = 0;
for (let i = 1; i <= n7; i++) {
    sum7 += i;
}
console.log(`${n7} sonining raqamlari yig'indisi` + sum7)

//Task7 While
let i7 = 1
let sum7While = 0
while (i7 <= n7) {
    sum7While += i7;
    i7++
}
console.log(`${n7} sonining raqamlari yig'indisi` + sum7While)

//Task7 Do While
let i7Do = 1
let sum7Do = 0
do {
    sum7Do += i7Do;
    i7Do++
} while (i7Do <= n7);
console.log(`${n7} sonining raqamlari yig'indisi` + sum7Do)

//Task8
let number = Number(prompt("Enter number:"))
let max = number;
for (let i = 1; 0 !== number; i++) {
    number = Number(prompt("Enter number:"))
    if (number > max) {
        max = number
    }
}
console.log(max)
//Task8 While
let numberWhile = Number(prompt("Sonni kiriting:"))
let maxWhile = numberWhile;
let i8 = 1
while (0 !== numberWhile) {
    numberWhile = Number(prompt("Sonni kiriting:"))
    if (numberWhile > maxWhile) {
        maxWhile = numberWhile
    }
    i8++
}
console.log(maxWhile)
//Task8 Do While
let numberDo = Number(prompt("Sonni kiriting:"))
let maxDo = numberDo;
let i8Do = 1
do {
    numberDo = Number(prompt("Sonni kiriting:"))
    if (numberDo > maxDo) {
        maxDo = numberDo
    }
    i8Do++
} while (0 !== numberDo);
console.log(maxDo)