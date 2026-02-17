const table = document.querySelector("#starWarsTable");
const button = document.querySelector("#starWarsTable + button");

button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/1")
        .then(result => result.json())
        .then(response => {
            for (let film of response.films) {
                fetch(film)
                    .then(result => result.json())
                    .then(response => makeRow(response));
            }
            button.disabled = true;    
        });
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