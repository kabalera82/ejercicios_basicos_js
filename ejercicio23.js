/*

Ejercicio 23

Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola.

*/

const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

  /*
  function duracionPeliculas(lista){
    let peliculasPequenas = [];
    let peliculasMedianas = [];
    let peliculasGrandes = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].durationInMinutes < 100) {
            peliculasPequenas.push(lista[i].name);
        } else if (lista[i].durationInMinutes < 200) { 
            peliculasMedianas.push(lista[i].name);
        } else { 
            peliculasGrandes.push(lista[i].name);
        }
    }
    return [peliculasPequenas, peliculasMedianas, peliculasGrandes];
}

console.log(duracionPeliculas(movies));
*/

const smallMovies = [];
const mediumMovies = [];
const largeMovies = [];

for (const movie of movies){
    if(movie.durationInMinutes < 100){
        smallMovies.push(movie);
    } else if (movie.durationInMinutes < 200){
        mediumMovies.push(movie);
    } else {
        largeMovies.push(movie);
    }
}

console.log("Cortas: ", smallMovies);
console.log("Medianas: ", mediumMovies);
console.log("Largas: ", largeMovies);

