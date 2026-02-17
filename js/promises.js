const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const successful = true;
        if(successful){
<<<<<<< HEAD
            resolve("Operzione conclusa con successo");
        } else {
            reject("Operazione fallita.");
=======
            resolve("Operazione conclusa con successo");
        }else{
            reject("Operazione fallita");
>>>>>>> origin/main
        }
    }, 3000);
});

myPromise
    .then(result => {
        console.log(result);
        return "Step 2";
    })
    .then(step2 => console.log(step2))
    .catch(error => console.log(error));

const target = document.querySelector("#myDiv p:nth-of-type(2)");

<<<<<<< HEAD
// const promise = fetch("data.json");
// promise
//     .then(response => response.json())
//     .then(empArray => console.log(empArray[0].name));
=======
//const promise = fetch("data.json");
//promise
//    .then(response => response.json())
//    .then(empArray => console.log(empArray[0].name));
>>>>>>> origin/main

fetch("data.json")
    .then(response => response.json())
    .then(empArray => console.log(empArray[0].name))
    .catch(error => console.log(error));
<<<<<<< HEAD

    /*
        sto creando un nuovo oggetto di tipo Promise. 
        Quando creo un oggetto di tipo Promise devo passargli due funzioni,
        che sono simili a due callback. 
        Fa un lavoro asincrono, se ha successo invoca la prima callback (la resolve), 
        e gli passa qualcosa (in questo caso gli passa la stringa "Operazione conclusa con successo"),
        se invece qualcosa va storto, invoca un'altra callback, reject, che è la callback di errore.
        Questa promise fa scattare una setTimeout e quando viene invocata crea una variabile, 
        impostata a true, e subito dopo invoca la resolve. Se invece resolve fosse a false, 
        invocherebbe la reject.
        Avendo una promessa, ora posso settarci then e catch. 
        Se verrà invocata la resolve all'interno della promessa, quello che la resolve riceve in
        input lo riceverà la then della promessa. La result in riga 13 sarà la stringa alla riga 5.
        Se invece success è false, si andrà nel catch.
    */
=======
>>>>>>> origin/main
