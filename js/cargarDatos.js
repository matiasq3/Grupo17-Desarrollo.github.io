// API fetch
console.log('Comienzo cargarDatos');

// fetch devuelve un objeto Promise (promesa: pendiente, resuelta, rechazada)
let lista = document.querySelector('#lenguajes');
fetch('./data/lenguajes.json')
    .then(respuesta => respuesta.json()) // procersar la respuesta
    .then(datos => {
        lista.innerHTML = datos;
        console.log(datos);
        console.log('Terminó fetch!!!');
    }); // procesar los datos

console.log('Fin cargarDatos');