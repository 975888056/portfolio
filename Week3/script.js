console.log("hi from Script.js")

let width = 600;
let height = 600;

svg = document.getElementById('base_svg');
console.log(svg)
svg.setAttribute('width',width)
svg.setAttribute('height',height)

function drawCircle(cx, cy, r, colour){
    let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    
    newCircle.setAttribute("cx", cx ?? randomInt(width))
    newCircle.setAttribute("cy", cy ?? randomInt(height))
    newCircle.setAttribute("r", r ?? randomInt(100))
    newCircle.setAttribute("fill", colour)

    svg.appendChild(newCircle)
}

drawCircle(null, 100, null, makeRGB())
drawCircle(null, null, null, makeRGB())
drawCircle(null, null, 30, makeRGB(0,0,null))
drawCircle(null, 400, null, makeRGB())
drawCircle(80, null, null, makeRGB(null,0,0))
drawCircle(null, null, null, makeRGB(0,null,0))

