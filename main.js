const cards = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍'];
let click = [];
let players = [{ name: "", score: 0 }, { name: "", score: 0 }];
let counterPlayer = 0;



function AddinDivElement(v, i, arr) {

    const element = document.createElement("div");
    // const img = document.createElement("img")
    // img.src="https://cdn.solnet.co.il/artwork-v133/cardbacks1/back32.png"
    element.innerHTML = "♣️";
    element.addEventListener(`click`, function () {
        if (click[1] != null) { return }
        if (click[0] && click[0].id == this.id || this.innerHTML != "♣️") { return }
        click.push(this)
        this.innerHTML = v

        if (click[1] != null) {
            if (click[0].innerHTML == click[1].innerHTML) {
                if (counterPlayer % 2 == 0) {
                    counterPlayer--;
                    players[0].score += 1;
                    document.getElementById('p1').innerHTML = `Name : ${players[0].name} <br/> Score : ${players[0].score}`
                }else{
                counterPlayer--;
                players[1].score += 1;
                document.getElementById('p2').innerHTML = `Name : ${players[1].name} <br/> Score : ${players[1].score}`
                }
                if (players[0].score + players[1].score == 10) {
                    setTimeout(() => {
                        if (players[0].score != players[1].score) {
                            board.outerHTML = `<div class = "win"> The Winner is : ${players[0].score > players[1].score ? players[0].name : players[1].name}</div>`
                        }
                        else {
                            board.outerHTML = `<div class = "win">  ${players[0].name} && ${players[1].name}<br/> Draw ! ! !</div>`
                        }
                    }, 1000)
                }
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
            counterPlayer++;
        }
    })
    element.id = i
    element.className = "card"
    const board = document.getElementById("board")
    board.appendChild(element)
}
createPlayer()

// htmlפונקצייה שמערבבת את המערך ואז שם ב 
function shuffle(cards) {
    cards = cards.sort(() => Math.random() - 0.5)
}

function createPlayer() {
    document.getElementById("board").style.display = 'none'
    let boardPlayer = document.getElementById("player");
    let choosNamePlayer = document.createElement("button");
    choosNamePlayer.innerText = "Start game !"
    choosNamePlayer.id = "choosNamePlayer"
    choosNamePlayer.addEventListener('click', () => {
        const player1 = document.createElement("input")
        const player2 = document.createElement("input")
        const choosed = document.createElement("button")
        player1.placeholder = 'player 1'
        player2.placeholder = 'player 2'
        choosed.innerText = 'submit'
        boardPlayer.removeChild(choosNamePlayer)
        boardPlayer.append(player1, player2, choosed)
        choosed.addEventListener('click', () => {
            boardPlayer.removeChild(choosed)
            document.getElementById("board").style.display = 'grid'
            shuffle(cards)
            cards.map(AddinDivElement)

            players[0].name = player1.value;
            players[1].name = player2.value;
            player1.outerHTML = `<div id="p1" class = "players">Name : ${players[0].name} <br/> Score : ${players[0].score}</div>`
            player2.outerHTML = `<div id="p2" class = "players">Name : ${players[1].name} <br/> Score : ${players[1].score}</div>`
        })
    })
    boardPlayer.appendChild(choosNamePlayer);
}