//AJAX = In informatica AJAX, acronimo di Asynchronous JavaScript and XML,
//è un insieme di tecniche e metodologie di sviluppo software per la realizzazione di applicazioni web interattive 
//(Rich Internet Application), basandosi su uno scambio di dati in background fra web browser e server,
//consentendo così l'aggiornamento dinamico di una pagina web senza esplicito ricaricamento da parte dell'utente.
//faccio due richieste perche con una prendo un personaggio e da quel personaggio tutti i dati che mi interessano 


const button = document.querySelector("div + button");
const container = document.querySelector("#Risultato");
const http = new XMLHttpRequest();
button.addEventListener("click",_ =>{
    http.onreadystatechange = function(){
         console.log(this.readyState);
        if(this.readyState==4 && this.status==200){
           let luke = JSON.parse(this.responseText);
           console.log(luke);
           for(let url of luke.films){
                let http2 = new XMLHttpRequest();
                http2.onreadystatechange = function(){
                    if(this.readyState==4 && this.status==200){
                       let film = JSON.parse(this.responseText);
                       console.log(film);
                       let container2 = document.createElement("div");
                       container2.textContent = film.title +": "+ film.director;
                       container.appendChild(container2);
                    }
                }
                http2.open("GET",url,true);
                http2.send();
           }
        }          
    }
    http.open("GET","https://swapi.dev/api/people/1",true);
    http.send();

})
