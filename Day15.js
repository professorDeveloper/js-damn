/*
 * Copyright (c) 2025.  Azamov
 */
//
// // Task -1 .
// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
//
//     getInfo() {
//         return `${this.brand}, ${this.model}, ${this.year}`;
//     }
// }
//
// // Task2
// const car1 = new Car("Mersades", "G63", "2020");
// console.log(car1.getInfo());
//
// //Task3
// car1.year = "2025";
// console.log(car1.year); // "2025"
//
// //Task4
// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }
// }
//
//
// // Task7 -
// class Person {
//     constructor(id, active, firstName, lastName, email, lastOn, totalSales) {
//         this.id = id;
//         this.active = active;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.lastOn = lastOn;
//         this.totalSales = totalSales;
//     }
// }
//
// let fakeData = [new Person(1, true, "John", "Doe", "nC0yP@example.com", "2022-01-01", 1000), new Person(2, true, "Jane", "Doe", "0j2oC@example.com", "2022-02-01", 2000), new Person(3, false, "Bob", "Smith", "8V6oM@example.com", "2022-03-01", 3000), new Person(4, true, "Alice", "Johnson", "Y9Tt2@example.com", "2022-04-01", 4000),]
//
// for (data in fakeData) {
//     console.log("==========================")
//     console.log("ID:", fakeData[data].id)
//     console.log("Name:", fakeData[data].firstName + " LastName:" + fakeData[data].lastName)
//     console.log("==========================")
// }
//
// // Task7
//
// class AuthorInfo {
//     constructor(authorInfo) {
//         this.authorInfo = authorInfo
//     }
// }
//
// class Person2 {
//     constructor(id, authorName, age, skillSets, numberOfPosts) {
//         this.id = id;
//         this.authorName = authorName;
//         this.age = age;
//         this.skillSets = skillSets;
//         this.numberOfPosts = numberOfPosts;
//     }
// }
//
// let fakeAuthorInfo = new AuthorInfo([
//     new Person2(1, "Azamov", 17, "Kotlin,Java,C++", 5),
//     new Person2(2, "Saikou", 18, "Golang,C#", 5)])
//
// fakeAuthorInfo.authorInfo.forEach(
//     data => {
//         console.log(
//             "ID:", data.id,
//             "Name:", data.authorName,
//             "Age:", data.age,
//             "SkillSets:", data.skillSets,
//             "NumberOfPosts:", data.numberOfPosts
//         )
//     }
// )
//
//
// //Amaliy mashqlar
//
let students = [{
    name: "Alice", scores: [90, 40, 100]
}, {
    name: "Bob", scores: [90, 30, 100]
}, {
    name: "Charlie", scores: [90, 10, 100]
}]
//
// let topStudent = students[0];
// let yuqoriBal = 0;
//
// for (let student of students) {
//     let total = 0, count = 0;
//
//     for (let score of student.scores) {
//         total += score;
//         count++;
//     }
//
//     let avg = total / count;
//     let passed = avg > 50 ? "Ha" : "Yo‘q";
//
//     console.log(`${student.name} - O‘rtacha: ${avg.toFixed(2)}, O‘tgan: ${passed}`);
//
//     if (avg > yuqoriBal) {
//         yuqoriBal = avg;
//         topStudent = student;
//     }
// }
//
// console.log(`\nEng yuqori ball olgan talaba: ${topStudent.name}  Uning bali: ${yuqoriBal.toFixed(2)}`);
//
//
// //Amaliy task2
// let cart = [
//     {
//         id: 1,
//         name: "Grapes",
//         price: 1233,
//         quantity: 12
//     },
//     {
//         id: 2,
//         name: "Laptop",
//         price: 50,
//         quantity: 3
//     }
// ]
//
//
// // Amaliy mashq-2
// let engQimmatMahsulot = cart[0]
// for (let i = 0; i < cart.length; i++) {
//     if (engQimmatMahsulot.price < cart[i].price) {
//         engQimmatMahsulot = cart[i]
//     }
// }
//
// let totalPrice = -1
// cart.forEach(
//     data => {
//         console.log(
//             "ProductName:" + data.name + " " + "Product price:" + data.price
//         )
//         totalPrice += data.price
//     }
// )
// if (totalPrice >= 100) {
//     console.log(`Barcha mahsulotlar narxi :${total}, Sizda 10 foiz chegirma mavjud`)
//     let removed10Percent = totalPrice - (totalPrice * 0.1)
//     console.log(`Chegirmadagi narx : ${removed10Percent}`)
// } else {
//     console.log(`Barcha mahsulotlar narxi :${totalPrice}`)
// }
// console.log(`Eng qimmat mahsulot ${engQimmatMahsulot.name}`)
//


//Amaliy mashq-3
let products = [{id: 1, name: "Laptop", price: 1200, stock: 10}, {id: 2, name: "Phone", price: 3200, stock: 12}, {
    id: 3, name: "Headphone", price: 2200, stock: 11
},];
let isLoop = true
while (isLoop) {

    let choice = Number(prompt(`     
     1. Mahsulot qo'shish
     2. Mahsulot zahirasini yangilash
     3. Mahsulotni o'chirish
     4. Mahsulotni qidirish
     5. Dasturdan chiqish
    
    Tanlovni kiriting:`));

    if (choice === 1) {
        let productName = prompt("Mahsulot nomini kiriting:");
        let productPrice = Number(prompt("Mahsulot narxini kiriting:"));
        let productStock = Number(prompt("Mahsulot miqdorini kiriting:"));

        let product = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            name: productName,
            price: productPrice,
            stock: productStock
        };

        products.push(product);
        alert("Mahsulot qo'shildi!");
    } else if (choice === 2) {
        let productListStr = "";
        for (let i = 0; i < products.length; i++) {
            productListStr += `ID: ${products[i].id}, Mahsulot nomi: ${products[i].name}, Narxi: ${products[i].price}, Miqdori: ${products[i].stock}\n`;
        }

        alert(`
        Mahsulotlar Ro'yhati:
        ${productListStr}
        `);

        let productId = Number(prompt("Mahsulot ID sini kiriting:"));
        let productNewName = prompt("Mahsulot nomini kiriting:");
        let productNewPrice = Number(prompt("Mahsulot narxini kiriting:"));
        let productNewStock = Number(prompt("Mahsulot miqdorini kiriting:"));

        let found = false;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId) {
                products[i].name = productNewName;
                products[i].price = productNewPrice;
                products[i].stock = productNewStock;
                console.log("Mahsulot zahirasi yangilandi!");
                alert(`
                    Yangilangan mahsulotlar ro'yhati:
                ${productListStr}
                      `);
                found = true;
                break
            }
        }
        if (!found) {
            console.log("Bunday mahsulot mavjud emas.");
        }

    } else if (choice === 3) {
        let productListStr = "";
        for (let i = 0; i < products.length; i++) {
            productListStr += `ID: ${products[i].id}, Mahsulot nomi: ${products[i].name}, Narxi: ${products[i].price}, Miqdori: ${products[i].stock}\n`;
        }
        alert(productListStr);


        let productId2 = Number(prompt("Mahsulot ID sini kiriting:"));
        let found = false;

        for (let i = 0; i < products.length; i++) {
            if (products[i].id === productId2) {
                products.splice(i, 1);
                console.log("Mahsulot o'chirildi!");
                found = true;
            }
        }
        if (!found) {
            console.log("Bunday mahsulot mavjud emas.");
        }
    } else if (choice === 4) {
        let qidiruv = prompt("Mahsulot nomi:").toLowerCase();
        let searchResults = products.filter(product => product.name.toLowerCase().includes(qidiruv));

        if (searchResults.length > 0) {
            let productListStr = "";
            for (let i = 0; i < products.length; i++) {
                productListStr += `ID: ${products[i].id}, Mahsulot nomi: ${products[i].name}, Narxi: ${products[i].price}, Miqdori: ${products[i].stock}\n`;
            }
            alert(productListStr);

        } else {
            alert("Bunday mahsulot topilmadi.");
        }
    } else if (choice === 5) {
        alert("Dasturdan chiqildi.");
        isLoop = false
    } else {

        alert("Bunday tanlov mavjud emas.");
    }
}
