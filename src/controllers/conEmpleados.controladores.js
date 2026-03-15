import * as asistenciasModelo from "../models/asistencias.model.js";

export const obtenerReportePorEmpleado = async (req, res) => {
  try {
    const { idEmpleado } = req.params;
    const { inicio, fin } = req.query;

    const idNum = Number(idEmpleado);

    // Validaciones
    if (!Number.isInteger(idNum) || idNum <= 0) {
      return res.status(400).json({
        message: "El ID del empleado debe ser un número válido positivo",
      });
    }

    if (!inicio || !fin) {
      return res.status(400).json({
        message: "Las fechas de inicio y fin son obligatorias (formato YYYY-MM-DD)",
      });
    }

    // Validación básica de formato de fechas (puedes mejorarla con librerías como date-fns si quieres)
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(inicio) || !fechaRegex.test(fin)) {
      return res.status(400).json({
        message: "Formato de fecha inválido. Usa YYYY-MM-DD",
      });
    }

    if (new Date(inicio) > new Date(fin)) {
      return res.status(400).json({
        message: "La fecha de inicio no puede ser mayor a la fecha fin",
      });
    }

    // Llamada al modelo
    const resultado = await asistenciasModelo.obtenerAsistenciasPorEmpleadoRango({
      idEmpleado: idNum,
      fechaInicio: inicio,
      fechaFin: fin,
    });

    res.status(200).json({
      message: resultado.length > 0 
        ? "Reporte de asistencias obtenido correctamente" 
        : "No se encontraron registros en el rango seleccionado",
      total: resultado.length,
      data: resultado,
    });

  } catch (error) {
    console.error("Error al obtener reporte por empleado:", error);
    res.status(500).json({ 
      message: "Error interno del servidor al generar el reporte",
      error: error.message 
    });
  }
};