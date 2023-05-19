'use strict'; // <-- see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

class ECA {
    constructor(ruleSet, rowLength) {
        this.rules = ruleSet
        // Initialise the first generation of the CA up to rowLength and give life to a starting cell.
        this.row = new Array(rowLength).fill(0)
        // Give life to a cell around the middle of the row.
        let centerIndex = Math.floor(this.row.length/2)
        this.row[centerIndex] = 1
    }

    // Take an array of three elements and return the result from the current rule set.
    transformCell(triple) {
        // Look up the result of the rule by turning the triple into a key
        let lookup = triple.join('')
        return this.rules[lookup]
    }

    generateNextRow() {
        // Initialise the next generation as an all 0 row.
        let nextGeneration = new Array(this.row.length).fill(0)

        // Iterate through triplets from the current row to generate the next generation.
        for (let i = 1; i< this.row.length-1;i++){
            let triple = this.row.slice(i - 1, i + 2)
            nextGeneration[i]= this.transformCell(triple)
        }

        // Replace the current generation with the new generation
        this.row = nextGeneration
    }
}