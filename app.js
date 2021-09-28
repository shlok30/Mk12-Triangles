const inputAngles = document.querySelectorAll(".input-angle")
const button = document.querySelector("#btn")
const output = document.querySelector('#output')

button.addEventListener("click",isTriangle)

function isTriangle(){
    const sum = calculateSumOfAngles(Number(inputAngles[0].value),Number(inputAngles[1].value),Number(inputAngles[2].value))
    if(sum === 180){
        output.innerText = "Yes its a Triangle"
    }
    else{
        output.innerText = "It's not a triangle"
    }
}

function calculateSumOfAngles(angle1,angle2,angle3){
    const sum = angle1 + angle2 + angle3 
    return sum
}

