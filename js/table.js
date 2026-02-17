const table = document.querySelector("#myTable");
const tBody = document.querySelector("#myTable tbody");
const button = document.querySelector("#myTable + button");
<<<<<<< HEAD
const tb = document.querySelector("#myTable tbody");
const data = [1,2,3,"pippo"];
const student = {
    name:"pippo",
    lastname:"de pippis",
    age:30,
    sayHello: function(){
        console.log(this.name + " " + this.lastname);
    }
};
student.sayHello();

const employees = [{
    id:1,
    name:"lorenzo",
    lastname:"violanti",
    role:"senior developer"
},{
    id:2,
    name:"mattia",
    lastname:"formiconi",
    role:"ceo"
},{
    id:3,
    name:"francesco",
    lastname:"de vecchi",
    role:"il boss supremo"
}];

for(let i = 0; i < employees.length; i++){
    console.log(employees[i].name);
}

for(let e of employees){
    console.log(e.lastname);
}

for(let e in employees){
    console.log(e);
}

button.addEventListener("click", (evt) => {
    fetch("data.json")
        .then(response => response.json())
        .then(empArray => loadData(empArray));
})
function loadData(remoteEmployees){
    

    remoteEmployees.forEach(employee => {
        const tr = document.createElement("tr");
        const tdid = document.createElement("td");
        tdid.textContent = employee.id;

        const tdname = document.createElement("td");
        tdname.textContent = employee.name;

        const tdlastname = document.createElement("td");
        tdlastname.textContent = employee.lastname;

        const tdrole = document.createElement("td");
        tdrole.textContent = employee.role;

        tr.appendChild(tdid);
        tr.appendChild(tdname);
        tr.appendChild(tdlastname);
        tr.appendChild(tdrole);

        tb.appendChild(tr);
    });
}
=======
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
>>>>>>> origin/main
