const myPromise = new Promise((resolve,reject) => {
    setTimeout(() => {
        const successful = true;
        if(successful){
            resolve("Operazione conclusa con successo");
        }else{
            reject("Operazione fallita");
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

//const promise = fetch("data.json");
//promise
//    .then(response => response.json())
//    .then(empArray => console.log(empArray[0].name));

fetch("data.json")
    .then(response => response.json())
    .then(empArray => console.log(empArray[0].name))
    .catch(error => console.log(error));
