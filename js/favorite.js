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
        let url = 
}