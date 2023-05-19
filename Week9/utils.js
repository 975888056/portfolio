'use strict'; // <-- see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Returns an integer between 0 to range
function randomInt(range) {
    return Math.round(Math.random() * range)
}

// makeRGB 
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

// A utility function for creating a square to be added to an SVG
function square(x, y, size, colour) {
    // Use a rect element with identical width and height
    let square = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
    colour = makeRGB()
    // Set the attributes of the new square
    square.setAttribute('x', x)
    square.setAttribute('y', y)
    square.setAttribute('width', size)
    square.setAttribute('height', size)
    square.setAttribute('fill', colour)

    return square
}

