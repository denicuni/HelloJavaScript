console.log("Start");
setTimeout(() => console.log("Scattato il time out"), 3000);
console.log("End");

function getData(callBack) {
	let result = null;
	setTimeout(() => {
		result = "Hello Asyncronos JavaScript";
		callBack(result);
	}, 3000);
	//return result;
}

function showData(response) {
	console.log("callBack");
	console.log(response);
}

//let data = getData(showData);
//showData(data);
getData(showData);







let a = 5;

function loadDoc() {
	console.log("Invocata la loadDoc");
	const http = new XMLHttpRequest();
	http.onreadystatechange = () => {
		console.log(this.readyState);
		if (this.readyState == 4 && this.status == 200) {
			target.textContent = this.responseText;
		}
	};
	http.open("GET", "data.json", true);
	http.send();
}

const button = document.querySelector("#response + button");
button.addEventListener("click", loadDoc);
const target = document.querySelector("#response");



//callback christmas tree
function loadDocComplex() {
	console.log("Invocata la loadDocComplex");
	const http = new XMLHttpRequest();
	http.onreadystatechange = function () {
		console.log(this.readyState);
		if (this.readyState == 4 && this.status == 200) {
			//target.textContent = this.responseText;
			const http2 = new XMLHttpRequest();
			http2.onreadystatechange = function () {
				//qui lavoro con dei risultati della seconda chiamata
			};
			http2.open("GET", http.responseText, true);
			http2.send();
		}
	};
	http.open("GET", "data.json", true);
	http.send();
}

//chiamata sincrona fortemente sconsigliata!
function loadDocSync() {
	console.log("Invocata la loadDocSync");
	const http = new XMLHttpRequest();
	http.open("GET", "data.json", false);
	http.send();
	if (http.status == 200) {
		target.textContent = http.responseText;
	}
}
