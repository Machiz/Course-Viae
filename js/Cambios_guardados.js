function guardarCambios() {
    const modal = document.getElementById("Confirmacion");
    modal.classList.add("show");
    
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
}