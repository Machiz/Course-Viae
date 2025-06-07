


const pos_but = document.getElementById('postular1');
const main_box = document.getElementById('popup1');
const bg = document.getElementById('bg');
console.log("hola");
function culminar_postulacion(){
    
    console.log("click");

    bg.classList.add("dark-bg-show");
    main_box.classList.add("popup-show");
}

pos_but.addEventListener('click', culminar_postulacion);