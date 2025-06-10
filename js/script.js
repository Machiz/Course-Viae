// Tipo de Cliente
db.tipo_cliente.insertMany([
  {
    "id_tc": "1",
    "nombre": "Estandar",
    "descripcion": "Usuario tipo estandar"
  },
  {
    "id_tc": "2",
    "nombre": "Premium",
    "descripcion": "Usuario con cuenta premium"
  }
  ])

// Cliente
db.cliente.insertMany([
  {
    "id": "1",
    "nombre":"Alessandro Hesse",
    "correo": "moroff@email.com",
    "telefono": "123456789",
    "direccion": "Av. Jose Maria Arguedas 1969",
    "id_tipo_cliente": "1"
  },
  {
    "id": "2",
    "nombre":"Diego Mucha",
    "correo": "diemfuego@gmail.com",
    "telefono": "998123841",
    "direccion": "Av. Juan Rulfo 1955",
    "id_tipo_cliente": "1"
  },
  {
    "id": "3",
    "nombre":"Leonardo Juscamayta",
    "correo": "leomayta@gmail.com",
    "telefono": "993283776",
    "direccion": "Av. Jose Nedin 2024",
    "id_tipo_cliente": "2"
  },
  {
    "id": "4",
    "nombre":"Samuel Quintanilla",
    "correo": "zzz@gmail.com",
    "telefono": "999666666",
    "direccion": "Av. Bob Marley 666",
    "id_tipo_cliente": "2"
  }
  ])
  
// Proveedor
db.proveedor.insertMany([
  {
    "id": "1",
    "nombre": "gC Industries",
    "telefono": "911666666",
    "correo": "sudonano@gmail.com"
  },
  {
    "id": "2",
    "nombre": "Valentin S.A.",
    "telefono": "911666666",
    "correo": "valix@gmail.com"
  },
  {
    "id": "3",
    "nombre": "LeoGames",
    "telefono": "999812364",
    "correo": "maytagames@gmail.com"
  },
  {
    "id": "4",
    "nombre": "StallmanGames",
    "telefono": "992354428",
    "correo": "pedroparamo@gmail.com"
  }
  ])
  
// Método de pago
db.metodo_pago.insertMany([
  {
    "id": "1",
    "tipo": "Tarjeta",
    "descripcion": "Pago realizado con tarjeta"
  },
  {
    "id": "2",
    "tipo": "Efectivo",
    "descripcion": "Pago realizado con efectivo"
  }
  ])
  
// Videojuego
db.videojuego.insertMany([
  {
    "id": "1",
    "titulo": "Crash_Bandicoot",
    "plataforma": "PS1",
    "genero": "Platformer",
    "estado": "Seminuevo",
    "fecha_ingreso": "2025-04-10",
    "precio": 49.99,
    "en_inventario": 1,
    "id_proveedor": "1",
    "descripcion": "Crash Bandicoot, el marsupial giratorio favorito de todos, salta, gira y choca a través de una isla para detener los planes del malvado Doctor Neo Cortex y salvar a sus amigos."
  },
  {
    "id": "2",
    "titulo": "Mario_Party",
    "plataforma": "Nintendo Switch",
    "genero": "Estrategia",
    "estado": "Nuevo",
    "fecha_ingreso": "2025-04-14",
    "precio": 99.99,
    "en_inventario": 0,
    "id_proveedor": "2",
    "descripcion": "La aventura clásica de Mario y Luigi para rescatar a la Princesa Peach del malvado Bowser. Un juego de plataformas atemporal con niveles icónicos y potenciadores memorables."
  },
  {
    "id": "3",
    "titulo": "Slenderman",
    "plataforma": "PC",
    "genero": "Terror",
    "estado": "Nuevo",
    "fecha_ingreso": "2025-04-1",
    "precio": 9.99,
    "en_inventario": 1,
    "id_proveedor": "3",
    "descripcion": "¡Juego de terror, busca todas la páginas disponibles antes que Slenderman te encuentre!"
  }
  ,{
    "id": "4",
    "titulo": "Space_Invaders",
    "plataforma": "PC",
    "genero": "Combate",
    "estado": "Seminuevo",
    "fecha_ingreso": "2021-03-10",
    "precio": 29.99,
    "en_inventario": 1,
    "id_proveedor": "2",
    "descripcion": "¡Clásico juego en el espacio, elimina a todos los alienígenas antes que te ataquen!"
  }
  ])
  
// venta
db.venta.insertMany([
  {
    "id": "1",
    "id_cliente": "1",
    "id_videojuego": "2",
    "id_metodo_pago": "2",
    "fecha": "2023-10-2",
    "cantidad_producto": 10,
    "precio_total": 50
  },
  {
    "id": "2",
    "id_cliente": "3",
    "id_videojuego": "2",
    "id_metodo_pago": "1",
    "fecha": "2022-10-3",
    "cantidad_producto": 1,
    "precio_total": 70
  },
  {
    "id": "3",
    "id_cliente": "4",
    "id_videojuego": "2",
    "id_metodo_pago": "1",
    "fecha": "2021-01-2",
    "cantidad_producto": 4,
    "precio_total": 35
  },
  {
    "id": "4",
    "id_cliente": "3",
    "id_videojuego": "2",
    "id_metodo_pago": "2",
    "fecha": "2024-11-2",
    "cantidad_producto": 4,
    "precio_total": 100
  }
  ])
  
  // Detalle de venta
  db.detalle_venta.insertMany([
    {
      "id": "1",
      "id_venta": "1",
      "id_videojuego": "2",
      "cantidad": 200,
      "precio_unitario": 19.99,
      "descuento": 10
    },
    {
      "id": "2",
      "id_venta": "3",
      "id_videojuego": "3",
      "cantidad": 300,
      "precio_unitario": 30.99,
      "descuento": 20
    },
    {
      "id": "3",
      "id_venta": "3",
      "id_videojuego": "1",
      "cantidad": 10,
      "precio_unitario": 10,
      "descuento": 0
    },
    {
      "id": "4",
      "id_venta": "4",
      "id_videojuego": "2",
      "cantidad": 1000,
      "precio_unitario": 20.99,
      "descuento": 10
    }
    ])
    
// Comentario
db.reseña.insertMany([
  {
    "id": "1",
    "autor": "Alessandro Hesse",
    "id_usuario": "1",
    "id_videojuego": "2",
    "fechaComentario": "2025-06-04",
    "estrellas": 4,
    "estado": "like",
    "texto": "Mario Party fue parte de mi infancia, buen juego, excelentes gráficas, entretenido para cualquier gamer."
  }
  ,
  {
    "id": "2",
    "autor": "Diego Mucha",
    "id_usuario": "2",
    "id_videojuego": "2",
    "fechaComentario": "2025-06-01",
    "estrellas": 4,
    "estado": "like",
    "texto": "Recuerdo que jugaba a Crash cuando era un infante, y gozaba corriendo en el juego, cada auto, cada obstáculo... hermoso."
  },
  {
    "id": "3",
    "autor": "Leonardo Juscamayta",
    "id_usuario": "3",
    "id_videojuego": "2",
    "fechaComentario": "2025-05-25",
    "estrellas": 4,
    "estado": "like",
    "texto": "Grande, Crash... salvando la infancia de muchos niños como yo lo fui... funciona sin problemas y buen pasatiempo."
  },
  {
    "id": "4",
    "autor": "Samuel Quintanilla",
    "id_usuario": "4",
    "id_videojuego": "4",
    "fechaComentario": "2025-05-30",
    "estrellas": 4,
    "estado": "like",
    "texto": "Space Invaders es fantástico, un juego antiguo de combate adictivo a cualquier costo... recomendable."
  }
  ])
  
  db.comentario.insertMany([
    {
      "id": "1",
      "autor": "Alessandro Hesse",
      "id_usuario": "1",
      "id_resena": "4",
      "fechaPublicacion": "2025-05-31",
      "reaccion": "like",
      "estrellas": "3",
      "texto": "Interesante... pero Mario Party es mejor, Samuel"
    },
    {
      "id": "2",
      "autor": "Alessandro Hesse",
      "id_usuario": "1",
      "id_resena": "3",
      "fechaPublicacion": "2025-05-28",
      "reaccion": "like",
      "estrellas": "5",
      "texto": "De acuerdo, Leonardo. Chocas autos y llegar a la meta es lo mejor de la vida."
    },
    {
      "id": "3",
      "autor": "Leonardo Juscamayta",
      "id_usuario": "3",
      "id_resena": "2",
      "fechaPublicacion": "2025-06-03",
      "reaccion": "like",
      "estrellas": "5",
      "texto": "Exacto... Crash es vida, amor."
    }
    ])