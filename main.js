const cards = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];


function AddinDivElement(v,i,arr){
const element = document.createElement("div");
element.innerHTML = v
const board = document.getElementById("board")
board.appendChild(element)
}

cards.filter(AddinDivElement)

