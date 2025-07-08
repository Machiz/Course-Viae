window.onload = function () {
    const curso = JSON.parse(localStorage.getItem("cursoSeleccionado"));

    if (!curso) {
        alert("No se encontró la información del curso.");
        return;
    }

    // Insertar información del curso
    //document.querySelector(".nombreCurso").innerText = curso.nombre;
    const textoCurso = document.querySelectorAll('.nombreCurso');
    // Elemento de cada clase nombreCurso (sin estar parte, nos iríamos al carajo).
    textoCurso.forEach(texto =>{
        texto.textContent = curso.nombre;
    });

    document.getElementById("codigoCurso").innerText = curso.codigo;
    document.getElementById("descripcionCurso").innerText = curso.descripcion;
    //document.getElementById("precioCurso").innerText = curso.precio;
    document.getElementById("duracionCurso").innerText = curso.duracion;

    // Aquí aprenderás
    document.getElementById("ap1Curso").innerText = curso.ap1;
    document.getElementById("ap2Curso").innerText = curso.ap2;
    document.getElementById("ap3Curso").innerText = curso.ap3;
    document.getElementById("ap4Curso").innerText = curso.ap4;

    // Instructor
    document.querySelector(".instructorCurso").innerText = curso.instructor;
    document.getElementById("biografiaCurso").innerText = curso.biografia;

    // Imagen de instructor
    const imgFoto = document.createElement("img");
    imgFoto.src = curso.foto;
    imgFoto.alt = "Foto del instructor";
    imgFoto.style.width = "40px";
    imgFoto.style.height = "auto";
    imgFoto.style.borderRadius = "50px";
    document.getElementById("fotoImgCurso").appendChild(imgFoto);

    // Módulos
    document.getElementById("mod1Curso").innerText = curso.mod1;
    document.getElementById("mod2Curso").innerText = curso.mod2;
    document.getElementById("mod3Curso").innerText = curso.mod3;
    document.getElementById("mod4Curso").innerText = curso.mod4;

    // Aprendizajes
    document.getElementById("ap1Curso").innerText = curso.ap1;
    document.getElementById("ap2Curso").innerText = curso.ap2;
    document.getElementById("ap3Curso").innerText = curso.ap3;
    document.getElementById("ap4Curso").innerText = curso.ap4;

    // Imagen del curso
    const contenedor = document.getElementById("contenedorImagenCurso");
    const imagen = document.createElement("img");
    imagen.src = curso.imagen;
    imagen.alt = curso.nombre;
    imagen.style.width = "100%"; // Ancho completo del contenedor
    imagen.style.height = "250px";
    imagen.style.objectFit = "cover"; // Mantiene la proporción de la imagen
    imagen.style.objectPosition = "50% 20%";
    imagen.style.borderRadius = "10px";
    imagen.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    //imagen.style = "width:400px;height:auto;border-radius:10px;";
    contenedor.appendChild(imagen);

    
}