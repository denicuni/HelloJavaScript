/*
    # implementare il gioco del blackjack in cui un singolo giocatore giocherà contro il computer
    
    # il giocatore comincierà con 1000€ e potrà giocare nuovi round di blackjack finché non diventa povero
    
    # per cominciare una nuova mano dovrà puntare una nuova mano >=10€; dopo di ché dovrà schiacciare un pulsante
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
const suits = [HEARTS, SPADES, DIAMONDS, CLUBS];
const figures = [KING, QUEEN, JACK];
const bet = document.getElementById("bet");
const confirm = document.querySelector("#bet + button"); 
const start = document.getElementById("startButton");
const hit = document.getElementById("hitButton");
const stay = document.getElementById("stayButton");

class Game{
    constructor(){
        this.deck = new Deck();
        this.player = new Player();
        // to do: banco
    }
    startGambling(){
        this.player.hand.addCard(this.deck.draw());
        this.player.hand.addCard(this.deck.draw()); //pesca due carte
    }
}

class Player{
    constructor(){
        this.money = 1000;
        this.hand = new Hand();
    }
}

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

class NumericCard extends Card{
    constructor(suit, number){
        Card.call(this, suit, number);
        this.number = number;
    }
}

class Figure extends Card{
    constructor(suit, figure){
        Card.call(this, suit, 10);
        this.figure = figure;        
    }
}

class Ace extends Card{
    constructor(suit){
        Card.call(this, suit, 1);
    }
    setValue(value){
        this.value = value;
    }
}

class Deck{
    #totCards = 52;

    constructor(){
        this.cards = this.createCards(); 
        this.shuffle();
    }

    createCards(){
        let cardArray = [];
        for(let s of suits){
            cardArray.push(new Ace(s)); 
            for(let i = 2; i < 10; i++){
                cardArray.push(new NumericCard(s, i));
            }
            for(let f of figures){
                cardArray.push(new Figure(s, f));
            }
        }
        return cardArray;
    }

    shuffle() {
        for(i = 0; i < 1000; i++){
            this.cards.sort(() => Math.random() - 0.5);
        }
    }

    draw(){
        return this.cards.pop(); // pop è un metodo che ritorna ultimo oggetto inserito nello stack
    }
}

class Hand{
    constructor(){
        this.cards = []; //array vuoto
    }

    addCard(dealtCard){
        this.cards.push(dealtCard);
    }
}
const game = new Game();
confirm.onClick = game.startGambling;
