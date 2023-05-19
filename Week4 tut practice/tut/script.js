
let i = 0;
while(i > -2){
    console.log("hi", i)
    //...
    i--
}

//...

for(let i = 5; i> -2; i--){
    console.log("Greetings", i)
}

//..
for(let i=0; i<19; i++){
    if(i%2===0){
        console.log("Even:",i)
    }
    else if(i % 2!==0){
        console.log("odd:",i)
    }
}

//ternary: condition ? Yes : No
let noBranch = 2 <1 ? "true" : "false"
let yesBrach = 2 > 1? "true": "false"

console.log("constrainHigh(50, 20, 90)", constrainHigh(50, 20, 90))
console.log("constrainHigh(80, 20, 90)", constrainHigh(80, 20, 90))

console.log("constrainLow(50, 20, 0)", constrainHigh(50, 20, 0)) // shold be 30
console.log("constrainLow(10, 20, 0)", constrainHigh(10, 20, 0)) // shold also be 30, not -10

//
//Random walker code
//

let svg = document.getElementById("base_svg")
console.log(svg)

let width=600
let height=600
svg.setAttribute("width",width)
svg.setAttribute("height",height)

function drawCircle(x, y, radius) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    //Set attributes
    circle.setAttribute("cx",x)
    circle.setAttribute("cy",y)
    circle.setAttribute("r",radius)
    circle.setAttribute("fill",makeRGB())

    svg.appendChild(circle)
}


//This function just draws a line between the coordinates x1,y1 and x2, y2
function drawLine(x1, y1, x2, y2) {
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "2");
    svg.appendChild(newLine);
}

function drawRandomWalk(startX, startY, stepLimit){
    let currentX = startX
    let currentY = startY
    for (let step = 0; step < stepLimit; step++) {
        let direction = Math.random()
        let stepSize = randomInt(width/10)

        let nextX = currentX
        let nextY = currentY
        if(direction < 0.25) {
            nextX = constrainHigh(currentX, 20, width)
        }
        else if (direction <0.5){
            nextX = constrainLow(currentX, stepSize, 0)
        }
        else if (direction < 0.75){
            nextY=constrainHigh(currentY, stepSize, height)
        }
        else {
            nextY=constrainLow(currentY, stepSize, 0)
        }

        drawLine(currentX,currentY,nextX,nextY)
        drawCircle(nextX,nextY,5)

        currentX=nextX
        currentY=nextY
    }
}

//Create the design

drawRandomWalk(width/2, height/2, 200)