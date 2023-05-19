let a = []

let b = {
    x: 1,
    "some long name": "Archibald Reginold 3rd"
}
console.log(b)

b.x = 2
console.log(b["some long name"])

console.log(b)

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    //Make a method
    move(velocityX, velocityY) {
        this.x +=velocityX
        this.y +=velocityY
    }
}

let point = new Point(0,0)

console.log (point)

point.x = 100
console.log(point)
point.move(100,0)
console.log(point)

//This makes an error
//point.mOOOoooVe(100,0)
//this does not
//pint.x=200

//Save to a string

let someData = JSON.stringify(point)
console.log("Raw",someData)
let anotherPoint = JSON.parse(someData)
console.log("parsed:", anotherPoint)


//Now to make a star field!

class Star {
    constructor(xPos, yPos, radius){
        this.x = xPos
        this.y = yPos
        this.r = radius
  
    }
    //Draw a star on the given svg
    draw(svg){
        let circle=makeCircle(this.x, this.y, this.r)
        svg.appendChild(circle)
    }

update(){
    this.r +=0.1*this.direction

    if(this.r>20){
        this.direction = -1
    }
    else if(this.r<1){
        this.direction=1
    }
}
}



//Setup the svg

//Get the available window dimensions
const width=window.innerWidth
const height=window.innerHeight

let svg=document.getElementById('starfield-svg')
console.log(svg)

//Set the attributes of our SVG element
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.setAttribute("style", "background-color: black")

//make lots of stars!
let stars = []
for (let i =0; i< 100; i++) {
    let starX=randomFromInterval(0,width)
    let starY=randomFromInterval(0,height)
    let radius=randomFromInterval(width*0.01, width*0.02)
    
    stars.push(new Star(starX, starY, radius))
}

console.log(stars)

//Index access oatterb
//for (let i=0; i<stars.length; i++){
//  stars [i].draw(svg)
//}

//for of pattern
for (let star of stars){
    star.draw(svg)
}

//One liner!
//stars. forEach(star=>star.draw(svg))


function animation() {
    svg.replaceChildren()
    for (let star of stars) {
        star.draw(svg)
        star.update()
    }
}

setInterval(animation, 1000/60)