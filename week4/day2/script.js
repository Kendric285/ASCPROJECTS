const introParagraph = document.createElement("p");
introParagraph.innerText = "The best main in the game; ICE CLIMBERS"
introParagraph.style.backgroundColor = "#42943D"
introParagraph.style.color = "white"

const image = document.querySelector("img")

const body = document.querySelector("body");
body.appendChild(introParagraph)
// body.removeChild(image)
// image.remove()

body.appendChild(image)
