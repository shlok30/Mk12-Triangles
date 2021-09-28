const inputDimension = document.querySelectorAll(".input-dimensions")
const btn =  document.querySelector("#calculate-btn")
const outputHypotenuseLength = document.querySelector("#output-hypotenuse")

btn.addEventListener("click",calculateHypotenuse)

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(inputDimension[0].value),Number(inputDimension[1].value))
    const hypotenuseLength = Math.sqrt(sumOfSquares)
    outputHypotenuseLength.innerText = `Length of Hypotenuse is ${hypotenuseLength}`

}

function calculateSumOfSquares(base,height){
    const hypotenuseSquare = base*base + height*height
    return hypotenuseSquare
}