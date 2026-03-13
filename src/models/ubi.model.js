import db from '../config/db.js'

export const obtenerUbicaciones = async () => {

  const [rows] = await db.query(
    `SELECT id, descripcion, imagen_nombre, url
     FROM ubicaciones`
  );

  return rows;
};
