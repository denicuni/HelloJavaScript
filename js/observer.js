class quadrato {
	constructor(lunghezza, altezza) {
		this._lunghezza = lunghezza;
		this._altezza = altezza;
		this._functionsAltezza = [];
		this._functionsLunghezza = [];
		this._functionsOnClickExecuted = [];
	}

	setLunghezza(lunghezza) {
		this._lunghezza = lunghezza;

		for (let func of this._functionsLunghezza) {
			func();
		}
	}

	setAltezza(altezza) {
		this._altezza = altezza;

		for (let func of this._functionsAltezza) {
			func();
		}
	}

	executeClick(){
		for (let func of this._functionsOnClickExecuted) {
			func();
		}
	}


	addEventListener(type, func) {
		if (type === "lunghezza") {
			this._functionsLunghezza.push(func);
		}
		if (type === "altezza") {
			this._functionsAltezza.push(func);
		}
		if (type === "click") {
			this._functionsOnClickExecuted.push(func);
		}
	}
}

let quadrato1 = new quadrato(5, 5);

quadrato1.addEventListener("lunghezza", () => console.log("Lunghezza cambiata"));
quadrato1.addEventListener("lunghezza", () => alert("non so che scrivere"));
quadrato1.addEventListener("altezza", () => console.log("lorenzo violanti gay"));
quadrato1.addEventListener("click", () => console.log("quadrato cliccato"));

quadrato1.setAltezza(10);
