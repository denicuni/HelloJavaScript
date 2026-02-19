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

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }

    getPoints() {
        if (["J", "Q", "K"].includes(this.value)) return 10;
        if (this.value === "A") return 11;
        return parseInt(this.value);
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const suits = ["♠", "♥", "♦", "♣"];
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

        for (let s of suits) {
            for (let v of values) {
                this.cards.push(new Card(s, v));
            }
        }
        this.shuffle();
    }

    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    draw() {
        return this.cards.pop();
    }
}

class Hand {
    constructor() {
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    getScore() {
        let score = 0;
        let aces = 0;

        for (let c of this.cards) {
            score += c.getPoints();
            if (c.value === "A") aces++;
        }

        while (score > 21 && aces > 0) {
            score -= 10;
            aces--;
        }

        return score;
    }
}

class Player {
    constructor(money) {
        this.money = money;
        this.hand = new Hand();
    }
}

class Game {
    constructor() {
        this.player = new Player(1000);
        this.dealer = new Player(0);
        this.deck = new Deck();
        this.bet = 0;
        this.inGame = false;
    }

    start(bet) {
        if (bet < 10 || bet > this.player.money) return;

        this.bet = bet;
        this.player.money -= bet;
        this.inGame = true;

        this.player.hand = new Hand();
        this.dealer.hand = new Hand();
        this.deck = new Deck();

        this.player.hand.addCard(this.deck.draw());
        this.player.hand.addCard(this.deck.draw());

        this.dealer.hand.addCard(this.deck.draw());
        this.dealer.hand.addCard(this.deck.draw());

        updateUI(true);

        if (this.player.hand.getScore() === 21) {
            this.player.money += this.bet * 2.5;
            endGame("BLACKJACK! Hai vinto 🎉");
        }
    }

    hit() {
        this.player.hand.addCard(this.deck.draw());
        updateUI(true);

        if (this.player.hand.getScore() > 21) {
            endGame("Hai sballato! 😵");
        }
    }

    stay() {
        while (this.dealer.hand.getScore() < this.player.hand.getScore()) {
            this.dealer.hand.addCard(this.deck.draw());
        }

        const p = this.player.hand.getScore();
        const d = this.dealer.hand.getScore();

        if (d > 21) {
            this.player.money += this.bet * 2;
            endGame("Il banco sballa! Hai vinto 🎉");
        } else if (d > p) {
            endGame("Hai perso 😢");
        } else if (d === p) {
            this.player.money += this.bet;
            endGame("Pareggio 🤝");
        } else {
            this.player.money += this.bet * 2;
            endGame("Hai vinto 🎉");
        }
    }
}

const game = new Game();

document.getElementById("start").onclick = () => {
    const bet = parseInt(document.getElementById("bet").value);
    game.start(bet);
};

document.getElementById("hit").onclick = () => game.hit();
document.getElementById("stay").onclick = () => game.stay();

function updateUI(hideDealer) {
    document.getElementById("money").innerText = game.player.money;

    document.getElementById("player-cards").innerText =
        game.player.hand.cards.map(c => c.value + c.suit).join(" ");

    document.getElementById("dealer-cards").innerText =
        hideDealer
            ? "?? " + game.dealer.hand.cards[1].value + game.dealer.hand.cards[1].suit
            : game.dealer.hand.cards.map(c => c.value + c.suit).join(" ");

    document.getElementById("player-score").innerText =
        game.player.hand.getScore();

    document.getElementById("dealer-score").innerText =
        hideDealer ? "?" : game.dealer.hand.getScore();

    document.getElementById("hit").disabled = !game.inGame;
    document.getElementById("stay").disabled = !game.inGame;
}

function endGame(msg) {
    game.inGame = false;
    updateUI(false);
    document.getElementById("message").innerText = msg;
}
