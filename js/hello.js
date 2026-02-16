let button = document.querySelector("button")

button.addEventListener("click", (event) => {
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
