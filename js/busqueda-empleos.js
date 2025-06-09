var ofertas = [
        {
            id: 1,
            nombre: "Practicante de Procesos y Proyectos",
            empresa: "Tottus",
            fecha: "Hace 1 día",
            distrito: "Surquillo",
            jornada: "Tiempo Completo",
            salario: 1300,
            descripcion: "Somos Tottus, trabaja con nosotros como practicante de procesos y proyectos. Estamos presentes en 9 países de América Latina.",
            requisitos: ["Excel Avanzado", "Conocimientos en uso de ChatGPT", "Conocer el área de Procesos"],
            beneficios: ["Entrar a planilla","Seguro social","Pagos puntuales"],
            imagen: "../../resources/fotos/tottus_logo.png"
        },
        {
            id: 2,
            nombre: "Diseñador de Entorno Web",
            empresa: "UPC",
            fecha: "Hace 5 días",
            distrito: "Miraflores",
            jornada: "Tiempo Parcial",
            salario: 650,
            descripcion: "Trabaja en la UPC! Buscamos emergentes talentos para esta oportunidad laboral. Ayúdanos a diseñar nuestro próximo gran proyecto web.",
            requisitos: ["Ser mayor de edad.", "Manejar herramientas como Figma.", "Pensamiento creativo."],
            beneficios: ["Entrar a planilla","Seguro social","Pagos puntuales"],
            imagen: "../../resources/fotos/upc_logo.png"
        },
        {
            id: 3,
            nombre: "Programador Web",
            empresa: "Interbank",
            fecha: "Hace 1 mes",
            distrito: "San Borja",
            jornada: "Tiempo Completo",
            salario: 3000,
            descripcion: "Trabaja como programador web en el banco internacional de prestigio Interbank, el tercer banco más grande del Perú. Trabaja bajo todos los beneficios de Intercorp.",
            requisitos: ["Conocimientos en bases de datos no relacionales, de preferencia MongoDB.", "Conocer Angular o frameworks similares.", "Conocimientos en HTML, CSS."],
            beneficios: ["Entrar a planilla","Seguro social","Pagos puntuales"],
            imagen: "../../resources/fotos/interbank_logo.png"
        },
        {
            id: 4,
            nombre: "Analista de Datos",
            empresa: "Facebook",
            fecha: "Hace 1 semana",
            distrito: "Surquillo",
            jornada: "Tiempo Parcial",
            salario: 2000,
            descripcion: "Trabaja con Facebook y obten todos los beneficios que tenemos! Aprovecha de esta experiencia única y disfruta de nuestros establecimientos ahora en Perú.",
            requisitos: ["Conocimiento de R.", "Experiencia con largos datasets.", "Maneja RStudio."],
            beneficios: ["Entrar a planilla","Seguro social","Pagos puntuales"],
            imagen: "../../resources/fotos/facebook_logo.png"
        },
    ]; 
const contenido_ofertas = document.querySelector('.lista-ofertas');
const buscador = document.getElementById('buscador');
const jornadaFiltro = document.getElementById('jornada');
const fechaFiltro = document.getElementById('fecha');
const distritoFiltro = document.getElementById('distrito');
const salarioFiltro = document.getElementById('salario');

const main_box = document.getElementById('main_oferta_box');


function mostrar_ofertas(filtro = ofertas) {
        contenido_ofertas.innerHTML = ""; 
        
        if (filtro.length === 0) {
            contenido_ofertas.innerHTML = `
                <div class = vacio-box>
                <p class="vacio-text">No se encontraron ofertas con los filtros especificados.</p>
                <img class = "vacio-img" src= "../../resources/fotos/filtro-aviso.png">
            `;
            
            return;
        }
        var inHTML = "<div class='scroll_box'>";

        filtro.forEach(oferta => {
            inHTML += `
                <div class="oferta_box" id=${oferta.id}>
                
                <p class = "oferta_float_val">${oferta.distrito}</p>
                <h3 class = "oferta_box_h3">${oferta.nombre}</h3>
                <p>${oferta.empresa}</p>
                <img src="${oferta.imagen}" alt="${oferta.nombre}" class="imagen_oferta">
                <p>${oferta.fecha}</p>

                </div>
            `;
        });
        inHTML += "</div>";
        contenido_ofertas.innerHTML += inHTML;
        console.log(contenido_ofertas.innerHTML);
}

function determinar_salario(texto, valor){
    var val = 0;
    if(texto === "Menor a s/.700"){
        val = valor < 700;
    }else if(texto === "Mayor a s/.700"){
        val = valor >= 700;
    }else if(texto === "Mayor a s/.1300"){
        val = valor >= 1300;
    }else if(texto === "Mayor a s/.2000"){
        val = valor >= 2000;
    }else if(texto === "Mayor a s/.3000"){
        val = valor >= 3000;
    }

    return val;
}

function filtrar_ofertas() {
        const texto = buscador.value.toLowerCase();
        const jor = jornadaFiltro.value;
        const sal = salarioFiltro.value;
        const fecha = fechaFiltro.value;
        const dist = distritoFiltro.value;

        const filtrados = ofertas.filter(oferta => {
            const coincideNombre = oferta.nombre.toLowerCase().includes(texto);
            
            const coincideJornada = jor === "" || oferta.jornada === jor;
            const coincideSalario = sal === "" || determinar_salario(sal, oferta.salario);
            const coincideFecha = fecha === "" || oferta.fecha === fecha;
            const coincideDist = dist === "" || oferta.distrito === dist;
            return coincideNombre && coincideSalario && coincideFecha && coincideJornada && coincideDist;
        });
        
        mostrar_ofertas(filtrados);
        const cajas = document.getElementsByClassName('oferta_box');
        for(const caja of cajas ){
            caja.addEventListener('click', mostrar_info);
            
        };
}

function mostrar_info(event){
    var caja = ofertas[event.currentTarget.id - 1]
    var inHTML = "<div class='oferta_info_box2'>";
    inHTML += `
        <img src="${caja.imagen}" alt="${caja.nombre}" class="main_imagen_oferta">
        <div class = "info_content">
            <h3 class = "left_align_h3">${caja.nombre}</h3>
            
            <p class = "left_align">${caja.fecha}</p>
            <p class = "left_align">${caja.distrito}, Lima</p>
            <br><br>
            <button type="button" class="postular_button"> Postular </button> 
            <h4 class = "left_align_h4"> Descripción de la oferta </h4>
            <p class = "left_align">${caja.descripcion}</p>
            <h4 class = "left_align_h4"> Requisitos </h4>
            
        </div>
    `;
    inHTML += `<ul>`;
    caja["requisitos"].forEach(ben=>{
        inHTML += `<li class = "left_align"> ${ben}</li>`;
    })
    inHTML += `</ul>`;
    inHTML += `
        <h4 class = "left_align_h4"> Beneficios </h4>
        <ul>
            <li class = "left_align"> Entrar a planilla </li>
            <li class = "left_align"> Seguro social </li>
            <li class = "left_align"> Pagos puntuales </li>
        </ul>
        <h4 class = "left_align_h4"> Salario </h4>
        <p class ="left_align"> s/.${caja.salario} al mes</p>
        <button class = "comentario_button" type="button"> Ver comentarios</button>
    `;

    inHTML += `</div>`;
    main_box.innerHTML = inHTML;
}

buscador.addEventListener('input', filtrar_ofertas);
jornadaFiltro.addEventListener('change', filtrar_ofertas);
fechaFiltro.addEventListener('change', filtrar_ofertas);
salarioFiltro.addEventListener('change', filtrar_ofertas);
distritoFiltro.addEventListener('change', filtrar_ofertas);

mostrar_ofertas();

const cajas = document.getElementsByClassName('oferta_box');

for(const caja of cajas ){
    caja.addEventListener('click', mostrar_info);
    
};