let a = [1, 2]

console.log(a)

let b = {
    x: 1,
    y: 2
}

console.log(b)

class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    distance(other) {
        return Math.sqrt((other.x - this.x) * (other.y - this.y))
    }

    move(velocityX, velocityY) {
        this.x += velocityX
        this.y += velocityY
    }
}

let point = new Point(100, 200)
console.log(point)
console.log("x", point.x)

let point2 = new Point(200, 200);

console.log(point.distance(point2))

console.log(point2)

point.move(300, 300)

console.log("point moved", point)

// This throws an error
// point.Moooove(200, 200)


// Star tutorial exercise

class Star {
    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.r = radius

        this.fadeDirection = 1
    }

    drawStar(svg) {
        drawCircle(svg, this.x, this.y, this.r, "white")
    }

    update() {
        this.r += 0.1 * this.fadeDirection

        if (this.r < 0) {
            this.fadeDirection = 1
        }

        if (this.r > 30) {
            this.fadeDirection = -1
        }
    }
}

// Setup SVG

let width = window.innerWidth
let height = window.innerHeight

const svg = document.getElementById('starfield-svg')
console.log(svg)

// Set the attributes of our SVG element
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.setAttribute("style", "background-color: black")

// Create our stars!
let stars = []
for (let i = 0; i < 100; i++) {
    let starX = randomInRange(0, width)
    let starY = randomInRange(0, height)
    let starSize = randomInRange(height * 0.01, height * 0.02)

    stars.push( new Star(starX, starY, starSize) )
}

// index access pattern
// for (let i = 0; i < stars.length; i++) {
//     stars[i].drawStar(svg)
// }

// The for of pattern
for (let star of stars) {
    star.drawStar(svg)
}

// For those who want to do it on one line
// stars.forEach(star => star.drawStar(svg))

function updateStars() {
    svg.replaceChildren()
    for (let star of stars) {
        star.drawStar(svg)
        star.update()
    }
}

// call update function 60 times per second
setInterval(updateStars, 1000/60)