const barraBusqueda = document.querySelector( '#busqueda-js' )
const contenedor = document.getElementById( 'personajes' )
const contenedorCheck = document.getElementById( 'contenedor-check' )

const templateInicial = crearParrafos( personajes )
contenedor.innerHTML = 


contenedorCheck.addEventListener( 'change', evento => {
    const checkbox = document.querySelectorAll( 'input[type="checkbox"]:checked' )
    console.log(checkbox)
})

barraBusqueda.addEventListener( 'input', evento => {
    let personajesFiltrados = personajes.filter( filtrarPersonajes ) 
    let template = crearParrafos( personajesFiltrados )
    contenedor.innerHTML = template
})

function filtrarPersonajes(personaje){
    return personaje.name.toLowerCase().includes( barraBusqueda.value.toLowerCase() )
}

function crearParrafos( personajes ){
    let template = ''
    personajes.forEach( personaje => {
        template += `<p> ${personaje.name} </p>`
    } )
    return template
}

