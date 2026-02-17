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
        });
        button.disabled = true;
    }
}
