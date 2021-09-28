const inputDimension = document.querySelectorAll(".input-dimensions")
const btn =  document.querySelector("#calculate-btn")
const outputArea = document.querySelector("#output-area")

btn.addEventListener("click",calculateArea)

function calculateArea(){
    const area = 1/2 * Number(inputDimension[0].value) * Number(inputDimension[1].value)
    outputArea.innerText = `Area of Triangle is ${area}`

}
