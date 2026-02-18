const table = document.querySelector("#starWarsTable");
const button = document.querySelector("#starWarsTable + button");

/* button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/1")
        .then(result => result.json())
        .then(response => {
            for (let film of response.films) {
                fetch(film)
                    .then(result => result.json())
                    .then(response => makeRow(response));
            }
            button.disabled = true;    
        })
        .catch(error => console.log(error));
}); */

/* button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/1")
        .then(result => result.json())
        .then(response => {
            const filmPromises = response.films.map(url => fetch(url).then(r => r.json()));
            return Promise.all(filmPromises); 
        })
        .then(films => films.forEach(film => makeRow(film)))
        .then(() => button.disabled = true)
        .catch(error => console.log(error));
});
 */

button.addEventListener("click", async () => {
    //restituisce una promise che conterra in futuro una risposta
    const responsePromise = fetch("https://swapi.dev/api/people/1");
    //promise -> risposta (quando si roslve)
    const response = await responsePromise;
    //estrarre contenuto json dalla risposta --> promessa che ci sarà un oggetto
    const lukePromise = response.json();
    //quando è pronta la conversione json otteniamo l'oggetto 'luke'
    const luke = await lukePromise;
    //array di url, su ogni url chiami fetch e otteniamo un array di PROMISE
    // -> [promise, promise, promise...]
    const filmResponsePromises = luke.films.map(url => fetch(url));
    //promise.all -> aspetta che tutte le fetch dei film siano concluse
    //restituisce un array di risposte (fetch produce response come ritorno)
    const filmResponses = await Promise.all(filmResponsePromises);
    // ogni risposta ricevuta la convertiamo in json e creiamo un nuovo
    //array di promise che produrranno oggetti
    const filmPromises = filmResponses.map(res => res.json());
    //aspettiamo che tutte le conversioni json siano terminate
    //films contiene array di oggetti film
    const films = await Promise.all(filmPromises);
    //passiamo array di oggetti ad una funzione per creare una tabella
    films.forEach(f => makeRow(f));
    button.disabled = true;
});

function makeRow(filmData) {
    const tr = document.createElement("tr");
    const titleTd = document.createElement("td");
    titleTd.textContent = filmData.title;
    tr.appendChild(titleTd);
    const directorTd = document.createElement("td");
    directorTd.textContent = filmData.director;
    tr.appendChild(directorTd);
    table.appendChild(tr);
}