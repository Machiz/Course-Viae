function toggleBoton(){
    var boton = document.getElementById("textoBoton");
    var modalInscripcion = document.getElementById("ModalButton");
    var modalRetiro = document.getElementById("ModalRetiro");
    //let precioModal = document.getElementById("precio-modal");
    const precioText = document.getElementById("precio-modal");

    if (boton.innerText === "¡Inscríbete ya!"){
        modalInscripcion.style.display = "flex";
        console.log(JSON.parse(localStorage.getItem("cursoElegido"))); // Sí funciona
        boton.innerText = "Retirarme del curso";

        if (precioText){
            precioText.style.display = "block";
        }

        // Guardar curso en localStorage
        
        //const nombreSeleccionado = localStorage.getItem("cursoElegido");
        const cursoActual = JSON.parse(localStorage.getItem("cursoElegido"));
        console.log("Curso actual:", cursoActual.nombre);

        if (!cursoActual) {
            alert("Error: No se encontró el curso actual en localStorage.");
            return;
        }

        let cursosInscritos = JSON.parse(localStorage.getItem("cursosInscritos")) || [];

        // Evitar duplicados
        if (!cursosInscritos.some(c => c.nombre === cursoActual.nombre)) {
            cursosInscritos.push(cursoActual);
            localStorage.setItem("cursosInscritos", JSON.stringify(cursosInscritos));
            console.log("Curso guardado exitosamente.");
        } 
        else {
            console.log("Curso ya estaba inscrito.");
        }
    }
    else{
        modalRetiro.style.display = "flex";
        //precioText.style.display = "none";
        boton.innerText = "¡Inscríbete ya!";
    }
}

// Modal tras el clic presuroso en "Inscríbete al curso...":
function inscribirseAlCurso(){
    document.getElementById("ModalButton").style.display = "flex";
}

function cerrarModal(){
    document.getElementById("ModalButton").style.display = "none";
    //var boton = document.getElementById("textoBoton");
    //boton.innerText = "Retirarme del curso";
}

function cerrarModalRetiro() {
    document.getElementById("ModalRetiro").style.display = "none";
}

function eliminarCursoInscrito(nombreCurso){
    let cursosInscritos = JSON.parse(localStorage.getItem("cursosInscritos")) || [];
    //cursosInscritos = cursosInscritos.filter(c => c.nombre !== nombreCurso);
    cursosInscritos = cursosInscritos.filter(c => c.nombre.toLowerCase().trim() !== nombreCurso.toLowerCase().trim());
    localStorage.setItem("cursosInscritos", JSON.stringify(cursosInscritos));
    console.log("Curso actualizado después de eliminación:", cursosInscritos);
}

function retirarseDelCurso(){
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
}