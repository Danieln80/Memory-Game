const cards = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍','🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍'];
let click = []

function AddinDivElement(v, i, arr) {

    const element = document.createElement("div");
    element.innerHTML = "♣️";
    element.addEventListener(`click`,function (){
    this.innerHTML = v

        click.push(this)
    console.log(click);
    if(click[1] != null ){
        if(click[0].innerHTML == click[1].innerHTML){
            alert("good !!")
            click = [];
        }
        else{
            setTimeout(()=>{
            click[0].innerHTML= "♣️"
            click[1].innerHTML= "♣️"
            click=[];
        }, 1000)}
    }
    })
    element.id = i
    element.className = "card"
    const board = document.getElementById("board")
    board.appendChild(element)
}
shuffle(cards)
cards.map(AddinDivElement)

// htmlפונקצייה שמערבבת את המערך ואז שם ב 
function shuffle(cards) {
    cards = cards.sort(() => Math.random() - 0.5)
}


