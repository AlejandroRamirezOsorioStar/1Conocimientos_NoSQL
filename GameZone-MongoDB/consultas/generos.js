// CONSULTA 1: géneros cuya categoría contiene la palabra "Aventura".
db.generos.find(
  { categoria: /Aventura/i },
  { _id: 0, nombre: 1, categoria: 1, descripcion: 1 }
);

// CONSULTA 2: géneros con popularidad superior a 80.
db.generos.find(
  { popularidad: { $gt: 80 } },
  { _id: 0, nombre: 1, popularidad: 1 }
).sort({ popularidad: -1 });
