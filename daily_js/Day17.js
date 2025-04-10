/*
 * Copyright (c) 2025.  Azamov
 */

const productts = [];

let countProduct = 0;

function addProduct() {
    let name = prompt("Product  nomini kiriting:");
    let narx = parseFloat(prompt("Product  narxini kiriting:"));
    let soni = parseInt(prompt("Product  sonini kiriting:"), 10);

    if (isNaN(narx) || isNaN(soni)) {
        alert("Product  Narxi va Soni  raqam bo`lishi kerak!");
        return;
    }

    countProduct++;
    let newProduct = {
        id: countProduct, name: name, price: narx, count: soni,

    };

    productts.push(newProduct);
    alert("Product  qo'shildi!");
}

function getAlertText() {
    let alertText = "Product lar ro'yxati:\n";
    productts.forEach((mahsulot) => {
        alertText += `ID: ${mahsulot.id}, Nomi: ${mahsulot.name}, Narxi: ${mahsulot.price} so'm, \n`
    });
    return alertText
}

function showProducts() {
    if (productts.length === 0) {
        alert("Product list bo`sh.");
        return;
    }

    let alertText = "Product lar ro'yxati:\n";
    productts.forEach((mahsulot) => {
        alertText += `ID: ${mahsulot.id}, Nomi: ${mahsulot.name}, Narxi: ${mahsulot.price} so'm, \n`
    });
    alert(alertText);
}


function removeProduct() {
    if (productts.length === 0) {
        alert("Product list bo`sh.");
    } else {
        let id = parseInt(prompt(`
    ${getAlertText()}
    Removed product id :`), 10);
        let index = productts.findIndex((mahsulot) => mahsulot.id === id);

        if (index !== -1) {
            productts.splice(index, 1);
            alert("Product  o'chirildi !");
        } else {
            alert("Product id not found !");
        }
    }
}

function findProducts() {
    let name = prompt("Product Name:");
    if (foundedProducts.length > 0) {

        let foundedProducts = productts.filter((product) => name.startsWith(product.name) && product.name.length >= 3);
        let alertText = "Founded products:\n";
        foundedProducts.forEach((product) => {
            alertText += "ID: " + product.id + ", Nomi: " + product.name + ", Narxi: " + product.price + " so'm, \n";
        });
        alert(alertText);
    } else {
        alert("Product id xato");
    }
}


function updateProducts() {
    if (productts.length === 0) {
        alert("Product list bo`sh.");
    } else {
        let id = parseInt(prompt(`
    ${getAlertText()}
    Enter product id:
    `));
        let product = productts.find((product) => product.id === id);

        if (!product) {
            alert("Product id xato");
            return;
        }

        let productNewCount = parseInt(prompt(`"${product.name}" new sonini kiriting:`), 10);
        if (isNaN(productNewCount)) {
            alert("Product soni raqam bo`lishi kerak");
            return;
        }

        product.soni = productNewCount;
        alert("Product soni yangilandi!");

    }
}


function loadDashboard() {
    while (true) {
        let choice = prompt("1. Product  qo'shish\n" + "2. Product larni ko'rish\n" + "3. Product ni ID bo‘yicha o‘chirish\n" + "4. Product ni  qidirish\n" + "5. Product  sonii yangilash\n" + "6. Chiqish\n" + "Tanlovingizni kiriting:");

        switch (choice) {
            case "1":
                addProduct();
                break;
            case "2":
                showProducts();
                break;
            case "3":
                removeProduct();
                break;
            case "4":
                findProducts();
                break;
            case "5":
                updateProducts();
                break;
            case "6":
                alert("Dastur yopildi.");
                return;
            default:
                alert("Noto'g'ri tanlov !");
        }
    }
}

loadDashboard();
