import db from '../config/db.js'

export const obtenerUbicaciones = async () => {

  const [rows] = await db.query(
    `SELECT id, descripcion, imagen_nombre, url, latitud, longitud
     FROM ubicaciones`
  );
//no se
  return rows;
};
