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

        //checkbox
    let checkbox1 = document.querySelector('#checkbox1').checked;
    let checkbox2 = document.querySelector('#checkbox2').checked;
    let checkbox3 = document.querySelector('#checkbox3').checked;
    let checkbox4 = document.querySelector('#checkbox4').checked;
    let checkbox5 = document.querySelector('#checkbox5').checked;

    // restricciones
    let soloPalabras = /^[a-z\s]+$/i;
    let pruebaEmail = /^[a-zA-Z\d\._-]*@[a-zA-Z\d_-]*\.[a-zA-Z]{3}(\.[a-zA-Z]{2})*$/;

    // banderas
    let datosValidos = true; 
    let name = true;
    let lastName = true;
    let age = true;
    let phone = true;

    // mensajes 
    let msjError = 'Reingrese su: ';

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
    if (!name && !lastName && !phone && !age) {
        msjError += ' nombre, apellido, telefono y su edad.';
    } else if (!name && !lastName && !phone) {
        msjError += ' nombre, apellido y su telefono.';
    } else if (!name && !lastName) {
        msjError += ' nombre y apellido.';
    } else if (!name) {
        msjError += ' nombre.';
    } else if (!lastName) {
        msjError += ' apellido.';
    } else if (!phone) {
        msjError += ' telefono.';
    } else if (!age) {
        msjError += ' su edad.';
    } 
    if(edad < 18){
        msjError += ' Debe ser mayor de edad. ';
        datosValidos = false;
    }
    if (!pruebaEmail.test(email)) {
        datosValidos = false;
    }

    
    //validacion de los checkboxes
    if (!checkbox1 && !checkbox2 && !checkbox3 && !checkbox4 && !checkbox5) {
        datosValidos = false;
        msjError += ' Al menos un checkbox debe estar seleccionado.';
    }
    
    // Mensaje
    let mensaje = document.querySelector('#rtaForm');
    if (datosValidos) {
        mensaje.innerHTML = 'Mensaje enviado !!'
    } else {
        mensaje.innerHTML = msjError
    }

}

// Capturo el formulario y escucha el evento
const formulario = document.querySelector('#formNombreEdad');
formulario.addEventListener('submit', evento => {
    console.log('presionado!');
    validarCampos();
    evento.preventDefault();
});


console.log('Fin del algoritmo (?)');
