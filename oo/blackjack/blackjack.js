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


