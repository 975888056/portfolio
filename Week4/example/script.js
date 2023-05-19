// Generate random color
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Draw ten nested circles
var svg = document.getElementById("artwork");
var x = 250;
var y = 250;
var radius = 200;
var isOddColor = true;

for (var i = 1; i <= 10; i++) {
  // Create circle element
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

  // Set circle attributes
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", radius);
  circle.setAttribute("fill", getRandomColor());

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
    var r = Math.floor(Math.random() * 128) * 2 + 1;
    var g = Math.floor(Math.random() * 128) * 2 + 1;
    var b = Math.floor(Math.random() * 128) * 2 + 1;
    circle.setAttribute("fill", "rgb(" + r + ", " + g + ", " + b + ")");
  } else {
    // Generate even color
    var r = Math.floor(Math.random() * 128) * 2;
    var g = Math.floor(Math.random() * 128) * 2;
    var b = Math.floor(Math.random() * 128) * 2;
    circle.setAttribute("fill", "rgb(" + r + ", " + g + ", " + b + ")");
  }
}

//The ‘randomColor()’ function generates a random RGB color and checks 
//if the sum of the red, green, and blue values is even or odd. 
//If it's odd, it returns the color as is. If it's even, 
//it adds 1 to each value to make it odd.
//The code then uses a ‘for’ loop to draw ten circles with decreasing radii, 
//starting from the center of the SVG canvas. 
//The ‘x’ and ‘y’ variables keep track of the center coordinates of each circle, 
//and the ‘circleSize’ variable determines the radius of each circle. 
//The ‘randomColor()’ function is called for each circle to generate a random color.
//The result should be an SVG artwork with ten circles nested inside each other, 
//with alternating odd and even colors.