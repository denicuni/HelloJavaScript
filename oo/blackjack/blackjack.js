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



PROGETTAZIONE

    classe esterna "mazzo?" con dentro metodi hit e stay da cui vengono giocatore e banco, le carte ce le mettiamo in qualche modo con degli array
    classe giocatore con nome, saldo (parte da 1000), punti carte, metodi hit e stay
    classe banco punti carte, hit e stay, ??saldo (che parte da 0)
    textbox "quanto vuoi puntare?" e pulsante "punta"
    pulsanti "hit" e "stay"
    variabile campo da gioco che tiene i soldi in palio
    ??calsse campo da gioco che inizializza dealer e player, bet??




class Blackjack {
    constructor() {
        this.bet = 0;
        this.playerCards = [];
        this.dealerCards = [];
        this.playerMoney = 1000; // soldi iniziali
    }

    setBet(amount) {
        if (amount > 0 && amount <= this.playerMoney) {
            this.bet = amount;
            console.log("Puntata:", this.bet);
        } else {
            alert("Puntata non valida!");
        }
    }

    startGame() {
        this.playerCards = [];
        this.dealerCards = [];

        this.playerMoney -= this.bet;

        this.playerCards.push(this.drawCard());
        this.playerCards.push(this.drawCard());

        this.dealerCards.push(this.drawCard());
        this.dealerCards.push(this.drawCard());

        console.log("Carte giocatore:", this.playerCards);
        console.log("Carte dealer:", this.dealerCards);
    }

    drawCard() {
        return Math.floor(Math.random() * 11) + 1; // semplificato 1-11
    }
}
 Collegamento con input puntata
HTML:

<input type="number" id="betInput">
<button id="startBtn">Start</button>
JS:

const game = new Blackjack();

document.getElementById("startBtn").addEventListener("click", function() {
    
    const betValue = parseInt(document.getElementById("betInput").value);
    
    game.setBet(betValue);
    game.startGame();
});
 Logica contro il computer (dealer)
Nel Blackjack vero:

Il dealer pesca finché ha meno di 17

Puoi fare così:

dealerTurn() {
    while (this.getScore(this.dealerCards) < 17) {
        this.dealerCards.push(this.drawCard());
    }
}
E una funzione per calcolare il punteggio:

getScore(cards) {
    return cards.reduce((sum, card) => sum + card, 0);
}



*/
const deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

function setBet(input) {
    if (input >= 10 && input <= playerMoney) {
        bet = input;
        return bet;
    } else {
        alert("coglione")
    }
}
class card {
    constructor(number, value) {
        this.number = setNumber();
        this.value = setValue();
    }
    setNumber(){
       let i = Math.floor(Math.random() * 13);
       number = deck[i];
       return number;
    }

    setValue(number) {
        if (number >= 2 && number <= 10) {
            value = number;
        }else if(number = "J"){
            value = 10;
        }else if(number = "Q"){
            value = 10;
        }else if(number = "K"){
            value = 10;
        }else if(number = "A"){
            if(totalPoints >= 11){
                value = 1;
            }else{
                value = 11;
            }
        }
        return value;
    }
}

class player {
    constructor(playerCards, playerMoney, bet, points) {
        this.playerCards = [];
        this.playerMoney = 1000;
        this.bet = setBet();
        this.points = totalPoints();
    }
    drawCard(card) {
        playerCards.push(card);
    }
    totalPoints() {

        return card;
    }
    resetCards() {
        playerCards = [];
    }

}
class Table {
    constructor(bet, dealerCards, playerCards, playerMoney) {
        this.bet = bet;
        this.dealerCards = dealerCards;
        this.playerCards = playerCards;
        this.playerMoney = playerMoney;
    }

};


const button = document.querySelector("#myButton");
const input = document.querySelector("#myInput + button");
let bet = 0;
input.addEventListener("input", (evt) => {
    // const p = document.createElement("p");
    // p.textContent = input.value;
    // button.appendChild(p);
    bet = parseFloat(input)
    // bet.value = input.value;
});
console.log(bet);

button.addEventListener("click", (evt) => {
    button.disabled = true;
});