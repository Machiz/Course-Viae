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
function mostrarGrupo(numero) {
    const grupos = document.querySelectorAll('.reclamos-grupo');
    grupos.forEach((grupo, index) => {
      grupo.style.display = (index === numero - 1) ? 'flex' : 'none';
    });
  }
  
document.getElementById("publicar-btn").addEventListener("click", function () {
  const texto = document.getElementById("reclamo").value.trim();
  if (texto === "") {
    alert("Por favor, escriba un reclamo para poder publicarlo.");
    return;
  }

  // Crear contenedor grupo 4 
  let grupo4 = document.querySelector('.grupo-4');
  if (!grupo4) {
    grupo4 = document.createElement("div");
    grupo4.className = "reclamos-grupo grupo-4";
    grupo4.style.display = "flex";
    const contenedor = document.querySelector('.contenedor-reclamos');
    contenedor.insertBefore(grupo4, document.querySelector('.formulario-reclamo'));
  }

  // Crear botón 4 
  if (!document.getElementById("btn-grupo-4")) {
    const boton = document.createElement("div");
    boton.id = "btn-grupo-4";
    boton.textContent = "4";
    boton.onclick = function () {
      mostrarGrupo(4);
    };
    document.getElementById("botones-grupos").appendChild(boton);
  }

  // Insertar reclamo
  const nuevo = document.createElement("div");
  nuevo.className = "reclamo-usuario";
  nuevo.style.width = "300px";
nuevo.style.margin = "10px";
  nuevo.innerHTML = `
    <div class="reclamo-usuario-header">
      <img src="../../img/hesse.jpg" alt="Foto usuario">
      <div>
        <strong>Alessandro Hesse</strong><br>
        <small>Publicado hoy</small>
      </div>
    </div>
    <p>${texto}</p>
  `;
  grupo4.appendChild(nuevo);

  // Mostrar mensaje positivo con check
  document.getElementById("modalReclamo").style.display = "flex";

  // Mostrar grupo 4
  mostrarGrupo(4);

  // Limpiar el reclamo de la caja de texto
  document.getElementById("reclamo").value = "";
});
function cerrarModal() {
  document.getElementById("modalReclamo").style.display = "none";
}