const table = document.querySelector("#myTable");
const tBody = document.querySelector("#myTable tbody");
const button = document.querySelector("#myTable + button");

button.addEventListener("click", (evt) => {
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const surnameTd = document.createElement("td");
    idTd.textContent = 1;
    nameTd.textContent = "Giorgio";
    surnameTd.textContent = "Vanni";
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(surnameTd);
    tBody.appendChild(tr);
});