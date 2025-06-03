const cursos = [
    {nombre: "JavaScript Básico", duracion: "15 horas", precio: 19, nivel: "Básico", codigo: "134562"},
    {nombre: "Python Intermedio", duracion: "8 horas", precio: 25, nivel: "Intermedio", codigo: "777512"},
    {nombre: "Diseño Web", duracion: "12 horas", precio: 20, nivel: "Básico", codigo: "123512"},
    {nombre: "Gestión Empresarial", duracion: "7 horas", precio: 15, nivel: "Básico", codigo: "124512"},
    {nombre: "Cálculo Avanzado", duracion: "11 horas", precio: 18, nivel: "Avanzado", codigo: "136772"},
    {nombre: "Python Avanzado", duracion: "18 horas", precio: 26, nivel: "Avanzado", codigo: "125513"},
];

// Función para filtrar cursos
function filtrarCursos(){
    let duracion = document.getElementById("duracion").value;
    let precio = document.getElementById("precio").value;
    let nivel = document.getElementById("nivel").value;

    let cursosFiltrados = cursos.filter(curso => {
        let duracionNumerica = parseInt(curso.duracion); // Extrae número de texto
        let precioNumerico = parseInt(curso.precio); // Extrae número de texto

        let cumpleDuracion = true;
        let cumplePrecio = true;
        let cumpleNivel = true;
        // Condiciones

        // Duración
        if (duracion === "Menor a 10 horas"){
            cumpleDuracion = duracionNumerica < 10;
        }
        else if(duracion === "Mayor a 10 horas"){
            cumpleDuracion = duracionNumerica > 10;
        }
        else if (duracion === "Mayor a 20 horas"){
            cumpleDuracion = duracionNumerica > 20;
        }

        // Precio
        if (precio === "Menor a S/ 20"){
            cumplePrecio = precioNumerico < 20;
        }
        else if (precio === "Menor a S/ 30"){
            cumplePrecio = precioNumerico < 30;
        }
        else if (precio === "Menor a S/ 50"){
            cumplePrecio = precioNumerico < 50;
        }
        else if (precio === "Mayor a S/ 50"){
            cumplePrecio = precioNumerico > 50;
        }

        // Nivel de experiencia
        if (nivel !== "") {
            cumpleNivel = curso.nivel === nivel;
        }

        return cumpleDuracion && cumplePrecio && cumpleNivel;
    }
    );

    mostrarCursos(cursosFiltrados);
}

function mostrarCursos(cursos){
    let container = document.querySelector(".container-cursos");
    container.innerHTML = ""; // Limpiar el contenedor

    // Decoración del recuadro de cada curso en oferta según los filtros
    cursos.forEach(curso => {
        let divCurso = document.createElement("div");
        divCurso.classList.add("curso");
        divCurso.style.border = "2px solid #058ED9";
        divCurso.style.padding = "10px";
        divCurso.style.borderRadius = "6px";
        divCurso.style.width = "200px";

        // Imagen del curso
        let imgCurso = document.createElement("img");
        //imgCursoCurso.src = ""
        imgCurso.style.width = "100%";
        imgCurso.style.marginBottom = "10px";

        // Descripción del curso
        let infoCurso = document.createElement("div");
        infoCurso.innerHTML = `
            <h3>${curso.nombre}</h3>
            <p>${curso.codigo}</p>
            <p><strong>Duración:</strong>${curso.duracion}</p>
            <p><strong>Nivel de experiencia:</strong> ${curso.nivel}</p>
            <p><strong>Precio:</strong> S/ ${curso.precio}</p>
        `;

        divCurso.appendChild(imgCurso);
        divCurso.appendChild(infoCurso);
        container.appendChild(divCurso);
    }
    );
}

// Mostrar los cursos cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarCursos(cursos); // Mostrar todos los cursos al cargar la página
});

// Activar filtros para los selects
document.getElementById("duracion").addEventListener("change", filtrarCursos);
document.getElementById("precio").addEventListener("change", filtrarCursos);
document.getElementById("nivel").addEventListener("change", filtrarCursos);