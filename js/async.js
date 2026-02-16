console.log("Start");
setTimeout(() => console.log("Scattato il time out"), 3000);
console.log("End");

function getData(callback){
    let result = null;
    setTimeout(() => {
        result = "Hello Asyncronos JavaScript";
        callback(result);
    }, 3000);
    //return result;

}

function showData(response){
    console.log("Chiamata alla callback");
    console.log(response);
}

// let data = getData(showData());
getData(showData);
// console.log(data);

const button = document.querySelector("#response + button");
button.addEventListener("click", loadDoc);
const target = document.querySelector("#response");

function loadDoc(){
    console.log("invocata loadDoc");
    const http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        console.log(http.readyState);
        if(http.readyState == 4 && http.status == 200){
            target.textContent = http.responseText;
        }
    }
    http.open("GET","data.json", true);
    http.send();
}

function loadDocComplex(){
    console.log("invocata loadDoc");
    const http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        console.log(http.readyState);
        if(http.readyState == 4 && http.status == 200){
           // target.textContent = http.responseText;
           const http2 = new XMLHttpRequest();
           http2.onreadystatechange = function(){
                // qui lavoro con dei risultati della seconda chiamata.
           }
           http2.open("GET",http.responseText, true);
           http2.send();
        }
    }
    http.open("GET","data.json", true);
    http.send();
}

// chiamata sincrona fortemente sconsigliata.
function loadDocSync(){
    console.log("invocata loadDocSync");
    const http = new XMLHttpRequest();
    http.open("GET","data.json", false); 
    http.send();
    if(http.status == 200){
        target.textContent = http.responseText;
    }
}