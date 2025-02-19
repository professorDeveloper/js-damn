/*
 * Copyright (c) 2025.  Azamov
 */

let num = prompt("Enter number:");


let bolinma5 = num % 5 === 0;
let is3Xonali = num.length === 3;
let is3XonaliMusbat = num > 99 && num < 1000;
let is4XonaliManfiyJuft = num % 2 === 0 && num.length === 4;

console.log(`Raqam 5 ga bolinadimi :${bolinma5}`)
console.log(`Raqam 3 xonalimi :${is3Xonali}`)
console.log(`Raqam 3 xonali musbatmi  :${is3XonaliMusbat}`)
console.log(`Raqam 4 xonali manfiymi  :${is4XonaliManfiyJuft}`)


// Another Task
//Task-1
let a = 10
console.log(`Birinchi qiymat ${a}`)

a = 20;
console.log(`2-qiymat :${a}`)

//Task-2
let b = 1 + 2 + 3;
console.log("b ning qiymati:", b);

//Task-3
let a3 = 1.5;
let b3 = 0.75;
let result3 = a3 + b3;
console.log("Natija: " + result3)

// Task4
let a4 = 13;
let b4 = 5;
console.log(`Qoldiq: ${a4 % b4}`)

//Task-5
let num5 = 2;
console.log(`${num5} ning 10 darajasi : ${num5 ** 10}`)


//Task-6
const PI = 3.14;
let radius = 12;
let area = PI * radius * radius;
let perimeter = 2 * PI * radius;
console.log(`${radius} dagi aylananing yuzi ${area}`)
console.log(`${radius} dagi aylananing perimetri ${perimeter}`)


//Task-7
let a7 = `` + 3 + 1;
console.log(a7)

//https://hate.tg/

//Task-7
let a8 = 123;
let radar = 100 <= a8
console.log("Radarning javobi: " + radar)


// Task7  in lesson
let kasrliSonmi = 12.13;
let son = kasrliSonmi % 1 !== 0 && kasrliSonmi < 0 && kasrliSonmi < -99 && kasrliSonmi > -1000;

//Task-8
let a9 = 223;
let radar2 = 40 >= a9 || 200 <= a9
console.log("Radarning javobi: " + radar2)

