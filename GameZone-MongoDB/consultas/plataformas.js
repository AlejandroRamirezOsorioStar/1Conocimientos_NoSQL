// CONSULTA 1: plataformas fabricadas por Sony.
db.plataformas.find(
  { fabricante: "Sony" },
  { _id: 0, nombre: 1, fabricante: 1, anioLanzamiento: 1 }
);

// CONSULTA 2: plataformas lanzadas desde el año 2020 (incluido).
db.plataformas.find(
  { anioLanzamiento: { $gte: 2020 } },
  { _id: 0, nombre: 1, fabricante: 1, anioLanzamiento: 1 }
).sort({ anioLanzamiento: 1 });
