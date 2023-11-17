let api_key = '325b851d442abfa1f66681afca0f296b'
let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let GenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`;
let GenerosSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=${api_key}`;

let genresPeliculas = document.querySelector(".genresPeliculas")
let genresSeries = document.querySelector(".genresSeries")


fetch(GenerosPeliculas)
    .then(function(response) {
        return response.json()
    })

    .then (function(data) {
        console.log(data.genres)
        let generos = data.genres
        let informacion = ""
        for (let index = 0; index < 10; index++){
            informacion += `
            <li class="contenedor-input"><a class="contenedor-input" href="./detail-genres.html?id=${data.genres[index].id}">${data.genres[index].name}</a></li>
           `
        }

        genresPeliculas.innerHTML= informacion
    })

    .catch(function(error){
        console.log(error);
    })



    fetch(GenerosSeries)
    .then(function(response) {
        return response.json()
    })

    .then (function(data) {
        console.log(data.genres)
        let generos = data.genres
        let informacion = ""
        for (let index = 0; index < 10; index++){
            informacion += `
            <li class="contenedor-input"><a class="contenedor-input" href="./detail-genres.html?id=${data.genres[index].id}">${data.genres[index].name}</a></li>
           `
        }

        genresSeries.innerHTML= informacion
    })

    .catch(function(error){
        console.log(error);
    })





