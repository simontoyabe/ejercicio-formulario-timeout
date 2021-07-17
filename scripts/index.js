let formulario = document.forms.elForms;
let h1 = document.querySelector("h1");
let error = document.querySelector("div#error-container");
let loader = document.querySelector("div#loader");


function validarEmail(email) {
    const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    return regex.test(email) ? true : false;
}

function validarContrasenia(contrasenia) {
    return (contrasenia.length < 5) ? false : true;
}

function validarPersona(email, contrasenia) {
    let usuario = baseDeDatos.usuarios.filter((usuario) => {
        return (usuario.email === email && usuario.password === contrasenia);
    });
    if (usuario.length > 0) {
        return [true, usuario[0].name];
    } else {
        return [false];
    }
}

function validaciones() {
    const email = formulario.emailInput.value;
    const contrasenia = formulario.passwordInput.value;
    const validacionPersona = validarPersona(email, contrasenia);
    if (validarEmail(email) && validarContrasenia(contrasenia) && validacionPersona[0]) {
        loader.classList.add("hidden");
        h1.innerText = `Bienvenido al sitio 😀, ${validacionPersona[1]}`;
    } else {
        error.innerHTML = "<small>Alguno de los datos ingresados son incorrectos</small>";
        loader.classList.add("hidden");
        error.classList.remove("hidden");
    }

}
formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();
        error.classList.add("hidden");
        loader.classList.remove("hidden");
        setTimeout(() => {
            validaciones();
        }, 3000);
    })
    // ACTIVIDAD

// Paso a paso:

// 1) Escuchar el evento necesario para reaccionar cuando la persona
// haga click en el botón iniciar sesión.

// 2) El proceso de inicio de sesión deberá tener una demora de 3 segundos.
// Deberás agregar la función correspondiente para simular dicha demora.

// 3) Durante el tiempo indicado anteriormente, se deberá mostrar el mensaje "Iniciando sesión..."

// 4) A partir de los inputs ingresados en el formulario, se deberan realizar las siguientes validaciones:
// 1) Que el primer input sea un email válido.
// 2) Que la contraseña tenga al menos 5 caracteres.
// 3) Que los datos ingresados corresponden a una
// persona que se encuentre registrada en la base de datos.
// En caso de que alguna de las validaciones no sea exitosa,
// se deberá mostrar un mensaje de error que diga "Alguno de los datos ingresados son incorrectos"

// 5) En caso de que los datos ingresados sean correctos, se deberá ocultar el formulario y mostrar
// un mensaje de bienvenida al sitio.

/* 
TIPS:
  - Puedes averiguar acerca de la manera de validar el formato de un email utilizando Javascript, buscando
    en internet frases como "Validar email con Javascript o similar".

  - Recuerda que puedes seleccionar y manipular los elementos del archivo index.html, usando los
    recursos que Javascript te ofrece para ello. Además, en el archivo styles.css tiene algunas clases y 
    estilos predefinidos para ayudarte a completar la actividad.

  - También te dejamos algunos mensajes que te pueden ser de utilidad:
  
   Mensaje de error => <small>Alguno de los datos ingresados son incorrectos</small>

   Mensaje de bienvenida => "<h1> Bienvenido al sitio 😀 </h1>";

   ¡Manos a la obra!
 */