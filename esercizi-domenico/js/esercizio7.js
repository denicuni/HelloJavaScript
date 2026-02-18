const riddle1Text = document.querySelector("#riddle1");
const riddle2Text = document.querySelector("#riddle2");
const riddle1Field = document.querySelector("#riddle1 + input");
const riddle2Field = document.querySelector("#riddle2 + input");
const button1 = document.querySelector("#riddle1 ~ button");
const button2 = document.querySelector("#riddle2 ~ button");

button1.addEventListener("click", async () => {
    if (riddle1Field.value.trim() == button1.dataset.expectedanswer) {
        riddle1Text.textContent = riddle1Text.textContent.replace(" Risposta errata...", "");
        riddle1Text.textContent += " Risposta esatta!";
        riddle1Field.disabled = true;
        button1.disabled = true;
    } else {
        riddle1Text.textContent += " Risposta errata...";
        setTimeout(() => riddle1Text.textContent = riddle1Text.textContent.replace(" Risposta errata...", ""), 3000);
    }
    riddle1Field.value = "";
});

button2.addEventListener("click", async () => {
    if (riddle2Field.value.trim() == button2.dataset.expectedanswer) {
        riddle2Text.textContent = riddle2Text.textContent.replace(" Risposta errata...", "");
        riddle2Text.textContent += " Risposta esatta!";
        riddle2Field.disabled = true;
        button2.disabled = true;
    } else {
        riddle2Text.textContent += " Risposta errata...";
        setTimeout(() => riddle2Text.textContent = riddle2Text.textContent.replace(" Risposta errata...", ""), 3000);
    }
    riddle2Field.value = "";
});