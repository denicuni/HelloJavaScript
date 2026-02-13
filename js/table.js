const button = document.querySelector("#myTable + button");
const tb = document.querySelector("#myTable tbody")

button.addEventListener("click", (evt) => {
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
})