// Validación de formulario
console.log('Comienzo');

// 2° validación
function validarCampos() {

    // declaraciones
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value; //defino apellido
    let email = document.querySelector('#email').value; //defino email
    let edad = document.querySelector('#edad').value;
    let telefono = document.querySelector('#telefono').value;

    // restricciones
    let soloPalabras = /^[a-z\s]+$/i;
    let pruebaEmail = /^[a-zA-Z\d\._-]*@[a-zA-Z\d_-]*\.[a-zA-Z]{3}(\.[a-zA-Z]{2})*$/;

    // banderas
    let datosValidos = true; 
    let name = true;
    let lastName = true;
    let age = true;
    let phone = true;
    let correo = true;

    // mensajes 
    let msjError = 'Reingrese su: ';
    let msjErrorBox = 'Elija una opcion'


    if (nombre === '' || !soloPalabras.test(nombre)){
        name = false;
        datosValidos = false;
    }

    if(apellido === '' || !soloPalabras.test(apellido)){
        lastName = false;
        datosValidos = false;
    }

    if (edad === '' || !Number.isInteger(Number(edad))) {
        age = false;
        datosValidos = false;
    }

    if (telefono === '' || !Number.isInteger(Number(telefono))) {
        phone = false;
        datosValidos = false;
    }
    
    if (!pruebaEmail.test(email)) {
        datosValidos = false;
    }
    // Verifiacion de datos ingresados
    if(name == false && lastName == false && phone == false && age== false){
        msjError += ' nombre, apellido, telefono y su edad.';
    } else if(name == false && lastName == false && phone == false){
        msjError += ' nombre, apellido y su telefono.';
    } else if(name == false && lastName == false){
        msjError += ' nombre y apellido.';
    } else if(name == false){
        msjError += ' nombre.';
    } else if(lastName == false){
        msjError += ' apellido.';
    } else if(phone == false){
        msjError += ' telefono.';
    } else if(age == false){
        msjError += ' edad.';
    }
    if(edad < 18){
        msjError += ' Debe ser mayor de edad';
        datosValidos = false;
    }

    
    //validacion de los checkboxes

    let valorCheckbox = document.querySelectorAll('input[type=checkbox]');
    datos.lenguajes = []
    valorCheckbox.forEach(elemento => {
        if (elemento.checked) datos.lenguajes.push(elemento.id);
    });

    if (formValido) {
        window.location.hash = '#rtaForm';
        // Aguardo que cargue la respuesta, luego la completo
        setTimeout(respuestaOk, 300, datos);
    } else {
        msjError.innerHTML = 'Verifique los datos ingresados!'


    let mensaje = document.querySelector('#rtaForm');
    if (datosValidos) {
        mensaje.innerHTML = 'Validación correcta!'
    } else {
        mensaje.innerHTML = msjError
    }

    }
}
// 1° Capturo el formulario y escucho el evento
const formulario = document.querySelector('#formNombreEdad');
formulario.addEventListener('submit', evento => {
    console.log('presionado!');
    validarCampos();
    evento.preventDefault();
});


console.log('Fin del algoritmo (?)');
// Aclaración: los "testigos" al principio y al fin son para ayudar a comprender el comportamiento asincrónico del script.