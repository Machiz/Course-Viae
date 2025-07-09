function actualizarFoto() {
    var foto = document.getElementById("foto");
    var input = document.getElementById("inputFoto");
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            foto.src = e.target.result; // Actualiza la imagen
        }
        
        reader.readAsDataURL(input.files[0]); // Lee el archivo
    } else {
        foto.src = "default.jpg"; // Imagen por defecto si no hay selección
    }
}

