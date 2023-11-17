let api_key= '325b851d442abfa1f66681afca0f296b'
let loc = location.search;
let o = new URLSearchParams(loc)
let busqueda = o.get("Busqueda")

let urlPeliculas = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${busqueda}`
let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${busqueda}`

let titulo = document.querySelector(".titulos_principales");
let serie = document.querySelector("#seccionS");
let pelicula = document.querySelector(".seccion");



fetch(urlPeliculas)
    .then(function(response){
        return response.json()
})
    .then(function(data){
        if (data.results.length > 0){
            console.log(data.results);
            let peliculas = data.results
            let informacion = " "
            for (let index = 0; index < 5; index++){
                
                informacion += `<article class="pelicula1">
        <a href="./detail-movie.html?id=${peliculas[index].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${peliculas[index].poster_path}" alt="" ></a>
        <h3 class="titulo"><strong>${peliculas[index].title}</strong></h3>
        <h4 class="titulo"><strong>${peliculas[index].release_date}</strong></h4>
        </article>`}
            pelicula.innerHTML = informacion
            titulo.innerText = `Resultados de la busqueda para: ${busqueda}`
        }
        else{
            pelicula.innerHTML = `<p class="detalles"> No hay resultados para su busqueda </p>`
        }
        return data
    })
    .catch(function(error){
        console.log(error);
    })


    fetch(urlSeries)
    .then(function(response){
        return response.json()
})
    .then(function(data){
        if (data.results.length > 0){
            console.log(data.results);
            let series = data.results
            let informacion = " "
            for (let index = 0; index < 5; index++){
                
                informacion += `<article class="pelicula1">
        <a href="./detail-serie.html?id=${series[index].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${series[index].poster_path}" alt="" ></a>
        <h3 class="titulo"><strong>${series[index].name}</strong></h3>
        <h4 class="titulo"><strong>${series[index].first_air_date}</strong></h4>
        </article>`}
            serie.innerHTML = informacion
            titulo.innerText = `Resultados de la busqueda para: ${busqueda}`
        }
        else{
            serie.innerHTML = `<p class="detalles"> No hay resultados para su busqueda </p>`
        }
        return data
    })
    .catch(function(error){
        console.log(error);
    })

