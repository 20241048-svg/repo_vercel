import * as asistenciasModelo from "../models/conEmpleados.model.js";
import * as validar from '../utils/validaciones.js';

export const reporteEmpleado = async (req, res) => {
  try {
    const { id, inicio, fin } = req.query;

    // Validación del ID del empleado
    if (!id || !validar.esEnteroPositivo(id)) {
      return res.status(400).json({
        message: "El parámetro 'id' debe ser un número entero positivo",
      });
    }

    // Validación de fechas obligatorias
    if (!inicio || !fin) {
      return res.status(400).json({
        message: "Los parámetros 'inicio' y 'fin' son obligatorios (formato YYYY-MM-DD)",
      });
    }

    // Validación básica de formato de fechas
    const fechaRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!fechaRegex.test(inicio) || !fechaRegex.test(fin)) {
      return res.status(400).json({
        message: "Formato de fecha inválido. Usa YYYY-MM-DD",
      });
    }

    // Validación lógica: inicio no mayor que fin
    if (new Date(inicio) > new Date(fin)) {
      return res.status(400).json({
        message: "La fecha de inicio no puede ser mayor a la fecha fin",
      });
    }

    // Llamada al modelo (stored procedure)
    const reporte = await asistenciasModelo.reporteEmpleado(id, inicio, fin);

    // Respuesta consistente con tu estilo (como obtenerEmpleados, obtenerDepartamentos, etc.)
    res.status(200).json({
      message: reporte.length > 0 
        ? "Reporte por empleado obtenido correctamente" 
        : "No se encontraron registros en el rango de fechas seleccionado",
      id: Number(id),
      inicio,
      fin,
      total: reporte.length,
      data: reporte
    });

  } catch (error) {
    console.error("Error en reporteEmpleado:", error); // ← Crucial para ver el error en logs de Vercel
    res.status(500).json({
      message: "Error al generar el reporte del empleado",
      error: error.message
    });
  }
};