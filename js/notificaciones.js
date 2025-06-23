function abrirPerfil() {
  const menu = document.getElementById("abajoMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}
//cerrar si hace click afuera
window.addEventListener("click", function(e) {
  const menu = document.getElementById("abajoMenu");
  if (!e.target.closest(".perfil")) {
    menu.style.display = "none";
  }
});
// Se seleccionan todos los botones de cerrar 
document.querySelectorAll('.close-noti').forEach(function(button) {
  button.addEventListener('click', function() {
    const oferta = this.parentElement;
    const grupoNoti = oferta.parentElement;
     // Elimina la oferta
    oferta.remove();
    // Si ya no hay ofertas dentro del grupo, oculta todo el grupo
    if (grupoNoti.querySelectorAll('.oferta').length === 0) {
      grupoNoti.style.display = 'none';
    }
  });
});
//ver oferta
function verOferta(elemento) {
  const datos = {
    titulo: elemento.dataset.titulo,
    empresa: elemento.dataset.empresa,
    ubicacion: elemento.dataset.ubicacion,
    tiempo: elemento.dataset.tiempo,
    descripcion: elemento.dataset.descripcion,
    salario: elemento.dataset.salario,
    logo: elemento.dataset.logo,
    requisitos: JSON.parse(elemento.dataset.requisitos),
    beneficios: JSON.parse(elemento.dataset.beneficios),
    imagen: elemento.dataset.imagen // si usarás imagen dinámica
  };
  localStorage.setItem("ofertaSeleccionada", JSON.stringify(datos));
}
