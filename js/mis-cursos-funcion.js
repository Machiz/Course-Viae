
function verDetalleCurso(nombreCurso) {
    // Asegúrate de que la variable "cursos" esté disponible
    const curso = cursos.find(c => c.nombre === nombreCurso);
    if (!curso) {
        alert("Curso no encontrado");
        return;
    }

    // Guarda el curso en localStorage
    localStorage.setItem("cursoSeleccionado", JSON.stringify(curso));

    // Redirige a la página de detalle
    window.location.href = "../../secciones/Cursos/detalle-mis-cursos.html";
}