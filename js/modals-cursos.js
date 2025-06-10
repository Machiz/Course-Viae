// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombreCurso = params.get("nombre") || "Nombre no encontrado";
const duracionCurso = params.get("duracion") || "Duración no especificada";
const codigoCurso = params.get("codigo") || "Código no encontrado";
const imagenCurso = decodeURIComponent(params.get("imagen")) || "./resources/fotos/curso.jpg";
const descripcionCurso = params.get("descripcion") || "Descripción no disponible";
const instructorCurso = params.get("instructor") || "Instructor no disponible";
const fotoCurso = decodeURIComponent(params.get("foto")) || "./resources/fotos/instructor.jpg"; // Foto del instructor
const biografiaCurso = params.get("biografia") || "Biografía no disponible";
const mod1Curso = params.get("mod1") || "Módulo 1 no disponible";
const mod2Curso = params.get("mod2") || "Módulo 2 no disponible";
const mod3Curso = params.get("mod3") || "Módulo 3 no disponible";
const mod4Curso = params.get("mod4") || "Módulo 4 no disponible";
const ap1Curso = params.get("ap1") || "Aprendizaje 1";
const ap2Curso = params.get("ap2") || "Aprendizaje 2";
const ap3Curso = params.get("ap3") || "Aprendizaje 3";
const ap4Curso = params.get("ap4") || "Aprendizaje 4";
const precioCurso = params.get("precio") || "XD";

// Mostrar nombre del curso seleccionado en busqueda-cursos-inicio.html
document.getElementById("codigoCurso").innerText = `${codigoCurso}`;
document.getElementById("duracionCurso").innerText = `${params.get("duracion") || "Duración no especificada"}`;
document.getElementById("descripcionCurso").innerText = `${descripcionCurso}`;
const elementosNombreCurso = document.querySelectorAll(".nombreCurso");
const elementosInstructorCurso = document.querySelectorAll(".instructorCurso");
document.getElementById("biografiaCurso").innerText = `${biografiaCurso}`;
document.getElementById("mod1Curso").innerText = `${mod1Curso}`;
document.getElementById("mod2Curso").innerText = `${mod2Curso}`;
document.getElementById("mod3Curso").innerText = `${mod3Curso}`;
document.getElementById("mod4Curso").innerText = `${mod4Curso}`;
document.getElementById("ap1Curso").innerText = `${ap1Curso}`;
document.getElementById("ap2Curso").innerText = `${ap2Curso}`;
document.getElementById("ap3Curso").innerText = `${ap3Curso}`;
document.getElementById("ap4Curso").innerText = `${ap4Curso}`;
document.getElementById("precioCurso").innerText = `${precioCurso}`;
//document.getElementById("fotoCurso").src = `${fotoCurso}`;

// Imagen del instructor
const imgFoto = document.createElement("img");
imgFoto.src = fotoCurso;
imgFoto.alt = "Foto del instructor";
imgFoto.style.width = "40px";
imgFoto.style.height = "auto";
imgFoto.style.borderRadius = "50px";
document.getElementById("fotoImgCurso").appendChild(imgFoto);

// Actualizar cada uno de los elementos con el nombre del curso
elementosNombreCurso.forEach(elemento => {
    elemento.innerText = `${nombreCurso}`;
});
// Instructor de curso
elementosInstructorCurso.forEach(elemento => {
    elemento.innerText = `${instructorCurso}`;
});
// Imagen del curso
const imgCurso = document.createElement("img");
imgCurso.src = imagenCurso;
imgCurso.alt = "Imagen del curso";
imgCurso.style.width = "100%"; // Ancho completo del contenedor
imgCurso.style.height = "250px";
imgCurso.style.objectFit = "cover"; // Mantiene la proporción de la imagen
imgCurso.style.borderRadius = "10px";
imgCurso.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

document.getElementById("contenedorImagenCurso").appendChild(imgCurso);

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