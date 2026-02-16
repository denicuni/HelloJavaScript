let b = null;
console.log(typeof (b));
b = 3;
console.log(typeof (b));
b = "ciao";
console.log(typeof (b));

function example() {
    return
     4;
}

console.log(example());

b = document.getElementById("myButton"); // da accesso a id "myButton"
console.log(b);

let title = document.getElementById("title");
console.log(title);
console.log(window.title);

/*b.onclick = function (evt) {
    alert("Hello, World! da funzione");
}*/

// b.onclick = (evt) => alert("Hello, World! da funzione");

// b.onclick = (evt) => alert("Ho settato un secondo listener");

b.addEventListener("click", (evt) => {
    title.textContent = "Questo testo è stato settato da javaScript";

    title.style.color = "orange";
    title.style.fontSize = "50px";

    let input = document.querySelector("#newInput");
    console.log(input.value);

    let list = document.querySelector("#myList");
    const li = document.createElement("li");

    li.textContent = "Nuovo elemento";
    list.appendChild(li);

    console.log(evt.target.id);

});

// b.addEventListener("click", (evt) => alert("Hello, World! from second event listener"));