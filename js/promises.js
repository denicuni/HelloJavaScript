const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => { //simula un'operazione asincrona
        const successful = true; //simula il risultato dell'operazione 
        if(successful){
            resolve("Operazione conclusa con successo");
        }else{
            reject("Operazione fallita");
        }
    }, 3000);
});
//gestione della promise: per leggere il risultato devo usare then e catch
myPromise
    .then(result => {
        console.log(result);
        return "Step 2"; // diventa il valore della Promise successiva nella catena
    })
    .then(step2 => console.log(step2))
    .catch(error => console.log(error));

const target = document.querySelector("#myDiv p:nth-of-type(2)"); // seleziona il secondo <p>

//const promise = fetch("data.json");
//promise
//    .then(response => response.json())
//    .then(empArray => console.log(empArray[0].name));

fetch("data.json")
    .then(response => response.json()) // response è la risposta HTTP mentre .json() converte il corpo in oggetto JS
    .then(empArray => console.log(empArray[0].name))
    .catch(error => console.log(error));
