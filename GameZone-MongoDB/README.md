# GameZone - Base de datos NoSQL con MongoDB

## Información del estudiante
- **Nombre:** Alejandro Ramirez Osorio
- **Asignatura:** Bases de Datos NoSQL / MongoDB
- **Proyecto:** GameZone

## Descripción de la temática
GameZone representa una plataforma de catálogo y comunidad gamer. Su base de datos almacena videojuegos, las empresas que los desarrollan, las plataformas donde se pueden jugar, sus géneros y los usuarios registrados.

## Base de datos
`gamezone_db`

## Colecciones
1. **videojuegos:** nombre, desarrollador, género, plataformas, fecha de lanzamiento, precio, modalidad multijugador y clasificación.
2. **desarrolladores:** nombre de la empresa, país, año de fundación, cantidad aproximada de empleados y sitio web.
3. **plataformas:** nombre, fabricante, tipo, año de lanzamiento, generación y disponibilidad.
4. **generos:** nombre, descripción, popularidad y categoría.
5. **usuarios:** nombre de usuario, edad, país, plataforma principal, juegos favoritos, fecha de registro y estado de la cuenta.

Cada colección contiene 10 documentos: 50 documentos en total.

## Tipos de datos utilizados
- `String`: nombres, países, categorías y descripciones.
- `Number`: edades, precios, años, empleados y popularidad.
- `Boolean`: disponibilidad, multijugador y estado activo.
- `Date`: fechas de lanzamiento y registro mediante `ISODate()`.
- `Array`: plataformas compatibles y juegos favoritos.
- `ObjectId`: identificadores y referencias entre documentos.

Las propiedades `desarrolladorId`, `generoId`, `plataformas` y `plataformaPrincipal` almacenan referencias `ObjectId` a documentos de las colecciones relacionadas.

## Consultas y propósito

### Colección videojuegos
1. **Precio inferior a 40 USD:** utiliza `$lt` para encontrar videojuegos económicos.
2. **Lanzamiento posterior al 1 de enero de 2020:** utiliza `$gt` y `ISODate()` para recuperar juegos recientes.

### Colección desarrolladores
3. **Desarrolladores de Japón:** filtra las empresas por el campo `pais`.
4. **Fundados después del año 2000:** utiliza `$gt` para identificar desarrolladores más recientes.

### Colección plataformas
5. **Plataformas de Sony:** filtra por el fabricante.
6. **Plataformas lanzadas desde 2020:** utiliza `$gte` para incluir las plataformas de ese año y posteriores.

### Colección generos
7. **Géneros relacionados con aventura:** utiliza una expresión regular para buscar la palabra "Aventura" en la categoría.
8. **Popularidad superior a 80:** utiliza `$gt` y ordena los resultados de mayor a menor popularidad.

### Colección usuarios
9. **Usuarios mayores de 18 años:** utiliza `$gt` para filtrar por edad.
10. **Usuarios cuya plataforma principal es PC:** filtra por el `ObjectId` correspondiente a PC.

## Cómo ejecutar el proyecto

1. Instalar MongoDB Community Server y MongoDB Shell (`mongosh`), o tener acceso a una instancia de MongoDB.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar la carga inicial:

   ```bash
   mongosh
   ```

   Dentro de `mongosh`, ejecutar:

   ```javascript
   load("database.js")
   ```

4. Ejecutar las consultas por separado. Por ejemplo:

   ```javascript
   load("consultas/videojuegos.js")
   ```

   Repetir con los otros cuatro archivos de la carpeta `consultas`.

5. Verificar las cantidades:

   ```javascript
   use("gamezone_db")
   db.videojuegos.countDocuments()
   db.desarrolladores.countDocuments()
   db.plataformas.countDocuments()
   db.generos.countDocuments()
   db.usuarios.countDocuments()
   ```

**Importante:** `database.js` utiliza identificadores fijos y `insertMany()`. Está pensado para una primera ejecución sobre colecciones vacías. Si lo ejecutas nuevamente, MongoDB puede mostrar errores de clave duplicada. No lo vuelvas a cargar sin limpiar previamente los datos o preparar una carga de actualización.

## Evidencias
Guarda en la carpeta `evidencias/` capturas reales de:
- Creación de las cinco colecciones.
- Inserción de los 50 documentos y conteo de cada colección.
- Ejecución de las dos consultas de cada colección (10 resultados de consulta).

No se incluyen capturas ficticias: las evidencias deben obtenerse ejecutando el proyecto en tu equipo.
