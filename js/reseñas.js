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
const reseñaGuardada = JSON.parse(localStorage.getItem("reseñaNueva"));
  if (reseñaGuardada) {
    const contenedor = document.querySelector(".re-container");
    const html = `
      <div class="reseña">
        <img src="../../img/hesse.jpg" alt="Usuario">
        <div class="info">
          <h4>${reseñaGuardada.nombre}</h4>
          <p>${reseñaGuardada.texto}</p>
          <div class="calificacion">
            Calificación:
            <span class="estrellas">
              <span class="rellenas">${"★".repeat(reseñaGuardada.estrellas)}</span><span class="vacias">${"★".repeat(5 - reseñaGuardada.estrellas)}</span>
            </span>
            <span class="completado">Completado ✔</span>
          </div>
        </div>
      </div>
    `;
    contenedor.insertAdjacentHTML("beforeend", html);
    localStorage.removeItem("reseñaNueva");
  }