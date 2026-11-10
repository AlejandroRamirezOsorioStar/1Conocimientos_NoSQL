// CONSULTA 1: usuarios mayores de 18 años.
db.usuarios.find(
  { edad: { $gt: 18 } },
  { _id: 0, nombreUsuario: 1, edad: 1, pais: 1 }
).sort({ edad: -1 });

// CONSULTA 2: usuarios cuya plataforma principal es PC.
// Se utiliza el ObjectId fijo asignado a la plataforma PC en database.js.
db.usuarios.find(
  { plataformaPrincipal: ObjectId("660000000000000000000001") },
  { _id: 0, nombreUsuario: 1, edad: 1, pais: 1 }
);
