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
//estrellas
const estrellas = document.querySelectorAll('.estrella');
    estrellas.forEach((estrella, index) => {
      estrella.addEventListener('click', () => {
        estrellas.forEach((e, i) => {
          e.classList.toggle('seleccionada', i <= index);
        });
      });
    });

 document.querySelector('.btn-publicar').addEventListener('click', () => {
    const texto = document.querySelector('textarea').value.trim();
    const estrellas = document.querySelectorAll('.estrella.seleccionada').length;

    if (texto === '') {
      alert('Por favor, escriba una reseña para poder publicarla.');
    } else {
      localStorage.setItem("reseñaNueva", JSON.stringify({
        nombre: "Alessandro Hesse", 
        texto: texto,
        estrellas: estrellas
      }));
      mostrarModalReseña(); // muestra el mensaje positivo
    }
  });

  function mostrarModalReseña() {
    document.getElementById("modalReseña").style.display = "flex";
  }

  function cerrarModalReseña() {
    document.getElementById("modalReseña").style.display = "none";
    window.location.href = "reseñas.html"; // redirige a reseñas
  }