/*
    # implementare il gioco del blackjack in cui un singolo giocatore giocherà contro il computer
    
    # il giocatore comincierà con 1000€ e potrà giocare nuovi round di blackjack finché non diventa povero
    
    # per cominciare una nuova mano dovrà puntare una nuova mano >10€; dopo di ché dovrà schiacciare un pulsante
        "start" per iniziare la prossima mano. Ci sarà un campo di testo per puntare i soldi, e finché non hai puntato
        non puoi incominciare la prossima mano.
    
        # ogni mano funzionerà così: verranno date due carte al giocatore e due carte al banco; le carte del giocatore
        sono coperte mentre la prima carta del banco è coperta e la seconda invece è scoperta.
    
        # il giocatore avrà a disposizione due pulsanti: "hit" dove richiede una nuoava carta e "stay" che si ferma.
    
    # lo scopo del giocatore è fare un punteggio più alto possibile, ma non superiore al 21; se supera 21 il giocatore
        perde automaticamente ("Sballa")

    # punteggi:
        figure -> 10 punti;
        2-10 -> valore nominale;
        asso -> 1-11 a scelta del giocatore;

    # se il giocatore sballa ha perso; se fa un blackjack a due carte vince automaticamente; 
        altrimenti tocca al banco, che fa vedere anche la carta coperta ed estrarrà carte cercando
        di pareggiare/superare il giocatore;
            # se il banco pareggia i soldi verrano divisi equamente
            # se il banco sballa i soldi verranno assegnati al giocatore
            # se il banco supera il giocatore, il giocatore perderà i soldi
            # se il giocatore ha ancora soldi può continuare a puntare
            # generation promuove il gambling
*/
let isGameStarted = false;
const input = document.querySelector(".soldi-puntati");
const button = document.querySelector("#punta");
const start = document.querySelector("#start");
const playerDeck = document.querySelector(".mazzo-player");
const opponentDeck = document.querySelector(".carte-mazziere");
const hitButton = document.querySelector("#hit");
const stayButton = document.querySelector("#stay");
hitButton.disabled = true;
playerDeck.listOfCards = [];
opponentDeck.listOfCards = [];
/*Costanti già presenti in html*/
let hiddenOpponentCardImage;
let hiddenOpponentCard;
let bet = 0;
const playerMoney = 1000;
/*Costanti per lavorare qui su css*/
button.disabled = true;
input.addEventListener("input", (evt) => {
    button.disabled = !input.value;
    const value = input.value;
    if (value >= 10 && value <= playerMoney) {
        bet = value;

    } else {
        button.disabled = true;
    }
});/*Setta il bottone a disabilitato inizialmente, poi lo abilita solo quando viene inserito un valore all'interno di input*/
let deckId;
(async (url) => {
    let x = await fetch(url);
    let data = await x.json();
    deckId = data.deck_id;
    console.log(data);
    await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
})("https://deckofcardsapi.com/api/deck/new");

async function drawFromDeck(parentTag, isFlipped = false) {
    let y = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
    let card = await y.json();
    let z;
    if (!isFlipped) {
        z = document.createElement("img");
        z.src = card.cards[0].image;
        z.classList.add("card");
    } else {
        z = document.createElement("img");
        z.src = "https://deckofcardsapi.com/static/img/back.png";
        hiddenOpponentCardImage = card.cards[0].image;
        hiddenOpponentCard = z;
        z.classList.add("card");
        z.classList.add("flipped");
    }
    switch (card.cards[0].value){
        case "ACE":
            parentTag.listOfCards.push(1);
            break;
        case "QUEEN":
        case "KING":
        case "JACK":
            parentTag.listOfCards.push(10);
            break;
        default:
            parentTag.listOfCards.push(Number(card.cards[0].value));
    }
    parentTag.appendChild(z);
}

start.addEventListener("click", async (_) => {
    isGameStarted = true;
    playerDeck.listOfCards = [];
    opponentDeck.listOfCards = [];
    playerDeck.replaceChildren();
    opponentDeck.replaceChildren();
    hitButton.disabled = !isGameStarted;
    start.disabled = isGameStarted;
    await drawFromDeck(opponentDeck, true);
    await drawFromDeck(playerDeck);
    await drawFromDeck(opponentDeck);
    await drawFromDeck(playerDeck);
    console.log(opponentDeck.listOfCards, playerDeck.listOfCards);
    stayButton.disabled = !isGameStarted;
});

function valueDeck(deck) {
    deck.listOfCards.sort((a,b)=>b-a);
    let somma = 0;
    for (let i = 0; i < deck.listOfCards.length; i++) {
        if (i === deck.listOfCards.length - 1 && deck.listOfCards[i] === 1) {
            if (somma + 11 > 21) {
                somma += 1;
            } else {
                somma += 11;
            }
        } else {
            somma += deck.listOfCards[i];
        }
    }
    return somma;
}

hitButton.addEventListener("click", async () => {
    hitButton.disabled = true;
    await drawFromDeck(playerDeck);
    let somma = 0;
    somma = valueDeck(playerDeck);
    if (somma>21){
        alert("hai perso");
        isGameStarted = false;
        hitButton.disabled = !isGameStarted;
        start.disabled = isGameStarted;
    }else{
        hitButton.disabled = false;
    }
    console.log(playerDeck.listOfCards);
});

stayButton.addEventListener("click", async () => {
        hitButton.disabled = true;
        hiddenOpponentCard.src=hiddenOpponentCardImage;
        for(let somma = valueDeck(opponentDeck);somma<valueDeck(playerDeck);somma=valueDeck(opponentDeck)){
            await drawFromDeck(opponentDeck);
        }
    if (valueDeck(opponentDeck)>21){
        alert("Hai vinto player!!");

    }else{
        hitButton.disabled = false;
        alert("SUCA");
    }
    isGameStarted = false;
    hitButton.disabled = !isGameStarted;
    start.disabled = isGameStarted;
    stayButton.disabled = true;
});


