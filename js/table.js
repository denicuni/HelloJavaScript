const button = document.querySelector("#myTable + button");
const tb = document.querySelector("#myTable tbody")

/*button.addEventListener("click", (evt) => {
    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = "1";

    const tdName = document.createElement("td");
    tdName.textContent = "Mario";

    const tdLastName = document.createElement("td");
    tdLastName.textContent = "Rossi";

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdLastName);

    tb.appendChild(tr);
    */
   button.addEventListener("click", () => {
    // Chiedi dati all'utente
    const id = prompt("Inserisci l'ID dell'impiegato:");
    const nome = prompt("Inserisci il nome dell'impiegato:");
    const cognome = prompt("Inserisci il cognome dell'impiegato:");

    // Crea una nuova riga
    const tr = document.createElement("tr");

    // Crea celle con i dati inseriti
    const tdId = document.createElement("td");
    tdId.textContent = id;

    const tdNome = document.createElement("td");
    tdNome.textContent = nome;

    const tdCognome = document.createElement("td");
    tdCognome.textContent = cognome;

    // Aggiungi le celle alla riga
    tr.appendChild(tdId);
    tr.appendChild(tdNome);
    tr.appendChild(tdCognome);

    // Aggiungi la riga al tbody
    tb.appendChild(tr);
});
