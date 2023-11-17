let recuperoPelis = localStorage.getItem('pelisfavoritas')
let recuperoSerie = localStorage.getItem('seriesfavoritas')

let pelisfavoritas = JSON.parse (recuperoPelis)
let seriesfavoritas = JSON .parse (recuperoSerie)

let pelis = document.querySelector('.Pelicula1')
let series = document.querySelector('.Pelicula1')

let peliculas = ""
if (pelisfavoritas==null || pelisfavoritas.length == 0) {
    pelis.innerHTML = '<p> No se encuentran peliculas en favoritos </p>'
}
else {
    for(let i=0;i<pelisfavoritas.length; i++){
        let url = `https://api.themoviedb.org/3/movie/${favoritosPelis[index]}/list?api_key=${api_key}`'
      
        fetch(url)
        .then(function(response) {
            return response.json()
        })
    
        .then (function(data){
            console.log(data)
            peliculas += `<a href="./detail-movie.html?id=${data.id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${data.title}</strong></h3>
            <h4 class="titulo"><strong>${data.release_date}</strong></h4>
        </article>`

        })
        .catch(function(error){
           console.log(error);
            return error
        })

    }
}

let series = ""
if (seriesfavoritas==null || pelisfavoritas.length == 0) {
    series.innerHTML = '<p> No se encuentran peliculas en favoritos </p>'
}
else {
    for(let i=0;i<seriesfavoritas.length; i++){
        let url = `https://api.themoviedb.org/3/movie/${favoritosPelis[index]}/list?api_key=${api_key}`'
      
        fetch(url)
        .then(function(response) {
            return response.json()
        })
    
        .then (function(data){
            console.log(data)
            peliculas += `<a href="./detail-serie.html?id=${data.id}"><img class="fotopeliculas" src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="" ></a>
            <h3 class="titulo"><strong>${data.title}</strong></h3>
            <h4 class="titulo"><strong>${data.release_date}</strong></h4>
        </article>`

        })
        .catch(function(error){
           console.log(error);
            return error
        })

    }
}

    
    
    
    
    
    }