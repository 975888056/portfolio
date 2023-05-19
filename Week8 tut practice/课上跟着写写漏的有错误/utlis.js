console.log("hi from utlis.js")

//Format RGB values into an rgb() color string.
//formatRGB(10,30.40)

function formatRGB(r, g, b){
    console.log("hi from formatRGB!")
    return `rgb(${r},${g},${b})`
}

//Generate a random colour
Math.round(Math.random()*255)

//Generate a random width?
Math.round(Math.random()*600)

//randomInt(255)
function randomInt(limit) {
    return Math.round(Math.random()*limit)
}

//Tutorial exercise 2
function makeRGB(redInput, greenInput, blueInput){
    //process
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    //Output
    return `rgb(${redOutput},${greenOutput},${blueOutput})`
}

//week 4 (before are copied from week 3)

function constrainHigh(start, step, limit){
    if(start + step < limit){
        return start + step
    }
    else{
        return start - step
    }
}

//update this code for constrain low:
function constrainLow(start, step, limit){
    if(start - step > limit){
        return start - step
    }
    else{
        return start + step
    }
}

// Week 5

const PI = Math.PI
const TWO_PI = 2*PI


//Polar coordinate conversion functions

function polarToX(angle, radius) {
    return Math.cos(angle)*radius
}

function polarToY(angle, radius){
    return Math.sin(angle)*radius
}

//SVG Drawing functions

//This funtction just draws a line between the coordinates x1,y1 and x2, y2
function drawLine(svgElement, x1, y1, x2, y2) {
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    //Set attributes
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "2");
    
    //Adding the new element to an SVG
    svgElement.appendChild(newLine);
  }


  //This function just draws a circle and position cx,cy with a radius r

  function drawCircle(svgElement, cx, cy, radius, colour) {
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    //set attributes
    newCircle.setAttribute("cx", cx);
    newCircle.setAttribute("cy", cy);
    newCircle.setAttribute("r", radius);
    newCircle.setAttribute("fill", colour);
    
    svgElement.appendChild(newCircle);
  
  }

  function drawText(svgElement, x, y, text){
    let newText = document.createElementNS("http://www.w3.org/2000/svg", "text")

    //set attributes
    newText.setAttribute("x", x)
    newText.setAttribute("y", y)

    //Set text content
    newText.innerHTML = text

    svgElement.appendChild(Text)

  }

  //
  //Week8
  //

  //Create a radom number from within the given
  function randomFromInterval (low, high) {
    let range = high-low
    return low+ Math.random() * range
    //自己瞎写的let low=low
    //low=randomInt(10)
    //let high=high
    //high=randomInt(100)
  }

  //This function just creates a circle and position cx,cy with a radius r

  function makeCircle(x, y, radius, colour) {
    colour ??="white"
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    
    //set attributes
    newCircle.setAttribute("cx", x);
    newCircle.setAttribute("cy", y);
    newCircle.setAttribute("r", radius);
    newCircle.setAttribute("fill", colour);
    
    return newCircle;
  }