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


export const crearUbicacion = async (req, res) => {
  try {

    const { descripcion, imagen_nombre, url } = req.body;

    if (
      descripcion === undefined ||
      imagen_nombre=== undefined ||
      url === undefined
    ) {
      return res.status(400).json({
        message: "Descripcion, imagen_nombre y url son obligatorios"
      });
    }

    const resultado = await ubicacionesModelo.crearUbicacion({
    descripcion, 
    imagen_nombre, 
    url

    });

    res.status(201).json({
      message: "Ubicación creada correctamente",
      data: resultado
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const borrarUbicacion = async (req, res) => {
  try {

    const { id } = req.params;

    const resultado = await ubicacionesModelo.eliminarUbicacion(id);

    if (resultado.affectedRows === 0) {
      return res.status(404).json({
        message: "Ubicación no encontrada"
      });
    }

    res.json({
      message: "Ubicación eliminada correctamente",
      data: resultado
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};