const button = document.querySelector("#myTable + button");
const tb = document.querySelector("#myTable tbody");
const data = [1, 2, 3, "pippo"];

const student = {
    name: "Pippo",
    lastname: "De Pippis",
    age: 30,
    sayHello: function () {
        console.log(this.name + " " + this.lastname);
    }
};
student.sayHello();

const employees = [{
    id: 1,
    name: "Lorenzo",
    lastname: "Violanti",
    role: "Senior Developer"
}, {
    id: 2,
    name: "Mattia",
    lastname: "Formiconi",
    role: "CEO"
}, {
    id: 3,
    name: "Francesco",
    lastname: "De Vecchi",
    role: "Il Boss Supremo"
}];
<<<<<<< HEAD
console.log("CLASSICO");
for(let i = 0; i < employees.length; i++){
    console.log(employees[i].name);
}
console.log("FOREACH");
for(let e of employees){
    console.log(e.lastname);
}
console.log("FOR IN");
for(let e in employees[0]){
    console.log(employees[0][e]);
=======
//for classico
for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].name);
}
//foreach
for (let e of employees) {
    console.log(e.lastname);
}
//for in (ciclare sulle proprietà dell'oggetto)
for (let e in employees[0]) {
    console.log(e);
>>>>>>> 2d34e22245a93f8c7a06d5c9c0e18dac086e07e3
}

console.log("Dimostrazione del metodo forEach");
employees.forEach(function (e) {
    console.log(e.role);
});

console.log("Dimostrazione metodo forEach con una Arrow Function");
employees.forEach(e => console.log(e.role));

console.log("Dimostrazione metodo forEach con una Arrow Function con l'indice");
employees.forEach((e, i) => console.log(e.role + " " + i));

console.log(employees[0].name);
console.log(employees[0]["name"]);
let x = "lastname";
console.log(employees[0][x]);
x = "role";
console.log(employees[0][x]);
console.log(employees[0]["na" + "me"]);

<<<<<<< HEAD
/* button.addEventListener("click", (evt) => {
    const tr = document.createElement("tr");
=======
button.addEventListener("click", (evt) => {
    fetch("data.json")
        .then(response => response.json())
        .then(empArray => loadData(empArray));
});
>>>>>>> 2d34e22245a93f8c7a06d5c9c0e18dac086e07e3

function loadData(remoteEmployees) {
    if (tb.children.length === 0) {
        remoteEmployees.forEach(e => {
            const tr = document.createElement("tr");

            const tdId = document.createElement("td");
            tdId.textContent = e.id;

            const tdName = document.createElement("td");
            tdName.textContent = e.name;

            const tdLastName = document.createElement("td");
            tdLastName.textContent = e.lastname;

<<<<<<< HEAD
    tb.appendChild(tr);
}); */

var index = 0;
button.addEventListener("click", (evt) => {
    appendEmployeeToTable(employees[index], tb);
    index++;
    if (index >= employees.length){
        button.disabled = true;
    };
});

const fuckinButton = document.querySelector("#fuckinButton");

fuckinButton.addEventListener("click", (evt) => {
    /*
    for (i in employees){
        appendEmployeeToTable(employees[i], tb);
    }
    fuckinButton.disabled = true; 
    */
    
    var table = document.querySelector("#myTable");
    appendMatchingToTable(employees[0], table)
    
})

function appendEmployeeToTable(e, tableBody){
    const tr = document.createElement("tr");

    // volevo prendere dalla table i dati dell head e metterli in un array
    const tdId = document.createElement("td");
    tdId.textContent = e.id;

    const tdName = document.createElement("td");
    tdName.textContent = e.name;

    const tdLastName = document.createElement("td");
    tdLastName.textContent = e.lastname;

    const tdRole = document.createElement("td");
    tdRole.textContent = e.role;

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdRole);

    tableBody.appendChild(tr);
};

function appendMatchingToTable(element, table){
    const thead = table.thead;
    const tbody = table.tBodies[0];

    var tr = document.createElement("tr");
    for(e in element){
        var td = document.createElement("td");
        td.textContent = element[e];
        tr.append(td);
    }

    tbody.appendChild(tr);
}

=======
            const tdRole = document.createElement("td");
            tdRole.textContent = e.role;

            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdRole);

            tb.appendChild(tr);
        });
        button.disabled = true;
    }
}
>>>>>>> 2d34e22245a93f8c7a06d5c9c0e18dac086e07e3
