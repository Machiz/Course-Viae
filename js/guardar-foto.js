window.onload = function () {
    const nombre = localStorage.getItem("minifoto");
    if (nombre) {
        document.getElementById("minifoto").src = localStorage.getItem("fotoUsuario");
    }
    else {
        document.getElementById("nombreUsuario").src = "../../resources/fotos/hesse.jpg";
    };
}