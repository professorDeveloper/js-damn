/*
 * Copyright (c) 2025.  Azamov
 */

let count = 0
let plusBtn = document.getElementById("count_plus")
let minusBtn = document.getElementById("count_minus")

plusBtn.addEventListener(
    "click",
    function () {
        count += 1
        document.getElementById("textCount").innerHTML = "Count: " + count
    }
)
minusBtn.addEventListener("click", function () {
    count -= 1
    document.getElementById("textCount").innerHTML = "Count: " + count
})
