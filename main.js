const cards = ["A", "B", "C", "D", "E", "A", "B", "C", "D", "E"];

function AddinDivElement(v, i, arr) {

    const element = document.createElement("div");
    element.innerHTML = v
    element.id = i
    element.className = "card"
    const board = document.getElementById("board")
    board.appendChild(element)
}
shuffle(cards)
cards.filter(AddinDivElement)



// htmlפונקצייה שמערבבת את המערך ואז שם ב 
function shuffle(cards) {
    cards = cards.sort(() => Math.random() - 0.5)
}


