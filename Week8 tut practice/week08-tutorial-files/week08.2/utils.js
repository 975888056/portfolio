
//
// Tutorial step 1
//

// Takes r, g, b parameters and returns an rgb() formattted string for css and svg color description.
function formatRGB(r, g, b) {
    return `rgb(${r}, ${g}, ${b})`
}

// Returns an integer between 0 to range
function randomInt(range) {
    return Math.round(Math.random() * range)
}

//
// Step two of tutorial makeRGB with optional values
//
function makeRGB(redInput, greenInput, blueInput) {
    // Process: input "or else" pick a random colour
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    // output the values
    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`
}

//
// Week 4
//

function constrainHigh(start, step, limit) {
    if (start + step < limit) {
        return start + step
    }
    else {
        return start - step
    }
}

// Update this code for constrain low:
function constrainLow(start, step, limit) {
    if (start - step > limit) {
        return start - step
    }
    else {
        return start + step
    }
}

//
// Week 5
//

const PI = Math.PI
const TWO_PI = 2 * PI


// Polar coordinate conversion functions

function polarToX(angle, radius) {
    return Math.cos(angle) * radius
}

function polarToY(angle, radius) {
    return Math.sin(angle) * radius
}

// SVG Drawing functions

//This function just draws a line between the coordinates x1,y1 and x2, y2
function drawBlackLine(svgElement, x1, y1, x2, y2) {
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    // Set attributes
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "black");
    newLine.setAttribute("stroke-width", "2");

    // Adding the new element to an SVG
    svgElement.appendChild(newLine);
}

//This function just draws a circle and position cx,cy with a radius r
function drawCircle(svgElement, x, y, radius, colour) {
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // Set attributes
    newCircle.setAttribute("cx", x);
    newCircle.setAttribute("cy", y);
    newCircle.setAttribute("r", radius);
    newCircle.setAttribute("fill", colour);

    svgElement.appendChild(newCircle);
}

function drawText(svgElement, x, y, text) {
    let newText = document.createElementNS("http://www.w3.org/2000/svg", "text")

    // Set attributes
    newText.setAttribute("x", x)
    newText.setAttribute("y", y)

    // Set text content
    newText.innerHTML = text

    svgElement.appendChild(newText)
}

//
// Week 6
//

//Drawing a line
function drawLine(svgElement, x1, y1, x2, y2, colour) {
    let newLine = document.createElementNS("http://www.w3.org/2000/svg", "line");

    // Set attributes
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", colour ?? makeRGB());
    newLine.setAttribute("stroke-width", 5);
    
    svgElement.appendChild(newLine);
  }

  //
  // Week 8
  //

// Create a random number from within the given interval
function randomFromInterval(low, high) {
    let range = high - low
    return low + Math.random() * range
}

//This function creates a circlewith position cx,cy with a radius r and a fill colour
function makeCircle(x, y, radius, colour) {
    colour ??= "white"
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // Set attributes
    newCircle.setAttribute("cx", x);
    newCircle.setAttribute("cy", y);
    newCircle.setAttribute("r", radius);
    newCircle.setAttribute("fill", colour);

    return newCircle;
}