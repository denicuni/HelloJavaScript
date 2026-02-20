let b = null;
console.log(typeof (b));
b = 3;
console.log(typeof (b));
b = "ciao";
console.log(typeof (b));

function example() {
    return
     4;
}

console.log(example());

b = document.getElementById("myButton"); // da accesso a id "myButton"
console.log(b);

let title = document.getElementById("title");
console.log(title);
console.log(window.title);

puntaButton.addEventListener("click", (event) => {
	alert("cliccato")
});

//funzione che gestisce evento click
//
//let event
//event.clientx = 5
//event.clienty = 10
//...
//...
//..
//.
//
//for(run : funArray){
//	run(event)
//}

function palle() {
	console.log('<div></div>');
}

function pasta() {
	console.log("pasta");
}

function termostato() {
}

let lista = []

lista.push(palle)
lista.push(termostato)
lista.push(pasta)

for (let i = 0; i < lista.length; i++) {
	lista[i]()
}

for (fun of lista) {
	fun()
}

// language=html
const template = `
  <div>
    <h1>Test</h1>


  </div>
`
