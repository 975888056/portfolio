let circle = document.getElementById("topCircle")
let r = Math.round(Math.random() * 255);
let g = Math.round(Math.random() * 255);
let b = Math.round(Math.random() * 255);
console.log(`rgb(${r}, ${g}, ${b})`)
circle.setAttribute("fill",`rgb(${r}, ${g}, ${b})`)


let polygon = document.getElementById("myPolygon")
let r1 = Math.round(Math.random() * 255);
let g1 = Math.round(Math.random() * 255);
let b1 = Math.round(Math.random() * 255);
polygon.setAttribute("fill",`rgb(${r1}, ${g1}, ${b1})`)

const svg = document.getElementById("base_svg");
console.log(svg);

let newEllipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
newEllipse.setAttribute("rx", "100");
newEllipse.setAttribute("ry", "30");
newEllipse.setAttribute("cx", "250");
newEllipse.setAttribute("cy", "650");
let r2 = Math.round(Math.random() * 255);
let g2 = Math.round(Math.random() * 255);
let b2 = Math.round(Math.random() * 255);
newEllipse.setAttribute('fill', `rgb(${r2}, ${g2}, ${b2})`);
svg.appendChild(newEllipse);