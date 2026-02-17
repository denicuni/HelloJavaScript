const table = document.querySelector("#myTable");
const tBody = document.querySelector("#myTable tbody");
const button = document.querySelector("#myTable + button");
<<<<<<< HEAD
const emptyRow = document.querySelector("#myTable tbody td");
=======
const tb = document.querySelector("#myTable tbody");
const data = [1,2,3,"pippo"];

const student = {
    name: "Pippo",
    lastname: "De Pippis",
    age: 30,
    sayHello: function () {
        console.log(this.name + " " + this.lastname);
    }
};
student.sayHello();
>>>>>>> eric.andreotti

const employees = [{
    id: 1,
    name: "Lorenzo",
    lastname: "Violanti",
    role: "Senior developer"
},{
    id: 2,
    name: "Mattia",
    lastname: "Formiconi",
    role: "CEO"
},{
    id: 3,
    name: "Francesco",
    lastname: "De Vecchi",
    role: "Boss Supremo"
}]

button.addEventListener("click", (evt) => {
<<<<<<< HEAD
    for (let e of employees) {
        const tr = document.createElement("tr");
        const idTd = document.createElement("td");
        const nameTd = document.createElement("td");
        const surnameTd = document.createElement("td");
        const roleTd = document.createElement("td");
        idTd.textContent = e.id;
        nameTd.textContent = e.name;
        surnameTd.textContent = e.lastname;
        roleTd.textContent = e.role;
        tr.appendChild(idTd);
        tr.appendChild(nameTd);
        tr.appendChild(surnameTd);
        tr.appendChild(roleTd);
        tBody.appendChild(tr);
    }
    button.disabled = true;
});
=======

    employees.forEach(employee => {

    const tr = document.createElement("tr");

    const tdId = document.createElement("td");
    tdId.textContent = employee.id;

    const tdName = document.createElement("td");
    tdId.textContent = employee.name;

    const tdLastName = document.createElement("td");
    tdId.textContent = employee.lastname;

    const tdRole = document.createElement("td");
    tdId.textContent = employee.role;

    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdLastName);
    tr.appendChild(tdRole);

    tr.appendChild(tr); 
});

button.disabled = true;
});

//altro modo, più compatto
/*
button.addEventListener("click", function () {
    data.forEach(function(id){

        //trova l'impiegato con quell'id
        const employee = employees.find(emp => emp.id === id);

        //crea la riga
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.lastname}</td>
        <td>${employee.role}</td>
        `;
        tb.appendChild(tr);
    });

    //disabilita il bottone
    button.disabled = true;
});
*/
/*
button.addEventListener("click", (evt) => {
    fetch("data.json")
        .then(response => response.json())
        .then(empArray => loadData(empArray));
});

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

            const tdRole = document.createElement("td");
            tdRole.textContent = e.role;

            tr.appendChild(tdId);
            tr.appendChild(tdName);
            tr.appendChild(tdLastName);
            tr.appendChild(tdRole);

    tb.appendChild(tr);
});*/
>>>>>>> eric.andreotti
