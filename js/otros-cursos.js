const cursos = [
    {
        id: "curso1",
        nombre: "Gestión Empresarial",
        duracion: "7 horas",
        precio: 15,
        nivel: "Básico",
        codigo: "#124512",
        imagen: "../../resources/fotos/gestion-empresarial.png",
        descripcion: "Es un proceso de planificación, organización y control de recursos, cuyo objetivo es el alcance de metas trazadas por una empresa/organización/equipo tomando en cuenta la eficiencia y la productividad, crecimiento, desarrollo e innovación.",
        instructor: "Zack Snyder",
        foto: "../../resources/fotos/300.png",
        biografia: "Zack Snyder nació en Mollendo, Arequipa, en el año 1979. Es MBA en Gestión Empresarial por ESAN y la Munich Business School, lincenciado en Administración de empresas en la Universidad de Lima, será tu guía en el cocnocimiento de gestión en sectores organizacionales, empresas modernas y las claves a un futuro en el que todo es equipo, apoyo y dirección eficiente. Con más de diez años de experiencia en su campo, Snyder ha sido subgerente de la empresa Intercorp.",
        modulos: [
            "Video (15 min.): Fundamentos de la Gestión Empresarial",
            "Lectura: Estrategias Empresariales",
            "Caso Práctico: Análisis de una Empresa",
            "Examen Final de Gestión Empresarial"
        ],
        aprendizajes: [
            "Hacer que tu negocio prospere",
            "Gestionar ambientes",
            "Abordar situaciones complejas",
            "Conocer las políticas de tu organización"
        ]
    },
    {
        id: "curso2",
        nombre: "Diseño Web Avanzado",
        descripcion: "Domina HTML, CSS y JavaScript para crear sitios web interactivos.",
        precio: 200,
        duracion: "8 semanas",
        instructor: "Carlos Gómez",
        biografia: "Diseñador web profesional y docente desde 2015...",
        imagenCurso: "../../resources/fotos/curso2.jpg",
        aprendizajes: [
            "HTML5 y CSS3",
            "Flexbox y Grid",
            "JavaScript dinámico",
            "Diseño adaptable (responsive)"
        ],
        modulos: [
            "Maquetado HTML",
            "Estilización avanzada",
            "Interactividad con JS",
            "Proyecto web completo"
        ]
    },
    // Puedes seguir agregando más cursos aquí
];

function obtenerIdCursoDesdeUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

function mostrarDetalleCurso() {
    const id = obtenerIdCursoDesdeUrl();
    if (!id) return;

    const curso = cursos.find(c => c.id === id);
    if (!curso) {
        alert("Curso no encontrado.");
        return;
    }

    // Títulos y código
    document.querySelectorAll(".nombreCurso").forEach(el => el.textContent = curso.nombre);
    document.getElementById("codigoCurso").textContent = `(${curso.id})`;

    // Imagen
    const contenedor = document.getElementById("contenedorImagenCurso");
    const img = document.createElement("img");
    img.src = curso.imagen;
    img.alt = curso.nombre;
    img.style.width = "100%";
    img.style.marginBottom = "10px";
    contenedor.appendChild(img);

    // Texto del curso
    document.getElementById("descripcionCurso").textContent = curso.descripcion;
    document.getElementById("precioCurso").textContent = curso.precio;
    document.getElementById("duracionCurso").textContent = curso.duracion;

    // Instructor
    document.querySelectorAll(".instructorCurso").forEach(el => el.textContent = curso.instructor);
    document.getElementById("biografiaCurso").textContent = curso.biografia;

    // Aprendizajes
    curso.aprendizajes.forEach((item, index) => {
        const el = document.getElementById(`ap${index + 1}Curso`);
        if (el) el.textContent = item;
    });

    // Módulos
    curso.modulos.forEach((modulo, index) => {
        const el = document.getElementById(`mod${index + 1}Curso`);
        if (el) el.textContent = modulo;
    });
}

document.addEventListener("DOMContentLoaded", mostrarDetalleCurso);