function verDetalleOficial(nombrecurso) {
    // Asegúrate de que la variable "cursos" esté disponible
    const cursoActual = cursos.find(c => c.nombre === nombrecurso);
    if (!cursoActual) {
        alert("Curso no encontrado");
        return;
    }

    // Guarda el curso en localStorage
    localStorage.setItem("cursoElegido", JSON.stringify(cursoActual));

    window.location.href = "../../secciones/Cursos/detalle-curso.html";
}