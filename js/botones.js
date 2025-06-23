function toggleBoton(){
    var boton = document.getElementById("textoBoton");
    var modalInscripcion = document.getElementById("ModalButton");
    var modalRetiro = document.getElementById("ModalRetiro");
    //let precioModal = document.getElementById("precio-modal");
    const precioText = document.getElementById("precio-modal");

    if (boton.innerText == "¡Inscríbete ya!"){
        boton.innerText = "Retirarme del curso";
        precioText.style.display = "block";
        modalInscripcion.style.display = "flex";
    }
    else{
        modalRetiro.style.display = "flex";
        precioText.style.display = "none";
    }
}

// Modal tras el clic presuroso en "Inscríbete al curso...":
function cerrarModal(){
    document.getElementById("ModalButton").style.display = "none";
}

function cerrarModalRetiro() {
    document.getElementById("ModalRetiro").style.display = "none";
}

function retirarseDelCurso(){
    var boton = document.getElementById("textoBoton");

    // Cambiar el texto del botón a "¡Inscríbete ya!" cuando se retire
    boton.innerText = "¡Inscríbete ya!";

    // Cerrar el modal de retiro
    document.getElementById("ModalRetiro").style.display = "none";
}

// Función para mostrar el formulario de razones de retirada
function mostrarFormularioRetiro() {
    // Cerrar el modal de retiro
    document.getElementById("ModalRetiro").style.display = "none";

    // Mostrar el modal para escribir las razones
    document.getElementById("ModalFormulario").style.display = "flex";
}

// Función para saltar el formulario (sin enviar razones)
function saltarFormulario() {
    // Cerrar el formulario y cambiar el texto del botón
    document.getElementById("ModalFormulario").style.display = "none";

    // Restablecer el botón
    document.getElementById("textoBoton").innerText = "¡Inscríbete ya!";
}

function ultimoFormulario(){
    document.getElementById("ModalUltimo").style.display = "none";
}

// Función para enviar el formulario (enviar razones)
function enviarFormulario() {
    var razones = document.getElementById("razonesTexto").value;

    // Aquí puedes hacer algo con las razones (por ejemplo, enviarlas al servidor)
    console.log("Razones para retirarse:", razones);

    // Cerrar el formulario
    document.getElementById("ModalFormulario").style.display = "none";
    document.getElementById("ModalUltimo").style.display = "flex";

    // Cambiar el texto del botón a "¡Inscríbete ya!"
    document.getElementById("textoBoton").innerText = "¡Inscríbete ya!";
}