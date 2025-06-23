function abrirPerfil() {
const menu = document.getElementById("abajoMenu");
menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Cerrar si se hace clic fuera
window.addEventListener("click", function(e) {
const menu = document.getElementById("abajoMenu");
if (!e.target.closest(".perfil")) {
menu.style.display = "none";
}
});

const datos = JSON.parse(localStorage.getItem("ofertaSeleccionada") || "{}");

document.querySelector(".titulo").textContent = datos.titulo || "Sin título";
document.querySelector(".info-local").textContent = `${datos.ubicacion || "Ubicación"} • ${datos.tiempo || "?"}`;
document.querySelector(".empresa-logo").src = "../../img/" + (datos.logo || "default.png");
document.querySelector(".empresa-logo").alt = datos.empresa || "Empresa";
document.getElementById("descripcion").textContent = datos.descripcion || "Sin descripción.";
document.getElementById("salario").textContent = "S/. " + (datos.salario || "--") + " por mes";
// Requisitos
const listaReq = document.querySelector(".lista-requisitos");
if (Array.isArray(datos.requisitos)) {
    listaReq.innerHTML = datos.requisitos.map(item => `<li>${item}</li>`).join("");
} else {
    listaReq.innerHTML = "<li>No especificados</li>";
}

// Beneficios
const listaBen = document.querySelector(".lista-beneficios");
if (Array.isArray(datos.beneficios)) {
    listaBen.innerHTML = datos.beneficios.map(item => `<li>${item}</li>`).join("");
} else {
    listaBen.innerHTML = "<li>No especificados</li>";
}

// Enlace de postulación
document.querySelector(".postular-btn").href = "../Postular_Empleos/postular-empleo.html";
