let api_key= '325b851d442abfa1f66681afca0f296b'
let PeliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
let MiLista = "";
let seccion = document.querySelector(".seccion")
fetch(PeliculasPopulares)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data.results);
        let peliculas = data.results
        let informacion = " "
        for (let i=0; i<5; i++){
            informacion += `<article class="pelicula1">
            <a href="./detail-movie.html?id=${peliculas[i].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${peliculas[i].title}</strong></h3>
        </article>`
        }
        console.log(informacion);
        seccion.innerHTML= informacion
    })





