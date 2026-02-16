const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operazione conclusa con successo");
        }
        else {
            reject("Operazione fallita")
        }
    }, 3000);
})

myPromise
    .then(result => {
        console.log(result);
        return "Step 2";
    })
    .then(step2 => console.log(step2))
    .catch(error => console.log(error));
//p: indica una pseudoclasse per disinguere un link visitato da uno non visitato e cosi via.
// in questo caso serve per indicare una posizione tra due elementi (due div in promises.html) 
const target = document.querySelector("#mydiv p:nth-of-type(2)");

// la fetch qui ritorna una promessa
fetch("data.json")
    .then(response => response.json())
    .then(empArray => console.log(empArray[0].name))
    .catch(error => console.log(erro));