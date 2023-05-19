// Returns an integer between 0 to range
function randomInt(range) {
    return Math.round(Math.random() * range)
}


//make random color
function makeRGB(redInput, greenInput, blueInput) {
    // Process: input "or else" pick a random colour
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    // output the values
    return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`
}

// Create a random number from within the given interval
function randomFromInterval(low, high) {
    let range = high - low
    return low + Math.random() * range
}

//This function creates a circlewith position cx,cy with a radius r and a fill colour
function makeCircle(x, y, radius, color) {
    color = makeRGB()

    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // Set attributes
    newCircle.setAttribute("cx", x);
    newCircle.setAttribute("cy", y);
    newCircle.setAttribute("r", radius);
    newCircle.setAttribute("fill", color);

    return newCircle;
}
