import * as preguntasModelo from "../models/preguntas.model.js";


export const obtenerPreguntas = async (req, res) => {
  try {

    const resultado = await preguntasModelo.obtenerPreguntas();

    res.status(200).json({
      message: "Preguntas frecuentes obtenidas correctamente",
      total: resultado.length,
      data: resultado,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const crearPregunta = async (req, res) => {
  try {

    const { pregunta, respuesta } = req.body;

    if (
      pregunta === undefined ||
      respuesta === undefined
    ) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios",
      });
    }

    const resultado = await preguntasModelo.crearPregunta({
      pregunta,
      respuesta
    });

    res.status(201).json({
      message: "Pregunta creada correctamente",
      data: resultado,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const actualizarPregunta = async (req, res) => {
  try {

    const { id } = req.params;
    const { pregunta, respuesta } = req.body;

    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return res.status(400).json({
        message: "El id de la pregunta debe ser un número válido"
      });
    }

    if (
      pregunta === undefined ||
      respuesta === undefined
    ) {
      return res.status(400).json({
        message: "Todos los campos son obligatorios"
      });
    }

    const resultado = await preguntasModelo.actualizarPregunta({
      id_pregunta: idNum,
      pregunta,
      respuesta
    });

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        message: "Pregunta no encontrada"
      });
    }

    res.json({
      message: "Pregunta actualizada correctamente",
      data: resultado
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


export const borrarPregunta = async (req, res) => {
  try {

    const { id } = req.params;

    const idNum = Number(id);

    if (!Number.isInteger(idNum) || idNum <= 0) {
      return res.status(400).json({
        message: "El id de la pregunta debe ser un número válido"
      });
    }

    const resultado = await preguntasModelo.eliminarPregunta(idNum);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        message: "Pregunta no encontrada"
      });
    }

    res.json({
      message: "Pregunta eliminada correctamente",
      data: resultado
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};