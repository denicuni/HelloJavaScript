const ul = document.getElementById("myUl");
const button = document.querySelector("div>button");
const input = document.querySelector("#myInput");
button.disabled = true;
input.addEventListener("input",(_)=>{
    button.disabled=input.value.trim()=="";
})


function loadSite(){
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href=input.value;
    a.textContent = input.value;
    a.target="_blank";
    li.appendChild(a);
    ul.appendChild(li);
    input.value="";
    button.disabled= true;
}

button.addEventListener("click",loadSite);