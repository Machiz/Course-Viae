


const pos_but = document.getElementById('postular1');
const main_box = document.getElementById('popup1');
const bg = document.getElementById('bg');
console.log("hola");
const texto1 = document.getElementById("in-1");
const texto2 = document.getElementById("in-2");
texto1.addEventListener('blur', (e) => {
if(e.target.value.trim().length == 0){
    e.target.classList.add('warning')
}else{
    e.target.classList.remove('warning')
}})

texto2.addEventListener('blur', (e) => {
if(e.target.value.trim().length == 0){
    e.target.classList.add('warning')
}else{
    e.target.classList.remove('warning')
}})
function culminar_postulacion(){
    
    

    if (texto1.value.trim() !== "" && texto2.value.trim() !== "" ) {
        bg.classList.add("dark-bg-show");
        main_box.classList.add("popup-show");
    } else {
        alert("Por favor, llenar todo el formulario de postulación.");
    }
}

pos_but.addEventListener('click', culminar_postulacion);