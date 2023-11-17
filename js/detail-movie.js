let api_key = '325b851d442abfa1f66681afca0f296b'
let qs = location.search;
let qsToObj = new URLSearchParams(qs)
let id = qsToObj.get('id')
let detailPelicula = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`


let titulo = document.querySelector('#titulo')
let imagen = document.querySelector('.imgpelicula')
let rating = document.querySelector('#rating')
let fecha = document.querySelector('#fecha')
let duracion = document.querySelector('#duracion')
let sinopsis = document.querySelector('#sinopsis')
let genero = document.querySelector('#genero')
let boton = document.querySelector('#recom')
let container = document.querySelector('.reco-container')
let recomenDisplay = document.querySelector('.recomendar')

fetch(detailPelicula)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        
        let generos = ""
        for (let index = 0; index < data.genres.length; index++) {
            generos += `<a  class="g" href="./detail-genres.html?id=${data.genres[index].id}">${data.genres[index].name}</a>
            `
        }

        imagen.src = `https://image.tmdb.org/t/p/w500/${data.poster_path}`;
        titulo.innerText += " " + data.original_title;
        rating.innerText += "Rating: " + data.vote_average;
        fecha.innerHTML += "Estreno: " + data.release_date;
        duracion.innerText += "Duracion: " + data.runtime + " mins"
        sinopsis.innerText += "Sinopsis: " + data.overview;
        genero.innerHTML += "Genero: " + generos;
       
    })
        .catch(function(error){
            console.log(error)
    });

boton.addEventListener("click", function (e){
    let recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${api_key}`;

    console.log(recom);
    fetch(recom)
        .then(function (response) {
            return response.json()
        })
        .then(function(data){
            console.log(data);
            container.style.display = "block";
            let info = "";
            for(let index = 0; index < 5; index++){
                info += `<img class="imgpelicula" src="https://image.tmdb.org/t/p/w500/${data.results[index].poster_path}"></img>
                <h2 class="detalles" id="titulo">${data.results[index].title}</h2>`
            }

        recomenDisplay.innerHTML = info;

        })

    .catch(function(error) {
        console.log(error);

    })

})