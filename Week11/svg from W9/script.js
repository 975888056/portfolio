'use strict';

let ruleSet = {
    "000": 0,
    "001": 1,
    "010": 0,
    "100": 1,
    "011": 1,
    "101": 0,
    "110": 1,
    "111": 0
}

console.log(ruleSet);
let ca = new ECA(ruleSet, 90)


// Setup SVG
const svg = document.getElementById("display");
const width = 400
const height = 400

svg.setAttribute("width", width)
svg.setAttribute("height", height)

// Calculate the dimensions of each cell and how many iterations will be required.
let cellSize = width / ca.row.length
let rowLimit = height / cellSize

// Create a loop variable and use a while loop.
let rowCount = 0
while (rowCount < rowLimit) {
    ca.row.forEach((cell, i) => {
        if (cell === 1) {
            let svgCell = square(
                i * cellSize, // x
                rowCount * cellSize, // y
                cellSize, // size
                makeRGB() 
            )
            svg.appendChild(svgCell)
        }
    });

    // Calculate the next generation of the automata and move the loop ahead one step
    ca.generateNextRow()
    rowCount++
}

