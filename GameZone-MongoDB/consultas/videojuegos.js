// CONSULTA 1: videojuegos con precio inferior a 40 USD.
db.videojuegos.find(
  { precioUSD: { $lt: 40 } },
  { _id: 0, nombre: 1, precioUSD: 1, clasificacion: 1 }
);

// CONSULTA 2: videojuegos lanzados después del 1 de enero de 2020.
db.videojuegos.find(
  { fechaLanzamiento: { $gt: ISODate("2020-01-01") } },
  { _id: 0, nombre: 1, fechaLanzamiento: 1, precioUSD: 1 }
).sort({ fechaLanzamiento: 1 });
