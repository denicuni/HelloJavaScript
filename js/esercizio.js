const button = document.querySelector("div + button");
const container = document.querySelector("div");
const http = new XMLHttpRequest();
button.addEventListener("click",_ =>{
    http.onreadystatechange = function(){
         console.log(this.readyState);
        if(this.readyState==4 && this.status==200){
            container.textContent = this.responseText;
        }
            
    }
    http.open("GET","https://swapi.dev/api/people/1",true);
    http.send();

})
