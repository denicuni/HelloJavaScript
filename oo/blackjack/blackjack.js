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
let isBetPlaced = false;
let plate;
let bet = 0;
let hiddenOpponentCardRealImage;
let hiddenOpponentCard;
let playerMoney = document.querySelector(".soldi-totali");
let playerMoneyNumber = 1000;
const input = document.querySelector(".soldi-puntati");
const puntaButton = document.querySelector("#punta");
const startButton = document.querySelector("#start");
const playerDeck = document.querySelector(".mazzo-player");
const opponentDeck = document.querySelector(".carte-mazziere");
const hitButton = document.querySelector("#hit");
const stayButton = document.querySelector("#stay");
let fakeAlert = document.querySelector(".alert-fake");

playerDeck.listOfCards = [];
opponentDeck.listOfCards = [];

/**
 * @type {Function[]}
 */
let gameStartedFunctions = [];
/**
 * @type {Function[]}
 */
let betPlacedFunctions = [];
/**
 * @type {Function[]}
 */
let moneyChangedFunctions = [];

function addGameListener(type, func) {
    switch (type) {
        case "start":
            gameStartedFunctions.push(func);
            break;
        case "bet":
            betPlacedFunctions.push(func);
            break;
        case "money":
            moneyChangedFunctions.push(func);
        default:
    }
}

function setGameStarted(booleano) {
    isGameStarted = booleano;
    for (let func of gameStartedFunctions) {
        func();
    }
}

function setBetPlaced(booleano) {
    isBetPlaced = booleano;
    for (let func of betPlacedFunctions) {
        func();
    }
}
function setPlayerMoneyNumber(value) {
    playerMoneyNumber = value;
    for (let func of moneyChangedFunctions) {
        func();
    }
}

addGameListener("start", () => hitButton.disabled = !isGameStarted);
addGameListener("start", () => stayButton.disabled = !isGameStarted);
addGameListener("start", () => {
    if (isGameStarted) startButton.disabled = true;
});
addGameListener("bet", () => {
    if (!isGameStarted) startButton.disabled = false;
});
addGameListener("bet", () => {
    if (!isGameStarted) fakeAlert.innerHTML = "";
});
addGameListener("money", () => {
    playerMoney.textContent = "Saldo: " + playerMoneyNumber;
})
setGameStarted(false);
setPlayerMoneyNumber(1000);
startButton.disabled = true;


puntaButton.disabled = true;

let dataBeforeInput = "";
input.addEventListener("beforeinput", evt => {
    dataBeforeInput = input.value;
})
input.addEventListener("input", (evt) => {
    if (isNaN(evt.data - 1)) {
        input.value = dataBeforeInput;
        return;
    }
    if (input.value > playerMoneyNumber) {
       input.value = dataBeforeInput;
    }
    puntaButton.disabled = !input.value;
    const value = input.value;
    if (value >= 100) {
        bet = value;
        puntaButton.disabled = false;
    } else {
        puntaButton.disabled = true;
    }
});
puntaButton.addEventListener("click", (e) => {
    setPlayerMoneyNumber(playerMoneyNumber - bet);
    plate = bet;
    input.value = 0;
    puntaButton.disabled = true;
    setBetPlaced(true);
})

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
        hiddenOpponentCardRealImage = card.cards[0].image;
        hiddenOpponentCard = z;
        z.classList.add("card");
        z.classList.add("flipped");
    }
    switch (card.cards[0].value) {
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

startButton.addEventListener("click", async (_) => {
    await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
    setGameStarted(true);
    playerDeck.listOfCards = [];
    opponentDeck.listOfCards = [];
    playerDeck.replaceChildren();
    opponentDeck.replaceChildren();
    await drawFromDeck(opponentDeck, true);
    await drawFromDeck(playerDeck);
    await drawFromDeck(opponentDeck);
    await drawFromDeck(playerDeck);
    console.log(opponentDeck.listOfCards, playerDeck.listOfCards);
});

function valueDeck(deck) {
    deck.listOfCards.sort((a, b) => b - a);
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
    if (somma > 21) {
        fakeAlert.textContent = "Hai perso";
        setGameStarted(false);
    } else {
        hitButton.disabled = false;
    }
    console.log(playerDeck.listOfCards);
});

stayButton.addEventListener("click", async () => {
    hitButton.disabled = true;
    hiddenOpponentCard.src = hiddenOpponentCardRealImage;
    for (let somma = valueDeck(opponentDeck); somma < valueDeck(playerDeck); somma = valueDeck(opponentDeck)) {
        await drawFromDeck(opponentDeck);
    }
    if (valueDeck(opponentDeck) > 21) {
        fakeAlert.textContent = "Hai vinto player!";
        setPlayerMoneyNumber(playerMoneyNumber + (plate * 2));
    } else {
        hitButton.disabled = false;
        fakeAlert.textContent = "SUCA";
        plate = 0;
    }
    setGameStarted(false);
});