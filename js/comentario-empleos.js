

var comentarios = [
        {
            id: 1,
            nombre: "Diego Luna",
            calificacion: 2,
            cargo: "Exempleado",
            descripcion: "No me gusto para nada la experiencia, pésimo ambiente de trabajo.",
            imagen: "../../resources/fotos/comentario-2.png"
        },
        {
            id: 2,
            nombre: "Andrés Torres",
            calificacion: 5,
            cargo: "Exempleado",
            descripcion: "Valoro todo lo que me enseño esta oportunidad laboral. En especial a su personal y misión que tiene con su clientela.",
            imagen: "../../resources/fotos/comentario-1.png"
        },
        {
            id: 2,
            nombre: "J. J. Aramburú",
            calificacion: 4,
            cargo: "Exempleado",
            descripcion: "Respetan las horas de trabajo y pagan a tiempo.",
            imagen: "../../resources/fotos/hesse.jpg"
        },
]; 

const contenido_comentarios = document.querySelector('.lista-comentarios');

function mostrar_comentarios(filtro = comentarios) {
        contenido_comentarios.innerHTML = ""; 
        
        if (filtro.length === 0) {
            
            return;
        }
        var inHTML = "<div class='scroll_box'>";

        filtro.forEach(comentario => {
            inHTML += `
                
                <div class="comentario_box" id=${comentario.id}>
                <p class="cargo_text"> ${comentario.cargo}</p>
                <div class="top_comment">
                <img src="${comentario.imagen}" alt="${comentario.nombre}" class="imagen_comentario">
                <p class = "comentario_float_val">${comentario.nombre}</p>
                </div>
                
                <p class = "comentario_box_h3">${comentario.descripcion}</p>
                <div class = "bottom_comment">
                <p class = "comentario_cal">Calificación: </p> 
                <div class = "comentario_stars">
                
            `;
            for (let i = 0; i < 5; i++) {
                if(i < comentario.calificacion){
                    inHTML += '<span class="fa fa-star checked"></span>'
                }else{
                    inHTML += '<span class="fa fa-star"></span>'
                }
            }
            inHTML += `
                </div>
                </div>
                </div>`;
        });



        inHTML += "</div>";
        contenido_comentarios.innerHTML += inHTML;
        console.log(contenido_comentarios.innerHTML);
}

mostrar_comentarios();

const com_btn = document.getElementById("comentario_btn")
com_btn.addEventListener("click", agregar_comentario);


function agregar_comentario(){
    const texto = document.getElementById("comentario_input");
    const confirmacion = document.getElementById("mensaje_exito");

    if (texto.value.trim() !== "") {
        confirmacion.style.display = "block";
        texto.value = "";
    } else {
        alert("Por favor, recordar llenar el contenido del comentario antes de publicarlo.");
    }
    
}