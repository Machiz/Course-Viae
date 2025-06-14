const cursos = [
    {
        id: "Curso1", 
        nombre: "JavaScript Básico", 
        duracion: "15 horas", 
        precio: 19, 
        nivel: "Básico", 
        codigo: "#134562", 
        imagen: "../../resources/fotos/javascript-basico.png", 
        descripcion: "Aprende los fundamentos del lenguaje de programación más popular para el desarrollo web. En este curso descubrirás cómo funciona JavaScript, cómo manipular elementos del navegador, y cómo crear interactividad en tus páginas web. Ideal para principiantes sin experiencia previa en programación.", 
        instructor: "Julio Orbegoso", 
        foto: "../../resources/fotos/Julio Orbegoso.webp", 
        biografia:"Julio Orbegoso es ingeniero de sistemas por la UPC. Años de experiencia en la docencia de lenguajes de programación como JavaScript, Python, Assembler, C++ y C. Será tu maestro en este viaje astral hacia las profundidades de JS, tu guía universal.",
        mod1: "Introducción a JavaScript", mod2: "Sintaxis Básica", mod3: "Estructuras de Control", mod4: "Funciones y Objetos", 
        ap1: "Ejercicios Prácticos", ap2: "Sintexis de JavaScript", ap3: "Estructuras de Control en JavaScript", ap4: "Funciones y Objetos en JavaScript"},

    {
        id: "Curso2", 
        nombre: "Python Intermedio", 
        duracion: "8 horas", 
        precio: 25, 
        nivel: "Intermedio", 
        codigo: "#777512", 
        imagen: "../../resources/fotos/python-intermedio.png", 
        descripcion: "Python es uno de los lenguajes de programación más coloquiales, accesible al público y compuesto de sintaxis agraciada.  En el presente curso, se tratarán temas más complejos en Python, relacionados a problemas matemáticos, bibliotecas inéditas y funciones desconocidas, útiles para ofertas de trabajo.",
        instructor: "Sir Linux", foto: "../../resources/fotos/Sir Linux.png", biografia: "Sir Linux, pseudónimo de Mario Cornejo Reyes, graduado y licenciado en Ingeniería de Software por la PUCP. Acuñó su alias en honor al sistema operativo de su preferencia. Será tu guía en este trayecto con Python, lenguaje universal.  Trabajaba desde hace más de cinco años en proyectos con Python, JavaScript, PHP, C++, C# y Assembler.",
        mod1: "Video (10 min.): Algunas estructuras de datos avanzadas", mod2: "Lectura: Sobre list, tuplas, set y colecciones", mod3: "Video (20 min.): Bibliotecas de Python", mod4: "Video (25 min.): POO en Python",
        ap1:"Funciones especiales en Python", ap2:"Programación Orientada a Objetos (POO) en Python", ap3:"Bibliotecas de Python", ap4:"Estructuras de datos avanzadas en Python"},

    {id: "Curso3", nombre: "Diseño Web", duracion: "12 horas", precio: 20, nivel: "Básico", codigo: "#123512", imagen: "../../resources/fotos/diseno-web.png", 
        descripcion: "Es un proceso de planificación, organización y control de recursos, cuyo objetivo es el alcance de metas trazadas por una empresa/organización/equipo tomando en cuenta la eficiencia y la productividad, crecimiento, desarrollo e innovación.", 
        instructor: "Jairo Pérez", foto: "../../resources/fotos/Van Gogh.png", biografia: "Jairo Arnulfo Pérez Ordóñez, aficionado al arte y la literatura, es maestro, ingernieo de software por la UNI (Universidad Nacional de Ingeniería). Debido a su pasión por la pintura y las letras, Jairo se dedica al diseño de páginas y plataformas web, así como codificación de estas y trabajo en frontend y backend de las mismas. Ocho años de experiencia trabajando para plataformas web de empresas artísticas, diarios perdiodísticos y librearías virtuales.",
    mod1: "Video (30 min.): Introducción al Diseño Web", mod2: "HTML y CSS Básico", mod3: "JavaScript para Principiantes", mod4: "Proyecto Final de Diseño Web",
    ap1:"Introducción a HTML y programación web", ap2:"CSS y JS", ap3:"Teoría de colores", ap4:"Diseño y orden de estilos"},

    {id: "Curso4", nombre: "Gestión Empresarial", duracion: "7 horas", precio: 15, nivel: "Básico", codigo: "#124512", imagen:"../../resources/fotos/gestion-empresarial.png", 
        descripcion: "Es un proceso de planificación, organización y control de recursos, cuyo objetivo es el alcance de metas trazadas por una empresa/organización/equipo tomando en cuenta la eficiencia y la productividad, crecimiento, desarrollo e innovación.", 
        instructor: "Zack Snyder", foto: "../../resources/fotos/300.png", 
        biografia: "Zack Snyder nació en Mollendo, Arequipa, en el año 1979. Es MBA en Gestión Empresarial por ESAN y la Munich Business School, lincenciado en Administración de empresas en la Universidad de Lima, será tu guía en el cocnocimiento de gestión en sectores organizacionales, empresas modernas y las claves a un futuro en el que todo es equipo, apoyo y dirección eficiente. Con más de diez años de experiencia en su campo, Snyder ha sido subgerente de la empresa Intercorp.",
    mod1: "Video (15 min.): Fundamentos de la Gestión Empresarial", mod2: "Lectura: Estrategias Empresariales", mod3: "Caso Práctico: Análisis de una Empresa", mod4: "Examen Final de Gestión Empresarial",
    ap1:"Hacer que tu negocio prospere", ap2:"Gestionar ambientes", ap3:"Abordar situaciones complejas", ap4:"Conocer las políticas de tu organización"},

    {id: "Curso5", nombre: "Cálculo Avanzado", duracion: "11 horas", precio: 18, nivel: "Avanzado", codigo: "#136772", imagen: "../../resources/fotos/calculo-avanzado.jpg", 
        descripcion: "Explora conceptos avanzados del cálculo diferencial e integral, incluyendo series infinitas, ecuaciones diferenciales, cálculo multivariable y aplicaciones en física e ingeniería. Diseñado para estudiantes con una base sólida en cálculo básico que buscan profundizar en el análisis matemático.", 
        instructor: "Marcelo Hernández", foto: "../../resources/fotos/Marcelo Hernandez.webp", 
        biografia: "Marcelo Hernández fue un niño prodigio, hábil para las matemáticas, números, teoremas y, sobre todo, el cálculo. Amante de Newton y Leibniz, estudió Matemáticas en la UNMSM, graduándose en 2015. Maestro de Cálculo, I, II, III, IV, V, incluso X. Será tu gurú del cálculo en este proceso especial.",
    mod1: "Video (20 min.): Introducción al Cálculo Avanzado", mod2: "Lectura: Teoremas Fundamentales", mod3: "Ejercicios Prácticos de Cálculo", mod4: "Examen Final de Cálculo Avanzado",
    ap1:"Integrales triples", ap2:"Integrales especiales", ap3:"Cálculo multivariable", ap4:"Series de Taylor y teoría del calor"},

    {id: "Curso6", nombre: "Python Avanzado", duracion: "18 horas", precio: 26, nivel: "Avanzado", codigo: "#125513", imagen: "../../resources/fotos/python-avanzado.jpg", 
        descripcion: "Profundiza tus conocimientos en Python explorando temas como programación orientada a objetos, manejo avanzado de errores, decoradores, generadores, concurrencia, y uso de bibliotecas especializadas. Ideal para quienes ya dominan los fundamentos y desean llevar sus habilidades al siguiente nivel.", 
        instructor: "Liliana Ontoy", foto: "../../resources/fotos/Liliana Ontoy.jpeg", 
        biografia: "Liliana Ontoy es doctora en Ciencias de la Computación por la Universidad de Columbia, nacida en Castilla, Piura, en 1973. Cuenta con más de diez años de experiencia en el campo laboral, instructora en HTML y JS, así como Python, C++ y PHP.",
    mod1: "Video (30 min.): Programación Avanzada en Python", mod2: "Lectura: Patrones de Diseño", mod3: "Proyecto Final: Aplicación Completa", mod4: "Examen Final de Python Avanzado",
    ap1:"Frameworks de Machine Learning", ap2:"Optimización de código", ap3:"Desarrollo web", ap4:"Análisis de datos y Big Data en Python"},
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

        // Rederigimiento a la pestaña de detalle del curso
        divCurso.addEventListener("click", () => {
            window.location.href = `detalle-curso.html?nombre=
            ${encodeURIComponent(curso.nombre)}&codigo=${encodeURIComponent(curso.codigo)}&imagen=${curso.imagen}&duracion=
            ${encodeURIComponent(curso.duracion)}&nivel=${encodeURIComponent(curso.nivel)}&precio=${encodeURIComponent(curso.precio)}&descripcion=
            ${encodeURIComponent(curso.descripcion)} &instructor=${encodeURIComponent(curso.instructor)}&foto=${curso.foto}&biografia=
            ${encodeURIComponent(curso.biografia)}&mod1=${encodeURIComponent(curso.mod1)}&mod2=${encodeURIComponent(curso.mod2)}&mod3=${encodeURIComponent(curso.mod3)}
            &mod4=${encodeURIComponent(curso.mod4)}&ap1=${encodeURIComponent(curso.ap1)}&ap2=${encodeURIComponent(curso.ap2)}&ap3=${encodeURIComponent(curso.ap3)}
            &ap4=${encodeURIComponent(curso.ap4)}`;
        });

        // Imagen del curso
        let imgCurso = document.createElement("img");
        imgCurso.src = curso.imagen;
        imgCurso.style.width = "100%";
        imgCurso.style.marginBottom = "10px";

        // Descripción del curso
        let infoCurso = document.createElement("div");
        infoCurso.innerHTML = `
            <h3 style="font-family: Inter; color: #333333;">${curso.nombre}</h3>
            <p style="font-family: Inter; color: #8C8C8C;">${curso.codigo}</p>
            <p style="font-family: Inter;"><strong>Duración:</strong>${curso.duracion}</p>
            <p style="font-family: Inter;"><strong>Nivel de experiencia:</strong> ${curso.nivel}</p>
            <p style="font-family: Inter;"><strong>Precio:</strong> S/ ${curso.precio}</p>
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

function mostrarMisCursos(cursos){
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

        // Rederigimiento a la pestaña de detalle del curso
        divCurso.addEventListener("click", () => {
            window.location.href = `detalle-mis-cursos.html?nombre=
            ${encodeURIComponent(curso.nombre)}&codigo=${encodeURIComponent(curso.codigo)}&imagen=${curso.imagen}&duracion=
            ${encodeURIComponent(curso.duracion)}&nivel=${encodeURIComponent(curso.nivel)}&precio=${encodeURIComponent(curso.precio)}&descripcion=
            ${encodeURIComponent(curso.descripcion)} &instructor=${encodeURIComponent(curso.instructor)}&foto=${curso.foto}&biografia=
            ${encodeURIComponent(curso.biografia)}&mod1=${encodeURIComponent(curso.mod1)}&mod2=${encodeURIComponent(curso.mod2)}&mod3=${encodeURIComponent(curso.mod3)}
            &mod4=${encodeURIComponent(curso.mod4)}&ap1=${encodeURIComponent(curso.ap1)}&ap2=${encodeURIComponent(curso.ap2)}&ap3=${encodeURIComponent(curso.ap3)}
            &ap4=${encodeURIComponent(curso.ap4)}`;
        });

        // Imagen del curso
        let imgCurso = document.createElement("img");
        imgCurso.src = curso.imagen;
        imgCurso.style.width = "100%";
        imgCurso.style.marginBottom = "10px";

        // Descripción del curso
        let infoCurso = document.createElement("div");
        infoCurso.innerHTML = `
            <h3 style="font-family: Inter; color: #333333;">${curso.nombre}</h3>
            <p style="font-family: Inter; color: #8C8C8C;">${curso.codigo}</p>
            <p style="font-family: Inter;"><strong>Duración:</strong>${curso.duracion}</p>
            <p style="font-family: Inter;"><strong>Nivel de experiencia:</strong> ${curso.nivel}</p>
            <p style="font-family: Inter;"><strong>Precio:</strong> S/ ${curso.precio}</p>
        `;

        divCurso.appendChild(imgCurso);
        divCurso.appendChild(infoCurso);
        container.appendChild(divCurso);
    }
    );
}

function mostrarCursoPorNombre(nombreBuscado) {
    const curso = cursos.find(c => c.nombre.toLowerCase() === nombreBuscado.toLowerCase());
    if (!curso) {
        console.log(`No se encontró el curso con nombre: ${nombreBuscado}`);
        return;
    }

    // La función mostrarCursos espera un arreglo, no un solo curso
    mostrarMisCursos([curso]); // Usamos corchetes para pasar un arreglo con un solo curso
}

// Obtener el nombre del curso desde la URL
/*document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const nombreCurso = params.get("nombre");

    if (nombreCurso) {
        const nombreDecodificado = decodeURIComponent(nombreCurso.trim());
        mostrarCursoPorNombre(nombreDecodificado);
    } else {
        console.log("No se recibió ningún nombre de curso en la URL.");
    }
});*/


// Activar filtros para los selects
document.getElementById("duracion").addEventListener("change", filtrarCursos);
document.getElementById("precio").addEventListener("change", filtrarCursos);
document.getElementById("nivel").addEventListener("change", filtrarCursos);