import db from '../config/db.js'

export const obtenerUbicaciones = async () => {

  const [rows] = await db.query(
    `SELECT id, descripcion, imagen_nombre, url
     FROM ubicaciones`
  );

  return rows;
};


export const crearUbicacion = async ({descripcion, imagen_nombre, url}) => {

  const [result] = await db.query(
    `INSERT INTO ubicaciones (descripcion, imagen_nombre, url)
     VALUES (?, ?, ?, ?, ?)`,
    [descripcion, imagen_nombre,url]
  );

  return {
    id: result.insertId,
    descripcion,
    imagen_nombre,
    url
  
  };
};


export const eliminarUbicacion = async (id) => {

  const [result] = await db.query(
    `DELETE FROM ubicaciones WHERE id_ubicacion = ?`,
    [id]
  );

  return {
    id: id,
    affectedRows: result.affectedRows
  };
};