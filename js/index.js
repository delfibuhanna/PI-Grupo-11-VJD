let api_key= '325b851d442abfa1f66681afca0f296b'
let PeliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
let MiLista = `https://api.themoviedb.org/3/tv/popular?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1`
let LasMasVistas = `https://api.themoviedb.org/3/movie/top_rated?api_key=700a3a180300423956be7a6dd87ae8b8&language=en-US&page=1`

let seccion = document.querySelector(".seccion");
let listas = document.querySelector("#lista");
let vista = document.querySelector("#vistas");
console.log(seccion);
console.log(lista);
console.log(vistas);


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
            <h4 class="titulo"><strong>${peliculas[i].release_date}</strong></h4>
        </article>`
        }

       
        seccion.innerHTML= informacion
        return data
    })

fetch(MiLista)
    .then(function(response){
        return response.json()
})

    .then(function(data){
        console.log(data.results);
        let lista = data.results
        let informacion = " "
        for (let i=0; i<5; i++){
            informacion += `<article class="pelicula1">
            <a href="./detail-movie.html?id=${lista[i].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${lista[i].poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${lista[i].name}</strong></h3>
            <h4 class="titulo"><strong>${lista[i].first_air_date}</strong></h4>
        </article>`
        }
       
        listas.innerHTML= informacion
        return data
})

fetch(LasMasVistas)
    .then(function(response){
        return response.json()
})

    .then(function(data){
        console.log(data.results);
        let vistas = data.results
        let informacion = " "
        for (let i=0; i<5; i++){
            informacion += `<article class="pelicula1">
            <a href="./detail-movie.html?id=${vistas[i].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${vistas[i].poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${vistas[i].title}</strong></h3>
            <h4 class="titulo"><strong>${vistas[i].release_date}</strong></h4>

        </article>`
        }
        
        vista.innerHTML= informacion
})


