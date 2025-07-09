function actualizarFoto() {
    var foto = document.getElementById("foto");
    var input = document.getElementById("inputFoto");
    var minifoto = document.getElementById("minifoto");
    
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function(e) {
            foto.src = e.target.result; 
            minifoto.src = e.target.result; 
        }
        
        reader.readAsDataURL(input.files[0]); 
    } else {
        foto.src = "../../img/hesse.jpg"; 
        minifoto.src = "../../img/hesse.jpg"; 
    }
}

