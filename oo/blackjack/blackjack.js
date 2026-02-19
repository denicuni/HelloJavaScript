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
const suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];
const figures = ["KING", "QUEEN", "JACK"];
const bet = document.getElementById("bet");
const confirm = document.getElementById("confirm"); 
const start = document.getElementById("startButton");
const hit = document.getElementById("hitButton");
const stay = document.getElementById("stayButton");

class Game{
    constructor(){
        this.deck = new Deck();
        this.gambler = new Player();
        this.dealer = new Dealer();
    }
    startGambling(){
        this.addCardToPlayer(this.gambler);
        this.addCardToPlayer(this.gambler); //pesca due carte

        this.addCardToPlayer(this.dealer);
        this.addCardToPlayer(this.dealer); //due carte al dealer
    }
    addCardToPlayer(player){
        let card = this.deck.draw();
        player.hand.addCard(card);
        console.log(card);
    }
    startDealerTurn(){
        console.log("Starts dealer turn");
        this.dealer.takeTurn(this.gambler.hand.getPoints());
    }
    checkBust(points){
        return points > 21;
    }
    endGame(winner, loser){
        let value = bet.value;
        winner.money += value;
        loser.money = (loser.money - value); //da rivedere
        //fare i check sulla disponibilità in denaro
    }
    //metodo per lo split in caso di pareggio
}

class Player{
    constructor(){
        this.money = 1000;
        this.hand = new Hand();
    }
}

class Dealer extends Player{
    constructor(){
        super();
    }
    takeTurn(gamblerPoints){
        let dealerPoints = this.hand.getPoints();
        while(dealerPoints < gamblerPoints) {
            game.addCardToPlayer(this);
            dealerPoints = this.hand.getPoints();
            if(game.checkBust(dealerPoints)) {
                game.endGame(game.gambler, this);
            }
        }
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
        super(suit, number);
        this.number = number;
    }
}

class Figure extends Card{
    constructor(suit, figure){
        super(suit, 10);
        this.figure = figure;        
    }
}

class Ace extends Card{
    constructor(suit){
        super(suit, 1);
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
            for(let i = 2; i <= 10; i++){
                cardArray.push(new NumericCard(s, i));
            }
            for(let f of figures){
                cardArray.push(new Figure(s, f));
            }
        }
        return cardArray;
    }

    shuffle() {
        for(let i = 0; i < 1000; i++){
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

    getPoints(){
        let sum = 0;
        for(let c of this.cards) {
            sum += c.value;
        }
        return sum;
    }
}
const game = new Game();
confirm.addEventListener("click", (evt) => {
    game.startGambling();
})
hit.addEventListener("click", (evt) => {
    game.addCardToPlayer(game.gambler);
    if(game.checkBust(game.gambler.hand.getPoints())){
        game.endGame(game.dealer, game.gambler);
    }
})
stay.addEventListener("click", (evt) => {
    game.startDealerTurn();
})
