/*
 * Copyright (c) 2025.  Azamov
 */

// let massive =[1,2,3,4,4]
// Location.call(
//
// )

const sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(sonlar);
// sonlar.unshift(12, 123, 123)
//
// console.log(sonlar);
//
// sonlar.splice(0,-1,-11)
// console.log(sonlar)
//
// // sonlar.push(12, 123, 123)
// console.log(sonlar)

// sonlar.concat(3)

// console.log(sonlar.every((value) => value % 2 === 0));

// Task - 1,2
arrayA = [1, 2, 3, 4, 5, 6]
arrayA[0] = 100
arrayA.push(60)
console.log(arrayA[arrayA.length - 1])

// Task3
mevalar = ['anor', 'nok', 'behi', 'olma']
console.log(mevalar.some(meva => meva === 'olma'));

//Task4
const checkMusbat = sonlar.every(value => value > 0)
if (checkMusbat) {
    console.log("Musbat sonlar hammasi")
} else {
    console.log("Musbat sonlar hammasi emas")
}

//Task5
let sum = 0;
sonlar.forEach(value => {
    if (value % 2 === 1) {
        sum += value
    }
})
console.log(sum)

//Task6
// i do`nt understand that

//Taks7
let a = [1, 2, 3, 4, 5]
console.log(a.join('_'));
