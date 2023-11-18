let api_key = '325b851d442abfa1f66681afca0f296b'
let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let GenerosPeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${id}`;
let GenerosSeries = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${id}`;

let genresPeliculas = document.querySelector("#detalle_gp")
let genresSeries = document.querySelector("#detalle_gs")

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
                <a href="./detail-movie.html?id=${data.results[index].id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}" alt="" ></a>
                <h3 class="titulo"><strong>${data.results[index].title}</strong></h3>
                <h4 class="titulo"><strong>${data.results[index].release_date}</strong></h4>
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
                    informacion += `<li class="contenedor-input"><a class="contenedor-input" href="./detail-genres.html?id=${data.results[index].id}">${data.results[index].name}</a></li>` 
                }
            }
            genresSeries.innerHTML= informacion
    })

    .catch(function(error){
        console.log(error);
    })






































