
let rectangle = document.getElementById("myRectangle")
console.log(rectangle)

rectangle.setAttribute("height", "600")



let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);
console.log(`rgb(${r}, ${g}, ${b})`)

rectangle.setAttribute("fill",`rgb(${r}, ${g}, ${b})`)

const svg = document. getElementById("base_svg");
console.log(svg)

let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")
console.log(newRectangle)
newRectangle.setAttribute("x", "10");
newRectangle.setAttribute("y", "10");
newRectangle.setAttribute("width", "200");
newRectangle.setAttribute("height", "200");
let r1 = Math.round(Math.random() * 255);
let g1 = Math.round(Math.random() * 255);
let b1 = Math.round(Math.random() * 255);
newRectangle.setAttribute('fill', `rgb(${r1}, ${g1}, ${b1})`);
svg.appendChild(newRectangle);




let elem = document.getElementById('text1');
let r3 = Math.round(Math.random() * 255);
let g3 = Math.round(Math.random() * 255);
let b3 = Math.round(Math.random() * 255);
elem.setAttribute('color', `rgb(${r}, ${g}, ${b})`);
