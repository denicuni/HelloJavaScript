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
    for(let e of employees){
        const tr = document.createElement("tr");
        for(let key in e){
            const td = document.createElement("td");
            td.textContent = e[key]
            tr.appendChild(td)
        }
        tb.appendChild(tr)
        button.disabled = true
    }
});