let loc = location.search;
let o = new URLSearchParams(loc)
let busqueda = o.get("buscar")
let nombre =document.querySelector(".seccion");
let api_key= '325b851d442abfa1f66681afca0f296b'

let urlPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${ busqueda}`
let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${ busqueda}`

console.log(busqueda);

fetch(urlPeliculas)
    .then(function(response){
        return response.json()
})
    .then(function(data){
        console.log(data.results);
        let pelicula = data.results
        let informacion = " "
        for (let i=0; i<5; i++){
           informacion += 
           
           
           
           
           `<article class="pelicula1">
            <a href="./detail-movie.html?id=${peliculas[i].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${peliculas[i].title}</strong></h3>
            <h4 class="titulo"><strong>${peliculas[i].release_date}</strong></h4>
        </article>`
        }
        urlPeliculas.innerHTML= informacion
        return data
    })
        .catch(function(error){
            return;
    })

