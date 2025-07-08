
window.onload = function () {
    const nombre = localStorage.getItem("nombreUsuario");
    if (nombre) {
        document.getElementById("nombreUsuario").textContent = nombre;
    }
    else {
        document.getElementById("nombreUsuario").textContent = "Usuario";
    };
}
