const width=400
const height=400
const angleOffset = - PI/2

//Get svg element
let svg=document.getElementById("base_svg")
console.log(svg)

svg.setAttribute("width", width)
svg.setAttribute("height", height)

//Draw hour hand

//Draw numbers
function drawClockNumbers(svgElement, x, y, radius){
    for(let i= 1; i <=12; i++){
        let angle = angleOffset + TWO_PI/12 * i
        let xPos = x + polarToX(angle, radius)
        let yPos = y + polarToY (angle, radius)

        drawText(svgElement, xPos, yPos, i)
    }

}
function drawClockHand(svgElement, x1, y1, length, ticks){
    let angle = angleOffset +TWO_PI/12 * ticks
    let x2 = x1 + polarToX(angle, length)
    let y2 = y1 + polarToY(angle, length)

    drawBlackLine(svgElement, x1, y1, x2, y2)

}
function drawClock(svgElement, x, y, radius,ticks){
    //draw clock backing
    drawCircle(svgElement, x, y, radius, makeRGB(127,127,126))
    //Draw numbers onto the clock face
    drawClock(svgElement, x, y, radius * 0.9)
    //draw hour hand
    drawClockHand(svgElement, x, y, radius/3, ticks)

}

//drawCircle(svg, width/2, height/2, 100, makeRGB())
//drawLine(svg, 0, 0, width, height)
//drawTxt(svg, width/2, height/2, "Hi")

drawClock(svg, width/2, height/2, 200, 0)

//

//let innerHtmlDemo =  document.getElementById("inner-html-example")
//console.log(innerHtmlDemo)

//let greetings = ""
//for (let i = 0; i < 1000; i++){
//    greetings += "<p>Hi from clock.js</p>"}

//innerHtmlDemo.innerHTML = "Hi from clock.js</p>"

let clickDiv=document.getElementById("clickDiv")
console.log(clickDiv)

let counter = 0
clickDiv.addEventListener("click", function(event){
    svg.appendChild
    counter++
    drawClock(svg, width/2, height/2, 200, counter)
})