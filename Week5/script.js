// fetch elements from HTML
const canvas = document.getElementById("base_svg");
const squareBtn = document.getElementById("squareButton");
const circleBtn = document.getElementById("circleButton");
const ellipseBtn = document.getElementById("ellipseButton");
const colorBtn = document.getElementById("colorButton");

let currentShape;

// Define functions to create the different shapes
function createSquare() {
  const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  square.setAttribute("x", 150);
  square.setAttribute("y", 150);
  square.setAttribute("width", 100);
  square.setAttribute("height", 100);
  canvas.appendChild(square);
  currentShape=square
}

function createCircle() {
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", 200);
  circle.setAttribute("cy", 200);
  circle.setAttribute("r", 50);
  canvas.appendChild(circle);
  currentShape=circle
}

function createEllipse() {
  const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
  ellipse.setAttribute("cx", 200);
  ellipse.setAttribute("cy", 200);
  ellipse.setAttribute("rx", 100);
  ellipse.setAttribute("ry", 50);
  canvas.appendChild(ellipse);
  currentShape=ellipse
}

// makeRGB
function randomInt(limit) {
    return Math.round(Math.random()*limit)
}
function makeRGB(redInput, greenInput, blueInput){
    //process
    let redOutput = redInput ?? randomInt(255)
    let greenOutput = greenInput ?? randomInt(255)
    let blueOutput = blueInput ?? randomInt(255)

    //Output
    return `rgb(${redOutput},${greenOutput},${blueOutput})`
}

// Attach event listeners to the buttons
squareBtn.addEventListener("click", function() {
    canvas.innerHTML = "";
    createSquare();
  });
  
  circleBtn.addEventListener("click", function() {
    canvas.innerHTML = "";
    createCircle();
  });
  
  ellipseBtn.addEventListener("click", function() {
    canvas.innerHTML = "";
    createEllipse();
  });

colorBtn.addEventListener("click", function(e) {
  currentShape.setAttribute("fill", makeRGB());
});
