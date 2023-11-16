let api_key= '325b851d442abfa1f66681afca0f296b'
let PeliculasPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
let MiLista = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`
let SeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`

let seccion = document.querySelector(".seccion");
let listas = document.querySelector("#lista");
let vista = document.querySelector("#series");
console.log(seccion);
console.log(lista);
console.log(series);


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
            <h3 class="titulo"><strong>${lista[i].title}</strong></h3>
            <h4 class="titulo"><strong>${lista[i].release_date}</strong></h4>
        </article>`
        }
       
        listas.innerHTML= informacion
        return data
})

fetch(SeriesPopulares)
    .then(function(response){
        return response.json()
})

    .then(function(data){
        console.log(data.results);
        let series = data.results
        let informacion = " "
        for (let i=0; i<5; i++){
            informacion += `<article class="pelicula1">
            <a href="./detail-serie.html?id=${series[i].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${series[i].name}</strong></h3>
            <h4 class="titulo"><strong>${series[i].first_air_date}</strong></h4>

        </article>`
        }
        
        vista.innerHTML= informacion
})


