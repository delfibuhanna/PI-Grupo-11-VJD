let movie 
let api_key = '325b851d442abfa1f66681afca0f296b'
let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let pId = qsToObj.get('id')
let sId = qsToObj.get('id')
let GenerosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${id}`;
let GenerosSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${id}`;

let genresPeliculas = document.querySelector("#detalle_gp")
let genresSeries = document.querySelector("#detalle_gs")

if(pId!=null) {
    fetch(GenerosPeliculas)
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        let informacion = "";

        for (let index=0; index<5; index++){
            informacion +=`<img class="imgpelicula" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="${data.[index]name}"> `
        }
        genresPeliculas +=informacion;
    })
    .catch(function(error){
        console.log(error);
    });
}

if(sIdId!=null) {
    fetch(GenerosSeries)
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);
        let informacion = "";

        for (let index=0; index<5; index++){
            informacion +=`<img class="imgpelicula" id="serie" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="${data.name}">`
        }
        genresSeries +=informacion;
    })
    .catch(function(error){
        console.log(error);
    });
}

fetch(GenerosPeliculas)
    .then(function(response) {
        return response.json()
    })

    .then (function(data) {
        console.log(data.results)
        let movie= data.results
        let informacion = ""
        for (let index = 0; index < 5; index++){
            console.log(data.results[index].poster_path)
            if (data.results[index].poster_path!=null) {
                informacion += `<article class="seccion">
                <a href="./detail-movie.html?id=${peliculas[index].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${peliculas[index].poster_path}" alt="" ></a>
                <h3 class="titulo"><strong>${pelicuas[index].title}</strong></h3>
                <h4 class="titulo"><strong>${peliculas[index].release_date}</strong></h4>
            </article>`
            }
        }
        genresPeliculas.innerHTML= informacion
    })
    .catch(function(error){
        console.log(error);
    });

fetch(GenerosSeries)
    .then(function(response) {
        return response.json()
    })

    .then (function(data) {
        console.log(data.results)
        let informacion = ""
        for (let index = 0; index < 5; index++){
                console.log(data.results[index].poster_path)
                if (data.results[index].poster_path!=null) {
                    informacion += `
                    <li class="contenedor-input"><a class="contenedor-input" href="./detail-genres.html?id=${data.results[index].id}">${data.results[index].name}</a></li>` 
                }
            }
        genresSeries.innerHTML= informacion
    })

    .catch(function(error){
        console.log(error);
    })






































