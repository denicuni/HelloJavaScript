//DOM
const balanceElement = document.getElementById("balance");
const betElement = document.getElementById("betInput");
const betButton = document.getElementById("betButton");
const deckCount = document.getElementById("deckCount");
const playerCards = document.getElementById("playerCards");
const playerScoreElement = document.getElementById("playerScore");
const dealerCards = document.getElementById("dealerCards");
const dealerScoreElement = document.getElementById("dealerScore");
const buttonHitCard = document.getElementById("hitCardBtn");
const buttonStay = document.getElementById("stayBtn");
const buttonNewRound = document.getElementById("newRoundBtn");

//VARIABILI

let balance = 1000;
let bet = 0;
let playerDeck = [];
let dealerDeck = [];
let playerScore = 0;
let dealerScore = 0;
let deck = [];
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//FUNZIONI

//funzione per generare le carte
function generateDeck() {
    const suits = ['♠️', '♥️', '♦️', '♣️'];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + suit);
        }
    }
    console.log("Mazzo creato:" + deck);
}
//funzione per pescare randomicamente una carta
function drawCard() {
    let randomCard = Math.floor(Math.random() * deck.length)
    let card = deck[randomCard];
    deck.splice(randomCard, 1)[0];
    return card;
}

generateDeck();
//console.log(deck.length);
//console.log(deck.length);

//funzione per riempire i deck player e dealer
function fillDeck() {
    playerDeck.push(drawCard());
    dealerDeck.push(drawCard());
    playerDeck.push(drawCard());
    //seconda carta deve essere nascosta DA IMPLEMENTARE
    dealerDeck.push(drawCard());
}

//fillDeck();
console.log("player " + playerDeck);
console.log("dealer " + dealerDeck);
//console.log(deck);

//funzione per convertire i valore delle carte in numeri
function getCardValue(card){
    //-2 -> da destra verso sinistra, 2 erchè non sono stringhe e valgono 2
    const value = card.slice(0, -2); // "A♠"->"A"  "10♦"->"10"
    if(value == 'A'){
        return 11;
    } else if(value == "J" || value == "Q" || value == "K"){
        return 10;
    }
    return parseInt(value);

}
//funzione per calcolare il punteggio
function getScorePlayer(playerDeck) {
  let score = 0;
  let aces = 0;

  for (const card of playerDeck) {
    let value = getCardValue(card);
    score += value;
    if(card.startsWith('A')){
        aces++;
    }
  }
  while (score > 21 && aces > 0) {
    score -= 10; // abbasso un asso da 11 a 1
    aces--;
  }
  //console.log("playerScore " + score);
  return score;
}
//console.log("PLAYER SCORE " + getScorePlayer(playerDeck));
//console.log("DEALER SCORE " + getScorePlayer(dealerDeck));


//funione che verifica il saldo disponibile e la puntata (soldi suff.) 
//e puntata min 10€
function verifyBet(){
    //prende la puntata
    const bet = Number(betElement.value);
    if(bet > balance){
        alert("SALDO INSUFFICIENTE");
        return balance;

    } else if(bet < 10){
        alert("PUNTATA MINIMA 10€");
    }
    return balance -= bet;
}



//IMPLEMENTAZIONE
//QUANDO PUNTI ESCONO LE PRIME DUE CARTE

betElement.addEventListener('input', (evt) =>{
    betButton.disabled = false;
})

betButton.addEventListener('click', (evt) =>{
    verifyBet();
    balanceElement.textContent = balance + "€";
    fillDeck();
    playerCards.textContent= playerDeck.join(" ");
    dealerCards.textContent = dealerDeck[0];
    playerScoreElement.textContent =  "PUNTEGGIO : " + getScorePlayer(playerDeck);
    dealerScoreElement.textContent = "PUNTEGGIO : " + getCardValue(dealerDeck[0]);
    betButton.disabled = true;
    //nuova mano bottone false
})

//const buttonHitCard = document.getElementById("hitCardBtn");
//const buttonStay = document.getElementById("stayBtn");
//const buttonNewRound = document.getElementById("newRoundBtn");

buttonHitCard.addEventListener('click', (evt) =>{
    playerDeck.push(drawCard());
    if(getScorePlayer(playerDeck) > 21){
        alert("HAI SBALLATO, SE VUOI CONTINUARE A GIOCARE PREMI NUOVA MANO");
        buttonHitCard.disabled = true;
        buttonStay.disabled = true;
        betButton.disabled = true;
        betElement.disabled = true;
    }
    playerCards.textContent = playerDeck.join(" ");
    playerScoreElement.textContent = "PUNTEGGIO : " + getScorePlayer(playerDeck);

})