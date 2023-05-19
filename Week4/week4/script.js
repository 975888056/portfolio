// Draw ten nested circles
let svg = document.getElementById("base_svg");
let x = 250;
let y = 250;
let radius = 200;
var isOddColor = true;


for (let i = 1; i <= 10; i++) {
  // Create circle element
  let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  // Set circle attributes
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", radius);
  circle.setAttribute("fill", makeRGB());

  // Add circle to SVG canvas
  svg.appendChild(circle);

  // Update x, y, and radius for next circle
  x = x ;
  y = y ;
  radius = radius / 1.5;

  // Update color for next circle
  isOddColor = !isOddColor;
  if (isOddColor) {
    // Generate odd color
    let r = randomInt (128) * 2 + 1;
    let g = randomInt (128) * 2 + 1;
    let b = randomInt (128) * 2 + 1;
    circle.setAttribute("fill", "rgb(" + r + ", " + g + ", " + b + ")");
  } else {
    // Generate even color
    let r = randomInt  (128) * 2;
    let g = randomInt  (128) * 2;
    let b = randomInt  (128) * 2;
    circle.setAttribute("fill", "rgb(" + r + ", " + g + ", " + b + ")");
  }
}

