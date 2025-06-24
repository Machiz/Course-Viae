function crearTarjetaCurso({ nombre, codigo, imagen }) {
    const tarjeta = document.createElement("div");
    tarjeta.style.border = "2px solid #058ED9";
    tarjeta.style.padding = "10px";
    tarjeta.style.borderRadius = "6px";
    tarjeta.style.width = "200px";

    tarjeta.innerHTML = `
        <img src="${imagen}" alt="${nombre}" style="width:100%; margin-bottom:10px;">
        <div>
            <h3 class="fontInter" style="color:#333;">${nombre}</h3>
            <p class="fontInter" style="color:#8C8C8C; font-size:14px;">${codigo}</p>
            <button style="background-color:#3A89E2; border-radius:20px; width:100px; height:36px; color:white; border:none; cursor:pointer;" 
                class="fontInter" onclick="verDetalleCurso('${nombre}')">
                Visitar curso
            </button>
        </div>
    `;

    return tarjeta;
}