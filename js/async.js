console.log("Start"); // Questo è il modo asincrono, la programmazione asincrona
setTimeout(() => console.log("Scattato il timeout"), 3000); // JS è monothread rispetto ad altri linguaggi! 
// Permette di eseguire un'altra funzione fra un pò di tempo e prenderà in input questa funzione 
// che aspetta e i millisecondi di attesa
console.log("End"); // Ordine d'esecuzione --> Start - End - Scattato il timeout
// Introduce la callback, una funzione che viene invocata quando arriva la risposta: Questo succede nella vita reale, pensate ad un ristorante, il cameriere va dal cuoco a dire cosa abbiamo ordinato ma non sta li ad aspettare che il cuoco finisci. Quando è protno suona e faccio la callback, cioè prendo l'hamburger e lo porto al cliente
result = null;
function getData(){
    setTimeout(() => result = "Hello Asyncronos Javascript", 3000); // “esegui questo codice senza ricevere argomenti” -> In una arrow function, le parentesi () contengono i parametri della funzione. Se non ti serve nessun parametro, le parentesi restano vuote.
    return result;
}
let data = getData();
console.log(data); // Stampa null in console -> Perchè quando viene eseguita la funzione, crea la variabile, parte settimeout e dopo 3 secondi la setta
// Poi però ritorna molto prima dei 3 secondi, ecco perchè null
// modi per risolvere: registrate una callback "quando si verificherà l'evento x (tipo sono passati 3 secondi)" ti rispondo come vorrresti
// altro modo: Le promises (le promesse) -> Simile ad OPTIONAl in java. Una promessa è una scatoletta che "immediatamente non contiene nulla" ma in futuro conterrà un risultato (come una luce che si accende dopo un tot -> tipo prelevare soldi per qualcuno)
// CALLBACK
result = null;
function getData1(callBack){
    setTimeout(() => {result = "Hello Asyncronos Javascript"; // “esegui questo codice senza ricevere argomenti” -> In una arrow function, le parentesi () contengono i parametri della funzione. Se non ti serve nessun parametro, le parentesi restano vuote.
    callBack(result); 
   }, 3000)
   // return result;
}
 function showData(response){
    console.log("Chiamata alla callback");
    console.log(response); // callback
 }
// let data1 = getData(showData);
// showData(data1) -> questo è l'approccio tradizionale ma è sbagliato, perchè non può ritornarmela "tipo cameriere che aspetta che il cuoco finisca e poi torna in sala, lui deve lavorare subito"
getData1(showData);

// Ora ci fa vedere il callback in una cosa realistica chiamata AJAX -> asincrono javascript e xml --> Albroi delle single page application (angular react sono i suoi successori)
// L'idea è stata questa: Se ho una pagina html molto complessa e l'utente vuole cambiare un qualcosa x motivi di peformance sto facendo viaggiare al 90% la pagina da server a client che era uguale a prima al 90%
// Inoltre l'esperienza utente vede flippare la pagina solo per cambiare pagina x vedere un rettangolino con dei dati non è geniale
// l'idea allora è stata "ma se JS fosse capace di fare richieste al SERVER tramite richiest HTTP?" Ottine i dati da mettere nel rettangolino via XMl e poi con questi dati è capace
// di modificare la pagina come è stato richiesto -> Questa cosa è stata molto utile per le ricerche tipo Trenitalia, metto la lettera R e lui si aggiorna Ravenna, Roma, Ragusa X ogni lettera che scrivo lui chiede al backend ogni volta le città aggiornate
// Se metto RA esce ragusa ma lui ha fatto un'altra richiesta... e cosi via --> In passato questo meccanismo era già AJAX
const button = document.querySelector("#response + button"); // Collego al button
button.addEventListener("click", loadDoc);
const target = document.querySelector("#response");
function loadDoc(){ // Questa funzione crea l'oggetto XML che sa fare le chiamate http al backend
    console.log("Invocata la loadDoc");
    const http = new XMLHttpRequest(); // Oggetto che farà le richieste --> Formato XML all'epoca o lo chiameremmo JSONhttpRequest probabilmente
    http.onreadystatechange = function(){ // La chiamata l'oggetto lo farà in maniera asincrona --> Questo è l'evento che scatterà ogni volta che cambierà il suo stato interno in risposta è un EVENTO
        if(this.readyState == 4 && this.status == 200){  // Gli step sono 4: Inizio richiesta, fine richiesta, inizio risposta, fine risposta
            target.textContent = this.responseText; // Questa funzione scrive la risposta del server nella div --> If server perchè questo evento scatta più volte, quando finisce/invia la richiesta e stessa cosa quando la riceve
        } // 4 significa che 4 = risposta terminata quando arrivi a 4 --> 200 invece è lo status se la risposta del server ha il codice 200. Dopo che hai la risposta dammela 
    };
    // In un listener, quando scatta un listener, all'interno di un listener this è l'oggetto che ha fatto scattare l'evento, su cui si è verificato, in questo caso l'oggetto http
    http.open("GET", "data.json", true); // Faremo la richiesta con get, gli chiediamo il file data.json e true vuol dire fai la richiesta in maniera sincrona (che è il default)
    http.send(); // Dopodichè il send manda la richiesta istantanemanete, ma ricordati che la gestione della richiesta verrà fatta dal callback
    // Quando verrà fatta la send della richiesta, essa tornerà immediatamente --> Ecco perchè dobbiamo registrare una callback! Non ci dà la risposta send
} // La richiesta avviene se c'è un evento, in questo l'evento è il click sul bottone!
function loadDocSync(){ // Funzione creta solo per far vedere anche la versione sincrona che però è inutile perchè deve aspettare se non ho capito --> SCONSIGLIATA!!!!!!!!!
    console.log("Invocata la loadDoc");
    const http = new XMLHttpRequest(); 
    http.open("GET", "data.json", false); // Forzo la chiamata ad essere sincrona
    http.send();
    if(http.status == 200){ // Tolgo il 4 qui perchè la risposta è già arrivata qui
        target.textContent = http.responseText;
    } 
}