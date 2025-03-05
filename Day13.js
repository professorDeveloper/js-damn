/*
 * Copyright (c) 2025.  Azamov
 */


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

//Task 8
let gr201 = ['Bob', "Karl", "Jim"]
let gr202 = ['Elizabeth', "Eric", "Jack"]
let gr203 = ['Anton', "Mark", "Mike"]

let pdpUniversity = gr201.concat(gr202, gr203)
console.log(pdpUniversity)

//Task9
let studentNames = ['Bob', "Karl", "Jim", "Elizabeth", "Eric", "Jack", "Anton", "Mark", "Mike"]
let students = studentNames.filter(name => name.length === 5)
if (students.length > 0) {
    console.log(students[0])
} else {
    console.log("Bunday talaba mavjud emas")
}



//Task10
let dataCount = Number(prompt("Data sonini kiriting:"))
let datas = []
for (let i = 0; i < dataCount; i++) {
    let data = prompt("Data kiriting:")
    datas.push(data)
}
console.log(datas)

//Task11
let studentNames = []
let studentsCount = Number(prompt("O'quvchilar sonini kiriting:"))
for (let i = 0; i < studentsCount; i++) {
    let studentName = prompt("O'quvchi ismini kiriting:")
    if (studentName.length > 3) {
        studentNames.push(studentName)
    } else {
        i = i - 1
        console.log("O'quvchi ismi 3 ta belgidan ko'p bo'lishi kerak qaytadan kiriting !")
    }
}
console.log(studentNames)
//Task12
let n = Number(prompt("Nechta malumot kiritmoqchimisiz ?"))
let datas = []
for (let i = 0; i < n; i++) {
    let data = prompt("Malumot kiriting:")
    if (!datas.includes(data)) {
        datas.push(data)
    }
}
console.log(`Kiritilgan malumotlar ichida ${n - datas.length} ta malumot takrorlanadi`)


//Task13
let n13 = Number(prompt("Nechta malumot kiritmoqchimisiz ?"))
let datas13 = []
for (let i = 0; i < n13; i++) {
    let data = prompt("Malumot kiriting:")
    datas13.push(data)
}
let count13 = 0
for (let i = 0; i < datas13.length; i++) {
    for (let j = i + 1; j < datas13.length; j++) {
        if (datas13[i] === datas13[j]) {
            count13++
        }
    }
}
console.log(n13)
console.log(`Kiritilgan malumotlar ichida ${count13} ta malumot takrorlangan`)


