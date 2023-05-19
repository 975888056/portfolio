console.log("Hi from script.js")

//Test out the function
console.log(formatRGB(40,29,10))

//Test++
console.assert(formatRGB(400,290,100) === "rgb(40,29,10)", "Test: formatRGB(400,290,100) === 'rgb(40,49,10)' reveived:" + formatRGB(400,290,100))
console.assert(formatRGB(40,29,10) === "rgb(40,29,10)", "Not an error!")

console.log( formatRGB(0,0,randomInt(255)))

//demo of makeRGB
console.log(makeRGB())

//tutorial section 4

let width = 600
let height = 400

let svg = document.getElementById("base_svg")
console.log(svg)

svg.setAttribute('width', width)
svg.setAttribute('height', height)

function drawRect(x, y, w, h, colour) {
    let newRectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect")

    newRectangle.setAttribute("x",x ?? randomInt(width))
    newRectangle.setAttribute("y",y)
    newRectangle.setAttribute("width",w)
    newRectangle.setAttribute("height",h)
    newRectangle.setAttribute("fill",colour)

    svg.appendChild(newRectangle)
}

drawRect(50, 50, 50, 50, makeRGB())
drawRect(null, 50, 50, 50, makeRGB())