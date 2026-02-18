// Quando clicchi un bottone, 
// mostrare tutti i film in cui appare Luke Skywalker con:

// Titolo del film

// Regista (director)

// Per farlo servono 2 parti:

// Prima chiamata: prendi Luke
// GET https://swapi.dev/api/people/1/
// Nella risposta c’è films: [ ...urls... ] (un array di URL dei film).

// Seconda chiamata: per ogni URL in films, fai una richiesta e prendi title e director.


// Con AJAX (XMLHttpRequest) finisci facilmente in callback annidate (“Christmas tree”).

// Con Fetch puoi farlo con catene di .then() (o async/await) in modo più lineare.

const target = document.querySelector("#response");
const buttonFetch = document.querySelector("#btnFetch");

buttonFetch.addEventListener("click", loadLukeFilmsFetch);

function loadLukeFilmsFetch() {
  target.textContent = "Carico Luke (Fetch)...";

  fetch("https://swapi.dev/api/people/1/")
    .then((res) => {
      if (!res.ok) throw new Error("Errore nel caricare Luke");
      return res.json();
    })
    .then((luke) => {
      target.textContent = "Luke caricato. Carico film (Fetch)...\n\n";

      // Creo le promesse per tutti i film
      const filmPromises = luke.films.map((url) =>
        fetch(url)
          .then((r) => {
            if (!r.ok) throw new Error("Errore nel caricare un film");
            return r.json();
          })
          .then((film) => ({ title: film.title, director: film.director }))
      );

      return Promise.all(filmPromises);
    })
    .then((films) => {
      target.textContent = films
        .map((f) => `• ${f.title} — ${f.director}`)
        .join("\n");
    })
    .catch((err) => {
      target.textContent = `Errore: ${err.message}`;
    });
}
