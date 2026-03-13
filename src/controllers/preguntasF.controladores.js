import * as preguntasModelo from "../models/preguntas.model.js";
//comit

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