const button = document.querySelector("#myTable + button");
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