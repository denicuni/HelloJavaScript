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
	console.log("palle");
}

function pasta() {
	console.log("pasta");
}

function termostato() {
	console.log("porcoddio si muore di caldo")
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
