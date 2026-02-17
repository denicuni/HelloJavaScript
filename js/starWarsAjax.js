const table = document.querySelector("#starWarsTable");
const button = document.querySelector("#starWarsTable + button");

button.addEventListener("click", () => {
    const http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const films = JSON.parse(this.responseText).films;
            for (let film of films) {
                const http2 = new XMLHttpRequest();
                http2.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        makeRow(JSON.parse(this.responseText));
                    }
                }
                http2.open("GET", film, true);
                http2.send();
            }
            button.disabled = true;
        }
    }
    http.open("GET", "https://swapi.dev/api/people/1", true);
    http.send();
});

function makeRow(filmData) {
    const tr = document.createElement("tr");
    const titleTd = document.createElement("td");
    titleTd.textContent = filmData.title;
    tr.appendChild(titleTd);
    const directorTd = document.createElement("td");
    directorTd.textContent = filmData.director;
    tr.appendChild(directorTd);
    table.appendChild(tr);
}