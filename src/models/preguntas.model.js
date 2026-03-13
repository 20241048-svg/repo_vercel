import db from '../config/db.js'

export const obtenerPreguntas = async () => {

  const [rows] = await db.query(
    `SELECT id, pregunta, respuesta
     FROM preguntas_frecuentes`
  );

  return rows;
};
