const button = document.querySelector("#myTable + button");
const tb = document.querySelector("#myTable tbody");
const data = [1,2,3];

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
//for classico
for(let i = 0; i < employees.length; i++){
    console.log(employees[i].name);
}
//foreach
for(let e of employees){
    console.log(e.lastname);
}
//for in (ciclare sulle proprietà dell'oggetto)
for(let e in employees[0]){
    console.log(employees[0][e]);
}

console.log("Dimostrazione del metodo forEach");
employees.forEach(function(e){
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
});*/