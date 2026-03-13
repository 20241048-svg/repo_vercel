import * as ubicacionesModelo from "../models/ubi.model.js";


export const obtenerUbicaciones = async (req, res) => {
  try {

    const resultado = await ubicacionesModelo.obtenerUbicaciones();

    res.status(200).json({
      message: "Ubicaciones obtenidas correctamente",
      total: resultado.length,
      data: resultado
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


