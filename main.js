const cards = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍'];
let click = []

function AddinDivElement(v, i, arr) {

    const element = document.createElement("div");
    // const img = document.createElement("img")
    // img.src="https://cdn.solnet.co.il/artwork-v133/cardbacks1/back32.png"
    element.innerHTML = "♣️";
    element.addEventListener(`click`, function () {
        if(click[1] != null){return}
        this.innerHTML = v
        if (click[0] && click[0].id == this.id ) {return}
        click.push(this)

        console.log(click);
        if (click[1] != null) {
            if (click[0].innerHTML == click[1].innerHTML) {
                // alert("good !!")
                click = [];
            }
            else {
                setTimeout(() => {
                    for (i in click) {
                        click[i].innerHTML = "♣️"
                    }
                    click = [];
                }, 1000)
            }
        }
    })
    element.id = i
    element.className = "card"
    const board = document.getElementById("board")
    // element.appendChild(img)
    board.appendChild(element)
}
shuffle(cards)
cards.map(AddinDivElement)

// htmlפונקצייה שמערבבת את המערך ואז שם ב 
function shuffle(cards) {
    cards = cards.sort(() => Math.random() - 0.5)
}

const player1 = document.createElement("input");
const player2 = document.createElement("input");
boardPlayer = getElementById("player");
boardPlayer.appendChild(player1,player2)