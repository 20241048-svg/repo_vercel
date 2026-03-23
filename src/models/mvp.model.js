import db from '../config/db.js'

// Obtener Misión, Visión e Info
export const obtenerMisVis = async () => {
  const [rows] = await db.query(
    `SELECT id, mision, vision, info 
     FROM mision_vision 
     LIMIT 1`
  );
  return rows[0]; 
};

// Actualizar los 3 campos
export const actualizarMisVis = async (data) => {
  // Extraemos lo que viene del JS
  const { mision, vision, info } = data;

  const [result] = await db.query(
    `UPDATE mision_vision 
     SET mision = ?, vision = ?, info = ? 
     WHERE id = 1`,
    [mision, vision, info]
  );

  return result.affectedRows > 0;
};