const table = document.querySelector("#myTable");
const tBody = document.querySelector("#myTable tbody");
const button = document.querySelector("#myTable + button");
const emptyRow = document.querySelector("#myTable tbody td");

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