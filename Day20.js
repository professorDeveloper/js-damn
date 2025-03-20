/*
 * Copyright (c) 2025.  Azamov
 */
let count = 0
let questionsList = []
let history = []

setupMain()

function removeQuestion() {
    let questionId = Number(prompt("Savol ID sini kiriting:"))
    let questionData = checkQuestionByID(questionId)
    if (questionData) {
        questionsList.splice(questionsList.indexOf(questionData), 1)
        alert("Savol o'chirildi!")
    }else {
        alert("Bunday savol mavjud emas !")
    }
}

function printHistory() {
   if (history.length > 0) {
       let historyStr = ``
       for (let i = 0; i < history.length; i++) {
           historyStr += `Savollar soni: ${history[i].totalQuestion}\n`
           historyStr += `To'g'ri javoblar soni: ${history[i].totalCorrect}\n`
           historyStr += `Xato javoblar soni: ${history[i].totalWrong}\n`
           historyStr += `Savollar soni: ${history[i].date}\n\n`

       }
       alert(historyStr)
   }else {
       alert("Tarix bo'sh !")
   }
}

function setupMain() {
    while (true) {
        let choice = prompt("1. Savol qo'shish\n2. Savollar ro'yxatini ko'rish\n3. Savolni o'zgartirish\n4. Testni boshlash \n5. Savolni o'chirish \n6. Tarix \n7. Chiqish")
        switch (choice) {
            case "1":
                addQuestion()
                break
            case "2":
                questionsListPrint()
                break
            case "3":
                updateTest()
                break
            case "4":
                doTest()
                break
            case "5" :
                removeQuestion()
                break
            case "6":
                printHistory()
                break
            case "7":
                alert("Dastur yopildi.")
                return
        }

    }

    function addQuestion() {
        let question = prompt("Savolni kiriting:")
        let options = {
            a: prompt("A variantini kiriting:"),
            b: prompt("B variantini kiriting:"),
            c: prompt("C variantini kiriting:"),
            d: prompt("D variantini kiriting:")
        }
        let answer = prompt("Javobni Variantini kiriting:")
        questionsList.push({
            id: ++count,
            question, answer, options
        })
        alert("Savol qo'shildi !")
    }

    function doTest() {
        let score = 0
        for (let i = 0; i < questionsList.length; i++) {
            let answer = prompt(questionsList[i].question + "\n" + `A:` + questionsList[i].options.a + "\n" + "B: " + questionsList[i].options.b + "\n" + "C: " + questionsList[i].options.c + "\n" + "D: " + questionsList[i].options.d)
            if (answer.toLowerCase() === questionsList[i].answer.toLowerCase()) {
                score++
                alert("To`g`ri javob")
            }else  {
                alert("Xato javob !")
            }
        }
        history.push({
            totalCorrect: score,
            totalWrong: questionsList.length - score,
            totalQuestion: questionsList.length,
            date: new Date()
        })
        alert("Sizning natijangiz: " + score + " / " + questionsList.length)
    }

    function updateTest() {
        let questionId = Number(prompt("Savol ID sini kiriting:"))
        let questionData = checkQuestionByID(questionId)
        if (questionData) {
            let newQuestion = prompt("Yangi savolni kiriting:")
            let newOptions = {
                a: prompt("A variantini kiriting:"),
                b: prompt("B variantini kiriting:"),
                c: prompt("C variantini kiriting:"),
                d: prompt("D variantini kiriting:")
            }
            let newAnswer = prompt("Javob Variantni kiriting:")
            questionData.question = newQuestion
            questionData.answer = newAnswer
            questionData.options = newOptions
            questionsList.splice(questionsList.indexOf(questionData), 1, questionData)
            alert("Savol yangilandi!")
        }
    }

    function questionsListPrint() {
       if (questionsList.length > 0) {
           let questionListStr = ``
           for (let i = 0; i < questionsList.length; i++) {
               questionListStr += `ID: ${questionsList[i].id}, Savol: ${questionsList[i].question}, Javob: ${questionsList[i].answer}\n`
           }
           alert(questionListStr)
       }else {
           alert("Savollar ro'yxati bo'sh !")
       }
    }

    function checkQuestionByID(questionId) {
        for (let i = 0; i < questionsList.length; i++) {
            if (questionsList[i].id === questionId) {
                return questionsList[i]
            }
        }
        return null
    }
}