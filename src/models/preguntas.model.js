import db from '../config/db.js'

export const obtenerPreguntas = async () => {

  const [rows] = await db.query(
    `SELECT id, pregunta, respuesta
     FROM preguntas_frecuentes`
  );

  return rows;
};


export const crearPregunta = async ({ pregunta, respuesta }) => {

  const [result] = await db.query(
    `INSERT INTO preguntas_frecuentes (pregunta, respuesta)
     VALUES (?, ?)`,
    [pregunta, respuesta]
  );

  return {
    id: result.insertId,
    pregunta,
    respuesta
  };
};


export const actualizarPregunta = async ({ id, pregunta, respuesta }) => {

  const [result] = await db.query(
    `UPDATE preguntas_frecuentes
     SET pregunta = ?, respuesta = ?
     WHERE id = ?`,
    [pregunta, respuesta, id]
  );

  return {
    id,
    pregunta,
    respuesta,
    affectedRows: result.affectedRows
  };
};


export const eliminarPregunta = async (id) => {

  const [result] = await db.query(
    `DELETE FROM preguntas_frecuentes WHERE id_pregunta = ?`,
    [id]
  );

  return {
    id: id,
    affectedRows: result.affectedRows
  };
};