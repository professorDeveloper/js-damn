/*
 * Copyright (c) 2025.  Azamov
 */

const Student = {
    id: 1, subject: ["fullStack", "ITS"], grades: {
        its: 4, fullStack: 3, english: 1,
    }, info: {
        name: "Azamov", age: 20, phone: "+99890876543"
    }
}

let {name, age, phone} = Student.info
console.log(`Student name :${name}`)
console.log(`Student subjects ${age}`)


class MathTeacher {
    constructor(name, age, phone, salary, totalSubjectCount) {
        this.name = name
        this.age = age
        this.phone = phone
        this.salary = salary
        this.totalSubjectCount = totalSubjectCount

    }
}