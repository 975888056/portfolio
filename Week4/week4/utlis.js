//Generate a random colour
Math.round(Math.random()*255)


//randomInt
function randomInt(limit) {
    return Math.round(Math.random()*limit)
}

//generate a random color
function makeRGB(redInput, greenInput, blueInput){
    //process
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    //Output
    return `rgb(${redOutput},${greenOutput},${blueOutput})`
}

//genetate even numbers
function even(low, high) {
    for (let i=low; i <= high; i++) {
        if(i % 2 === 0) {
            console.log(i);
        };
    };
}

//generate odd numbers
function odd(low, high) {
    for (let i=low; i <= high; i++) {
        if(i % 2 !== 0) {
            console.log(i);
        };
    };
}
