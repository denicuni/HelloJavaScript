const list = document.querySelector("#myOd");
const input = document.querySelector("#myInput");
const button = document.querySelector("#myInput + button");

button.disabled = true;

input.addEventListener("input", (evt) => {
    /*const text = input.value.trim();
    if (text == "") {
        button.disabled = true;
    } else {
        button.disabled = false;
    }*/

    button.disabled = input.value.trim() == "";

});

/*const items = document.querySelectorAll("#myOd li");
items.forEach(li => {
    li.addEventListener("click", (evt) => {
        li.remove();
    });
});*/

button.addEventListener("click", (evt) => {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
    button.disabled = true;

});

list.addEventListener("click", (evt) => {
    if (evt.target.tagName === "LI") {
        evt.target.remove();
    }
})