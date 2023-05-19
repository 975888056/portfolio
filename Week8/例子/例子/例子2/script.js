// Get the available window dimensions
const width = window.innerWidth;
const height = window.innerHeight;

// Set up the SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", width);
svg.setAttribute("height", height);
svg.setAttribute("style", "background-color: pink");
document.body.appendChild(svg);

// Create a random number from within the given interval
function randomFromInterval(low, high) {
  const range = high - low;
  return low + Math.random() * range;
}

// Make a random RGB color
function makeRGB(redInput, greenInput, blueInput) {
  const redOutput = redInput ?? randomFromInterval(0, 255);
  const greenOutput = greenInput ?? randomFromInterval(0, 255);
  const blueOutput = blueInput ?? randomFromInterval(0, 255);
  return `rgb(${redOutput}, ${greenOutput}, ${blueOutput})`;
}

// Define the Circle class
class Circle {
  constructor(x, y, r, vx, vy, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
  }

  // Draw the circle on the given SVG
  draw(svg) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", this.x);
    circle.setAttribute("cy", this.y);
    circle.setAttribute("r", this.r);
    circle.setAttribute("fill", this.color);
    svg.appendChild(circle);
  }

  // Update the position and velocity of the circle
  update() {
    this.vy += 0.1; // Apply gravity
    this.x += this.vx;
    this.y += this.vy;
  }

  // Check if the circle is out of bounds
  isOutOfBounds(width, height) {
    return this.x + this.r < 0 || this.x - this.r > width || this.y - this.r > height;
  }
}

// Create a list of circles
const circles = [];

// Add new circles every 100ms
setInterval(() => {
  // Create a new circle with random attributes
  const x = randomFromInterval(width / 2 - 50, width / 2 + 50);
  const y = randomFromInterval(0, 50);
  const r = randomFromInterval(5, 15);
  const vx = randomFromInterval(-2, 2);
  const vy = randomFromInterval(1, 5);
  const color = makeRGB();
  const circle = new Circle(x, y, r, vx, vy, color);
  
  // Add the circle to the list
  circles.push(circle);
}, 100);

// Update and draw the circles every frame
function update() {
  // Clear the SVG
  svg.innerHTML = "";
  
  // Update and draw the circles
  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    circle.update();
    circle.draw(svg);
    
    // Remove circles that are out of bounds
    if (circle.isOutOfBounds(width, height)) {
      circles.splice(i, 1);
      i--;
    }
  }
  
  // Request the next frame
  requestAnimationFrame(update);
}

// Start the animation
requestAnimationFrame(update);
