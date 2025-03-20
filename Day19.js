/*
 * Copyright (c) 2025.  Azamov
 */


makePizza(pizzaName => {
    alert("Pizza tayyorlandi: " + pizzaName)
})

makePay("Azamov", pay => {
    alert(pay)
})

internetConnectionCheker(
    (isOnlineHolati) => {
        alert("Internetga ulandi")
    }, (isOfflineHolati) => {
        alert("Internetga ulanmadi")

    })

let filteredList = customFilterCallback([2, 12, 55, 66, 24, 54, 31, 23, 1, 3], (item, index, arr) => {
    return item % 2 === 0
})

alert('Filtered list: ' + filteredList)

button((msg) => {
    alert(msg)
})

goMarketAndGetSomeThing((msg) => {
    alert("Buyurtma Keldi")
})

function makePizza(callback) {
    alert("Pizza tayyorlanishiga 5 soniya qoldi")
    setTimeout(() => {
        callback("Pizza")
    }, 5000)
}

//
function makePay(userID, callback) {
    alert(`${userID} malumotlari yuklanmoqda`)
    setTimeout(() => {
        callback(`${userID} malumotlari yuklandi to'lov qilindi`)
    }, 10000)
}

function internetConnectionCheker(isOnlineCallback, isOfflineCallback) {
    window.addEventListener("online", () => {
        isOnlineCallback()
    })
    window.addEventListener("offline", () => {
        isOfflineCallback()
    })
}

function customFilterCallback(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function button(onTap) {
    setTimeout(() => {
        onTap("button bosildi")
    }, 5000)
}

function goMarketAndGetSomeThing(callBack) {
    let randomTime = Math.floor(Math.random() * 10000) + 1000;
    alert(`Buyurtma taxminan ${randomTime / 1000} soniyada qabul qilinadi`);
    setTimeout(() => {
        callBack("Buyurtma qabul qilindi")
    }, randomTime)
}