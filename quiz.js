const correctAnswers = ['90', 'right angled']
const formElements = document.querySelector("#quiz-form")
const submitBtn = document.querySelector("#form-submit")
const outputScore = document.querySelector("#score-output")

submitBtn.addEventListener("click",debug)

function debug(){

    const formResults = new FormData(formElements)
    let index = 0
    let score = 0
    for(let value of formResults.values()){
        if(value === correctAnswers[index]){
            score = score + 1
        }
        index = index + 1
    }
    //console.log("Your Final Score is ",score)
    outputScore.innerText = `Your final score is ${score}`

}


