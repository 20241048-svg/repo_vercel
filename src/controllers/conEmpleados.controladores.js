import * as asistenciasModelo from "../models/conEmpleados.model.js";
import * as validar from '../utils/validaciones.js';

export const reporteEmpleado = async (req, res) => {
  try {

    const { idEmpleado } = req.params;
    const { inicio, fin } = req.query;

    if (!idEmpleado || !validar.esEnteroPositivo(idEmpleado)) {
      return res.status(400).json({
        message: "El parámetro 'idEmpleado' debe ser un número entero positivo",
      });
    }

    if (!inicio || !fin) {
      return res.status(400).json({
        message: "Los parámetros 'inicio' y 'fin' son obligatorios (YYYY-MM-DD)",
      });
    }

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

    const reporte = await asistenciasModelo.reporteEmpleado(
      idEmpleado,
      inicio,
      fin
    );

    res.status(200).json({
      message:
        reporte.length > 0
          ? "Reporte por empleado obtenido correctamente"
          : "No se encontraron registros en el rango seleccionado",
      idEmpleado: Number(idEmpleado),
      inicio,
      fin,
      total: reporte.length,
      data: reporte
    });

  } catch (error) {
    console.error("Error en reporteEmpleado:", error);

    res.status(500).json({
      message: "Error al generar el reporte del empleado",
      error: error.message
    });
  }
};