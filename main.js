const cards = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍'];
let click = [];
let scoreP1 = 0;
let scoreP2 = 0;
let players = [{ name: "", score: scoreP1 }, { name: "", score: scoreP2 }];
let counterPlayer = 0;



function AddinDivElement(v, i, arr) {

    const element = document.createElement("div");
    // const img = document.createElement("img")
    // img.src="https://cdn.solnet.co.il/artwork-v133/cardbacks1/back32.png"
    element.innerHTML = "♣️";
    element.addEventListener(`click`, function () {
        if (click[1] != null) { return }
        this.innerHTML = v
        if (click[0] && click[0].id == this.id) { return }
        click.push(this)

        console.log(click);
        if (click[1] != null) {
            counterPlayer++;
            if (click[0].innerHTML == click[1].innerHTML) {
                if (counterPlayer % 2 == 0) {
                    players[0].score = scorePlayers(scoreP1);
                }
                players[1].score = scorePlayers(scoreP2);
                if (scoreP1 + scoreP2 == 10) {
                    alert("ok")
                    setTimeout(() => {
                        if (scoreP1 != scoreP2) {
                            board.outerHTML = `<div class = "win"> The Winner is : ${scoreP1 > scoreP2 ? players[0].name : players[1].name}</div>`
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
function scorePlayers(num) {
    num++;
    return num;
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
            player1.outerHTML = `<div class = "players">Name : ${players[0].name} <br/> Score : ${players[0].score}</div>`
            player2.outerHTML = `<div class = "players">Name : ${players[1].name} <br/> Score : ${players[1].score}</div>`
        })
    })
    boardPlayer.appendChild(choosNamePlayer);
}