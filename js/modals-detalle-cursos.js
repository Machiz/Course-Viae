// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const nombreCurso = params.get("nombre") || "Nombre no encontrado";
const duracionCurso = params.get("duracion") || "Duración no especificada";
const codigoCurso = params.get("codigo") || "Código no encontrado";
const imagenCurso = decodeURIComponent(params.get("imagen")) || "../../resources/fotos/curso.jpg";
const descripcionCurso = params.get("descripcion") || "Descripción no disponible";
const instructorCurso = params.get("instructor") || "Instructor no disponible";
const fotoCurso = decodeURIComponent(params.get("foto")) || "../../resources/fotos/instructor.jpg"; // Foto del instructor
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
const videoCurso = params.get("video") || "Video de presentación del curso"; // Video del curso

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
//document.getElementById("videoCurso").innerText = `${videoCurso}`;
//document.getElementById("fotoCurso").src = `${fotoCurso}`;
console.log("ID del video: ", videoCurso);

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
imgCurso.style.objectPosition = "50% 20%";
imgCurso.style.borderRadius = "10px";
imgCurso.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";

document.getElementById("contenedorImagenCurso").appendChild(imgCurso);

// Video del curso
/*const videoCursoElement = document.createElement("video");
videoCursoElement.src = videoCurso;
videoCursoElement.alt = "Video del curso";
videoCursoElement.controls = true; // Agrega controles al video
videoCursoElement.style.width = "100%"; // Ancho completo del contenedor
videoCursoElement.style.height = "auto"; // Altura automática para mantener la proporción
videoCursoElement.style.borderRadius = "10px";
videoCursoElement.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
//videoCursoElement.style.frameborder= "0"; // Elimina el borde del video
//videoCursoElement.style.allowFullscreen = true; // Permite pantalla completa
document.getElementById("videoCursoV").appendChild(videoCursoElement)*/


const embedUrl = `https://www.youtube.com/embed/${videoCurso}`; // Asegúrate de que videoCurso sea un ID de YouTube válido
const iframe = document.createElement("iframe");
iframe.src = embedUrl;
iframe.width = "100%";
iframe.height = "480"; // Puedes ajustar la altura según tu diseño
iframe.style.borderRadius = "10px";
iframe.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
iframe.allowFullscreen = true;

const contenedorV = document.getElementById("videoCursoI");
contenedorV.innerHTML = ""; // Limpia el contenido anterior si lo hubiera
contenedorV.appendChild(iframe);

// Creamos una variable universal para revisar si realizó el pago completo tras cerrarModal() o no
//let pagoExitoso = false;

function toggleBoton() {
    var boton = document.getElementById("textoBoton");
    var modalInscripcion = document.getElementById("ModalInscripcion");
    //let precioModal = document.getElementById("precio-modal");
    //const precioText = document.getElementById("precio-modal");

    // Si el usuario dio Aceptar en el modal con id Modal Pago Exitoso, puede ver el modal Inscripcion
    // Caso contrario, no podrá ver el modal Inscripcion
    //let esPago = localStorage.getItem("pagoExitoso") === "true";
    let cursosInscritos = JSON.parse(localStorage.getItem("cursosInscritos")) || [];
    console.log(JSON.parse(localStorage.getItem("cursoElegido"))); // Sí funciona

    // Guardar curso en localStorage
        
    const cursoActual = JSON.parse(localStorage.getItem("cursoElegido"));
    console.log("Curso actual:", cursoActual.nombre);
    if (boton.innerText === "¡Inscríbete ya!" && localStorage.getItem("pagoExitoso") === "true" && !cursosInscritos.some(c => c.nombre === cursoActual.nombre)) {
        console.log("Estado del pago exitoso:", localStorage.getItem("pagoExitoso"));
        console.log("Entró al flujo correctamente");
        modalInscripcion.style.display = "flex";
        boton.innerText = "Ya está inscrito al curso";
        /*console.log(JSON.parse(localStorage.getItem("cursoElegido"))); // Sí funciona

        // Guardar curso en localStorage
        
        const cursoActual = JSON.parse(localStorage.getItem("cursoElegido"));
        console.log("Curso actual:", cursoActual.nombre);*/

        if (!cursoActual) {
            alert("Error: No se encontró el curso actual en localStorage.");
            return;
        }


        // Evitar duplicados
        if (!cursosInscritos.some(c => c.nombre === cursoActual.nombre)) {
            cursosInscritos.push(cursoActual);
            localStorage.setItem("cursosInscritos", JSON.stringify(cursosInscritos));
            console.log("Curso guardado exitosamente.");
            
        } 
        else{
            console.log("Curso ya estaba inscrito.");
        }
    }
    else if (cursosInscritos.some(c => c.nombre === cursoActual.nombre)){
        var inscrito = document.getElementById("YaInscrito");
        inscrito.style.display = "flex";
         // Mostrar modal de inscripción exitosa
    }
    else{
        console.log("Usted no puede inscribirse a: " + nombreCurso);
        // Estado de pago
        localStorage.setItem("pagoExitoso", "false");
        console.log("Estado del pago xd:", localStorage.getItem("pagoExitoso"));
        modalInscripcion.style.display = "none";
    }

}

// Si el usuario no llega hasta el último modal de pago y coloca Aceptar, entonces ModalInscripcion mostrará que no puede inscribirse al curso


// Función para mostrar el modal para pagar con tarjeta
function donarYa(){
    document.getElementById("ModalButton").style.display = "flex"; 
}

function cerrarModal(){
    document.getElementById("ModalPagoExitoso").style.display = "none";
    var donarBoton = document.getElementById("botonDonar");
    donarBoton.innerText = "Usted ya donó";

    pagoExitoso = true; // Indicamos que el pago fue exitoso
    localStorage.setItem("pagoExitoso", "true");
    console.log("Pago exitoso");
}

function cerrarModalTarjeta() {
    document.getElementById("ModalTarjeta").style.display = "none";
}

function cerrarModalPago(){
    document.getElementById("ModalButton").style.display = "none";
    //localStorage.removeItem("pagoExitoso");
}

// Modal para efectuar medio de pago:
function mostrarModalPago() {
    var modalPago = document.getElementById("ModalPago");
    modalPago.style.display = "flex";
    // Aquí puedes agregar lógica para mostrar información de pago, etc.
}

// Modal para pagar por tarjeta de crédito
function mostrarModalTarjeta() {
    var modalTarjeta = document.getElementById("ModalTarjeta");
    modalTarjeta.style.display = "flex";
    // Aquí puedes agregar lógica para mostrar información de pago con tarjeta de crédito
}

function pagarConTarjeta(){
    // Modal que contiene el mensaje de pago exitoso
    var modalPagoExitoso = document.getElementById("ModalPagoExitoso");
    modalPagoExitoso.style.display = "flex";

    //var boton = document.getElementById("textoBoton");
    //boton.innerText = "Ya está inscrito al curso";
}

function cerrarModalInscripcion() {
    document.getElementById("ModalInscripcion").style.display = "none";
}

function eliminarCursoInscrito(nombreCurso){
    let cursosInscritos = JSON.parse(localStorage.getItem("cursosInscritos")) || [];
    //cursosInscritos = cursosInscritos.filter(c => c.nombre !== nombreCurso);
    cursosInscritos = cursosInscritos.filter(c => c.nombre.toLowerCase().trim() !== nombreCurso.toLowerCase().trim());
    localStorage.setItem("cursosInscritos", JSON.stringify(cursosInscritos));
    console.log("Curso actualizado después de eliminación:", cursosInscritos);
}

/*function retirarseDelCurso(){
    var boton = document.getElementById("textoBoton");

    // Cambiar el texto del botón a "¡Inscríbete ya!" cuando se retire
    boton.innerText = "¡Inscríbete ya!";

    // Cerrar el modal de retiro
    document.getElementById("ModalRetiro").style.display = "none";

    const cursoActual = JSON.parse(localStorage.getItem("cursoElegido"));
    if (cursoActual) {
        eliminarCursoInscrito(cursoActual.nombre);
        console.log("Curso eliminado:", cursoActual.nombre);
    } else {
        console.log("No se pudo eliminar el curso porque no está definido.");
    }
}*/

// Función para mostrar el formulario de razones de retirada
/*function mostrarFormularioRetiro() {
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

    retirarseDelCurso();
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

    retirarseDelCurso();
}*/