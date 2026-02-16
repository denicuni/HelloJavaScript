console.log("Start");
setTimeout(() => console.log("Scattatao il time out"), 3000);
console.log("End")

function getData(callBack) {
    let result = null;
    setTimeout(() => {
        result = "Hello Asynchronous JS";
        callBack(result);
    }, 3000);
   // return result;
}

function showData(response){
    console.log("Chiamata la callBack");
    console.log(response);
}

// let data = getData(showData);
// showData(data);
getData(showData);

const button = document.querySelector("#response + button");
button.addEventListener("click", loadDocSync);
const target = document.querySelector("#response")

function loadDocSync(evt) {
    console.log("Invocata loaddocSync")
    const http = new XMLHttpRequest();

    http.open("GET", "data.json", true);
    http.send();
    if(http.status == 200) {
        target.textContent = http.responseText;
    }
}