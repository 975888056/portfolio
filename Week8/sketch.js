// Setup the SVG

// Get the available window dimensions
const width = window.innerWidth
const height = window.innerHeight

let svg = document.getElementById('starfield-svg')
console.log(svg)

// Set the attributes of our SVG element
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.setAttribute("style", "background-color: pink")


// Now to make a star field!
class Star {
    constructor(x, y, radius, vx, vy, color) {
        this.x = x
        this.y = y
        this.r = radius
        this.vx = vx
        this.vy = vy
        this.color = color
    }

    // Draw a star on the given SVG
    draw(svg) {
        let circle = makeCircle(this.x, this.y, this.r, this.color)
        svg.appendChild(circle)
    }

    update() {
        this.vy += 0.01
        this.x += this.vx
        this.y += this.vy
}

// Check if the circle is out of bounds
isOutOfBounds(width, height) {
    return this.x + this.r < 0 || this.x - this.r > width || this.y - this.r > height;
  }
}

// make lots of stars!
let stars = []
setInterval(()=>{for (let i = 0; i < 10; i++) {
    let x = window.innerWidth/2
    let y = window.innerHeight/2
    let radius = randomFromInterval(3, 9)
    let vx = randomFromInterval(-3, 3);
    let vy = randomFromInterval(1, 4);
    let color = makeRGB()
    stars.push(new Star(x, y, radius, vx, vy, color) )
}},700)

// Update and draw the circles every frame
function animation() {
    // Clear the SVG
    svg.replaceChildren();
    for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.update();
        star.draw(svg);
    }

    
    // Request the next frame
    requestAnimationFrame(animation);}
  
  // Start the animation
 requestAnimationFrame(animation);

