const table = document.querySelector("#starWarsTable");
const button = document.querySelector("#starWarsTable + button");

/* button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/1")
        .then(result => result.json())
        .then(response => {
            for (let film of response.films) {
                fetch(film)
                    .then(result => result.json())
                    .then(response => makeRow(response));
            }
            button.disabled = true;    
        })
        .catch(error => console.log(error));
}); */

/* button.addEventListener("click", () => {
    fetch("https://swapi.dev/api/people/1")
        .then(result => result.json())
        .then(response => {
            const filmPromises = response.films.map(url => fetch(url).then(r => r.json()));
            return Promise.all(filmPromises); 
        })
        .then(films => films.forEach(film => makeRow(film)))
        .then(() => button.disabled = true)
        .catch(error => console.log(error));
});
 */

button.addEventListener("click", async () => {
    const responsePromise = fetch("https://swapi.dev/api/people/1");
    const response = await responsePromise;
    const lukePromise = response.json();
    const luke = await lukePromise;
    const filmResponsePromises = luke.films.map(url => fetch(url));
    const filmResponses = await Promise.all(filmResponsePromises);
    const filmPromises = filmResponses.map(res => res.json());
    const films = await Promise.all(filmPromises);
    films.forEach(f => makeRow(f));
    button.disabled = true;
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