const myPromise = new Promise((resolve, reject) => { // prende in input 2 funzioni, 2 lambda
    setTimeout(() => {
        const succesful = true;
        if (succesful) {
            resolve("Operazione riuscita con successo") // prima callback e gli passa qualcosa se ha successo
        } else {
            reject("Operazione fallita") // seconda callback che invoca altro
        }
    }, 3000);
}); // oggetto promessa con inpunt lambda

myPromise
    .then(result => {
        console.log(result);
        return "Step 2";
    })
    .then(step2 => console.log(step2)) // lancio la promessa, ottengo un risultato, quel risultato lo smanetto e ottengo un altro valore che ritorno e questo valore può essere gestito da un'altra then
    .catch(error => console.log(error));
// Ora che ho una promessa, le callback che io prima settavo diventano una then ne una catch
// se prendo la resolve, quello che la resolve ottiene in input la riceverà la .then
// se fallisce la promessa e avesse eseguito la reject scatterebbe la catch e otterre in input "operazione fallita"
// Una promessa è una scatoletta che fa partire un operazione asincorna e dopo un toto di tempo nella scatola 
// si materializza un risultato o un errore. Ed essi si materializzano con .then e diamo una lambda oppure 
// .catch lambda quando abbiamo un errore nell'operazione

// Esempio di API che è una versione moderna di AJAX
// const target = document.querySelector("#myDiv p:nth-of-type(2)"); // --> qui stiamo beccando il secondo paragrafo dentro myDiv perchè c'è 2. Queste cose con i : si chiamano pseudoclassi. Indicano qualcosa di specifico su un elemento e si usano spesso sui link per distinguere tra un link viistato da uno noin visistato "tipo quelli che diventano viola"
// const promise = fetch("data.json"); // la fetch ritorna una promessa
// promise.then(response => console.log(response)); 
fetch("data.json")
    //.then(response => response.text()) // se voglio vedere il testo che c'è dentro devo usare text -> il risultato di una text è una promessa a sua volta quindi la faremo ritornare da questo metodo
    .then(response => response.json()) // Trasforma la response in JSON
    .then(empArray => console.log(empArray[0].name)) // cosi vediamo anche il JSON
    .catch(error => console.log(error));

