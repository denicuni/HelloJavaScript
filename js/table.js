// js/table.js

const button = document.querySelector("#myTable + button");
const tb = document.querySelector("#myTable tbody");

const data = [1, 2, 3, "pippo"];

const student = {
  name: "pippo",
  lastname: "de pippis",
  age: 30,
  sayHello: function () {
    console.log(this.name + " " + this.lastname);
  },
};
student.sayHello();

const employees = [
  {
    id: 1,
    name: "lorenzo",
    lastname: "violanti",
    role: "senior developer",
  },
  {
    id: 2,
    name: "mattia",
    lastname: "formiconi",
    role: "ceo",
  },
  {
    id: 3,
    name: "francesco",
    lastname: "de vecchi",
    role: "il boss supremo",
  },
];

// for classico
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}

// for..of
for (let e of employees) {
  console.log(e.lastname);
}

// for..in (ciclare sulle proprietà dell'oggetto)
for (let k in employees[0]) {
  console.log(employees[0][k]);
}

console.log("Dimostrazione del metodo forEach");
employees.forEach(function (e) {
  console.log(e.role);
});

console.log("Dimostrazione metodo forEach con una Arrow Function");
employees.forEach((e) => console.log(e.role));

console.log("Dimostrazione metodo forEach con una Arrow Function con l'indice");
employees.forEach((e, i) => console.log(e.role + " " + i));

console.log(employees[0].name);
console.log(employees[0]["name"]);

let x = "lastname";
console.log(employees[0][x]);

x = "role";
console.log(employees[0][x]);
console.log(employees[0]["na" + "me"]);


// SOLUZIONE: al click inserisce 3 righe (employees) e poi blocca il bottone

button.addEventListener("click", (evt) => {                 // Quando clicco il bottone, esegui questa funzione (evt = evento click)

  for (let i = 0; i < employees.length; i++) {              // Ciclo tutti gli impiegati nell'array (da 0 fino a length-1)

    const tr = document.createElement("tr");                // Creo una nuova riga della tabella <tr>

    const tdId = document.createElement("td");              // Creo la cella <td> per l'id
    tdId.textContent = employees[i].id;                     // Inserisco l'id dell'impiegato i-esimo nella cella --> metti come testo dentro <td> l’id dell’impiegato.
    tr.appendChild(tdId);                                   // Aggiungo la cella id dentro la riga

    const tdName = document.createElement("td");            // Creo la cella <td> per il nome
    tdName.textContent = employees[i].name;                 // Inserisco il nome dell'impiegato i-esimo
    tr.appendChild(tdName);                                 // Aggiungo la cella nome dentro la riga

    const tdLastName = document.createElement("td");        // Creo la cella <td> per il cognome
    tdLastName.textContent = employees[i].lastname;         // Inserisco il cognome dell'impiegato i-esimo
    tr.appendChild(tdLastName);                              // Aggiungo la cella cognome dentro la riga

    const tdRole = document.createElement("td");            // Creo la cella <td> per il ruolo
    tdRole.textContent = employees[i].role;                 // Inserisco il ruolo dell'impiegato i-esimo
    tr.appendChild(tdRole);                                 // Aggiungo la cella ruolo dentro la riga

    tb.appendChild(tr);                                      // Aggiungo la riga completa nel <tbody> della tabella
  }                                                          // Fine ciclo: ho inserito tutte le righe

  button.disabled = true;                                    // Disabilito il bottone per impedire ulteriori click
});                                                          // Chiudo la funzione del listener e la chiamata addEventListener