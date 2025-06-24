
const contenedor = document.getElementById("contenedor-principal");
console.log("Contenedor:", contenedor);  // Verifica que no sea null

const cursosInscritos = JSON.parse(localStorage.getItem("cursosInscritos")) || [];
console.log("Cursos inscritos:", cursosInscritos);

cursosInscritos.forEach(curso => {
    console.log("Curso:", curso);
    // Solo pasamos los campos que necesita la función
    const tarjeta = crearTarjetaCurso({
    nombre: curso.nombre,
    codigo: curso.codigo,
    imagen: curso.imagen
    });

    contenedor.appendChild(tarjeta);
});