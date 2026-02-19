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
*/
const playerMoneyParagraph = document.querySelector("#playerMoney");
const betButton = document.querySelector("#betButton");
const hitButton = document.querySelector("#hitButton");
const stayButton = document.querySelector("#stayButton");
const input = document.querySelector("#myInput");
const deck = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
let totalPlayerPoints = 0;

hitButton.disabled = true;
stayButton.disabled = true;

class Card {
    constructor() {
        this.number = this.setNumber();
        this.value = this.setValue(this.number);
    }
    setNumber() {
        let i = Math.floor(Math.random() * 13);
        let number = deck[i];
        return number;
    }
    setValue(number) {
        let cardValue = 0;
        if (number >= 2 && number <= 10) {
            cardValue = number;
        } else if (number == "J") {
            cardValue = 10;
        } else if (number == "Q") {
            cardValue = 10;
        } else if (number == "K") {
            cardValue = 10;
        } else if (number == "A") {
            if (totalPlayerPoints >= 11) {
                cardValue = 1;
            } else {
                cardValue = 11;
            }
        }
        return cardValue;
    }
}

class Dealer {
    constructor() {
        this.dealerCards = [];
        this.dealerPoints = 0;
    }
    drawCard() {
        this.dealerCards.push(new Card());
        this.dealerPoints = this.totalPoints();
    }
    totalPoints() {
        let totalPoints = 0;
        this.dealerCards.forEach(card => totalPoints += card.value);
        return totalPoints;
    }
    resetCards() {
        this.dealerCards = [];
    }
    playHand() {
        while(this.dealerPoints <= 16) {
            this.drawCard();
        }
        console.log("Punteggio banco: " + this.dealerPoints);
        if (this.dealerPoints > 21) {
            playerWin();
        } else {
            checkWinner();
        }
    }
}

const dealer = new Dealer();

class Player {
    constructor() {
        this.playerCards = [];
        this.playerMoney = 1000;
        this.bet = 0;
        this.points = 0;
    }
    drawCard() {
        let card = new Card();
        console.log(card.number + ", " + card.value);
        this.playerCards.push(card);
        this.points = this.totalPoints();
    }
    totalPoints() {
        let totalPoints = 0;
        this.playerCards.forEach(card => totalPoints += card.value);
        if(totalPoints <= 21) {
            totalPlayerPoints = totalPoints;
            return totalPoints;
        }
        alert("Hahaha, coglione, hai sballato");
        resetBoard();
    }
    resetCards() {
        this.playerCards = [];
    }
    setBet(inputValue) {
        if (inputValue >= 10 && inputValue <= this.playerMoney) {
            this.drawCard();
            this.drawCard();
            dealer.drawCard();
            dealer.drawCard();
            this.bet = inputValue;
            this.playerMoney -= inputValue;
            playerMoneyParagraph.textContent = "Quanto sei povero: " + this.playerMoney;
            hitButton.disabled = false;
            stayButton.disabled = false;
            return true;
        } else {
            alert("coglione");
            return false;
        }
    }
}
class Table {
    constructor(bet, dealerCards, playerCards, playerMoney) {
        this.bet = bet;
        this.dealerCards = dealerCards;
        this.playerCards = playerCards;
        this.playerMoney = playerMoney;
    }
}
const player = new Player();

function checkWinner() {
    if (player.points > dealer.dealerPoints) {
        playerWin();
    } else if (player.points == dealer.dealerPoints) {
        player.playerMoney += (player.bet / 2);
        playerMoneyParagraph.textContent = "Quanto sei povero: " + player.playerMoney;
        alert("Mal comune...");
        resetBoard();
    } else {
        playerLose();
    }
}

function playerWin() {
    player.playerMoney += (player.bet * 2);
    playerMoneyParagraph.textContent = "Quanto sei povero: " + player.playerMoney;
    alert("Ti è andata di culo...");
    resetBoard();
}

function playerLose() {
    alert("Suca, hai perso");
    playerMoneyParagraph.textContent = "Quanto sei povero: " + player.playerMoney;
    resetBoard();
}

function resetBoard() {
    hitButton.disabled = true;
    stayButton.disabled = true;
    betButton.disabled = false;
    input.value = "";
    player.resetCards();
    dealer.resetCards();
    player.points = 0;
    dealer.dealerPoints = 0;
    totalPlayerPoints = 0;
    console.clear();
}

betButton.addEventListener("click", (evt) => {
    if (player.setBet(input.value)) {
        betButton.disabled = true;
    }
});

hitButton.addEventListener("click", (evt) => {
    player.drawCard();
});

stayButton.addEventListener("click", (evt) => {
    dealer.playHand();
});