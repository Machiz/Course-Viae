/*import {mostrarCursos} from './cursos.js';*/
const input = document.getElementById("curso");
const resultado = document.getElementById("resultado-curso");

input.addEventListener("input", () =>{
    const texto = input.value.toLowerCase();
    const cursoEncontrado = cursos.find(curso => curso.nombre.toLowerCase().includes(texto));

    if (cursoEncontrado){
        console.log("Curso encontrado");
        mostrarCursos(cursoEncontrado);
    }
    else{
        resultado.innerHTML = "<p>No se encontró ningún curso.</p>"
    }
})