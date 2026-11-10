// CONSULTA 1: desarrolladores cuyo país es Japón.
db.desarrolladores.find(
  { pais: "Japón" },
  { _id: 0, nombre: 1, pais: 1, anioFundacion: 1 }
);

// CONSULTA 2: desarrolladores fundados después del año 2000.
db.desarrolladores.find(
  { anioFundacion: { $gt: 2000 } },
  { _id: 0, nombre: 1, anioFundacion: 1, empleados: 1 }
).sort({ anioFundacion: 1 });
