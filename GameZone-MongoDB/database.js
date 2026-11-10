// GameZone - Base de datos NoSQL con MongoDB
// Ejecutar desde mongosh con: load("database.js")
// Ejecutar una sola vez sobre colecciones vacías para evitar duplicados.

use("gamezone_db");

const colecciones = ["videojuegos", "desarrolladores", "plataformas", "generos", "usuarios"];
for (const nombre of colecciones) {
  if (!db.getCollectionNames().includes(nombre)) db.createCollection(nombre);
}

// IDs fijos para enlazar documentos entre colecciones.
const dev = {
  mojang: ObjectId("650000000000000000000001"), rockstar: ObjectId("650000000000000000000002"),
  cdprojekt: ObjectId("650000000000000000000003"), relogic: ObjectId("650000000000000000000004"),
  teamcherry: ObjectId("650000000000000000000005"), nintendo: ObjectId("650000000000000000000006"),
  supergiant: ObjectId("650000000000000000000007"), naughtyDog: ObjectId("650000000000000000000008"),
  ubisoft: ObjectId("650000000000000000000009"), concernedApe: ObjectId("650000000000000000000010")
};
const plat = {
  pc: ObjectId("660000000000000000000001"), ps5: ObjectId("660000000000000000000002"),
  xbox: ObjectId("660000000000000000000003"), switch: ObjectId("660000000000000000000004"),
  ps4: ObjectId("660000000000000000000005"), xbox360: ObjectId("660000000000000000000006"),
  ps2: ObjectId("660000000000000000000007"), wii: ObjectId("660000000000000000000008"),
  mobile: ObjectId("660000000000000000000009"), mac: ObjectId("660000000000000000000010")
};
const gen = {
  sandbox: ObjectId("670000000000000000000001"), accion: ObjectId("670000000000000000000002"),
  rpg: ObjectId("670000000000000000000003"), aventura: ObjectId("670000000000000000000004"),
  metroidvania: ObjectId("670000000000000000000005"), estrategia: ObjectId("670000000000000000000006"),
  roguelike: ObjectId("670000000000000000000007"), deportes: ObjectId("670000000000000000000008"),
  simulacion: ObjectId("670000000000000000000009"), terror: ObjectId("670000000000000000000010")
};

db.desarrolladores.insertMany([
  {_id:dev.mojang,nombre:"Mojang Studios",pais:"Suecia",anioFundacion:2009,empleados:600,sitioWeb:"https://www.minecraft.net"},
  {_id:dev.rockstar,nombre:"Rockstar Games",pais:"Estados Unidos",anioFundacion:1998,empleados:2000,sitioWeb:"https://www.rockstargames.com"},
  {_id:dev.cdprojekt,nombre:"CD Projekt Red",pais:"Polonia",anioFundacion:2002,empleados:1000,sitioWeb:"https://www.cdprojektred.com"},
  {_id:dev.relogic,nombre:"Re-Logic",pais:"Estados Unidos",anioFundacion:2011,empleados:15,sitioWeb:"https://www.re-logic.com"},
  {_id:dev.teamcherry,nombre:"Team Cherry",pais:"Australia",anioFundacion:2014,empleados:3,sitioWeb:"https://www.teamcherry.com.au"},
  {_id:dev.nintendo,nombre:"Nintendo EPD",pais:"Japón",anioFundacion:2015,empleados:900,sitioWeb:"https://www.nintendo.com"},
  {_id:dev.supergiant,nombre:"Supergiant Games",pais:"Estados Unidos",anioFundacion:2009,empleados:25,sitioWeb:"https://www.supergiantgames.com"},
  {_id:dev.naughtyDog,nombre:"Naughty Dog",pais:"Estados Unidos",anioFundacion:1984,empleados:400,sitioWeb:"https://www.naughtydog.com"},
  {_id:dev.ubisoft,nombre:"Ubisoft Montreal",pais:"Canadá",anioFundacion:1997,empleados:4000,sitioWeb:"https://www.ubisoft.com"},
  {_id:dev.concernedApe,nombre:"ConcernedApe",pais:"Estados Unidos",anioFundacion:2012,empleados:1,sitioWeb:"https://www.stardewvalley.net"}
]);

db.plataformas.insertMany([
  {_id:plat.pc,nombre:"PC",fabricante:"Varios fabricantes",tipo:"Computador",anioLanzamiento:1981,generacion:"Variable",disponible:true},
  {_id:plat.ps5,nombre:"PlayStation 5",fabricante:"Sony",tipo:"Consola de sobremesa",anioLanzamiento:2020,generacion:9,disponible:true},
  {_id:plat.xbox,nombre:"Xbox Series X|S",fabricante:"Microsoft",tipo:"Consola de sobremesa",anioLanzamiento:2020,generacion:9,disponible:true},
  {_id:plat.switch,nombre:"Nintendo Switch",fabricante:"Nintendo",tipo:"Consola híbrida",anioLanzamiento:2017,generacion:8,disponible:true},
  {_id:plat.ps4,nombre:"PlayStation 4",fabricante:"Sony",tipo:"Consola de sobremesa",anioLanzamiento:2013,generacion:8,disponible:true},
  {_id:plat.xbox360,nombre:"Xbox 360",fabricante:"Microsoft",tipo:"Consola de sobremesa",anioLanzamiento:2005,generacion:7,disponible:false},
  {_id:plat.ps2,nombre:"PlayStation 2",fabricante:"Sony",tipo:"Consola de sobremesa",anioLanzamiento:2000,generacion:6,disponible:false},
  {_id:plat.wii,nombre:"Nintendo Wii",fabricante:"Nintendo",tipo:"Consola de sobremesa",anioLanzamiento:2006,generacion:7,disponible:false},
  {_id:plat.mobile,nombre:"Android",fabricante:"Google",tipo:"Dispositivo móvil",anioLanzamiento:2008,generacion:"Variable",disponible:true},
  {_id:plat.mac,nombre:"macOS",fabricante:"Apple",tipo:"Computador",anioLanzamiento:2001,generacion:"Variable",disponible:true}
]);

db.generos.insertMany([
  {_id:gen.sandbox,nombre:"Sandbox",descripcion:"Mundos abiertos con libertad para construir y explorar.",popularidad:95,categoria:"Mundo abierto"},
  {_id:gen.accion,nombre:"Acción",descripcion:"Combate, reflejos y desafíos en tiempo real.",popularidad:92,categoria:"Acción"},
  {_id:gen.rpg,nombre:"RPG",descripcion:"Juegos de rol con progresión y desarrollo de personajes.",popularidad:90,categoria:"Rol"},
  {_id:gen.aventura,nombre:"Aventura",descripcion:"Exploración y narrativa como elementos principales.",popularidad:88,categoria:"Aventura"},
  {_id:gen.metroidvania,nombre:"Metroidvania",descripcion:"Exploración interconectada y habilidades desbloqueables.",popularidad:82,categoria:"Aventura y acción"},
  {_id:gen.estrategia,nombre:"Estrategia",descripcion:"Planificación y toma de decisiones para alcanzar objetivos.",popularidad:78,categoria:"Estrategia"},
  {_id:gen.roguelike,nombre:"Roguelike",descripcion:"Partidas con mapas o desafíos que cambian al volver a jugar.",popularidad:84,categoria:"Acción y rol"},
  {_id:gen.deportes,nombre:"Deportes",descripcion:"Simulaciones y competencias deportivas.",popularidad:86,categoria:"Simulación deportiva"},
  {_id:gen.simulacion,nombre:"Simulación",descripcion:"Recreación de actividades y sistemas del mundo real.",popularidad:75,categoria:"Simulación"},
  {_id:gen.terror,nombre:"Terror",descripcion:"Experiencias diseñadas para generar tensión y miedo.",popularidad:80,categoria:"Suspenso"}
]);

db.videojuegos.insertMany([
  {nombre:"Minecraft",desarrolladorId:dev.mojang,generoId:gen.sandbox,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.switch,plat.mobile],fechaLanzamiento:ISODate("2011-11-18"),precioUSD:29.99,multijugador:true,clasificacion:"E10+"},
  {nombre:"Grand Theft Auto V",desarrolladorId:dev.rockstar,generoId:gen.accion,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.ps4,plat.xbox360],fechaLanzamiento:ISODate("2013-09-17"),precioUSD:29.99,multijugador:true,clasificacion:"M"},
  {nombre:"The Witcher 3: Wild Hunt",desarrolladorId:dev.cdprojekt,generoId:gen.rpg,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.switch,plat.ps4],fechaLanzamiento:ISODate("2015-05-19"),precioUSD:39.99,multijugador:false,clasificacion:"M"},
  {nombre:"Terraria",desarrolladorId:dev.relogic,generoId:gen.aventura,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.switch,plat.mobile],fechaLanzamiento:ISODate("2011-05-16"),precioUSD:9.99,multijugador:true,clasificacion:"T"},
  {nombre:"Hollow Knight",desarrolladorId:dev.teamcherry,generoId:gen.metroidvania,plataformas:[plat.pc,plat.switch,plat.ps4,plat.xbox],fechaLanzamiento:ISODate("2017-02-24"),precioUSD:14.99,multijugador:false,clasificacion:"E10+"},
  {nombre:"The Legend of Zelda: Breath of the Wild",desarrolladorId:dev.nintendo,generoId:gen.aventura,plataformas:[plat.switch,plat.wii],fechaLanzamiento:ISODate("2017-03-03"),precioUSD:59.99,multijugador:false,clasificacion:"E10+"},
  {nombre:"Hades",desarrolladorId:dev.supergiant,generoId:gen.roguelike,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.switch],fechaLanzamiento:ISODate("2020-09-17"),precioUSD:24.99,multijugador:false,clasificacion:"T"},
  {nombre:"The Last of Us Part I",desarrolladorId:dev.naughtyDog,generoId:gen.terror,plataformas:[plat.pc,plat.ps5],fechaLanzamiento:ISODate("2022-09-02"),precioUSD:69.99,multijugador:false,clasificacion:"M"},
  {nombre:"Assassin's Creed Valhalla",desarrolladorId:dev.ubisoft,generoId:gen.accion,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.ps4],fechaLanzamiento:ISODate("2020-11-10"),precioUSD:59.99,multijugador:false,clasificacion:"M"},
  {nombre:"Stardew Valley",desarrolladorId:dev.concernedApe,generoId:gen.simulacion,plataformas:[plat.pc,plat.ps5,plat.xbox,plat.switch,plat.mobile,plat.mac],fechaLanzamiento:ISODate("2016-02-26"),precioUSD:14.99,multijugador:true,clasificacion:"E10+"}
]);

db.usuarios.insertMany([
  {nombreUsuario:"PixelMaster",edad:22,pais:"Colombia",plataformaPrincipal:plat.pc,juegosFavoritos:["Minecraft","Terraria"],fechaRegistro:ISODate("2024-01-15"),activo:true},
  {nombreUsuario:"LunaGamer",edad:19,pais:"México",plataformaPrincipal:plat.switch,juegosFavoritos:["Hollow Knight","Stardew Valley"],fechaRegistro:ISODate("2024-02-20"),activo:true},
  {nombreUsuario:"ShadowX",edad:27,pais:"Argentina",plataformaPrincipal:plat.ps5,juegosFavoritos:["Grand Theft Auto V","The Last of Us Part I"],fechaRegistro:ISODate("2023-11-05"),activo:true},
  {nombreUsuario:"CraftyFox",edad:17,pais:"Chile",plataformaPrincipal:plat.pc,juegosFavoritos:["Minecraft","Hades"],fechaRegistro:ISODate("2024-03-12"),activo:true},
  {nombreUsuario:"RPGKnight",edad:31,pais:"España",plataformaPrincipal:plat.xbox,juegosFavoritos:["The Witcher 3: Wild Hunt","Hades"],fechaRegistro:ISODate("2022-08-30"),activo:true},
  {nombreUsuario:"NekoPlay",edad:24,pais:"Japón",plataformaPrincipal:plat.ps5,juegosFavoritos:["The Legend of Zelda: Breath of the Wild"],fechaRegistro:ISODate("2023-06-18"),activo:false},
  {nombreUsuario:"FarmLife",edad:20,pais:"Colombia",plataformaPrincipal:plat.mobile,juegosFavoritos:["Stardew Valley","Terraria"],fechaRegistro:ISODate("2024-04-01"),activo:true},
  {nombreUsuario:"RetroWolf",edad:35,pais:"Perú",plataformaPrincipal:plat.ps4,juegosFavoritos:["Grand Theft Auto V","The Witcher 3: Wild Hunt"],fechaRegistro:ISODate("2021-12-09"),activo:true},
  {nombreUsuario:"IndieStar",edad:18,pais:"Estados Unidos",plataformaPrincipal:plat.mac,juegosFavoritos:["Hollow Knight","Hades"],fechaRegistro:ISODate("2024-05-22"),activo:true},
  {nombreUsuario:"GoalHunter",edad:16,pais:"Colombia",plataformaPrincipal:plat.xbox,juegosFavoritos:["Minecraft","Grand Theft Auto V"],fechaRegistro:ISODate("2024-06-10"),activo:false}
]);

print("Carga completada. Conteo por colección:");
for (const nombre of colecciones) print(`${nombre}: ${db.getCollection(nombre).countDocuments()}`);
