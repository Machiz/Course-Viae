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
document.getElementById("publicar-btn").addEventListener("click", function (e) {
  const texto = document.getElementById("reclamo").value.trim();

  if (texto === "") {
    alert("Por favor, escriba un reclamo para poder publicarlo.");
    return;
  }

  // se muestra el mensaje
  document.getElementById("modalReclamo").style.display = "flex";
});

// para cerrar
function cerrarModal() {
  document.getElementById("modalReclamo").style.display = "none";
// limpia el reclamo de la caja de texto
document.getElementById("reclamo").value = "";

// limpia el archivo adjunto
document.getElementById("archivo").value = null;
}