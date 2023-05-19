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