console.log("hi from utlis.js")

function randomInt(limit) {
    return Math.round(Math.random()*limit)}

function makeRGB(redInput, greenInput, blueInput){
    //process
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    //Output
    return `rgb(${redOutput},${greenOutput},${blueOutput})`}

   