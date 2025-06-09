


const pos_but = document.getElementById('postular1');
const main_box = document.getElementById('popup1');
const bg = document.getElementById('bg');
console.log("hola");
function culminar_postulacion(){
    
    const texto1 = document.getElementById("in-1");
    const texto2 = document.getElementById("in-2");

    if (texto1.value.trim() !== "" && texto2.value.trim() !== "" ) {
        bg.classList.add("dark-bg-show");
        main_box.classList.add("popup-show");
    } else {
        alert("Por favor, llenar todo el formulario de postulación.");
    }
}

pos_but.addEventListener('click', culminar_postulacion);